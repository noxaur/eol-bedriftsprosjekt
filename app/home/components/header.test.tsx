import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./header";

describe("Header", () => {
  it("renders the logo text", () => {
    render(<Header />);
    expect(screen.getByText("EOL")).toBeInTheDocument();
  });

  it("renders the 'maintained software' label on desktop", () => {
    render(<Header />);
    expect(screen.getByText("maintained software")).toBeInTheDocument();
  });

  it("renders the menu toggle button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
