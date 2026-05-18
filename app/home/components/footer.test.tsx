import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Footer from "./footer";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe("Footer", () => {
  it("renders the logo", () => {
    render(<Footer />, { wrapper });
    expect(screen.getByText("ReOL")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Footer />, { wrapper });
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Contact Sales")).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />, { wrapper });
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });
});
