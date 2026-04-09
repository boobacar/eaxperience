import { blogPosts as staticPosts } from "./content";

export async function loadBlogPosts() {
  try {
    const [dynamicRes, hiddenRes] = await Promise.all([
      fetch("/data/blog-posts.json", { cache: "no-store" }),
      fetch("/data/blog-posts-hidden.json", { cache: "no-store" }),
    ]);

    const dynamicPosts = dynamicRes.ok ? await dynamicRes.json() : [];
    const hiddenSlugs = new Set(hiddenRes.ok ? await hiddenRes.json() : []);

    if (!Array.isArray(dynamicPosts)) return staticPosts;

    const dynamicSlugs = new Set(dynamicPosts.map((p) => p.slug));

    // Dynamic posts first, then static posts not overridden or hidden
    const merged = [
      ...dynamicPosts.filter((p) => !hiddenSlugs.has(p.slug)),
      ...staticPosts.filter((p) => !dynamicSlugs.has(p.slug) && !hiddenSlugs.has(p.slug)),
    ];

    return merged.map((post) => ({
      ...post,
      author: post.author || "EAXperience Team",
      tags: Array.isArray(post.tags) ? post.tags : ["Blog"],
      sections: Array.isArray(post.sections) ? post.sections : [],
      cover: post.cover,
      readingTime: post.readingTime || "5 min read",
      excerpt: post.excerpt || "",
      date: post.date || "",
      slug: post.slug,
      title: post.title,
    }));
  } catch {
    return staticPosts.map((post) => ({ ...post, author: post.author || "EAXperience Team" }));
  }
}
