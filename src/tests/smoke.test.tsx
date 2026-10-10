import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { LandingNav } from '@/features/landing/LandingNav';
import { L2HowItWorks } from '@/features/landing/L2HowItWorks';
import { L6Proof } from '@/features/landing/L6Proof';
import { L7AccessPrivacy } from '@/features/landing/L7AccessPrivacy';
import { L8FAQ } from '@/features/landing/L8FAQ';

describe('Landing & App Feature Smoke Tests', () => {
  it('renders LandingNav with brand and navigation links', () => {
    const { getByText } = render(<LandingNav />);
    expect(getByText('CAN-DO.')).toBeInTheDocument();
    expect(getByText('How it works')).toBeInTheDocument();
  });

  it('renders L2HowItWorks with three step cards and unit definition', () => {
    const { getByText } = render(<L2HowItWorks />);
    expect(getByText('How CAN-DO works')).toBeInTheDocument();
    expect(getByText('CHECK IN')).toBeInTheDocument();
    expect(getByText('GET YOUR PAINT')).toBeInTheDocument();
    expect(getByText('LOAD YOUR CAN')).toBeInTheDocument();
  });

  it('renders L6Proof with metric badges', () => {
    const { getByText } = render(<L6Proof />);
    expect(getByText('27 → 7')).toBeInTheDocument();
    expect(getByText('4 – 16')).toBeInTheDocument();
  });

  it('renders L7AccessPrivacy with privacy checklist', () => {
    const { getByText } = render(<L7AccessPrivacy />);
    expect(getByText('Zero-Tracker Privacy')).toBeInTheDocument();
  });

  it('renders L8FAQ with accessible accordion questions', () => {
    const { getByText } = render(<L8FAQ />);
    expect(getByText('Is CAN-DO free to use?')).toBeInTheDocument();
    expect(getByText('Do I need to create an account?')).toBeInTheDocument();
  });
});
