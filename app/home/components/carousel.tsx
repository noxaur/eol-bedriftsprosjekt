import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/images/carousel-1.png", alt: "Slide 1" },
  { src: "/images/carousel-2.png", alt: "Slide 2" },
  { src: "/images/carousel-3.png", alt: "Slide 3" },
  { src: "/images/carousel-4.png", alt: "Slide 4" },
  { src: "/images/carousel-5.png", alt: "Slide 5" },
];

const SLIDE_WIDTH = 382;
const GAP = 23;
const STEP = SLIDE_WIDTH + GAP;

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  return (
    <div
      className="relative mx-auto w-[382px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-[23px] transition-transform duration-500"
        style={{
          transform: `translateX(-${current * STEP}px)`,
          transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      >
        {slides.map((slide) => (
          <div key={slide.alt} className="relative shrink-0">
            <div className="overflow-hidden rounded-lg border border-noir-border bg-noir-surface p-1">
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-[255px] w-[382px] shrink-0 rounded object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-1 top-1/2 -translate-y-1/2 rounded-md bg-noir-surface/80 p-1.5 text-noir-text opacity-0 transition-opacity hover:bg-noir-surface-elevated focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-noir-accent group-hover:opacity-100"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md bg-noir-surface/80 p-1.5 text-noir-text opacity-0 transition-opacity hover:bg-noir-surface-elevated focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-noir-accent group-hover:opacity-100"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="mt-3 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === current
                ? "w-6 bg-noir-accent"
                : "w-1.5 bg-noir-border hover:bg-noir-text-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
