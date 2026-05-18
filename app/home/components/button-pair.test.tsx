import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ButtonPair from "./button-pair";

describe("ButtonPair", () => {
  it("renders the 'Contact sales' button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Contact sales")).toBeInTheDocument();
  });

  it("renders the 'Read more' button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });

  it("renders an arrow icon inside Contact sales button", () => {
    render(<ButtonPair />);
    const buttons = screen.getAllByRole("button");
    const contactSales = buttons[0];
    expect(contactSales.querySelector("img")).toBeTruthy();
  });
});
