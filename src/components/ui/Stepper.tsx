import React from 'react';
import clsx from 'clsx';

export interface Step {
  number: number;
  label: string;
  sublabel?: string;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep, className }) => {
  return (
    <nav aria-label="Progress Stepper" className={clsx('w-full py-4', className)}>
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {steps.map((step) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <li
              key={step.number}
              className={clsx(
                'flex items-center gap-3 p-3 border-[3px] border-[#111111] transition-all',
                isCurrent && 'bg-[#FFD93D] shadow-[4px_4px_0_#111111] scale-[1.02]',
                isCompleted && 'bg-[#00E599]',
                !isCurrent && !isCompleted && 'bg-white'
              )}
              aria-current={isCurrent ? 'step' : undefined}
            >
              <span
                className={clsx(
                  'w-8 h-8 flex items-center justify-center font-display text-sm border-2 border-[#111111] bg-white shadow-[2px_2px_0_#111111]'
                )}
              >
                {isCompleted ? '✓' : step.number}
              </span>
              <div>
                <p className="font-bold text-sm text-[#111111] leading-tight">{step.label}</p>
                {step.sublabel && (
                  <p className="text-xs text-neutral-700 font-medium">{step.sublabel}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
