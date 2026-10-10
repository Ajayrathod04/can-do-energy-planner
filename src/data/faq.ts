export interface FAQItem {
  id: string;
  title: string;
  content: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'free',
    title: 'Is CAN-DO free to use?',
    content:
      'Yes, 100% free with no ads, paywalls, or hidden tiers. CAN-DO is an open-source tool created for students and anyone overwhelmed by infinite to-do lists.',
  },
  {
    id: 'account',
    title: 'Do I need to create an account?',
    content:
      'No account or email signup is required. You can start planning your day immediately with zero onboarding friction.',
  },
  {
    id: 'privacy',
    title: 'Where does my data go?',
    content:
      'Nowhere outside your computer. All tasks, check-in scores, and wall tags are stored exclusively in your browser’s localStorage. There is no backend database and zero third-party analytics trackers.',
  },
  {
    id: 'paint',
    title: 'What is a unit of "paint"?',
    content:
      '1 paint = about one small task (roughly 30 minutes of focused brain energy). Your daily check-in turns your sleep and mood into a finite paint budget between 4 and 16 units.',
  },
  {
    id: 'shake',
    title: 'Why shake the can?',
    content:
      'Shake to wake the can is an interactive tactile ritual inspired by real aerosol spray cans with mixing ball bearings. It primes your mind for purposeful focus (and synthesizes fun rattle audio via Web Audio).',
  },
  {
    id: 'a11y',
    title: 'Is CAN-DO accessible?',
    content:
      'Yes. CAN-DO adheres strictly to WCAG AA contrast standards, supports full keyboard navigation, provides a dyslexia-friendly font mode, respects prefers-reduced-motion with static visual fallbacks, and keeps all audio strictly off by default.',
  },
];
