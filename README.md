# CAN-DO 🛢️✨

> **"Your day has a capacity. Spend it on purpose."**

An award-winning, portfolio-grade energy budgeting application designed for the **Hyperbloom October: UI/UX & Web Design Hackathon (Devpost)**.

Built by **AJRathod** ([ajaybr2021@gmail.com](mailto:ajaybr2021@gmail.com)).  
Live Static Target: **Deployxa** (`build: npm run build`, `output: dist`).

---

## 💡 The Problem & The Insight

Students and knowledge workers drown under **infinite to-do lists**. Traditional productivity applications treat human stamina like an elastic band—inviting users to schedule 27 ambitious items onto a Tuesday while ignoring sleep debt, cognitive friction, and human biological stamina. The inevitable outcome: executive dysfunction, decision paralysis, and 2 AM guilt spirals.

### The Solution: A Physical Aerosol Energy Budget
**CAN-DO** models daily cognitive energy as a **pressurized spray can of paint**:
- **The Rattle Ritual**: Before allocating, users shake the can (pointer-drag velocity spring model on desktop, `DeviceMotion` accelerometer on mobile, or keyboard Enter/Space) to agitate the synthesized mixing ball.
- **Check-In Calibration**: Sleep, physical energy, and friction levels mathematically compute today’s safe volume (in **paint units**).
- **The Procedural 3D Can is the Interface**: Built with procedural `THREE.LatheGeometry` and dynamic vector `CanvasTexture` labels. As tasks are packed, the can's live gauge fills.
- **Overload Fluid Drips**: Overfilling triggers a 2D canvas gravity drip simulation on the wall behind the can—1 stream per excess unit.
- **Cap-Lock Guard**: At 100% capacity, the cap snaps shut with a brutalist *"CLOSED FOR TODAY"* sticker and haptic pulse. A kind *"Open anyway"* override ensures user agency.
- **Guilt-Free Deferral**: Calm recommendations (*"Move to tomorrow"*) prioritize tasks by cost and due date with zero guilt language.
- **The Wall & Month Mural**: Completed work converts into permanent graffiti plaques on a personal Wall. Rest days also generate tags (*"Resting counts as capacity renewal"*). Export the gallery or a full 1080x1350 monthly poster as PNG.
- **Permission to Rest**: 1-click certificate generator producing a downloadable stencil certificate *"PERMISSION TO REST"*.

---

## 🎨 Design System: "Neo-Brutalist Graffiti"

- **Dual Aesthetic Surfaces**:
  - **Night/Concrete**: `#121212` with procedural SVG noise, fine pebble grid, and colored rim lighting matching the active energy mode.
  - **Day/Paper**: Warm newsprint paper (`#F4EFE6`), crisp `#0A0A0A` ink boundaries, `3px solid #0A0A0A` borders, and hard `6px 6px 0px #0A0A0A` offset brutalist shadows.
- **Time-Aware Circadian Lighting**:
  - Derived from local time or manual toggle (`Auto / Day / Night`): Dawn amber, Day soft white, Dusk magenta-violet, and Night cool blue with an incandescent streetlight cone.
- **Six Pattern-Coded Modes (`src/data/modes.ts`)**:
  1. `FOCUS`: Cobalt `#2F5BFF` (x1.0 Multiplier) — Diagonal Stripes pattern + Crosshair icon.
  2. `GRIND`: Safety Orange `#FF6B2C` (x1.1 Multiplier) — Halftone Dots pattern + Flame icon.
  3. `CREATE`: Hot Pink `#FF3D8B` (x1.0 Multiplier) — Zigzag Chevrons pattern + Sparkles icon.
  4. `CHILL`: Electric Lime `#B6FF3B` (x0.9 Multiplier) — Sinusoidal Waves pattern + Leaf icon.
  5. `SOCIAL`: Tag Yellow `#FFD93D` (x0.8 Multiplier) — Checkerboard pattern + Users icon.
  6. `RECOVER`: Graffiti Violet `#8B5CF6` (x0.6 Multiplier) — Solid Border pattern + Heart icon.
- **Typography** (Google Fonts OFL):
  - Display: `Archivo Black`
  - Stencil Tags: `Permanent Marker`
  - Body & UI: `Space Grotesk`
  - A11y Legibility: `OpenDyslexic` toggle support

---

## ♿ Accessibility & Inclusive Design (Non-Negotiable)

- **Algorithmic WCAG 2.1 Contrast**: Every contrast ratio is computed mathematically in code via W3C relative luminance equations. Exact ratios and PASS/FAIL badges are documented live on `/#/system`.
- **Color-Independent Modes**: Every mode features a distinct geometric pattern and dedicated SVG icon so color is never the only signal.
- **Keyboard Navigation**: 100% operable via keyboard (Tab/Shift+Tab, Enter, Space, Arrows). Includes accessible "Add to Can" buttons and keyboard "Prime Can" trigger.
- **Visible Focus Indicator**: Unmistakable 3px solid `#FFD93D` focus rings with 3px offset across all interactive components.
- **Screen Reader Announcements**: Dynamic capacity recalculations and drip leak alerts broadcast politely via `aria-live="polite"`.
- **Sensory & Motion Control**:
  - `prefers-reduced-motion` strictly honored (replaces fluid drip simulation with clean static SVG drips, disables canvas spray particles and 3D bobbing).
  - Procedural Web Audio FX is **OFF by default** (zero surprise noise).
- **Target Sizes**: $\ge 44\text{px} \times 44\text{px}$ touch targets across all mobile viewports.

---

## 🔒 Privacy & Ethical Artistry

- **Zero Trackers**: No backend, no cookies, no analytics, no runtime external calls.
- **No Microphone**: Audio is strictly synthesized output; microphone is never accessed.
- **Legal Wall Notice**: *"Digital wall. Please paint legal walls only."* No content encouraging vandalism.

---

## ⚙️ Tech Stack & Architecture

- **Framework**: Vite 6 + React 18 + TypeScript.
- **3D Graphics Engine**: Three.js + `@react-three/fiber` + `@react-three/drei`. Procedural aerosol lathe geometry with dynamic in-memory HTML5 Canvas textures.
- **State Management**: Zustand with guarded `try/catch` `localStorage` synchronization.
- **Routing**: `HashRouter` (`/#/`, `/#/app`, `/#/system`, `/#/?tour=1`) guaranteeing 100% static hosting compatibility on Deployxa with 0 refresh 404s.
- **Native Canvas 2D Exporter**: Zero-overhead image synthesis (`canvas.toBlob`) for instant high-res PNG downloads of The Wall, Month Mural (1080x1350), and Permission Slips without external dependencies.
- **PWA**: Installable web app with Service Worker offline caching.

---

## 📦 Asset Provenance & Licenses

- Detailed library licenses: [LICENSES.md](LICENSES.md)
- Asset prompts and origins: [ASSETS.md](ASSETS.md)
- Devpost submission dossier: [SUBMISSION.md](SUBMISSION.md)

---

## 🚀 Running Locally & Deploying to Deployxa

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

### Deploying to Deployxa
1. Connect the GitHub repository `Ajayrathod04/can-do-energy-planner` in Deployxa.
2. Select framework **Vite / React**.
3. Set build command: `npm run build`.
4. Set publish directory: `dist`.
5. Deployxa automatically serves the static bundle with HTTPS and zero-downtime edge distribution.

---

## 👤 Author & Credits

Designed, engineered, and crafted with deliberate capacity by:
- **AJRathod**
- **Email**: [ajaybr2021@gmail.com](mailto:ajaybr2021@gmail.com)
- **Repository**: [Ajayrathod04/can-do-energy-planner](https://github.com/Ajayrathod04/can-do-energy-planner)
- **Hackathon**: Hyperbloom October '24 Web Design
