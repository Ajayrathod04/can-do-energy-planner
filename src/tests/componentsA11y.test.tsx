import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import * as matchers from 'vitest-axe/matchers';
import { Button, Dialog, Tabs, Accordion, Slider } from '@/components/ui';

expect.extend(matchers);

describe('UI Component Accessibility Audits (vitest-axe)', () => {
  it('Button has zero accessibility violations', async () => {
    const { container } = render(<Button variant="brutal">Click Me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.violations).toEqual([]);
  });

  it('Slider has accessible label and zero violations', async () => {
    const { container } = render(
      <Slider label="Energy Level" min={1} max={5} value={3} onChange={() => {}} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.violations).toEqual([]);
  });

  it('Accordion has aria-expanded, region, and zero violations', async () => {
    const items = [
      { id: 'item-1', title: 'Question 1', content: <p>Answer 1</p> },
      { id: 'item-2', title: 'Question 2', content: <p>Answer 2</p> },
    ];
    const { container } = render(<Accordion items={items} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.violations).toEqual([]);
  });

  it('Tabs has valid tablist/tabpanel attributes and zero violations', async () => {
    const tabs = [
      { id: 'tab1', label: 'Tab 1', content: <p>Content 1</p> },
      { id: 'tab2', label: 'Tab 2', content: <p>Content 2</p> },
    ];
    const { container } = render(<Tabs tabs={tabs} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.violations).toEqual([]);
  });

  it('Dialog attributes are valid and have zero violations', async () => {
    const { container } = render(
      <Dialog isOpen={true} onClose={() => {}} title="Test Dialog">
        <p>Dialog body text</p>
      </Dialog>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.violations).toEqual([]);
  });
});
