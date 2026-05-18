# eol

**Always invoke the `using-superpowers` skill at the start of any conversation** (before responding to user messages, clarifying questions, or taking any action).

React Router 7 full-stack app (SSR) with Vite + TailwindCSS v4 + TypeScript strict.

## Commands

```
npm run dev        # dev server with HMR (http://localhost:5173)
npm run build      # production build → build/{client,server}/
npm run start      # serve production build
npm run typecheck  # react-router typegen && tsc (typegen must run first)
```

## Architecture

- **Entry point**: `app/root.tsx` — root layout, error boundary, font preconnects
- **Routes**: defined in `app/routes.ts` (config-based, not file-based routing). Currently one route: `index("routes/home.tsx")`
- **Path alias**: `~/*` → `./app/*`
- **Styles**: `app/app.css` (TailwindCSS v4 via `@tailwindcss/vite` plugin)
- **Assets**: SVG and image files from Figma are pre-provided in `public/images/`
- **Generated types**: `.react-router/types/` — created by `react-router typegen`, gitignored

## Gotchas

- `npm run typecheck` runs `react-router typegen` before `tsc`; do not run `tsc` alone or generated route types will be missing
- No linter, formatter, or test framework is configured yet
- No CI workflows exist

## Development workflow

This project follows disciplined engineering practices. All agentic work **must** use these skills where applicable:

- `tdd` — write tests before implementation (red → green → refactor)
- `subagent-driven-development` — dispatch independent work to parallel subagents
- `dispatching-parallel-agents` — run 2+ independent tasks concurrently
- `verification-before-completion` — run full verification before claiming success
- `figma` MCP — fetch Figma design data during component implementation to match pixel-perfect specs
- `webapp-testing` — visually verify components in a browser against Figma design
- **PR screenshots** — before completing a PR, take a pre-screenshot and post-screenshot, attach both to the PR. See `docs/agents/pr-screenshots.md`.

## Agent skills

### Issue tracker

GitHub Issues on `heydudecheckoutmysweetusername/eol-bedriftsprosjekt`. See `docs/agents/issue-tracker.md`.

### Triage labels

Five default labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — one `CONTEXT.md` + `docs/adr/` at repo root. See `docs/agents/domain.md`.
