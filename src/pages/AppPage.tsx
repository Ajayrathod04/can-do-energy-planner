import React, { useState, useEffect } from 'react';
import { useAppStore, selectActiveMode, selectCanTotalCost } from '@/lib/store';
import { Stepper, Dialog, Toast, Button } from '@/components/ui';
import { CanoMascot } from '@/components/CanoMascot';
import { CheckInCard } from '@/app/CheckInCard';
import { CanDock } from '@/app/CanDock';
import { TaskBoard } from '@/app/TaskBoard';
import { OverflowModal } from '@/app/OverflowModal';
import { TheWall } from '@/app/TheWall';
import { MonthMural } from '@/app/MonthMural';
import { PermissionSlip } from '@/app/PermissionSlip';
import { MODES } from '@/data/modes';

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

  // Coach marks state (persisted)
  const [coachStep, setCoachStep] = useState<number>(() => {
    if (typeof window === 'undefined') return 0;
    const seen = localStorage.getItem('can_do_coach_seen');
    return seen ? 0 : 1;
  });

  const dismissCoach = () => {
    localStorage.setItem('can_do_coach_seen', 'true');
    setCoachStep(0);
  };

  // Keyboard shortcut listener ('?' for shortcuts)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === '?' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        setIsShortcutsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Determine current active stepper stage (1: check-in, 2: calibrated, 3: loading tasks)
  const currentStepperStage = tasks.filter((t) => t.inCan).length > 0 ? 3 : 2;

  const steps = [
    { number: 1, label: 'Check in', sublabel: 'Set sleep & mood' },
    { number: 2, label: 'Your paint today', sublabel: `${capacity} paint budgeted` },
    { number: 3, label: 'Load your can', sublabel: `${totalCost} / ${capacity} loaded` },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FFF6E5] text-[#111111] py-8 px-4 sm:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Header & Mode Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-[3px] border-[#111111] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD93D] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0_#111111] text-xs font-bold uppercase mb-2">
              <span>★ Daily Energy Workbench</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              CAN-DO WORKBENCH
            </h1>
            <p className="text-sm text-[#444444] font-medium mt-1">
              Your daily capacity is finite. Load what fits, then let tomorrow handle the rest.
            </p>
          </div>

          {/* Quick Controls & Shortcuts */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsShortcutsOpen(true)}
              className="px-3 py-1.5 text-xs font-bold bg-white border-2 border-[#111111] shadow-[2px_2px_0_#111111] hover:bg-[#FFD93D]"
            >
              ⌨ Shortcuts (?)
            </button>
            <button
              onClick={() => {
                resetDemo();
                setToastMessage('Demo day reset to defaults');
                setTimeout(() => setToastMessage(null), 3000);
              }}
              className="px-3 py-1.5 text-xs font-bold bg-white border-2 border-[#111111] shadow-[2px_2px_0_#111111] hover:bg-[#FF3D8B] hover:text-white"
            >
              ↺ Reset demo
            </button>
            <a
              href="#/"
              className="px-3 py-1.5 text-xs font-bold bg-[#FFD93D] border-2 border-[#111111] shadow-[2px_2px_0_#111111]"
            >
              ← Back to Home
            </a>
          </div>
        </div>

        {/* 3-Step Progress Stepper */}
        <Stepper steps={steps} currentStep={currentStepperStage} />

        {/* Mode Selector Strip */}
        <div className="flex flex-wrap items-center gap-2 p-3 bg-white border-[3px] border-[#111111] shadow-[4px_4px_0_#111111]">
          <span className="text-xs font-bold uppercase text-[#555555] mr-2">Active Mode:</span>
          {MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`px-3 py-1 text-xs font-bold border-2 transition-all flex items-center gap-1.5 ${
                mode.id === activeMode.id
                  ? 'border-[#111111] shadow-[2px_2px_0_#111111] scale-105'
                  : 'border-[#CCCCCC] bg-[#FAFAFA] hover:border-[#111111]'
              }`}
              style={mode.id === activeMode.id ? { backgroundColor: mode.accentColor } : {}}
            >
              <span>{mode.name}</span>
              <span className="text-[10px] opacity-75">({mode.multiplier}×)</span>
            </button>
          ))}
        </div>

        {/* First-Run Coach Marks Banner (Dismissible) */}
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols): CheckIn + CanDock + PermissionSlip */}
          <div className="lg:col-span-5 space-y-8">
            <CheckInCard />
            <CanDock onOpenDeferral={() => setIsOverflowModalOpen(true)} />
            <PermissionSlip />
          </div>

          {/* Right Column (7 cols): TaskBoard + The Wall + MonthMural */}
          <div className="lg:col-span-7 space-y-8">
            <TaskBoard />
            <TheWall />
            <MonthMural />
          </div>
        </div>

        {/* Anti-Burnout Pledge Banner */}
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
          <span className="font-mono text-[11px] text-[#666666] border-l-2 border-[#CCCCCC] pl-3 whitespace-nowrap">
            Digital wall. Please paint legal walls only.
          </span>
        </div>
      </div>

      {/* Overflow Resolution Modal */}
      <OverflowModal
        isOpen={isOverflowModalOpen || totalCost > capacity}
        onClose={() => setIsOverflowModalOpen(false)}
      />

      {/* Keyboard Shortcuts Dialog */}
      <Dialog
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
        title="Keyboard Shortcuts"
      >
        <div className="space-y-3 font-mono text-xs text-[#222222]">
          <div className="flex justify-between border-b pb-1">
            <span className="font-bold">?</span>
            <span>Toggle this keyboard shortcuts dialog</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span className="font-bold">Tab / Shift+Tab</span>
            <span>Navigate through buttons and sliders</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span className="font-bold">Enter / Space</span>
            <span>Activate focused button or prime can</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span className="font-bold">Esc</span>
            <span>Dismiss active modal or dialog</span>
          </div>
          <div className="flex justify-between pb-1">
            <span className="font-bold">Arrow Keys</span>
            <span>Adjust slider values or carousel slides</span>
          </div>
          <Button
            onClick={() => setIsShortcutsOpen(false)}
            variant="brutal"
            size="sm"
            isFullWidth
            className="mt-4"
          >
            Close shortcuts
          </Button>
        </div>
      </Dialog>

      {/* Undo / Status Toast */}
      <Toast message={toastMessage || ''} isVisible={toastMessage !== null} />
    </div>
  );
};
