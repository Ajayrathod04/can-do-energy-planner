import React, { lazy, Suspense } from 'react';
import { Button, PillCTA, Badge } from '@/components/ui';
import { MODES } from '@/data/modes';
import { getCircadianPeriod } from '@/lib/wallLighting';

const SprayCanView = lazy(() =>
  import('@/three/SprayCanView').then((m) => ({ default: m.SprayCanView }))
);

export interface L1HeroProps {
  onScrollToDemo: () => void;
  onScrollToHowItWorks: () => void;
}

export const L1Hero: React.FC<L1HeroProps> = ({ onScrollToDemo, onScrollToHowItWorks }) => {
  const currentPeriod = getCircadianPeriod();
  const defaultMode = MODES[0]; // FOCUS mode

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-16 bg-gradient-to-b from-[#DDF1FF] via-[#FFF6E5] to-[#FFF6E5] border-b-[3px] border-[#111111] overflow-hidden">
      {/* Background halftone & paint blob sun */}
      <div className="absolute top-1/4 right-1/4 w-[380px] h-[380px] md:w-[500px] md:h-[500px] bg-[#FFD93D] rounded-full blur-[2px] opacity-80 pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-10 w-24 h-24 bg-[#FF3D8B]/20 rounded-full pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-center">
        {/* Top Chips Row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="starburst" color="#FF3D8B">
            NEW HACKATHON EDITION
          </Badge>
          <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white border-2 border-[#111111] shadow-[2px_2px_0_#111111]">
            Wall light now: <strong className="text-[#FF6B2C]">{currentPeriod}</strong>
          </span>
          <span className="font-tag text-xs text-[#555555]">
            Digital wall. Please paint legal walls only.
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Headline & Plain Language Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] text-[#111111] leading-[0.95] tracking-tight">
              Your day is a spray can.{' '}
              <span className="underline decoration-[#FF3D8B] decoration-wavy decoration-4">
                When it’s full, stop.
              </span>
            </h1>

            <p className="font-body text-lg sm:text-xl md:text-2xl text-[#222222] max-w-2xl font-medium leading-relaxed">
              CAN-DO is a daily planner for students who have more to-dos than energy. Check in, get
              today’s paint, load your tasks, and stop when the can is full.{' '}
              <span className="font-bold text-[#111111] bg-[#00E599]/40 px-1">No guilt.</span>
            </p>

            <p className="text-sm md:text-base font-bold text-[#555555] tracking-wide">
              For students and anyone who feels buried by endless to-do lists.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <PillCTA onClick={onScrollToDemo} accentColor="#FFD93D">
                Try the 30-second demo ↓
              </PillCTA>
              <Button onClick={onScrollToHowItWorks} variant="secondary" size="lg">
                How it works
              </Button>
              <a
                href="#/app"
                className="font-bold text-sm text-[#111111] underline hover:text-[#FF3D8B] px-2 py-1"
              >
                Skip to the app →
              </a>
            </div>
          </div>

          {/* Right: 3D Spray Can Stage */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] md:min-h-[460px]">
            {/* Stage background blob */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[340px] md:w-[380px] md:h-[420px] bg-[#00E599]/30 border-[3px] border-[#111111] rotate-[3deg] shadow-[6px_6px_0_#111111]" />
            </div>

            <Suspense
              fallback={
                <div className="w-full h-full min-h-[380px] flex items-center justify-center font-display text-lg">
                  Loading 3D Can...
                </div>
              }
            >
              <SprayCanView
                mode={defaultMode}
                capacity={10}
                usedCapacity={6}
                className="w-full h-full min-h-[380px] md:min-h-[460px]"
                enableControls={true}
              />
            </Suspense>

            {/* Stage Sticker Badges */}
            <div className="absolute -bottom-2 -left-2 z-20">
              <span className="font-tag text-xs md:text-sm bg-[#FFD93D] text-[#111111] px-3 py-1 border-2 border-[#111111] shadow-[2px_2px_0_#111111] rotate-[-4deg] inline-block">
                DRAG TO ROTATE 3D CAN
              </span>
            </div>
            <div className="absolute top-2 -right-2 z-20">
              <span className="font-display text-xs bg-[#FF3D8B] text-[#FFFFFF] px-3 py-1 border-2 border-[#111111] shadow-[2px_2px_0_#111111] rotate-[6deg] inline-block">
                AEROSOL DYNAMICS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
