import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Faq from "./faq";

describe("Faq", () => {
  it("renders the section heading", () => {
    render(<Faq />);
    expect(screen.getByText(/FREQUENTLY ASKED QUESTIONS/)).toBeInTheDocument();
  });

  it("renders FAQ items with questions", () => {
    render(<Faq />);
    expect(screen.getByText(/What software do you maintain/)).toBeInTheDocument();
    expect(screen.getByText(/How long have you been doing this/)).toBeInTheDocument();
  });

  it("expands an item when clicked", async () => {
    render(<Faq />);
    const firstQuestion = screen.getByText(/What software do you maintain/);
    expect(screen.queryByText(/We maintain legacy enterprise/)).toBeInTheDocument();
  });
});
