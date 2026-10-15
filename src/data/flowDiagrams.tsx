import React from 'react';

export const FlowDemoSvg: React.FC = () => (
  <svg viewBox="0 0 680 140" className="w-full h-auto bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] p-4" aria-label="First-time Demo Flow Diagram">
    <rect x="10" y="40" width="130" height="60" rx="8" fill="#FFF6E5" stroke="#14101F" strokeWidth="2.5" />
    <text x="75" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Wake Can</text>
    <text x="75" y="84" textAnchor="middle" fontSize="10" fill="#666" fontFamily="Space Grotesk">Start In Hero</text>

    <line x1="140" y1="70" x2="180" y2="70" stroke="#14101F" strokeWidth="2.5" markerEnd="url(#arrow)" />

    <rect x="180" y="40" width="130" height="60" rx="8" fill="#FFF6E5" stroke="#14101F" strokeWidth="2.5" />
    <text x="245" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Check-In</text>
    <text x="245" y="84" textAnchor="middle" fontSize="10" fill="#666" fontFamily="Space Grotesk">Sleep + Energy</text>

    <line x1="310" y1="70" x2="350" y2="70" stroke="#14101F" strokeWidth="2.5" markerEnd="url(#arrow)" />

    <rect x="350" y="40" width="130" height="60" rx="8" fill="#FFF6E5" stroke="#14101F" strokeWidth="2.5" />
    <text x="415" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Feed Tokens</text>
    <text x="415" y="84" textAnchor="middle" fontSize="10" fill="#666" fontFamily="Space Grotesk">Fill Liquid</text>

    <line x1="480" y1="70" x2="520" y2="70" stroke="#14101F" strokeWidth="2.5" markerEnd="url(#arrow)" />

    <rect x="520" y="40" width="140" height="60" rx="8" fill="#FFD93D" stroke="#14101F" strokeWidth="2.5" />
    <text x="590" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Launch /#app</text>
    <text x="590" y="84" textAnchor="middle" fontSize="10" fill="#14101F" fontFamily="Space Grotesk">Start Spray Run</text>

    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#14101F" />
      </marker>
    </defs>
  </svg>
);

export const FlowDailySvg: React.FC = () => (
  <svg viewBox="0 0 680 140" className="w-full h-auto bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] p-4" aria-label="Daily Ritual Flow Diagram">
    <rect x="10" y="40" width="140" height="60" rx="8" fill="#FFF6E5" stroke="#14101F" strokeWidth="2.5" />
    <text x="80" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Morning Check-In</text>
    <text x="80" y="84" textAnchor="middle" fontSize="10" fill="#666" fontFamily="Space Grotesk">Capacity Gauge</text>

    <line x1="150" y1="70" x2="190" y2="70" stroke="#14101F" strokeWidth="2.5" />

    <rect x="190" y="40" width="140" height="60" rx="8" fill="#FFF6E5" stroke="#14101F" strokeWidth="2.5" />
    <text x="260" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Fill Canister</text>
    <text x="260" y="84" textAnchor="middle" fontSize="10" fill="#666" fontFamily="Space Grotesk">Lock at 100%</text>

    <line x1="330" y1="70" x2="370" y2="70" stroke="#14101F" strokeWidth="2.5" />

    <rect x="370" y="40" width="140" height="60" rx="8" fill="#FFF6E5" stroke="#14101F" strokeWidth="2.5" />
    <text x="440" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Focus Sprays</text>
    <text x="440" y="84" textAnchor="middle" fontSize="10" fill="#666" fontFamily="Space Grotesk">Tag Wall Art</text>

    <line x1="510" y1="70" x2="550" y2="70" stroke="#14101F" strokeWidth="2.5" />

    <rect x="550" y="40" width="120" height="60" rx="8" fill="#B6FF3B" stroke="#14101F" strokeWidth="2.5" />
    <text x="610" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Mural Gallery</text>
    <text x="610" y="84" textAnchor="middle" fontSize="10" fill="#14101F" fontFamily="Space Grotesk">Day Complete</text>
  </svg>
);

export const FlowOverloadSvg: React.FC = () => (
  <svg viewBox="0 0 680 140" className="w-full h-auto bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] p-4" aria-label="Overload Recovery Flow Diagram">
    <rect x="10" y="40" width="140" height="60" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2.5" />
    <text x="80" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#DC2626" fontFamily="Space Grotesk">Exceed Capacity</text>
    <text x="80" y="84" textAnchor="middle" fontSize="10" fill="#991B1B" fontFamily="Space Grotesk">Leaks & Drips</text>

    <line x1="150" y1="70" x2="200" y2="70" stroke="#14101F" strokeWidth="2.5" />

    <rect x="200" y="40" width="140" height="60" rx="8" fill="#FFF6E5" stroke="#14101F" strokeWidth="2.5" />
    <text x="270" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Calm Deferral Prompt</text>
    <text x="270" y="84" textAnchor="middle" fontSize="10" fill="#666" fontFamily="Space Grotesk">No Guilt Shaming</text>

    <line x1="340" y1="70" x2="390" y2="70" stroke="#14101F" strokeWidth="2.5" />

    <rect x="390" y="40" width="130" height="60" rx="8" fill="#FFF6E5" stroke="#14101F" strokeWidth="2.5" />
    <text x="455" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">One-Click Move</text>
    <text x="455" y="84" textAnchor="middle" fontSize="10" fill="#666" fontFamily="Space Grotesk">Push To Tomorrow</text>

    <line x1="520" y1="70" x2="560" y2="70" stroke="#14101F" strokeWidth="2.5" />

    <rect x="560" y="40" width="110" height="60" rx="8" fill="#7DD3FC" stroke="#14101F" strokeWidth="2.5" />
    <text x="615" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Normal PSI</text>
    <text x="615" y="84" textAnchor="middle" fontSize="10" fill="#14101F" fontFamily="Space Grotesk">Stable Budget</text>
  </svg>
);

export const FlowRestSvg: React.FC = () => (
  <svg viewBox="0 0 680 140" className="w-full h-auto bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] p-4" aria-label="Rest Protocol Flow Diagram">
    <rect x="10" y="40" width="140" height="60" rx="8" fill="#EDE9FE" stroke="#7C5CFF" strokeWidth="2.5" />
    <text x="80" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7C5CFF" fontFamily="Space Grotesk">Exhaustion Trigger</text>
    <text x="80" y="84" textAnchor="middle" fontSize="10" fill="#5B21B6" fontFamily="Space Grotesk">Low Biometrics</text>

    <line x1="150" y1="70" x2="200" y2="70" stroke="#14101F" strokeWidth="2.5" />

    <rect x="200" y="40" width="140" height="60" rx="8" fill="#FFF6E5" stroke="#14101F" strokeWidth="2.5" />
    <text x="270" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Bio-Recovery Mode</text>
    <text x="270" y="84" textAnchor="middle" fontSize="10" fill="#666" fontFamily="Space Grotesk">Zero Budget Day</text>

    <line x1="340" y1="70" x2="390" y2="70" stroke="#14101F" strokeWidth="2.5" />

    <rect x="390" y="40" width="140" height="60" rx="8" fill="#FFF6E5" stroke="#14101F" strokeWidth="2.5" />
    <text x="460" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Permission Slip</text>
    <text x="460" y="84" textAnchor="middle" fontSize="10" fill="#666" fontFamily="Space Grotesk">Official Sanction</text>

    <line x1="530" y1="70" x2="570" y2="70" stroke="#14101F" strokeWidth="2.5" />

    <rect x="570" y="40" width="100" height="60" rx="8" fill="#B6FF3B" stroke="#14101F" strokeWidth="2.5" />
    <text x="620" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="Space Grotesk">Recharged</text>
    <text x="620" y="84" textAnchor="middle" fontSize="10" fill="#14101F" fontFamily="Space Grotesk">Full Stamina</text>
  </svg>
);
