import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect, vi } from "vitest";
import ButtonPair from "./button-pair";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe("ButtonPair", () => {
  it("renders the 'Contact sales' link", () => {
    render(<ButtonPair />, { wrapper });
    expect(screen.getByText("Contact sales")).toBeInTheDocument();
  });

  it("renders the 'Read more' button", () => {
    render(<ButtonPair />, { wrapper });
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });

  it("renders an arrow icon inside Contact sales link", () => {
    render(<ButtonPair />, { wrapper });
    const contactSales = screen.getByText("Contact sales").closest("a");
    expect(contactSales?.querySelector("img")).toBeTruthy();
  });

  it("Contact sales links to /contact-sales", () => {
    render(<ButtonPair />, { wrapper });
    const link = screen.getByText("Contact sales").closest("a");
    expect(link?.getAttribute("href")).toBe("/contact-sales");
  });

  it("calls onReadMore when Read more is clicked", () => {
    const onReadMore = vi.fn();
    render(<ButtonPair onReadMore={onReadMore} />, { wrapper });
    screen.getByText("Read more").click();
    expect(onReadMore).toHaveBeenCalledTimes(1);
  });
});
