import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Faq from "./faq";

describe("Faq", () => {
  it("renders the section heading", () => {
    render(<Faq />);
    expect(screen.getByText("Frequently asked questions")).toBeInTheDocument();
  });

  it("renders FAQ items", () => {
    render(<Faq />);
    expect(screen.getByText("What does EOL cover?")).toBeInTheDocument();
    expect(screen.getByText("How long does onboarding take?")).toBeInTheDocument();
    expect(screen.getByText("Can you work with our existing team?")).toBeInTheDocument();
  });
});
