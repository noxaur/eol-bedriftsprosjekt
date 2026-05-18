import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Carousel from "./carousel";

describe("Carousel", () => {
  it("renders all 5 carousel images", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    // 5 slides + 2 corner decorations (svg images) = 7, but corner decorations are not img elements
    expect(images.length).toBeGreaterThanOrEqual(5);
  });

  it("renders images with correct alt text", () => {
    render(<Carousel />);
    expect(screen.getByAltText("Slide 1")).toBeInTheDocument();
    expect(screen.getByAltText("Slide 5")).toBeInTheDocument();
  });

  it("shows only one centered image at a time by constraining container width", () => {
    const { container } = render(<Carousel />);
    // The outermost wrapper has w-[382px]
    const outer = container.firstChild as HTMLElement;
    expect(outer.className).toContain("w-[382px]");
    expect(outer.className).toContain("mx-auto");
  });

  it("prevents images from shrinking below carousel width", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    const slideImages = (images as HTMLImageElement[]).filter(
      (img) => img.alt.startsWith("Slide")
    );
    slideImages.forEach((img) => {
      expect(img.className).toContain("shrink-0");
      expect(img.className).toContain("w-[382px]");
      expect(img.className).toContain("h-[255px]");
    });
  });

  it("applies transition to the inner track for auto-swap", () => {
    const { container } = render(<Carousel />);
    const outer = container.firstChild as HTMLElement;
    // Find the overflow-hidden div
    const overflowDiv = outer.querySelector(".overflow-hidden") as HTMLElement;
    expect(overflowDiv).toBeTruthy();
    const inner = overflowDiv?.firstChild as HTMLElement;
    expect(inner?.className).toContain("transition-transform");
  });
});
