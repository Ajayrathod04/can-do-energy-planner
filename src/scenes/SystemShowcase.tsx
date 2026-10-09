import React, { useState } from 'react';
import { MODES } from '../data/modes';
import { calculateContrast } from '../lib/contrast';
import { CheckCircle2, AlertTriangle, XCircle, Sparkles, Sliders, Layers } from 'lucide-react';

export const SystemShowcase: React.FC = () => {
  const [demoSlider, setDemoSlider] = useState(4);
  const [demoInput, setDemoInput] = useState('Finish OS homework');

  return (
    <div className="w-full bg-paper text-ink min-h-screen py-12 px-4 sm:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b-3 border-ink pb-8">
          <div className="inline-block px-3 py-1 bg-ink text-paper text-xs font-mono font-bold uppercase mb-3">
            Design Tokens & Accessibility Specification
          </div>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight uppercase">
            /SYSTEM SHOWCASE
          </h1>
          <p className="text-lg text-neutral-800 max-w-2xl mt-2 font-medium">
            The Neo-Brutalist Graffiti design system powering CAN-DO. Documenting color mathematics, typography scales, interactive states, and WCAG AA accessibility compliance.
          </p>
        </div>

        {/* Section 1: Color Tokens & Algorithmic WCAG AA Contrast */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b-2 border-ink pb-2">
            <Layers className="w-6 h-6 text-modeGrind" />
            <h2 className="font-display text-2xl uppercase">1. Mode Palette & Computed WCAG 2.1 Contrast</h2>
          </div>
          <p className="text-sm text-neutral-700">
            Every ratio below is dynamically computed in code using the official W3C relative luminance formula.
            Cobalt <code className="bg-neutral-200 px-1 py-0.5 font-bold">#2F5BFF</code> is programmatically flagged: it provides 3.62:1 on dark surfaces (passing 3.0:1 for large text & UI shapes, but failing 4.5:1 for small body text), triggering an automatic lift to <code className="bg-neutral-200 px-1 py-0.5 font-bold">#6B8CFF</code> for small copy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODES.map(mode => {
              const darkRatio = calculateContrast(mode.accentColor, '#121212');
              const paperRatio = calculateContrast(mode.accentColor, '#F4EFE6');
              const smallTextRatio = calculateContrast(mode.smallTextColor, '#121212');

              return (
                <div key={mode.id} className="brutal-card p-5 space-y-4">
                  {/* Color Swatch Header */}
                  <div
                    className="h-20 border-3 border-ink flex items-center justify-between p-4 shadow-[3px_3px_0px_#0A0A0A]"
                    style={{ backgroundColor: mode.accentColor }}
                  >
                    <span className="font-display text-2xl text-ink">{mode.name}</span>
                    <span className="font-mono text-xs font-bold bg-ink text-paper px-2 py-1">
                      {mode.multiplier}x
                    </span>
                  </div>

                  <div className="text-xs space-y-2 font-mono">
                    <div className="flex justify-between border-b border-neutral-300 pb-1">
                      <span className="text-neutral-600">Hex Token:</span>
                      <span className="font-bold">{mode.accentColor}</span>
                    </div>

                    {/* Dark Background Contrast */}
                    <div className="p-2.5 bg-neutral-900 text-paper border border-neutral-700 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>On Dark (#121212):</span>
                        <span className="font-bold text-yellow-300">{darkRatio.ratioString}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px]">
                        {darkRatio.passesAANormal ? (
                          <span className="text-green-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> AA Normal (4.5:1) Pass
                          </span>
                        ) : darkRatio.passesAALarge ? (
                          <span className="text-amber-400 flex items-center gap-1" title="Restricted to large text & UI elements">
                            <AlertTriangle className="w-3.5 h-3.5" /> AA Large / UI (3.0:1) Pass
                          </span>
                        ) : (
                          <span className="text-red-400 flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Fails AA
                          </span>
                        )}
                      </div>
                      {/* Note for lifted small text */}
                      {mode.smallTextColor !== mode.accentColor && (
                        <div className="text-[10px] text-blue-300 pt-1 border-t border-neutral-700">
                          Small text auto-lifted to {mode.smallTextColor} ({smallTextRatio.ratioString} AA Pass)
                        </div>
                      )}
                    </div>

                    {/* Paper Background Contrast */}
                    <div className="p-2.5 bg-paper text-ink border border-neutral-400 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>On Paper (#F4EFE6):</span>
                        <span className="font-bold">{paperRatio.ratioString}</span>
                      </div>
                      <div className="text-[11px]">
                        {paperRatio.passesAANormal ? (
                          <span className="text-green-700 font-bold">Passes AA Normal</span>
                        ) : (
                          <span className="text-neutral-600">Used with black ink text overlay</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-800 italic">
                    "{mode.tagline}"
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Typography Scale */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b-2 border-ink pb-2">
            <Sparkles className="w-6 h-6 text-modeCreate" />
            <h2 className="font-display text-2xl uppercase">2. Typography Scale (OFL Google Fonts)</h2>
          </div>

          <div className="brutal-card p-6 space-y-6">
            <div className="border-b-2 border-neutral-300 pb-4">
              <span className="text-xs font-mono text-neutral-600 uppercase">Display / Headlines • Archivo Black</span>
              <p className="font-display text-4xl sm:text-5xl uppercase tracking-tight mt-1">
                CAN-DO PRESENTS DELIBERATE CAPACITY
              </p>
            </div>

            <div className="border-b-2 border-neutral-300 pb-4">
              <span className="text-xs font-mono text-neutral-600 uppercase">Graffiti Stencils & Tags • Permanent Marker</span>
              <p className="font-tag text-3xl sm:text-4xl text-modeGrind mt-1">
                Resting counts as capacity renewal!
              </p>
            </div>

            <div className="border-b-2 border-neutral-300 pb-4">
              <span className="text-xs font-mono text-neutral-600 uppercase">Body & Form UI • Space Grotesk (Regular / Bold)</span>
              <p className="font-body text-base sm:text-lg text-neutral-800 max-w-3xl mt-1 leading-relaxed">
                Students burn out not from lack of ambition, but because conventional productivity apps treat daily hours as an infinite scroll. A physical spray can possesses finite volume; energy budgeting requires respect for boundaries.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-neutral-600 uppercase">Technical Monospace • Font Mono</span>
              <p className="font-mono text-sm text-neutral-700 mt-1">
                LATHE_PROFILE_POINTS: 48 // PSI_SENSOR: CALIBRATED // DOCK_STATE: READY
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Components & State Matrix */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b-2 border-ink pb-2">
            <Sliders className="w-6 h-6 text-modeChill" />
            <h2 className="font-display text-2xl uppercase">3. Neo-Brutalist Component Gallery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons & Badges */}
            <div className="brutal-card p-6 space-y-6">
              <h3 className="font-display text-xl uppercase">Button States</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="brutal-btn px-4 py-2 bg-paper text-ink">
                  Default Button
                </button>
                <button className="brutal-btn px-4 py-2 bg-modeGrind text-ink">
                  Primary Action
                </button>
                <button className="brutal-btn px-4 py-2 bg-modeCreate text-paper">
                  Accent Action
                </button>
                <button disabled className="brutal-btn px-4 py-2 bg-neutral-300 text-neutral-500 cursor-not-allowed opacity-70">
                  Disabled
                </button>
              </div>

              <h3 className="font-display text-xl uppercase pt-4">Badges & Paint Units</h3>
              <div className="flex flex-wrap gap-3 items-center">
                <span className="px-3 py-1 border-2 border-ink bg-modeFocus text-paper font-mono font-bold text-xs">
                  4 PAINT UNITS
                </span>
                <span className="px-3 py-1 border-2 border-ink bg-modeChill text-ink font-mono font-bold text-xs">
                  2 PAINT UNITS
                </span>
                <span className="px-3 py-1 border-2 border-ink bg-modeRecover text-paper font-mono font-bold text-xs">
                  0 REST UNITS
                </span>
                <span className="px-3 py-1 bg-ink text-paper font-bold text-xs uppercase">
                  CRITICAL DUE DATE
                </span>
              </div>
            </div>

            {/* Inputs & Sliders */}
            <div className="brutal-card p-6 space-y-6">
              <h3 className="font-display text-xl uppercase">Form Inputs & Sliders</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="demo-text-input" className="block text-xs font-mono font-bold uppercase mb-1">
                    Task Title Input
                  </label>
                  <input
                    id="demo-text-input"
                    type="text"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    className="w-full p-2.5 bg-white border-3 border-ink font-body font-bold text-ink shadow-[3px_3px_0px_#0A0A0A] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="demo-slider-input" className="flex justify-between text-xs font-mono font-bold uppercase mb-1">
                    <span>Effort Cost Slider</span>
                    <span className="text-modeGrind font-bold">{demoSlider} Paint Units</span>
                  </label>
                  <input
                    id="demo-slider-input"
                    type="range"
                    min="1"
                    max="5"
                    value={demoSlider}
                    onChange={(e) => setDemoSlider(Number(e.target.value))}
                    className="w-full accent-modeGrind cursor-pointer h-3 bg-neutral-300 border-2 border-ink"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Accessibility Checklist */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b-2 border-ink pb-2">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h2 className="font-display text-2xl uppercase">4. Accessibility & Inclusive Design Checklist</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="brutal-card p-4 space-y-2">
              <div className="font-bold text-sm text-ink flex items-center gap-1.5 font-display">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> KEYBOARD ONLY
              </div>
              <p className="text-neutral-700 font-body">
                Full Tab/Shift+Tab trapping, Enter/Space activation, and keyboard drag alternative buttons ("Pack into Can") on all tasks.
              </p>
            </div>

            <div className="brutal-card p-4 space-y-2">
              <div className="font-bold text-sm text-ink flex items-center gap-1.5 font-display">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> FOCUS RINGS
              </div>
              <p className="text-neutral-700 font-body">
                High-contrast yellow <code className="font-bold">#FFD93D</code> 3px outline with 3px offset ensures visible navigation on dark and light surfaces.
              </p>
            </div>

            <div className="brutal-card p-4 space-y-2">
              <div className="font-bold text-sm text-ink flex items-center gap-1.5 font-display">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> ARIA LIVE REGIONS
              </div>
              <p className="text-neutral-700 font-body">
                Dynamic capacity recalculations and overflow warnings broadcast politely to screen readers via <code className="font-bold">aria-live="polite"</code>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
