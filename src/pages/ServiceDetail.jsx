import { useParams, Link } from "react-router-dom"
import CTAButton from "../components/CTAButton"
import SectionHeader from "../components/SectionHeader"
import { services } from "../data/content"

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <div className="section-shell py-16 text-center">
        <p className="text-white/70">Service not found.</p>
        <CTAButton to="/services" className="mt-4">
          Back to services
        </CTAButton>
      </div>
    )
  }

  return (
    <div className="space-y-16 pb-12">
      <section className="section-shell space-y-6">
        <SectionHeader
          eyebrow="Program detail"
          title={service.title}
          subtitle={service.summary}
        />
        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-card">
          <div className="relative aspect-[16/7] bg-white/5">
            <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent" />
            <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white">
              Session moments
            </div>
          </div>
        </div>
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 p-10 shadow-card lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">What to expect</p>
            <p className="text-white/80">{service.story}</p>
            <ul className="space-y-3 text-sm text-white/80">
              {service.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <CTAButton to="/contact">{service.cta}</CTAButton>
              <CTAButton to="/events" variant="outline">
                Attend a workshop
              </CTAButton>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Snapshot</p>
            <div className="space-y-3 text-sm text-white/80">
              <p>
                <span className="font-semibold text-white">Format:</span> 1:1 or semi-private
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span> New York City + hybrid
              </p>
              <p>
                <span className="font-semibold text-white">Ideal for:</span> Individuals ready to invest in high-touch coaching
              </p>
              <p>
                <span className="font-semibold text-white">Next step:</span> Quick consult → Assessment → Plan
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-white"
            >
              Talk with a coach <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5/30 p-6 backdrop-blur md:grid-cols-2">
          {service.gallery.map((img, idx) => (
            <div key={img} className="overflow-hidden rounded-2xl border border-white/10">
              <div className="relative aspect-[4/3]">
                <img src={img} alt={`${service.title} session ${idx + 1}`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090f]/60 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {service.slug === "sport-performance" && (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-panel rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Who is this for?</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {[
                    "Want to be a better athlete",
                    "Want to improve your speed",
                    "Want to improve your jumping ability",
                    "Want to get stronger and build muscle",
                    "Want to improve your mobility",
                    "Who don’t just want to train but want to transform",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-panel rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Service includes</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {[
                    "A performance assessment to learn how to move",
                    "Speed, jump, and coordination testing",
                    "Individualized training program",
                    "Doctor of Physical Therapy and Strength Coach guided training",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Expectations during evaluation</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Discovery + background interview",
                    body: "We take time to learn about you, your goals, concerns, and barriers so we understand you as an individual.",
                  },
                  {
                    title: "Movement / force exploration",
                    body: "We look at your whole system and how you coordinate movement and express force. Assessment covers ROM, strength, speed, jump height, agility, and coordination.",
                  },
                  {
                    title: "Debrief + game plan",
                    body: "We discuss findings with you and build a plan to address what will move you forward fastest.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/5 p-4">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/70">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">3-step process</p>
              <ul className="mt-3 space-y-3 text-sm text-white/80">
                {[
                  {
                    title: "Improve mobility / coordination / movement literacy",
                    detail: "On day one, we pinpoint what limits you and give you take-home exercises to address it.",
                  },
                  {
                    title: "Improve force (strength) / speed development",
                    detail:
                      "We map your force-velocity profile, then build toward improving the exact parameter you need—strength or speed.",
                  },
                  {
                    title: "Perform at peak while mitigating injury risk",
                    detail:
                      "Sport-specific drills plus weight-room work, tracked against your baseline data to prove progress and resilience.",
                  },
                ].map((item) => (
                  <li key={item.title} className="space-y-1">
                    <div className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span className="font-semibold text-white">{item.title}</span>
                    </div>
                    <div className="pl-5 text-white/70">{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {service.slug === "physical-therapy" && (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-panel rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Who is this for?</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {[
                    "Dealing with pain, stiffness, or injury limiting your daily life",
                    "Want to avoid surgery or medication and explore movement-based solutions",
                    "Torn ligament, muscle strain, or post-operative and need expert rehab",
                    "Want 1-to-1 care and are tired of cookie-cutter physical therapy",
                    "Tried PT, chiropractic, massage, etc., and still not better",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-panel rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">What you will get</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {[
                    "Full body movement evaluation",
                    "Personalized treatment plan",
                    "Customized exercises",
                    "Education on your symptoms",
                    "A clear path forward",
                    "Manual input if required in your care",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Expectations during evaluation</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Discovery + background interview",
                    body: "Call or in-person to understand your story and goals.",
                  },
                  {
                    title: "Movement exploration",
                    body: "Objective data-driven evaluation to find positive movement experiences.",
                  },
                  {
                    title: "Debrief + game plan",
                    body: "Plan with HEPs to continue performance-driven care at home.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/5 p-4">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/70">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">3-step process</p>
              <ul className="mt-3 space-y-3 text-sm text-white/80">
                {[
                  {
                    title: "Reduce pain",
                    detail:
                      "Exercise prescription, manual input, and education. On day 1 we find what contributes to your symptoms and map how to relieve it.",
                  },
                  {
                    title: "Address root cause",
                    detail:
                      "We scan how you move to tailor input that addresses the deficiency causing your issue.",
                  },
                  {
                    title: "Optimize movement and build strength",
                    detail:
                      "Rehab starts to look like training—learn to move efficiently so you can be strong and transform long term.",
                  },
                ].map((item) => (
                  <li key={item.title} className="space-y-1">
                    <div className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span className="font-semibold text-white">{item.title}</span>
                    </div>
                    <div className="pl-5 text-white/70">{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {service.slug === "general-fitness" && (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-panel rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Who is this for?</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {[
                    "Semi-private 2–4 athletes",
                    "Need accountability",
                    "Want your healthspan to match your lifespan",
                    "Weight loss or hypertrophy goals",
                    "Want a science-backed training block",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-panel rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Services include</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {[
                    "Fitness / movement assessment",
                    "Strength assessment",
                    "Individualized training plan",
                    "Guided program by Doctor of Physical Therapy and Strength & Conditioning specialist",
                    "Coaching to move better, feel better now, and build foundations for health and freedom as you age",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">3-step process</p>
              <ul className="mt-3 space-y-3 text-sm text-white/80">
                {[
                  {
                    title: "Discovery + background interview (call + in-person)",
                    detail:
                      "We learn your story, goals, concerns, and barriers to progress—so the plan matches your life.",
                  },
                  {
                    title: "Movement exploration",
                    detail:
                      "We look at your whole system and how you coordinate movement to find opportunities for improvement.",
                  },
                  {
                    title: "Debrief + game planning",
                    detail:
                      "We review findings together and build a plan tailored to what will help you progress.",
                  },
                ].map((item) => (
                  <li key={item.title} className="space-y-1">
                    <div className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span className="font-semibold text-white">{item.title}</span>
                    </div>
                    <div className="pl-5 text-white/70">{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {service.slug === "school-consultation" && (
          <div className="space-y-8">
            <div className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Consultation to sports programs / schools</p>
              <p className="mt-2 text-sm text-white/70">3-month pilot • 1x per week • 12 sessions</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-panel rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">This is for you if</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {[
                    "Improve individual athletic capabilities and cut injury costs",
                    "Program needs a performance boost",
                    "Want fewer injuries to reduce medical/program expenses",
                    "Have a vision to grow the athletic program to the next level",
                    "Great team that needs to be more athletically sound",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-panel rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">What you will get</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {[
                    "Movement assessment of all athletes to see what drives improvement",
                    "Comprehensive plan that addresses limits and improves capabilities",
                    "Bridging the gap between performance and rehab",
                    "Doctor of Physical Therapy and Strength Coach on hand",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Evaluation</p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {[
                  "Collect baseline data from 3–5 years of injuries and types",
                  "Estimate program cost (avg fracture ~$4,700; ACL surgery $17k–$25k; avg sports injury ~$709)",
                  "Map potential savings: one ACL tear ~ $20k; 10–20% injury reduction can significantly reduce expenses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Step process</p>
              <ul className="mt-3 space-y-3 text-sm text-white/80">
                {[
                  {
                    title: "Audit programs",
                    detail:
                      "Collect 3–5 years of injury data; use movement screens and strength testing to observe injury risk and create a plan.",
                  },
                  {
                    title: "Promote custom strength and movement",
                    detail:
                      "Deliver athlete-specific programs, warmup/post-workout support, and coach education so staff can execute drills.",
                  },
                  {
                    title: "Transform athletes",
                    detail:
                      "Educate on decreasing symptoms and mitigating injuries; show trends in injury rates and performance improvements.",
                  },
                ].map((item) => (
                  <li key={item.title} className="space-y-1">
                    <div className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span className="font-semibold text-white">{item.title}</span>
                    </div>
                    <div className="pl-5 text-white/70">{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
