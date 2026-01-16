import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the modal
    const hasSeenModal = sessionStorage.getItem("hasSeenNewsletterModal");

    // If not, show it after a short delay (e.g., 2 seconds)
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenNewsletterModal", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d14] p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full bg-white/5 p-2 text-white/50 hover:bg-white/10 hover:text-white transition"
        >
          <X size={20} />
        </button>

        <div className="space-y-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange/10 text-3xl">
            ✉️
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-2xl text-white">
              Join the Inner Circle
            </h3>
            <p className="text-sm text-white/70">
              Get exclusive program drops, event invites, and high-performance
              tips delivered straight to your inbox.
            </p>
          </div>

          <form
            action="https://formsubmit.co/theeaxperience@gmail.com"
            method="POST"
            className="space-y-3"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Newsletter Subscriber (Modal)"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-orange transition"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-brand-orange px-4 py-3 text-sm font-bold text-black hover:bg-white transition transform active:scale-95"
            >
              Subscribe Now
            </button>
          </form>

          <p className="text-xs text-white/40">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
