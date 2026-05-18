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

  it("shows only one image at a time by constraining container", () => {
    const { container } = render(<Carousel />);
    const outer = container.firstChild as HTMLElement;
    expect(outer.className).toContain("overflow-hidden");
    expect(outer.className).toContain("w-full");
  });

  it("prevents images from shrinking", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img.className).toContain("shrink-0");
      expect(img.className).toContain("w-full");
    });
  });

  it("applies transition to the inner track for auto-swap", () => {
    const { container } = render(<Carousel />);
    const outer = container.firstChild as HTMLElement;
    const inner = outer.firstChild as HTMLElement;
    expect(inner.className).toContain("transition-transform");
  });
});
