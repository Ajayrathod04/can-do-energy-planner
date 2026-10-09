import React, { useState } from 'react';
import { useAppStore, selectActiveMode } from '../lib/store';
import { TaskItem } from '../data/demoTasks';
import { Plus, Check, Trash2, ArrowUpRight, ArrowDownRight, RefreshCw, CheckCircle2 } from 'lucide-react';
import { sound } from '../lib/sound';
import confetti from 'canvas-confetti';

interface TaskBoardProps {
  onCompleteTaskEffect?: (title: string) => void;
}

export const TaskBoard: React.FC<TaskBoardProps> = () => {
  const tasks = useAppStore(s => s.tasks);
  const addTask = useAppStore(s => s.addTask);
  const deleteTask = useAppStore(s => s.deleteTask);
  const toggleInCan = useAppStore(s => s.toggleInCan);
  const completeTask = useAppStore(s => s.completeTask);
  const resetDemo = useAppStore(s => s.resetDemo);
  const activeMode = useAppStore(selectActiveMode);

  // Form State
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCost, setNewCost] = useState(2);
  const [newCategory, setNewCategory] = useState<TaskItem['category']>('Academics');
  const [newDueDate, setNewDueDate] = useState('Today');

  const inCanTasks = tasks.filter(t => t.inCan && !t.completed);
  const backlogTasks = tasks.filter(t => !t.inCan && !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    addTask(newTitle.trim(), newCost, newCategory, newDueDate);
    setNewTitle('');
    setNewCost(2);
    setNewDueDate('Today');
    setIsAdding(false);
    sound.playPop();
  };

  const handleComplete = (id: string) => {
    completeTask(id);
    sound.playSpray(0.4);

    // Subtle celebration confetti burst
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

      {/* Add Task Drawer */}
      {isAdding && (
        <form onSubmit={handleCreate} className="brutal-card p-4 space-y-4 bg-yellow-50 border-3 border-ink animate-fadeIn">
          <h3 className="font-display text-lg uppercase">Add New Task</h3>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-6">
              <label htmlFor="task-title" className="block text-xs font-mono font-bold uppercase mb-1">
                Task Description
              </label>
              <input
                id="task-title"
                type="text"
                placeholder="e.g. Finish Data Structures Lab"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
                className="w-full p-2 bg-white border-2 border-ink font-body font-bold text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="task-cost" className="block text-xs font-mono font-bold uppercase mb-1">
                Cost: {newCost} Units
              </label>
              <input
                id="task-cost"
                type="range"
                min="1"
                max="5"
                value={newCost}
                onChange={(e) => setNewCost(Number(e.target.value))}
                className="w-full accent-modeGrind h-2 bg-neutral-200 border border-ink"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="task-category" className="block text-xs font-mono font-bold uppercase mb-1">
                Category
              </label>
              <select
                id="task-category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as TaskItem['category'])}
                className="w-full p-2 bg-white border-2 border-ink text-xs font-bold"
              >
                <option value="Academics">Academics</option>
                <option value="Life">Life</option>
                <option value="Team">Team</option>
                <option value="Personal">Personal</option>
                <option value="Reading">Reading</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="task-due-date" className="block text-xs font-mono font-bold uppercase mb-1">
                Due Date
              </label>
              <select
                id="task-due-date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
                className="w-full p-2 bg-white border-2 border-ink text-xs font-bold"
              >
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="Later this week">Later this week</option>
                <option value="Next week">Next week</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="brutal-btn px-4 py-1.5 text-xs bg-white text-ink"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="brutal-btn px-5 py-1.5 text-xs bg-ink text-paper"
            >
              Allocate Paint
            </button>
          </div>
        </form>
      )}

      {/* Task Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column 1: Packed in Can (Active for Today) */}
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
              {inCanTasks.map(task => (
                <div
                  key={task.id}
                  className="brutal-card p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-ink">{task.title}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                      <span className="px-2 py-0.5 border border-ink bg-amber-200 text-ink font-bold">
                        {task.cost} Paint {task.cost === 1 ? 'Unit' : 'Units'}
                      </span>
                      <span className="bg-neutral-100 border border-neutral-400 px-1.5 py-0.5">
                        {task.category}
                      </span>
                      {task.dueDate && (
                        <span className="text-neutral-600">Due: {task.dueDate}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    {/* Complete & Tag Button */}
                    <button
                      onClick={() => handleComplete(task.id)}
                      className="brutal-btn px-2.5 py-1 text-xs bg-green-500 text-ink hover:bg-green-400"
                      title="Complete task and spray graffiti tag onto The Wall"
                      aria-label={`Complete task ${task.title} and tag The Wall`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span className="hidden sm:inline ml-1">Tag Wall</span>
                    </button>

                    {/* Unpack Button */}
                    <button
                      onClick={() => {
                        toggleInCan(task.id);
                        sound.playPop();
                      }}
                      className="p-1.5 hover:bg-neutral-100 border border-ink text-neutral-700"
                      title="Unpack from can back to backlog"
                      aria-label={`Unpack ${task.title} from can`}
                    >
                      <ArrowDownRight className="w-4 h-4" />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="p-1.5 hover:bg-red-100 border border-ink text-neutral-500 hover:text-red-700"
                      title="Delete task"
                      aria-label={`Delete ${task.title}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Column 2: Backlog / Unpacked */}
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
              {backlogTasks.map(task => (
                <div
                  key={task.id}
                  className="brutal-card p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-neutral-50 opacity-90"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-neutral-800">{task.title}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                      <span className="px-2 py-0.5 border border-ink bg-neutral-200 text-ink">
                        {task.cost} Units
                      </span>
                      <span className="bg-white border border-neutral-300 px-1.5 py-0.5">
                        {task.category}
                      </span>
                      {task.dueDate && (
                        <span className="text-neutral-500">Due: {task.dueDate}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    {/* Add to Can Button */}
                    <button
                      onClick={() => {
                        toggleInCan(task.id);
                        sound.playPop();
                      }}
                      className="brutal-btn px-2.5 py-1 text-xs bg-paper text-ink hover:bg-neutral-100"
                      title="Pack into daily can"
                      aria-label={`Pack ${task.title} into can`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                      <span className="ml-1">Add to Can</span>
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="p-1.5 hover:bg-red-100 border border-ink text-neutral-500 hover:text-red-700"
                      title="Delete task"
                      aria-label={`Delete ${task.title}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
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
            {completedTasks.map(t => (
              <span key={t.id} className="text-xs bg-green-100 border border-green-700 px-2.5 py-1 font-mono line-through text-neutral-700">
                {t.title} ({t.cost} units)
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
