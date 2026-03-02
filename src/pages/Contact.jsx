import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import SectionHeader from "../components/SectionHeader";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  interest: "Sport Performance",
  message: "",
};

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CALENDLY_EVENT_URL = "https://calendly.com/theeaxperience/15min";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const successMessage = useMemo(
    () =>
      "Your message was sent successfully. Redirecting you to book your Calendly event...",
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const fireConfetti = () => {
    const defaults = {
      spread: 70,
      ticks: 120,
      gravity: 0.95,
      decay: 0.95,
      startVelocity: 28,
      colors: ["#fd670a", "#ffffff", "#f7b267", "#0f172a"],
    };

    confetti({ ...defaults, particleCount: 120, origin: { y: 0.6 } });
    setTimeout(() => {
      confetti({ ...defaults, particleCount: 60, origin: { x: 0.2, y: 0.7 } });
      confetti({ ...defaults, particleCount: 60, origin: { x: 0.8, y: 0.7 } });
    }, 200);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSuccess(false);
    setIsSubmitting(true);

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("Email service is not configured yet.");
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone || "-",
          interest: form.interest,
          message: form.message,
          submitted_at: new Date().toLocaleString(),
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setIsSuccess(true);
      setForm(initialForm);
      fireConfetti();

      const calendlyUrl = new URL(CALENDLY_EVENT_URL);
      calendlyUrl.searchParams.set("name", form.name);
      calendlyUrl.searchParams.set("email", form.email);
      calendlyUrl.searchParams.set("a1", form.phone || "");
      calendlyUrl.searchParams.set("a2", form.interest || "");

      setTimeout(() => {
        window.location.assign(calendlyUrl.toString());
      }, 1400);
    } catch (submitError) {
      setError(
        submitError?.message ||
          "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-14 pt-12">
      <section className="section-shell">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Contact"
            title="Tell us your goal. We will map the plan."
            subtitle="We respond within one business day. Share as much context as you like—injuries, timelines, or the next event you’re training for."
          />
        </div>

        <div className="space-y-6 py-10">
          <div className="glass-panel rounded-3xl border border-white/10 p-8 shadow-card max-w-3xl mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <div>
                  <label className="block text-sm font-semibold text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Optional"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white">
                  What are you looking for?
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-brand-orange"
                >
                  <option className="bg-[#07090f] text-white">Sport Performance</option>
                  <option className="bg-[#07090f] text-white">Physical Therapy</option>
                  <option className="bg-[#07090f] text-white">General Fitness</option>
                  <option className="bg-[#07090f] text-white">Team / School Consultation</option>
                  <option className="bg-[#07090f] text-white">Partner / Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Goals, timelines, injuries, or questions..."
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-brand-orange"
                />
              </div>

              {error ? (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              ) : null}

              {isSuccess ? (
                <div className="rounded-xl border border-brand-orange/40 bg-brand-orange/10 px-4 py-3 text-sm text-white">
                  {successMessage}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-black shadow-glow transition transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
          <p className="font-semibold text-white">Direct contact</p>
          <p>Email: contact@eaxperience.com</p>
          <p>Phone: 718-578-2763</p>
          <p>Hours: 8am–7pm (Mon–Fri)</p>
          <div className="space-y-1">
            <p className="font-semibold text-white">Locations:</p>
            <p>1. Bronx: 117 St. Ann’s Ave, Bronx, NY 10454</p>
            <p>2. Manhattan: 129 W 29th St., New York, NY 10001</p>
            <p className="text-white/60 text-xs uppercase tracking-wide mt-1">
              + Hybrid coaching worldwide
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
