import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  { src: "/images/carousel-1.png", alt: "Dashboard showing system monitoring overview" },
  { src: "/images/carousel-2.png", alt: "Code review interface with annotated changes" },
  { src: "/images/carousel-3.png", alt: "Deployment pipeline status page" },
  { src: "/images/carousel-4.png", alt: "Legacy codebase analysis report" },
  { src: "/images/carousel-5.png", alt: "Maintenance timeline and milestone tracker" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reducedMotion, paused]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === " ") {
      e.preventDefault();
      setPaused((p) => !p);
    }
  };

  return (
    <div
      className="w-full"
      role="region"
      aria-label="Product screenshots carousel"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative overflow-hidden rounded-sm">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-out-expo"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.alt}
              src={slide.src}
              alt={slide.alt}
              className="w-full shrink-0 object-cover aspect-[4/3]"
              role="img"
              aria-roledescription="slide"
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-cream/90 text-charcoal hover:bg-terracotta hover:text-cream transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 3l-5 5 5 5" />
          </svg>
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-cream/90 text-charcoal hover:bg-terracotta hover:text-cream transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
          className="h-6 w-6 flex items-center justify-center text-charcoal-light hover:text-terracotta transition-colors"
        >
          {paused ? (
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4 2l10 6-10 6V2z" />
            </svg>
          ) : (
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
              <rect x="3" y="2" width="3.5" height="12" rx="0.5" />
              <rect x="9.5" y="2" width="3.5" height="12" rx="0.5" />
            </svg>
          )}
        </button>

        <div className="flex gap-2 ml-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-terracotta"
                  : "w-1.5 bg-cream-deeper hover:bg-terracotta-light"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
