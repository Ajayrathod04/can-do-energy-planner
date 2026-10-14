/**
 * C2 SNAPSHOT TESTS – core UI snapshots, no runtime network calls. These tests are
 * run in jsdom and are strict – any change to the rendered output will cause a
 * failure. The goal is to lock the visual output of each page.
 */
import React from 'react';
import { render } from '@testing-library/react';
import { vi, beforeAll, afterAll } from 'vitest';
import { HashRouterProvider } from '@/lib/router';
import { LandingPage } from '@/pages/LandingPage';
import { AppPage } from '@/pages/AppPage';
import { SystemPage } from '@/pages/SystemPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

// Pin the system clock to a fixed daytime (08:00 Mon 15 Jan 2024) so that
// the circadian wall-lighting always resolves to 'day' and snapshots are
// deterministic regardless of when the test suite is run.
const FIXED_DATE = new Date('2024-01-15T08:00:00');

beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(FIXED_DATE);
});

afterAll(() => {
  vi.useRealTimers();
});

function renderWithRouter(ui: React.ReactElement) {
  // The router reads window.location.hash – set a dummy hash.
  window.location.hash = '#/';
  return render(<HashRouterProvider>{ui}</HashRouterProvider>);
}

describe('C2 – UI snapshots', () => {
  it('Landing page matches snapshot', () => {
    const { asFragment } = renderWithRouter(<LandingPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('App page matches snapshot', () => {
    window.location.hash = '#/app';
    const { asFragment } = renderWithRouter(<AppPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('System page matches snapshot', () => {
    window.location.hash = '#/system';
    const { asFragment } = renderWithRouter(<SystemPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('NotFound page matches snapshot', () => {
    window.location.hash = '#/nonexistent';
    const { asFragment } = renderWithRouter(<NotFoundPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
