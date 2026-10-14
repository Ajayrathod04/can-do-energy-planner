import React from 'react';

interface StageTopBarProps {
  onResetDemo: () => void;
}

export const StageTopBar: React.FC<StageTopBarProps> = ({ onResetDemo }) => {
  return (
    <div className="w-full max-w-5xl flex items-center justify-between z-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-[#14101F] shadow-[2px_2px_0px_#14101F] rounded-full font-mono text-xs font-bold text-[#14101F]">
        <span className="w-2 h-2 rounded-full bg-[#B6FF3B] border border-[#14101F] animate-pulse" />
        <span>LIVE DEMO · no signup</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onResetDemo}
          className="text-xs font-mono font-bold text-[#666666] hover:text-[#14101F] underline min-h-[44px] px-2"
        >
          Reset demo
        </button>
        <a
          href="#/app"
          className="min-h-[44px] px-3.5 py-1.5 bg-[#FFD93D] border-2 border-[#14101F] shadow-[2px_2px_0px_#14101F] font-display text-xs uppercase text-[#14101F] hover:bg-yellow-400 flex items-center rounded"
        >
          Open Full Planner →
        </a>
      </div>
    </div>
  );
};
