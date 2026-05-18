import { useState, useEffect } from "react";

const slides = [
  { src: "/images/carousel-1.png", alt: "Slide 1" },
  { src: "/images/carousel-2.png", alt: "Slide 2" },
  { src: "/images/carousel-3.png", alt: "Slide 3" },
  { src: "/images/carousel-4.png", alt: "Slide 4" },
  { src: "/images/carousel-5.png", alt: "Slide 5" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="flex gap-4 transition-transform duration-500 ease-out">
          {slides.map((slide, i) => (
            <div
              key={slide.alt}
              className="relative shrink-0 overflow-hidden border border-rule"
              style={{ width: "min(100%, 480px)" }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-rule bg-surface-raised px-4 py-2">
                <span className="text-xs font-medium text-text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-2 w-2 bg-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="mt-4 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 transition-all duration-300 ${
              i === current
                ? "w-8 bg-accent"
                : "w-4 bg-rule hover:bg-text-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
