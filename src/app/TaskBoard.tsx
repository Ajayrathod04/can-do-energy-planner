import React, { useState } from 'react';
import { useAppStore, selectActiveMode } from '../lib/store';
import { Plus, RefreshCw, CheckCircle2 } from 'lucide-react';
import { sound } from '../lib/sound';
import confetti from 'canvas-confetti';
import { TaskForm } from './TaskForm';
import { TaskCard } from './TaskCard';

interface TaskBoardProps {
  onCompleteTaskEffect?: (title: string) => void;
}

export const TaskBoard: React.FC<TaskBoardProps> = () => {
  const tasks = useAppStore((s) => s.tasks);
  const addTask = useAppStore((s) => s.addTask);
  const deleteTask = useAppStore((s) => s.deleteTask);
  const toggleInCan = useAppStore((s) => s.toggleInCan);
  const completeTask = useAppStore((s) => s.completeTask);
  const resetDemo = useAppStore((s) => s.resetDemo);
  const activeMode = useAppStore(selectActiveMode);

  const [isAdding, setIsAdding] = useState(false);

  const inCanTasks = tasks.filter((t) => t.inCan && !t.completed);
  const backlogTasks = tasks.filter((t) => !t.inCan && !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  const handleComplete = (id: string) => {
    completeTask(id);
    sound.playSpray(0.4);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.7 },
      colors: [activeMode.accentColor, '#FFD93D', '#F4EFE6'],
    });
  };

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-3">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600">
            Step 3 // Paint Allocation Board
          </span>
          <h2 className="font-display text-xl sm:text-2xl uppercase">Tasks & Paint Units</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              resetDemo();
              sound.playPop();
            }}
            className="brutal-btn px-3 py-1.5 text-xs font-bold bg-neutral-100 flex items-center gap-1.5"
            aria-label="Reset to default student demo tasks"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo Day</span>
          </button>

          <button
            onClick={() => setIsAdding(!isAdding)}
            className="brutal-btn px-3.5 py-1.5 text-xs font-bold bg-modeGrind text-ink flex items-center gap-1.5"
            aria-label="Add a new task"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>New Task</span>
          </button>
        </div>
      </div>

      {isAdding && (
        <TaskForm
          onAdd={(title, cost, category, dueDate) => {
            addTask(title, cost, category, dueDate);
            setIsAdding(false);
          }}
          onCancel={() => setIsAdding(false)}
        />
      )}

      {/* Task Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column 1: Packed in Can */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b-2 border-ink pb-1">
            <h3 className="font-display text-base uppercase flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-modeGrind inline-block"></span>
              Packed in Today’s Can ({inCanTasks.length})
            </h3>
            <span className="text-xs font-mono font-bold text-neutral-600">
              {inCanTasks.reduce((acc, t) => acc + t.cost, 0)} Units Total
            </span>
          </div>

          {inCanTasks.length === 0 ? (
            <div className="brutal-card p-6 text-center text-neutral-600 font-mono text-xs border-dashed">
              Your can is empty. Add tasks from the backlog below or click "Reset Demo Day".
            </div>
          ) : (
            <div className="space-y-2.5">
              {inCanTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  inCan={true}
                  onToggleInCan={toggleInCan}
                  onDelete={deleteTask}
                  onComplete={handleComplete}
                />
              ))}
            </div>
          )}
        </div>

        {/* Column 2: Backlog */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b-2 border-ink pb-1">
            <h3 className="font-display text-base uppercase flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-neutral-400 inline-block"></span>
              Backlog / Staged for Later ({backlogTasks.length})
            </h3>
            <span className="text-xs font-mono font-bold text-neutral-600">
              Not Draining Pressure
            </span>
          </div>

          {backlogTasks.length === 0 ? (
            <div className="brutal-card p-6 text-center text-neutral-600 font-mono text-xs border-dashed">
              No tasks waiting in backlog. Create a task or uncheck from can.
            </div>
          ) : (
            <div className="space-y-2.5">
              {backlogTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  inCan={false}
                  onToggleInCan={toggleInCan}
                  onDelete={deleteTask}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Completed Section */}
      {completedTasks.length > 0 && (
        <div className="pt-4 border-t-2 border-ink space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-neutral-600">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Completed Today ({completedTasks.length}) — Stenciled on The Wall</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {completedTasks.map((t) => (
              <span
                key={t.id}
                className="text-xs bg-green-100 border border-green-700 px-2.5 py-1 font-mono line-through text-neutral-700"
              >
                {t.title} ({t.cost} units)
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
