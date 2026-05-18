import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Carousel from "./carousel";

describe("Carousel", () => {
  it("renders all slide images", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(5);
  });

  it("renders slide indicators", () => {
    render(<Carousel />);
    const indicators = screen.getAllByRole("button", { name: /go to slide/i });
    expect(indicators.length).toBe(5);
  });
});
