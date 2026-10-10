import React, { useState } from 'react';
import clsx from 'clsx';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={clsx('space-y-4 w-full', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="border-[3px] border-[#111111] bg-white shadow-[4px_4px_0_#111111]"
          >
            <button
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-btn-${item.id}`}
              className="w-full flex items-center justify-between p-5 text-left font-display text-lg text-[#111111] bg-white hover:bg-[#FFF6E5] transition-colors cursor-pointer select-none"
            >
              <span>{item.title}</span>
              <span
                className={clsx(
                  'w-8 h-8 flex items-center justify-center font-bold border-2 border-[#111111] bg-[#FFD93D] shadow-[2px_2px_0_#111111] transition-transform duration-200',
                  isOpen ? 'rotate-45 bg-[#FF3D8B]' : 'rotate-0'
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                role="region"
                aria-labelledby={`accordion-btn-${item.id}`}
                className="p-5 pt-0 text-base leading-relaxed text-[#333333] border-t-2 border-[#111111]"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
