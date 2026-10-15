import React, { useState, useEffect } from 'react';
import { useAppStore, selectActiveMode, selectCanTotalCost } from '@/lib/store';
import { Stepper, Toast } from '@/components/ui';
import { CanoMascot } from '@/components/CanoMascot';
import { CheckInCard } from '@/app/CheckInCard';
import { CanDock } from '@/app/CanDock';
import { TaskBoard } from '@/app/TaskBoard';
import { OverflowModal } from '@/app/OverflowModal';
import { TheWall } from '@/app/TheWall';
import { MonthMural } from '@/app/MonthMural';
import { PermissionSlip } from '@/app/PermissionSlip';
import { AppHeader } from '@/app/AppHeader';
import { ShortcutsDialog } from '@/app/ShortcutsDialog';
import { MODES } from '@/data/modes';
import { getReadableText } from '@/lib/contrast';

export const AppPage: React.FC = () => {
  const activeMode = useAppStore(selectActiveMode);
  const setActiveMode = useAppStore((s) => s.setActiveMode);
  const capacity = useAppStore((s) => s.calculatedCapacity);
  const totalCost = useAppStore(selectCanTotalCost);
  const tasks = useAppStore((s) => s.tasks);
  const resetDemo = useAppStore((s) => s.resetDemo);

  const [isOverflowModalOpen, setIsOverflowModalOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [coachStep, setCoachStep] = useState<number>(() => {
    if (typeof window === 'undefined') return 0;
    const seen = localStorage.getItem('can_do_coach_seen');
    return seen ? 0 : 1;
  });

  const dismissCoach = () => {
    localStorage.setItem('can_do_coach_seen', 'true');
    setCoachStep(0);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === '?' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        setIsShortcutsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const currentStepperStage = tasks.filter((t) => t.inCan).length > 0 ? 3 : 2;

  const steps = [
    { number: 1, label: 'Check in', sublabel: 'Set sleep & mood' },
    { number: 2, label: 'Your paint today', sublabel: `${capacity} paint budgeted` },
    { number: 3, label: 'Load your can', sublabel: `${totalCost} / ${capacity} loaded` },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FFF6E5] text-[#111111] py-8 px-4 sm:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-6">
        <AppHeader
          onOpenShortcuts={() => setIsShortcutsOpen(true)}
          onResetDemo={() => {
            resetDemo();
            setToastMessage('Demo day reset to defaults');
            setTimeout(() => setToastMessage(null), 3000);
          }}
        />

        <Stepper steps={steps} currentStep={currentStepperStage} />

        <div className="flex flex-wrap items-center gap-2 p-3 bg-white border-[3px] border-[#111111] shadow-[4px_4px_0_#111111]">
          <span className="text-xs font-bold uppercase text-neutral-700 mr-2">Active Mode:</span>
          {MODES.map((mode) => {
            const isSelected = mode.id === activeMode.id;
            const textColor = getReadableText(mode.accentColor);
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                style={
                  isSelected
                    ? { backgroundColor: mode.accentColor, color: textColor, borderColor: '#14101F' }
                    : undefined
                }
                className={`px-3 py-1 text-xs font-bold border-2 transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'shadow-[2px_2px_0_#111111] scale-105'
                    : 'border-neutral-300 bg-[#FAFAFA] text-[#14101F] hover:border-[#14101F]'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full border border-neutral-400"
                  style={{ backgroundColor: isSelected ? textColor : mode.accentColor }}
                />
                <span>{mode.name}</span>
                <span className="text-[10px]">({mode.multiplier}×)</span>
              </button>
            );
          })}
        </div>

        {coachStep > 0 && (
          <div className="p-4 bg-[#FFD93D] border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CanoMascot pose="happy" size={50} />
              <div>
                <p className="font-display text-sm text-[#111111]">
                  QUICK TIP: Your can has {capacity} paint today.
                </p>
                <p className="text-xs text-[#333333]">
                  Tap or drag tasks into your spray can. When full, the cap locks automatically to
                  save you from burnout!
                </p>
              </div>
            </div>
            <button
              onClick={dismissCoach}
              className="px-3 py-1 font-bold text-xs bg-white border-2 border-[#111111] shadow-[2px_2px_0_#111111] hover:bg-[#111111] hover:text-white whitespace-nowrap"
            >
              Got it, hide tip ✕
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-8">
            <CheckInCard />
            <CanDock onOpenDeferral={() => setIsOverflowModalOpen(true)} />
            <PermissionSlip />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <TaskBoard />
            <TheWall />
            <MonthMural />
          </div>
        </div>

        <div className="p-4 bg-white border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <span className="font-display uppercase tracking-wider block text-[#111111]">
              The CAN-DO Anti-Burnout Pledge:
            </span>
            <p className="text-[#444444]">
              If you need to defer tasks today, that is evidence of wisdom, not failure.
              Productivity without capacity limits is just burnout on an installment plan.
            </p>
          </div>
          <span className="font-mono text-[11px] text-[var(--text-muted)] border-l-2 border-[#CCCCCC] pl-3 whitespace-nowrap">
            Digital wall. Please paint legal walls only.
          </span>
        </div>
      </div>

      <OverflowModal
        isOpen={isOverflowModalOpen || totalCost > capacity}
        onClose={() => setIsOverflowModalOpen(false)}
      />

      <ShortcutsDialog isOpen={isShortcutsOpen} onClose={() => setIsShortcutsOpen(false)} />

      <Toast message={toastMessage || ''} isVisible={toastMessage !== null} />
    </div>
  );
};
