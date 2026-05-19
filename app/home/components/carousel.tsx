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

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full max-w-2xl px-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-term-dark-gray text-xs">
          <span className="text-term-green">$</span> cat ./screenshots/
        </span>
        <span className="text-term-gray text-xs">
          Image {current + 1} of {slides.length}
        </span>
      </div>
      <div className="overflow-hidden rounded border border-border-default bg-bg-secondary">
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-out-quart motion-reduce:transition-none"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <img
                key={slide.alt}
                src={slide.src}
                alt={slide.alt}
                className="w-full shrink-0 object-cover"
                style={{ aspectRatio: "382 / 255" }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border-subtle px-3 py-2">
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="rounded border border-border-default bg-bg-tertiary px-3 py-1 font-mono text-xs text-term-gray transition-colors hover:border-term-green hover:text-term-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-term-green"
          >
            &lt; PREV
          </button>
          <div className="flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 w-4 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-term-green ${
                  i === current ? "bg-term-green" : "bg-border-default"
                }`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            aria-label="Next"
            className="rounded border border-border-default bg-bg-tertiary px-3 py-1 font-mono text-xs text-term-gray transition-colors hover:border-term-green hover:text-term-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-term-green"
          >
            NEXT &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
