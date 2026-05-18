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

  it("renders an arrow icon inside Read more button", () => {
    render(<ButtonPair />);
    const readMore = screen.getByRole("button", { name: /read more/i });
    expect(readMore.querySelector("svg")).toBeTruthy();
  });
});
