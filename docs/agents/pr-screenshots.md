# PR Screenshots

Before completing any PR, you **must** take two screenshots of the changed UI and attach both to the PR description.

## Rules

- **Every PR** that touches UI requires screenshots
- **Pre-screenshot** = before your changes (captures the "before" state)
- **Post-screenshot** = after your changes (captures the "after" state)
- Both go in the PR description as embedded images
- If changes affect multiple viewports, take one screenshot per breakpoint

## Method 1: Playwright (Recommended)

Use the `webapp-testing` skill's `with_server.py` helper, or if the dev server is already running, run a script directly.

### Pre-screenshot

1. Stash your changes so the "before" state is visible:

```bash
git stash -u
npm run dev
```

2. Take the screenshot:

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 402, "height": 1256})
    page.goto("http://localhost:5173")
    page.wait_for_load_state("networkidle")
    page.screenshot(path="pre-screenshot.png", full_page=True)
    browser.close()
```

3. Restore your changes:

```bash
git stash pop
```

### Post-screenshot

1. Ensure the dev server is running with your changes applied.
2. Run the same Playwright script, saving to `post-screenshot.png`:

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 402, "height": 1256})
    page.goto("http://localhost:5173")
    page.wait_for_load_state("networkidle")
    page.screenshot(path="post-screenshot.png", full_page=True)
    browser.close()
```

## Method 2: Manual (Fallback)

If Playwright is unavailable:

1. Open the dev server in a browser (`http://localhost:5173`)
2. Open DevTools → set desired viewport dimensions
3. Take a full-page screenshot (Chrome: DevTools → `⋮` → Capture full size screenshot)
4. Save as `pre-screenshot.png` / `post-screenshot.png`

## Attaching to the PR

After both screenshots are saved:

1. Commit both screenshots to the branch:

```bash
git add pre-screenshot.png post-screenshot.png
git commit -m "chore: add pre/post screenshots for PR"
git push
```

2. Get the raw image URLs (replace `<branch>` with your branch name):

```
https://raw.githubusercontent.com/heydudecheckoutmysweetusername/eol-bedriftsprosjekt/<branch>/pre-screenshot.png
https://raw.githubusercontent.com/heydudecheckoutmysweetusername/eol-bedriftsprosjekt/<branch>/post-screenshot.png
```

3. Update the PR body to embed them:

```bash
gh pr edit <PR_NUMBER> --body "$(cat <<EOF
## Existing title/description...

### Pre-screenshot
![Before](${PRE_URL})

### Post-screenshot
![After](${POST_URL})
EOF
)"
```

4. (Optional) After the PR is merged, clean up by deleting the screenshot files:

```bash
git rm pre-screenshot.png post-screenshot.png
git commit -m "chore: remove PR screenshots"
```

## Viewport sizes

| Device | Width | Height |
|--------|-------|--------|
| iPhone 17 (mobile) | 402 | 1256 |
| SM | 640 | 1080 |
| MD | 768 | 1080 |
| LG | 1024 | 1080 |
| XL | 1280 | 1080 |

Default to the iPhone 17 (mobile) viewport unless the PR touches layout for larger breakpoints.
