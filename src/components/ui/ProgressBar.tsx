import React from 'react';
import clsx from 'clsx';

export interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  fillColor?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  label = 'Capacity Progress',
  fillColor = '#FF6B2C',
  className,
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className={clsx('w-full space-y-1', className)}>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        className="w-full h-6 bg-white border-[3px] border-[#111111] shadow-[2px_2px_0_#111111] overflow-hidden p-0.5"
      >
        <div
          className="h-full border border-[#111111] transition-all duration-300"
          style={{ width: `${percentage}%`, backgroundColor: fillColor }}
        />
      </div>
    </div>
  );
};
