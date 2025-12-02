import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { isWithinBusinessHours } from "./index.ts";

describe("isWithinBusinessHours", () => {
  it("returns true for a weekday during business hours", () => {
    // Tuesday, 2 PM
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 14, 0));
    expect(result).toBe(true);
  });

  it("returns false for a weekday before business hours", () => {
    // Tuesday, 8 AM
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 8, 0));
    expect(result).toBe(false);
  });

  it("returns false for a weekday after business hours", () => {
    // Tuesday, 6 PM
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 18, 0));
    expect(result).toBe(false);
  });

  it("returns true for the start of business hours", () => {
    // Tuesday, 9 AM
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 9, 0));
    expect(result).toBe(true);
  });

  it("returns false for the end of business hours", () => {
    // Tuesday, 5 PM (17:00)
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 17, 0));
    expect(result).toBe(false);
  });

  it("returns true just before the end of business hours", () => {
    // Tuesday, 4:59 PM
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 16, 59));
    expect(result).toBe(true);
  });

  it("returns false for Saturday", () => {
    // Saturday, 2 PM
    const result = isWithinBusinessHours(new Date(2023, 0, 7, 14, 0));
    expect(result).toBe(false);
  });

  it("returns false for Sunday", () => {
    // Sunday, 2 PM
    const result = isWithinBusinessHours(new Date(2023, 0, 8, 14, 0));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    // Tuesday, 2 PM
    const result = isWithinBusinessHours(
      new Date(2023, 0, 3, 14, 0).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false for invalid date", () => {
    const result = isWithinBusinessHours(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("custom business hours", () => {
    it("respects custom start and end hours", () => {
      // Tuesday, 8 AM - should be true with 8-18 hours
      const result = isWithinBusinessHours(new Date(2023, 0, 3, 8, 0), {
        startOfDay: 8,
        endOfDay: 18,
      });
      expect(result).toBe(true);
    });

    it("returns false before custom start hour", () => {
      const result = isWithinBusinessHours(new Date(2023, 0, 3, 7, 0), {
        startOfDay: 8,
        endOfDay: 18,
      });
      expect(result).toBe(false);
    });

    it("returns false after custom end hour", () => {
      const result = isWithinBusinessHours(new Date(2023, 0, 3, 18, 0), {
        startOfDay: 8,
        endOfDay: 18,
      });
      expect(result).toBe(false);
    });
  });

  describe("custom working days", () => {
    it("includes Saturday when specified in workingDays", () => {
      // Saturday, 2 PM
      const result = isWithinBusinessHours(new Date(2023, 0, 7, 14, 0), {
        workingDays: [1, 2, 3, 4, 5, 6], // Mon-Sat
      });
      expect(result).toBe(true);
    });

    it("excludes Monday when not in workingDays", () => {
      // Monday, 2 PM
      const result = isWithinBusinessHours(new Date(2023, 0, 2, 14, 0), {
        workingDays: [2, 3, 4, 5], // Tue-Fri
      });
      expect(result).toBe(false);
    });

    it("works with only weekend days as working days", () => {
      // Saturday, 2 PM
      const result = isWithinBusinessHours(new Date(2023, 0, 7, 14, 0), {
        workingDays: [0, 6], // Sun, Sat
      });
      expect(result).toBe(true);
    });
  });

  describe("holidays", () => {
    it("returns false for a date that is a holiday", () => {
      // Monday, 2 PM (but it's a holiday)
      const result = isWithinBusinessHours(new Date(2023, 0, 2, 14, 0), {
        holidays: [new Date(2023, 0, 2)],
      });
      expect(result).toBe(false);
    });

    it("returns true for a date that is not a holiday", () => {
      // Tuesday, 2 PM (Monday is holiday, not Tuesday)
      const result = isWithinBusinessHours(new Date(2023, 0, 3, 14, 0), {
        holidays: [new Date(2023, 0, 2)],
      });
      expect(result).toBe(true);
    });

    it("handles multiple holidays", () => {
      // Wednesday is a holiday
      const result = isWithinBusinessHours(new Date(2023, 0, 4, 14, 0), {
        holidays: [new Date(2023, 0, 2), new Date(2023, 0, 4)],
      });
      expect(result).toBe(false);
    });

    it("matches holidays by day regardless of time", () => {
      // Monday, 2 PM (holiday specified at midnight)
      const result = isWithinBusinessHours(new Date(2023, 0, 2, 14, 0), {
        holidays: [new Date(2023, 0, 2, 0, 0)],
      });
      expect(result).toBe(false);
    });
  });

  describe("edge cases", () => {
    it("returns false when startOfDay is invalid", () => {
      const result = isWithinBusinessHours(new Date(2023, 0, 3, 14, 0), {
        startOfDay: -1,
      });
      expect(result).toBe(false);
    });

    it("returns false when endOfDay is invalid", () => {
      const result = isWithinBusinessHours(new Date(2023, 0, 3, 14, 0), {
        endOfDay: 24,
      });
      expect(result).toBe(false);
    });

    it("returns false when startOfDay >= endOfDay", () => {
      const result = isWithinBusinessHours(new Date(2023, 0, 3, 14, 0), {
        startOfDay: 17,
        endOfDay: 9,
      });
      expect(result).toBe(false);
    });

    it("returns false when startOfDay equals endOfDay", () => {
      const result = isWithinBusinessHours(new Date(2023, 0, 3, 14, 0), {
        startOfDay: 9,
        endOfDay: 9,
      });
      expect(result).toBe(false);
    });
  });

  describe("context", () => {
    it("works with timezone context", () => {
      // 2023-01-03T14:00:00 in Singapore timezone
      const result = isWithinBusinessHours("2023-01-03T06:00:00Z", {
        in: tz("Asia/Singapore"),
      });
      expect(result).toBe(true);
    });

    it("returns the context date type", () => {
      const result = isWithinBusinessHours("2023-01-03T14:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(typeof result).toBe("boolean");
    });
  });
});
