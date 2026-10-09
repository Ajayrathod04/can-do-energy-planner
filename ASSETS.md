# ASSETS PROVENANCE & LICENSING (CAN-DO)

All graphical assets used in CAN-DO are 100% original, procedurally created in code, or generated without any copyrighted brands, characters, or protected trademarks.

---

## 1. Generated Graphic Assets (`public/img/`)

| Asset Path | Origin & Engine | Original Generation Prompt | License |
|---|---|---|---|
| `public/img/concrete-texture.png` | AI Image Synthesis | *"Dark raw architectural concrete wall surface texture, rough grunge surface, subtle pitted details, matte charcoal and deep graphite tones, seamless tileable appearance, high contrast, no text, no logo, no people, photorealistic 8k texture"* | CC0 / Original Work |
| `public/img/splatter-overlay.png` | AI Image Synthesis | *"Dynamic neon paint splatter and spray mist droplet overlay on pure black background, graffiti spray paint drips and fine speckled dots, vibrant edge highlights, isolated, no text, no logo"* | CC0 / Original Work |
| `public/img/spray-cap.png` | AI Image Synthesis | *"Macro close-up studio shot of a modern graffiti aerosol spray can nozzle and actuator cap, industrial plastic design with fine spray hole, metallic collar rim, dramatic rim lighting on dark background, no text, no logo"* | CC0 / Original Work |
| `public/img/hero-poster.png` | AI Image Synthesis | *"Dramatic cinematic 3D render of a blank sleek cylindrical spray paint can floating against a dark textured concrete wall, rim lighting in vivid cobalt and safety orange, minimalist brutalist aesthetic, photorealistic, no text, no brand, no logo"* | CC0 / Original Work |

---

## 2. Procedural In-Code Assets

| Asset Type | Generator Source | Technique & Description |
|---|---|---|
| **3D Spray Can Geometry** | `src/three/SprayCanGeometry.ts` | Procedural spline rotated via `THREE.LatheGeometry` (concave aerosol chime dome, cylinder body, chiseled shoulder, collar, nozzle). Zero external `.glb`/`.obj` 3D files. |
| **Can Labels & Splatters** | `src/three/LabelCanvas.ts` | 100% vector HTML5 2D Canvas drawing mode names, barcodes, gauge calibration ticks, and deterministic splatter paths in real time. |
| **Graffiti Tags on The Wall** | `src/three/GraffitiGenerator.ts` | Seeded procedural canvas graffiti stencil pieces generated dynamically per completed task ID. |
| **Web Audio Synthesizer** | `src/lib/sound.ts` | Procedural Web Audio API sound generator (biquad filtered white noise hiss, resonant chime, click). Zero recorded audio samples; default OFF. |

---

## 3. Typography (Google Fonts OFL)

- **Archivo Black**: SIL Open Font License 1.1 (Display & Title kinetic typography)
- **Permanent Marker**: Apache License 2.0 (Graffiti tags & spray can labels)
- **Space Grotesk**: SIL Open Font License 1.1 (Body, UI controls & data tables)
- **OpenDyslexic**: OpenDyslexic Font License (A11y accessibility mode)
