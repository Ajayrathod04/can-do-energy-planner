import React, { useState } from 'react';
import clsx from 'clsx';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTabId, className }) => {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);

  return (
    <div className={clsx('w-full', className)}>
      <div role="tablist" className="flex border-b-[3px] border-[#111111] gap-2 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'px-6 py-3 font-display text-sm md:text-base border-t-[3px] border-x-[3px] border-[#111111] transition-all cursor-pointer select-none',
                isActive
                  ? 'bg-[#FFD93D] text-[#111111] translate-y-[3px] shadow-[0px_4px_0_#FFD93D]'
                  : 'bg-white text-[#555555] hover:bg-[#FFF6E5]'
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="p-6 bg-white border-x-[3px] border-b-[3px] border-[#111111] shadow-[4px_4px_0_#111111]"
      >
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
};
