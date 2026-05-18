import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./header";

describe("Header", () => {
  it("renders the logo text", () => {
    render(<Header />);
    expect(screen.getByText("ReOL")).toBeInTheDocument();
  });

  it("renders the 'Maintained Software' badge", () => {
    render(<Header />);
    expect(screen.getByText("Maintained Software")).toBeInTheDocument();
  });

  it("renders the [MENU] button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
