import React from 'react';
import clsx from 'clsx';

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  valueDisplay?: string | number;
  min?: number;
  max?: number;
  step?: number;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  valueDisplay,
  min = 1,
  max = 10,
  step = 1,
  value,
  onChange,
  className,
  id,
  ...props
}) => {
  const inputId = id || `slider-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={clsx('w-full space-y-2', className)}>
      <div className="flex items-center justify-between">
        <label htmlFor={inputId} className="font-bold text-sm text-[#111111]">
          {label}
        </label>
        {valueDisplay !== undefined && (
          <span className="font-display text-sm px-2.5 py-0.5 bg-[#FFD93D] border-2 border-[#111111] shadow-[2px_2px_0_#111111] text-[#111111]">
            {valueDisplay}
          </span>
        )}
      </div>
      <input
        type="range"
        id={inputId}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-3 bg-[#E5E5E5] border-2 border-[#111111] appearance-none cursor-pointer accent-[#FF6B2C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
        {...props}
      />
    </div>
  );
};
