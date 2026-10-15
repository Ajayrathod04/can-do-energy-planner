import React, { useState } from 'react';
import { TaskItem } from '../../data/demoTasks';
import { Plus, Check, Undo2 } from 'lucide-react';

interface HeroTaskChipsProps {
  tasks: TaskItem[];
  isFull: boolean;
  isOver: boolean;
  onToggleInCan: (taskId: string, targetEl?: HTMLElement) => void;
  onMoveToTomorrow?: () => void;
  onOpenAnyway?: () => void;
  overrideFull?: boolean;
}

export const HeroTaskChips: React.FC<HeroTaskChipsProps> = ({
  tasks,
  isFull,
  isOver,
  onToggleInCan,
  onMoveToTomorrow,
  onOpenAnyway,
  overrideFull = false,
}) => {
  const [lastToggledId, setLastToggledId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleChipClick = (task: TaskItem, e: React.MouseEvent<HTMLButtonElement>) => {
    if (!task.inCan && isFull && !overrideFull) {
      return; // blocked by full state
    }
    const targetEl = e.currentTarget;
    onToggleInCan(task.id, targetEl);
    setLastToggledId(task.id);
    const msg = task.inCan ? `Removed "${task.title}"` : `Added "${task.title}" (${task.cost} paint)`;
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const undoLastToggle = () => {
    if (lastToggledId) {
      onToggleInCan(lastToggledId);
      setLastToggledId(null);
      setToastMessage(null);
    }
  };

  const demoSubset = tasks.slice(0, 6);

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <span className="block text-[10px] font-mono font-bold uppercase text-neutral-600">
          Demo Tasks (Tap to Pack into Can)
        </span>
        {toastMessage && (
          <button
            type="button"
            onClick={undoLastToggle}
            className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#14101F] text-white text-[10px] font-mono rounded shadow hover:bg-neutral-800"
          >
            <Undo2 className="w-3 h-3" />
            <span>Undo (5s)</span>
          </button>
        )}
      </div>

      {/* Task Chips Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5" role="group" aria-label="Task items to feed can">
        {demoSubset.map((task, idx) => {
          const isPacked = task.inCan && !task.completed;
          const isBlocked = !isPacked && isFull && !overrideFull;
          return (
            <button
              key={task.id}
              id={idx === 0 ? 'first-demo-chip' : undefined}
              type="button"
              onClick={(e) => handleChipClick(task, e)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleChipClick(task, e as any);
                }
              }}
              disabled={isBlocked}
              aria-pressed={isPacked}
              className={`p-2 rounded-lg border-2 border-[#14101F] text-left transition-all flex items-center justify-between gap-2 min-h-[44px] ${
                isPacked
                  ? 'bg-[#B6FF3B] text-[#14101F] shadow-[2px_2px_0px_#14101F] font-bold'
                  : isBlocked
                  ? 'bg-neutral-100 opacity-60 cursor-not-allowed text-neutral-500'
                  : 'bg-white hover:bg-[#FFF6E5] text-[#14101F] shadow-[2px_2px_0px_#14101F]'
              }`}
            >
              <div className="min-w-0 flex-1">
                <span className="block text-[11px] font-body truncate leading-tight">
                  {task.title}
                </span>
                <span className="text-[10px] font-mono text-neutral-600">
                  {task.category}
                </span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <span className="px-1.5 py-0.5 rounded bg-white/80 border border-ink font-mono text-[10px] font-bold">
                  {task.cost} pt
                </span>
                <span className="w-5 h-5 rounded-full border border-ink flex items-center justify-center bg-white text-xs">
                  {isPacked ? <Check className="w-3 h-3 text-black" /> : <Plus className="w-3 h-3 text-black" />}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Full State Banner & Override */}
      {isFull && !overrideFull && (
        <div className="p-2.5 bg-[#FFD93D] border-2 border-[#14101F] rounded-lg shadow-[2px_2px_0px_#14101F] flex items-center justify-between gap-2 text-xs">
          <p className="font-body font-semibold text-[11px] text-[#14101F]">
            Full! The rest waits for tomorrow.
          </p>
          <button
            type="button"
            onClick={onOpenAnyway}
            className="px-2 py-1 bg-white border border-[#14101F] text-[10px] font-mono font-bold hover:bg-neutral-100 uppercase"
          >
            Open Anyway
          </button>
        </div>
      )}

      {/* Over Capacity Calm Helper */}
      {isOver && (
        <div className="p-2.5 bg-red-100 border-2 border-[#14101F] rounded-lg shadow-[2px_2px_0px_#14101F] flex items-center justify-between gap-2 text-xs">
          <p className="font-body font-semibold text-[11px] text-red-900">
            Too much for today?
          </p>
          <button
            type="button"
            onClick={onMoveToTomorrow}
            className="px-2 py-1 bg-[#14101F] text-white text-[10px] font-mono font-bold hover:bg-neutral-800 uppercase"
          >
            Move 1 to Tomorrow
          </button>
        </div>
      )}
    </div>
  );
};
