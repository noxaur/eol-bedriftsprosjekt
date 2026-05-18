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
    <div className="w-full overflow-hidden rounded-sm">
      <div
        className="flex transition-transform duration-700 ease-out-expo"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <img
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            className="w-full shrink-0 object-cover aspect-[4/3]"
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
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
  );
}
