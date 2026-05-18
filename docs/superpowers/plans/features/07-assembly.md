# 07 — Landing Page Assembly

> **Before starting:** Invoke the `using-superpowers` skill first.
>
> **Branch:** `feature/landing-page`
> **Dependencies:** All component branches (01 through 06) must be merged to main first

## What this builds

Assembles all 6 components into the final `LandingPage` component, replaces the stub in `app/home/main.tsx`, and cleans up orphaned scaffolding files.

## Files

- Modify: `app/home/main.tsx` — import and render all components
- Create: `app/home/main.test.tsx` — integration test
- Delete: `app/home/components/footer.tsx` — empty stub, no design for it
- Delete: `app/welcome/` — orphaned default template

## Implementation

### Step 1: Write the integration test

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LandingPage from "./main";

describe("LandingPage", () => {
  it("renders the header with ReOL logo", () => {
    render(<LandingPage />);
    expect(screen.getByText("ReOL")).toBeInTheDocument();
  });

  it("renders the carousel section", () => {
    render(<LandingPage />);
    const slides = screen.getAllByRole("img");
    const carouselImage = slides.find((img) =>
      img.getAttribute("alt")?.startsWith("Slide"),
    );
    expect(carouselImage).toBeTruthy();
  });

  it("renders the Trusted by section", () => {
    render(<LandingPage />);
    expect(screen.getByText("Trusted by")).toBeInTheDocument();
  });

  it("renders both buttons", () => {
    render(<LandingPage />);
    expect(screen.getByText("Contact sales")).toBeInTheDocument();
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });

  it("renders the About section", () => {
    render(<LandingPage />);
    expect(screen.getByText("Maintaining")).toBeInTheDocument();
  });
});
```

### Step 2: Verify it fails

```bash
npx vitest run app/home/main.test.tsx
```

Expected: FAIL — LandingPage renders plain `<h1>Landing page</h1>`.

### Step 3: Rewrite main.tsx

```tsx
import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";
import AboutSection from "./components/about-section";

export default function LandingPage() {
  return (
    <div className="mx-auto flex min-h-screen w-[402px] flex-col gap-[10px] bg-green-light px-[10px]">
      <Header />

      <main className="flex flex-col items-center gap-[18px] px-[28px]">
        <Carousel />

        <TrustedBy />

        <ButtonPair />

        <div className="w-full px-4 py-2">
          <div className="h-px w-full bg-current opacity-20" />
        </div>

        <Faq />

        <AboutSection />
      </main>
    </div>
  );
}
```

### Step 4: Clean up unused files

```bash
rm app/home/components/footer.tsx
rm -rf app/welcome/
```

### Step 5: Verify it passes

```bash
npx vitest run app/home/main.test.tsx
```

Expected: PASS.

### Step 6: Verify full suite

```bash
npm test
```

Expected: All tests pass.

## How to test

```bash
npm test
npm run build
```

## Commit

```bash
git add app/home/components/faq.tsx app/home/components/faq.test.tsx app/home/main.tsx app/home/main.test.tsx
git rm app/home/components/footer.tsx app/home/components/info-card.tsx app/home/components/info-card.test.tsx
git rm -r app/welcome/
git commit -m "feat: assemble LandingPage from all sections, remove unused files"
```
