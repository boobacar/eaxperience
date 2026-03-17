const GITHUB_API = "https://api.github.com";

const json = (res, status, payload) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

const toSlug = (value = "") =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 80);

const estimateReadingTime = (text = "") => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
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

const getFile = async (path, branch) => {
  try {
    const data = await githubRequest(`/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}?ref=${encodeURIComponent(branch)}`);
    return data;
  } catch (error) {
    if (String(error.message).includes(" 404 ")) return null;
    throw error;
  }
};

const upsertFile = async ({ path, content, message, branch, sha }) => {
  return githubRequest(`/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}`, "PUT", {
    message,
    content,
    branch,
    sha,
  });
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Method not allowed" });
  }

  try {
    const password = req.headers["x-admin-password"];
    if (!process.env.ADMIN_BLOG_PASSWORD || password !== process.env.ADMIN_BLOG_PASSWORD) {
      return json(res, 401, { error: "Unauthorized" });
    }

    const { title, text, imageBase64, imageExt = "jpg", tags = [] } = req.body || {};
    if (!title || !text || !imageBase64) {
      return json(res, 400, { error: "title, text and image are required" });
    }

    const branch = process.env.GITHUB_BRANCH || "main";
    const slugBase = toSlug(title);
    const slug = `${slugBase}-${Date.now().toString().slice(-6)}`;
    const safeExt = String(imageExt).toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
    const imagePath = `public/uploads/blog/${slug}.${safeExt}`;

    const imageResult = await upsertFile({
      path: imagePath,
      content: imageBase64,
      message: `feat(blog): add cover image for ${slug}`,
      branch,
    });

    const postsPath = "public/data/blog-posts.json";
    const existing = await getFile(postsPath, branch);
    const currentPosts = existing?.content ? decodeBase64Json(existing.content) : [];

    const newPost = {
      slug,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      title,
      author: "EAXperience Team",
      excerpt: text.slice(0, 180) + (text.length > 180 ? "..." : ""),
      cover: `/uploads/blog/${slug}.${safeExt}`,
      tags: Array.isArray(tags) && tags.length ? tags.slice(0, 5) : ["Blog"],
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

    const nextPosts = [newPost, ...currentPosts];
    const postsContent = Buffer.from(JSON.stringify(nextPosts, null, 2), "utf8").toString("base64");

    await upsertFile({
      path: postsPath,
      content: postsContent,
      message: `feat(blog): publish ${slug}`,
      branch,
      sha: existing?.sha,
    });

    return json(res, 200, {
      ok: true,
      slug,
      url: `/resources/blog/${slug}`,
      imageCommit: imageResult?.commit?.sha,
    });
  } catch (error) {
    return json(res, 500, { error: error.message || "Unexpected error" });
  }
}
