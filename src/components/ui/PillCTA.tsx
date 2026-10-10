import React from 'react';
import clsx from 'clsx';

export interface PillCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  accentColor?: string;
}

export const PillCTA: React.FC<PillCTAProps> = ({
  children,
  accentColor = '#FFD93D',
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-display text-lg text-[#111111]',
        'border-[3px] border-[#111111] shadow-[4px_4px_0_#111111]',
        'hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#111111]',
        'active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#111111]',
        'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-black focus-visible:ring-offset-2',
        'transition-all duration-150 select-none cursor-pointer',
        className
      )}
      style={{ backgroundColor: accentColor }}
      {...props}
    >
      {children}
    </button>
  );
};
