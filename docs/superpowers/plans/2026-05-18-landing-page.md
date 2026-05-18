# Landing Page Implementation Plan

> **For agentic workers:** First invoke the `using-superpowers` skill. Then use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the mobile landing page for ReOL (EOL software maintenance company) matching the Figma design at node 49:3.

**Architecture:** Single mobile-first page composed of 6 independent sections (Header, Carousel, TrustedBy, ButtonPair, FAQ, AboutSection), each a standalone component, assembled in `main.tsx`. Tests use Vitest + React Testing Library. Brand tokens defined in Tailwind v4 theme.

**Tech Stack:** React 19, React Router 7, TailwindCSS v4, TypeScript strict, Vitest + @testing-library/react, SVGs

**Figma:** https://www.figma.com/design/H8CCkpGRA9UW1KO40X1Zat/Design?node-id=49-3&p=f&m=dev

---

## Branch Workflow

Each feature lives in its own branch. Merge order matters — components depend on setup, and assembly depends on all components.

| # | Branch | Description | Depends on |
|---|--------|-------------|------------|
| 00 | `feature/setup` | Test infra, Tailwind theme, Google Fonts | — |
| 01 | `feature/header` | Header with logo, pill, hamburger | 00 |
| 02 | `feature/carousel` | Horizontal image carousel | 00 |
| 03 | `feature/trusted-by` | "Trusted by" + customer logos | 00 |
| 04 | `feature/button-pair` | Contact sales + Read more buttons | 00 |
| 05 | `feature/faq` | FAQ section with green background | 00 |
| 06 | `feature/about-section` | "Maintaining EOL software" section | 00 |
| 07 | `feature/landing-page` | Assemble all components, cleanup | 01-06 |
| 08 | `feature/verification` | Typecheck, full test suite, build | 07 |

Branches 01-06 can run in parallel after 00 is merged.

---

## File Structure

```
app/
├── app.css                          # Tailwind v4 + brand theme tokens
├── root.tsx                         # Add Google Fonts links
├── home/
│   ├── main.tsx                     # LandingPage - assembles all sections
│   └── components/
│       ├── header.tsx               # Logo + "Maintained software" pill + hamburger
│       ├── carousel.tsx             # Horizontal image carousel
│       ├── trusted-by.tsx           # "Trusted by" heading + customer logos
│       ├── button-pair.tsx          # "Contact sales" + "Read more" buttons
│       ├── faq.tsx                  # FAQ section with green background
│       └── about-section.tsx        # "Maintaining EOL software" section
├── test/
│   └── setup.ts                     # Vitest global setup
├── routes/
│   └── home.tsx                     # Unchanged - already imports LandingPage
public/images/
├── logo-icon.svg / logo-image.png / hamburger.svg / arrow.svg / customer-logos.svg
├── carousel-1.png through carousel-5.png
```

## Feature Specs

Each feature has a detailed spec with complete code in `docs/superpowers/plans/features/`:

- [00-setup.md](features/00-setup.md) — Vitest, theme tokens, fonts
- [01-header.md](features/01-header.md) — Header component
- [02-carousel.md](features/02-carousel.md) — Carousel component
- [03-trusted-by.md](features/03-trusted-by.md) — TrustedBy section
- [04-button-pair.md](features/04-button-pair.md) — ButtonPair component
- [05-faq.md](features/05-faq.md) — FAQ section
- [06-about-section.md](features/06-about-section.md) — AboutSection component
- [07-assembly.md](features/07-assembly.md) — LandingPage assembly + cleanup
- [08-verification.md](features/08-verification.md) — Final verification pass
