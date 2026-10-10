import React from 'react';
import clsx from 'clsx';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  color = '#B6FF3B',
  className,
  style,
  ...props
}) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-tag text-sm px-3 py-1',
        'border-[2px] border-[#111111] shadow-[2px_2px_0_#111111] text-[#111111] rotate-[1deg]',
        className
      )}
      style={{ backgroundColor: color, ...style }}
      {...props}
    >
      {children}
    </span>
  );
};
