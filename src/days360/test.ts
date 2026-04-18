import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { days360 } from "./index.ts";

describe("days360", () => {
  describe("US/NASD method (default)", () => {
    it("returns the number of days between two dates on a 360-day year", () => {
      // Jan 1 to Dec 31 = 360 days on 360-day year
      const result = days360(
        new Date(2011, 0 /* Jan */, 1),
        new Date(2011, 11 /* Dec */, 31),
      );
      expect(result).toBe(360);
    });

    it("returns 0 when start and end dates are the same", () => {
      const result = days360(
        new Date(2011, 5 /* Jun */, 15),
        new Date(2011, 5 /* Jun */, 15),
      );
      expect(result).toBe(0);
    });

    it("returns a negative number when start date is after end date", () => {
      const result = days360(
        new Date(2011, 5 /* Jun */, 1),
        new Date(2011, 0 /* Jan */, 1),
      );
      expect(result).toBe(-150);
    });

    it("accepts timestamps", () => {
      const result = days360(
        new Date(2011, 0 /* Jan */, 30).getTime(),
        new Date(2011, 1 /* Feb */, 1).getTime(),
      );
      expect(result).toBe(1);
    });

    it("handles start date on the 31st — adjusts to 30", () => {
      const result = days360(
        new Date(2011, 0 /* Jan */, 31),
        new Date(2011, 2 /* Mar */, 31),
      );
      expect(result).toBe(60);
    });

    it("handles end date on the 31st when start is before 30 — advances end to 1st of next month", () => {
      // Jan 15, Mar 31 → D1=15, D2=31 (D1 < 30) → M2=4, D2=1
      const result = days360(
        new Date(2011, 0 /* Jan */, 15),
        new Date(2011, 2 /* Mar */, 31),
      );
      expect(result).toBe(76);
    });

    it("handles end date on the 31st when start is on the 30th — caps end to 30", () => {
      // Jan 30, Mar 31 → D1=30, D2=30
      const result = days360(
        new Date(2011, 0 /* Jan */, 30),
        new Date(2011, 2 /* Mar */, 31),
      );
      expect(result).toBe(60);
    });

    it("handles start date as last day of February in a non-leap year", () => {
      // Feb 28 (non-leap) → D1=30; Aug 31 → D2=30 (D1 is now 30)
      const result = days360(
        new Date(2011, 1 /* Feb */, 28),
        new Date(2011, 7 /* Aug */, 31),
      );
      expect(result).toBe(180);
    });

    it("handles start date as last day of February in a leap year", () => {
      // Feb 29 (leap) → D1=30; Aug 31 → D2=30 (D1 is now 30)
      const result = days360(
        new Date(2008, 1 /* Feb */, 29),
        new Date(2008, 7 /* Aug */, 31),
      );
      expect(result).toBe(180);
    });

    it("does not treat Feb 28 as last day of February in a leap year", () => {
      // In a leap year, Feb 28 is NOT the last day — no D1 adjustment
      const result = days360(
        new Date(2008, 1 /* Feb */, 28),
        new Date(2008, 7 /* Aug */, 31),
      );
      // D1=28 (no adjustment), D2=31, D1 < 30 → M2=9, D2=1
      // (9-2)*30 + (1-28) = 210 - 27 = 183
      expect(result).toBe(183);
    });

    it("handles end date as last day of February — caps to 30 when start is on or after 30th", () => {
      // Jan 30, Feb 28 (non-leap) → startDay=30, endDay(last of Feb)→30
      const result = days360(
        new Date(2011, 0 /* Jan */, 30),
        new Date(2011, 1 /* Feb */, 28),
      );
      expect(result).toBe(30);
    });

    it("handles end date as last day of February (leap year) — caps to 30 when start is on or after 30th", () => {
      // Jan 30, Feb 29 (leap) → startDay=30, endDay(last of Feb)→30
      const result = days360(
        new Date(2008, 0 /* Jan */, 30),
        new Date(2008, 1 /* Feb */, 29),
      );
      expect(result).toBe(30);
    });

    it("handles end date as last day of February — advances to 1st of next month when start is before 30th", () => {
      // Jan 15, Feb 28 (non-leap) → startDay=15 (< 30), endDay(last of Feb) → Mar 1
      // (3-1)*30 + (1-15) = 60 - 14 = 46
      const result = days360(
        new Date(2011, 0 /* Jan */, 15),
        new Date(2011, 1 /* Feb */, 28),
      );
      expect(result).toBe(46);
    });
  });

  describe("European method (method: true)", () => {
    it("caps both start and end day to 30 when they are 31", () => {
      // Jan 31, Mar 31 → D1=30, D2=30
      const result = days360(
        new Date(2011, 0 /* Jan */, 31),
        new Date(2011, 2 /* Mar */, 31),
        { method: true },
      );
      expect(result).toBe(60);
    });

    it("caps only end day to 30 when start day is not 31", () => {
      const result = days360(
        new Date(2011, 0 /* Jan */, 15),
        new Date(2011, 2 /* Mar */, 31),
        { method: true },
      );
      expect(result).toBe(75);
    });

    it("does not apply special February handling", () => {
      // Feb 28 (non-leap) — European method does NOT adjust this
      const result = days360(
        new Date(2011, 1 /* Feb */, 28),
        new Date(2011, 7 /* Aug */, 31),
        { method: true },
      );
      // D1=28 (no adjustment), D2=31→30
      // (8-2)*30 + (30-28) = 180 + 2 = 182
      expect(result).toBe(182);
    });

    it("is symmetric — reversing dates gives the same absolute value", () => {
      const forward = days360(
        new Date(2011, 0 /* Jan */, 15),
        new Date(2011, 2 /* Mar */, 31),
        { method: true },
      );
      const backward = days360(
        new Date(2011, 2 /* Mar */, 31),
        new Date(2011, 0 /* Jan */, 15),
        { method: true },
      );
      expect(forward).toBe(-backward);
    });
  });

  describe("invalid inputs", () => {
    it("returns NaN if the start date is invalid", () => {
      const result = days360(new Date(NaN), new Date(2011, 0, 1));
      expect(isNaN(result)).toBe(true);
    });

    it("returns NaN if the end date is invalid", () => {
      const result = days360(new Date(2011, 0, 1), new Date(NaN));
      expect(isNaN(result)).toBe(true);
    });
  });

  describe("context", () => {
    it("allows specifying the context timezone", () => {
      const result = days360("2011-01-01T00:00:00Z", "2011-12-31T00:00:00Z", {
        in: tz("UTC"),
      });
      expect(result).toBe(360);
    });
  });
});
