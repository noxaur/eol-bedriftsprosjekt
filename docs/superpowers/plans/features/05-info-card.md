# 05 — Info Card

> **Before starting:** Invoke the `using-superpowers` skill first.
>
> **Branch:** `feature/info-card`
> **Dependencies:** 00-setup must be merged first (needs theme tokens + fonts + test infra)

## What this builds

A poster-style card with a background color, title, divider line, body text, and a green accent rectangle at the bottom. Matches the Figma Frame 3 / Group 1 in the iPhone 17 design.

## Figma reference

- Card dimensions: 382 x 389px
- Background: `#C2E8C7`
- Title: DM Serif Display, 29px, positioned at (82, 31)
- Divider line: 331.92px wide, at (26.51, 81.5)
- Body: DM Sans, 16px, center-aligned, at (27.5, 106), 329.95px wide
- Bottom accent: `#39B54A` rectangle 193x30px at (94, 327)

## Files

- Create: `app/home/components/info-card.tsx`
- Create: `app/home/components/info-card.test.tsx`

## Implementation

### Step 1: Write the test

```tsx
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
```

### Step 2: Verify it fails

```bash
npx vitest run app/home/components/info-card.test.tsx
```

Expected: FAIL — module not found.

### Step 3: Write the component

```tsx
interface InfoCardProps {
  title: string;
  body: string;
}

export default function InfoCard({ title, body }: InfoCardProps) {
  return (
    <div className="relative mx-auto h-[389px] w-[382px] bg-green-light-active">
      <h3 className="absolute left-[82px] top-[31px] font-heading text-[29px] text-font-dark">
        {title}
      </h3>

      <div className="absolute left-[26.51px] top-[81.5px] h-px w-[331.92px] bg-current" />

      <p className="absolute left-[27.5px] top-[106px] w-[329.95px] text-center font-card text-base leading-relaxed">
        {body}
      </p>

      <div className="absolute bottom-[32px] left-[94px] h-[30px] w-[193px] bg-green-normal rounded" />
    </div>
  );
}
```

### Step 4: Verify it passes

```bash
npx vitest run app/home/components/info-card.test.tsx
```

Expected: PASS.

## How to test

```bash
npx vitest run app/home/components/info-card.test.tsx
```

## Commit

```bash
git add app/home/components/info-card.tsx app/home/components/info-card.test.tsx
git commit -m "feat: add InfoCard component"
```
