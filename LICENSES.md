# THIRD-PARTY OPEN-SOURCE LICENSES

CAN-DO is committed to total licensing transparency. Every third-party library utilized is strictly permissive (MIT, Apache-2.0, BSD-3-Clause, ISC, or OFL).

---

## 1. Core Framework & Runtime Dependencies

| Library Name | Version | License | Source / Repository | Purpose in CAN-DO |
|---|---|---|---|---|
| **React** | `^18.3.1` | MIT | facebook/react | Component rendering and reactive lifecycle |
| **React-DOM** | `^18.3.1` | MIT | facebook/react | DOM reconciliation |
| **Three.js** | `^0.174.0` | MIT | mrdoob/three.js | Procedural 3D WebGL rendering engine |
| **@react-three/fiber** | `^8.18.0` | MIT | pmndrs/react-three-fiber | Declarative Three.js scene graph in React |
| **@react-three/drei** | `^9.122.0` | MIT | pmndrs/drei | Three.js orbit controls and contact shadows |
| **Zustand** | `^5.0.3` | MIT | pmndrs/zustand | Lightweight state store with guarded storage |
| **Canvas-Confetti** | `^1.9.4` | ISC | catdad/canvas-confetti | Milestone celebration particle effects |
| **Clsx** | `^2.1.1` | MIT | lukeed/clsx | Conditional classname concatenation |

---

## 2. Self-Hosted Fonts (@fontsource)

Fonts are self-hosted within the static bundle to ensure zero third-party runtime requests and 100% offline-first privacy.

| Package | Font | License |
|---|---|---|
| `@fontsource/titan-one` | Titan One | SIL Open Font License (OFL-1.1) |
| `@fontsource/archivo-black` | Archivo Black | SIL Open Font License (OFL-1.1) |
| `@fontsource/space-grotesk` | Space Grotesk | SIL Open Font License (OFL-1.1) |
| `@fontsource/permanent-marker` | Permanent Marker | Apache License 2.0 |

---

## 3. Test & Verification Tooling

| Tool Name | License | Purpose |
|---|---|---|
| **Vitest** | MIT | Fast unit and integration test runner |
| **@testing-library/react** | MIT | User-centric DOM testing utilities |
| **vitest-axe** / **axe-core** | MIT / MPL-2.0 | Automated WCAG 2.1 AA accessibility auditing in jsdom |
| **jsdom** | MIT | Headless browser DOM environment |
| **ESLint** | MIT | Static code quality and rule enforcement |
| **TypeScript** | Apache-2.0 | Static type checker (`tsc --noEmit`) |
| **Vite** | MIT | Zero-config static bundler and dev server |
