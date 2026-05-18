---
target: "app/home/main.tsx"
date: 2026-05-18
total_score: 18
p0_count: 3
p1_count: 4
p2_count: 2
---

# Design Charlie: Neo-Brutalist — Critique Review

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Carousel auto-advances with no indicator of current slide |
| 2 | Match System / Real World | 2 | "Maintained software" badge is unclear, no context |
| 3 | User Control and Freedom | 2 | Carousel has no manual controls, user can't pause or navigate |
| 4 | Consistency and Standards | 3 | Brutalist language applied consistently across all components |
| 5 | Error Prevention | 3 | n/a — static page |
| 6 | Recognition Rather Than Recall | 2 | No navigation, no way to understand site structure |
| 7 | Flexibility and Efficiency | 1 | No keyboard navigation, no shortcuts, single CTA path |
| 8 | Aesthetic and Minimalist Design | 2 | Repetitive container pattern, no visual hierarchy beyond "everything has a border" |
| 9 | Error Recovery | 3 | n/a — static page |
| 10 | Help and Documentation | 1 | FAQ has placeholder text ("daskjdaksdabsdkbajsdaas") |
| **Total** | | **21/40** | **Below average** |

## Anti-Patterns Verdict

### AI Slop Detection: PARTIAL FAIL

**What works**: The neo-brutalist direction is a genuine departure from the generic SaaS cream-and-blue template. Hard edges, offset shadows, and electric yellow are deliberate choices.

**What fails — this is a "brutalist skin" not a brutalist redesign**:

1. **Everything is a bordered box.** The original sin of AI brutalism: apply `border-[3px] border-black` + `brutalist-shadow` to every element and call it done. Real brutalism uses asymmetry, raw structure, unexpected overlaps. This is just the old layout with thicker borders.

2. **Identical max-w-[382px] containers.** Carousel, TrustedBy, FAQ — all locked to the exact same width. This is the card grid problem in vertical form. No element breaks the container, no full-bleed sections, no rhythm variation.

3. **No hero content.** The page opens with a carousel of screenshots. There's no headline, no value proposition, no `--text-display` usage (defined but unused). A landing page without a headline is a gallery, not a product page.

4. **Placeholder text in FAQ.** "daskjdaksdabsdkbajsdaas asdasdasdas dasdasdasdasdas" — this is unfinished and signals the design was not reviewed before PR.

### Deterministic Scan Results

| Antipattern | File | Line | Snippet |
|---|---|---|---|
| pure-black-white | button-pair.tsx | 13 | `bg-black` |

One flag: `bg-black` on the "Read more" button. The CSS variable `--color-black: #1A1A1A` is also effectively pure black — violates the "no #000/#fff, tint toward brand hue" rule.

## Overall Impression

The neo-brutalist direction is the right instinct — the old soft-green design was generic. But this implementation is a **surface treatment**, not a redesign. It applies the same visual grammar (border + shadow) to every component without reconsidering layout, hierarchy, or content strategy. The page reads as "brutalist theme applied" rather than "brutalist design conceived."

The single biggest opportunity: **break the container**. Let some elements go full-width, introduce asymmetry, add a real headline with the unused `--text-display` scale.

## What's Working

1. **Consistent visual language.** Every component shares the same border weight (3px), shadow style (offset solid), and corner treatment (none). This consistency is good — the problem is it's the *only* treatment.

2. **Electric yellow accent.** `#FFE500` is a strong, specific choice. Using it only on the "Maintained software" badge creates intentional scarcity. Good restraint.

3. **Button pair differentiation.** Outlined white + solid black with matching brutalist shadows creates clear primary/secondary hierarchy. The hover shadow expansion is a nice micro-interaction.

## Priority Issues

### [P0] No headline or hero content

**What**: The page opens directly with a carousel. There is no H1, no value proposition, no entry point. The `--text-display` CSS variable (clamp 36px–56px) is defined but never used.

**Why it matters**: A landing page without a headline doesn't tell users what the product is. The carousel shows screenshots but provides no context. Users bounce in 3 seconds without understanding the value.

**Fix**: Add a hero section before the carousel with a display-type headline, supporting copy, and the button pair. Use the `--text-display` variable. Something like:
```
<h1 style="--text-display">Ship maintained software</h1>
<p>Supporting copy at 65-75ch max width</p>
<ButtonPair />
```

**Suggested command**: `impeccable shape` or `impeccable craft`

### [P0] Everything is the same container (max-w-[382px])

**What**: Carousel, TrustedBy, and FAQ all use `max-w-[382px]`. The page has no visual rhythm — every section is the same width, centered, with a border.

**Why it matters**: This is the vertical equivalent of an identical card grid. It's monotonous and reads as template-driven, not designed. Real brutalist design uses varied widths, full-bleed elements, and intentional asymmetry.

**Fix**: Let at least one element break the container. Options:
- Make the hero section full-width with a bold background
- Let the trusted-by marquee go edge-to-edge (remove the border container)
- Vary the FAQ width or position it off-center

**Suggested command**: `impeccable layout`

### [P0] Placeholder text in FAQ

**What**: FAQ body text is "daskjdaksdabsdkbajsdaas asdasdasdas dasdasdasdasdas dasdadasdasdadasd apsidhu9asdfgbhuiabfgipbdfag dasfg ds fgs dfg sdfg"

**Why it matters**: This is unfinished content shipped to a PR. It makes the entire redesign look unreviewed and undermines credibility.

**Fix**: Replace with real FAQ content or remove the FAQ section entirely until content is ready.

**Suggested command**: `impeccable clarify`

### [P1] Pure black/white colors violate brand rules

**What**: `--color-black: #1A1A1A` and `--color-white: #FAFAFA` are effectively pure black and white. The `bg-black` utility on the "Read more" button was flagged by the detector.

**Why it matters**: Per impeccable design laws, never use `#000` or `#fff`. Neutrals should be tinted toward the brand hue (chroma 0.005–0.01). Pure black on brutalist designs looks harsh and unrefined.

**Fix**: Tint the black toward the green brand hue. For example:
- `--color-black: oklch(15% 0.01 140)` (very slight green tint)
- `--color-white: oklch(97% 0.005 140)` (very slight green tint)
Keep the brutalist starkness but add refinement.

**Suggested command**: `impeccable colorize`

### [P1] Carousel has no user control

**What**: The carousel auto-advances every 4 seconds with no pause, no dots, no arrows, no way to go back.

**Why it matters**: Users can't examine a slide they're interested in. The auto-advance creates anxiety — "I need to read this before it changes." Violates user control heuristic.

**Fix**: Add at minimum: pause on hover, navigation dots, or prev/next arrows. In brutalist style: thick-bordered arrow buttons, hard-edged dot indicators.

**Suggested command**: `impeccable harden`

### [P1] CSS transition uses ease-in-out

**What**: Carousel transition: `transition-transform duration-500 ease-in-out`

**Why it matters**: Per impeccable motion design laws, don't use ease-in-out for CSS transitions. Use ease-out curves (ease-out-quart, ease-out-quint, ease-out-expo). Ease-in-out is symmetric and feels generic.

**Fix**: Replace with a custom cubic-bezier:
```css
transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1); /* ease-out-expo */
```

**Suggested command**: `impeccable animate`

### [P2] Header "Maintained software" badge lacks context

**What**: A yellow badge saying "Maintained software" with no explanation of what this means.

**Why it matters**: This is the only copy in the header besides the logo. Users will wonder: maintained by whom? What does this mean for me? It's a claim without evidence.

**Fix**: Either expand the badge text to be more specific ("Open source, actively maintained") or link it to a section that explains the claim.

**Suggested command**: `impeccable clarify`

### [P2] No responsive breakpoints

**What**: The carousel has a fixed `w-[382px]`. On screens narrower than 382px (many phones in portrait), it will overflow. The `gap-20` (80px) between buttons is excessive on mobile.

**Why it matters**: The page will break on small screens. No responsive considerations are visible in the code.

**Fix**: Add responsive utilities:
- Carousel: `w-full max-w-[382px]`
- Button pair: `gap-4 md:gap-20`
- Main content: already has `px-4`, good

**Suggested command**: `impeccable adapt`

## Minor Observations

- The `gap-20` (80px) between buttons is very wide. Consider `gap-6` or `gap-8` for tighter pairing.
- The header logo uses pixel-perfect inline styles (`left: 12.92, top: 52.3`) which suggests Figma export without cleanup.
- The `--text-display` variable is defined but unused — dead CSS.
- Trusted-by section has 3 duplicate `<img>` tags for the marquee. This is functional but could be cleaner with CSS duplication.
- The `border-b-[3px]` on header is good — only bottom border, not full wrap. This is the most nuanced border treatment in the design.
- No `aria-label` on carousel for accessibility (screen readers won't know it's a carousel).
- The FAQ section heading uses `font-heading-condensed` with `uppercase tracking-wider` — this is the most distinctive typography choice and works well.

## Questions to Consider

1. **What if the hero section was the brutalist statement?** Instead of opening with screenshots, what if the first thing users see is a massive display headline with the electric yellow accent, taking up the full viewport? The carousel could come second.

2. **Does every element need a border?** The header's bottom-only border works because it's different. What if the trusted-by section had no border at all — just logos flowing edge-to-edge? Contrast comes from variation, not uniformity.

3. **What would a confident version of this look like?** Right now the design is playing it safe within the brutalist template. A confident brutalist design would break its own rules intentionally — one element without a border, one element with a different shadow, one element that's oversized.

## Trend for app-home-main-tsx

First run for this target, no trend yet.

> Wrote `.impeccable/critique/app-home-main-tsx-2026-05-18.md`.
