import assert from 'assert';
import { nextBusinessDay } from '../../src/nextBusinessDay/index.js';

describe('nextBusinessDay', () => {
  it('returns next Monday after Friday', () => {
    const result = nextBusinessDay(new Date(2025, 6, 18)); // Fri
    assert.deepStrictEqual(result, new Date(2025, 6, 21)); // Mon
  });

  it('skips custom holidays', () => {
    const result = nextBusinessDay(new Date(2025, 6, 2), {
      holidays: [new Date(2025, 6, 3)], // 3rd is holiday
    });
    assert.deepStrictEqual(result, new Date(2025, 6, 4));
  });

  it('works when current date is weekend', () => {
    const result = nextBusinessDay(new Date(2025, 6, 19)); // Saturday
    assert.deepStrictEqual(result, new Date(2025, 6, 21)); // Monday
  });
});
