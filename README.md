# CAN-DO 🛢️✨

Live: https://can-do-energy-planner.deployxa.app

> **"Your day has a capacity. Spend it on purpose."**

An award-winning, portfolio-grade daily energy budgeting application built for the **Hyperbloom October: UI/UX & Web Design Hackathon (Devpost)**.

Built by **AJRathod** ([ajaybr2021@gmail.com](mailto:ajaybr2021@gmail.com)).  
Live Static Target: **Deployxa** (`build: npm run build`, `output: dist`).

---

## 💡 The Problem & The Insight

Students and knowledge workers drown under **infinite to-do lists**. Traditional productivity applications treat cognitive stamina like an elastic band—inviting users to schedule 27 ambitious items onto a Tuesday while ignoring sleep debt, cognitive friction, and human biological stamina. The inevitable outcome: executive dysfunction, decision paralysis, and 2 AM guilt spirals.

### The Solution: "The Page is the Product — Feed Cano"
**CAN-DO** models daily cognitive energy as physical paint inside an animated 3D spray can character named **Cano**:
- **5-Second Stranger Playability**: A giant interactive 3D character breaks out of 24vw display typography above the fold. No signup, no onboarding barriers.
- **Universal Unit**: Defined once, everywhere: *1 paint = about one small task (roughly 30 minutes of brain energy)*.
- **Check-In Calibration**: Sleep, physical energy, and friction levels mathematically compute today’s safe volume (4 to 16 paint).
- **Interactive Task Feeding**: Feed Cano by dragging tokens, pressing "Feed Cano", or keyboard focus. Counters and fluid levels update with damped-spring physics.
- **Cap-Lock Guard & Overload**: At 100% capacity, the cap locks shut with a *"Full! The rest waits for tomorrow"* notice and haptic pulse. An *"Open anyway"* override ensures user agency.
- **Spray Focus & The Wall**: Start a focus run on any packed task; Cano sprays permanent graffiti tags onto *Your Wall*. Rest days also generate tags (*"Resting counts as capacity renewal"*).
- **Permission to Rest**: 1-click certificate generator producing a downloadable stencil certificate *"PERMISSION TO REST"*.
- **Sensory Deck**: Interactive toggles for Reduced Motion, Dyslexia Font, High Contrast, Font Scaling, and Web Audio FX (strictly OFF by default).

---

## 🎨 Visual System: "Pop Poster" (Light)

- **Light Paper Default**: Base warm cream paper `#FFF6E5`, Black Ink `#14101F`, Stage Orange `#FF6B2C`, Violet `#7C5CFF`, Pink `#FF3D8B`, Lime `#B6FF3B`, Sky `#7DD3FC`, Sun `#FFD93D`.
- **Contrast Computed in Code**: Algorithmic relative luminance calculations ensure all text pairings pass WCAG 2.1 AA standards.
- **Typography** (`@fontsource`):
  - Display: `Titan One` (OFL-1.1)
  - Speech & Wall Tags: `Permanent Marker` (Apache-2.0)
  - Body & UI: `Space Grotesk` (OFL-1.1)
  - A11y Legibility: `OpenDyslexic` toggle support

---

## 🏗️ Folder Architecture

Every single source file is strictly modularized to under 200 lines:

```text
src/
├── app/               # Full planner components (TaskBoard, CanDock, TheWall, MonthMural, PermissionSlip)
├── components/        # Shared primitives (icons, CanoMascot, Footer, UI components)
├── data/              # Static modes and demo tasks
├── features/          # Feature domains
│   ├── landing/       # LandingNav, HowItWorksSection, SixMoodsSection, BuiltForEveryoneSection, FAQSection
│   ├── stage/         # Playable hero stage state machine (StageHero, StageCheckin, StageFeedingTray, StageStatChips)
│   └── tour/          # Guided judge tour overlay and steps
├── lib/               # Mathematical utilities, Zustand store slices, contrast calculation, and sound synthesis
├── pages/             # LandingPage, AppPage, SystemPage, NotFoundPage
├── styles/            # Pop Poster tokens (tokens.css, tokens.ts)
├── tests/             # Comprehensive Vitest test suite & vitest-axe a11y audits
└── three/             # Procedural 3D WebGL assets
    └── cano/          # Procedural 3D Cano character (lathe body, tracking eyes, limbs, belly gauge, skins)
```

---

## ♿ Accessibility & Zero-Tracker Privacy

- **Algorithmic WCAG 2.1 Contrast**: Every contrast ratio is computed mathematically in code via W3C relative luminance equations (`contrast.ts`). Ratios are documented live on `/#/system`.
- **Zero Third-Party Network Requests**: Fonts are 100% self-hosted locally via `@fontsource`. No Google CDN, no analytics, no cookies, no tracking pixels.
- **100% Local Storage**: All tasks, settings, and tags reside exclusively in browser `localStorage`.
- **Keyboard Navigation**: 100% operable via keyboard (Skip link, Tab, Enter, Space, Esc, Arrows) with visible 3px focus rings.
- **Sensory & Motion Control**:
  - `prefers-reduced-motion` strictly honored: static poses, paused animations, and CSS fallbacks.
  - Web Audio synthesis is strictly **OFF by default** (zero surprise audio).
- **Responsible Graffiti Disclaimer**: Notice displayed on all routes and exports:  
  *"Digital wall. Please paint legal walls only."*

---

## 🧪 Verification & Real Check Results

Automated checks executed and passing:
- **TypeScript**: `npx tsc --noEmit` ➔ **PASS** (0 errors)
- **Unit & Logic Tests**: `npm run test` ➔ **PASS** (10 test files, 56 tests passing)
- **A11y Tests**: vitest-axe on Stage, Landing sections, and UI primitives ➔ **PASS** (0 violations)
- **Lint**: `npm run lint` ➔ **PASS** (0 warnings)
- **Production Build**: `npm run build` ➔ **PASS** (clean Vite output to `dist/`)

---

## 📄 License & Attribution

- **Code**: MIT License (see [LICENSES.md](LICENSES.md))
- **Assets**: 100% original / CC0 (see [ASSETS.md](ASSETS.md))
- **Author**: AJRathod ([ajaybr2021@gmail.com](mailto:ajaybr2021@gmail.com))
