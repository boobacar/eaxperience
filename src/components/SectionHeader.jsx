export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={["space-y-2", align === "center" ? "text-center" : ""].join(" ")}>
      {eyebrow && (
        <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          {eyebrow}
        </p>
      )}
      <h2
        className={[
          "font-display text-3xl sm:text-4xl md:text-5xl text-white leading-[1.05]",
          align === "center" ? "mx-auto max-w-3xl" : "max-w-4xl",
        ].join(" ")}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={["text-base text-white/70", align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl"].join(" ")}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
