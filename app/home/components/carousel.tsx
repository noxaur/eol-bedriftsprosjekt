import { useState, useEffect } from "react";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-[382px]">
      {/* Decorative frame elements */}
      <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-accent-warm/60" />
      <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent-gold/60" />
      <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-accent-gold/60" />
      <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-accent-warm/60" />

      {/* Pattern overlay behind carousel */}
      <div className="absolute -inset-4 pattern-diagonal opacity-[0.03] -z-10" />

      <div className="overflow-hidden rounded-[5px]">
        <div
          className="flex gap-[23px] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * STEP}px)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.alt}
              src={slide.src}
              alt={slide.alt}
              className="h-[255px] w-[382px] shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Slide indicators with bold style */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[3px] transition-all duration-300 ${
              i === current
                ? "w-8 bg-accent-warm"
                : "w-3 bg-green-normal/30 hover:bg-green-normal/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
