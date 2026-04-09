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

export default async function handler(req, res) {
  if (req.method !== "GET") return json(res, 405, { error: "Method not allowed" });

  const password = req.headers["x-admin-password"];
  if (!process.env.ADMIN_BLOG_PASSWORD || password !== process.env.ADMIN_BLOG_PASSWORD) {
    return json(res, 401, { error: "Unauthorized" });
  }

  try {
    const branch = process.env.GITHUB_BRANCH || "master";

    // Dynamic posts (published via admin)
    const dynamicFile = await getFile("public/data/blog-posts.json", branch);
    const dynamicPosts = dynamicFile?.content ? decodeBase64Json(dynamicFile.content) : [];

    // Static posts (hardcoded in content.js — mirrored here as JSON for API use)
    const staticFile = await getFile("public/data/blog-posts-static.json", branch);
    const staticPosts = staticFile?.content ? decodeBase64Json(staticFile.content) : [];

    // Merge: dynamic first, then static posts not already overridden
    const dynamicSlugs = new Set(dynamicPosts.map((p) => p.slug));
    const merged = [
      ...dynamicPosts,
      ...staticPosts.filter((p) => !dynamicSlugs.has(p.slug)),
    ];

    return json(res, 200, { posts: merged });
  } catch (error) {
    return json(res, 500, { error: error.message });
  }
}
