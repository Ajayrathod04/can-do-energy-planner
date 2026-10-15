import React from 'react';
import {
  interviewQuotes,
  usabilityResults,
  accessibilityAuditNumbers,
} from '../../data/research';

export const EvidenceSection: React.FC = () => {
  const hasQuotes = interviewQuotes.length > 0;
  const hasUsability = usabilityResults.length > 0;
  const hasA11y = accessibilityAuditNumbers.length > 0;

  // If no entries exist in research.ts, hide the section completely
  if (!hasQuotes && !hasUsability && !hasA11y) {
    return null;
  }

  return (
    <section id="evidence" className="w-full py-16 px-4 bg-white border-t-[3px] border-[#14101F]">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C2410C]">
            Verified Field Data
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#14101F]">
            Research & Usability Evidence
          </h2>
        </div>

        {hasQuotes && (
          <div className="space-y-4">
            <h3 className="font-display text-lg uppercase text-[#14101F]">User Interviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interviewQuotes.map((q) => (
                <blockquote
                  key={q.id}
                  className="p-4 bg-[#FFF6E5] border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-lg"
                >
                  <p className="font-body text-sm text-[#14101F] italic mb-2">"{q.quote}"</p>
                  <footer className="font-mono text-xs text-neutral-600 font-semibold">
                    — {q.role} ({q.context})
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        )}

        {hasUsability && (
          <div className="space-y-4">
            <h3 className="font-display text-lg uppercase text-[#14101F]">Usability Test Benchmarks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {usabilityResults.map((u) => (
                <div
                  key={u.id}
                  className="p-4 bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-lg space-y-1 font-body"
                >
                  <span className="font-mono text-[10px] text-neutral-500 block">
                    n={u.n} · {u.date}
                  </span>
                  <div className="font-display text-xl text-[#7C5CFF]">{u.metric}</div>
                  <p className="text-xs text-neutral-700">{u.finding}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {hasA11y && (
          <div className="space-y-4">
            <h3 className="font-display text-lg uppercase text-[#14101F]">Accessibility Standards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              {accessibilityAuditNumbers.map((a) => (
                <div
                  key={a.id}
                  className="p-3 bg-[#FFF6E5] border-2 border-[#14101F] rounded-lg space-y-1"
                >
                  <div className="font-bold text-[#14101F]">{a.standard}</div>
                  <div className="text-sm font-display text-[#10B981]">{a.score}</div>
                  <div className="text-[11px] text-neutral-600">{a.notes}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
