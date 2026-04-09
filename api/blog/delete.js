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
  if (req.method !== "DELETE") return json(res, 405, { error: "Method not allowed" });

  const password = req.headers["x-admin-password"];
  if (!process.env.ADMIN_BLOG_PASSWORD || password !== process.env.ADMIN_BLOG_PASSWORD) {
    return json(res, 401, { error: "Unauthorized" });
  }

  try {
    const { slug } = req.body || {};
    if (!slug) return json(res, 400, { error: "slug is required" });

    const branch = process.env.GITHUB_BRANCH || "master";
    const postsPath = "public/data/blog-posts.json";

    const existing = await getFile(postsPath, branch);
    if (!existing) return json(res, 404, { error: "blog-posts.json not found" });

    const posts = decodeBase64Json(existing.content);
    const post = posts.find((p) => p.slug === slug);
    if (!post) return json(res, 404, { error: "Post not found" });

    // Delete cover image if it's in uploads/blog/
    if (post.cover && post.cover.startsWith("/uploads/blog/")) {
      const imagePath = `public${post.cover}`;
      const imageFile = await getFile(imagePath, branch);
      if (imageFile?.sha) {
        await deleteFile({
          path: imagePath,
          message: `feat(blog): remove cover image for ${slug}`,
          branch,
          sha: imageFile.sha,
        }).catch(() => {}); // non-blocking
      }
    }

    // Remove post from array
    const nextPosts = posts.filter((p) => p.slug !== slug);
    const postsContent = Buffer.from(JSON.stringify(nextPosts, null, 2), "utf8").toString("base64");

    await upsertFile({
      path: postsPath,
      content: postsContent,
      message: `feat(blog): delete post ${slug}`,
      branch,
      sha: existing.sha,
    });

    return json(res, 200, { ok: true, slug });
  } catch (error) {
    return json(res, 500, { error: error.message });
  }
}
