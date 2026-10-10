import React, { useState } from 'react';
import { Card, SectionHeading, Slider, Dialog, Button } from '@/components/ui';
import { CanoMascot } from '@/components/CanoMascot';
import { computeDailyCapacity } from '@/lib/store';
import clsx from 'clsx';

interface MicroTask {
  id: string;
  title: string;
  cost: number;
}

const SAMPLE_TASKS: MicroTask[] = [
  { id: 't1', title: 'Math problem set', cost: 3 },
  { id: 't2', title: 'Read bio chapter', cost: 2 },
  { id: 't3', title: 'Reply to emails', cost: 1 },
  { id: 't4', title: 'Prep lab report', cost: 3 },
  { id: 't5', title: 'Laundry & dishes', cost: 1 },
  { id: 't6', title: 'Study for midterm', cost: 4 },
];

export const L3TryIt: React.FC = () => {
  const [sleep, setSleep] = useState<number>(7);
  const [energy, setEnergy] = useState<number>(3);
  const [stress, setStress] = useState<number>(3);
  const [selectedTaskIds, setSelectedTaskIds] = useState<string[]>(['t1', 't2']);
  const [isFormulaOpen, setIsFormulaOpen] = useState<boolean>(false);

  const capacity = computeDailyCapacity(sleep, energy, stress, 1.0);
  const totalCost = selectedTaskIds.reduce((sum, id) => {
    const task = SAMPLE_TASKS.find((t) => t.id === id);
    return sum + (task ? task.cost : 0);
  }, 0);

  const isOverflow = totalCost > capacity;
  const percentage = Math.min(100, Math.round((totalCost / capacity) * 100));

  const toggleTask = (id: string) => {
    setSelectedTaskIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="try-it" className="py-20 bg-[#FFF6E5] border-b-[3px] border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="INSTANT MICRO-DEMO"
          title="Try it: your day in paint"
          description="Test the capacity engine right here in 30 seconds. No login, no setup."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Check-in Sliders */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="space-y-6">
              <h3 className="font-display text-xl text-[#111111]">1. How did you sleep & feel?</h3>

              <Slider
                label="Hours of Sleep"
                min={4}
                max={10}
                value={sleep}
                valueDisplay={`${sleep} hrs`}
                onChange={(e) => setSleep(Number(e.target.value))}
              />

              <Slider
                label="Energy Level (1=Tired, 5=Rested)"
                min={1}
                max={5}
                value={energy}
                valueDisplay={`${energy}/5`}
                onChange={(e) => setEnergy(Number(e.target.value))}
              />

              <Slider
                label="Mental Stress (1=Calm, 5=High)"
                min={1}
                max={5}
                value={stress}
                valueDisplay={`${stress}/5`}
                onChange={(e) => setStress(Number(e.target.value))}
              />

              <div className="pt-2 flex items-center justify-between border-t-2 border-[#111111]">
                <div>
                  <p className="text-xs font-bold text-[#555555]">Calculated Paint Capacity:</p>
                  <p className="font-display text-3xl text-[#FF6B2C]">{capacity} paint</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsFormulaOpen(true)}
                  className="font-bold text-xs underline text-[#111111] hover:text-[#FF3D8B]"
                >
                  How is this calculated?
                </button>
              </div>
            </Card>
          </div>

          {/* Right Column: Tappable Tasks & Live Can Fill */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl text-[#111111]">
                  2. Tap tasks to fit into today’s can
                </h3>
                <span className="font-mono text-sm font-bold px-3 py-1 bg-white border-2 border-[#111111] shadow-[2px_2px_0_#111111]">
                  Used: {totalCost} / {capacity} paint
                </span>
              </div>

              {/* Tappable Task Stickers */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SAMPLE_TASKS.map((task) => {
                  const isSelected = selectedTaskIds.includes(task.id);
                  return (
                    <button
                      key={task.id}
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      className={clsx(
                        'p-3 text-left border-[3px] border-[#111111] transition-all cursor-pointer select-none font-body',
                        isSelected
                          ? 'bg-[#FFD93D] shadow-[4px_4px_0_#111111] translate-x-[-1px] translate-y-[-1px]'
                          : 'bg-white shadow-[2px_2px_0_#111111] opacity-75 hover:opacity-100'
                      )}
                    >
                      <span className="font-bold text-sm block leading-snug">{task.title}</span>
                      <span className="font-mono text-xs font-bold text-[#555555] mt-1 inline-block">
                        {task.cost} paint
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Live Can Fill Gauge */}
              <div className="space-y-2 pt-2 border-t-2 border-[#111111]">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>CAN FILL STATUS</span>
                  <span className={isOverflow ? 'text-[#FF3D8B]' : 'text-[#111111]'}>
                    {percentage}% {isOverflow && '(OVERLOAD!)'}
                  </span>
                </div>
                <div className="h-6 w-full bg-white border-[3px] border-[#111111] shadow-[2px_2px_0_#111111] overflow-hidden p-0.5">
                  <div
                    className={clsx(
                      'h-full transition-all duration-300',
                      isOverflow ? 'bg-[#FF3D8B]' : 'bg-[#00E599]'
                    )}
                    style={{ width: `${Math.min(100, percentage)}%` }}
                  />
                </div>
              </div>

              {/* Overflow Splat & Cano Mascot Speech Bubble */}
              {isOverflow ? (
                <div className="flex items-center gap-4 p-4 bg-[#FF3D8B]/20 border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] rotate-[-1deg] animate-in fade-in">
                  <CanoMascot pose="full" size={70} />
                  <div>
                    <p className="font-display text-base text-[#111111]">
                      “Can’s full! Save that for tomorrow.”
                    </p>
                    <p className="text-xs text-[#333333] font-medium mt-0.5">
                      You are {totalCost - capacity} paint over capacity. No guilt—untap a task to balance your day.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4 p-3 bg-[#00E599]/20 border-2 border-[#111111]">
                  <CanoMascot pose="happy" size={50} />
                  <p className="font-body text-xs md:text-sm font-bold text-[#111111]">
                    Healthy volume! You have {capacity - totalCost} paint remaining for rest or small tasks.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>

      {/* Formula Explanation Dialog */}
      <Dialog
        isOpen={isFormulaOpen}
        onClose={() => setIsFormulaOpen(false)}
        title="The Scientific Capacity Formula"
      >
        <div className="space-y-4 text-sm leading-relaxed text-[#222222]">
          <p>
            CAN-DO computes your daily capacity based on physiological recovery research:
          </p>
          <div className="p-3 bg-[#FFF6E5] border-2 border-[#111111] font-mono text-xs">
            Capacity = Math.round(Math.min(16, Math.max(4, 4 + Sleep × 0.9 + (Energy - 3) × 1.2 - (Stress - 3) × 0.8)))
          </div>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#444444]">
            <li><strong>Sleep:</strong> Every hour contributes 0.9 units of neural stamina.</li>
            <li><strong>Energy:</strong> High subjective readiness multiplies daily cognitive reserve.</li>
            <li><strong>Stress:</strong> Cortisol load reduces working memory bandwidth by up to 1.6 units.</li>
            <li><strong>Hard Limits:</strong> Bounded between 4 paint (rest day) and 16 paint (peak flow).</li>
          </ul>
          <Button onClick={() => setIsFormulaOpen(false)} variant="brutal" size="sm" isFullWidth>
            Got it, close
          </Button>
        </div>
      </Dialog>
    </section>
  );
};
