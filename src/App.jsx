import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Services from "./pages/Services"
import ServiceDetail from "./pages/ServiceDetail"
import Partner from "./pages/Partner"
import PodcastSuggestions from "./pages/PodcastSuggestions"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import BookSuggestions from "./pages/BookSuggestions"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="partner" element={<Partner />} />
        <Route path="resources/podcasts" element={<PodcastSuggestions />} />
        <Route path="resources/blog" element={<Blog />} />
        <Route path="resources/blog/:slug" element={<BlogPost />} />
        <Route path="resources/books" element={<BookSuggestions />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
