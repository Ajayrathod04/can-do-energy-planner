# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.ts >> Q: Headless QA Automation Suite >> 11: Axe zero serious/critical violations on all 4 routes
- Location: e2e\landing.spec.ts:177:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 233

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.08,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#00a86b",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"relative bg-white text-[#111111] p-6 border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] space-y-4\">",
+                 "target": Array [
+                   ".lg\\:grid-cols-3 > .space-y-4.relative.p-6:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-bold text-[#00A86B]\">4.82:1 (AA Pass)</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4.relative.p-6:nth-child(1) > .space-y-2.text-xs.font-mono > .border-b.border-\\[\\#E5E5E5\\].pb-1:nth-child(3) > .text-\\[\\#00A86B\\].font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.08,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#00a86b",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"relative bg-white text-[#111111] p-6 border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] space-y-4\">",
+                 "target": Array [
+                   ".lg\\:grid-cols-3 > .space-y-4.relative.p-6:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-bold text-[#00A86B]\">2.65:1 (AA Pass)</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4.relative.p-6:nth-child(2) > .space-y-2.text-xs.font-mono > .border-b.border-\\[\\#E5E5E5\\].pb-1:nth-child(3) > .text-\\[\\#00A86B\\].font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.08,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#00a86b",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"relative bg-white text-[#111111] p-6 border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] space-y-4\">",
+                 "target": Array [
+                   ".space-y-4.relative.p-6:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-bold text-[#00A86B]\">3.11:1 (AA Pass)</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4.relative.p-6:nth-child(3) > .space-y-2.text-xs.font-mono > .border-b.border-\\[\\#E5E5E5\\].pb-1:nth-child(3) > .text-\\[\\#00A86B\\].font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.08,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#00a86b",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"relative bg-white text-[#111111] p-6 border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] space-y-4\">",
+                 "target": Array [
+                   ".space-y-4.relative.p-6:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-bold text-[#00A86B]\">1.13:1 (AA Pass)</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4.relative.p-6:nth-child(4) > .space-y-2.text-xs.font-mono > .border-b.border-\\[\\#E5E5E5\\].pb-1:nth-child(3) > .text-\\[\\#00A86B\\].font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.08,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#00a86b",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"relative bg-white text-[#111111] p-6 border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] space-y-4\">",
+                 "target": Array [
+                   ".space-y-4.relative.p-6:nth-child(5)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-bold text-[#00A86B]\">1.28:1 (AA Pass)</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4.relative.p-6:nth-child(5) > .space-y-2.text-xs.font-mono > .border-b.border-\\[\\#E5E5E5\\].pb-1:nth-child(3) > .text-\\[\\#00A86B\\].font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.08,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#00a86b",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"relative bg-white text-[#111111] p-6 border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] space-y-4\">",
+                 "target": Array [
+                   ".space-y-4.relative.p-6:nth-child(6)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.08 (foreground color: #00a86b, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-bold text-[#00A86B]\">3.95:1 (AA Pass)</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4.relative.p-6:nth-child(6) > .space-y-2.text-xs.font-mono > .border-b.border-\\[\\#E5E5E5\\].pb-1:nth-child(3) > .text-\\[\\#00A86B\\].font-bold",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - main [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - generic [ref=e8]:
          - generic [ref=e9]: Design Tokens & Accessibility Specification
          - heading "/SYSTEM SHOWCASE" [level=1] [ref=e10]
          - paragraph [ref=e11]: Editorial Neo-Brutalism + Graffiti Accents. Documenting color mathematics, 16 chunky SVG icons, Cano mascot poses, interactive UI components, and WCAG AA contrast.
        - link "← Back to Home" [ref=e12] [cursor=pointer]:
          - /url: "#/"
      - generic [ref=e13]:
        - generic [ref=e14]:
          - generic [ref=e15]: MATHEMATICAL WCAG AA
          - heading "1. Mode Palette & Contrast Engine" [level=2] [ref=e17]
          - paragraph [ref=e18]: All contrast ratios are calculated programmatically using the official W3C relative luminance equation.
        - generic [ref=e19]:
          - generic [ref=e20]:
            - generic [ref=e21]:
              - generic [ref=e22]: FOCUS
              - generic [ref=e23]: 1×
            - generic [ref=e24]:
              - generic [ref=e25]:
                - generic [ref=e26]: "Hex Token:"
                - generic [ref=e27]: "#2F5BFF"
              - generic [ref=e28]:
                - generic [ref=e29]: "Pattern Texture:"
                - generic [ref=e30]: stripes
              - generic [ref=e31]:
                - generic [ref=e32]: "Contrast on Paper (#FFF6E5):"
                - generic [ref=e33]: 4.82:1 (AA Pass)
              - generic [ref=e34]:
                - generic [ref=e35]: "Contrast on Dark (#121212):"
                - generic [ref=e36]: 3.62:1
          - generic [ref=e37]:
            - generic [ref=e38]:
              - generic [ref=e39]: GRIND
              - generic [ref=e40]: 1.1×
            - generic [ref=e41]:
              - generic [ref=e42]:
                - generic [ref=e43]: "Hex Token:"
                - generic [ref=e44]: "#FF6B2C"
              - generic [ref=e45]:
                - generic [ref=e46]: "Pattern Texture:"
                - generic [ref=e47]: dots
              - generic [ref=e48]:
                - generic [ref=e49]: "Contrast on Paper (#FFF6E5):"
                - generic [ref=e50]: 2.65:1 (AA Pass)
              - generic [ref=e51]:
                - generic [ref=e52]: "Contrast on Dark (#121212):"
                - generic [ref=e53]: 6.59:1
          - generic [ref=e54]:
            - generic [ref=e55]:
              - generic [ref=e56]: CREATE
              - generic [ref=e57]: 1×
            - generic [ref=e58]:
              - generic [ref=e59]:
                - generic [ref=e60]: "Hex Token:"
                - generic [ref=e61]: "#FF3D8B"
              - generic [ref=e62]:
                - generic [ref=e63]: "Pattern Texture:"
                - generic [ref=e64]: zigzag
              - generic [ref=e65]:
                - generic [ref=e66]: "Contrast on Paper (#FFF6E5):"
                - generic [ref=e67]: 3.11:1 (AA Pass)
              - generic [ref=e68]:
                - generic [ref=e69]: "Contrast on Dark (#121212):"
                - generic [ref=e70]: 5.61:1
          - generic [ref=e71]:
            - generic [ref=e72]:
              - generic [ref=e73]: CHILL
              - generic [ref=e74]: 0.9×
            - generic [ref=e75]:
              - generic [ref=e76]:
                - generic [ref=e77]: "Hex Token:"
                - generic [ref=e78]: "#B6FF3B"
              - generic [ref=e79]:
                - generic [ref=e80]: "Pattern Texture:"
                - generic [ref=e81]: waves
              - generic [ref=e82]:
                - generic [ref=e83]: "Contrast on Paper (#FFF6E5):"
                - generic [ref=e84]: 1.13:1 (AA Pass)
              - generic [ref=e85]:
                - generic [ref=e86]: "Contrast on Dark (#121212):"
                - generic [ref=e87]: 15.48:1
          - generic [ref=e88]:
            - generic [ref=e89]:
              - generic [ref=e90]: SOCIAL
              - generic [ref=e91]: 0.8×
            - generic [ref=e92]:
              - generic [ref=e93]:
                - generic [ref=e94]: "Hex Token:"
                - generic [ref=e95]: "#FFD93D"
              - generic [ref=e96]:
                - generic [ref=e97]: "Pattern Texture:"
                - generic [ref=e98]: checks
              - generic [ref=e99]:
                - generic [ref=e100]: "Contrast on Paper (#FFF6E5):"
                - generic [ref=e101]: 1.28:1 (AA Pass)
              - generic [ref=e102]:
                - generic [ref=e103]: "Contrast on Dark (#121212):"
                - generic [ref=e104]: 13.6:1
          - generic [ref=e105]:
            - generic [ref=e106]:
              - generic [ref=e107]: RECOVER
              - generic [ref=e108]: 0.6×
            - generic [ref=e109]:
              - generic [ref=e110]:
                - generic [ref=e111]: "Hex Token:"
                - generic [ref=e112]: "#8B5CF6"
              - generic [ref=e113]:
                - generic [ref=e114]: "Pattern Texture:"
                - generic [ref=e115]: solid
              - generic [ref=e116]:
                - generic [ref=e117]: "Contrast on Paper (#FFF6E5):"
                - generic [ref=e118]: 3.95:1 (AA Pass)
              - generic [ref=e119]:
                - generic [ref=e120]: "Contrast on Dark (#121212):"
                - generic [ref=e121]: 4.42:1
      - generic [ref=e122]:
        - generic [ref=e123]:
          - generic [ref=e124]: CUSTOM VECTOR ASSETS
          - heading "2. 16 Chunky Inline SVG Icons" [level=2] [ref=e126]
          - paragraph [ref=e127]: Original 3px stroke vector icons with rounded caps and colored blob backdrops.
        - generic [ref=e128]:
          - generic [ref=e129]: SunMoon
          - generic [ref=e135]: PaintDrop
          - generic [ref=e141]: SprayCan
          - generic [ref=e147]: Calendar
          - generic [ref=e154]: PillowRest
          - generic [ref=e162]: Star
          - generic [ref=e166]: Shield
          - generic [ref=e171]: Keyboard
          - generic [ref=e175]: Eye
          - generic [ref=e180]: Hand
          - generic [ref=e184]: Timer
          - generic [ref=e189]: Download
          - generic [ref=e194]: Sound
          - generic [ref=e199]: Vibration
          - generic [ref=e205]: Help
          - generic [ref=e211]: Check
      - generic [ref=e216]:
        - generic [ref=e217]:
          - generic [ref=e218]: ORIGINAL CHARACTER DESIGN
          - heading "3. Mascot 'Cano' in 4 Poses" [level=2] [ref=e220]
          - paragraph [ref=e221]: Pure inline SVG character engineered with expressiveness, accessible alt text, and zero third-party resemblance.
        - generic [ref=e222]:
          - generic [ref=e223]:
            - img "Cano the spray can smiling and waving" [ref=e224]:
              - generic [ref=e230]: CAN-DO
            - generic [ref=e241]: "Pose: happy"
          - generic [ref=e242]:
            - img "Cano the spray can with full cheeks indicating the can is full" [ref=e243]:
              - generic [ref=e249]: CAN-DO
            - generic [ref=e260]: "Pose: full"
          - generic [ref=e261]:
            - img "Cano the spray can sleeping peacefully with a nightcap" [ref=e262]:
              - generic [ref=e268]: CAN-DO
              - generic [ref=e273]: Z
              - generic [ref=e274]: z
            - generic [ref=e276]: "Pose: sleepy"
          - generic [ref=e277]:
            - img "Cano the spray can jumping happily and spraying confetti" [ref=e278]:
              - generic [ref=e284]: CAN-DO
            - generic [ref=e295]: "Pose: celebrating"
      - generic [ref=e296]:
        - generic [ref=e297]:
          - generic [ref=e298]: COMPONENTS / UI
          - heading "4. Reusable UI Components & Interactive States" [level=2] [ref=e300]
          - paragraph [ref=e301]: Every component is typed, keyboard-accessible, and enforces neo-brutalist interaction physics.
        - generic [ref=e302]:
          - generic [ref=e303]:
            - heading "Buttons & Badges" [level=3] [ref=e304]
            - generic [ref=e305]:
              - button "Brutal SM" [ref=e306] [cursor=pointer]
              - button "Primary MD" [ref=e307] [cursor=pointer]
              - button "Secondary" [ref=e308] [cursor=pointer]
              - button "Outline" [ref=e309] [cursor=pointer]
            - button "Pill CTA Button" [ref=e311] [cursor=pointer]
            - generic [ref=e312]:
              - generic [ref=e313]: ★ STARBURST ★
              - generic [ref=e314]: PILL BADGE
              - generic [ref=e315]: GRAFFITI TAG
              - generic [ref=e316]: DIE-CUT STICKER
          - generic [ref=e317]:
            - heading "Sliders & Toggles" [level=3] [ref=e318]
            - generic [ref=e319]:
              - generic [ref=e320]:
                - generic [ref=e321]: Sample Capacity Slider
                - generic [ref=e322]: 6 paint
              - slider "Sample Capacity Slider" [ref=e323] [cursor=pointer]: "6"
            - generic [ref=e324]:
              - generic [ref=e325]:
                - text: Accessible Switch Toggle
                - paragraph [ref=e326]: Built-in role='switch' and aria-checked
              - switch "Accessible Switch Toggle" [checked] [ref=e327] [cursor=pointer]
            - progressbar "Sample Progress" [ref=e330]
            - generic [ref=e332]:
              - button "Hover or Focus for Tooltip" [ref=e334] [cursor=pointer]
              - button "Trigger Toast" [ref=e335] [cursor=pointer]
      - generic [ref=e336]:
        - heading "5. Scrolling Caution Tape" [level=3] [ref=e337]
        - generic "Announcement ticker" [ref=e338]:
          - generic [ref=e339]:
            - generic [ref=e340]: CAN-DO • DON’T OVERFILL • REST COUNTS • PAINT LEGAL WALLS ONLY • SPEND YOUR DAY ON PURPOSE •
            - generic [ref=e341]: CAN-DO • DON’T OVERFILL • REST COUNTS • PAINT LEGAL WALLS ONLY • SPEND YOUR DAY ON PURPOSE •
            - generic [ref=e342]: CAN-DO • DON’T OVERFILL • REST COUNTS • PAINT LEGAL WALLS ONLY • SPEND YOUR DAY ON PURPOSE •
            - generic [ref=e343]: CAN-DO • DON’T OVERFILL • REST COUNTS • PAINT LEGAL WALLS ONLY • SPEND YOUR DAY ON PURPOSE •
  - button "Start 60-second guided judge tour" [ref=e344] [cursor=pointer]:
    - generic [ref=e348]: Tour (60s)
```

# Test source

```ts
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
  186 |       if (serious.length > 0) {
  187 |         console.error(`AXE VIOLATIONS ON ROUTE: ${r}`, JSON.stringify(serious.map((s) => ({ id: s.id, help: s.help, nodes: s.nodes.map((n) => n.html) })), null, 2));
  188 |       }
> 189 |       expect(serious).toEqual([]);
      |                       ^ Error: expect(received).toEqual(expected) // deep equality
  190 |     }
  191 |   });
  192 | });
  193 | 
```