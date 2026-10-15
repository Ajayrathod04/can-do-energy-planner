# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.ts >> Q: Headless QA Automation Suite >> 2, 3, 4, 5: First viewport geometry and visibility assertions
- Location: e2e\landing.spec.ts:37:3

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 3
Received:    1
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - main [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]:
        - link "CAN-DO Home" [ref=e8] [cursor=pointer]:
          - /url: "#/"
          - generic [ref=e9]: C
          - generic [ref=e10]: CAN-DO.
        - button "Toggle mobile menu" [ref=e12] [cursor=pointer]: ☰
      - region "Interactive Can Demo" [ref=e13]:
        - generic [ref=e14]:
          - generic [ref=e15]:
            - generic [ref=e16]: MODE // FOCUS (1x)
            - button "Reset demo to initial state" [ref=e18] [cursor=pointer]:
              - generic [ref=e22]: Reset demo
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e25]: For students with more to-dos than energy
              - heading "Stop planning more than you can do." [level=1] [ref=e26]
              - paragraph [ref=e27]: CAN-DO turns how you slept into a daily budget of paint. Add tasks until the can is full. The rest waits for tomorrow.
              - generic [ref=e28]:
                - button "Try it in 20 seconds" [ref=e29] [cursor=pointer]
                - link "Open the full planner →" [ref=e30] [cursor=pointer]:
                  - /url: "#/app"
            - generic [ref=e31]:
              - 'img "Aerosol paint canister: 0 of 11 paint units used in FOCUS mode. 11 units remaining." [ref=e34]':
                - status [ref=e35]: 0 of 11 paint used. 11 left.
                - img [aria-hidden] [ref=e36]:
                  - generic [ref=e44]: PSI
                  - generic: zZz
              - generic [ref=e62]:
                - generic [ref=e63]:
                  - generic [ref=e64]:
                    - generic [ref=e65]: PAINT TODAY
                    - text: "11"
                  - generic [ref=e66]:
                    - generic [ref=e67]: USED
                    - text: "0"
                  - generic [ref=e68]:
                    - generic [ref=e69]: LEFT
                    - text: "11"
                - generic [ref=e70]:
                  - generic [ref=e71]:
                    - generic [ref=e72]: Daily Capacity Check-In
                    - button "How is daily capacity calculated?" [ref=e73] [cursor=pointer]:
                      - generic [ref=e77]: Formula
                  - generic [ref=e78]:
                    - generic [ref=e79]:
                      - generic [ref=e80]: Sleep
                      - generic [ref=e81]:
                        - button "5h" [ref=e82] [cursor=pointer]
                        - button "7.5h" [ref=e83] [cursor=pointer]
                        - button "9h" [ref=e84] [cursor=pointer]
                    - generic [ref=e85]:
                      - generic [ref=e86]: Energy
                      - generic [ref=e87]:
                        - button "Low" [ref=e88] [cursor=pointer]
                        - button "Med" [ref=e89] [cursor=pointer]
                        - button "Hi" [ref=e90] [cursor=pointer]
                    - generic [ref=e91]:
                      - generic [ref=e92]: Stress
                      - generic [ref=e93]:
                        - button "Low" [ref=e94] [cursor=pointer]
                        - button "Med" [ref=e95] [cursor=pointer]
                        - button "Hi" [ref=e96] [cursor=pointer]
                - generic [ref=e97]:
                  - generic [ref=e98]: Demo Tasks (Tap to Pack into Can)
                  - group "Task items to feed can" [ref=e100]:
                    - 'button "OS Homework: Kernel Memory Allocator Academics 4 pt" [ref=e101] [cursor=pointer]':
                      - generic [ref=e102]:
                        - generic [ref=e103]: "OS Homework: Kernel Memory Allocator"
                        - text: Academics
                      - generic [ref=e104]: 4 pt
                    - button "Review Discrete Math Graph Proofs Academics 3 pt" [ref=e108] [cursor=pointer]:
                      - generic [ref=e109]:
                        - generic [ref=e110]: Review Discrete Math Graph Proofs
                        - text: Academics
                      - generic [ref=e111]: 3 pt
                    - button "Cook Batch Meal & Grocery Run Life 2 pt" [ref=e115] [cursor=pointer]:
                      - generic [ref=e116]:
                        - generic [ref=e117]: Cook Batch Meal & Grocery Run
                        - text: Life
                      - generic [ref=e118]: 2 pt
                    - button "Software Studio Group Standup Team 2 pt" [ref=e122] [cursor=pointer]:
                      - generic [ref=e123]:
                        - generic [ref=e124]: Software Studio Group Standup
                        - text: Team
                      - generic [ref=e125]: 2 pt
                    - button "Fold Laundry & Quick Tidy Life 1 pt" [ref=e129] [cursor=pointer]:
                      - generic [ref=e130]:
                        - generic [ref=e131]: Fold Laundry & Quick Tidy
                        - text: Life
                      - generic [ref=e132]: 1 pt
                    - button "Debug Canvas Spray Particle Engine Personal 3 pt" [ref=e136] [cursor=pointer]:
                      - generic [ref=e137]:
                        - generic [ref=e138]: Debug Canvas Spray Particle Engine
                        - text: Personal
                      - generic [ref=e139]: 3 pt
      - generic [ref=e144]:
        - generic [ref=e145]:
          - text: Three Physical Rules
          - heading "How It Works" [level=2] [ref=e146]
        - generic [ref=e147]:
          - generic [ref=e149]:
            - generic [ref=e150]:
              - generic [ref=e151]: "01"
              - generic [ref=e152]: BIOLOGICAL MATH
            - heading "Check In & Calibrate" [level=3] [ref=e158]
            - paragraph [ref=e159]: Answer 3 quick questions on sleep, energy, and stress. Cano computes today’s realistic paint units (4 to 16).
          - generic [ref=e161]:
            - generic [ref=e162]:
              - generic [ref=e163]: "02"
              - generic [ref=e164]: TANGIBLE BOUNDARY
            - heading "Feed Cano Tasks" [level=3] [ref=e171]
            - paragraph [ref=e172]: Each task costs 1 to 5 units. Pack them into the can. Watch the level rise in the translucent belly window.
          - generic [ref=e174]:
            - generic [ref=e175]:
              - generic [ref=e176]: "03"
              - generic [ref=e177]: ZERO GUILT
            - heading "Stop When Full" [level=3] [ref=e183]
            - paragraph [ref=e184]: At capacity, the cap snaps shut. Rest and evening recovery count as biological replenishment.
      - generic [ref=e186]:
        - generic [ref=e187]:
          - text: Biological Postures
          - heading "Six Moods, Six Canos" [level=2] [ref=e188]
          - paragraph [ref=e189]: Click any mode to re-skin Cano and dynamically recolor your stage palette.
        - generic [ref=e190]:
          - button "Switch to FOCUS mode" [ref=e191] [cursor=pointer]:
            - generic [ref=e193]:
              - generic [ref=e194]: FOCUS
              - generic [ref=e195]: 1× paint
              - generic [ref=e196]: Focus Glasses
          - button "Switch to GRIND mode" [ref=e197] [cursor=pointer]:
            - generic [ref=e199]:
              - generic [ref=e200]: GRIND
              - generic [ref=e201]: 1.1× paint
              - generic [ref=e202]: Grind Headband
          - button "Switch to CREATE mode" [ref=e203] [cursor=pointer]:
            - generic [ref=e205]:
              - generic [ref=e206]: CREATE
              - generic [ref=e207]: 1× paint
              - generic [ref=e208]: Create Beret
          - button "Switch to CHILL mode" [ref=e209] [cursor=pointer]:
            - generic [ref=e211]:
              - generic [ref=e212]: CHILL
              - generic [ref=e213]: 0.9× paint
              - generic [ref=e214]: Chill Sunhat
          - button "Switch to SOCIAL mode" [ref=e215] [cursor=pointer]:
            - generic [ref=e217]:
              - generic [ref=e218]: SOCIAL
              - generic [ref=e219]: 0.8× paint
              - generic [ref=e220]: Social Headphones
          - button "Switch to RECOVER mode" [ref=e221] [cursor=pointer]:
            - generic [ref=e223]:
              - generic [ref=e224]: RECOVER
              - generic [ref=e225]: 0.6× paint
              - generic [ref=e226]: Recover Blanket
      - generic [ref=e228]:
        - generic [ref=e229]:
          - text: Sensory Deck & Inclusivity
          - heading "Built for Everyone" [level=2] [ref=e230]
          - paragraph [ref=e231]: Real interactive toggles. Customize your sensory experience with one click.
        - generic [ref=e232]:
          - button "View keyboard shortcuts" [ref=e233] [cursor=pointer]:
            - generic [ref=e234]: ⌨️ Keyboard
            - generic [ref=e235]: Help (?)
          - button "🍃 Motion Standard" [ref=e236] [cursor=pointer]:
            - generic [ref=e237]: 🍃 Motion
            - generic [ref=e238]: Standard
          - button "📖 Dyslexia Default" [ref=e239] [cursor=pointer]:
            - generic [ref=e240]: 📖 Dyslexia
            - generic [ref=e241]: Default
          - button "👁️ Contrast Standard" [ref=e242] [cursor=pointer]:
            - generic [ref=e243]: 👁️ Contrast
            - generic [ref=e244]: Standard
          - button "Cycle text size scale" [ref=e245] [cursor=pointer]:
            - generic [ref=e246]: 🔠 Text Size
            - generic [ref=e247]: 100%
          - button "🔊 Audio OFF (Silent)" [ref=e248] [cursor=pointer]:
            - generic [ref=e249]: 🔊 Audio
            - generic [ref=e250]: OFF (Silent)
        - paragraph [ref=e251]: 🔒 Your data stays on your device. Zero telemetry, cookies, or remote analytics.
      - generic [ref=e253]:
        - generic [ref=e254]:
          - text: Common Inquiries
          - heading "Frequently Asked Questions" [level=2] [ref=e255]
        - generic [ref=e256]:
          - generic [ref=e257]:
            - heading "Why a spray can instead of a normal to-do list?" [level=3] [ref=e258]
            - paragraph [ref=e259]: "Normal to-do lists create the illusion of infinite capacity, leading to late-night guilt spirals. A pressurized spray can represents physical volume: when it is full, you stop."
          - generic [ref=e260]:
            - heading "How is 1 paint unit defined?" [level=3] [ref=e261]
            - paragraph [ref=e262]: 1 paint unit represents roughly 30 minutes of high-focus stamina for a realistic student or knowledge worker. Calibrating sleep, energy, and stress sets your daily volume.
          - generic [ref=e263]:
            - heading "Does my data leave my browser?" [level=3] [ref=e264]
            - paragraph [ref=e265]: Never. CAN-DO runs 100% locally on your device with localStorage persistence. No accounts, cookies, analytics, or remote servers exist.
      - contentinfo "Author attribution and contact footer" [ref=e266]:
        - generic [ref=e268]:
          - generic [ref=e269]: MADE BY
          - heading "AJRathod" [level=2] [ref=e271]
          - generic [ref=e272]:
            - link "Send email to AJRathod at ajaybr2021@gmail.com" [ref=e273] [cursor=pointer]:
              - /url: mailto:ajaybr2021@gmail.com
              - generic [ref=e277]: ajaybr2021@gmail.com
            - button "Copy email address to clipboard" [ref=e278] [cursor=pointer]:
              - generic [ref=e282]: COPY EMAIL
            - link "View source repository on GitHub" [ref=e283] [cursor=pointer]:
              - /url: https://github.com/Ajayrathod04/can-do-energy-planner
              - generic [ref=e288]: GITHUB REPO
          - generic [ref=e289]:
            - generic [ref=e290]: "Built for Hyperbloom October: UI/UX & Web Design"
            - generic [ref=e291]: Digital wall. Please paint legal walls only.
  - button "Start 60-second guided judge tour" [ref=e292] [cursor=pointer]:
    - generic [ref=e296]: Tour (60s)
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import AxeBuilder from '@axe-core/playwright';
  3   | import fs from 'node:fs';
  4   | import path from 'node:path';
  5   | 
  6   | test.describe('Q: Headless QA Automation Suite', () => {
  7   |   test.beforeAll(() => {
  8   |     const qaDir = path.resolve(process.cwd(), 'qa');
  9   |     if (!fs.existsSync(qaDir)) {
  10  |       fs.mkdirSync(qaDir, { recursive: true });
  11  |     }
  12  |   });
  13  | 
  14  |   test('1 & 12: Zero non-local origin requests and no horizontal overflow', async ({ page }) => {
  15  |     const externalRequests: string[] = [];
  16  |     page.on('request', (req) => {
  17  |       const url = req.url();
  18  |       if (!url.startsWith('http://localhost') && !url.startsWith('data:')) {
  19  |         externalRequests.push(url);
  20  |       }
  21  |     });
  22  | 
  23  |     await page.goto('/#/');
  24  |     await page.waitForLoadState('networkidle');
  25  | 
  26  |     // Assertion 12: zero requests to non-local origins
  27  |     expect(externalRequests).toEqual([]);
  28  | 
  29  |     // Assertion 1: no horizontal overflow
  30  |     const hasOverflow = await page.evaluate(() => {
  31  |       return document.documentElement.scrollWidth > window.innerWidth ||
  32  |         document.body.scrollWidth > window.innerWidth;
  33  |     });
  34  |     expect(hasOverflow).toBe(false);
  35  |   });
  36  | 
  37  |   test('2, 3, 4, 5: First viewport geometry and visibility assertions', async ({ page }, testInfo) => {
  38  |     await page.goto('/#/');
  39  |     await page.waitForLoadState('networkidle');
  40  | 
  41  |     const viewport = page.viewportSize();
  42  |     if (!viewport) return;
  43  | 
  44  |     // Save screenshot per viewport into qa/
  45  |     const filename = `qa/${testInfo.project.name}-${viewport.width}x${viewport.height}.png`;
  46  |     await page.screenshot({ path: filename, fullPage: false });
  47  | 
  48  |     // Assertion 4: Header never overlaps main content
  49  |     const headerBox = await page.locator('header').boundingBox();
  50  |     const contentBox = await page.locator('#play').boundingBox();
  51  |     expect(headerBox).not.toBeNull();
  52  |     expect(contentBox).not.toBeNull();
  53  |     if (headerBox && contentBox) {
  54  |       expect(headerBox.y + headerBox.height).toBeLessThanOrEqual(contentBox.y + 2);
  55  |     }
  56  | 
  57  |     // Assertion 2: H1, can, numbers, and primary CTA inside first viewport
  58  |     const h1Box = await page.locator('h1').boundingBox();
  59  |     const canBox = await page.locator('[role="img"][aria-label*="paint"]').boundingBox();
  60  |     const statsBox = await page.locator('text=PAINT TODAY').locator('..').boundingBox();
  61  |     const primaryBtnBox = await page.locator('button:has-text("Try it in 20 seconds")').boundingBox();
  62  | 
  63  |     expect(h1Box).not.toBeNull();
  64  |     expect(canBox).not.toBeNull();
  65  | 
  66  |     if (h1Box) expect(h1Box.y).toBeLessThan(viewport.height);
  67  |     if (canBox) expect(canBox.y).toBeLessThan(viewport.height);
  68  | 
  69  |     // Assertion 3: Desktop can height is at least 60% of viewport height
  70  |     if (viewport.width === 1440 && canBox) {
  71  |       expect(canBox.height).toBeGreaterThanOrEqual(viewport.height * 0.58);
  72  |     }
  73  | 
  74  |     // Assertion 5: At least 3 task chips visible on mobile, all 6 on desktop
  75  |     const chips = page.locator('#play button[aria-pressed]');
  76  |     const count = await chips.count();
  77  |     let visibleCount = 0;
  78  |     for (let i = 0; i < count; i++) {
  79  |       const box = await chips.nth(i).boundingBox();
  80  |       if (box && box.y + box.height <= viewport.height) {
  81  |         visibleCount++;
  82  |       }
  83  |     }
  84  |     if (viewport.width <= 400) {
> 85  |       expect(visibleCount).toBeGreaterThanOrEqual(3);
      |                            ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  86  |     } else if (viewport.width === 1440) {
  87  |       expect(visibleCount).toBeGreaterThanOrEqual(6);
  88  |     }
  89  |   });
  90  | 
  91  |   test('6 & 7: Tapping chip updates used text, live region, and handles full / open anyway', async ({ page }) => {
  92  |     await page.goto('/#/');
  93  |     await page.waitForLoadState('networkidle');
  94  | 
  95  |     // Reset demo first
  96  |     await page.click('button:has-text("Reset demo")');
  97  | 
  98  |     // Check initial used text
  99  |     const usedText = page.locator('[data-testid="used-paint-stat"]');
  100 |     await expect(usedText).toHaveText('0');
  101 | 
  102 |     // Click first task chip
  103 |     const firstChip = page.locator('#first-demo-chip');
  104 |     await firstChip.click();
  105 | 
  106 |     // Assertion 6: used text updates
  107 |     await expect(usedText).not.toHaveText('0');
  108 | 
  109 |     // Live region announces
  110 |     const liveRegion = page.locator('#can-live-region');
  111 |     await expect(liveRegion).toContainText('paint used');
  112 | 
  113 |     // Click chips until full
  114 |     const chips = page.locator('#play button[aria-pressed]');
  115 |     const chipCount = await chips.count();
  116 |     for (let i = 0; i < chipCount; i++) {
  117 |       const chip = chips.nth(i);
  118 |       const isPressed = await chip.getAttribute('aria-pressed');
  119 |       if (isPressed === 'false' && await chip.isEnabled()) {
  120 |         await chip.click();
  121 |       }
  122 |     }
  123 | 
  124 |     // If full banner appears, verify "Open anyway"
  125 |     const openAnywayBtn = page.locator('button:has-text("Open anyway")');
  126 |     if (await openAnywayBtn.isVisible()) {
  127 |       await openAnywayBtn.click();
  128 |       await expect(openAnywayBtn).not.toBeVisible();
  129 |     }
  130 |   });
  131 | 
  132 |   test('8: Switching mode changes the accent CSS variable', async ({ page }) => {
  133 |     await page.goto('/#/');
  134 |     await page.waitForLoadState('networkidle');
  135 | 
  136 |     const initialColor = await page.evaluate(() => {
  137 |       return getComputedStyle(document.documentElement).getPropertyValue('--active-mode-color').trim();
  138 |     });
  139 | 
  140 |     // Click another mode (e.g. GRIND or CREATE)
  141 |     const grindBtn = page.locator('button[role="radio"]:has-text("GRIND")');
  142 |     await grindBtn.click();
  143 | 
  144 |     const newColor = await page.evaluate(() => {
  145 |       return getComputedStyle(document.documentElement).getPropertyValue('--active-mode-color').trim();
  146 |     });
  147 | 
  148 |     expect(newColor).not.toEqual(initialColor);
  149 |   });
  150 | 
  151 |   test('9: Tab reaches the first chip and Enter adds it', async ({ page }) => {
  152 |     await page.goto('/#/');
  153 |     await page.waitForLoadState('networkidle');
  154 | 
  155 |     // Focus Try it in 20 seconds, which moves focus to the first demo chip
  156 |     const cta = page.locator('button:has-text("Try it in 20 seconds")');
  157 |     await cta.click();
  158 | 
  159 |     const firstChip = page.locator('#first-demo-chip');
  160 |     await expect(firstChip).toBeFocused();
  161 | 
  162 |     // Press Enter to add
  163 |     await page.keyboard.press('Enter');
  164 |     await expect(firstChip).toHaveAttribute('aria-pressed', 'true');
  165 |   });
  166 | 
  167 |   test('10: Under reducedMotion emulation no infinite animations run on the can', async ({ page }) => {
  168 |     await page.emulateMedia({ reducedMotion: 'reduce' });
  169 |     await page.goto('/#/');
  170 |     await page.waitForLoadState('networkidle');
  171 | 
  172 |     // Verify wave elements don't have animation classes or are disabled
  173 |     const animatingWaves = await page.locator('.animate-\\[wave_2\\.5s_linear_infinite\\]').count();
  174 |     expect(animatingWaves).toBe(0);
  175 |   });
  176 | 
  177 |   test('11: Axe zero serious/critical violations on all 4 routes', async ({ page }) => {
  178 |     const routes = ['/#/', '/#/app', '/#/system', '/#/process'];
  179 |     for (const r of routes) {
  180 |       await page.goto(r);
  181 |       await page.waitForLoadState('networkidle');
  182 |       const results = await new AxeBuilder({ page })
  183 |         .withTags(['wcag2a', 'wcag2aa'])
  184 |         .analyze();
  185 |       const serious = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
```