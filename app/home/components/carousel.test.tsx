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

  it("prevents page overflow by constraining container width", () => {
    const { container } = render(<Carousel />);
    const outer = container.firstChild as HTMLElement;
    expect(outer.className).toContain("overflow-x-auto");
    expect(outer.className).toContain("w-full");
    expect(outer.className).toContain("max-w-full");
  });

  it("prevents images from shrinking below carousel width", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img.className).toContain("shrink-0");
      expect(img.className).toContain("w-[262px]");
      expect(img.className).toContain("h-[175px]");
    });
  });

  it("enables scroll snap on the inner track", () => {
    const { container } = render(<Carousel />);
    const outer = container.firstChild as HTMLElement;
    const inner = outer.firstChild as HTMLElement;
    expect(inner.style.scrollSnapType).toBe("x mandatory");
  });

  it("each image snaps to start", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img.style.scrollSnapAlign).toBe("start");
    });
  });
});
