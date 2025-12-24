import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="grid-overlay absolute inset-0" />
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-[-6rem] h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>
      <Header />
      <main className="relative pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
