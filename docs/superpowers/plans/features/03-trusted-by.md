# 03 — Trusted By Section

> **Before starting:** Invoke the `using-superpowers` skill first.
>
> **Branch:** `feature/trusted-by`
> **Dependencies:** 00-setup must be merged first (needs theme tokens + fonts + test infra)

## What this builds

A "Trusted by" heading with a customer logos strip below it. Matches the Figma Trusted by section in the iPhone 17 Main frame.

## Figma reference

- "Trusted by" heading: Roboto Bold, 28px, dark green (`#2B8838`)
- Customer logos: SVG strip at 600x20px

## Files

- Create: `app/home/components/trusted-by.tsx`
- Create: `app/home/components/trusted-by.test.tsx`

## Implementation

### Step 1: Write the test

```tsx
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
```

### Step 2: Verify it fails

```bash
npx vitest run app/home/components/trusted-by.test.tsx
```

Expected: FAIL — module not found.

### Step 3: Write the component

```tsx
export default function TrustedBy() {
  return (
    <section className="flex flex-col items-center gap-[22px] pt-[25px]">
      <h2 className="font-body text-[28px] font-bold text-green-dark">Trusted by</h2>
      <img
        src="/images/customer-logos.svg"
        alt="Customer logos"
        className="h-5"
      />
    </section>
  );
}
```

### Step 4: Verify it passes

```bash
npx vitest run app/home/components/trusted-by.test.tsx
```

Expected: PASS.

## How to test

```bash
npx vitest run app/home/components/trusted-by.test.tsx
```

## Commit

```bash
git add app/home/components/trusted-by.tsx app/home/components/trusted-by.test.tsx
git commit -m "feat: add TrustedBy section with customer logos"
```
