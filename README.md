# CAN-DO 🛢️✨

> **"Your day has a capacity. Spend it on purpose."**

An award-winning, portfolio-grade energy budgeting application designed for the **Hyperbloom October: UI/UX & Web Design Hackathon (Devpost)**.

Built by **AJRathod** ([ajrathod.dev@gmail.com](mailto:ajrathod.dev@gmail.com)).  
Live Static Target: **Deployxa** (`build: npm run build`, `output: dist`).

---

## 💡 The Problem & The Insight

Students and knowledge workers drown under **infinite to-do lists**. Traditional productivity applications treat time like an elastic rubber band—inviting users to schedule 27 ambitious items onto a Tuesday while ignoring sleep debt, cognitive friction, and human biological stamina. The inevitable result: executive dysfunction, decision paralysis, and 2 AM guilt spirals.

### The Solution: A Physical Aerosol Energy Budget
**CAN-DO** models your daily cognitive energy not as an endless checklist, but as a **pressurized spray can of paint**:
- **Check-In Calibration**: Sleep, physical vitality, and friction levels mathematically compute today’s safe volume (in **paint units**).
- **The Procedural 3D Spray Can**: The can is the data model. As tasks are packed into your day, the can's live gauge fills and the label texture dynamically updates.
- **Physics Doesn't Negotiate (Guilt-Free Deferral)**: When volume is exceeded, the can visibly overflows. Instead of red failure alarms, CAN-DO offers calming, strategic deferral recommendations (*"Move to tomorrow"*) prioritized by effort cost and due date.
- **The Wall**: Every completed task becomes a permanent graffiti stencil piece on your wall. Rest and recovery sessions also generate tags—because resting counts as capacity renewal.

---

## 🎨 Design System: "Neo-Brutalist Graffiti"

- **Dual Aesthetic Surfaces**:
  - **Night/Concrete**: `#121212` with procedural SVG noise, fine pebble grid, and colored rim lighting matching the active energy mode.
  - **Day/Paper**: Warm newsprint paper (`#F4EFE6`), crisp `#0A0A0A` ink boundaries, `3px solid #0A0A0A` borders, and hard `6px 6px 0px #0A0A0A` offset brutalist shadows.
- **Six Biological Modes (`src/data/modes.ts`)**:
  1. `FOCUS`: Cobalt `#2F5BFF` (x1.0 Multiplier) — Deep work & deliberate progress. Auto-lifted to `#6B8CFF` for small copy to strictly meet WCAG AA $\ge 4.5:1$.
  2. `GRIND`: Safety Orange `#FF6B2C` (x1.1 Multiplier) — High stamina deadline sprints.
  3. `CREATE`: Hot Pink `#FF3D8B` (x1.0 Multiplier) — Generative flow & creative exploration.
  4. `CHILL`: Electric Lime `#B6FF3B` (x0.9 Multiplier) — Low-pressure sustainable pacing.
  5. `SOCIAL`: Tag Yellow `#FFD93D` (x0.8 Multiplier) — Meeting-heavy and collaborative days.
  6. `RECOVER`: Graffiti Violet `#8B5CF6` (x0.6 Multiplier) — Restoration & boundary protection.
- **Typography** (Google Fonts OFL):
  - Display: `Archivo Black`
  - Stencil Tags: `Permanent Marker`
  - Body & UI: `Space Grotesk`
  - A11y Legibility: `OpenDyslexic` toggle support

---

## ♿ Accessibility & Inclusive Design (Non-Negotiable)

- **Algorithmic WCAG 2.1 Contrast**: Every contrast ratio is computed mathematically in code via W3C relative luminance equations. Exact ratios and PASS/FAIL badges are documented live on `/#/system`.
- **Keyboard Navigation**: 100% operable via keyboard (Tab/Shift+Tab, Enter, Space, Arrows). Includes accessible "Add to Can" buttons as an alternative to drag-and-drop.
- **Visible Focus Indicator**: Unmistakable 3px solid `#FFD93D` focus rings with 3px offset across all interactive components.
- **Screen Reader Announcements**: Dynamic capacity recalculations and overflow alerts broadcast politely via `aria-live="polite"`.
- **Sensory & Motion Control**:
  - `prefers-reduced-motion` strictly honored (disables canvas spray particles and 3D bobbing).
  - Procedural Web Audio FX is **OFF by default** (zero surprise noise).
- **Target Sizes**: $\ge 44\text{px} \times 44\text{px}$ touch targets across all mobile viewports.

---

## ⚙️ Tech Stack & Architecture

- **Framework**: Vite 6 + React 18 + TypeScript.
- **3D Graphics Engine**: Three.js + `@react-three/fiber` + `@react-three/drei`. Zero external `.glb`/`.obj` downloads—the can silhouette is procedurally created using `THREE.LatheGeometry` and rendered with custom dynamic HTML5 Canvas textures.
- **State Management**: Zustand with guarded `try/catch` `localStorage` synchronization.
- **Routing**: `HashRouter` (`/#/`, `/#/app`, `/#/system`, `/#/?tour=1`) guaranteeing 100% static hosting compatibility on Deployxa with 0 refresh 404s.
- **Asset Exports**: Zero-overhead native HTML5 Canvas 2D image synthesis (`canvas.toBlob`) for instant high-res PNG downloads of The Wall (no `html2canvas` dependency).
- **Audio Synthesis**: Procedural Web Audio API sound generator (biquad-filtered noise burst and oscillator chime).

---

## 📦 Asset Provenance

All assets are 100% original, procedurally generated in code, or created under CC0 terms with zero copyrighted brands or characters. Full prompts and origins are documented in [ASSETS.md](ASSETS.md).

---

## 🚀 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/Ajayrathod04/can-do-energy-planner.git
cd can-do-energy-planner

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for static production (Deployxa output: dist)
npm run build

# 5. Preview the production build locally
npm run preview
```

---

## 👤 Author & Credits

Designed, engineered, and crafted with deliberate capacity by:
- **AJRathod**
- **Email**: [ajrathod.dev@gmail.com](mailto:ajrathod.dev@gmail.com)
- **Repository**: [Ajayrathod04/can-do-energy-planner](https://github.com/Ajayrathod04/can-do-energy-planner)
- **Hackathon**: Hyperbloom October '24 Web Design
