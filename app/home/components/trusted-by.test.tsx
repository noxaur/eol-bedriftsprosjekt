import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TrustedBy from "./trusted-by";

describe("TrustedBy", () => {
  it("renders the 'TRUSTED BY' heading", () => {
    render(<TrustedBy />);
    expect(screen.getByText("TRUSTED BY")).toBeInTheDocument();
  });

  it("renders the customer logos image", () => {
    render(<TrustedBy />);
    const logos = screen.getAllByAltText("Customer logos");
    expect(logos.length).toBeGreaterThanOrEqual(1);
    expect(logos[0]).toBeInTheDocument();
  });
});
