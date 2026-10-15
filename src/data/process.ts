export interface Persona {
  name: string;
  role: string;
  painPoint: string;
  goal: string;
}

export interface DesignDecision {
  title: string;
  chosen: string;
  rationale: string;
  rejected: string;
  rejectedRationale: string;
}

export interface SitemapItem {
  route: string;
  label: string;
  description: string;
}

export const PROCESS_DATA = {
  problemStatement:
    'Students and makers face chronic daily overload because traditional to-do lists treat time and energy as infinite. When energy runs out, unfinished lists generate guilt instead of clarity.',
  whoItIsFor:
    'Exhausted students, neurodivergent planners, and makers who struggle with capacity overestimation and need biological boundaries for daily planning.',
  personas: [
    {
      name: 'Maya, 21',
      role: 'Computer Science Undergrad & Researcher',
      painPoint: 'Packs 14 coding tasks into a Sunday night, burns out by Tuesday.',
      goal: 'Tangible, finite daily boundary that forces ruthless prioritization.',
    },
    {
      name: 'Liam, 24',
      role: 'ADHD Self-Employed Designer',
      painPoint: 'Paralyzed by endless digital backlogs and guilt from recurring rollover tasks.',
      goal: 'Friendly, somatic visual feedback that validates stopping when the can is full.',
    },
  ] as Persona[],
  decisions: [
    {
      title: 'Aerosol Spray Can Metaphor',
      chosen: 'Finite pressurized spray can holding discrete paint units based on biometric sleep/energy.',
      rationale: 'Liquid pressure is an intuitive mental model: once a can is pressurized to capacity, forcing more inside causes leaks.',
      rejected: 'Dark sticker-bomb / halftone aesthetic',
      rejectedRationale: 'Rejected for legibility, high cognitive noise, and poor contrast for low-vision readers.',
    },
    {
      title: 'SVG Interactive Hero vs 3D Character',
      chosen: 'Self-contained, ultra-responsive SVG Can with damped liquid physics and face emotions.',
      rationale: 'Instant 60fps interaction without heavy WebGL initialization, Zero CLS, and runs under 120KB gzip.',
      rejected: '3D WebGL Three.js character scene',
      rejectedRationale: 'Rejected for performance overhead (270KB+ JS chunk), frame-rate drops on mobile, and visual occlusion.',
    },
    {
      title: 'Client-Side Local Storage Architecture',
      chosen: 'Deterministic zero-network localStorage with graceful fallback for private offline use.',
      rationale: 'Users share intimate biological health details (sleep, stress). Zero tracking guarantees total trust.',
      rejected: 'Cloud database with user accounts',
      rejectedRationale: 'Rejected because auth walls and network latency create barriers to immediate 20-second utility.',
    },
  ] as DesignDecision[],
  sitemap: [
    { route: '#/', label: 'Playable Landing Hero', description: 'Immediate 20-second can interactive check-in, live feeding, and value proof.' },
    { route: '#/app', label: 'Full Daily Planner', description: 'Interactive Kanban board, capacity dock, focus timer, and rest claims.' },
    { route: '#/process', label: 'Design Process & Research', description: 'Documentation of problem statement, personas, user flows, and architectural decisions.' },
    { route: '#/system', label: 'Design System & Tokens', description: 'Color swatches, WCAG contrast audits, iconography, and UI component showcase.' },
  ] as SitemapItem[],
  accessibilityResults: {
    wcagLevel: 'WCAG 2.1 AA / AAA',
    automatedAudit: 'vitest-axe and Playwright Axe 0 serious/critical violations',
    keyboardOperable: '100% focus trap, skip links, aria-live updates, enter/space interactions',
    reducedMotion: 'Complete disabling of waves, bubbles, and tilts with instant state updates',
  },
  whatIsNext: [
    'Audio feedback pitch modulation tied to canister pressure percentage.',
    'Multi-day paint mural retrospectives with weekly burnout heatmaps.',
    'ICS calendar export for protected rest sessions.',
  ],
};
