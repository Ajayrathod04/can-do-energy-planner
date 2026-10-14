# ASSETS PROVENANCE & LICENSING (CAN-DO)

All assets used in CAN-DO are 100% original, procedurally created in code, or self-hosted under permissive open-source licenses. Zero copyrighted brands, protected characters, or external trackers are utilized.

---

## 1. Mascot Character: "Cano" (3D Procedural & 2D SVG)
- **3D Procedural Character**: `src/three/cano/*`
  - Under 10k triangles, procedural Three.js lathe body, pointer-tracking eyes, blinking eyelids, expressive mouth, translucent belly paint window, capsule arms, rounded feet, nozzle hat, mode accessories (glasses, headband, beret, sunhat, headphones, blanket).
  - Damped-spring physics animations via useFrame.
- **2D SVG Fallback**: `src/components/CanoMascot.tsx`
  - Hand-crafted original inline SVG character design with poses: `happy`, `full`, `sleepy`, `celebrating`.
- **License**: CC0 / Original Work by AJRathod.

---

## 2. Custom 16-Icon Vector Suite
- **Component**: `src/components/icons/*`
- **Origin**: Hand-coded vector SVG icons with 3px stroke, rounded caps, and colored blob backdrops.
- **Icons**:
  `SunMoonIcon`, `PaintDropIcon`, `SprayCanIcon`, `CalendarIcon`, `PillowRestIcon`, `StarIcon`, `ShieldIcon`, `KeyboardIcon`, `EyeIcon`, `HandIcon`, `TimerIcon`, `DownloadIcon`, `SoundIcon`, `VibrationIcon`, `HelpIcon`, `CheckIcon`.
- **License**: CC0 / Original Work.

---

## 3. Procedural In-Code Assets

| Asset Type | Generator Source | Technique & Description |
|---|---|---|
| **3D Spray Can Geometry** | `src/three/SprayCanGeometry.ts` | Procedural spline rotated via `THREE.LatheGeometry` (concave chime dome, cylinder body, chiseled shoulder, collar, nozzle). Zero external `.glb`/`.obj` 3D files. |
| **Can Labels & Splatters** | `src/three/LabelCanvas.ts` | 100% vector HTML5 2D Canvas drawing mode names, barcodes, gauge ticks, and geometric patterns in real time. |
| **Graffiti Tags on The Wall** | `src/three/GraffitiGenerator.ts` | Seeded procedural canvas graffiti stencil plaques generated dynamically per completed task ID. |
| **Overload Fluid Drips** | `src/components/DripCanvas.tsx` | 2D HTML5 Canvas gravity fluid simulation (stream velocity, blob head, lateral wobble) + static SVG fallback. |
| **Web Audio Synthesizer** | `src/lib/sound.ts` | Procedural Web Audio API sound generator (bandpass filtered white noise hiss, resonant chime, mixing ball bearing clack). Zero recorded audio samples; strictly default OFF. |

---

## 4. Self-Hosted Typography (@fontsource)

Zero runtime third-party network calls. All font files are bundled locally into `dist/assets/`:
- **Titan One**: SIL Open Font License 1.1 (`@fontsource/titan-one`)
- **Archivo Black**: SIL Open Font License 1.1 (`@fontsource/archivo-black`)
- **Permanent Marker**: Apache License 2.0 (`@fontsource/permanent-marker`)
- **Space Grotesk**: SIL Open Font License 1.1 (`@fontsource/space-grotesk`)
- **OpenDyslexic**: OpenDyslexic Font License (A11y mode)
