import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from '../lib/router';
import { sound } from '../lib/sound';
import { Compass, Play, Pause, ChevronRight, ChevronLeft, X, Sparkles } from 'lucide-react';

interface TourStep {
  title: string;
  badge: string;
  route: '/' | '/app' | '/system';
  caption: string;
  highlight: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    title: '1. The Anti-Burnout Hypothesis',
    badge: 'HERO SCENE',
    route: '/',
    caption: 'Students use infinite to-do lists that treat cognitive stamina as an elastic band. CAN-DO treats your day as a finite physical aerosol can of paint.',
    highlight: 'Move cursor to spray pigment onto the concrete wall.',
  },
  {
    title: '2. The Aerosol Rattle Ritual',
    badge: 'PHYSICAL RITUAL',
    route: '/app',
    caption: 'Drag side-to-side to hear the synthesized mixing ball rattle. A spring velocity model charges the pressure ring. Shaking is an agitation ritual that never changes the math.',
    highlight: 'Desktop pointer velocity / Mobile DeviceMotion accelerometer / Keyboard Accessible.',
  },
  {
    title: '3. Six Pattern-Coded Modes',
    badge: 'BIOLOGICAL POSTURES',
    route: '/system',
    caption: 'Six modes adapt to your biological season (FOCUS, GRIND, CREATE, CHILL, SOCIAL, RECOVER). Color is never the only signal: each carries a unique geometric pattern (stripes, dots, waves).',
    highlight: 'All text/background pairs mathematically verified for WCAG 2.1 AA contrast.',
  },
  {
    title: '4. Allocating Paint Units',
    badge: 'DEMO DAY BOARD',
    route: '/app',
    caption: 'Tasks cost 1 to 5 paint units. Realistic student scenarios (OS homework, Discrete Math, cooking meals) are packed into the pressurized can via drag or keyboard.',
    highlight: 'Live can fill level gauge tracks exact used vs available paint units.',
  },
  {
    title: '5. Overload Fluid Drips',
    badge: 'OVERLOAD PHYSICS',
    route: '/app',
    caption: 'When volume is exceeded, paint physically leaks. A 2D gravity fluid simulation runs behind the can—1 stream per excess unit. Announce via aria-live.',
    highlight: 'No guilt alarms. The advisor recommends strategic deferrals ("Move to tomorrow").',
  },
  {
    title: '6. Cap-Lock Safety Guard',
    badge: 'SAFETY LATCH',
    route: '/app',
    caption: 'At 100% capacity, the actuator cap snaps shut with a "CLOSED FOR TODAY" sticker and haptic vibration. A kind "Open anyway" button keeps the user in control.',
    highlight: 'Protects evening recovery while respecting human autonomy.',
  },
  {
    title: '7. The Wall of Graffiti Proof',
    badge: 'PERMANENT RECORD',
    route: '/app',
    caption: 'Completed tasks become permanent graffiti stencil plaques on personal concrete. Rest days also leave tags. Export complete gallery or month mural as high-res PNG.',
    highlight: '100% native HTML5 Canvas 2D image synthesis (zero html2canvas dependency).',
  },
  {
    title: '8. Sensory Deck & Deployxa Target',
    badge: 'ACCESSIBILITY & DEPLOY',
    route: '/',
    caption: 'Live sensory panel controls Reduced Motion, High Contrast, Dyslexic font, and procedural Web Audio FX (strictly OFF by default). Static build ready for Deployxa.',
    highlight: 'Zero third-party network trackers. Privacy-first local-only architecture.',
  },
];

export const JudgeTour: React.FC = () => {
  const { isTourActive, navigate } = useRouter();
  const [isOpen, setIsOpen] = useState(isTourActive);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sync open state with URL param
  useEffect(() => {
    if (isTourActive) {
      setIsOpen(true);
      setCurrentStepIndex(0);
      setIsPlaying(true);
    }
  }, [isTourActive]);

  const currentStep = TOUR_STEPS[currentStepIndex];

  // Navigate to corresponding route when step changes
  useEffect(() => {
    if (isOpen) {
      navigate(currentStep.route);
    }
  }, [currentStepIndex, isOpen, currentStep.route, navigate]);

  // Auto-advance timer (approx 7.5 seconds per step = 60s total)
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const timer = setTimeout(() => {
      if (currentStepIndex < TOUR_STEPS.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
        sound.playPop();
      } else {
        setIsPlaying(false);
      }
    }, 7500);

    return () => clearTimeout(timer);
  }, [isOpen, isPlaying, currentStepIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'ArrowRight' || e.key === 'Enter') {
      if (currentStepIndex < TOUR_STEPS.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
        sound.playPop();
      }
    } else if (e.key === 'ArrowLeft') {
      if (currentStepIndex > 0) {
        setCurrentStepIndex(prev => prev - 1);
        sound.playPop();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === ' ') {
      e.preventDefault();
      setIsPlaying(prev => !prev);
    }
  }, [isOpen, currentStepIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNext = () => {
    if (currentStepIndex < TOUR_STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      sound.playPop();
    } else {
      setIsOpen(false);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      sound.playPop();
    }
  };

  return (
    <>
      {/* Floating Trigger Chip (Always visible) */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setCurrentStepIndex(0);
            setIsPlaying(true);
            sound.playPop();
          }}
          className="fixed bottom-6 right-6 z-40 brutal-btn px-4 py-2.5 bg-[#FFD93D] text-[#0A0A0A] border-3 border-[#0A0A0A] shadow-[6px_6px_0px_#0A0A0A] font-bold text-xs uppercase flex items-center gap-2 hover:bg-yellow-300 active:translate-x-1 active:translate-y-1"
          aria-label="Start 60-second guided judge tour"
        >
          <Compass className="w-4 h-4 text-[#0A0A0A] animate-spin" style={{ animationDuration: '8s' }} />
          <span>Tour (60s)</span>
        </button>
      )}

      {/* Floating Tour Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="judge-tour-heading"
          className="fixed bottom-6 right-6 z-50 max-w-lg w-[calc(100vw-3rem)] brutal-card p-5 bg-[#F4EFE6] text-[#0A0A0A] border-4 border-[#0A0A0A] shadow-[8px_8px_0px_#0A0A0A] space-y-4 animate-fadeIn"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b-3 border-[#0A0A0A] pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#0A0A0A] text-[#FFD93D] font-mono text-[10px] font-bold uppercase">
                {currentStep.badge}
              </span>
              <span className="font-mono text-xs font-bold text-neutral-600">
                Step {currentStepIndex + 1} of {TOUR_STEPS.length}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsPlaying(prev => !prev)}
                className="p-1.5 hover:bg-neutral-200 border border-[#0A0A0A] text-xs font-bold"
                title={isPlaying ? 'Pause auto-play (Space)' : 'Play auto-play (Space)'}
                aria-label={isPlaying ? 'Pause tour' : 'Play tour'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-neutral-200 border border-[#0A0A0A]"
                title="Exit tour (Esc)"
                aria-label="Exit tour"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-neutral-200 border border-[#0A0A0A] overflow-hidden">
            <div
              className="h-full bg-modeGrind transition-all duration-300"
              style={{ width: `${((currentStepIndex + 1) / TOUR_STEPS.length) * 100}%` }}
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h3 id="judge-tour-heading" className="font-display text-xl uppercase leading-tight">
              {currentStep.title}
            </h3>
            <p className="font-body text-xs text-neutral-800 leading-relaxed">
              {currentStep.caption}
            </p>
            <div className="p-2 bg-yellow-100 border border-[#0A0A0A] text-[11px] font-mono flex items-center gap-1.5 text-neutral-900">
              <Sparkles className="w-3.5 h-3.5 text-modeGrind flex-shrink-0" />
              <span>{currentStep.highlight}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between pt-2 border-t-2 border-[#0A0A0A]">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="brutal-btn px-3 py-1.5 text-xs bg-white text-[#0A0A0A] font-bold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
              Keys: ← / → / Space / Esc
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="brutal-btn px-4 py-1.5 text-xs bg-modeGrind text-ink font-bold flex items-center gap-1"
              aria-label={currentStepIndex === TOUR_STEPS.length - 1 ? 'Finish tour' : 'Next step'}
            >
              <span>{currentStepIndex === TOUR_STEPS.length - 1 ? 'Finish' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
