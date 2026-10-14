import React from 'react';
import { TaskItem } from '../../data/demoTasks';
import { sound } from '../../lib/sound';

interface StageFeedingTrayProps {
  tasks: TaskItem[];
  onFeed: (taskId: string) => void;
  onUnfeed: (taskId: string) => void;
}

export const StageFeedingTray: React.FC<StageFeedingTrayProps> = ({
  tasks,
  onFeed,
  onUnfeed,
}) => {
  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3 z-30">
      <div className="flex items-center justify-between px-2">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#14101F]">
          DEMO-DAY TASK TOKENS (Tap button or drag to Cano)
        </span>
      </div>

      {/* Horizontal Tray on Mobile / Grid on Desktop */}
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-3 overflow-x-auto pb-3 sm:pb-0 px-2 scrollbar-thin">
        {tasks.map((task) => {
          const isPacked = task.inCan && !task.completed;
          return (
            <div
              key={task.id}
              draggable={!isPacked}
              onDragStart={(e) => handleDragStart(e, task.id)}
              className={`flex-shrink-0 w-64 sm:w-auto p-3.5 border-[3px] border-[#14101F] rounded-xl flex flex-col justify-between gap-3 transition-all ${
                isPacked
                  ? 'bg-[#B6FF3B] shadow-[2px_2px_0px_#14101F] opacity-90'
                  : 'bg-white shadow-[4px_4px_0px_#14101F] hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-display text-sm text-[#14101F] leading-snug">
                  {task.title}
                </span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#FFD93D] border-2 border-[#14101F] rounded whitespace-nowrap">
                  {task.cost} {task.cost === 1 ? 'paint' : 'paint'}
                </span>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-[#14101F]/20">
                <span className="font-mono text-[10px] text-[#666666]">
                  {task.category}
                </span>

                {isPacked ? (
                  <button
                    type="button"
                    onClick={() => {
                      onUnfeed(task.id);
                      sound.playPop();
                    }}
                    className="min-h-[44px] px-3 py-1 bg-white border-2 border-[#14101F] text-xs font-mono font-bold hover:bg-neutral-100 rounded"
                    aria-label={`Unpack ${task.title} from Cano`}
                  >
                    Unpack ✕
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      onFeed(task.id);
                      sound.playPop();
                    }}
                    className="min-h-[44px] px-3 py-1 bg-[#FF6B2C] text-white border-2 border-[#14101F] text-xs font-display uppercase hover:bg-orange-600 active:scale-95 shadow-[2px_2px_0px_#14101F] rounded"
                    aria-label={`Feed ${task.title} to Cano`}
                  >
                    Feed Cano 🛢️
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
