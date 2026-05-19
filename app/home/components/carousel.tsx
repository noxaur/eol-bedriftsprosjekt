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
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlideWidth(382);
      } else {
        const container = document.querySelector("#carousel-container");
        if (container) {
          setSlideWidth(container.clientWidth);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gap = 23;
  const step = slideWidth + gap;

  return (
    <div id="carousel-container" className="mx-auto w-full max-w-[382px] overflow-hidden md:w-[382px]">
      <div
        className="flex gap-[23px] transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * step}px)` }}
      >
        {slides.map((slide) => (
          <img
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            className="h-auto w-full shrink-0 rounded-lg object-cover md:h-[255px] md:w-[382px]"
            style={{ aspectRatio: slideWidth ? "382 / 255" : "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
