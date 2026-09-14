import { useEffect } from "react"
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

const PAYMENTS_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwGuOdfoU3Xe2jICq0GLzyQX8jLuyrJjubib6RgY5G7d2ugSxKUZsZvPvEtYE2eq1fQqQ/exec"

export default function App() {
  useEffect(() => {
    // Pre-fetch live seats in the background on site visit so /book is instant
    const prefetchSeats = async () => {
      try {
        const res = await fetch(`${PAYMENTS_APPS_SCRIPT_URL}?action=getSeats`, {
          method: "GET",
          mode: "cors",
        }).catch(() => null)

        if (res && res.ok) {
          const data = await res.json().catch(() => null)
          if (data && typeof data.seatsRemaining === "number") {
            const rem = Math.max(0, Math.min(8, data.seatsRemaining))
            sessionStorage.setItem(
              "sns_seats_cache",
              JSON.stringify({
                seatsRemaining: rem,
                bookedSeats: data.bookedSeats ?? 8 - rem,
                timestamp: Date.now(),
              }),
            )
          }
        }
      } catch {
        // Silent background prefetch
      }
    }

    prefetchSeats()
  }, [])

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

