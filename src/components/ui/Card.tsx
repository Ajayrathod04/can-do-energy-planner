import React from 'react';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'flat' | 'elevated' | 'interactive';
  hasTape?: boolean;
  tapeColor?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  hasTape = false,
  tapeColor = '#FFD93D',
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'relative bg-white text-[#111111] p-6 border-[3px] border-[#111111]',
        variant === 'elevated' && 'shadow-[4px_4px_0_#111111]',
        variant === 'interactive' &&
          'shadow-[4px_4px_0_#111111] hover:shadow-[6px_6px_0_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer',
        className
      )}
      {...props}
    >
      {hasTape && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 border border-black/20 opacity-90 rotate-[-2deg] pointer-events-none"
          style={{ backgroundColor: tapeColor }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
};
