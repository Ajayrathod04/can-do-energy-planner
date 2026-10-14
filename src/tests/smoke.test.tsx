import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import {
  LandingNav,
  HowItWorksSection,
  SixMoodsSection,
  BuiltForEveryoneSection,
  FAQSection,
} from '@/features/landing';

describe('Landing & App Feature Smoke Tests', () => {
  it('renders LandingNav with brand and navigation links', () => {
    const { getByText } = render(<LandingNav />);
    expect(getByText('CAN-DO.')).toBeInTheDocument();
    expect(getByText('Play')).toBeInTheDocument();
  });

  it('renders HowItWorksSection with three step cards and unit definition', () => {
    const { getByText } = render(<HowItWorksSection />);
    expect(getByText('How It Works')).toBeInTheDocument();
    expect(getByText('Check In & Calibrate')).toBeInTheDocument();
    expect(getByText('Feed Cano Tasks')).toBeInTheDocument();
    expect(getByText('Stop When Full')).toBeInTheDocument();
  });

  it('renders SixMoodsSection with mode cards', () => {
    const { getByText } = render(<SixMoodsSection />);
    expect(getByText('Six Moods, Six Canos')).toBeInTheDocument();
    expect(getByText('FOCUS')).toBeInTheDocument();
    expect(getByText('GRIND')).toBeInTheDocument();
  });

  it('renders BuiltForEveryoneSection with sensory toggles', () => {
    const { getByText } = render(<BuiltForEveryoneSection />);
    expect(getByText('Built for Everyone')).toBeInTheDocument();
    expect(getByText(/Your data stays on your device/i)).toBeInTheDocument();
  });

  it('renders FAQSection with accessible questions', () => {
    const { getByText } = render(<FAQSection />);
    expect(getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(
      getByText('Why a spray can instead of a normal to-do list?')
    ).toBeInTheDocument();
  });
});
