# eol

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
- **Generated types**: `.react-router/types/` — created by `react-router typegen`, gitignored

## Gotchas

- `npm run typecheck` runs `react-router typegen` before `tsc`; do not run `tsc` alone or generated route types will be missing
- No linter, formatter, or test framework is configured yet
- No CI workflows exist

## Agent skills

### Issue tracker

GitHub Issues on `heydudecheckoutmysweetusername/eol-bedriftsprosjekt`. See `docs/agents/issue-tracker.md`.

### Triage labels

Five default labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — one `CONTEXT.md` + `docs/adr/` at repo root. See `docs/agents/domain.md`.
