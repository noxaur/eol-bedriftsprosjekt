import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

// Desktop screenshot
await page.setViewportSize({ width: 1024, height: 1080 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);
await page.screenshot({ path: '/Users/per/.local/share/opencode/worktree/7a3562b7c92e074a09f0238bddfa4abe2d809572/calm-lagoon/review-desktop.png', fullPage: true });
console.log('Desktop screenshot saved');

// Mobile screenshot
await page.setViewportSize({ width: 402, height: 1256 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);
await page.screenshot({ path: '/Users/per/.local/share/opencode/worktree/7a3562b7c92e074a09f0238bddfa4abe2d809572/calm-lagoon/review-mobile.png', fullPage: true });
console.log('Mobile screenshot saved');

await browser.close();
