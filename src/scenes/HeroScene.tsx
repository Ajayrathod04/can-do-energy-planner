import React from 'react';
import { useRouter } from '../lib/router';
import { useAppStore, selectActiveMode, selectCanTotalCost } from '../lib/store';
import { SprayCanView } from '../three/SprayCanView';
import { SprayCanvasTrail } from '../components/SprayCanvasTrail';
import { ArrowRight, Play, Sparkles, Compass } from 'lucide-react';

export const HeroScene: React.FC = () => {
  const { navigate } = useRouter();
  const activeMode = useAppStore(selectActiveMode);
  const capacity = useAppStore(s => s.calculatedCapacity);
  const usedCapacity = useAppStore(selectCanTotalCost);
  const resetDemo = useAppStore(s => s.resetDemo);

  const handleDemoDay = () => {
    resetDemo();
    navigate('/app');
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-8 py-12 overflow-hidden concrete-texture border-b-3 border-ink">
      {/* Interactive 2D Paint Spray Trail */}
      <SprayCanvasTrail />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Kinetic Typography & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Hackathon Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink border-2 border-paper text-xs font-mono text-paper tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full inline-block animate-ping" style={{ backgroundColor: activeMode.accentColor }} />
            <span>Hyperbloom '24 Web Design // Anti-Burnout Engine</span>
          </div>

          {/* Kinetic Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tighter leading-none text-paper drop-shadow-md">
            CAN-DO<span style={{ color: activeMode.accentColor }}>.</span>
          </h1>

          {/* Subtitle / Core Truth */}
          <p className="font-tag text-2xl sm:text-3xl text-yellow-300 transform -rotate-1 tracking-wide">
            "Your day has a capacity. Spend it on purpose."
          </p>

          <p className="font-body text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
            Students drown under infinite to-do lists that treat human energy like an elastic string.
            CAN-DO treats your day as a finite physical spray can of paint. When it’s full, it overflows.
            Physics doesn’t negotiate.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={handleDemoDay}
              className="brutal-btn px-6 py-3.5 text-base sm:text-lg font-bold flex items-center gap-2 bg-modeGrind text-ink border-3 border-ink hover:bg-orange-500"
              aria-label="Try a demo day with realistic student tasks"
            >
              <span>Try a Demo Day</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              onClick={() => navigate('/app')}
              className="brutal-btn px-6 py-3.5 text-base sm:text-lg font-bold flex items-center gap-2 bg-paper text-ink border-3 border-ink"
              aria-label="Open the full energy planner app"
            >
              <span>Open App</span>
              <Play className="w-4 h-4 fill-ink" aria-hidden="true" />
            </button>

            <button
              onClick={() => navigate('/#/?tour=1')}
              className="brutal-btn px-4 py-3 text-sm font-bold flex items-center gap-2 bg-neutral-900 text-yellow-300 border-2 border-yellow-300 hover:bg-neutral-800"
              aria-label="Start guided interactive demo tour"
            >
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Guided Tour</span>
            </button>
          </div>

          {/* Hint */}
          <div className="text-xs font-mono text-neutral-400 flex items-center gap-2 pt-2">
            <Sparkles className="w-4 h-4 text-modeChill" aria-hidden="true" />
            <span>Interactive: Move cursor to spray aerosol pigment onto concrete.</span>
          </div>
        </div>

        {/* Right Column: 3D Procedural Spray Can */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-[420px] aspect-square relative bg-neutral-950/60 border-3 border-paper shadow-[8px_8px_0px_#FFFFFF] p-2">
            <SprayCanView
              mode={activeMode}
              capacity={capacity}
              usedCapacity={usedCapacity}
              className="w-full h-full"
            />
          </div>

          {/* Can Stats readout */}
          <div className="mt-4 flex items-center gap-4 text-xs font-mono bg-ink/90 border border-neutral-700 px-4 py-2 text-paper">
            <div>
              MODE: <span className="font-bold" style={{ color: activeMode.accentColor }}>{activeMode.name}</span>
            </div>
            <div>|</div>
            <div>
              CAPACITY: <span className="font-bold text-yellow-400">{capacity} UNITS</span>
            </div>
            <div>|</div>
            <div>
              USED: <span className="font-bold text-white">{usedCapacity} UNITS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
