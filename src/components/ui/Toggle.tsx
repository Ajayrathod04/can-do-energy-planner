import React from 'react';
import clsx from 'clsx';

export interface ToggleProps {
  id?: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  id,
  label,
  checked,
  onChange,
  description,
  className,
}) => {
  const toggleId = id || `toggle-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={clsx('flex items-center justify-between gap-4 py-2', className)}>
      <div>
        <label htmlFor={toggleId} className="font-bold text-base text-[#111111] cursor-pointer">
          {label}
        </label>
        {description && <p className="text-xs text-[#555555]">{description}</p>}
      </div>
      <button
        type="button"
        role="switch"
        id={toggleId}
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={clsx(
          'relative inline-flex h-8 w-14 shrink-0 cursor-pointer border-[3px] border-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
          checked ? 'bg-[#00E599]' : 'bg-[#E5E5E5]'
        )}
      >
        <span
          className={clsx(
            'pointer-events-none inline-block h-6 w-6 border-2 border-[#111111] bg-white shadow-[1px_1px_0_#111111] transition-transform',
            checked ? 'translate-x-6' : 'translate-x-0'
          )}
        />
      </button>
    </div>
  );
};
