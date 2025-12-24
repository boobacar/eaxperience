import { Link, useParams } from "react-router-dom"
import SectionHeader from "../components/SectionHeader"
import CTAButton from "../components/CTAButton"
import { blogPosts } from "../data/content"

const BulletList = ({ items }) => (
  <ul className="space-y-2 text-sm text-white/80">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2">
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="section-shell py-16 text-center">
        <p className="text-white/70">Post not found.</p>
        <CTAButton to="/resources/blog" className="mt-4">
          Back to blog
        </CTAButton>
      </div>
    )
  }

  return (
    <div className="space-y-10 pb-12">
      <section className="section-shell space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link to="/resources/blog" className="text-sm font-semibold text-brand-orange hover:text-white">
            ← Back to blogs
          </Link>
          <div className="text-xs uppercase tracking-[0.25em] text-white/50">
            {post.date} • {post.readingTime}
          </div>
        </div>

        <SectionHeader eyebrow="Blog" title={post.title} subtitle={post.excerpt} />

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-card">
          <div className="relative aspect-[16/7] bg-white/5">
            <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,0.9fr)]">
          <article className="glass-panel rounded-3xl border border-white/10 p-7 md:p-10 space-y-8">
            {post.sections.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="font-display text-2xl text-white">{section.heading}</h2>
                <div className="space-y-3 text-sm leading-relaxed text-white/80">
                  {section.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                {section.bullets && <BulletList items={section.bullets} />}
              </div>
            ))}
          </article>

          <aside className="space-y-6">
            <div className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-orange">Work with us</p>
              <p className="mt-2 text-sm text-white/80">
                Want a plan that fits your body, sport, and lifestyle? Book an assessment and we’ll map the next 30 days.
              </p>
              <div className="mt-4">
                <CTAButton to="/contact" className="w-full">
                  Book a session
                </CTAButton>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-orange">Next reads</p>
              <div className="mt-3 space-y-3 text-sm">
                {blogPosts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      to={`/resources/blog/${p.slug}`}
                      className="block rounded-2xl bg-white/5 p-4 text-white/80 hover:bg-white/10"
                    >
                      <p className="font-semibold text-white">{p.title}</p>
                      <p className="text-xs text-white/60">{p.readingTime}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

