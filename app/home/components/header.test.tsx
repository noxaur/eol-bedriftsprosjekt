import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./header";

describe("Header", () => {
  it("renders the logo image", () => {
    render(<Header />);
    expect(screen.getByAltText("ReOL")).toBeInTheDocument();
  });

  it("renders the 'Maintained software' pill button", () => {
    render(<Header />);
    expect(screen.getByText("Maintained software")).toBeInTheDocument();
  });

  it("renders the hamburger menu button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
