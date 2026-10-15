import React, { useState, useRef } from 'react';
import { useAppStore, selectActiveMode, selectCanTotalCost } from '../../lib/store';
import { InteractiveCan } from '../can';
import { HeroCheckin } from './HeroCheckin';
import { HeroModeChips } from './HeroModeChips';
import { HeroTaskChips } from './HeroTaskChips';
import { HeroStatNumbers } from './HeroStatNumbers';
import { sound } from '../../lib/sound';
import { RotateCcw, ArrowRight } from 'lucide-react';

export const FirstScreenHero: React.FC = () => {
  const capacity = useAppStore((s) => s.calculatedCapacity);
  const totalCost = useAppStore(selectCanTotalCost);
  const tasks = useAppStore((s) => s.tasks);
  const activeMode = useAppStore(selectActiveMode);
  const sleepHours = useAppStore((s) => s.sleepHours);
  const energyLevel = useAppStore((s) => s.energyLevel);
  const stressLevel = useAppStore((s) => s.stressLevel);
  const reducedMotion = useAppStore((s) => s.reducedMotion);
  const soundEnabled = useAppStore((s) => s.soundEnabled);

  const setCheckIn = useAppStore((s) => s.setCheckIn);
  const setActiveMode = useAppStore((s) => s.setActiveMode);
  const toggleInCan = useAppStore((s) => s.toggleInCan);
  const resetDemo = useAppStore((s) => s.resetDemo);
  const moveTaskToTomorrow = useAppStore((s) => s.moveTaskToTomorrow);

  const [triggerSplash, setTriggerSplash] = useState(0);
  const [overrideFull, setOverrideFull] = useState(false);
  const canRef = useRef<HTMLDivElement>(null);

  const inCanTasks = tasks.filter((t) => t.inCan && !t.completed);
  const isFull = capacity > 0 && totalCost >= capacity;
  const isOver = capacity > 0 && totalCost > capacity;
  const remaining = Math.max(0, capacity - totalCost);

  const handleToggleTask = (taskId: string, targetEl?: HTMLElement) => {
    if (soundEnabled) sound.playPop();
    toggleInCan(taskId);
    setTriggerSplash(Date.now());

    // FLIP animation flight if target provided
    if (targetEl && canRef.current && !reducedMotion) {
      const srcRect = targetEl.getBoundingClientRect();
      const destRect = canRef.current.getBoundingClientRect();
      const clone = document.createElement('div');
      clone.style.position = 'fixed';
      clone.style.left = `${srcRect.left}px`;
      clone.style.top = `${srcRect.top}px`;
      clone.style.width = '24px';
      clone.style.height = '24px';
      clone.style.borderRadius = '50%';
      clone.style.backgroundColor = activeMode.accentColor;
      clone.style.border = '2px solid #14101F';
      clone.style.zIndex = '9999';
      clone.style.pointerEvents = 'none';
      document.body.appendChild(clone);

      const anim = clone.animate(
        [
          { transform: 'translate(0, 0) scale(1)', opacity: 1 },
          { transform: `translate(${destRect.left + destRect.width / 2 - srcRect.left}px, ${destRect.top + destRect.height / 2 - srcRect.top}px) scale(0.4)`, opacity: 0.8 },
        ],
        { duration: 400, easing: 'cubic-bezier(0.2, 0.9, 0.3, 1.2)' }
      );
      anim.onfinish = () => clone.remove();
    }
  };

  const focusFirstChip = () => {
    const el = document.getElementById('first-demo-chip');
    el?.focus({ preventScroll: true });
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-4 py-3 sm:py-6 overflow-hidden">
      {/* Reset & Quick Links top bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-ink/10 text-xs font-mono">
        <span className="text-[11px] font-bold text-neutral-600">
          MODE // {activeMode.name} ({activeMode.multiplier}x)
        </span>
        <div className="flex items-center gap-3">
          {inCanTasks.length > 0 && (
            <a
              href="#/app"
              className="inline-flex items-center gap-1 font-bold text-[#7C5CFF] hover:underline"
            >
              <span>Start first task in App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            type="button"
            onClick={() => {
              resetDemo();
              setOverrideFull(false);
              if (soundEnabled) sound.playPop();
            }}
            className="inline-flex items-center gap-1 text-neutral-600 hover:text-black font-semibold"
            aria-label="Reset demo to initial state"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset demo</span>
          </button>
        </div>
      </div>

      {/* 12-Column Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-center">
        {/* Left Columns (1 to 5 on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-2 sm:space-y-4">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">
            For students with more to-dos than energy
          </span>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-[clamp(2.2rem,4vw,3.6rem)] text-[#14101F] leading-[1.08] tracking-tight">
            Stop planning more than you can do.
          </h1>

          <p className="font-body text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-md">
            CAN-DO turns how you slept into a daily budget of paint. Add tasks until the can is full. The rest waits for tomorrow.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5 sm:pt-1">
            <button
              type="button"
              onClick={focusFirstChip}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#14101F] text-white font-display text-xs sm:text-sm uppercase tracking-wide border-3 border-[#14101F] shadow-[3px_3px_0px_#14101F] sm:shadow-[4px_4px_0px_#14101F] hover:bg-neutral-800 active:translate-y-0.5 rounded-lg min-h-[44px]"
            >
              Try it in 20 seconds
            </button>
            <a
              href="#/app"
              className="px-3 sm:px-4 py-2 text-xs font-mono font-bold text-[#14101F] hover:underline min-h-[44px] inline-flex items-center"
            >
              Open the full planner →
            </a>
          </div>
        </div>

        {/* Right Columns (7 to 12 on desktop) */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
          {/* Flat Color Field Frame holding the Giant Can */}
          <div
            className="relative w-full sm:w-[50%] h-[18vh] sm:h-[65vh] max-h-[580px] rounded-2xl flex items-center justify-center p-2 transition-colors duration-400"
            style={{ backgroundColor: activeMode.accentColor }}
          >
            <div ref={canRef} className="w-full h-[112%] flex items-center justify-center">
              <InteractiveCan
                capacity={capacity}
                usedPaint={totalCost}
                modeColor={activeMode.accentColor}
                modeName={activeMode.name}
                isFull={isFull}
                isOver={isOver}
                reducedMotion={reducedMotion}
                triggerSplash={triggerSplash}
                onCanClick={focusFirstChip}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Beside the can: Compact control panel + Stats */}
          <div className="w-full sm:w-[48%] flex flex-col space-y-1.5 sm:space-y-3">
            <HeroStatNumbers capacity={capacity} usedPaint={totalCost} remaining={remaining} />
            <HeroModeChips activeModeId={activeMode.id} onSelectMode={setActiveMode} />
            <HeroCheckin
              sleepHours={sleepHours}
              energyLevel={energyLevel}
              stressLevel={stressLevel}
              onUpdate={({ sleepHours: s, energyLevel: e, stressLevel: st }) => {
                setCheckIn(s ?? sleepHours, e ?? energyLevel, st ?? stressLevel);
              }}
            />
            <HeroTaskChips
              tasks={tasks}
              isFull={isFull}
              isOver={isOver}
              overrideFull={overrideFull}
              onToggleInCan={handleToggleTask}
              onOpenAnyway={() => setOverrideFull(true)}
              onMoveToTomorrow={() => {
                const overTask = inCanTasks[inCanTasks.length - 1];
                if (overTask) moveTaskToTomorrow(overTask.id);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
