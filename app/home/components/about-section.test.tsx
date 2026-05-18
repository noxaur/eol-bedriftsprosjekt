import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutSection from "./about-section";

describe("AboutSection", () => {
  it("renders the section heading with mixed styling", () => {
    render(<AboutSection />);
    expect(screen.getByText("Maintaining")).toBeInTheDocument();
    expect(screen.getByText("EOL")).toBeInTheDocument();
    expect(screen.getByText("software")).toBeInTheDocument();
  });

  it("renders body paragraphs", () => {
    render(<AboutSection />);
    expect(screen.getByText(/At our core, we empower businesses/)).toBeInTheDocument();
    expect(screen.getByText(/most new tech is not built for everyone/)).toBeInTheDocument();
    expect(screen.getByText(/Keep your foundation solid/)).toBeInTheDocument();
  });

  it("renders the InfoCard", () => {
    render(<AboutSection />);
    expect(screen.getByText("Why it matters")).toBeInTheDocument();
    expect(screen.getByText(/Every day your EOL software runs/)).toBeInTheDocument();
  });

  it("accepts an id prop", () => {
    const { container } = render(<AboutSection id="test-section" />);
    const section = container.querySelector("#test-section");
    expect(section).toBeInTheDocument();
  });
});
