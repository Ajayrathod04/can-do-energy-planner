import React from 'react';
import clsx from 'clsx';

export interface MarqueeProps {
  text?: string;
  bgColor?: string;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  text = 'CAN-DO • DON’T OVERFILL • REST COUNTS • PAINT LEGAL WALLS ONLY • SPEND YOUR DAY ON PURPOSE • ',
  bgColor = '#FFD93D',
  className,
}) => {
  return (
    <div
      className={clsx(
        'w-full overflow-hidden border-y-[3px] border-[#111111] py-2.5 font-display text-sm tracking-wider uppercase select-none text-[#111111]',
        className
      )}
      style={{ backgroundColor: bgColor }}
      aria-label="Announcement ticker"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
};
