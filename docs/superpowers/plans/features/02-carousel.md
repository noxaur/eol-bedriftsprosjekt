# 02 — Carousel Component

> **Before starting:** Invoke the `using-superpowers` skill first.
>
> **Branch:** `feature/carousel`
> **Dependencies:** 00-setup must be merged first (needs test infra)

## What this builds

A horizontal scrollable image carousel (slider) with 5 placeholder images. Uses CSS scroll-snap for a native feel. Matches the Figma Slider instance in the iPhone 17 Main section.

## Figma reference

- Carousel width: 262px, height: 175px
- 5 images in a horizontal scroll strip
- snap scrolling behavior

## Files

- Create: `app/home/components/carousel.tsx`
- Create: `app/home/components/carousel.test.tsx`
- Delete: `app/home/components/carrousel.tsx` (typo'd placeholder from earlier scaffolding)

## Implementation

### Step 1: Write the test

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Carousel from "./carousel";

describe("Carousel", () => {
  it("renders all 5 carousel images", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(5);
  });

  it("renders images with correct alt text", () => {
    render(<Carousel />);
    expect(screen.getByAltText("Slide 1")).toBeInTheDocument();
    expect(screen.getByAltText("Slide 5")).toBeInTheDocument();
  });
});
```

### Step 2: Verify it fails

```bash
npx vitest run app/home/components/carousel.test.tsx
```

Expected: FAIL — module not found.

### Step 3: Write the component

```tsx
const slides = [
  { src: "/images/carousel-1.png", alt: "Slide 1" },
  { src: "/images/carousel-2.png", alt: "Slide 2" },
  { src: "/images/carousel-3.png", alt: "Slide 3" },
  { src: "/images/carousel-4.png", alt: "Slide 4" },
  { src: "/images/carousel-5.png", alt: "Slide 5" },
];

export default function Carousel() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-0" style={{ scrollSnapType: "x mandatory" }}>
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
```

### Step 4: Remove old typo'd placeholder

```bash
rm app/home/components/carrousel.tsx
```

### Step 5: Verify it passes

```bash
npx vitest run app/home/components/carousel.test.tsx
```

Expected: PASS.

## How to test

```bash
npx vitest run app/home/components/carousel.test.tsx
```

## Commit

```bash
git add app/home/components/carousel.tsx app/home/components/carousel.test.tsx
git rm app/home/components/carrousel.tsx
git commit -m "feat: add Carousel component with 5 slides"
```
