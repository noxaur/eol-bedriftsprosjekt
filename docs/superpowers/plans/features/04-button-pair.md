# 04 — Button Pair

> **Before starting:** Invoke the `using-superpowers` skill first.
>
> **Branch:** `feature/button-pair`
> **Dependencies:** 00-setup must be merged first (needs theme tokens + fonts + test infra)

## What this builds

Two call-to-action buttons: "Contact sales" (secondary with arrow icon) and "Read more" (primary green). Matches the Figma Buttona section in the iPhone 17 Main frame.

## Figma reference

- **Contact sales**: border `#39B54A` 1px, 5px border-radius, Roboto 16px, green text, arrow icon on right
- **Read more**: background `#39B54A`, Roboto 16px, light text `#F5F9EB`, 5px border-radius
- Buttons are spaced `space-between` across full width

## Files

- Create: `app/home/components/button-pair.tsx`
- Create: `app/home/components/button-pair.test.tsx`

## Implementation

### Step 1: Write the test

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ButtonPair from "./button-pair";

describe("ButtonPair", () => {
  it("renders the 'Contact sales' button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Contact sales")).toBeInTheDocument();
  });

  it("renders the 'Read more' button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });

  it("renders an arrow icon inside Contact sales button", () => {
    render(<ButtonPair />);
    const buttons = screen.getAllByRole("button");
    const contactSales = buttons[0];
    expect(contactSales.querySelector("img")).toBeTruthy();
  });
});
```

### Step 2: Verify it fails

```bash
npx vitest run app/home/components/button-pair.test.tsx
```

Expected: FAIL — module not found.

### Step 3: Write the component

```tsx
export default function ButtonPair() {
  return (
    <div className="flex w-full items-center justify-between">
      <button className="flex items-center gap-[5px] rounded-[5px] border border-green-normal px-[15px] py-[5px] font-body text-base text-green-normal">
        Contact sales
        <img src="/images/arrow.svg" alt="" className="h-4 w-[14px]" />
      </button>
      <button className="rounded-[5px] bg-green-normal px-[15px] py-[5px] font-body text-base text-green-light">
        Read more
      </button>
    </div>
  );
}
```

### Step 4: Verify it passes

```bash
npx vitest run app/home/components/button-pair.test.tsx
```

Expected: PASS.

## How to test

```bash
npx vitest run app/home/components/button-pair.test.tsx
```

## Commit

```bash
git add app/home/components/button-pair.tsx app/home/components/button-pair.test.tsx
git commit -m "feat: add ButtonPair with Contact sales and Read more"
```
