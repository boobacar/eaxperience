const GITHUB_API = "https://api.github.com";

const json = (res, status, payload) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

const decodeBase64Json = (content = "") => {
  const decoded = Buffer.from(content, "base64").toString("utf8");
  return JSON.parse(decoded);
};

const estimateReadingTime = (text = "") => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

const githubRequest = async (path, method = "GET", body) => {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("Missing GITHUB_TOKEN");
  const owner = process.env.GITHUB_OWNER || "boobacar";
  const repo = process.env.GITHUB_REPO || "eaxperience";
  const response = await fetch(`${GITHUB_API}/repos/${owner}/${repo}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "eaxperience-blog-publisher",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`GitHub API ${method} ${path} failed: ${response.status} ${errText}`);
  }
  return response.json();
};

const getFile = async (filePath, branch) => {
  try {
    const data = await githubRequest(
      `/contents/${encodeURIComponent(filePath).replace(/%2F/g, "/")}?ref=${encodeURIComponent(branch)}`
    );
    return data;
  } catch (error) {
    if (String(error.message).includes(" 404 ")) return null;
    throw error;
  }
};

const upsertFile = async ({ path, content, message, branch, sha }) => {
  return githubRequest(
    `/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}`,
    "PUT",
    { message, content, branch, sha }
  );
};

const deleteFile = async ({ path, message, branch, sha }) => {
  return githubRequest(
    `/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}`,
    "DELETE",
    { message, branch, sha }
  );
};

export default async function handler(req, res) {
  if (req.method !== "PUT") return json(res, 405, { error: "Method not allowed" });

  const password = req.headers["x-admin-password"];
  if (!process.env.ADMIN_BLOG_PASSWORD || password !== process.env.ADMIN_BLOG_PASSWORD) {
    return json(res, 401, { error: "Unauthorized" });
  }

  try {
    const { slug, title, text, tags, imageBase64, imageExt } = req.body || {};
    if (!slug || !title || !text) return json(res, 400, { error: "slug, title and text are required" });

    const branch = process.env.GITHUB_BRANCH || "master";
    const postsPath = "public/data/blog-posts.json";

    const existing = await getFile(postsPath, branch);
    if (!existing) return json(res, 404, { error: "blog-posts.json not found" });

    const posts = decodeBase64Json(existing.content);
    const idx = posts.findIndex((p) => p.slug === slug);
    if (idx === -1) return json(res, 404, { error: "Post not found" });

    const oldPost = posts[idx];
    let cover = oldPost.cover;

    // If new image provided, upload it and delete old one
    if (imageBase64) {
      const safeExt = String(imageExt || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
      const imagePath = `public/uploads/blog/${slug}.${safeExt}`;

      await upsertFile({
        path: imagePath,
        content: imageBase64,
        message: `feat(blog): update cover image for ${slug}`,
        branch,
      });

      cover = `/uploads/blog/${slug}.${safeExt}`;

      // Delete old image if different path
      if (oldPost.cover && oldPost.cover !== cover && oldPost.cover.startsWith("/uploads/blog/")) {
        const oldImagePath = `public${oldPost.cover}`;
        const oldImageFile = await getFile(oldImagePath, branch);
        if (oldImageFile?.sha) {
          await deleteFile({
            path: oldImagePath,
            message: `feat(blog): remove old cover for ${slug}`,
            branch,
            sha: oldImageFile.sha,
          }).catch(() => {});
        }
      }
    }

    const updatedPost = {
      ...oldPost,
      title,
      cover,
      excerpt: text.slice(0, 180) + (text.length > 180 ? "..." : ""),
      tags: Array.isArray(tags) && tags.length ? tags.slice(0, 5) : oldPost.tags,
      readingTime: estimateReadingTime(text),
      sections: [
        {
          heading: "",
          body: text
            .split(/\n\n+/)
            .map((p) => p.trim())
            .filter(Boolean),
        },
      ],
    };

    posts[idx] = updatedPost;
    const postsContent = Buffer.from(JSON.stringify(posts, null, 2), "utf8").toString("base64");

    await upsertFile({
      path: postsPath,
      content: postsContent,
      message: `feat(blog): update post ${slug}`,
      branch,
      sha: existing.sha,
    });

    return json(res, 200, { ok: true, slug });
  } catch (error) {
    return json(res, 500, { error: error.message });
  }
}
