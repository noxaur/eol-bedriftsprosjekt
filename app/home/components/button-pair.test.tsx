import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ButtonPair from "./button-pair";

describe("ButtonPair", () => {
  it("renders the 'Contact Sales' button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Contact Sales")).toBeInTheDocument();
  });

  it("renders the 'Read More' button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Read More")).toBeInTheDocument();
  });

  it("renders an arrow icon inside Contact Sales button", () => {
    render(<ButtonPair />);
    const contactSales = screen.getByRole("button", { name: /contact sales/i });
    expect(contactSales.querySelector("img")).toBeTruthy();
  });
});
