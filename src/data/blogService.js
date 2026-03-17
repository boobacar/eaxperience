import { blogPosts as staticPosts } from "./content";

export async function loadBlogPosts() {
  try {
    const response = await fetch("/data/blog-posts.json", { cache: "no-store" });
    if (!response.ok) return staticPosts;

    const dynamicPosts = await response.json();
    if (!Array.isArray(dynamicPosts)) return staticPosts;

    const merged = [...dynamicPosts];

    staticPosts.forEach((post) => {
      if (!dynamicPosts.find((item) => item.slug === post.slug)) {
        merged.push(post);
      }
    });

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
