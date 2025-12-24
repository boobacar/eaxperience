import { Link } from "react-router-dom"
import CTAButton from "../components/CTAButton"
import SectionHeader from "../components/SectionHeader"
import { services } from "../data/content"

export default function Services() {
  return (
    <div className="space-y-16 pb-12">
      <section className="section-shell space-y-8">
        <SectionHeader
          eyebrow="Services"
          title="Programs that fuse rehab-grade rigor with performance design"
          subtitle="Every plan is individualized, data-informed, and led by experts so you can win on the field, in the gym, or in your daily life."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-8 shadow-card transition hover:-translate-y-1 hover:border-brand-orange/40"
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/10 blur-3xl transition group-hover:scale-110" />
              <div className="relative space-y-4">
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative aspect-[5/3]">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent" />
                  </div>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-orange">Program</p>
                <h3 className="font-display text-3xl text-white">{service.title}</h3>
                <p className="text-white/70">{service.summary}</p>
                <ul className="space-y-2 text-sm text-white/70">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3">
                  <CTAButton to={`/services/${service.slug}`}>View details</CTAButton>
                  <Link
                    to="/contact"
                    className="text-sm font-semibold text-brand-orange underline-offset-4 hover:underline"
                  >
                    Book a consult
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-8 rounded-3xl border border-white/5 bg-white/5/50 p-10 backdrop-blur lg:grid-cols-3">
        <div className="lg:col-span-1">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-orange">Why us</p>
          <h3 className="mt-2 font-display text-3xl text-white">A coaching lab built to adapt</h3>
          <p className="text-sm text-white/70">
            We combine sport science, physical therapy, and coaching so you do not have to choose between
            performance and longevity.
          </p>
        </div>
        <div className="lg:col-span-2 grid gap-4 md:grid-cols-2">
          {[
            { title: "Movement first", body: "We fix patterns before loading them—reducing injury risk and unlocking power." },
            { title: "Measurable gains", body: "Assessments, sprint timers, and strength metrics to prove you are progressing." },
            { title: "Tailored delivery", body: "1:1, semi-private, or team pilots. In-person, hybrid, or remote support." },
            { title: "Care that scales", body: "From an individual to an entire program, we teach you how to sustain results." },
          ].map((item) => (
            <div key={item.title} className="glass-panel rounded-2xl p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">{item.title}</p>
              <p className="mt-2 text-sm text-white/80">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
