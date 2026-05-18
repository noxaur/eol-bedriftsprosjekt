# 05 — FAQ Section

> **Before starting:** Invoke the `using-superpowers` skill first.
>
> **Branch:** `feature/faq`
> **Dependencies:** 00-setup must be merged first (needs theme tokens + fonts + test infra)

## What this builds

A "Frequently asked questions" section with a heading and descriptive body text, centered on the page with a green background. Matches the Figma FAQ frame (node 242:91).

## Figma reference

- Container: 382px wide, centered, background `#C2E8C7`, padding 30px 20px, gap 15px
- Heading: Roboto Bold 28px, `#2B8838`, "Frequently asked questions"
- Body: Roboto Regular 16px, center-aligned, `#303230`

## Files

- Create: `app/home/components/faq.tsx`
- Create: `app/home/components/faq.test.tsx`

## Implementation

### Step 1: Write the test

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Faq from "./faq";

describe("Faq", () => {
  it("renders the section heading", () => {
    render(<Faq />);
    expect(screen.getByText("Frequently asked questions")).toBeInTheDocument();
  });

  it("renders the body text", () => {
    render(<Faq />);
    expect(
      screen.getByText(/daskjdaksdabsdkbajsdaas/),
    ).toBeInTheDocument();
  });
});
```

### Step 2: Verify it fails

```bash
npx vitest run app/home/components/faq.test.tsx
```

Expected: FAIL — module not found.

### Step 3: Write the component

```tsx
export default function Faq() {
  return (
    <section className="mx-auto flex w-[382px] flex-col items-center gap-[15px] bg-green-light-active px-[20px] py-[30px]">
      <h2 className="font-body text-[28px] font-bold text-green-dark">
        Frequently asked questions
      </h2>
      <p className="w-[329.95px] text-center font-body text-base text-font-dark">
        daskjdaksdabsdkbajsdaas asdasdasdas dasdasdasdasdas dasdadasdasdadasd apsidhu9asdfgbhuiabfgipbdfag dasfg ds fgs dfg sdfg
      </p>
    </section>
  );
}
```

### Step 4: Verify it passes

```bash
npx vitest run app/home/components/faq.test.tsx
```

Expected: PASS.

## How to test

```bash
npx vitest run app/home/components/faq.test.tsx
```

## Commit

```bash
git add app/home/components/faq.tsx app/home/components/faq.test.tsx
git commit -m "feat: add FAQ section"
```
