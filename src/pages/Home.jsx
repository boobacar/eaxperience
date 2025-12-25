import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/hero.png";
import CTAButton from "../components/CTAButton";
import SectionHeader from "../components/SectionHeader";
import {
  heroPillars,
  services,
  stats,
  testimonials,
  events,
} from "../data/content";

const Pill = ({ title, body }) => (
  <div className="glass-panel flex flex-col gap-1 rounded-2xl p-4">
    <p className="text-xs uppercase tracking-[0.2em] text-brand-orange">
      {title}
    </p>
    <p className="text-sm text-white/80">{body}</p>
  </div>
);

const CountUp = ({ value, duration = 1600 }) => {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const numeric = parseFloat(String(value).replace(/[^\d.]/g, "")) || 0;
  const suffix = String(value).replace(/[0-9.,]/g, "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.round(progress * numeric);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, numeric, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function Home() {
  const spotlightService = services;
  const marqueeEvents = events.slice(0, 2);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-20 py-12">
      <section className="section-shell grid items-center gap-12 lg:grid-cols-12">
        <div className="relative z-10 space-y-6 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            Movement first. Performance always.
          </div>
          <h1 className="font-display text-4xl leading-[1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Where athletes don&apos;t just train—
            <span className="text-brand-orange">they transform.</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            EAXperience blends sports performance, physical therapy, and
            precision coaching so you can move better, recover faster, and
            dominate longer. Every plan is hand-built by experts.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <CTAButton to="/contact">Book a session</CTAButton>
            <CTAButton to="/services" variant="outline">
              See programs
            </CTAButton>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {heroPillars.map((pillar) => (
              <Pill key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-brand-orange/20 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-6 shadow-card">
            <div className="absolute right-6 top-6 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              Coach-led
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-brand-orange/10 via-white/5 to-[#07090f]">
              <img
                src={heroImg}
                alt="EAXperience coach"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090f]/60 via-transparent to-transparent" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80">
              <div className="rounded-2xl bg-white/5 p-3">
                <p className="text-2xl font-display text-brand-orange">
                  1:1 + Semi-Private
                </p>
                <p>Built for athletes and high performers.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3">
                <p className="text-2xl font-display text-brand-orange">
                  Data + Care
                </p>
                <p>Objective testing and rehab expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-4 rounded-3xl border border-white/5 bg-white/5/50 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="glass-panel rounded-2xl p-4 text-center"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                  {item.label}
                </p>
                <p className="font-display text-3xl text-brand-orange">
                  <CountUp value={item.value} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell space-y-10">
        <SectionHeader
          eyebrow="Services"
          title="Precision programs for every phase of performance"
          subtitle="Four programs, one standard: evidence-based training with relentless attention to how you move and recover."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {spotlightService.map((service) => (
            <div
              key={service.slug}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-orange/40"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-brand-orange/10 via-transparent to-brand-orange/5" />
              <div className="relative space-y-4">
                <div className="overflow-hidden rounded-2xl border border-white/5">
                  <div className="relative aspect-video">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent" />
                  </div>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-orange">
                  Program
                </p>
                <h3 className="font-display text-2xl text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70">{service.summary}</p>
                <ul className="space-y-2 text-sm text-white/70">
                  {service.outcomes.slice(0, 2).map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-white"
                >
                  Explore program <span>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Events"
            title="Live experiences that accelerate progress"
            subtitle="Labs, workshops, and combines that let you feel the difference and leave with a plan."
          />
          <div className="space-y-4">
            {marqueeEvents.map((event) => (
              <div key={event.title} className="glass-panel rounded-2xl p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
                <p className="mt-2 text-xl font-display text-white">
                  {event.title}
                </p>
                <p className="text-sm text-white/70">{event.blurb}</p>
              </div>
            ))}
          </div>
          <CTAButton to="/events" variant="outline" className="w-fit">
            View all events
          </CTAButton>
        </div>
        <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/5 p-8">
          <div className="absolute -left-20 top-6 h-64 w-64 rounded-full bg-brand-orange/20 blur-3xl" />
          <div className="relative space-y-4">
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-orange">
              Signature quote
            </p>
            <p className="font-display text-4xl leading-tight text-white">
              “If you don’t work, then you don’t eat.”
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              EMMANUEL — Founder
            </p>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
              <div className="relative overflow-hidden rounded-xl border border-white/5 shadow-card">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-orange/20 via-transparent to-white/10" />
                <div className="relative aspect-video bg-[#05070c]">
                  <iframe
                    src="https://www.youtube.com/embed/X0T1gjh7xqI?rel=0&modestbranding=1&color=white"
                    title="EAXperience highlight video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/60">
                Watch the EAXperience difference
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="Proof from people who put in the work"
          subtitle="Momentum is built on trust. Here’s what athletes, clients, and partners experience with EAXperience."
          align="center"
        />
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5/40 p-4">
          <div
            className="flex transition-transform duration-500"
            style={{
              width: `${testimonials.length * 100}%`,
              transform: `translateX(-${(slide * 100) / testimonials.length}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="flex-shrink-0 px-2 md:px-4 lg:px-6"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="glass-panel relative flex h-full flex-col justify-between rounded-3xl p-6 md:p-8">
                  <div className="absolute -left-6 -top-6 h-16 w-16 rotate-12 rounded-full bg-brand-orange/20 blur-xl" />
                  <p className="relative text-lg md:text-xl font-semibold text-white">
                    {item.quote}
                  </p>
                  <div className="relative mt-6 text-sm text-white/70 space-y-1">
                    {item.rating && (
                      <div className="flex items-center gap-1 text-brand-orange">
                        {Array.from({ length: item.rating }).map((_, idx) => (
                          <span key={idx}>★</span>
                        ))}
                        {item.rating < 5 &&
                          Array.from({ length: 5 - item.rating }).map(
                            (_, idx) => (
                              <span key={`o-${idx}`} className="text-white/20">
                                ★
                              </span>
                            )
                          )}
                      </div>
                    )}
                    <p className="font-semibold text-white">{item.name}</p>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  slide === idx
                    ? "bg-brand-orange shadow-glow"
                    : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="glass-panel flex flex-col gap-6 rounded-3xl border border-brand-orange/30 bg-brand-orange/10 p-10 text-center shadow-glow">
          <SectionHeader
            eyebrow="Next step"
            title="Ready for a different level of coaching?"
            subtitle="Tell us your goal and we’ll map the first 30 days. Expect clarity, not guesswork."
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-3">
            <CTAButton to="/contact">Start now</CTAButton>
            <CTAButton to="/services" variant="outline">
              Browse programs
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
