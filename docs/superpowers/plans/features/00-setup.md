# 00 — Project Setup

> **Before starting:** Invoke the `using-superpowers` skill first.
>
> **Branch:** `feature/setup`
> **Dependencies:** none (can be done first)

## What this builds

Set up the test infrastructure (Vitest + React Testing Library), brand theme tokens in Tailwind v4, and Google Fonts links. This is a prerequisite for all component work.

## Files to modify/create

- Modify: `vite.config.ts` — add Vitest config
- Modify: `app/app.css` — brand theme tokens
- Modify: `app/root.tsx` — Google Fonts links
- Modify: `package.json` — add test scripts
- Create: `app/test/setup.ts` — test setup

## Brand tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-green-light` | `#F5F9EB` | Page background |
| `--color-green-normal` | `#39B54A` | Primary buttons, accents |
| `--color-green-dark` | `#2B8838` | Headings |
| `--color-green-darker` | `#143F1A` | Body text |
| `--color-green-light-active` | `#C2E8C7` | Active/hover states |
| `--color-grey-300` | `#2A2D2A` | Customer logos |
| `--color-font-dark` | `#0C0E0C` | Dark text |

## Implementation

### Step 1: Install packages

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

### Step 2: Update vite.config.ts

Replace the entire file with:

```ts
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./app/test/setup.ts"],
    globals: true,
  },
});
```

### Step 3: Create app/test/setup.ts

```ts
import "@testing-library/jest-dom";
```

### Step 4: Add test scripts to package.json

```json
"scripts": {
  "build": "react-router build",
  "dev": "react-router dev",
  "start": "react-router-serve ./build/server/index.js",
  "typecheck": "react-router typegen && tsc",
  "test": "vitest run",
  "test:watch": "vitest"
}
```

### Step 5: Update app/app.css with brand theme

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-heading: "DM Serif Display", serif;
  --font-logo: "Special Gothic Expanded One", sans-serif;
  --font-body: "Roboto", sans-serif;
  --font-card: "DM Sans", sans-serif;

  --color-green-light: #F5F9EB;
  --color-green-normal: #39B54A;
  --color-green-dark: #2B8838;
  --color-green-darker: #143F1A;
  --color-green-light-active: #C2E8C7;
  --color-grey-300: #2A2D2A;
  --color-font-dark: #0C0E0C;
}

@layer base {
  html {
    font-family: var(--font-sans);
  }
}
```

Remove the old `html, body` block — the base layer replaces it.

### Step 6: Update app/root.tsx Google Fonts link

```tsx
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=DM+Serif+Display&family=DM+Sans:ital,wght@0,400;0,700;1,400&family=Roboto:wght@400;500;700&family=Special+Gothic+Expanded+One&display=swap",
  },
];
```

### Step 7: Verify setup

```bash
npm test
```

Expected: No tests found (empty suite), exits with code 0.

```bash
npm run build
```

Expected: Build succeeds.

## How to test

```bash
npm test
npm run build
```

## Commit

```bash
git add package.json package-lock.json vite.config.ts app/test/setup.ts app/app.css app/root.tsx
git commit -m "feat: add test infra, brand theme, and fonts"
```
