import React, { useState, useEffect, useCallback } from 'react';
import { useAppStore, selectActiveMode, selectCanTotalCost } from '../../lib/store';
import { CanoCanvas, CanoEmotion } from '../../three/cano';
import { StageStatChips } from './StageStatChips';
import { StageCheckin } from './StageCheckin';
import { StageFeedingTray } from './StageFeedingTray';
import { StageFullOverModal } from './StageFullOverModal';
import { StageFocusDone } from './StageFocusDone';
import { StageTopBar } from './StageTopBar';
import { StageState } from './types';
import { sound } from '../../lib/sound';

export const StageHero: React.FC = () => {
  const capacity = useAppStore((s) => s.calculatedCapacity);
  const totalCost = useAppStore(selectCanTotalCost);
  const tasks = useAppStore((s) => s.tasks);
  const activeMode = useAppStore(selectActiveMode);
  const sleepHours = useAppStore((s) => s.sleepHours);
  const energyLevel = useAppStore((s) => s.energyLevel);
  const stressLevel = useAppStore((s) => s.stressLevel);
  const reducedMotion = useAppStore((s) => s.reducedMotion);
  const { setCheckIn, toggleInCan, completeTask, logRestSession, resetDemo, moveTaskToTomorrow } =
    useAppStore.getState();

  const [stageState, setStageState] = useState<StageState>('SLEEPING');
  const [ariaMessage, setAriaMessage] = useState('');
  const [overrideFull, setOverrideFull] = useState(false);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  const inCanTasks = tasks.filter((t) => t.inCan && !t.completed);
  const remainingPaint = capacity - totalCost;
  const isFull = capacity > 0 && totalCost >= capacity;
  const isOver = capacity > 0 && totalCost > capacity;

  const emotion: CanoEmotion =
    stageState === 'SLEEPING' ? 'SLEEPING'
    : stageState === 'RESTING' ? 'RESTING'
    : stageState === 'FOCUS' ? 'FOCUS'
    : stageState === 'DONE' ? 'PROUD'
    : isOver ? 'WORRIED'
    : isFull ? 'STUFFED'
    : 'HAPPY';

  const announce = useCallback((msg: string) => setAriaMessage(msg), []);

  useEffect(() => {
    if (stageState !== 'SLEEPING') {
      announce(`Cano has ${totalCost} of ${capacity} paint used. ${remainingPaint} left.`);
    }
  }, [totalCost, capacity, remainingPaint, stageState, announce]);

  const wakeCano = () => {
    sound.playPop();
    setStageState('CHECKIN');
    announce('Cano is awake! Check in with your sleep and energy.');
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setPointerPos({ x, y });
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      className="relative w-full min-h-[92vh] flex flex-col items-center justify-between overflow-hidden bg-[#FFF6E5] px-4 py-8 select-none"
    >
      <div className="sr-only" aria-live="polite" role="status">
        {ariaMessage}
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[24vw] font-display text-[#14101F]/10 tracking-tighter leading-none"
      >
        CAN-DO
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] rounded-full pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: activeMode.accentColor, opacity: 0.85 }}
      />

      <StageTopBar
        onResetDemo={() => {
          resetDemo();
          setStageState('SLEEPING');
          sound.playPop();
        }}
      />

      <div className="relative w-full max-w-md h-[55vh] sm:h-[68vh] flex items-center justify-center z-10">
        <CanoCanvas
          emotion={emotion}
          skinMode={activeMode.id as any}
          capacity={capacity}
          usedPaint={totalCost}
          reducedMotion={reducedMotion}
          pointerPos={pointerPos}
          onWake={wakeCano}
          className="w-full h-full"
        />
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center gap-4 z-20">
        {stageState === 'SLEEPING' && (
          <div className="flex flex-col items-center gap-3 text-center">
            <button
              type="button"
              onClick={wakeCano}
              className="min-h-[52px] px-8 py-3 bg-[#FF6B2C] text-white border-[3px] border-[#14101F] shadow-[4px_4px_0px_#14101F] font-display text-xl uppercase tracking-wide hover:bg-orange-600 active:translate-y-1 rounded-xl"
            >
              Wake Cano 🔔
            </button>
            <p className="font-body text-sm sm:text-base text-[#14101F] font-semibold max-w-md">
              Your day has limited paint. Fit your tasks inside Cano.
            </p>
          </div>
        )}

        {stageState === 'CHECKIN' && (
          <StageCheckin
            sleepHours={sleepHours}
            energyLevel={energyLevel}
            stressLevel={stressLevel}
            onUpdate={setCheckIn}
            onDone={() => setStageState('FEEDING')}
          />
        )}

        {stageState === 'FEEDING' && (
          <div className="w-full space-y-4">
            <StageFeedingTray
              tasks={tasks}
              onFeed={(id) => {
                toggleInCan(id);
                if (isFull && !overrideFull) sound.playPop();
              }}
              onUnfeed={(id) => toggleInCan(id)}
            />

            {(isFull || isOver) && !overrideFull && (
              <StageFullOverModal
                isFull={isFull}
                isOver={isOver}
                onOpenAnyway={() => setOverrideFull(true)}
                onMoveToTomorrow={() => {
                  const overTask = inCanTasks[inCanTasks.length - 1];
                  if (overTask) moveTaskToTomorrow(overTask.id);
                }}
              />
            )}

            {inCanTasks.length > 0 && (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setStageState('FOCUS')}
                  className="min-h-[46px] px-6 py-2 bg-[#7C5CFF] text-white border-2 border-[#14101F] font-display text-sm uppercase shadow-[3px_3px_0px_#14101F] hover:bg-violet-600 rounded-lg"
                >
                  Start Focus Spray Run ⚡
                </button>
              </div>
            )}
          </div>
        )}

        {stageState === 'FOCUS' && (
          <StageFocusDone
            taskTitle={inCanTasks[0]?.title || 'Daily High Priority Task'}
            onComplete={() => {
              if (inCanTasks[0]) completeTask(inCanTasks[0].id);
              setStageState('DONE');
            }}
            onRest={() => {
              logRestSession();
              setStageState('RESTING');
            }}
            onBackToFeed={() => setStageState('FEEDING')}
          />
        )}

        <StageStatChips
          capacity={capacity}
          inCanCount={inCanTasks.length}
          remainingPaint={remainingPaint}
        />
      </div>
    </section>
  );
};
