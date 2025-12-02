import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { businessHoursInInterval } from "./index.ts";

describe("businessHoursInInterval", () => {
  it("calculates hours for a single business day", () => {
    // Monday 9 AM to Monday 5 PM
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 0),
      end: new Date(2023, 0, 2, 17, 0),
    });
    expect(result).toBe(8);
  });

  it("calculates hours for a partial business day", () => {
    // Monday 10 AM to Monday 3 PM
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 10, 0),
      end: new Date(2023, 0, 2, 15, 0),
    });
    expect(result).toBe(5);
  });

  it("calculates hours starting before business hours", () => {
    // Monday 8 AM to Monday 3 PM (only 9 AM - 3 PM counts)
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 8, 0),
      end: new Date(2023, 0, 2, 15, 0),
    });
    expect(result).toBe(6);
  });

  it("calculates hours ending after business hours", () => {
    // Monday 2 PM to Monday 6 PM (only 2 PM - 5 PM counts)
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 14, 0),
      end: new Date(2023, 0, 2, 18, 0),
    });
    expect(result).toBe(3);
  });

  it("returns 0 for interval completely outside business hours", () => {
    // Monday 6 PM to Monday 8 PM
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 18, 0),
      end: new Date(2023, 0, 2, 20, 0),
    });
    expect(result).toBe(0);
  });

  it("calculates hours across multiple business days", () => {
    // Monday 9 AM to Wednesday 5 PM (3 full days)
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 0),
      end: new Date(2023, 0, 4, 17, 0),
    });
    expect(result).toBe(24); // 8 hours * 3 days
  });

  it("calculates hours with partial days at start and end", () => {
    // Monday 2 PM to Wednesday 11 AM
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 14, 0),
      end: new Date(2023, 0, 4, 11, 0),
    });
    expect(result).toBe(13); // 3 hours Mon + 8 hours Tue + 2 hours Wed
  });

  it("skips weekends", () => {
    // Friday 2 PM to Monday 11 AM
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 6, 14, 0),
      end: new Date(2023, 0, 9, 11, 0),
    });
    expect(result).toBe(5); // 3 hours Fri + 2 hours Mon
  });

  it("returns 0 for interval entirely on weekend", () => {
    // Saturday 9 AM to Sunday 5 PM
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 7, 9, 0),
      end: new Date(2023, 0, 8, 17, 0),
    });
    expect(result).toBe(0);
  });

  it("calculates hours across a week with weekends", () => {
    // Monday 9 AM to next Monday 9 AM (5 business days)
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 0),
      end: new Date(2023, 0, 9, 9, 0),
    });
    expect(result).toBe(40); // 8 hours * 5 days
  });

  it("handles reversed interval (end before start)", () => {
    // Reversed: Monday 5 PM to Monday 9 AM (should still be 8 hours)
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 17, 0),
      end: new Date(2023, 0, 2, 9, 0),
    });
    expect(result).toBe(8);
  });

  it("returns 0 for same start and end time", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 0),
      end: new Date(2023, 0, 2, 9, 0),
    });
    expect(result).toBe(0);
  });

  it("accepts timestamps", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 0).getTime(),
      end: new Date(2023, 0, 2, 17, 0).getTime(),
    });
    expect(result).toBe(8);
  });

  it("returns NaN for invalid start date", () => {
    const result = businessHoursInInterval({
      start: new Date(NaN),
      end: new Date(2023, 0, 2, 17, 0),
    });
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for invalid end date", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 0),
      end: new Date(NaN),
    });
    expect(isNaN(result)).toBe(true);
  });

  describe("custom business hours", () => {
    it("respects custom start and end hours", () => {
      // Monday 8 AM to Monday 6 PM (with 8-18 hours)
      const result = businessHoursInInterval(
        {
          start: new Date(2023, 0, 2, 8, 0),
          end: new Date(2023, 0, 2, 18, 0),
        },
        { startOfDay: 8, endOfDay: 18 },
      );
      expect(result).toBe(10);
    });

    it("uses custom hours for partial day calculation", () => {
      // Monday 10 AM to Monday 4 PM (with 8-18 hours)
      const result = businessHoursInInterval(
        {
          start: new Date(2023, 0, 2, 10, 0),
          end: new Date(2023, 0, 2, 16, 0),
        },
        { startOfDay: 8, endOfDay: 18 },
      );
      expect(result).toBe(6);
    });
  });

  describe("custom working days", () => {
    it("includes Saturday when specified in workingDays", () => {
      // Friday 2 PM to Saturday 5 PM (with Sat as working day)
      const result = businessHoursInInterval(
        {
          start: new Date(2023, 0, 6, 14, 0),
          end: new Date(2023, 0, 7, 17, 0),
        },
        { workingDays: [1, 2, 3, 4, 5, 6] }, // Mon-Sat
      );
      expect(result).toBe(11); // 3 hours Fri + 8 hours Sat
    });

    it("excludes Monday when not in workingDays", () => {
      // Friday 9 AM to Tuesday 5 PM (excluding Mon)
      const result = businessHoursInInterval(
        {
          start: new Date(2023, 0, 6, 9, 0),
          end: new Date(2023, 0, 10, 17, 0),
        },
        { workingDays: [2, 3, 4, 5] }, // Tue-Fri
      );
      expect(result).toBe(16); // 8 hours Fri + 8 hours Tue
    });
  });

  describe("holidays", () => {
    it("excludes a holiday from calculation", () => {
      // Monday to Wednesday, with Tuesday as holiday
      const result = businessHoursInInterval(
        {
          start: new Date(2023, 0, 2, 9, 0),
          end: new Date(2023, 0, 4, 17, 0),
        },
        { holidays: [new Date(2023, 0, 3)] },
      );
      expect(result).toBe(16); // 8 hours Mon + 8 hours Wed
    });

    it("excludes multiple holidays", () => {
      // Monday to Friday, with Tuesday and Thursday as holidays
      const result = businessHoursInInterval(
        {
          start: new Date(2023, 0, 2, 9, 0),
          end: new Date(2023, 0, 6, 17, 0),
        },
        { holidays: [new Date(2023, 0, 3), new Date(2023, 0, 5)] },
      );
      expect(result).toBe(24); // Mon + Wed + Fri
    });

    it("matches holidays by day regardless of time", () => {
      const result = businessHoursInInterval(
        {
          start: new Date(2023, 0, 2, 9, 0),
          end: new Date(2023, 0, 4, 17, 0),
        },
        { holidays: [new Date(2023, 0, 3, 15, 30)] }, // Holiday with different time
      );
      expect(result).toBe(16); // Still excludes Tuesday
    });
  });

  describe("edge cases", () => {
    it("handles fractional hours with minutes", () => {
      // Monday 9:00 AM to Monday 9:30 AM
      const result = businessHoursInInterval({
        start: new Date(2023, 0, 2, 9, 0),
        end: new Date(2023, 0, 2, 9, 30),
      });
      expect(result).toBe(0.5);
    });

    it("handles fractional hours with seconds", () => {
      // Monday 9:00:00 AM to Monday 9:00:30 AM
      const result = businessHoursInInterval({
        start: new Date(2023, 0, 2, 9, 0, 0),
        end: new Date(2023, 0, 2, 9, 0, 30),
      });
      expect(result).toBeCloseTo(30 / 3600, 5); // 30 seconds
    });

    it("returns NaN for invalid business hours config", () => {
      const result = businessHoursInInterval(
        {
          start: new Date(2023, 0, 2, 9, 0),
          end: new Date(2023, 0, 2, 17, 0),
        },
        {
          startOfDay: 17,
          endOfDay: 9, // Invalid: start >= end
        },
      );
      expect(isNaN(result)).toBe(true);
    });

    it("handles large intervals", () => {
      // 4 weeks (20 business days)
      const result = businessHoursInInterval({
        start: new Date(2023, 0, 2, 9, 0),
        end: new Date(2023, 0, 30, 17, 0),
      });
      expect(result).toBe(160); // 20 days * 8 hours
    });
  });

  describe("context", () => {
    it("works with timezone context", () => {
      const result = businessHoursInInterval(
        {
          start: "2023-01-02T01:00:00Z", // 9 AM Singapore
          end: "2023-01-02T09:00:00Z", // 5 PM Singapore
        },
        { in: tz("Asia/Singapore") },
      );
      expect(result).toBe(8);
    });
  });
});
