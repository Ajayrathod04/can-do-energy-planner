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

### The Solution: "The Page is the Product — Feed Cano"
**CAN-DO** models daily energy as paint inside an animated 3D spray can character named **Cano**:
1. **5-Second Stranger Playability**: A giant interactive 3D character breaks out of 24vw display typography above the fold. No signup, no onboarding barriers.
2. **Procedural 3D Character "Cano"**: Procedural Three.js lathe body under 10k triangles with pointer-tracking eyes, blinking eyelids, expressive mouth, capsule limbs, translucent belly paint level tube, and 6 mode skins (glasses, headband, beret, sunhat, headphones, blanket).
3. **Biological Check-In**: Sleep hours, energy, and cognitive friction calibrate today's finite volume in **paint** (4 to 16 units) using a transparent formula. (1 paint = about 30 minutes of brain energy).
4. **Interactive Task Feeding**: Feed Cano by dragging tokens, pressing "Feed Cano", or keyboard focus. Counters and fluid levels update with damped-spring physics.
5. **Cap-Lock Guard & Overload**: At 100% capacity, the cap locks shut with a *"Full! The rest waits for tomorrow"* notice and haptic pulse. An *"Open anyway"* override ensures user agency.
6. **Spray Focus & The Wall**: Start a focus run on any packed task; Cano sprays permanent graffiti tags onto *Your Wall*. Rest days also generate tags (*"Resting counts as capacity renewal"*).
7. **Permission to Rest**: 1-click certificate generator producing a downloadable stencil certificate *"PERMISSION TO REST"*.
8. **Sensory Deck**: Interactive toggles for Reduced Motion, Dyslexia Font, High Contrast, Font Scaling, and Web Audio FX (strictly OFF by default).

### Accessibility (A11y)
- **Algorithmic WCAG 2.1 Contrast**: Every color ratio is mathematically calculated in code using the W3C luminance equation (`contrast.ts`). Ratios are documented live on `/#/system`.
- **Keyboard & Screen Reader Ready**: Full keyboard operation, visible 3px focus rings, aria-live status announcements, and touch targets >= 44px.
- **Automated A11y Tests**: Passes 100% of `vitest-axe` automated accessibility checks across all core UI components.

### Privacy & Ethics
- **Zero Backend, Zero Trackers**: No database, no third-party telemetry, no analytics cookies, no runtime network requests.
- **Self-Hosted Fonts**: Fonts are self-hosted via `@fontsource` to eliminate external Google CDN calls.
- **Responsible Artistry**: Notice displayed on all routes: *"Digital wall. Please paint legal walls only."*

---

## 2. AI-Assisted Development Disclosure
CAN-DO was architected, designed, and developed by **AJRathod** in pair programming with Google DeepMind's Antigravity AI assistant. AI capabilities were utilized for test generation, code structuring, procedural Three.js spline derivation, and mathematical contrast verification. All architectural decisions, design aesthetics, product copy, and code reviews were directed and finalized by AJRathod.
