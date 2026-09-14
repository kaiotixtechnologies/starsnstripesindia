import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Itinerary from "./pages/Itinerary"
import Destinations from "./pages/Destinations"
import Instructors from "./pages/Instructors"
import Pricing from "./pages/Pricing"
import WhatsIncluded from "./pages/WhatsIncluded"
import FAQ from "./pages/FAQ"
import Book from "./pages/Book"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/whats-included" element={<WhatsIncluded />} />
          <Route path="/included" element={<WhatsIncluded />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
