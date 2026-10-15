import React from 'react';

const FAQS = [
  {
    q: 'Why a spray can instead of a normal to-do list?',
    a: 'Normal to-do lists create the illusion of infinite capacity, leading to late-night guilt spirals. A pressurized spray can represents physical volume: when it is full, you stop.',
  },
  {
    q: 'How is 1 paint unit defined?',
    a: '1 paint unit represents roughly 30 minutes of high-focus stamina for a realistic student or knowledge worker. Calibrating sleep, energy, and stress sets your daily volume.',
  },
  {
    q: 'Does my data leave my browser?',
    a: 'Never. CAN-DO runs 100% locally on your device with localStorage persistence. No accounts, cookies, analytics, or remote servers exist.',
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-white border-t-[3px] border-[#14101F]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C2410C]">
            Common Inquiries
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#14101F]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#FFF6E5] border-[3px] border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-xl space-y-2"
            >
              <h3 className="font-display text-lg text-[#14101F] uppercase">{faq.q}</h3>
              <p className="font-body text-xs sm:text-sm text-[#444444] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
