import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TrustedBy from "./trusted-by";

describe("TrustedBy", () => {
  it("renders the trusted by label", () => {
    render(<TrustedBy />);
    expect(screen.getByText(/Trusted by teams/i)).toBeInTheDocument();
  });

  it("renders customer logos", () => {
    render(<TrustedBy />);
    const logos = screen.getAllByAltText("Customer logos");
    expect(logos.length).toBe(3);
  });
});
