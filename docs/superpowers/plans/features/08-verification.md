# 08 — Final Verification

> **Before starting:** Invoke the `using-superpowers` skill first.
>
> **Branch:** `feature/verification`
> **Dependencies:** All previous branches must be merged to main

## What this does

Runs the full verification suite after all components are merged: typecheck, test suite, and production build. Fix any remaining issues.

## Steps

### Step 1: Typecheck

```bash
npm run typecheck
```

Expected: No type errors.

### Step 2: Full test suite

```bash
npm test
```

Expected: All tests pass.

### Step 3: Production build

```bash
npm run build
```

Expected: Build succeeds, output in `build/{client,server}/`.

### Step 4: Fix any issues found

If any step fails, fix the issue directly, then re-run from Step 1.

### Step 5: Commit fixes

```bash
git add -A
git commit -m "chore: fix verification issues"
```
