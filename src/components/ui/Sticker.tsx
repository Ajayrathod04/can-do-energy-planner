import React from 'react';
import clsx from 'clsx';

export interface StickerProps extends React.HTMLAttributes<HTMLDivElement> {
  rotation?: number;
  bgColor?: string;
  isInteractive?: boolean;
}

export const Sticker: React.FC<StickerProps> = ({
  children,
  rotation = -2,
  bgColor = '#FFD93D',
  isInteractive = false,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'inline-block px-4 py-2 font-display text-base text-[#111111]',
        'border-[3px] border-[#111111] shadow-[4px_4px_0_#111111]',
        'ring-2 ring-white select-none transition-transform',
        isInteractive && 'cursor-pointer hover:scale-105 active:scale-95',
        className
      )}
      style={{
        backgroundColor: bgColor,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
