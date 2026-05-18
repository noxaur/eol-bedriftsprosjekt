# 01 — Header Component

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
        <div className="relative" style={{ width: 51, height: 67.11 }}>
          <img
            src="/images/logo-icon.svg"
            alt=""
            className="absolute"
            style={{ width: 48.28, height: 63.56, left: 1.36, top: 2.65 }}
          />
          <img
            src="/images/logo-image.png"
            alt=""
            className="absolute"
            style={{ width: 20.13, height: 20.13, left: 15.43, top: 23.49 }}
          />
          <span
            className="absolute font-logo text-[10.07px] leading-none text-black"
            style={{ left: 12.92, top: 52.3 }}
          >
            ReOL
          </span>
        </div>
      </div>
      <div className="flex items-center gap-[9px]">
        <span className="rounded-[5px] bg-green-normal px-[10px] py-[5px] font-body text-xs text-[#EBF8ED]">
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
