import React from 'react';

interface AppHeaderProps {
  onOpenShortcuts: () => void;
  onResetDemo: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ onOpenShortcuts, onResetDemo }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-[3px] border-[#111111] pb-6">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD93D] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0_#111111] text-xs font-bold uppercase mb-2">
          <span>★ Daily Energy Workbench</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
          CAN-DO WORKBENCH
        </h1>
        <p className="text-sm text-[#444444] font-medium mt-1">
          Your daily capacity is finite. Load what fits, then let tomorrow handle the rest.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={onOpenShortcuts}
          className="px-3 py-1.5 text-xs font-bold bg-white border-2 border-[#111111] shadow-[2px_2px_0_#111111] hover:bg-[#FFD93D]"
        >
          ⌨ Shortcuts (?)
        </button>
        <button
          onClick={onResetDemo}
          className="px-3 py-1.5 text-xs font-bold bg-white border-2 border-[#111111] shadow-[2px_2px_0_#111111] hover:bg-[#FF3D8B] hover:text-white"
        >
          ↺ Reset demo
        </button>
        <a
          href="#/"
          className="px-3 py-1.5 text-xs font-bold bg-[#FFD93D] border-2 border-[#111111] shadow-[2px_2px_0_#111111]"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
};
