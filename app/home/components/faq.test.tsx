import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Faq from "./faq";

describe("Faq", () => {
  it("renders the section heading", () => {
    render(<Faq />);
    expect(screen.getByText("Questions? We have answers")).toBeInTheDocument();
  });

  it("renders FAQ items", () => {
    render(<Faq />);
    expect(screen.getByText("What does maintained software mean?")).toBeInTheDocument();
    expect(screen.getByText("How is this different from agencies?")).toBeInTheDocument();
  });
});
