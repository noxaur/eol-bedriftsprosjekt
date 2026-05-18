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
    <div className="mx-auto w-[382px] overflow-hidden">
      <div
        className="flex gap-[23px] transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * STEP}px)` }}
      >
        {slides.map((slide) => (
          <img
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            className="h-[255px] w-[382px] shrink-0 rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
}
