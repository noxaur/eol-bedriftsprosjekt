# 01 — Header Component

> **Before starting:** Invoke the `using-superpowers` skill first.
>
> **Branch:** `feature/header`
> **Dependencies:** 00-setup must be merged first (needs theme tokens + fonts + test infra)

## What this builds

The page header containing the ReOL logo, a "Maintained software" pill button, and a hamburger menu icon. Matches the Figma design iPhone 17 frame (node 49:4), Header section.

## Figma reference

- `ReOL` logo text using Special Gothic Expanded One font
- Decorative logo icon SVG next to text
- "Maintained software" pill: green background (`#39B54A`), light text (`#F5F9EB`), Roboto 12px, 5px border-radius
- Hamburger icon: 3-line SVG menu icon

## Files

- Create: `app/home/components/header.tsx`
- Create: `app/home/components/header.test.tsx`

## Implementation

### Step 1: Write the test

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./header";

describe("Header", () => {
  it("renders the logo text", () => {
    render(<Header />);
    expect(screen.getByText("ReOL")).toBeInTheDocument();
  });

  it("renders the 'Maintained software' pill button", () => {
    render(<Header />);
    expect(screen.getByText("Maintained software")).toBeInTheDocument();
  });

  it("renders the hamburger menu button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
```

### Step 2: Verify it fails

```bash
npx vitest run app/home/components/header.test.tsx
```

Expected: FAIL — module not found.

### Step 3: Write the component

```tsx
interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-[10px] py-[2px] bg-green-light">
      <div className="flex items-center gap-[6.71px]">
        <img
          src="/images/logo-image.png"
          alt="ReOL"
          className="h-[67px] w-auto"
        />
        <img
          src="/images/logo-icon.svg"
          alt=""
          className="h-16 w-auto"
        />
      </div>
      <div className="flex items-center gap-[9px]">
        <span className="rounded-[5px] bg-green-normal px-[10px] py-[5px] font-body text-xs text-green-light">
          Maintained software
        </span>
        <button
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          className="flex h-8 w-8 items-center justify-center"
        >
          <img src="/images/hamburger.svg" alt="" className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
}
```

### Step 4: Verify it passes

```bash
npx vitest run app/home/components/header.test.tsx
```

Expected: PASS.

## How to test

```bash
npx vitest run app/home/components/header.test.tsx
```

## Commit

```bash
git add app/home/components/header.tsx app/home/components/header.test.tsx
git commit -m "feat: add Header component with logo, pill, and hamburger"
```
