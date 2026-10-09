import React from 'react';
import { useAppStore, selectCanTotalCost } from '../lib/store';
import { AlertCircle, Calendar, X, ShieldCheck } from 'lucide-react';
import { sound } from '../lib/sound';

interface OverflowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OverflowModal: React.FC<OverflowModalProps> = ({ isOpen, onClose }) => {
  const capacity = useAppStore(s => s.calculatedCapacity);
  const totalCost = useAppStore(selectCanTotalCost);
  const tasks = useAppStore(s => s.tasks);
  const moveTaskToTomorrow = useAppStore(s => s.moveTaskToTomorrow);

  if (!isOpen) return null;

  const isOverflow = totalCost > capacity;
  const overflowUnits = Math.max(0, totalCost - capacity);

  // Identify candidate tasks to defer:
  // Sort candidates: (1) Due date not "Today" first, then (2) highest paint units
  const candidateTasks = tasks
    .filter(t => t.inCan && !t.completed)
    .sort((a, b) => {
      const aIsToday = a.dueDate?.toLowerCase() === 'today';
      const bIsToday = b.dueDate?.toLowerCase() === 'today';
      if (aIsToday && !bIsToday) return 1;
      if (!aIsToday && bIsToday) return -1;
      return b.cost - a.cost; // Larger costs first
    });

  const handleDefer = (id: string) => {
    moveTaskToTomorrow(id);
    sound.playPop();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="overflow-modal-title"
      className="fixed inset-0 z-50 bg-ink/80 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
    >
      <div className="brutal-card max-w-xl w-full p-6 space-y-5 bg-paper border-3 border-ink shadow-[8px_8px_0px_#0A0A0A]">
        {/* Header */}
        <div className="flex items-center justify-between border-b-3 border-ink pb-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-modeGrind" />
            <h3 id="overflow-modal-title" className="font-display text-2xl uppercase">
              {isOverflow ? `Volume Exceeded (+${overflowUnits} Units)` : 'Energy Balance Restored'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-200 border-2 border-ink"
            aria-label="Close overflow advisor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Guilt-Free Philosophy Message */}
        <div className="p-4 bg-orange-100 border-2 border-ink space-y-1">
          <p className="font-tag text-lg text-modeGrind tracking-wide">
            "Physics does not negotiate."
          </p>
          <p className="font-body text-xs text-neutral-800 leading-relaxed">
            Your spray can holds exactly <strong>{capacity} paint units</strong> of cognitive focus today.
            Trying to force {totalCost} units guarantees burnout, diluted quality, and late-night exhaustion.
            Postponing work is not giving up—it is deliberate curation.
          </p>
        </div>

        {/* Suggested Deferrals */}
        {isOverflow ? (
          <div className="space-y-3 font-body">
            <span className="text-xs font-mono font-bold uppercase text-neutral-600 block">
              Recommended Deferrals (Prioritized by cost & due date):
            </span>

            <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
              {candidateTasks.map(task => (
                <div
                  key={task.id}
                  className="p-3 bg-white border-2 border-ink flex items-center justify-between gap-3 shadow-[2px_2px_0px_#0A0A0A]"
                >
                  <div className="space-y-0.5">
                    <p className="font-bold text-sm text-ink">{task.title}</p>
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
                      <span className="bg-amber-100 border border-ink px-1.5 py-0.5 font-bold">
                        {task.cost} Paint Units
                      </span>
                      <span>Due: {task.dueDate || 'Flexible'}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDefer(task.id)}
                    className="brutal-btn px-3 py-1.5 text-xs bg-modeGrind text-ink flex items-center gap-1 font-bold whitespace-nowrap hover:bg-orange-500"
                    aria-label={`Move ${task.title} to tomorrow`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Move to Tomorrow</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 bg-green-100 border-2 border-ink text-green-900 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-green-700 flex-shrink-0" />
            <div>
              <p className="font-display text-sm uppercase">Pressure in Safety Margin</p>
              <p className="text-xs font-body">
                All currently packed tasks fit safely inside your {capacity} paint units budget.
              </p>
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="flex justify-end pt-2 border-t-2 border-ink">
          <button
            onClick={onClose}
            className="brutal-btn px-5 py-2 bg-ink text-paper text-xs font-bold"
          >
            Done Adjusting
          </button>
        </div>
      </div>
    </div>
  );
};
