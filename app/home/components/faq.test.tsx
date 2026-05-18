import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Faq from "./faq";

describe("Faq", () => {
  it("renders the section heading", () => {
    render(<Faq />);
    expect(screen.getByText("Frequently asked questions")).toBeInTheDocument();
  });

  it("renders FAQ questions", () => {
    render(<Faq />);
    expect(screen.getByText("What does EOL software mean?")).toBeInTheDocument();
    expect(screen.getByText("Why not just upgrade to the latest version?")).toBeInTheDocument();
  });

  it("expands an answer when clicked", () => {
    render(<Faq />);
    const firstQuestion = screen.getByText("What does EOL software mean?");
    const button = firstQuestion.closest("button")!;

    expect(button.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");

    const answer = screen.getByText(/EOL stands for End of Life/);
    expect(answer).toBeInTheDocument();
  });

  it("collapses an answer when clicked again", () => {
    render(<Faq />);
    const firstQuestion = screen.getByText("What does EOL software mean?");
    const button = firstQuestion.closest("button")!;

    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");

    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("false");
  });
});
