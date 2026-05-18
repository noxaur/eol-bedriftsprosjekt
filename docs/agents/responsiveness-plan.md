# Responsiveness Plan

## Goal

Make the site responsive for mobile-to-desktop while keeping the design near-constant (no extreme width scaling).

## Completed Fixes

1. **Removed `px-7` from `<main>`** — each section controls its own width
2. **FAQ** uses `w-full max-w-[382px]` with `py-[30px]`, heading fits on one line
3. **Shared heading token** `--text-section-heading: clamp(20px, 5vw, 28px)` for both "Trusted by" and "Frequently asked questions" (Figma spec: 28px Roboto Bold, `#2B8838`)
4. **ButtonPair** changed from `justify-between` to `justify-center gap-3`
5. **Carousel** now auto-swaps every 4s via translateX timer instead of scroll-snap

## Testing Checklist

- [x] FAQ heading "Frequently asked questions" is one line at 402px viewport
- [ ] No section overflows or breaks at 402px, 640px, 768px, 1024px, 1280px
- [ ] `npx vitest run` — all tests pass
- [ ] `npm run typecheck` — clean

## Open Items

- Verify all viewports visually via Chrome DevTools
- Test carousel auto-swap timing and transition
