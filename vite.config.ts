import { defineConfig, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"

// Vite config — standard modern React + Vite + Tailwind setup
export default defineConfig(({ mode }) => {
  const isDev = mode === "development"

  return {
    base: "/",
    build: {
      sourcemap: isDev ? "inline" : false,
      minify: !isDev,
    },
    plugins: [
      react(),
      tailwindcss(),
      localApiProxyPlugin(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
    server: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "8443"),
    },
    preview: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "8443"),
    },
  }
})

/**
 * Local development proxy for Google Apps Script endpoints (Reservations and Live Seats).
 * In production (e.g. Vercel), the Serverless Functions in /api/reservation.ts and /api/seats.ts handle these.
 */
function localApiProxyPlugin(): Plugin {
  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyw-dvXG0vGF0gyWxuEvDkc0lqt06hL8DGdKsifsS8Dxoa_P87XU1vW0sM2l6If6eoh/exec"
  const PAYMENTS_APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwGuOdfoU3Xe2jICq0GLzyQX8jLuyrJjubib6RgY5G7d2ugSxKUZsZvPvEtYE2eq1fQqQ/exec"

  return {
    name: "local-api-proxy",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith("/api/reservation")) {
          if (req.method === "POST") {
            let body = ""
            req.on("data", (chunk) => {
              body += chunk
            })
            req.on("end", async () => {
              try {
                const gasRes = await fetch(APPS_SCRIPT_URL, {
                  method: "POST",
                  headers: { "Content-Type": "text/plain;charset=utf-8" },
                  body,
                })
                const text = await gasRes.text()
                res.setHeader("Content-Type", "application/json")
                res.statusCode = gasRes.status
                res.end(text)
              } catch (err: any) {
                res.statusCode = 500
                res.end(
                  JSON.stringify({ success: false, message: err?.message }),
                )
              }
            })
            return
          } else if (req.method === "GET") {
            try {
              const gasRes = await fetch(
                `${PAYMENTS_APPS_SCRIPT_URL}?action=getSeats`,
              )
              const text = await gasRes.text()
              res.setHeader("Content-Type", "application/json")
              res.statusCode = gasRes.status
              res.end(text)
            } catch (err: any) {
              res.statusCode = 200
              res.end(
                JSON.stringify({
                  success: true,
                  totalCapacity: 8,
                  seatsRemaining: 8,
                }),
              )
            }
            return
          }
        }

        if (req.url?.startsWith("/api/seats")) {
          try {
            const gasRes = await fetch(
              `${PAYMENTS_APPS_SCRIPT_URL}?action=getSeats`,
            )
            const text = await gasRes.text()
            res.setHeader("Content-Type", "application/json")
            res.statusCode = gasRes.status
            res.end(text)
          } catch (err: any) {
            res.statusCode = 200
            res.end(
              JSON.stringify({
                success: true,
                totalCapacity: 8,
                seatsRemaining: 8,
              }),
            )
          }
          return
        }

        next()
      })
    },
  }
}
