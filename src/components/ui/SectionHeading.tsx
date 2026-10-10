import React from 'react';
import clsx from 'clsx';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}) => {
  return (
    <div
      className={clsx(
        'space-y-3 mb-8 md:mb-12',
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div className="inline-block">
          <span className="font-tag text-sm md:text-base px-3 py-1 bg-[#FFD93D] border-2 border-[#111111] shadow-[2px_2px_0_#111111] text-[#111111] rotate-[-1deg] inline-block">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-xl text-[#444444] font-medium leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
