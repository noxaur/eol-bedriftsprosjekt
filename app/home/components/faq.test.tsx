import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Faq from "./faq";

describe("Faq", () => {
  it("renders the section heading", () => {
    render(<Faq />);
    expect(screen.getByText("Frequently asked questions")).toBeInTheDocument();
  });

  it("renders FAQ items with questions and answers", () => {
    render(<Faq />);
    expect(
      screen.getByText("What happens when my software reaches end of life?"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/We provide continued maintenance/),
    ).toBeInTheDocument();
  });
});
