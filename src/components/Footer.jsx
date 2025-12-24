import { Link } from "react-router-dom"

const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9A4.75 4.75 0 0 1 16.5 21.25h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M12 8.1a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M17.25 6.95h.01"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
)

const IconTikTok = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M14 3v11.2a4.8 4.8 0 1 1-4-4.73"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M14 3c.7 3.3 2.8 5.2 6 5.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
)

const IconYouTube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M21.25 12c0-2.53-.2-4.1-.56-5.06a3.1 3.1 0 0 0-1.83-1.83C17.9 4.75 16.33 4.75 12 4.75s-5.9 0-6.86.36a3.1 3.1 0 0 0-1.83 1.83c-.36.96-.56 2.53-.56 5.06s.2 4.1.56 5.06a3.1 3.1 0 0 0 1.83 1.83c.96.36 2.53.36 6.86.36s5.9 0 6.86-.36a3.1 3.1 0 0 0 1.83-1.83c.36-.96.56-2.53.56-5.06Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M10.2 9.6v4.8L14.8 12l-4.6-2.4Z"
      fill="currentColor"
    />
  </svg>
)

const socials = [
  { label: "Instagram", href: "#", Icon: IconInstagram },
  { label: "TikTok", href: "#", Icon: IconTikTok },
  { label: "YouTube", href: "#", Icon: IconYouTube },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-gradient-to-b from-transparent via-[#0a0d14] to-[#05070c]">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-4">
        <div className="space-y-3">
          <Link to="/" className="text-white">
            <div className="inline-flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand-orange/20 ring-2 ring-brand-orange/40 flex items-center justify-center font-display text-xl tracking-widest">
                EAX
              </div>
              <div className="text-left">
                <div className="font-display text-xl">EAXperience</div>
                <div className="text-xs uppercase tracking-[0.2em] text-brand-orange/80">Coaching Lab</div>
              </div>
            </div>
          </Link>
          <p className="text-sm text-white/70">
            High-touch coaching, rehab, and performance design built for athletes and humans who demand
            more from their training.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">Visit & contact</h4>
          <div className="mt-3 space-y-1 text-sm text-white/80">
            <p>Hours: 8am–7pm (Mon–Fri)</p>
            <p>New York City</p>
            <p>Email: theeaxperience@gmail.com</p>
            <p>Phone: 718-578-2763</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">Explore</h4>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/80">
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <Link to="/events" className="hover:text-white">
              Events
            </Link>
            <Link to="/resources/blog" className="hover:text-white">
              Blog
            </Link>
            <Link to="/partner" className="hover:text-white">
              Partner
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">Newsletter</h4>
          <p className="text-sm text-white/70">
            Get program drops, event invites, and training notes. We keep it tight and actionable.
          </p>
          <div className="flex items-center gap-2 rounded-2xl bg-white/5 p-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent px-3 py-2 text-sm text-white outline-none"
            />
            <button className="rounded-xl bg-brand-orange px-4 py-2 text-xs font-semibold text-black">
              Join
            </button>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-brand-orange hover:text-black transition"
                aria-label={social.label}
              >
                <social.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs uppercase tracking-[0.2em] text-white/40">
        © 2025 EAXperience. Built for transformation.
      </div>
    </footer>
  )
}
