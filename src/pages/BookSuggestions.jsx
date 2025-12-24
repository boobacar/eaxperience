import SectionHeader from "../components/SectionHeader"

import book1Img from "../assets/book-1.png"
import book2Img from "../assets/book-2.png"
import book3Img from "../assets/book-3.png"

const books = [
  {
    title: "Extreme Ownership",
    author: "Jocko Willink & Leif Babin",
    href: "https://www.audible.com/pd/Extreme-Ownership-Audiobook/B015TVHUA2?source_code=ASSGB149080119000H&share_location=pdp",
    image: book1Img,
  },
  {
    title: "Scaling Up",
    author: "Verne Harnish",
    href: "https://www.audible.com/pd/Scaling-Up-Audiobook/B00PKHUL2U?source_code=ASSGB149080119000H&share_location=pdp",
    image: book2Img,
  },
  {
    title: "Blue Ocean Strategy (Expanded Edition)",
    author: "W. Chan Kim & Renée Mauborgne",
    href: "https://www.audible.com/pd/Blue-Ocean-Strategy-Expanded-Edition-Audiobook/1469080966?source_code=ASSGB149080119000H&share_location=pdp",
    image: book3Img,
  },
]

export default function BookSuggestions() {
  return (
    <div className="space-y-10 pb-12">
      <section className="section-shell space-y-6">
        <SectionHeader eyebrow="Resources" title="Book suggestions" align="center" />

        <div className="grid gap-6 lg:grid-cols-3">
          {books.map((book) => (
            <a
              key={book.href}
              href={book.href}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 shadow-card transition hover:-translate-y-1 hover:border-brand-orange/40"
            >
              <div className="p-6 space-y-4">
                <div className="overflow-hidden border rounded-xl border-white/10 bg-white/5">
                  <div className="relative aspect-[4/5]">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03] transform-gpu will-change-transform [backface-visibility:hidden]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090f]/70 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-2xl text-white leading-snug">{book.title}</h3>
                  <p className="text-sm text-white/70">{book.author}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange group-hover:text-white">
                  Open on Audible <span>↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
