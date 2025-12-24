import SectionHeader from "../components/SectionHeader"

const podcasts = [
  {
    title: "The Game with Alex Hormozi",
    src: "https://embed.podcasts.apple.com/us/podcast/the-game-with-alex-hormozi/id1254720112",
  },
  {
    title: "How I Built This with Guy Raz",
    src: "https://embed.podcasts.apple.com/us/podcast/how-i-built-this-with-guy-raz/id1150510297",
  },
  {
    title: "Hypertrophy Past and Present",
    src: "https://embed.podcasts.apple.com/us/podcast/hypertrophy-past-and-present/id1816546677",
  },
  {
    title: "High Performance Physiology",
    src: "https://embed.podcasts.apple.com/us/podcast/high-performance-physiology/id1848284552",
  },
]

export default function PodcastSuggestions() {
  return (
    <div className="space-y-10 pb-12">
      <section className="section-shell space-y-6">
        <SectionHeader eyebrow="Resources" title="Podcast suggestions" align="center" />
        <div className="grid gap-6 lg:grid-cols-2">
          {podcasts.map((pod) => (
            <div key={pod.src} className="glass-panel rounded-3xl border border-white/10 p-4 md:p-5">
              <iframe
                title={pod.title}
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="450"
                className="w-full max-w-[660px] overflow-hidden rounded-xl"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src={pod.src}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

