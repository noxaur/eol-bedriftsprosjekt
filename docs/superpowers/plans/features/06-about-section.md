# 06 — About Section

> **Before starting:** Invoke the `using-superpowers` skill first.
>
> **Branch:** `feature/about-section`
> **Dependencies:** 00-setup must be merged first (needs theme tokens + fonts + test infra)

## What this builds

An "About" text section with the headline "Maintaining _EOL_ software" (where "EOL" is italic and green) and a multi-paragraph body describing the company's mission. Matches the Figma Frame 4 / About group in the iPhone 17 design.

## Figma reference

- Heading: DM Serif Display, 28px, base color `#2B8838`
  - "Maintaining" — Roboto Bold
  - "EOL" — Roboto Condensed Bold Italic, `#1F211F`
  - "software" — Roboto Bold
- Body: Roboto, 14px, `#143F1A`
- Container: 330px wide

## Files

- Create: `app/home/components/about-section.tsx`
- Create: `app/home/components/about-section.test.tsx`

## Implementation

### Step 1: Write the test

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutSection from "./about-section";

describe("AboutSection", () => {
  it("renders the heading with EOL italicized", () => {
    render(<AboutSection />);
    expect(screen.getByText("Maintaining")).toBeInTheDocument();
    expect(screen.getByText("EOL")).toBeInTheDocument();
    expect(screen.getByText("software")).toBeInTheDocument();
  });

  it("renders the body paragraph", () => {
    render(<AboutSection />);
    expect(
      screen.getByText(/At our core, we empower businesses/),
    ).toBeInTheDocument();
  });
});
```

### Step 2: Verify it fails

```bash
npx vitest run app/home/components/about-section.test.tsx
```

Expected: FAIL — module not found.

### Step 3: Write the component

```tsx
export default function AboutSection() {
  return (
    <section className="mx-auto w-[330px]">
      <h2 className="font-heading text-[28px] leading-tight text-green-dark">
        <span className="font-body font-bold">Maintaining</span>{" "}
        <span className="font-heading-condensed font-bold italic" style={{ color: "#1F211F" }}>EOL</span>{" "}
        <span className="font-body font-bold">software</span>
      </h2>
      <div className="mt-6 flex flex-col gap-[10px]">
        <p className="font-body text-sm leading-relaxed text-green-darker">
          At our core, we empower businesses that might lack the budget,
          resources, or specific components needed for future-proof support.
          We're here to safeguard your company from lost revenue and the massive
          overhead of developing, maintaining, and installing new software.
        </p>
        <p className="font-body text-sm leading-relaxed text-green-darker">
          Let's face it: most "new" tech isn't built for everyone, and software
          providers often overlook that reality. Technology is inherently
          unstable—so we stabilize it for you.
        </p>
        <p className="font-body text-sm leading-relaxed text-green-darker">
          We ensure your existing software continues to carry the weight of your
          infrastructure, preventing collapse caused by forced implementations,
          feature bloat, or the removal of legacy systems. Keep your foundation
          solid.
        </p>
      </div>
    </section>
  );
}
```

### Step 4: Verify it passes

```bash
npx vitest run app/home/components/about-section.test.tsx
```

Expected: PASS.

## How to test

```bash
npx vitest run app/home/components/about-section.test.tsx
```

## Commit

```bash
git add app/home/components/about-section.tsx app/home/components/about-section.test.tsx
git commit -m "feat: add AboutSection with EOL software messaging"
```
