import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./header";

describe("Header", () => {
  it("renders the eol text", () => {
    render(<Header />);
    expect(screen.getByText("eol")).toBeInTheDocument();
  });

  it("renders the active status badge", () => {
    render(<Header />);
    expect(screen.getByText("$ STATUS: ACTIVE")).toBeInTheDocument();
  });

  it("renders the [MENU] button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
