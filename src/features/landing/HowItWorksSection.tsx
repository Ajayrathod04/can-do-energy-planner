import React from 'react';
import { getReadableText } from '../../lib/contrast';

const STEPS = [
  {
    step: '01',
    title: 'Check In & Calibrate',
    tag: 'BIOLOGICAL MATH',
    desc: 'Answer 3 quick questions on sleep, energy, and stress. Cano computes today’s realistic paint units (4 to 16).',
    color: '#FF6B2C',
  },
  {
    step: '02',
    title: 'Feed Cano Tasks',
    tag: 'TANGIBLE BOUNDARY',
    desc: 'Each task costs 1 to 5 units. Pack them into the can. Watch the level rise in the translucent belly window.',
    color: '#7C5CFF',
  },
  {
    step: '03',
    title: 'Stop When Full',
    tag: 'ZERO GUILT',
    desc: 'At capacity, the cap snaps shut. Rest and evening recovery count as biological replenishment.',
    color: '#B6FF3B',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full py-16 px-4 bg-[#FFF6E5] border-t-[3px] border-[#14101F]">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-orange)]">
            Three Physical Rules
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#14101F]">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s, idx) => (
            <div
              key={s.step}
              className="p-6 bg-white border-[3px] border-[#14101F] shadow-[4px_4px_0px_#14101F] rounded-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="font-display text-2xl px-2.5 py-0.5 border-2 border-[#14101F] rounded shadow-[2px_2px_0px_#14101F]"
                    style={{ backgroundColor: s.color, color: getReadableText(s.color) }}
                  >
                    {s.step}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase">
                    {s.tag}
                  </span>
                </div>

                {/* Small SVG Illustration */}
                <div className="w-full h-16 bg-[#FFF6E5] border border-ink/20 rounded flex items-center justify-center p-2">
                  {idx === 0 && (
                    <svg viewBox="0 0 60 40" className="w-12 h-10" aria-hidden="true">
                      <circle cx="30" cy="24" r="14" fill="#FFFFFF" stroke="#14101F" strokeWidth="2.5" />
                      <line x1="30" y1="24" x2="38" y2="16" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="30" cy="24" r="2.5" fill="#14101F" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg viewBox="0 0 60 40" className="w-12 h-10" aria-hidden="true">
                      <rect x="22" y="10" width="16" height="24" rx="2" fill="#7C5CFF" stroke="#14101F" strokeWidth="2" />
                      <rect x="26" y="6" width="8" height="4" fill="#FFF" stroke="#14101F" strokeWidth="1.5" />
                      <circle cx="12" cy="20" r="4" fill="#B6FF3B" stroke="#14101F" strokeWidth="1.5" />
                      <circle cx="48" cy="24" r="4" fill="#FFD93D" stroke="#14101F" strokeWidth="1.5" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg viewBox="0 0 60 40" className="w-12 h-10" aria-hidden="true">
                      <rect x="20" y="14" width="20" height="18" rx="2" fill="#B6FF3B" stroke="#14101F" strokeWidth="2" />
                      <path d="M 24 14 V 10 A 6 6 0 0 1 36 10 V 14" fill="none" stroke="#14101F" strokeWidth="2" />
                      <circle cx="30" cy="22" r="2" fill="#14101F" />
                    </svg>
                  )}
                </div>

                <h3 className="font-display text-xl text-[#14101F] uppercase">{s.title}</h3>
                <p className="font-body text-xs text-[#444444] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
