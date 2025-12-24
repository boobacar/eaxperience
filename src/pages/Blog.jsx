import { Link } from "react-router-dom"
import SectionHeader from "../components/SectionHeader"
import { blogPosts } from "../data/content"

export default function Blog() {
  return (
    <div className="space-y-10 pb-12">
      <section className="section-shell space-y-8">
        <SectionHeader eyebrow="Resources" title="Blogs" align="center" />
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/resources/blog/${post.slug}`}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 shadow-card transition hover:-translate-y-1 hover:border-brand-orange/40 transform-gpu will-change-transform"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#07090f]">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] transform-gpu will-change-transform [backface-visibility:hidden]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/60">
                  <span>{post.date}</span>
                  <span className="text-brand-orange/90">{post.readingTime}</span>
                </div>
                <h3 className="font-display text-2xl text-white leading-snug">{post.title}</h3>
                <p className="text-sm text-white/70">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
