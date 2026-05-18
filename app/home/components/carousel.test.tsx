import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Carousel from "./carousel";

beforeEach(() => {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query === "(prefers-reduced-motion: reduce)" ? false : false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
});

describe("Carousel", () => {
  it("renders all 5 carousel images", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(5);
  });

  it("renders images with descriptive alt text", () => {
    render(<Carousel />);
    expect(screen.getByAltText("Dashboard showing system monitoring overview")).toBeInTheDocument();
    expect(screen.getByAltText("Maintenance timeline and milestone tracker")).toBeInTheDocument();
  });

  it("shows only one image at a time by constraining container", () => {
    const { container } = render(<Carousel />);
    const outer = container.querySelector(".overflow-hidden");
    expect(outer).toBeTruthy();
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
    const track = container.querySelector(".transition-transform");
    expect(track).toBeTruthy();
  });

  it("renders prev and next navigation buttons", () => {
    render(<Carousel />);
    expect(screen.getByRole("button", { name: "Previous slide" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next slide" })).toBeInTheDocument();
  });

  it("renders pause/play toggle button", () => {
    render(<Carousel />);
    expect(screen.getByRole("button", { name: "Pause autoplay" })).toBeInTheDocument();
  });

  it("renders slide indicator dots", () => {
    render(<Carousel />);
    const dots = screen.getAllByRole("button", { name: /Go to slide/ });
    expect(dots).toHaveLength(5);
  });

  it("has carousel region with accessible label", () => {
    render(<Carousel />);
    expect(screen.getByRole("region", { name: "Product screenshots carousel" })).toBeInTheDocument();
  });
});
