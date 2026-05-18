import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./footer";

describe("Footer", () => {
  it("renders the brand name", () => {
    render(<Footer />);
    expect(screen.getByText("EOL")).toBeInTheDocument();
  });

  it("renders the location", () => {
    render(<Footer />);
    expect(screen.getByText("Oslo, Norway")).toBeInTheDocument();
  });

  it("renders the year", () => {
    render(<Footer />);
    expect(screen.getByText("2026")).toBeInTheDocument();
  });
});
