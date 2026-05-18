import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Faq from "./faq";

describe("Faq", () => {
  it("renders the section heading", () => {
    render(<Faq />);
    expect(screen.getByText("Frequently asked questions")).toBeInTheDocument();
  });

  it("renders the body text", () => {
    render(<Faq />);
    expect(
      screen.getByText(/daskjdaksdabsdkbajsdaas/),
    ).toBeInTheDocument();
  });
});
