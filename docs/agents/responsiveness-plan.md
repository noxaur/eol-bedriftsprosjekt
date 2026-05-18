# Responsiveness Plan

## Goal

Make the site responsive for mobile-to-desktop while keeping the design near-constant (no extreme width scaling).

## Root Issue

`<main>` has `px-7` (28px padding), restricting inner content width to 346px on mobile (402px viewport). The FAQ heading "Frequently asked questions" at any reasonable bold Roboto size overflows this narrow space, forcing a text wrap.

## Proposed Fix

1. **Remove `px-7` from `<main>`** in `main.tsx` — let each section control its own width via internal padding or max-width
2. **Sections are unaffected** — Carousel fills width naturally, TrustedBy has its own internal centering, ButtonPair uses `w-full justify-between`
3. **FAQ** uses `w-full max-w-[382px]` with internal `px-[20px]`, heading is `text-center w-full` and fits on one line

## Testing Checklist

The agent implementing this must verify:

- [ ] FAQ heading "Frequently asked questions" is one line at 402px viewport
- [ ] No section overflows or breaks at 402px, 640px, 768px, 1024px, 1280px
- [ ] `npx vitest run` — all tests pass
- [ ] `npm run typecheck` — clean

## Current State (before fix)

PR #9 (`feature/faq`) has the FAQ section merged functionally, but the heading wraps because `<main>` constrains the inner width to 346px, and the heading with 20px padding leaves only 306px for text.
