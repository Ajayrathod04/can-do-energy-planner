# CAN-DO Engineering & Design Rules
Project: CAN-DO ("Your day has a capacity. Spend it on purpose.")
Author / Maintainer: AJRathod (ajrathod.dev@gmail.com)
Target Deployment: Deployxa (Static Build: `npm run build` -> `dist`)

---

## 1. Design Tokens & Neo-Brutalist System
- **Surfaces**:
  - Paper: `#F4EFE6` (Warm newsprint paper texture)
  - Concrete/Night: `#121212` (with procedural SVG noise and texture)
- **Ink & Boundaries**:
  - Ink: `#0A0A0A`
  - Border: `3px solid #0A0A0A`
  - Hard Offset Shadow: `6px 6px 0px #0A0A0A` (active: `2px 2px 0px #0A0A0A`)
  - Border Radius: Sharp (`0px`) or slight brutalist curve (`4px`)
- **Modes & Multipliers** (`src/data/modes.ts`):
  1. `FOCUS`: Blue `#2F5BFF` (Multiplier `x1.0`) — Restricted to large text ($\ge 24\text{px}$) and UI borders on dark backgrounds. Dynamic lift to `#6B8CFF` for small text to ensure $\ge 4.5:1$ contrast.
  2. `GRIND`: Orange `#FF6B2C` (Multiplier `x1.1`)
  3. `CREATE`: Pink `#FF3D8B` (Multiplier `x1.0`)
  4. `CHILL`: Lime `#B6FF3B` (Multiplier `x0.9`)
  5. `SOCIAL`: Yellow `#FFD93D` (Multiplier `x0.8`)
  6. `RECOVER`: Violet `#8B5CF6` (Multiplier `x0.6`)
- **Typography** (Google Fonts, OFL):
  - Display: `Archivo Black` / `Anton`
  - Graffiti Tags: `Permanent Marker`
  - Body & Numbers: `Space Grotesk`
  - Dyslexia Toggle: `OpenDyslexic`
- **Terminology**: Task costs must strictly be referred to as **"paint units"** (not "cans of paint").

---

## 2. Accessibility (A11y) Rules
- **WCAG AA Compliance**: Every text/background pair must meet or exceed WCAG AA standards:
  - $\ge 4.5:1$ for normal body text.
  - $\ge 3.0:1$ for large text ($\ge 18\text{pt}$ / $24\text{px}$) and essential UI components.
  - Contrast ratios MUST be computed dynamically in code (W3C relative luminance formula). Real computed ratios are rendered on `/#/system`.
- **Keyboard Navigation**:
  - 100% of interactive controls (buttons, sliders, inputs, cards, carousel, can loader) operable via keyboard (Tab, Shift+Tab, Enter, Space, Arrow keys).
  - High-contrast visible focus rings: `3px solid #0A0A0A` with `2px` offset.
  - Skip link at the top of DOM (`#main-content`).
- **Screen Reader Announcements**:
  - Dynamic updates (capacity changes, can overflow alerts, mode repainting) announced politely via `aria-live="polite"`.
- **Touch Targets**: Minimum `44px x 44px` touch target bounding box for all interactive triggers.
- **Audits**: `axe-core` clean (zero critical or serious violations).
- **Reduced Motion**: Respect `prefers-reduced-motion: reduce`. Disables Lenis, particle effects, 3D floating, and pinned scroll scenes, replacing them with instant, clear static representations.

---

## 3. Performance Budgets
- **Mobile Lighthouse**:
  - Performance $\ge 90$
  - Accessibility $= 100$
  - Best Practices $\ge 95$
  - SEO $\ge 90$
- **Core Web Vitals**:
  - Largest Contentful Paint (LCP) $< 2.5\text{s}$
  - Cumulative Layout Shift (CLS) $< 0.1$
  - First Input Delay (FID) / INP $< 100\text{ms}$
- **Bundle & Assets**:
  - Initial JS bundle $< 250\text{KB}$ gzipped.
  - 3D Canvas lazy-loaded with instant SVG/CSS poster fallback.
  - DPR clamped to `1.5` on mobile viewports.
  - Pause Three.js rendering loop when canvas is off-screen.

---

## 4. Engineering & Safety Guidelines
- **Original Assets Only**:
  - No copyrighted characters, logos, or commercial brands.
  - Graphic textures and stencils generated original.
  - Document origin, prompt, and license in `ASSETS.md`.
- **SSR & Test Safety**:
  - Never call `localStorage` directly without browser guards (`typeof window !== 'undefined'`).
  - All persistence operations must be wrapped in `try/catch` to gracefully degrade if storage is disabled or quota is exceeded.
- **Native Canvas Exports**:
  - Do NOT use `html2canvas`. Use native HTML5 Canvas 2D context methods (`canvas.toBlob`) for zero-overhead, high-fidelity PNG export.
- **Sound Defaults**:
  - Sound FX is strictly **OFF by default** (including the overflow spray sound). Web Audio sound effects must never auto-play.
- **Honest Metrics**:
  - Scene S6 placeholder must explicitly state: *"Results from my 5-person test will be added on Oct 17"*. No fabricated statistics or claims.
- **Routing**:
  - Hash-based routing (`HashRouter`: `/#/`, `/#/app`, `/#/system`, `/#/?tour=1`) to prevent 404s on static hosting.
- **Git Hygiene**:
  - Work in small, semantic commits (`feat: ...`, `fix: ...`, `chore: ...`).
  - Run `npm run build` at every milestone boundary before committing.

---

## 5. Definition of Done
1. All scenes and the complete app flow render cleanly and responsively across `375px`, `768px`, and `1440px`.
2. Interactive demo path completes in $< 60\text{s}$: Demo Day $\to$ Check-in $\to$ Load Can $\to$ Overflow Suggestion $\to$ Focus $\to$ Wall Tag.
3. `axe-core` passes with 0 serious/critical violations; keyboard-only run succeeds; reduced-motion verified.
4. `npm run build` succeeds cleanly with zero TypeScript errors, outputting a static `dist/` ready for Deployxa.
5. AJRathod credit footer with email link is present on all views.
6. `README.md` documents problem, solution, architecture, accessibility statement, and deployment steps.
