import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import InfoCard from "./info-card";

describe("InfoCard", () => {
  it("renders title and body", () => {
    render(<InfoCard title="Test Title" body="Test body content" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test body content")).toBeInTheDocument();
  });

  it("renders number when provided", () => {
    render(<InfoCard title="Test" body="Body" number="01" />);
    expect(screen.getByText("01")).toBeInTheDocument();
  });

  it("does not render number when not provided", () => {
    render(<InfoCard title="Test" body="Body" />);
    const numbers = screen.queryAllByText(/\d{2}/);
    expect(numbers.length).toBe(0);
  });
});
