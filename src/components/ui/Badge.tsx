import React from 'react';
import clsx from 'clsx';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'pill' | 'starburst' | 'ticket';
  color?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'pill',
  color = '#FFD93D',
  className,
  style,
  ...props
}) => {
  if (variant === 'starburst') {
    return (
      <span
        className={clsx(
          'inline-flex items-center justify-center font-display text-xs uppercase px-3 py-1.5',
          'border-[2px] border-[#111111] shadow-[2px_2px_0_#111111] text-[#111111] rotate-[-3deg]',
          className
        )}
        style={{ backgroundColor: color, ...style }}
        {...props}
      >
        ★ {children} ★
      </span>
    );
  }

  return (
    <span
      className={clsx(
        'inline-flex items-center font-bold text-xs uppercase px-2.5 py-1',
        'border-[2px] border-[#111111] shadow-[2px_2px_0_#111111] text-[#111111]',
        variant === 'pill' ? 'rounded-full' : 'rounded-none',
        className
      )}
      style={{ backgroundColor: color, ...style }}
      {...props}
    >
      {children}
    </span>
  );
};
