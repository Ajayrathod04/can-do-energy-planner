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
1. **5-Second Stranger Clarity**: A bold, plain-language hero ("Your day is a spray can. When it's full, stop.") communicates purpose in under 5 seconds.
2. **Instant Micro-Demo**: First-scroll interactive test bench allows any visitor to calibrate sleep/mood, tap 6 task stickers, and experience the can filling and overflowing with Cano's guidance without signup.
3. **Biological Check-In**: Sleep hours, energy, and cognitive friction calibrate today's finite volume in **paint** (4 to 16 units) using a transparent formula. (1 paint = about 30 minutes of brain energy).
4. **The 3D Can is the Interface**: Built with procedural `THREE.LatheGeometry` and dynamic vector `CanvasTexture` labels on a bright studio stage. As tasks are loaded, the can fills.
5. **Overload Fluid Drips**: Overfilling triggers a 2D canvas gravity drip simulation on the wall behind the can—1 drip per excess unit.
6. **Cap-Lock Guard**: At 100% capacity, the cap locks automatically with a *"CAN IS FULL: CLOSED FOR TODAY"* banner and haptic vibration. A kind *"Open anyway"* override ensures user agency.
7. **Guilt-Free Deferral**: The *"Too much for today?"* advisor recommends strategic deferrals by cost and due date with zero guilt language.
8. **Your Wall & Month Mural**: Completed work converts into permanent graffiti plaques on *Your Wall*. Rest days also generate tags (*"Resting counts as capacity renewal"*). Export the wall or a full 1080x1350 monthly poster as PNG.
9. **Original Mascot "Cano"**: Friendly spray-can mascot in 4 poses (`happy`, `full`, `sleepy`, `celebrating`).
10. **Custom 16-Icon Vector Suite**: 16 chunky inline SVG icons with 3px stroke and colored blob fills.

### Accessibility (A11y)
- **Algorithmic WCAG 2.1 Contrast**: Every color ratio is mathematically calculated in code using the W3C luminance equation (`contrast.ts`). Ratios are documented live on `/#/system`.
- **Color-Independent Modes**: Every mode features a unique geometric pattern (stripes, dots, zigzag, waves, checks, solid) and SVG icon so color is never the solitary signal.
- **Motor & Sensory Accommodations**: Full keyboard operation, skip links, 3px high-contrast focus rings, `prefers-reduced-motion` compliance, and synthesized Web Audio that is strictly **OFF by default**.
- **Automated A11y Tests**: Passes 100% of `vitest-axe` automated accessibility checks across all core UI components.

### Privacy & Ethics
- **Zero Backend, Zero Trackers**: No database, no third-party telemetry, no analytics cookies, no runtime network requests.
- **Self-Hosted Fonts**: Fonts are self-hosted via `@fontsource` to eliminate external Google CDN calls.
- **Responsible Artistry**: Notice displayed on all routes: *"Digital wall. Please paint legal walls only."*

### How It's Built
- **Vite 6 + React 18 + TypeScript**: Static zero-lag build.
- **Three.js / @react-three/fiber**: Procedural aerosol lathe geometry with dynamic in-memory 2D Canvas labels.
- **Web Audio API**: Synthesized white-noise spray hiss, bandpassed mixing ball rattle, and cap-lock snap.
- **Native Canvas 2D Exporter**: Zero-overhead high-resolution PNG downloads (`canvas.toBlob`) without external dependencies.
- **Zustand**: Guarded `try/catch` client-side `localStorage` synchronization.

---

## 2. Video Script (2-Minute Walkthrough)
- **[0:00 - 0:20] The Problem**: "Open your to-do app. How many tasks are on today? 15? 25? Normal apps never say stop. CAN-DO is different: your day is a spray can."
- **[0:20 - 0:45] Check-In & Capacity**: "Tell us how you slept and how you feel. We turn it into a finite number of paint units. Tired means less paint; rested means more."
- **[0:45 - 1:15] Loading & Overload Physics**: "Each task costs paint. When you exceed capacity, real drips leak down the wall and the cap locks with 'CAN IS FULL: CLOSED FOR TODAY'. No guilt."
- **[1:15 - 1:45] The Wall & Permission to Rest**: "Finish a task, and it becomes a graffiti tag on Your Wall. Rest days count too. Export a 1080x1350 monthly mural poster or print a Permission to Rest certificate."
- **[1:45 - 2:00] Design System & Privacy**: "Visit /system for computed WCAG AA contrast tables, self-hosted fonts, zero trackers, and our acid-yellow AJRathod credit footer. Try the 60s Judge Tour. Thank you!"

---

## 3. AI-Assisted Development Disclosure
CAN-DO was architected, designed, and developed by **AJRathod** in pair programming with Google DeepMind's Antigravity AI assistant. AI capabilities were utilized for test generation, code structuring, procedural Three.js spline derivation, and mathematical contrast verification. All architectural decisions, design aesthetics, product copy, and code reviews were directed and finalized by AJRathod.
