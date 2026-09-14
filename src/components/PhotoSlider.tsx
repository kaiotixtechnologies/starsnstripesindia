import { useState } from "react"
import type { PhotoItem } from "../data/galleryData"
import { Eyebrow } from "./shared"

interface PhotoSliderProps {
  title: string
  eyebrowText: string
  subtitle?: string
  photos: PhotoItem[]
  theme?: "dark" | "light"
  sectionId?: string
  speedSeconds?: number
}

export default function PhotoSlider({
  title,
  eyebrowText,
  subtitle,
  photos,
  theme = "light",
  sectionId,
  speedSeconds = 38,
}: PhotoSliderProps) {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null)

  const isDark = theme === "dark"

  // Duplicate items for seamless continuous infinite marquee
  const marqueeItems = [...photos, ...photos]

  return (
    <section
      id={sectionId}
      className="py-14 relative overflow-hidden transition-colors duration-300 select-none"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #070D16 0%, #0D1B2A 50%, #070D16 100%)"
          : "linear-gradient(180deg, #FAFAF7 0%, #F5F0E8 50%, #FAFAF7 100%)",
      }}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Ambient background glow for dark theme */}
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 30%, rgba(201, 162, 75, 0.15) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 mb-8 relative z-10">
        <div className="max-w-3xl">
          <Eyebrow
            className="mb-2 inline-block text-xs"
            style={{ color: isDark ? "#C9A24B" : "#A07828" }}
          >
            {eyebrowText}
          </Eyebrow>
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: isDark ? "#FFFFFF" : "#0D1B2A" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-xs sm:text-sm md:text-base leading-relaxed mt-2"
              style={{ color: isDark ? "rgba(255,255,255,0.7)" : "#4A5568" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Edge Gradient Fades for Infinite Sliding Stream */}
      <div className="relative w-full overflow-hidden">
        <div
          className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 z-20 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to right, #070D16 0%, transparent 100%)"
              : "linear-gradient(to right, #FAFAF7 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 z-20 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to left, #070D16 0%, transparent 100%)"
              : "linear-gradient(to left, #FAFAF7 0%, transparent 100%)",
          }}
        />

        {/* Continuous Marquee Track */}
        <div
          className="photo-marquee-track py-2 flex gap-5"
          style={{
            animationDuration: `${speedSeconds}s`,
          }}
        >
          {marqueeItems.map((photo, index) => (
            <div
              key={`${photo.id}-${index}`}
              onClick={() => setActivePhoto(photo)}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="protected-photo flex-shrink-0 w-[280px] sm:w-[380px] md:w-[460px] h-[200px] sm:h-[260px] md:h-[310px] rounded-sm overflow-hidden cursor-pointer group relative transition-transform duration-300 transform hover:scale-[1.02]"
              style={{
                background: isDark ? "#0A121D" : "#E2DDD4",
                border: isDark
                  ? "1px solid rgba(201, 162, 75, 0.22)"
                  : "1px solid rgba(13, 27, 42, 0.1)",
                boxShadow: isDark
                  ? "0 8px 24px rgba(0,0,0,0.5)"
                  : "0 4px 16px rgba(13,27,42,0.08)",
              }}
            >
              {/* Protected Image */}
              <img
                src={photo.image}
                alt={photo.alt || "Photo"}
                loading="lazy"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className="protected-photo pointer-events-none w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Protection Overlay & Subtle Hover Icon */}
              <div
                className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center cursor-pointer"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              >
                <div className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30 backdrop-blur-sm pointer-events-none">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pure Protected Image Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn select-none"
          onClick={() => setActivePhoto(null)}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Close preview"
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 text-2xl font-light cursor-pointer"
            >
              ✕
            </button>

            <div
              className="relative rounded-sm overflow-hidden max-h-[85vh] w-full flex items-center justify-center bg-black/50 border border-white/10"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            >
              <img
                src={activePhoto.image}
                alt={activePhoto.alt || "Preview"}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className="protected-photo pointer-events-none max-h-[85vh] w-auto max-w-full object-contain"
              />
              {/* Invisible transparent overlay to prevent right-click save */}
              <div
                className="absolute inset-0 z-10"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
