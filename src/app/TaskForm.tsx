import React, { useState } from 'react';
import { TaskItem } from '../data/demoTasks';
import { sound } from '../lib/sound';

interface TaskFormProps {
  onAdd: (title: string, cost: number, category: TaskItem['category'], dueDate: string) => void;
  onCancel: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAdd, onCancel }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newCost, setNewCost] = useState(2);
  const [newCategory, setNewCategory] = useState<TaskItem['category']>('Academics');
  const [newDueDate, setNewDueDate] = useState('Today');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    onAdd(newTitle.trim(), newCost, newCategory, newDueDate);
    setNewTitle('');
    setNewCost(2);
    setNewDueDate('Today');
    sound.playPop();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="brutal-card p-4 space-y-4 bg-yellow-50 border-3 border-ink animate-fadeIn"
    >
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
          onClick={onCancel}
          className="brutal-btn px-4 py-1.5 text-xs bg-white text-ink"
        >
          Cancel
        </button>
        <button type="submit" className="brutal-btn px-5 py-1.5 text-xs bg-ink text-paper">
          Allocate Paint
        </button>
      </div>
    </form>
  );
};
