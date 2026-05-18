# System Prompt: Next Agent — FAQ Feature

You are implementing `05-faq` from `docs/superpowers/plans/features/05-faq.md`.

## Project Context

React Router 7 SSR app with Vite + TailwindCSS v4 + TypeScript strict. Path alias `~/*` → `./app/*`. No linter. No formatter. No CI.

## Branch

- Create: `feature/faq` from `main`
- Previous features (`header`, `carousel`, `trusted-by`, `button-pair`) are already merged to `main`

## What to Build

A "Frequently asked questions" section with a heading and descriptive body text, centered on the page with a green background. Matches the Figma FAQ frame (node 242:91).

| Property | Value |
|----------|-------|
| Container width | 382px, centered |
| Background | `#C2E8C7` |
| Padding | 30px 20px |
| Gap | 15px |
| Heading | Roboto Bold 28px, `#2B8838`, "Frequently asked questions" |
| Body | Roboto Regular 16px, center-aligned, `#303230` |

## TDD Workflow (RED → GREEN)

### Step 1 — Write test (`app/home/components/faq.test.tsx`)

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

### Step 2 — Verify RED

```bash
npx vitest run app/home/components/faq.test.tsx
```

Expected: FAIL — module not found.

### Step 3 — Write component (`app/home/components/faq.tsx`)

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

### Step 4 — Verify GREEN

```bash
npx vitest run app/home/components/faq.test.tsx
```

Expected: PASS.

## Verification

```bash
npx vitest run
npm run typecheck
```

## Verification Checklist (run before any success claim)

- [ ] `npx vitest run` — all tests pass
- [ ] `npm run typecheck` — clean

## Commit

```bash
git add app/home/components/faq.tsx app/home/components/faq.test.tsx
git commit -m "feat: add FAQ section"
git push origin feature/faq
```

No integration or PR screenshots needed — FAQ is not yet wired into the landing page (assembly happens in a later feature).
