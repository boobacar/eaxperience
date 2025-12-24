import { useEffect } from "react";
import SectionHeader from "../components/SectionHeader";
import CTAButton from "../components/CTAButton";

export default function Contact() {
  useEffect(() => {
    const src = "https://assets.calendly.com/assets/external/widget.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="space-y-14 py-12">
      <section className="section-shell">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Contact"
            title="Tell us your goal. We will map the plan."
            subtitle="We respond within one business day. Share as much context as you like—injuries, timelines, or the next event you’re training for."
          />
        </div>

        <div className="space-y-6 py-10 md:grid md:grid-cols-2 md:gap-8">
          <div className="glass-panel rounded-3xl border border-white/10 p-4 md:p-6 shadow-card">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/theeaxperience/30min?text_color=ff9c2b"
              style={{
                minWidth: 320,
                height: 840,
                marginTop: " 0",
                marginBottom: "0",
              }}
            />
          </div>
          <div className="glass-panel rounded-3xl border border-white/10 p-8 shadow-card">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-brand-orange"
                />
              </div>
              <div className="">
                <div>
                  <label className="block text-sm font-semibold text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Optional"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-brand-orange"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">
                  What are you looking for?
                </label>
                <select className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-brand-orange">
                  <option className="bg-[#07090f] text-white">
                    Sport Performance
                  </option>
                  <option className="bg-[#07090f] text-white">
                    Physical Therapy
                  </option>
                  <option className="bg-[#07090f] text-white">
                    General Fitness
                  </option>
                  <option className="bg-[#07090f] text-white">
                    Team / School Consultation
                  </option>
                  <option className="bg-[#07090f] text-white">
                    Partner / Collaboration
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Goals, timelines, injuries, or questions..."
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-brand-orange"
                />
              </div>
              <CTAButton to="#" className="w-full">
                Send message
              </CTAButton>
            </form>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
          <p className="font-semibold text-white">Direct contact</p>
          <p>Email: theeaxperience@gmail.com</p>
          <p>Phone: 718-578-2763</p>
          <p>Hours: 8am–7pm (Mon–Fri)</p>
          <p>Location: New York City + hybrid coaching worldwide</p>
        </div>
      </section>
    </div>
  );
}
