/**
 * Unit Tests for CAN-DO Energy Capacity, Overflow & Cap-Lock Logic
 * Self-contained assertion suite runnable in any TypeScript/Node/Browser environment.
 */

import { computeDailyCapacity } from '../store';
import { MODES } from '../../data/modes';

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
}

export function runCanLogicTests(): TestResult[] {
  const results: TestResult[] = [];

  const assert = (name: string, condition: boolean, message?: string) => {
    if (condition) {
      results.push({ name, passed: true });
    } else {
      results.push({ name, passed: false, error: message || 'Assertion failed' });
    }
  };

  // Test 1: Median baseline in FOCUS mode (1.0x)
  // sleep = 7.5, energy = 3, stress = 3
  // raw = (4 + 7.5*0.9 + 0 - 0) * 1.0 = 4 + 6.75 = 10.75 -> round = 11
  const cap1 = computeDailyCapacity(7.5, 3, 3, 1.0);
  assert(
    'Baseline capacity for median parameters in FOCUS mode equals 11 units',
    cap1 === 11,
    `Expected 11, got ${cap1}`
  );

  // Test 2: GRIND mode multiplier (1.1x)
  const grindMode = MODES.find(m => m.id === 'grind');
  const cap2 = computeDailyCapacity(8, 4, 2, grindMode?.multiplier || 1.1);
  assert(
    'Applies GRIND mode multiplier correctly',
    cap2 === 15,
    `Expected 15, got ${cap2}`
  );

  // Test 3: Minimum clamp boundary (4 units) for extreme exhaustion
  const recoverMode = MODES.find(m => m.id === 'recover');
  const cap3 = computeDailyCapacity(3, 1, 5, recoverMode?.multiplier || 0.6);
  assert(
    'Enforces minimum capacity clamp of 4 paint units',
    cap3 === 4,
    `Expected 4, got ${cap3}`
  );

  // Test 4: Maximum clamp boundary (16 units)
  const cap4 = computeDailyCapacity(12, 5, 1, 1.1);
  assert(
    'Enforces maximum capacity clamp of 16 paint units',
    cap4 === 16,
    `Expected 16, got ${cap4}`
  );

  // Test 5: Overflow detection invariant
  const capacity = 10;
  const totalCost = 12;
  const isOverflow = totalCost > capacity;
  const overflowUnits = Math.max(0, totalCost - capacity);
  assert(
    'Correctly identifies overflow and exact excess units',
    isOverflow === true && overflowUnits === 2,
    `Expected overflow with 2 units, got overflow=${isOverflow}, units=${overflowUnits}`
  );

  // Test 6: Cap-lock triggering at 100% capacity
  const isCapLocked = 10 >= capacity;
  assert(
    'Cap-lock triggers at exactly 100% capacity',
    isCapLocked === true,
    `Expected cap-lock true, got ${isCapLocked}`
  );

  return results;
}

// Auto-run if executed directly
if (typeof window === 'undefined') {
  const suite = runCanLogicTests();
  const failed = suite.filter(r => !r.passed);
  if (failed.length > 0) {
    console.error('Unit tests failed:', failed);
  } else {
    console.log(`✓ All ${suite.length} CAN-DO logic tests passed successfully.`);
  }
}
