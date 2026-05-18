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

  it("shows the slide counter", () => {
    render(<Carousel />);
    expect(screen.getByText(/Image 1 of 5/)).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<Carousel />);
    expect(screen.getByRole("button", { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
  });

  it("applies transition to the inner track for auto-swap", () => {
    const { container } = render(<Carousel />);
    const innerTrack = container.querySelector('.transition-transform');
    expect(innerTrack).toBeTruthy();
  });
});
