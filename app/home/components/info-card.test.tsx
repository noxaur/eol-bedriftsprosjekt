import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import InfoCard from "./info-card";

describe("InfoCard", () => {
  const props = {
    title: "Card Title",
    body: "Card body text content that describes something about the product.",
  };

  it("renders the card title", () => {
    render(<InfoCard title={props.title} body={props.body} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it("renders the card body text", () => {
    render(<InfoCard title={props.title} body={props.body} />);
    expect(screen.getByText(props.body)).toBeInTheDocument();
  });
});
