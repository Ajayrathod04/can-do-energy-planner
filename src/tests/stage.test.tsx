import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { StageHero } from '@/features/stage/StageHero';
import { StageCheckin } from '@/features/stage/StageCheckin';
import { StageStatChips } from '@/features/stage/StageStatChips';
import { StageFeedingTray } from '@/features/stage/StageFeedingTray';
import { HowItWorksSection, BuiltForEveryoneSection } from '@/features/landing';
import { savePersistedState, useAppStore } from '@/lib/store';

describe('S7 Stage & Cano Test Suite', () => {
  it('renders StageHero initially in SLEEPING state with Wake Cano button', () => {
    const { getAllByText } = render(<StageHero />);
    expect(getAllByText(/Wake Cano/i).length).toBeGreaterThan(0);
    expect(getAllByText(/Your day has limited paint/i)[0]).toBeInTheDocument();
  });

  it('transitions from SLEEPING to CHECKIN on Wake Cano click', () => {
    const { getAllByText, getByText } = render(<StageHero />);
    const wakeBtn = getAllByText(/Wake Cano/i)[0];
    fireEvent.click(wakeBtn);
    expect(getByText(/Check-In Step 1\/3/i)).toBeInTheDocument();
  });

  it('runs through StageCheckin 3 questions and calls onDone', () => {
    const onDone = vi.fn();
    const onUpdate = vi.fn();
    const { getByText } = render(
      <StageCheckin
        sleepHours={7.5}
        energyLevel={3}
        stressLevel={3}
        onUpdate={onUpdate}
        onDone={onDone}
      />
    );

    // Step 1: Sleep
    fireEvent.click(getByText('7-8 hours'));
    expect(onUpdate).toHaveBeenCalledWith(7.5, 3, 3);

    // Step 2: Energy
    fireEvent.click(getByText('High voltage'));
    expect(onUpdate).toHaveBeenCalledWith(7.5, 5, 3);

    // Step 3: Stress
    fireEvent.click(getByText('Calm waters'));
    expect(onUpdate).toHaveBeenCalledWith(7.5, 5, 1);
    expect(onDone).toHaveBeenCalled();
  });

  it('feeds Cano via the Feed Cano button', () => {
    const onFeed = vi.fn();
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
      <StageFeedingTray tasks={mockTasks} onFeed={onFeed} onUnfeed={() => {}} />
    );

    const feedBtn = getByText(/Feed Cano/i);
    fireEvent.click(feedBtn);
    expect(onFeed).toHaveBeenCalledWith('t-1');
  });

  it('renders StageStatChips with correct numbers', () => {
    const { getByText } = render(
      <StageStatChips capacity={12} inCanCount={4} remainingPaint={8} />
    );
    expect(getByText('12')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('8')).toBeInTheDocument();
  });

  it('handles store persistence gracefully when localStorage throws an error', () => {
    const originalSetItem = window.localStorage.setItem;
    window.localStorage.setItem = vi.fn().mockImplementation(() => {
      throw new Error('QuotaExceeded or SecurityError: Storage is disabled');
    });

    const state = useAppStore.getState();
    expect(() => savePersistedState(state)).not.toThrow();

    window.localStorage.setItem = originalSetItem;
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
