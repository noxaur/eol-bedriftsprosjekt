import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TrustedBy from "./trusted-by";

describe("TrustedBy", () => {
  it("renders the 'Trusted by' heading", () => {
    render(<TrustedBy />);
    expect(screen.getByText("Trusted by")).toBeInTheDocument();
  });

  it("renders the customer logos image", () => {
    render(<TrustedBy />);
    const logos = screen.getByAltText("Customer logos");
    expect(logos).toBeInTheDocument();
  });
});
