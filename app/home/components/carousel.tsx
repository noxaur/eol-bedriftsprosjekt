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

  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="mx-auto w-full max-w-3xl px-4">
      <div className="retro-box p-3">
        <div className="mb-2 flex items-center justify-between font-body text-xs text-font-muted">
          <span>SOFTWARE SHOWCASE</span>
          <span>
            Image {current + 1} of {slides.length}
          </span>
        </div>
        <div className="retro-box-inset overflow-hidden">
          <div
            className="carousel-track flex"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <img
                key={slide.alt}
                src={slide.src}
                alt={slide.alt}
                className="w-full shrink-0 object-cover"
                style={{ aspectRatio: "382/255" }}
              />
            ))}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="retro-btn-outline px-3 py-1 text-sm"
          >
            {"<<"}
          </button>
          <div className="flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-3 w-3 border ${
                  i === current
                    ? "bg-retro-blue border-retro-blue"
                    : "bg-retro-white border-retro-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="retro-btn-outline px-3 py-1 text-sm"
          >
            {">>"}
          </button>
        </div>
      </div>
    </section>
  );
}
