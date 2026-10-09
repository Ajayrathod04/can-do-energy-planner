import React, { useState } from 'react';
import { HeroScene } from './HeroScene';
import { MODES } from '../data/modes';
import { useAppStore, selectActiveMode } from '../lib/store';
import { useRouter } from '../lib/router';
import { AlertOctagon, CheckCircle2, Sliders, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { sound } from '../lib/sound';

export const LandingPage: React.FC = () => {
  const { navigate } = useRouter();
  const activeMode = useAppStore(selectActiveMode);
  const setActiveMode = useAppStore(s => s.setActiveMode);
  const soundEnabled = useAppStore(s => s.soundEnabled);
  const toggleSound = useAppStore(s => s.toggleSound);
  const highContrast = useAppStore(s => s.highContrast);
  const reducedMotion = useAppStore(s => s.reducedMotion);
  const dyslexiaFont = useAppStore(s => s.dyslexiaFont);
  const setA11ySetting = useAppStore(s => s.setA11ySetting);

  // S6 Comparison slider state (0 to 100)
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="w-full flex flex-col font-body">
      {/* S1: Hero Scene (Night) */}
      <HeroScene />

      {/* S2: The Problem (Infinite List vs Finite Energy) */}
      <section className="py-20 px-4 sm:px-8 bg-paper text-ink border-b-3 border-ink">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-ink text-paper text-xs font-mono font-bold uppercase">
              The Cognitive Deficit
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight">
              YOUR DAY IS NOT INFINITE.
            </h2>
            <p className="text-lg text-neutral-800 leading-relaxed font-medium">
              Standard to-do apps invite you to pile 27 items onto a single Tuesday. They ignore sleep debt, cognitive friction, and biological capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Chaotic Infinite List */}
            <div className="brutal-card p-6 bg-red-50 border-3 border-ink space-y-4">
              <div className="flex items-center justify-between border-b-2 border-ink pb-2">
                <span className="font-display text-lg uppercase text-red-700 flex items-center gap-1.5">
                  <AlertOctagon className="w-5 h-5" /> The Infinite To-Do List
                </span>
                <span className="font-mono text-xs font-bold bg-red-200 px-2 py-0.5 border border-ink">
                  27 Items // Burnout Imminent
                </span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-neutral-700">
                <li className="line-through opacity-70">1. Reply to 43 unread Slack threads</li>
                <li className="line-through opacity-70">2. Refactor entire backend schema</li>
                <li className="opacity-90 font-bold text-red-900">3. Finish OS Kernel allocator (Due in 3 hours)</li>
                <li className="opacity-70">4. Review Discrete Math proofs</li>
                <li className="opacity-70">5. Attend 4 consecutive zoom meetings</li>
                <li className="opacity-70">6. Meal prep for the rest of week</li>
                <li className="opacity-70">... 21 more unprioritized tasks crushing your evening</li>
              </ul>
              <div className="p-3 bg-red-100 border border-red-500 text-xs text-red-900 font-bold">
                Result: Executive dysfunction, decision paralysis, and 2 AM guilt spirals.
              </div>
            </div>

            {/* Deliberate CAN-DO Can */}
            <div className="brutal-card p-6 bg-green-50 border-3 border-ink space-y-4">
              <div className="flex items-center justify-between border-b-2 border-ink pb-2">
                <span className="font-display text-lg uppercase text-green-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-5 h-5" /> The CAN-DO Finite Budget
                </span>
                <span className="font-mono text-xs font-bold bg-green-200 px-2 py-0.5 border border-ink">
                  10 Paint Units // High Impact
                </span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-neutral-800">
                <li className="font-bold flex items-center justify-between bg-white p-2 border border-ink">
                  <span>Kernel Memory Allocator</span>
                  <span className="bg-modeGrind text-ink px-1.5 py-0.5 font-bold">4 Units</span>
                </li>
                <li className="font-bold flex items-center justify-between bg-white p-2 border border-ink">
                  <span>Review Discrete Math</span>
                  <span className="bg-modeFocus text-paper px-1.5 py-0.5 font-bold">3 Units</span>
                </li>
                <li className="font-bold flex items-center justify-between bg-white p-2 border border-ink">
                  <span>Cook Nourishing Meal</span>
                  <span className="bg-modeChill text-ink px-1.5 py-0.5 font-bold">2 Units</span>
                </li>
                <li className="font-bold flex items-center justify-between bg-white p-2 border border-ink">
                  <span>Stretch & Quick Tidy</span>
                  <span className="bg-yellow-200 text-ink px-1.5 py-0.5 font-bold">1 Unit</span>
                </li>
              </ul>
              <div className="p-3 bg-green-100 border border-green-600 text-xs text-green-900 font-bold">
                Result: Clear boundaries, complete focus, zero guilt when saying no to the rest.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S3: Six Modes Can Showcase */}
      <section className="py-20 px-4 sm:px-8 concrete-texture text-paper border-b-3 border-ink">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-ink border border-neutral-700 text-xs font-mono font-bold uppercase text-yellow-300">
              Adapts to Your Biological Season
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-paper">
              SIX MODES. ONE CAN.
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg">
              Different days demand different pacing. Selecting a mode dynamically tunes your capacity multiplier and rim lighting.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {MODES.map(mode => (
              <button
                key={mode.id}
                onClick={() => {
                  setActiveMode(mode.id);
                  sound.playSpray(0.2);
                }}
                className={`brutal-card p-4 flex flex-col items-center justify-between text-center transition-all ${
                  mode.id === activeMode.id
                    ? 'border-4 border-paper shadow-[6px_6px_0px_#FFFFFF] scale-105'
                    : 'bg-neutral-900 text-paper border-2 border-neutral-700 hover:border-paper'
                }`}
                style={mode.id === activeMode.id ? { backgroundColor: mode.accentColor, color: '#0A0A0A' } : {}}
              >
                <div className="space-y-1">
                  <span className="font-display text-lg block">{mode.name}</span>
                  <span className="font-mono text-xs font-bold block">{mode.multiplier}x Multiplier</span>
                </div>
                <p className="text-[11px] font-body mt-2 line-clamp-2 opacity-90">
                  {mode.tagline}
                </p>
              </button>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => navigate('/app')}
              className="brutal-btn px-6 py-3 text-base bg-modeGrind text-ink font-bold inline-flex items-center gap-2"
            >
              <span>Load Today's Can in {activeMode.name} Mode</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* S6: The Proof (Interactive Comparison Slider & Honest Testing Placeholder) */}
      <section className="py-20 px-4 sm:px-8 bg-paper text-ink border-b-3 border-ink">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-ink text-paper text-xs font-mono font-bold uppercase">
              Visual Capacity Proof
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight">
              BEFORE & AFTER CAN-DO
            </h2>
            <p className="text-neutral-800 text-base sm:text-lg">
              Slide to compare the mental friction of an infinite list vs. a pressurized paint container.
            </p>
          </div>

          {/* Interactive Split View */}
          <div className="brutal-card p-6 space-y-6">
            <div className="relative w-full h-64 bg-neutral-900 border-3 border-ink overflow-hidden flex items-center justify-center text-paper">
              {/* Left Side: 27 Tasks Chaos */}
              <div
                className="absolute inset-0 bg-red-950 flex flex-col justify-center p-6 text-red-200"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <span className="font-display text-2xl uppercase text-red-400">Chaos: 27 Tasks Overflow</span>
                <p className="font-mono text-xs max-w-md mt-2 text-neutral-300">
                  Tasks spill over midnight. Every unfinished task carries moral guilt and cognitive debt.
                </p>
              </div>

              {/* Right Side: 7 Tasks Fit */}
              <div
                className="absolute inset-0 bg-neutral-900 flex flex-col justify-center items-end p-6 text-green-300 text-right"
                style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
              >
                <span className="font-display text-2xl uppercase text-green-400">Clarity: 7 Tasks That Fit</span>
                <p className="font-mono text-xs max-w-md mt-2 text-neutral-300">
                  Every task has allocated paint units. Remaining items are deferred peacefully to tomorrow.
                </p>
              </div>

              {/* Slider Split Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_#FFFFFF]"
                style={{ left: `${sliderPos}%` }}
              />
            </div>

            {/* Slider Control */}
            <div className="space-y-1">
              <label htmlFor="comparison-slider" className="flex justify-between text-xs font-mono font-bold uppercase">
                <span>Drag to compare states</span>
                <span>Split Position: {sliderPos}%</span>
              </label>
              <input
                id="comparison-slider"
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-full accent-ink h-3 bg-neutral-300 border-2 border-ink cursor-pointer"
              />
            </div>

            {/* Honest Testing Placeholder (No fabricated statistics) */}
            <div className="p-4 bg-yellow-100 border-2 border-ink text-neutral-800 text-xs font-mono">
              <span className="font-bold uppercase text-ink block mb-1">
                Empirical Evaluation Notice:
              </span>
              Results from my 5-person test will be added on Oct 17. (No fabricated numbers or artificial testimonials).
            </div>
          </div>
        </div>
      </section>

      {/* S7: Live Accessibility & Sensory Deck */}
      <section className="py-16 px-4 sm:px-8 concrete-texture text-paper border-b-3 border-ink">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center gap-2 border-b-2 border-neutral-700 pb-3">
            <Sliders className="w-6 h-6 text-modeChill" />
            <h2 className="font-display text-3xl uppercase text-paper">
              Accessibility & Sensory Control Deck
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            {/* Reduced Motion */}
            <div className="brutal-card-dark p-4 space-y-3">
              <span className="font-bold text-sm uppercase block text-paper">Reduced Motion</span>
              <p className="text-neutral-400 font-body text-xs">
                Disables canvas spray particles, floating 3D bobbing, and animations.
              </p>
              <button
                onClick={() => setA11ySetting('reducedMotion', !reducedMotion)}
                className={`brutal-btn w-full py-1.5 text-xs font-bold ${
                  reducedMotion ? 'bg-green-400 text-ink' : 'bg-neutral-800 text-paper border-neutral-600'
                }`}
              >
                {reducedMotion ? 'ENABLED (CALM)' : 'DISABLED'}
              </button>
            </div>

            {/* High Contrast */}
            <div className="brutal-card-dark p-4 space-y-3">
              <span className="font-bold text-sm uppercase block text-paper">High Contrast</span>
              <p className="text-neutral-400 font-body text-xs">
                Forces maximum contrast stark black/white borders and distinct tags.
              </p>
              <button
                onClick={() => setA11ySetting('highContrast', !highContrast)}
                className={`brutal-btn w-full py-1.5 text-xs font-bold ${
                  highContrast ? 'bg-white text-ink' : 'bg-neutral-800 text-paper border-neutral-600'
                }`}
              >
                {highContrast ? 'ACTIVE' : 'DEFAULT'}
              </button>
            </div>

            {/* Dyslexia Font */}
            <div className="brutal-card-dark p-4 space-y-3">
              <span className="font-bold text-sm uppercase block text-paper">Dyslexia-Friendly Font</span>
              <p className="text-neutral-400 font-body text-xs">
                Swaps display typography to high-legibility weighted letterforms.
              </p>
              <button
                onClick={() => setA11ySetting('dyslexiaFont', !dyslexiaFont)}
                className={`brutal-btn w-full py-1.5 text-xs font-bold ${
                  dyslexiaFont ? 'bg-yellow-400 text-ink' : 'bg-neutral-800 text-paper border-neutral-600'
                }`}
              >
                {dyslexiaFont ? 'ACTIVE' : 'DEFAULT'}
              </button>
            </div>

            {/* Procedural Sound FX (Default OFF) */}
            <div className="brutal-card-dark p-4 space-y-3">
              <span className="font-bold text-sm uppercase block text-paper">Sound Effects (Web Audio)</span>
              <p className="text-neutral-400 font-body text-xs">
                Procedural spray paint hiss, can rattle clicks, and pop effects.
              </p>
              <button
                onClick={toggleSound}
                className={`brutal-btn w-full py-1.5 text-xs font-bold flex items-center justify-center gap-1.5 ${
                  soundEnabled ? 'bg-yellow-400 text-ink' : 'bg-neutral-800 text-neutral-400 border-neutral-600'
                }`}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>{soundEnabled ? 'SOUND ON' : 'MUTED (DEFAULT)'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* S8: Final Call to Action */}
      <section className="py-20 px-4 sm:px-8 bg-paper text-ink text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight">
            SPRAY YOUR FIRST DAY.
          </h2>
          <p className="text-lg text-neutral-800 font-medium max-w-xl mx-auto">
            Ready to stop treating human biology like an infinite conveyor belt? Open the app, calibrate your pressure, and allocate your paint.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/app')}
              className="brutal-btn px-8 py-4 text-xl font-bold bg-modeGrind text-ink shadow-[6px_6px_0px_#0A0A0A]"
            >
              Launch Energy Planner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
