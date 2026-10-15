import React from 'react';
import { LandingNav } from '@/features/landing';
import { Footer } from '@/components/Footer';
import { PROCESS_DATA } from '@/data/process';
import {
  FlowDemoSvg,
  FlowDailySvg,
  FlowOverloadSvg,
  FlowRestSvg,
} from '@/data/flowDiagrams';

export const ProcessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF6E5] text-[#14101F] flex flex-col font-body">
      <LandingNav />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Header */}
        <div className="space-y-3 text-center sm:text-left border-b-3 border-[#14101F] pb-6">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-orange)]">
            Design Case Study & Systems Architecture
          </span>
          <h1 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#14101F]">
            How I Designed CAN-DO
          </h1>
          <p className="font-body text-base text-neutral-700 max-w-2xl leading-relaxed">
            From biological overload to a physical aerosol boundary. The rationale, user research, and technical decisions behind a zero-guilt daily planner.
          </p>
        </div>

        {/* 1. Problem Statement & Target Audience */}
        <section aria-labelledby="problem-heading" className="space-y-4">
          <h2 id="problem-heading" className="font-display text-2xl uppercase">
            1. Problem Statement & Audience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white border-3 border-[#14101F] shadow-[4px_4px_0px_#14101F] rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-[var(--text-pink)] uppercase">The Core Friction</span>
              <p className="text-sm leading-relaxed text-neutral-800">{PROCESS_DATA.problemStatement}</p>
            </div>
            <div className="p-5 bg-white border-3 border-[#14101F] shadow-[4px_4px_0px_#14101F] rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-[var(--text-violet)] uppercase">Who It Is For</span>
              <p className="text-sm leading-relaxed text-neutral-800">{PROCESS_DATA.whoItIsFor}</p>
            </div>
          </div>
        </section>

        {/* 2. Personas */}
        <section aria-labelledby="personas-heading" className="space-y-4">
          <h2 id="personas-heading" className="font-display text-2xl uppercase">
            2. User Personas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROCESS_DATA.personas.map((p) => (
              <div key={p.name} className="p-5 bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-xl space-y-2 font-body">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg">{p.name}</span>
                  <span className="font-mono text-xs text-[var(--text-muted)] font-bold">{p.role}</span>
                </div>
                <p className="text-xs text-red-900 bg-red-50 p-2 border border-red-200 rounded">
                  <strong>Pain Point:</strong> {p.painPoint}
                </p>
                <p className="text-xs text-emerald-900 bg-emerald-50 p-2 border border-emerald-200 rounded">
                  <strong>Design Goal:</strong> {p.goal}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. User Flows (SVG Diagrams) */}
        <section aria-labelledby="flows-heading" className="space-y-6">
          <h2 id="flows-heading" className="font-display text-2xl uppercase">
            3. System User Flows
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold uppercase text-neutral-600">A. First-Time Demo Flow</h3>
              <FlowDemoSvg />
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold uppercase text-neutral-600">B. Daily Ritual Flow</h3>
              <FlowDailySvg />
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold uppercase text-neutral-600">C. Overload Recovery Flow</h3>
              <FlowOverloadSvg />
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold uppercase text-neutral-600">D. Biological Rest Flow</h3>
              <FlowRestSvg />
            </div>
          </div>
        </section>

        {/* 4. Information Architecture (Sitemap) */}
        <section aria-labelledby="ia-heading" className="space-y-4">
          <h2 id="ia-heading" className="font-display text-2xl uppercase">
            4. Information Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {PROCESS_DATA.sitemap.map((s) => (
              <a
                key={s.route}
                href={s.route}
                className="p-4 bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-lg space-y-1 block hover:bg-[#FFF6E5] transition-colors"
              >
                <span className="font-mono text-xs font-bold text-[var(--text-violet)] block">{s.route}</span>
                <span className="font-display text-sm block">{s.label}</span>
                <p className="text-[11px] text-[var(--text-muted)] font-body">{s.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* 5. Key Design Decisions & Rejected Alternatives */}
        <section aria-labelledby="decisions-heading" className="space-y-4">
          <h2 id="decisions-heading" className="font-display text-2xl uppercase">
            5. Design Decisions & Rejected Alternatives
          </h2>
          <div className="space-y-3">
            {PROCESS_DATA.decisions.map((d) => (
              <div key={d.title} className="p-5 bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-xl space-y-2 text-xs font-body">
                <h3 className="font-display text-base uppercase text-[#14101F]">{d.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-emerald-50 border border-emerald-300 rounded">
                    <span className="font-bold text-emerald-900 block mb-1">✓ Chosen Solution:</span>
                    <p className="text-neutral-800">{d.chosen}</p>
                    <p className="text-[var(--text-muted)] mt-1 italic">{d.rationale}</p>
                  </div>
                  <div className="p-3 bg-neutral-100 border border-neutral-300 rounded">
                    <span className="font-bold text-neutral-800 block mb-1">✗ Rejected Alternative:</span>
                    <p className="text-neutral-800">{d.rejected}</p>
                    <p className="text-[var(--text-muted)] mt-1 italic">{d.rejectedRationale}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Accessibility & What's Next */}
        <section aria-labelledby="a11y-heading" className="space-y-4">
          <h2 id="a11y-heading" className="font-display text-2xl uppercase">
            6. Accessibility Audits & Next Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-xl space-y-2 text-xs font-mono">
              <span className="font-bold text-base font-display text-[#14101F] block">Verified A11y Standards</span>
              <ul className="space-y-1 text-neutral-700 list-disc pl-4">
                <li>WCAG: {PROCESS_DATA.accessibilityResults.wcagLevel}</li>
                <li>Automated: {PROCESS_DATA.accessibilityResults.automatedAudit}</li>
                <li>Keyboard: {PROCESS_DATA.accessibilityResults.keyboardOperable}</li>
                <li>Reduced Motion: {PROCESS_DATA.accessibilityResults.reducedMotion}</li>
              </ul>
            </div>
            <div className="p-5 bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-xl space-y-2 text-xs font-body">
              <span className="font-bold text-base font-display text-[#14101F] block">Future Roadmap</span>
              <ul className="space-y-1 text-neutral-700 list-disc pl-4">
                {PROCESS_DATA.whatIsNext.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
