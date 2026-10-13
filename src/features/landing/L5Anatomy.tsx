import React, { useState } from 'react';
import { Card, SectionHeading } from '@/components/ui';

interface Hotspot {
  id: string;
  name: string;
  detail: string;
  x: number;
  y: number;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'cap',
    name: 'Auto Cap-Lock Guard',
    detail: 'Snaps shut at 100% capacity to protect cognitive bandwidth.',
    x: 100,
    y: 22,
  },
  {
    id: 'valve',
    name: 'Aerosol Mixing Nozzle',
    detail: 'Tactile rattle ritual primes internal mixing ball bearings.',
    x: 100,
    y: 45,
  },
  {
    id: 'label',
    name: 'Dynamic Mode Litho-Label',
    detail: 'Generates real-time geometric patterns for color-independent accessibility.',
    x: 100,
    y: 100,
  },
  {
    id: 'gauge',
    name: 'Capacity Volumetric Chamber',
    detail: 'Finite 4-16 units derived from sleep, mood, and stress research.',
    x: 100,
    y: 155,
  },
];

export const L5Anatomy: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <section id="anatomy" className="py-20 bg-[#FFF6E5] border-b-[3px] border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="ENGINEERING BLUEPRINT"
          title="Anatomy of a CAN-DO Spray Can"
          description="Explore the physical metaphor mechanics engineered into every daily budget."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left: Blueprint SVG with Focusable Hotspots */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative p-6 bg-white border-[3px] border-[#111111] shadow-[6px_6px_0_#111111]">
              <svg
                width="200"
                height="320"
                viewBox="0 0 200 320"
                fill="none"
                className="select-none"
              >
                {/* Blueprint grid lines */}
                <line x1="10" y1="50" x2="190" y2="50" stroke="#E5E5E5" strokeDasharray="4 4" />
                <line x1="10" y1="160" x2="190" y2="160" stroke="#E5E5E5" strokeDasharray="4 4" />
                <line x1="10" y1="270" x2="190" y2="270" stroke="#E5E5E5" strokeDasharray="4 4" />

                {/* Spray Can Vector Outline */}
                <rect
                  x="75"
                  y="20"
                  width="50"
                  height="25"
                  rx="3"
                  fill="#FFF6E5"
                  stroke="#111111"
                  strokeWidth="3"
                />
                <path
                  d="M50 70 C50 48 150 48 150 70"
                  fill="#FFF6E5"
                  stroke="#111111"
                  strokeWidth="3"
                />
                <rect
                  x="45"
                  y="70"
                  width="110"
                  height="200"
                  rx="6"
                  fill="#FFF6E5"
                  stroke="#111111"
                  strokeWidth="3"
                />
                <rect
                  x="55"
                  y="110"
                  width="90"
                  height="110"
                  rx="3"
                  fill="#FFD93D"
                  stroke="#111111"
                  strokeWidth="2.5"
                />
                <text
                  x="100"
                  y="165"
                  textAnchor="middle"
                  fontFamily="'Archivo Black', sans-serif"
                  fontSize="16"
                  fill="#111111"
                >
                  CAN-DO
                </text>

                {/* Hotspot buttons */}
                {HOTSPOTS.map((spot) => (
                  <g key={spot.id}>
                    <circle
                      cx={spot.x}
                      cy={spot.y}
                      r="10"
                      fill={activeHotspot.id === spot.id ? '#FF3D8B' : '#00E599'}
                      stroke="#111111"
                      strokeWidth="2.5"
                      className="cursor-pointer transition-transform hover:scale-125"
                      onClick={() => setActiveHotspot(spot)}
                    />
                    <text
                      x={spot.x}
                      y={spot.y + 4}
                      textAnchor="middle"
                      fontFamily="'Space Grotesk', sans-serif"
                      fontSize="10"
                      fontWeight="bold"
                      fill="#111111"
                      pointerEvents="none"
                    >
                      +
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Right: Active Component Detail & Stats Table */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="border-[3px] border-[#111111] bg-white space-y-4">
              <span className="font-tag text-xs px-2.5 py-0.5 bg-[#FF3D8B] text-white inline-block">
                INSPECTING COMPONENT
              </span>
              <h3 className="font-display text-2xl text-[#111111]">{activeHotspot.name}</h3>
              <p className="font-body text-base text-[#444444] leading-relaxed">
                {activeHotspot.detail}
              </p>
            </Card>

            {/* Spec Sheet Table */}
            <div className="border-[3px] border-[#111111] bg-white shadow-[4px_4px_0_#111111] overflow-hidden">
              <table className="w-full text-left font-mono text-xs">
                <tbody>
                  <tr className="border-b border-[#111111]">
                    <td className="p-3 bg-[#FFF6E5] font-bold">CAPACITY RANGE</td>
                    <td className="p-3">4 to 16 Paint Units (approx. 2 to 8 hours)</td>
                  </tr>
                  <tr className="border-b border-[#111111]">
                    <td className="p-3 bg-[#FFF6E5] font-bold">MODES & MULTIPLIERS</td>
                    <td className="p-3">6 Archetypes (0.6× Recover to 1.3× Grind)</td>
                  </tr>
                  <tr className="border-b border-[#111111]">
                    <td className="p-3 bg-[#FFF6E5] font-bold">PHYSICAL SIMULATION</td>
                    <td className="p-3">Canvas 2D Gravity Fluid Drips + Three.js Lathe</td>
                  </tr>
                  <tr>
                    <td className="p-3 bg-[#FFF6E5] font-bold">DATA STORAGE</td>
                    <td className="p-3">100% On-Device Browser LocalStorage (Zero Trackers)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
