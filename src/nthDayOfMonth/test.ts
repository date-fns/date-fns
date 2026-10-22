import nthDayOfMonth from '../src/nthDayOfMonth/index';

describe('nthDayOfMonth', () => {
  it('should return the 3rd Sunday of June 2025', () => {
    const result = nthDayOfMonth(new Date(2025, 5, 1), 0, 3); // 0 = Sunday
    expect(result.getDate()).toBe(15);
  });

  it('should return the 2nd Monday of July 2025', () => {
    const result = nthDayOfMonth(new Date(2025, 6, 1), 1, 2); // 1 = Monday
    expect(result.getDate()).toBe(14);
  });
});
