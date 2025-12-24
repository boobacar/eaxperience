import { useEffect } from "react"
import SectionHeader from "../components/SectionHeader"

export default function Events() {
  useEffect(() => {
    const src = "https://elfsightcdn.com/platform.js"
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script")
      script.src = src
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="space-y-10 pb-12">
      <section className="section-shell space-y-6">
        <SectionHeader
          eyebrow="Events"
          title="Experience the work in person"
          align="center"
        />
        <div className="glass-panel rounded-3xl border border-white/10 p-4 md:p-6">
          <div className="elfsight-app-c8d5e4b5-2f32-4b4b-9ff4-b870454d54b4" data-elfsight-app-lazy />
        </div>
      </section>
    </div>
  )
}
