import { useState, useRef, useEffect } from "react"
import type { PhotoItem } from "../data/galleryData"
import { Eyebrow, GoldDivider } from "./shared"

interface PhotoSliderProps {
  title: string
  eyebrowText: string
  subtitle: string
  photos: PhotoItem[]
  theme?: "dark" | "light"
  sectionId?: string
}

export default function PhotoSlider({
  title,
  eyebrowText,
  subtitle,
  photos,
  theme = "light",
  sectionId,
}: PhotoSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const isDark = theme === "dark"

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

      // Estimate active index based on card width
      const cardWidth = scrollRef.current.firstElementChild
        ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 24
        : 350
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(Math.min(Math.max(0, newIndex), photos.length - 1))
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true })
      checkScroll()
      return () => el.removeEventListener("scroll", checkScroll)
    }
  }, [photos])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 24
        : 360
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 24
        : 360
      container.scrollTo({ left: index * cardWidth, behavior: "smooth" })
    }
  }

  return (
    <section
      id={sectionId}
      className={`py-20 px-6 transition-colors duration-300 relative overflow-hidden`}
      style={{
        background: isDark
          ? "linear-gradient(180deg, #070D16 0%, #0B1524 50%, #070D16 100%)"
          : "linear-gradient(180deg, #FAFAF7 0%, #F4F0E8 50%, #FAFAF7 100%)",
      }}
    >
      {/* Background ambient glow for dark theme */}
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 20%, rgba(201, 162, 75, 0.15) 0%, transparent 60%)",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <Eyebrow
              className="mb-2.5 inline-block text-xs"
              style={{ color: isDark ? "#C9A24B" : "#A07828" }}
            >
              {eyebrowText}
            </Eyebrow>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-3"
              style={{ color: isDark ? "#FFFFFF" : "#0D1B2A" }}
            >
              {title}
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: isDark ? "rgba(255,255,255,0.7)" : "#4A5568" }}
            >
              {subtitle}
            </p>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous photos"
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                !canScrollLeft
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:scale-105 active:scale-95"
              }`}
              style={{
                borderColor: isDark
                  ? "rgba(201, 162, 75, 0.4)"
                  : "rgba(160, 120, 40, 0.35)",
                background: isDark
                  ? "rgba(13, 27, 42, 0.8)"
                  : "rgba(255, 255, 255, 0.9)",
                color: isDark ? "#C9A24B" : "#A07828",
                boxShadow: isDark
                  ? "0 4px 12px rgba(0,0,0,0.4)"
                  : "0 2px 8px rgba(13,27,42,0.08)",
              }}
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next photos"
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                !canScrollRight
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:scale-105 active:scale-95"
              }`}
              style={{
                borderColor: isDark
                  ? "rgba(201, 162, 75, 0.4)"
                  : "rgba(160, 120, 40, 0.35)",
                background: isDark
                  ? "rgba(13, 27, 42, 0.8)"
                  : "rgba(255, 255, 255, 0.9)",
                color: isDark ? "#C9A24B" : "#A07828",
                boxShadow: isDark
                  ? "0 4px 12px rgba(0,0,0,0.4)"
                  : "0 2px 8px rgba(13,27,42,0.08)",
              }}
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Sliding Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[400px] snap-start rounded-sm overflow-hidden cursor-pointer group transition-all duration-300 transform hover:-translate-y-1.5"
              style={{
                background: isDark ? "#0D1B2A" : "#FFFFFF",
                border: isDark
                  ? "1px solid rgba(201, 162, 75, 0.25)"
                  : "1px solid rgba(13, 27, 42, 0.1)",
                boxShadow: isDark
                  ? "0 8px 24px rgba(0,0,0,0.4)"
                  : "0 4px 20px rgba(13,27,42,0.08)",
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-black/20">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-20 group-hover:opacity-0"
                  style={{
                    background: isDark
                      ? "linear-gradient(to top, rgba(13,27,42,0.8) 0%, transparent 60%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
                  }}
                />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-sm text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md"
                    style={{
                      background: isDark
                        ? "rgba(13, 27, 42, 0.85)"
                        : "rgba(255, 255, 255, 0.9)",
                      color: isDark ? "#C9A24B" : "#A07828",
                      border: isDark
                        ? "1px solid rgba(201, 162, 75, 0.4)"
                        : "1px solid rgba(160, 120, 40, 0.25)",
                    }}
                  >
                    {photo.tag}
                  </span>
                </div>

                {/* Enlarge Hint on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
                  <div className="px-3.5 py-1.5 rounded-full bg-black/60 text-white text-xs tracking-wide flex items-center gap-1.5 border border-white/20">
                    <svg
                      className="w-3.5 h-3.5"
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
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </div>

              {/* Photo Caption Details */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span
                      className="font-medium tracking-wide"
                      style={{ color: isDark ? "#C9A24B" : "#A07828" }}
                    >
                      {photo.location}
                    </span>
                    {photo.cameraInfo && (
                      <span
                        className="text-[11px]"
                        style={{
                          color: isDark ? "rgba(255,255,255,0.5)" : "#718096",
                        }}
                      >
                        {photo.cameraInfo}
                      </span>
                    )}
                  </div>
                  <h3
                    className="font-serif text-lg font-bold leading-snug line-clamp-1"
                    style={{ color: isDark ? "#FFFFFF" : "#0D1B2A" }}
                  >
                    {photo.title}
                  </h3>
                  {photo.subtitle && (
                    <p
                      className="text-xs leading-relaxed mt-1.5 line-clamp-2"
                      style={{
                        color: isDark ? "rgba(255,255,255,0.7)" : "#4A5568",
                      }}
                    >
                      {photo.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: currentIndex === index ? "28px" : "8px",
                background:
                  currentIndex === index
                    ? isDark
                      ? "#C9A24B"
                      : "#A07828"
                    : isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(13, 27, 42, 0.2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Close preview"
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 text-2xl font-light cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Image */}
            <div className="rounded-sm overflow-hidden max-h-[75vh] w-full flex items-center justify-center bg-black/40 border border-white/10">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="w-full mt-4 text-center px-4">
              <span
                className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm"
                style={{
                  background: "rgba(201, 162, 75, 0.2)",
                  color: "#C9A24B",
                  border: "1px solid rgba(201, 162, 75, 0.3)",
                }}
              >
                {activePhoto.tag} • {activePhoto.location}
              </span>
              <h4 className="font-serif text-xl md:text-2xl font-bold text-white mt-2">
                {activePhoto.title}
              </h4>
              {activePhoto.subtitle && (
                <p className="text-sm text-white/70 mt-1 max-w-2xl mx-auto">
                  {activePhoto.subtitle}
                </p>
              )}
              {activePhoto.cameraInfo && (
                <p className="text-xs text-white/50 mt-1">
                  {activePhoto.cameraInfo}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
