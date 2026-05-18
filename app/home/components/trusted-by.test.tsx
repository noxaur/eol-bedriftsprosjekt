import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TrustedBy from "./trusted-by";

describe("TrustedBy", () => {
  it("renders the 'Trusted by' label", () => {
    render(<TrustedBy />);
    expect(screen.getByText("Trusted by")).toBeInTheDocument();
  });

  it("renders customer logos", () => {
    render(<TrustedBy />);
    const logos = screen.getAllByAltText("Customer logos");
    expect(logos.length).toBe(3);
  });
});
