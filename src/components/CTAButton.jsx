import { Link } from "react-router-dom"

export default function CTAButton({ to, children, variant = "solid", className = "" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition transform"

  const styles =
    variant === "outline"
      ? "border border-white/20 text-white hover:border-brand-orange hover:text-brand-orange"
      : "bg-brand-orange text-black shadow-glow hover:-translate-y-0.5"

  return (
    <Link to={to} className={[base, styles, className].join(" ")}>
      {children}
    </Link>
  )
}
