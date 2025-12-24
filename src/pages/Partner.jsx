import CTAButton from "../components/CTAButton"
import SectionHeader from "../components/SectionHeader"

const sponsorships = [
  {
    title: "Newsletter Sponsorships",
    body: "Reach our subscribers across our monthly newsletters. Choose to sponsor one, multiple, or all for maximum impact.",
  },
  {
    title: "Course Sponsorships",
    body: "Align your brand with our programs, trusted by schools and sport programs.",
  },
  {
    title: "Event Sponsorships",
    body: "Showcase your brand at our live seminars and online training programs.",
  },
]

export default function Partner() {
  return (
    <div className="space-y-16 pb-12">
      <section className="section-shell space-y-10">
        <SectionHeader
          eyebrow="Partner"
          title="Partnership opportunities"
          subtitle="We are delighted to open invitations of interest for partnerships with exceptional brands that share our commitment to advancing within school programs to reduce injuries. Together, we can inspire and empower the next generation of athletes."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          <div className="glass-panel rounded-3xl border border-white/10 p-6 md:p-8">
            <p className="text-sm text-white/80">
              We offer tailored partnership opportunities to help you connect with a dedicated and engaged audience:
            </p>
            <div className="mt-6 space-y-4">
              {sponsorships.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  <div>
                    <p className="font-semibold text-white">{item.title}:</p>
                    <p className="text-sm text-white/70">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact">Become a partner</CTAButton>
              <CTAButton to="/events" variant="outline">
                Sponsor an event
              </CTAButton>
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 p-6 md:p-8 shadow-card">
            <div className="absolute -right-14 -top-10 h-64 w-64 rounded-full bg-brand-orange/15 blur-[100px]" />
            <div className="relative space-y-4">
              <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-orange">
                What you get
              </p>
              <div className="space-y-3 text-sm text-white/80">
                {[
                  "Access to a dedicated athlete community",
                  "Co-branded activations and content opportunities",
                  "Trust built through real events and real results",
                  "A partnership designed for impact—not noise",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 rounded-2xl bg-white/5 p-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
