import React from 'react';

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
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B2C]">
            Three Physical Rules
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#14101F]">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="p-6 bg-white border-[3px] border-[#14101F] shadow-[4px_4px_0px_#14101F] rounded-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="font-display text-2xl px-2.5 py-0.5 border-2 border-[#14101F] rounded shadow-[2px_2px_0px_#14101F]"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.step}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-[#666666] tracking-wider uppercase">
                    {s.tag}
                  </span>
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
