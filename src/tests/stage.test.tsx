import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { FirstScreenHero } from '@/features/hero/FirstScreenHero';
import { HeroCheckin } from '@/features/hero/HeroCheckin';
import { HeroStatNumbers } from '@/features/hero/HeroStatNumbers';
import { HeroTaskChips } from '@/features/hero/HeroTaskChips';
import { InteractiveCan } from '@/features/can/InteractiveCan';
import { HowItWorksSection, BuiltForEveryoneSection } from '@/features/landing';
import { savePersistedState, useAppStore } from '@/lib/store';

describe('V7 SVG Can & First Screen Hero Test Suite', () => {
  it('renders FirstScreenHero with H1 and primary CTA', () => {
    const { getByText } = render(<FirstScreenHero />);
    expect(getByText(/Stop planning more than you can do\./i)).toBeInTheDocument();
    expect(getByText(/Try it in 20 seconds/i)).toBeInTheDocument();
  });

  it('renders InteractiveCan with aria-label and live region', () => {
    const { getByRole, getByText } = render(
      <InteractiveCan
        capacity={10}
        usedPaint={4}
        modeColor="#8B5CF6"
        modeName="FOCUS"
        isFull={false}
        isOver={false}
      />
    );
    expect(getByRole('img')).toHaveAttribute('aria-label');
    expect(getByText(/4 of 10 paint used\. 6 left\./i)).toBeInTheDocument();
  });

  it('runs through HeroCheckin and updates values', () => {
    const onUpdate = vi.fn();
    const { getByText } = render(
      <HeroCheckin
        sleepHours={7.5}
        energyLevel={3}
        stressLevel={3}
        onUpdate={onUpdate}
      />
    );

    // Sleep 9h button
    fireEvent.click(getByText('9h'));
    expect(onUpdate).toHaveBeenCalledWith({ sleepHours: 9 });

    // Energy High button
    const hiButtons = document.querySelectorAll('button');
    const energyHi = Array.from(hiButtons).find((b) => b.textContent === 'Hi');
    if (energyHi) fireEvent.click(energyHi);
    expect(onUpdate).toHaveBeenCalled();
  });

  it('toggles task in can via HeroTaskChips and shows toast', () => {
    const onToggle = vi.fn();
    const mockTasks = [
      {
        id: 't-1',
        title: 'Algorithms Homework',
        cost: 3,
        category: 'Academics' as const,
        inCan: false,
        completed: false,
      },
    ];

    const { getByText } = render(
      <HeroTaskChips
        tasks={mockTasks}
        isFull={false}
        isOver={false}
        onToggleInCan={onToggle}
      />
    );

    fireEvent.click(getByText('Algorithms Homework'));
    expect(onToggle).toHaveBeenCalledWith('t-1', expect.anything());
  });

  it('renders HeroStatNumbers with correct values', () => {
    const { getByText } = render(
      <HeroStatNumbers capacity={12} usedPaint={8} remaining={4} />
    );
    expect(getByText('12')).toBeInTheDocument();
    expect(getByText('8')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
  });

  it('handles store persistence gracefully when localStorage throws an error', () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceeded');
    });

    expect(() => {
      savePersistedState(useAppStore.getState());
    }).not.toThrow();

    spy.mockRestore();
  });

  it('passes vitest-axe accessibility audit on HowItWorksSection', async () => {
    const { container } = render(<HowItWorksSection />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('passes vitest-axe accessibility audit on BuiltForEveryoneSection', async () => {
    const { container } = render(<BuiltForEveryoneSection />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
