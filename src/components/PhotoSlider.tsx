import { useState, useRef, useEffect, useCallback } from "react"
import type { PhotoItem } from "../data/galleryData"
import { Eyebrow } from "./shared"

interface PhotoSliderProps {
  title: string
  eyebrowText: string
  subtitle?: string
  photos: PhotoItem[]
  theme?: "dark" | "light"
  sectionId?: string
  autoSlideInterval?: number
}

export default function PhotoSlider({
  title,
  eyebrowText,
  subtitle,
  photos,
  theme = "light",
  sectionId,
  autoSlideInterval = 2800,
}: PhotoSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const isDark = theme === "dark"

  const getCardWidth = useCallback(() => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      return (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 20
    }
    return 380
  }, [])

  const scrollToIndex = useCallback(
    (index: number) => {
      if (scrollRef.current) {
        const cardWidth = getCardWidth()
        scrollRef.current.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        })
        setCurrentIndex(index)
      }
    },
    [getCardWidth]
  )

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % photos.length
    scrollToIndex(nextIndex)
  }, [currentIndex, photos.length, scrollToIndex])

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length
    scrollToIndex(prevIndex)
  }, [currentIndex, photos.length, scrollToIndex])

  // Track manual scrolling
  const onScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const cardWidth = getCardWidth()
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(Math.min(Math.max(0, newIndex), photos.length - 1))
    }
  }

  // Automatic sliding interval (pauses when hovered or photo is enlarged in modal)
  useEffect(() => {
    if (isHovered || activePhoto !== null) return

    const timer = setInterval(() => {
      handleNext()
    }, autoSlideInterval)

    return () => clearInterval(timer)
  }, [isHovered, activePhoto, handleNext, autoSlideInterval])

  return (
    <section
      id={sectionId}
      className="py-16 px-4 md:px-8 relative overflow-hidden transition-colors duration-300"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #070D16 0%, #0D1B2A 50%, #070D16 100%)"
          : "linear-gradient(180deg, #FAFAF7 0%, #F4EFE6 50%, #FAFAF7 100%)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Background ambient glow for dark theme */}
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 30%, rgba(201, 162, 75, 0.15) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
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
                className="text-xs sm:text-sm md:text-base leading-relaxed mt-2 max-w-2xl"
                style={{ color: isDark ? "rgba(255,255,255,0.7)" : "#4A5568" }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              style={{
                borderColor: isDark
                  ? "rgba(201, 162, 75, 0.4)"
                  : "rgba(160, 120, 40, 0.35)",
                background: isDark
                  ? "rgba(13, 27, 42, 0.9)"
                  : "rgba(255, 255, 255, 0.95)",
                color: isDark ? "#C9A24B" : "#A07828",
                boxShadow: isDark
                  ? "0 4px 12px rgba(0,0,0,0.5)"
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
              onClick={handleNext}
              aria-label="Next photo"
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              style={{
                borderColor: isDark
                  ? "rgba(201, 162, 75, 0.4)"
                  : "rgba(160, 120, 40, 0.35)",
                background: isDark
                  ? "rgba(13, 27, 42, 0.9)"
                  : "rgba(255, 255, 255, 0.95)",
                color: isDark ? "#C9A24B" : "#A07828",
                boxShadow: isDark
                  ? "0 4px 12px rgba(0,0,0,0.5)"
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

        {/* Auto-sliding Photos Track (Pure photos, NO text) */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="flex-shrink-0 w-[80vw] sm:w-[360px] md:w-[440px] lg:w-[480px] h-[220px] sm:h-[270px] md:h-[320px] snap-start rounded-sm overflow-hidden cursor-pointer group relative transition-all duration-300 transform hover:-translate-y-1"
              style={{
                background: isDark ? "#0A121D" : "#E2DDD4",
                border: isDark
                  ? "1px solid rgba(201, 162, 75, 0.2)"
                  : "1px solid rgba(13, 27, 42, 0.12)",
                boxShadow: isDark
                  ? "0 8px 24px rgba(0,0,0,0.5)"
                  : "0 4px 16px rgba(13,27,42,0.1)",
              }}
            >
              <img
                src={photo.image}
                alt={photo.alt || title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30 backdrop-blur-sm">
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

        {/* Progress indicator dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: currentIndex === index ? "24px" : "6px",
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

      {/* Pure Image Lightbox (No text, only close button) */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Close"
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 text-2xl font-light cursor-pointer"
            >
              ✕
            </button>

            <div className="rounded-sm overflow-hidden max-h-[85vh] w-full flex items-center justify-center bg-black/50 border border-white/10">
              <img
                src={activePhoto.image}
                alt={activePhoto.alt || "Gallery Preview"}
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
