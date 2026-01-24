import { Link } from "react-router-dom";
import { useState } from "react";

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
);

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
);

const IconYouTube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M21.25 12c0-2.53-.2-4.1-.56-5.06a3.1 3.1 0 0 0-1.83-1.83C17.9 4.75 16.33 4.75 12 4.75s-5.9 0-6.86.36a3.1 3.1 0 0 0-1.83 1.83c-.36.96-.56 2.53-.56 5.06s.2 4.1.56 5.06a3.1 3.1 0 0 0 1.83 1.83c.96.36 2.53.36 6.86.36s5.9 0 6.86-.36a3.1 3.1 0 0 0 1.83-1.83c.36-.96.56-2.53.56-5.06Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M10.2 9.6v4.8L14.8 12l-4.6-2.4Z" fill="currentColor" />
  </svg>
);

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/theeaxperience?igsh=amljZHdvM3N5OTk2&utm_source=qr",
    Icon: IconInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@theeaxperience?_r=1&_t=ZP-92ip2aUF7fj",
    Icon: IconTikTok,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@theeaxperience?si=kgZgZULm6F-S40TU",
    Icon: IconYouTube,
  },
];

const IconCode = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M16 18l6-6-6-6M8 6l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6l-10 7L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconGlobe = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconX = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignatureModalOpen, setSignatureModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email_address");

    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://app.kit.com/forms/8986153/subscriptions",
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong");
    }
  };

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
                <div className="text-xs uppercase tracking-[0.2em] text-brand-orange/80">
                  Coaching Lab
                </div>
              </div>
            </div>
          </Link>
          <p className="text-sm text-white/70">
            High-touch coaching, rehab, and performance design built for
            athletes and humans who demand more from their training.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Visit & contact
          </h4>
          <div className="mt-3 space-y-1 text-sm text-white/80">
            <p>Hours: 8am–7pm (Mon–Fri)</p>
            <p>Bronx: 117 St. Ann’s Ave, Bronx, NY 10454</p>
            <p>Manhattan: 129 W 29th St., New York, NY 10001</p>
            <p>Email: contact@eaxperience.com</p>
            <p>Phone: 718-578-2763</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Explore
          </h4>
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
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Newsletter
          </h4>
          <p className="text-sm text-white/70">
            Get program drops, event invites, and training notes. We keep it
            tight and actionable.
          </p>
          {status === "success" ? (
            <div className="text-sm font-bold text-green-400">
              Check your email to confirm!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 rounded-2xl bg-white/5 p-2"
            >
              <input
                type="email"
                name="email_address"
                required
                placeholder="Your email"
                className="w-full bg-transparent px-3 py-2 text-sm text-white outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-xl bg-brand-orange px-4 py-2 text-xs font-semibold text-black disabled:opacity-50"
              >
                {status === "loading" ? "..." : "Join"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="text-xs text-red-500">{errorMessage}</p>
          )}
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-brand-orange hover:text-black transition"
                aria-label={social.label}
              >
                <social.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          © 2025 EAXperience. Built for transformation.
        </p>
        <div className="mt-4 flex items-center justify-center text-sm text-white/40">
          Designed by
          <button
            onClick={() => setSignatureModalOpen(true)}
            className="ml-1 animate-bounce font-bold text-brand-orange hover:underline"
          >
            Fallcon Tech
          </button>
        </div>
      </div>

      {/* Signature Modal */}
      {isSignatureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#0a0d14] p-8 text-center shadow-2xl shadow-brand-orange/10">
            <button
              onClick={() => setSignatureModalOpen(false)}
              className="absolute right-4 top-4 text-white/40 transition hover:text-white"
            >
              <IconX className="h-5 w-5" />
            </button>

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
              <IconCode className="h-10 w-10" />
            </div>

            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-center justify-center gap-2">
                <IconPhone className="h-4 w-4 text-brand-orange" />
                <a
                  href="tel:+221776260020"
                  className="transition hover:text-brand-orange hover:underline"
                >
                  +221 77 626 00 20
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <IconMail className="h-4 w-4 text-brand-orange" />
                <a
                  href="mailto:info@fallcontech.com"
                  className="transition hover:text-brand-orange hover:underline"
                >
                  info@fallcontech.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <IconGlobe className="h-4 w-4 text-brand-orange" />
                <a
                  href="https://www.fallcontech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-brand-orange hover:underline"
                >
                  www.fallcontech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
