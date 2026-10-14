# CAN-DO 🛢️✨

Live: https://can-do-energy-planner.deployxa.app

> **"Your day has a capacity. Spend it on purpose."**

An award-winning, portfolio-grade daily energy budgeting application built for the **Hyperbloom October: UI/UX & Web Design Hackathon (Devpost)**.

Built by **AJRathod** ([ajaybr2021@gmail.com](mailto:ajaybr2021@gmail.com)).  
Live Static Target: **Deployxa** (`build: npm run build`, `output: dist`).

---

## 💡 The Problem & The Insight

Students and knowledge workers drown under **infinite to-do lists**. Traditional productivity applications treat cognitive stamina like an elastic band—inviting users to schedule 27 ambitious items onto a Tuesday while ignoring sleep debt, cognitive friction, and human biological stamina. The inevitable outcome: executive dysfunction, decision paralysis, and 2 AM guilt spirals.

### The Solution: A Physical Aerosol Energy Budget
**CAN-DO** models daily cognitive energy as a **pressurized spray can of paint**:
- **5-Second Stranger Clarity**: A clear, plain-language hero ("Your day is a spray can. When it's full, stop.") ensures immediate understanding.
- **Universal Unit**: Defined once, everywhere: *1 paint = about one small task (roughly 30 minutes of brain energy)*.
- **Check-In Calibration**: Sleep, physical energy, and friction levels mathematically compute today’s safe volume (4 to 16 paint).
- **The Procedural 3D Can is the Interface**: Built with procedural `THREE.LatheGeometry` and dynamic vector `CanvasTexture` labels on a bright studio stage. As tasks are loaded, the can fills.
- **Overload Fluid Drips**: Overfilling triggers a 2D canvas gravity drip simulation on the wall behind the can—1 stream per excess unit.
- **Cap-Lock Guard**: At 100% capacity, the cap locks automatically with a *"CAN IS FULL: CLOSED FOR TODAY"* banner and haptic pulse. A kind *"Open anyway"* override ensures user agency.
- **Guilt-Free Deferral**: The *"Too much for today?"* advisor recommends strategic deferrals by cost and due date with zero guilt language.
- **Your Wall & Month Mural**: Completed work converts into permanent graffiti plaques on *Your Wall*. Rest days also generate tags (*"Resting counts as capacity renewal"*). Export the wall or a full 1080x1350 monthly poster as PNG.
- **Permission to Rest**: 1-click certificate generator producing a downloadable stencil certificate *"PERMISSION TO REST"*.

---

## 🎨 Design System: "Editorial Neo-Brutalism + Graffiti Accents"

- **Light Paper Default**: Base warm cream paper `#FFF6E5` with faint grain, soft sky gradient (`#DDF1FF` to cream) on hero. Dark theme is an opt-in toggle only. Circadian mode subtly tints accents and background warm/cool without ever turning the site dark by default.
- **Palette**: Sun Yellow (`#FFD93D`), Hot Pink (`#FF3D8B`), Mint (`#00E599`), Sky Blue (`#38BDF8`), Tangerine (`#FF6B2C`), Lilac (`#C084FC`), Black Ink (`#111111`).
- **Neo-Brutalist Structure**: 3px black outlines, hard offset drop shadows (`shadow-[4px_4px_0_#111111]`), tilted sticker angles (-3° to +3°), tape strips on cards.
- **16 Chunky Inline SVG Icons**: Built-in 3px stroke vector icons with rounded caps and colored blob fills (`SunMoon`, `PaintDrop`, `SprayCan`, `Calendar`, `PillowRest`, `Star`, `Shield`, `Keyboard`, `Eye`, `Hand`, `Timer`, `Download`, `Sound`, `Vibration`, `Help`, `Check`).
- **Original Mascot "Cano"**: Original spray-can character with 4 distinct poses (`happy`, `full`, `sleepy`, `celebrating`).
- **Self-Hosted Typography** (`@fontsource`):
  - Display: `Archivo Black` (OFL-1.1)
  - Stencil Tags: `Permanent Marker` (Apache-2.0)
  - Body & UI: `Space Grotesk` (OFL-1.1)
  - A11y Legibility: `OpenDyslexic` toggle support

---

## 🏗️ Folder Architecture

```text
src/
├── app/               # Core planner components (CheckInCard, CanDock, TaskBoard, TheWall, MonthMural, PermissionSlip)
├── components/        # Shared components
│   ├── ui/            # Reusable UI primitives (Button, PillCTA, Card, Sticker, Badge, Tag, Tooltip, Dialog, Tabs, Accordion, Slider, Toggle, Stepper, ProgressBar, Marquee, Toast, SectionHeading, Container)
│   ├── icons/         # 16 chunky inline SVG icons suite
│   ├── CanoMascot.tsx # Original vector mascot in 4 poses
│   ├── Footer.tsx     # Acid-yellow AJRathod credit footer
│   └── JudgeTour.tsx  # 60s 8-step interactive tour
├── data/              # Static data, modes, demo tasks, and FAQ items
├── features/          # Feature scenes
│   └── landing/       # L0Preloader, L1Hero, L2HowItWorks, L3TryIt, L4Modes, L5Anatomy, L6Proof, L7AccessPrivacy, L8FAQ, L9FinalCTA, LandingNav
├── hooks/             # Reusable custom React hooks
├── lib/               # Mathematical utilities, sound synthesis, contrast engine, and Zustand store
├── pages/             # LandingPage, AppPage, SystemPage, NotFoundPage
├── pwa/               # Service worker registration and offline caching
├── styles/            # tokens.css (self-hosted fonts, design tokens)
├── tests/             # Vitest & vitest-axe test suites (capacity, contrast, store, smoke, componentsA11y)
└── three/             # Procedural Three.js spray can lathe mesh and textures
```

---

## ♿ Accessibility & Zero-Tracker Privacy

- **Algorithmic WCAG 2.1 Contrast**: Every contrast ratio is computed mathematically in code via W3C relative luminance equations (`contrast.ts`). Ratios are documented live on `/#/system`.
- **Zero Third-Party Network Requests**: Fonts are 100% self-hosted locally via `@fontsource`. No Google CDN, no analytics, no cookies, no tracking pixels.
- **100% Local Storage**: All tasks, settings, and tags reside exclusively in browser `localStorage`.
- **Keyboard Navigation**: 100% operable via keyboard (Skip link, Tab, Enter, Space, Esc, Arrows) with visible 3px focus rings.
- **Sensory & Motion Control**:
  - `prefers-reduced-motion` strictly honored: static SVG fallbacks for drips, auto-rotation paused on 3D can, preloader automatically bypassed.
  - Web Audio synthesis is strictly **OFF by default** (zero surprise audio).
- **Responsible Graffiti Disclaimer**: Notice displayed on all routes and exports:  
  *"Digital wall. Please paint legal walls only."*

---

## 🧪 Verification & Real Test Results

Automated checks executed and passing:
- **TypeScript**: `npx tsc --noEmit` ➔ **PASS** (0 errors)
- **Unit & Logic Tests**: `npm run test` ➔ **PASS** (all test suites passing)
- **A11y Tests**: vitest-axe on Button, Dialog, Tabs, Accordion, Slider ➔ **PASS** (0 violations)
- **Lint**: `npm run lint` ➔ **PASS**
- **Production Build**: `npm run build` ➔ **PASS** (clean Vite output to `dist/`)

---

## 📦 Developer Scripts

```bash
# Start local development server
npm run dev

# Run automated vitest test suites
npm run test

# Run ESLint validation
npm run lint

# Compile and produce static production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🤖 AI-Assisted Development Disclosure

CAN-DO was architected, designed, and engineered by **AJRathod** in pair-programming collaboration with Google DeepMind's Antigravity AI coding assistant. AI was utilized for test generation, code structuring, procedural Three.js spline derivation, and mathematical contrast verification. All architectural decisions, design aesthetics, product copy, and code reviews were directed and finalized by AJRathod.

---

## 📄 License & Attribution

- **Code**: MIT License (see [LICENSES.md](LICENSES.md))
- **Assets**: 100% original / CC0 (see [ASSETS.md](ASSETS.md))
- **Author**: AJRathod ([ajaybr2021@gmail.com](mailto:ajaybr2021@gmail.com))
