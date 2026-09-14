import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Nav, Footer } from "./shared"
import { applySEO } from "../seo.js"

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    applySEO(pathname)
  }, [pathname])

  useEffect(() => {
    const handleSamePageClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href) return

      // If it is an internal link to the exact current pathname
      try {
        const targetUrl = new URL(anchor.href, window.location.origin)
        if (
          targetUrl.origin === window.location.origin &&
          targetUrl.pathname === window.location.pathname &&
          !targetUrl.hash
        ) {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      } catch {
        // Fallback check
        if (
          href === pathname ||
          href === "." ||
          (href === "/" && pathname === "/")
        ) {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleSamePageClick)
    return () => document.removeEventListener("click", handleSamePageClick)
  }, [pathname])

  return (
    <div
      style={{
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        background: "#0E1A2B",
      }}
    >
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
