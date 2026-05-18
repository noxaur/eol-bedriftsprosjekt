import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ButtonPair from "./button-pair";

describe("ButtonPair", () => {
  it("renders say hello button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Say hello")).toBeInTheDocument();
  });

  it("renders learn more button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Learn more")).toBeInTheDocument();
  });
});
