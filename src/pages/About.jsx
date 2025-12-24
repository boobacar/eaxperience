import SectionHeader from "../components/SectionHeader"
import aboutImg from "../assets/about-us.png"
import emmanuelImg from "../assets/Emmanuel-Agyapong.jpeg"
import juniorImg from "../assets/junior-r-time.jpeg"

export default function About() {
  return (
    <div className="space-y-14 py-16">
      <section className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="About"
            title="About EAXperience"
            subtitle="Welcome to EAXperience Rehabilitation and Sports Performance — home of skilled physical therapy and elite athletic development."
          />
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              At EAXperience, we bridge the gap between rehabilitation and performance. Our approach blends
              evidence-based physical therapy with high-level sports performance to address one of the biggest
              problems in today&apos;s athletic and fitness world: poor movement literacy. The lack of movement
              literacy is a contributor to chronic pain, recurring injuries, and limited athletic potential.
            </p>
            <p>
              We solve this by teaching athletes and active individuals how to move well, load well, and perform at
              their highest capacity. Whether you&apos;re recovering from an injury, preparing for your season or already
              in-season, building foundational strength, or simply trying to move pain-free, our providers create
              individualized treatment and training plans that align with your goals and lifestyle.
            </p>
            <p>
              Come and EAXperience the difference: high-level care. Unrivaled value. Real results.
            </p>
            <p className="font-semibold text-white">Don’t just train. Transform.</p>
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 p-4 shadow-card">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brand-orange/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl">
            <img src={aboutImg} alt="Founder portrait" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090f]/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <SectionHeader
          eyebrow="Values"
          title="What we stand for"
          subtitle="Four commitments that guide how we coach and how you experience transformation."
          align="center"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Preparation creates winning results.",
              body: "We prepare intensively to provide athletes with the correct training to transform their athletic ability.",
            },
            {
              title: "Redefining athletes with research and data-driven training.",
              body: "Using tools and research to guide our training methods to get the best results.",
            },
            {
              title: "Pushing past limits in the pursuit of greatness.",
              body: "Barriers are meant to be broken; we do not allow obstacles to stop us from achieving our goals.",
            },
            {
              title: "Empowering athletes, elevating community.",
              body: "Our motto is “If You Don’t Work, Then You Don’t Eat,” creating hard-working athletes while also building a community of hard workers.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-panel rounded-3xl border border-white/10 p-6 md:p-7">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-2xl text-brand-orange">
                ✓
              </div>
              <h3 className="font-display text-xl text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/75">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-10">
        <SectionHeader
          eyebrow="Team"
          title="Meet the leaders behind EAXperience"
          subtitle="Coaches who blend physical therapy rigor with performance design."
          align="left"
        />
        <div className="space-y-6">
          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-6 md:p-8 shadow-card">
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand-orange/10 blur-[90px]" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="relative aspect-[4/5]">
                  <img src={emmanuelImg} alt="Emmanuel Agyapong" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090f]/55 via-transparent to-transparent" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
                    Founder
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                    PT • DPT • CSCS
                  </span>
                </div>
                <h3 className="font-display text-3xl text-white">Emmanuel Agyapong</h3>
                <div className="space-y-3 text-sm leading-relaxed text-white/80">
                  <p>
                    Dr. Agyapong is a physical therapist, strength coach, and performance expert. He started the
                    EAXperience to help athletes improve their athletic ability with clear guidance and expert coaching.
                  </p>
                  <p>
                    He has worked with the SUNY Oswego DI Club Hockey team, orthopedic outpatient settings at Robert
                    Berkley Physical Therapy, and acute care at SUNY Upstate Hospital—proving how movement, fitness, and
                    strength drive performance at every level.
                  </p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 text-sm text-white/80">
                  {["Rehab-to-performance programming", "Strength & speed development", "Return-to-play planning", "Movement literacy coaching"].map(
                    (item) => (
                      <div key={item} className="flex items-start gap-2 rounded-2xl bg-white/5 p-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-6 md:p-8 shadow-card">
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-brand-orange/10 blur-[90px]" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:order-2">
                <div className="relative aspect-[4/5]">
                  <img src={juniorImg} alt="Junior R. Timè" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090f]/55 via-transparent to-transparent" />
                </div>
              </div>
              <div className="space-y-4 lg:order-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
                    Experience
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-white/50">LMSW</span>
                </div>
                <h3 className="font-display text-3xl text-white">Junior R. Timè</h3>
                <div className="space-y-3 text-sm leading-relaxed text-white/80">
                  <p>
                    As Chief Experience Officer and Head of Events & Content, Junior creates transformative fitness
                    experiences that inspire and empower people.
                  </p>
                  <p>
                    With a background in social work and fitness, he connects movement, mental health, and community.
                    From free field sessions to tailored programs, he makes fitness accessible, engaging, and meaningful.
                    The EAXperience is more than a brand; it is a lifestyle.
                  </p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 text-sm text-white/80">
                  {["Community-first events", "Athlete experience design", "Content & education", "Movement + mental health"].map((item) => (
                    <div key={item} className="flex items-start gap-2 rounded-2xl bg-white/5 p-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
