---
date: 2026-05-18
branch: explore/design-bravo
total_score: 22/40
p0_count: 2
p1_count: 3
---

# Critique: Editorial Warmth Redesign (PR #11)

**Target**: `app/home/main.tsx` + 10 component files
**Register**: Brand (landing page, design IS the product)
**Claimed direction**: Scandinavian print design, warm editorial, cream/charcoal/terracotta

---

## Design Health Score (Nielsen's 10 Heuristics)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Carousel auto-advances with no pause control or visible timer |
| 2 | Match System / Real World | 3 | Copy is grounded and specific to the domain |
| 3 | User Control and Freedom | 1 | Carousel has no prev/next buttons, no pause, no keyboard nav. Users are trapped in auto-advance. |
| 4 | Consistency and Standards | 2 | Mix of `font-heading` (DM Serif) and `font-heading-condensed` (Roboto Condensed) for headings with no clear semantic rule for which is used when |
| 5 | Error Prevention | 3 | No risky actions on this page; N/A mostly |
| 6 | Recognition Rather Than Recall | 2 | Carousel dots are small (h-1.5) and hard to target; no slide labels visible |
| 7 | Flexibility and Efficiency | 1 | No keyboard shortcuts, no skip links, carousel inaccessible to keyboard users |
| 8 | Aesthetic and Minimalist Design | 3 | Clean composition, good whitespace, no visual clutter |
| 9 | Error Recovery | 3 | No error states to evaluate on this static page |
| 10 | Help and Documentation | 2 | FAQ exists but is static (not accordion), no search, no contact info visible |
| **Total** | | **22/40** | **Below average** |

---

## Anti-Patterns Verdict

### AI Slop: FAILS

**This design hits MULTIPLE items on the reflex-reject list.**

**1. DM Serif Display is on the reflex-reject font list.** The brand.md explicitly bans "DM Serif Display" as a training-data default. This is the single most detectable AI tell in the entire design. It's the go-to serif for every AI-generated "editorial" landing page in 2025-2026.

**2. Editorial-typographic aesthetic lane is the reflex-reject lane.** The brand.md explicitly bans: "Display serif + small mono labels + ruled separators + monochromatic restraint." This design has:
- Display serif (DM Serif Display) for headings
- Uppercase tracked label ("TRUSTED BY" via `tracking-widest uppercase`)
- Ruled separators (`border-t border-border` between EVERY section)
- Monochromatic restraint (cream + charcoal + one accent)

This is the exact fingerprint described in the reflex-reject list. Someone would immediately say "AI made this."

**3. Repeated tiny uppercase tracked labels.** The "Trusted by" label uses `text-sm tracking-widest uppercase` -- the brand ban specifically calls out "repeated tiny uppercase tracked labels above every section heading" as AI scaffolding. While it appears only once here, the grammar is the tell.

**4. Centered button pair.** The ButtonPair uses `items-center justify-center` -- a centered CTA stack is the modal SaaS landing page template.

**5. Deterministic detector**: returned 0 findings. This is a false negative -- the detector is regex-based and cannot catch semantic issues like font choice, aesthetic lane, or compositional sameness.

---

## Overall Impression

The direction is conceptually sound -- warm cream background, terracotta accent, asymmetric grid, editorial typography. But the execution hits too many AI training-data defaults to feel distinctive. The biggest issue is the font choice (DM Serif Display is explicitly banned) combined with the editorial-typographic aesthetic that the brand register explicitly flags as saturated. The page reads like "AI does Scandinavian minimalism" rather than "a specific Norwegian software company with a point of view."

---

## What's Working

1. **OKLCH color system with warm tint**. All neutrals are tinted toward hue 85 (warm yellow), no `#000` or `#fff`. The cream/charcoal/terracotta palette is coherent and the OKLCH values are well-chosen. The color strategy is technically correct.

2. **Asymmetric hero grid**. The 7/5 split with text left and carousel right breaks from the centered-stack default. This is a genuinely better compositional choice than the previous design.

3. **Fluid typography with clamp()**. The type scale uses proper fluid sizing with meaningful ratios (1.25x+ between steps). Line lengths are reasonable (max-w-xl for hero body, max-w-2xl for FAQ).

---

## Priority Issues

### [P0] DM Serif Display is on the reflex-reject font list

**What**: The heading font `DM Serif Display` is explicitly banned in `brand.md`'s reflex-reflex list.

**Why it matters**: This is the single most detectable AI tell. DM Serif Display is the default "editorial serif" in every AI-generated landing page. Anyone familiar with 2025-2026 web design will immediately recognize this as AI output. It undermines the entire "distinctive Scandinavian print design" claim.

**Fix**: Replace with a serif that's NOT on the reflex-reject list. For a Scandinavian print design feel, consider:
- **Spectral** (Google Fonts) -- sharp, editorial, less common
- **EB Garamond** (Google Fonts) -- classic, print-derived
- **Literata** (Google Fonts) -- warm, bookish, distinctive
- Or browse Pangram Pangram / ABC Dinamo for a paid option with more character

**Suggested command**: `impeccable typeset`

---

### [P0] Carousel is inaccessible -- no controls, no pause, no keyboard nav

**What**: The carousel auto-advances every 4 seconds with no pause button, no prev/next buttons, no keyboard navigation, and no `prefers-reduced-motion` handling.

**Why it matters**: This violates WCAG 2.1 Success Criterion 2.2.2 (Pause, Stop, Hide) for auto-moving content. Users who need more time to read slide content cannot pause it. Keyboard users cannot navigate between slides. Users with vestibular disorders cannot disable the motion.

**Fix**:
- Add prev/next buttons (can be subtle arrows)
- Add a pause/play toggle button
- Add keyboard arrow key navigation
- Add `prefers-reduced-motion` media query to disable auto-advance
- Improve alt text from "Slide 1" to descriptive text

**Suggested command**: `impeccable harden`

---

### [P1] Color strategy claims "Committed" but delivers "Restrained"

**What**: The PR description claims "Committed warm palette" but terracotta appears on only ~5% of the surface (CTA button, badge, hover states, carousel dots). This is Restrained strategy (tinted neutrals + one accent ≤10%), not Committed.

**Why it matters**: The disconnect between claimed ambition and actual execution makes the design feel timid. A "Committed" strategy for a brand landing page should have the accent color carrying 30-60% of the surface. The current design plays it safe and reads as generic SaaS-with-warm-tint.

**Fix**: Either:
- (a) Commit: use terracotta more decisively -- a terracotta-tinted hero section, colored section backgrounds, or a terracotta rule instead of the neutral border dividers
- (b) Honest Restrained: drop the "Committed" claim and lean into the restraint with more typographic voice to compensate

**Suggested command**: `impeccable colorize`

---

### [P1] Monotonous section dividers -- identical border between everything

**What**: Every section is separated by `<div className="border-t border-border my-8" />` -- four identical horizontal rules with identical spacing.

**Why it matters**: The impeccable layout law says "vary spacing for rhythm. Same padding everywhere is monotony." Four identical dividers is the laziest possible section separation. It reads like a template, not a designed page.

**Fix**: Vary the section separation strategy:
- Use whitespace alone for some transitions (no border needed between related sections)
- Use a background color shift (cream → cream-dark) for others
- Reserve borders for major content shifts only
- Vary the spacing values (some sections need more breathing room than others)

**Suggested command**: `impeccable layout`

---

### [P1] Everything lives inside one container -- no full-bleed moments

**What**: The entire page is wrapped in `<main className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">`. No section breaks out. The carousel, trusted-by marquee, and FAQ are all constrained to the same max-width.

**Why it matters**: The impeccable layout law says "don't wrap everything in a container. Most things don't need one." A brand landing page needs visual variety -- some content should breathe to the edges, some should be intimate and narrow. The trusted-by marquee especially should be full-bleed to create a visual break.

**Fix**:
- Move TrustedBy outside the container, make it full-bleed with cream-dark background
- Let the carousel extend wider or full-bleed
- Keep FAQ narrow (max-w-2xl is good, but it shouldn't also be constrained by the parent container's padding)

**Suggested command**: `impeccable layout`

---

## Minor Observations

1. **Button hierarchy is reversed**. "Read more" is the filled terracotta (primary visual weight) while "Contact sales" is the outline. For a B2B software company, "Contact sales" should be the primary CTA. The visual hierarchy should match the business priority.

2. **Fade-in animations use generic `ease-out`**, not `ease-out-quart`/`ease-out-expo` as the motion design law recommends. The carousel correctly uses `ease-out-expo`, but the entrance animations don't.

3. **Legacy color aliases pollute the theme**. Lines 31-38 define `green-light`, `green-normal`, `green-dark`, `green-darker`, `green-light-active`, `grey-300`, `font-dark`, `font-muted` -- these are leftover names from the previous green theme. They map to the new OKLCH values but the names are misleading and confusing.

4. **FAQ is not interactive**. All three Q&A pairs are always visible. For 3 items this is acceptable, but there's no visual affordance that these are "questions" -- they read as a static list. Consider subtle accordion behavior or at least visual distinction between Q and A.

5. **Carousel alt text is placeholder**: "Slide 1" through "Slide 5" should describe what's actually shown in each screenshot.

6. **InfoCard component is unused**. It exists in the codebase but isn't imported in main.tsx. Dead code.

7. **No `<section>` aria-labels**. The sections have no `aria-label` or `aria-labelledby` for screen readers to distinguish between them.

---

## Persona Red Flags

**Kari (Norwegian SMB Owner, 45)**: Lands on page, sees "Software that lasts" -- good headline. But the carousel auto-advances before she can read the screenshots. She can't pause it. She tries to tab through the page and the carousel traps her focus. She leaves.

**Erik (IT Consultant, evaluating for client)**: Wants to quickly assess credibility. Sees "Trusted by" with a logo marquee but logos are at `opacity-60` and moving -- hard to read. The FAQ answers are reasonable but he can't scan them quickly since they're all expanded with no visual hierarchy between questions.

---

## Questions to Consider

1. If DM Serif Display is the reflex font, what serif would a Norwegian print designer actually reach for in 2026?
2. The carousel screenshots -- what do they actually show? If they're product screenshots, they should be descriptive and meaningful, not generic placeholder images.
3. Is "Software that lasts" strong enough as a hero headline for a brand page? It's clear but not distinctive. What would a bolder, more opinionated headline look like?
4. The terracotta accent -- is it warm enough to carry the "Scandinavian print design" feeling, or does it read as generic startup accent color?

---

Trend for `app-home-main-tsx`: First run for this target, no trend yet.

Wrote `.impeccable/critique/app-home-main-tsx-2026-05-18.md`.
