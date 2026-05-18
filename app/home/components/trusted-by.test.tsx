import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TrustedBy from "./trusted-by";

describe("TrustedBy", () => {
  it("renders the customer trust heading", () => {
    render(<TrustedBy />);
    expect(screen.getByText(/Used by organizations/)).toBeInTheDocument();
  });

  it("renders the customer logos image", () => {
    render(<TrustedBy />);
    const logos = screen.getAllByAltText("Customer logos");
    expect(logos.length).toBeGreaterThanOrEqual(1);
    expect(logos[0]).toBeInTheDocument();
  });
});
