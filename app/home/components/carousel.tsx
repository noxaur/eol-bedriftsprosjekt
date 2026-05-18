const slides = [
  { src: "/images/carousel-1.png", alt: "Slide 1" },
  { src: "/images/carousel-2.png", alt: "Slide 2" },
  { src: "/images/carousel-3.png", alt: "Slide 3" },
  { src: "/images/carousel-4.png", alt: "Slide 4" },
  { src: "/images/carousel-5.png", alt: "Slide 5" },
];

export default function Carousel() {
  return (
    <div className="w-full max-w-full overflow-x-auto">
      <div className="flex gap-[23px]" style={{ scrollSnapType: "x mandatory" }}>
        {slides.map((slide) => (
          <img
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            className="h-[175px] w-[262px] shrink-0 object-cover"
            style={{ scrollSnapAlign: "start" }}
          />
        ))}
      </div>
    </div>
  );
}
