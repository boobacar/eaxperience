import CTAButton from "./CTAButton"
import SectionHeader from "./SectionHeader"
import { pricingPlans, pricingNote } from "../data/content"

export default function PricingTable() {
  return (
    <section className="section-shell space-y-8">
      <SectionHeader
        eyebrow="Pricing"
        title="The EAXperience — Coaching & Therapy"
        subtitle="Transparent, high-impact options for every level. Choose the cadence and support that matches your goals."
        align="center"
      />

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5/40 shadow-card backdrop-blur">
        <div className="hidden border-b border-white/5 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/50 md:grid md:grid-cols-[1.1fr,0.7fr,1.2fr]">
          <span>Program</span>
          <span>Pricing</span>
          <span>Details</span>
        </div>
        <div className="divide-y divide-white/5">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="grid gap-3 px-5 py-4 md:grid-cols-[1.1fr,0.7fr,1.2fr] md:px-6 md:py-5"
            >
              <p className="font-semibold text-white">{plan.name}</p>
              <p className="font-display text-xl text-brand-orange md:text-2xl">{plan.price}</p>
              <p className="text-sm text-white/70">{plan.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-center">
        <CTAButton to="/contact">Book a consult</CTAButton>
        <CTAButton to="/contact" variant="outline">
          Ask about pricing
        </CTAButton>
      </div>

      <p className="text-center text-xs uppercase tracking-[0.2em] text-white/50">{pricingNote}</p>
    </section>
  )
}
