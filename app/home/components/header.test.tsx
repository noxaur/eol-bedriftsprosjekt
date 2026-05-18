import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./header";

describe("Header", () => {
  it("renders the logo text", () => {
    render(<Header />);
    expect(screen.getByText("EOL")).toBeInTheDocument();
  });

  it("renders the 'Maintained software' label on desktop", () => {
    render(<Header />);
    expect(screen.getByText("Maintained software")).toBeInTheDocument();
  });

  it("renders the menu toggle button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
