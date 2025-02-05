import { describe, expect, it } from "vitest";
import type { Interval } from '../types.js'
import findOverlappingIntervals from './index.js'

describe('findOverlappingIntervals', () => {
  describe('when no time intervals overlap', () => {
    it('returns empty array for non overlapping intervals in different days', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19),
        end: new Date(2023, 1, 20),
      };
      const secondInterval: Interval = {
        start: new Date(2023, 1, 21),
        end: new Date(2023, 1, 22),
      };
      const thirdInterval: Interval = {
        start: new Date(2023, 1, 23),
        end: new Date(2023, 1, 24),
      };
      const intervals = [firstInterval, secondInterval, thirdInterval];

      const result = findOverlappingIntervals(intervals);
      expect(result).toHaveLength(0);
    });

    it('returns empty array for non overlapping same-day intervals', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 10),
        end: new Date(2023, 1, 19, 11),
      };
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 12),
        end: new Date(2023, 1, 19, 13),
      };
      const thirdInterval: Interval = {
        start: new Date(2023, 1, 19, 14),
        end: new Date(2023, 1, 19, 15),
      };
      const intervals = [firstInterval, secondInterval, thirdInterval];

      const result = findOverlappingIntervals(intervals);
      expect(result).toHaveLength(0);
    });

    it('returns empty array for non-overlapping adjacent intervals', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 10),
        end: new Date(2023, 1, 19, 11),
      };
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 11),
        end: new Date(2023, 1, 19, 12),
      };
      const thirdInterval: Interval = {
        start: new Date(2023, 1, 19, 12),
        end: new Date(2023, 1, 19, 13),
      };
      const intervals = [firstInterval, secondInterval, thirdInterval];

      const result = findOverlappingIntervals(intervals);
      expect(result).toHaveLength(0);
    });
  });

  describe('when the time intervals overlap', () => {
    it('returns an array containing the second interval if that is included in the first one', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 10),
        end: new Date(2023, 1, 19, 18),
      };
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 12),
        end: new Date(2023, 1, 19, 16),
      };
      const intervals = [firstInterval, secondInterval];

      const result = findOverlappingIntervals(intervals);
      expect(result).toHaveLength(1);
      expect(result[0].start.valueOf()).toBe(secondInterval.start.valueOf());
      expect(result[0].end.valueOf()).toBe(secondInterval.end.valueOf());
    });

    it('returns the common interval between two overlapping intervals', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 10),
        end: new Date(2023, 1, 19, 18),
      };
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 16),
        end: new Date(2023, 1, 19, 20),
      };
      const intervals = [firstInterval, secondInterval];

      const result = findOverlappingIntervals(intervals);
      expect(result).toHaveLength(1);
      expect(result[0].start.valueOf()).toBe(secondInterval.start.valueOf());
      expect(result[0].end.valueOf()).toBe(firstInterval.end.valueOf());
    });

    it('returns two common intervals between three intervals', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 9),
        end: new Date(2023, 1, 19, 12),
      };
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 11),
        end: new Date(2023, 1, 19, 15),
      };
      const thirdInterval: Interval = {
        start: new Date(2023, 1, 19, 14),
        end: new Date(2023, 1, 19, 20),
      };
      const intervals = [firstInterval, secondInterval, thirdInterval];

      const expectedResult: Interval[] = [
        {
          start: new Date(2023, 1, 19, 11),
          end: new Date(2023, 1, 19, 12),
        },
        {
          start: new Date(2023, 1, 19, 14),
          end: new Date(2023, 1, 19, 15),
        },
      ];

      const result = findOverlappingIntervals(intervals);
      expect(result).toHaveLength(2);
      expectedResult.forEach((res, index) => {
        expect(res.start.valueOf()).toBe(result[index].start.valueOf());
        expect(res.end.valueOf()).toBe(result[index].end.valueOf());
      });
    });

    it('returns the common interval between three overlapping intervals', () => {
      const firstInterval: Interval = {
        start: new Date(2023, 1, 19, 10),
        end: new Date(2023, 1, 19, 20),
      };
      const secondInterval: Interval = {
        start: new Date(2023, 1, 19, 12),
        end: new Date(2023, 1, 19, 18),
      };
      const thirdInterval: Interval = {
        start: new Date(2023, 1, 19, 14),
        end: new Date(2023, 1, 19, 16),
      };
      const intervals = [firstInterval, secondInterval, thirdInterval];

      const expectedResult: Interval[] = [
        {
          start: new Date(2023, 1, 19, 14),
          end: new Date(2023, 1, 19, 16),
        },
      ];

      const result = findOverlappingIntervals(intervals);
      expect(result).toHaveLength(1);
      expectedResult.forEach((res, index) => {
        expect(res.start.valueOf()).toBe(result[index].start.valueOf());
        expect(res.end.valueOf()).toBe(result[index].end.valueOf());
      });
    });

    it('returns common intervals between multiple overlapping intervals', () => {
      const intervals: Interval[] = [
        {
          start: new Date(2023, 1, 10, 8),
          end: new Date(2023, 1, 11, 18),
        },
        {
          start: new Date(2023, 1, 10, 7),
          end: new Date(2023, 1, 10, 10),
        },
        {
          start: new Date(2023, 1, 10, 9),
          end: new Date(2023, 1, 10, 11),
        },
        {
          start: new Date(2023, 1, 11, 10),
          end: new Date(2023, 1, 12, 10),
        },
        {
          start: new Date(2023, 1, 12, 8),
          end: new Date(2023, 1, 12, 18),
        },
        {
          start: new Date(2023, 1, 11, 9),
          end: new Date(2023, 1, 11, 11),
        },
      ];

      const expectedResult: Interval[] = [
        {
          start: new Date(2023, 1, 10, 9),
          end: new Date(2023, 1, 10, 10),
        },
        {
          start: new Date(2023, 1, 11, 10),
          end: new Date(2023, 1, 11, 11),
        },
        {
          start: new Date(2023, 1, 12, 8),
          end: new Date(2023, 1, 12, 10),
        },
      ];

      const result = findOverlappingIntervals(intervals);
      expect(result).toHaveLength(3);
      expectedResult.forEach((res, index) => {
        expect(res.start.valueOf()).toBe(result[index].start.valueOf());
        expect(res.end.valueOf()).toBe(result[index].end.valueOf());
      });
    });
  });

  it('accepts timestamp', () => {
    const firstInterval: Interval = {
      start: new Date(2023, 1, 19, 15, 30).getTime(),
      end: new Date(2023, 1, 19, 17, 30).getTime(),
    };
    const secondInterval: Interval = {
      start: new Date(2023, 1, 19, 17, 0).getTime(),
      end: new Date(2023, 1, 19, 18, 45).getTime(),
    };
    const intervals = [firstInterval, secondInterval];

    const result = findOverlappingIntervals(intervals);
    expect(result).toHaveLength(1);
    expect(result[0].start.valueOf()).toBe(secondInterval.start.valueOf());
    expect(result[0].end.valueOf()).toBe(firstInterval.end.valueOf());
  });

  it('throws an exception if the start date of any time interval is after the end date', () => {
    const block = () => {
      findOverlappingIntervals([
        { start: new Date(2023, 1, 19), end: new Date(2023, 1, 20) },
        { start: new Date(2023, 1, 20), end: new Date(2023, 1, 19) },
      ]);
    };
    expect(block).toThrow(new RangeError("End is before start"));
  });

  it('throws an exception if the start date of any time interval is `Invalid Date`', () => {
    const block = () => findOverlappingIntervals([
      { start: new Date(NaN), end: new Date(2023, 1, 20) },
      { start: new Date(2023, 1, 20), end: new Date(2023, 1, 19) },
    ]);
    expect(block).toThrow(new RangeError("Invalid time value"));
  });

  it('throws an exception if the end date of any time interval is `Invalid Date`', () => {
    const block = () => {
      findOverlappingIntervals([
        { start: new Date(2023, 1, 19), end: new Date(2023, 1, 20) },
        { start: new Date(2023, 1, 20), end: new Date(NaN) },
      ]);
    };
    expect(block).toThrow(new RangeError("Invalid time value"));
  });
});