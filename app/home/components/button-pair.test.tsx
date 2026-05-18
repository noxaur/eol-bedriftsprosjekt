import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ButtonPair from "./button-pair";

describe("ButtonPair", () => {
  it("renders contact sales button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Contact sales")).toBeInTheDocument();
  });

  it("renders read more button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });
});
