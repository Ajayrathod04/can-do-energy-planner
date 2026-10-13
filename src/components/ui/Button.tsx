import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'brutal' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isFullWidth?: boolean;
}

/**
 * Reusable accessible Button with neo-brutalist interaction states.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'brutal',
  size = 'md',
  isFullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold tracking-wide transition-all select-none rounded-none focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'min-h-[40px] px-4 py-1.5 text-sm gap-1.5',
    md: 'min-h-[48px] px-6 py-2.5 text-base gap-2',
    lg: 'min-h-[56px] px-8 py-3.5 text-lg gap-3',
  }[size];

  const variantStyles = {
    brutal:
      'bg-[#FFD93D] text-[#111111] border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#111111]',
    primary:
      'bg-[#FF6B2C] text-[#111111] border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] hover:shadow-[6px_6px_0_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#111111]',
    secondary:
      'bg-[#FFFFFF] text-[#111111] border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] hover:bg-[#FFF6E5] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#111111]',
    outline:
      'bg-transparent text-[#111111] border-[3px] border-[#111111] hover:bg-[#111111] hover:text-[#FFF6E5]',
    ghost: 'bg-transparent text-[#111111] hover:bg-black/5 active:bg-black/10',
  }[variant];

  return (
    <button
      className={clsx(baseStyles, sizeStyles, variantStyles, isFullWidth && 'w-full', className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
