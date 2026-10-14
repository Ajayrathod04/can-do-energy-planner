import React from 'react';
import { TaskItem } from '../data/demoTasks';
import { Check, Trash2, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { sound } from '../lib/sound';

interface TaskCardProps {
  task: TaskItem;
  inCan: boolean;
  onToggleInCan: (id: string) => void;
  onDelete: (id: string) => void;
  onComplete?: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  inCan,
  onToggleInCan,
  onDelete,
  onComplete,
}) => {
  return (
    <div
      className={`brutal-card p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        inCan ? 'bg-white' : 'bg-neutral-50 opacity-90'
      }`}
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className={inCan ? 'font-bold text-sm text-ink' : 'font-bold text-sm text-neutral-800'}>
            {task.title}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
          <span
            className={
              inCan
                ? 'px-2 py-0.5 border border-ink bg-amber-200 text-ink font-bold'
                : 'px-2 py-0.5 border border-ink bg-neutral-200 text-ink'
            }
          >
            {task.cost} {inCan ? (task.cost === 1 ? 'Paint Unit' : 'Paint Units') : 'Units'}
          </span>
          <span
            className={
              inCan
                ? 'bg-neutral-100 border border-neutral-400 px-1.5 py-0.5'
                : 'bg-white border border-neutral-300 px-1.5 py-0.5'
            }
          >
            {task.category}
          </span>
          {task.dueDate && (
            <span className={inCan ? 'text-neutral-600' : 'text-neutral-500'}>
              Due: {task.dueDate}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center">
        {inCan && onComplete && (
          <button
            onClick={() => onComplete(task.id)}
            className="brutal-btn px-2.5 py-1 text-xs bg-green-500 text-ink hover:bg-green-400"
            title="Complete task and spray graffiti tag onto The Wall"
            aria-label={`Complete task ${task.title} and tag The Wall`}
          >
            <Check className="w-3.5 h-3.5 stroke-[3]" />
            <span className="hidden sm:inline ml-1">Tag Wall</span>
          </button>
        )}

        <button
          onClick={() => {
            onToggleInCan(task.id);
            sound.playPop();
          }}
          className={
            inCan
              ? 'p-1.5 hover:bg-neutral-100 border border-ink text-neutral-700'
              : 'brutal-btn px-2.5 py-1 text-xs bg-paper text-ink hover:bg-neutral-100'
          }
          title={inCan ? 'Unpack from can back to backlog' : 'Pack into daily can'}
          aria-label={inCan ? `Unpack ${task.title} from can` : `Pack ${task.title} into can`}
        >
          {inCan ? (
            <ArrowDownRight className="w-4 h-4" />
          ) : (
            <>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
              <span className="ml-1">Add to Can</span>
            </>
          )}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="p-1.5 hover:bg-red-100 border border-ink text-neutral-500 hover:text-red-700"
          title="Delete task"
          aria-label={`Delete ${task.title}`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
