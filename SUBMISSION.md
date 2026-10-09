# Devpost Hackathon Submission: CAN-DO 🛢️✨

> **Tagline**: *"Your day has a capacity. Spend it on purpose."*  
> **Hackathon**: Hyperbloom October: UI/UX & Web Design  
> **Author**: AJRathod ([ajaybr2021@gmail.com](mailto:ajaybr2021@gmail.com))  
> **GitHub**: [https://github.com/Ajayrathod04/can-do-energy-planner](https://github.com/Ajayrathod04/can-do-energy-planner)  
> **Target Host**: Deployxa (Static Deployment)

---

## 1. Project Overview & Devpost Description

### The Problem
Traditional to-do applications suffer from a catastrophic conceptual flaw: **the illusion of infinite capacity**. They invite users to pack 27 tasks onto a Tuesday calendar without considering sleep debt, cognitive friction, or baseline biological stamina. The inevitable human outcome is decision paralysis, late-night burnout, and moral guilt when items roll over unfinished.

### The Users
University students, self-directed engineers, neurodivergent knowledge workers, and anyone recovering from burnout who needs a visual, physical boundary around what a human being can realistically achieve in a day.

### The Solution: A Pressurized 3D Spray Can as Energy Budget
**CAN-DO** replaces infinite checklists with a physical, pressurized aerosol spray can of paint:
1. **The Rattle Ritual**: The user shakes the spray can (drag velocity spring model on desktop, `DeviceMotion` accelerometer on mobile, or keyboard Enter/Space) to agitate the mixing ball.
2. **Biological Check-In**: Sleep hours, energy, and cognitive friction calibrate today's finite volume in **paint units** (clamped between 4 and 16 units) using a transparent mathematical formula.
3. **The 3D Can is the Interface**: Built with procedural `THREE.LatheGeometry` and dynamic vector `CanvasTexture` labels. As tasks are packed, the can's internal level meter animates.
4. **Overload Fluid Drips**: Overfilling triggers a 2D canvas gravity drip simulation on the wall behind the can—1 drip per excess unit.
5. **Cap-Lock Guard**: At 100% capacity, the cap snaps shut with a brutalist *"CLOSED FOR TODAY"* sticker and haptic vibration. A kind *"Open anyway"* override ensures user agency.
6. **Guilt-Free Deferral**: Instead of red alarm sirens, CAN-DO provides calm deferral guidance (*"Move to tomorrow"*), prioritizing items by cost and due date.
7. **The Wall & Month Mural**: Completed work converts into permanent graffiti plaques on a personal Wall. Rest days also generate tags (*"Resting counts as capacity renewal"*). Export the gallery or a full 1080x1350 monthly poster as PNG.

### What Makes It Different
- **The Can is Not Decoration**: The procedural 3D model is the primary data model and visual constraint.
- **Physics Doesn't Negotiate**: Physical metaphors (drips, rattle, cap-lock) make cognitive boundaries tangible.
- **Zero Guilt Culture**: Deferring work is framed as strategic wisdom, not personal inadequacy.

### Accessibility (A11y)
- **Algorithmic WCAG 2.1 Contrast**: Every color ratio is mathematically calculated in code using the W3C luminance equation. Cobalt `#2F5BFF` on dark is automatically lifted to `#6B8CFF` for small copy to strictly meet AA ($\ge 4.5:1$).
- **Color-Independent Modes**: Every mode features a unique geometric pattern (stripes, dots, zigzag, waves, checks, solid) and SVG icon so color is never the solitary signal.
- **Motor & Sensory Accommodations**: Full keyboard operation, skip links, 3px high-contrast yellow focus rings, `prefers-reduced-motion` compliance, and synthesized Web Audio that is strictly **OFF by default**.

### Privacy & Ethics
- **Zero Backend, Zero Trackers**: No database, no third-party telemetry, no analytics cookies, no runtime network requests.
- **No Microphone Usage**: Pure client-side operation.
- **Responsible Artistry**: Disclaimer: *"Digital wall. Please paint legal walls only."*

### How It's Built
- **Vite 6 + React 18 + TypeScript**: Static zero-lag build.
- **Three.js / @react-three/fiber**: Procedural aerosol lathe geometry with dynamic in-memory 2D Canvas labels.
- **Web Audio API**: Synthesized white-noise spray hiss, bandpassed mixing ball rattle, and cap-lock snap.
- **Native Canvas 2D Exporter**: Zero-overhead high-resolution PNG downloads (`canvas.toBlob`) without external dependencies.
- **Zustand**: Guarded `try/catch` client-side `localStorage` synchronization.

### Challenges Overcome
1. **Procedural 3D Geometry Without External Assets**: Hand-calculating the 48-spline lathe profile for authentic aerosol proportions (concave chime, body cylinder, chiseled shoulder, collar, nozzle).
2. **Algorithmic Contrast Verification**: Dynamically proving and lifting WCAG AA contrast across 6 dynamic mode palettes at runtime.
3. **Fluid Drips Simulation**: Tuning 2D canvas gravity physics, blob head widening, and coagulation speeds to look organically pressurized without bogging down mobile frames.

### What's Next
- Multi-layer physical acoustic synthesizer.
- iCal / Google Calendar `.ics` sync.
- Printable laser-cut stencils of completed days.

---

## 2. Best Use of Deployxa

CAN-DO was engineered from the ground up for seamless deployment on **Deployxa**:
- **Zero Refresh 404s**: Configured with Hash-based routing (`/#/`, `/#/app`, `/#/system`, `/#/?tour=1`), ensuring static deep links load reliably on Deployxa edge CDNs without requiring custom server rewrite rules.
- **Optimized Bundle Splitting**: Rollup chunking separates vendor dependencies from 3D WebGL runtime modules, achieving an initial gzipped bundle of just **~34 KB**, satisfying Deployxa's edge caching budgets.
- **Automated Git CI/CD**: Pushes to `main` branch trigger immediate zero-downtime builds (`npm run build` -> `dist/`).
- **PWA & Edge Resilience**: Service worker caching and offline fallbacks allow Deployxa-hosted instances to operate without an active internet connection after first load.

---

## 3. Two-Minute Video Script with Timestamps

- **[0:00 - 0:20] The Problem**: "Traditional to-do apps lie to us. They let us schedule 27 tasks onto a single day, ignoring human stamina and sleep debt. The result is burnout."
- **[0:20 - 0:45] The Insight & The Rattle**: "Meet CAN-DO: your day has a capacity, spend it on purpose. Before allocating, we perform the Rattle Ritual—dragging to agitate the aerosol mixing ball."
- **[0:45 - 1:10] Check-In & 3D Can**: "Sleep, energy, and stress mathematically calculate today’s paint units. The procedural 3D spray can is our physical budget. As we pack student tasks, the dynamic gauge fills."
- **[1:10 - 1:30] Overflow Drips & Cap-Lock**: "When we overfill, physics takes over: 2D paint drips leak on the wall, and the cap snaps shut with a 'CLOSED FOR TODAY' sticker. No guilt alarms—CAN-DO suggests what to postpone."
- **[1:30 - 1:45] The Wall & Month Mural**: "Completed tasks convert into permanent graffiti plaques on The Wall. Rest days count too. We can export our entire month mural as a 1080x1350 PNG poster."
- **[1:45 - 2:00] Design System & A11y**: "Visit /system to see mathematically computed WCAG AA contrast, pattern-coded modes, and our acid-yellow AJRathod credit footer. Try the 60s Judge Tour. Thank you!"

---

## 4. Screenshot Shot List (8 Key Frames)

1. `01-hero-night-3d.png`: Desktop 1440px Hero scene with kinetic type, 3D procedural can, and spray trail.
2. `02-mobile-375px.png`: Clean responsive mobile view of CAN-DO showing touch-accessible controls.
3. `03-rattle-ritual.png`: Interactive mixing ball rattle card with pressure indicator and spring recoil.
4. `04-workbench-balanced.png`: The /app daily workbench with calibrated check-in sliders and can dock.
5. `05-overflow-drips.png`: 2D canvas gravity drip simulation leaking behind the overfilled spray can.
6. `06-cap-lock-sticker.png`: Actuator cap-lock snap with "CLOSED FOR TODAY" sticker and kind override.
7. `07-month-mural-wall.png`: 7-column calendar grid showing daily graffiti tags and rest certificate generator.
8. `08-system-wcag-contrast.png`: /system design tokens showcasing live computed W3C contrast ratios.

---

## 5. AI-Assisted Development Disclosure

CAN-DO was architected, designed, and developed by **AJRathod** pairing with Google DeepMind's Antigravity AI assistant. AI capabilities were utilized for:
- Accelerating TypeScript interface declarations and mathematical formula helpers.
- Generating CC0 photorealistic surface textures (concrete texture and overlay stencils) with zero text or logos.
- Drafting comprehensive unit test suites and accessibility verification checklists.
All code, architectural decisions, and visual aesthetics were directed, reviewed, and finalized by AJRathod.
