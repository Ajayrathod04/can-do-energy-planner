import React, { useState } from 'react';
import { useAppStore, selectActiveMode, selectCanTotalCost } from '../lib/store';
import { CheckInCard } from './CheckInCard';
import { CanDock } from './CanDock';
import { TaskBoard } from './TaskBoard';
import { OverflowModal } from './OverflowModal';
import { TheWall } from './TheWall';
import { MODES } from '../data/modes';
import { Sparkles, HeartHandshake } from 'lucide-react';

export const AppView: React.FC = () => {
  const activeMode = useAppStore(selectActiveMode);
  const setActiveMode = useAppStore(s => s.setActiveMode);
  const capacity = useAppStore(s => s.calculatedCapacity);
  const totalCost = useAppStore(selectCanTotalCost);

  const [isOverflowModalOpen, setIsOverflowModalOpen] = useState(false);

  const isOverflow = totalCost > capacity;

  return (
    <div className="w-full min-h-screen bg-paper text-ink py-8 px-4 sm:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Control Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-3 border-ink pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-ink text-paper text-xs font-mono font-bold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Interactive Daily Energy Budget</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl uppercase tracking-tight">
              CAN-DO WORKBENCH
            </h1>
            <p className="text-sm text-neutral-700 font-medium">
              Calibrate your pressure, load tasks into the spray can, and honor your finite energy.
            </p>
          </div>

          {/* Quick Mode Switcher Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-neutral-600 block w-full md:w-auto">
              Active Mode:
            </span>
            {MODES.map(mode => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`px-3 py-1 text-xs font-bold font-mono uppercase border-2 transition-all ${
                  mode.id === activeMode.id
                    ? 'border-ink shadow-[2px_2px_0px_#0A0A0A] scale-105'
                    : 'border-neutral-400 bg-white hover:border-ink'
                }`}
                style={mode.id === activeMode.id ? { backgroundColor: mode.accentColor, color: '#0A0A0A' } : {}}
              >
                {mode.name} ({mode.multiplier}x)
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols): CheckIn + CanDock */}
          <div className="lg:col-span-5 space-y-8">
            <CheckInCard />
            <CanDock onOpenDeferral={() => setIsOverflowModalOpen(true)} />
          </div>

          {/* Right Column (7 cols): TaskBoard + The Wall */}
          <div className="lg:col-span-7 space-y-8">
            <TaskBoard />
            <TheWall />
          </div>
        </div>

        {/* Guilt-Free Philosophy Footer Note */}
        <div className="p-4 bg-yellow-100 border-2 border-ink flex items-start gap-3 text-xs font-body text-neutral-800">
          <HeartHandshake className="w-5 h-5 text-modeGrind flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold font-display uppercase tracking-wider block text-ink">
              The CAN-DO Anti-Burnout Pledge:
            </span>
            If you need to defer 3 tasks today, that is evidence of wisdom, not failure.
            Productivity without capacity limits is just burnout on an installment plan.
          </div>
        </div>
      </div>

      {/* Overflow Resolution Modal */}
      <OverflowModal
        isOpen={isOverflowModalOpen || isOverflow}
        onClose={() => setIsOverflowModalOpen(false)}
      />
    </div>
  );
};
