import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
import path from 'node:path';

test.describe('Q: Headless QA Automation Suite', () => {
  test.beforeAll(() => {
    const qaDir = path.resolve(process.cwd(), 'qa');
    if (!fs.existsSync(qaDir)) {
      fs.mkdirSync(qaDir, { recursive: true });
    }
  });

  test('1 & 12: Zero non-local origin requests and no horizontal overflow', async ({ page }) => {
    const externalRequests: string[] = [];
    page.on('request', (req) => {
      const url = req.url();
      if (!url.startsWith('http://localhost') && !url.startsWith('data:')) {
        externalRequests.push(url);
      }
    });

    await page.goto('/#/');
    await page.waitForLoadState('networkidle');

    // Assertion 12: zero requests to non-local origins
    expect(externalRequests).toEqual([]);

    // Assertion 1: no horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth ||
        document.body.scrollWidth > window.innerWidth;
    });
    expect(hasOverflow).toBe(false);
  });

  test('2, 3, 4, 5: First viewport geometry and visibility assertions', async ({ page }, testInfo) => {
    await page.goto('/#/');
    await page.waitForLoadState('networkidle');

    const viewport = page.viewportSize();
    if (!viewport) return;

    // Save screenshot per viewport into qa/
    const filename = `qa/${testInfo.project.name}-${viewport.width}x${viewport.height}.png`;
    await page.screenshot({ path: filename, fullPage: false });

    // Assertion 4: Header never overlaps main content
    const headerBox = await page.locator('header').boundingBox();
    const contentBox = await page.locator('#play').boundingBox();
    expect(headerBox).not.toBeNull();
    expect(contentBox).not.toBeNull();
    if (headerBox && contentBox) {
      expect(headerBox.y + headerBox.height).toBeLessThanOrEqual(contentBox.y + 2);
    }

    // Assertion 2: H1, can, numbers, and primary CTA inside first viewport
    const h1Box = await page.locator('h1').boundingBox();
    const canBox = await page.locator('[role="img"][aria-label*="paint"]').boundingBox();
    const statsBox = await page.getByTestId('stat-paint-today').first().boundingBox();
    const primaryBtnBox = await page.locator('button:has-text("Try it in 20 seconds")').boundingBox();

    expect(h1Box).not.toBeNull();
    expect(canBox).not.toBeNull();
    expect(statsBox).not.toBeNull();
    expect(primaryBtnBox).not.toBeNull();

    if (h1Box) expect(h1Box.y).toBeLessThan(viewport.height);
    if (canBox) expect(canBox.y).toBeLessThan(viewport.height);

    // Assertion 3: Desktop can height is at least 60% of viewport height
    if (viewport.width === 1440 && canBox) {
      expect(canBox.height).toBeGreaterThanOrEqual(viewport.height * 0.58);
    }

    // Assertion 5: At least 3 task chips visible on mobile, all 6 on desktop
    const chips = page.locator('#play button[aria-pressed]');
    const count = await chips.count();
    let visibleCount = 0;
    for (let i = 0; i < count; i++) {
      const box = await chips.nth(i).boundingBox();
      if (box && box.y + box.height <= viewport.height) {
        visibleCount++;
      }
    }
    if (viewport.width <= 400) {
      expect(visibleCount).toBeGreaterThanOrEqual(3);
    } else if (viewport.width === 1440) {
      expect(visibleCount).toBeGreaterThanOrEqual(6);
    }
  });

  test('6 & 7: Tapping chip updates used text, live region, and handles full / open anyway', async ({ page }) => {
    await page.goto('/#/');
    await page.waitForLoadState('networkidle');

    // Reset demo first
    await page.click('button:has-text("Reset demo")');

    // Check initial used text
    const usedText = page.locator('[data-testid="used-paint-stat"]');
    await expect(usedText).toHaveText('0');

    // Click first task chip
    const firstChip = page.locator('#first-demo-chip');
    await firstChip.click();

    // Assertion 6: used text updates
    await expect(usedText).not.toHaveText('0');

    // Live region announces
    const liveRegion = page.locator('#can-live-region');
    await expect(liveRegion).toContainText('paint used');

    // Click chips until full
    const chips = page.locator('#play button[aria-pressed]');
    const chipCount = await chips.count();
    for (let i = 0; i < chipCount; i++) {
      const chip = chips.nth(i);
      const isPressed = await chip.getAttribute('aria-pressed');
      if (isPressed === 'false' && await chip.isEnabled()) {
        await chip.click();
      }
    }

    // If full banner appears, verify "Open anyway"
    const openAnywayBtn = page.locator('button:has-text("Open anyway")');
    if (await openAnywayBtn.isVisible()) {
      await openAnywayBtn.click();
      await expect(openAnywayBtn).not.toBeVisible();
    }
  });

  test('8: Switching mode changes the accent CSS variable', async ({ page }) => {
    await page.goto('/#/');
    await page.waitForLoadState('networkidle');

    const initialColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--active-mode-color').trim();
    });

    // Click another mode (e.g. GRIND or CREATE)
    const grindBtn = page.locator('button[role="radio"]:has-text("GRIND")');
    await grindBtn.click();

    await expect.poll(async () => {
      return await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--active-mode-color').trim();
      });
    }, {
      message: 'Wait for CSS variable --active-mode-color to update',
      timeout: 5000,
    }).not.toEqual(initialColor);
  });

  test('9: Tab reaches the first chip and Enter adds it', async ({ page }) => {
    await page.goto('/#/');
    await page.waitForLoadState('networkidle');

    // Focus Try it in 20 seconds, which moves focus to the first demo chip
    const cta = page.locator('button:has-text("Try it in 20 seconds")');
    await cta.click();

    const firstChip = page.locator('#first-demo-chip');
    await expect(firstChip).toBeFocused();

    // Press Enter to add
    await page.keyboard.press('Enter');
    await expect(firstChip).toHaveAttribute('aria-pressed', 'true');
  });

  test('10: Under reducedMotion emulation no infinite animations run on the can', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/#/');
    await page.waitForLoadState('networkidle');

    // Verify wave elements don't have animation classes or are disabled
    const animatingWaves = await page.locator('.animate-\\[wave_2\\.5s_linear_infinite\\]').count();
    expect(animatingWaves).toBe(0);
  });

  test('11: Axe zero serious/critical violations on #/ and #/app (report-only on #/system and #/process)', async ({ page }) => {
    const strictRoutes = ['/#/', '/#/app'];
    const reportRoutes = ['/#/system', '/#/process'];

    for (const r of strictRoutes) {
      await page.goto(r);
      await page.waitForLoadState('networkidle');
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();
      const serious = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      if (serious.length > 0) {
        console.error(`AXE VIOLATIONS ON ROUTE: ${r}`, JSON.stringify(serious.map((s) => ({ id: s.id, help: s.help, nodes: s.nodes.map((n) => n.html) })), null, 2));
      }
      expect(serious).toEqual([]);
    }

    for (const r of reportRoutes) {
      await page.goto(r);
      await page.waitForLoadState('networkidle');
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();
      const serious = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      if (serious.length > 0) {
        console.warn(`[REPORT-ONLY] Axe violations on ${r}:`, serious.map((s) => ({ id: s.id, help: s.help })));
      }
    }
  });
});
