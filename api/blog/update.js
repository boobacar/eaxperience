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

const deleteGithubFile = async ({ path, message, branch, sha }) => {
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
    const staticPath = "public/data/blog-posts-static.json";
    const hiddenPath = "public/data/blog-posts-hidden.json";

    const [postsFile, staticFile, hiddenFile] = await Promise.all([
      getFile(postsPath, branch),
      getFile(staticPath, branch),
      getFile(hiddenPath, branch),
    ]);

    const dynamicPosts = postsFile?.content ? decodeBase64Json(postsFile.content) : [];
    const staticPosts = staticFile?.content ? decodeBase64Json(staticFile.content) : [];
    const hiddenSlugs = hiddenFile?.content ? decodeBase64Json(hiddenFile.content) : [];

    const isDynamic = dynamicPosts.some((p) => p.slug === slug);
    const staticPost = staticPosts.find((p) => p.slug === slug);
    const isStatic = !!staticPost && !isDynamic;

    if (!isDynamic && !isStatic) return json(res, 404, { error: "Post not found" });

    let cover = isDynamic
      ? dynamicPosts.find((p) => p.slug === slug)?.cover
      : staticPost?.cover || null;

    // Upload new image if provided
    if (imageBase64) {
      const safeExt = String(imageExt || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
      const imagePath = `public/uploads/blog/${slug}.${safeExt}`;
      await upsertFile({
        path: imagePath,
        content: imageBase64,
        message: `feat(blog): update cover image for ${slug}`,
        branch,
      });
      const newCover = `/uploads/blog/${slug}.${safeExt}`;

      // Delete old cover if different and was a dynamic upload
      if (cover && cover !== newCover && cover.startsWith("/uploads/blog/")) {
        const oldFile = await getFile(`public${cover}`, branch);
        if (oldFile?.sha) {
          await deleteGithubFile({
            path: `public${cover}`,
            message: `feat(blog): remove old cover for ${slug}`,
            branch,
            sha: oldFile.sha,
          }).catch(() => {});
        }
      }
      cover = newCover;
    }

    const updatedPost = {
      slug,
      date: isDynamic
        ? dynamicPosts.find((p) => p.slug === slug)?.date
        : staticPost?.date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      title,
      author: "EAXperience Team",
      excerpt: text.slice(0, 180) + (text.length > 180 ? "..." : ""),
      cover: cover || null,
      tags: Array.isArray(tags) && tags.length ? tags.slice(0, 5) : (isDynamic ? dynamicPosts.find((p) => p.slug === slug)?.tags : staticPost?.tags) || ["Blog"],
      readingTime: estimateReadingTime(text),
      sections: [
        {
          heading: "",
          body: text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean),
        },
      ],
    };

    let nextPosts;
    if (isDynamic) {
      // Replace existing dynamic post
      nextPosts = dynamicPosts.map((p) => (p.slug === slug ? updatedPost : p));
    } else {
      // Promote static post to dynamic (override)
      nextPosts = [updatedPost, ...dynamicPosts];
      // Also hide the static version so it doesn't appear twice
      if (!hiddenSlugs.includes(slug)) {
        const nextHidden = [...hiddenSlugs, slug];
        await upsertFile({
          path: hiddenPath,
          content: Buffer.from(JSON.stringify(nextHidden, null, 2), "utf8").toString("base64"),
          message: `feat(blog): hide static post ${slug} (promoted to dynamic)`,
          branch,
          sha: hiddenFile?.sha,
        });
      }
    }

    await upsertFile({
      path: postsPath,
      content: Buffer.from(JSON.stringify(nextPosts, null, 2), "utf8").toString("base64"),
      message: `feat(blog): update post ${slug}`,
      branch,
      sha: postsFile?.sha,
    });

    return json(res, 200, { ok: true, slug });
  } catch (error) {
    return json(res, 500, { error: error.message });
  }
}
