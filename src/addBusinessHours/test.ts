import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.ts";
import { addBusinessHours } from "./index.ts";

describe("addBusinessHours", () => {
  it("adds business hours within the same day", () => {
    // Tuesday, 10 AM + 2 hours = Tuesday, 12 PM
    const result = addBusinessHours(new Date(2023, 0, 3, 10, 0), 2);
    expect(result).toEqual(new Date(2023, 0, 3, 12, 0));
  });

  it("adds business hours that span to the next day", () => {
    // Tuesday, 2 PM + 5 hours = Wednesday, 11 AM
    const result = addBusinessHours(new Date(2023, 0, 3, 14, 0), 5);
    expect(result).toEqual(new Date(2023, 0, 4, 11, 0));
  });

  it("adds business hours that span multiple days", () => {
    // Tuesday, 3 PM + 10 hours = Thursday, 9 AM
    const result = addBusinessHours(new Date(2023, 0, 3, 15, 0), 10);
    expect(result).toEqual(new Date(2023, 0, 5, 9, 0));
  });

  it("skips the weekend when adding hours", () => {
    // Friday, 4 PM + 3 hours = Monday, 11 AM
    const result = addBusinessHours(new Date(2023, 0, 6, 16, 0), 3);
    expect(result).toEqual(new Date(2023, 0, 9, 11, 0));
  });

  it("handles starting before business hours", () => {
    // Tuesday, 8 AM + 2 hours = Tuesday, 11 AM
    const result = addBusinessHours(new Date(2023, 0, 3, 8, 0), 2);
    expect(result).toEqual(new Date(2023, 0, 3, 11, 0));
  });

  it("handles starting after business hours", () => {
    // Tuesday, 6 PM + 2 hours = Wednesday, 11 AM
    const result = addBusinessHours(new Date(2023, 0, 3, 18, 0), 2);
    expect(result).toEqual(new Date(2023, 0, 4, 11, 0));
  });

  it("handles starting on a weekend", () => {
    // Saturday, 2 PM + 2 hours = Monday, 11 AM
    const result = addBusinessHours(new Date(2023, 0, 7, 14, 0), 2);
    expect(result).toEqual(new Date(2023, 0, 9, 11, 0));
  });

  it("subtracts business hours within the same day", () => {
    // Tuesday, 2 PM - 2 hours = Tuesday, 12 PM
    const result = addBusinessHours(new Date(2023, 0, 3, 14, 0), -2);
    expect(result).toEqual(new Date(2023, 0, 3, 12, 0));
  });

  it("subtracts business hours that span to the previous day", () => {
    // Wednesday, 11 AM - 5 hours = Tuesday, 2 PM
    const result = addBusinessHours(new Date(2023, 0, 4, 11, 0), -5);
    expect(result).toEqual(new Date(2023, 0, 3, 14, 0));
  });

  it("skips the weekend when subtracting hours", () => {
    // Monday, 11 AM - 3 hours = Friday, 4 PM
    const result = addBusinessHours(new Date(2023, 0, 9, 11, 0), -3);
    expect(result).toEqual(new Date(2023, 0, 6, 16, 0));
  });

  it("handles subtracting from before business hours", () => {
    // Tuesday, 8 AM - 2 hours = Monday, 3 PM
    const result = addBusinessHours(new Date(2023, 0, 3, 8, 0), -2);
    expect(result).toEqual(new Date(2023, 0, 2, 15, 0));
  });

  it("handles subtracting from after business hours", () => {
    // Tuesday, 6 PM - 2 hours = Tuesday, 3 PM
    const result = addBusinessHours(new Date(2023, 0, 3, 18, 0), -2);
    expect(result).toEqual(new Date(2023, 0, 3, 15, 0));
  });

  it("returns the same date when adding 0 hours", () => {
    const date = new Date(2023, 0, 3, 14, 0);
    const result = addBusinessHours(date, 0);
    expect(result).toEqual(date);
  });

  it("accepts a timestamp", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 3, 10, 0).getTime(),
      2,
    );
    expect(result).toEqual(new Date(2023, 0, 3, 12, 0));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2023, 0, 3, 14, 0);
    addBusinessHours(date, 5);
    expect(date).toEqual(new Date(2023, 0, 3, 14, 0));
  });

  it("returns Invalid Date for invalid input date", () => {
    const result = addBusinessHours(new Date(NaN), 5);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns Invalid Date for NaN amount", () => {
    const result = addBusinessHours(new Date(2023, 0, 3, 14, 0), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  describe("custom business hours", () => {
    it("respects custom start and end hours", () => {
      // Tuesday, 8 AM + 2 hours = Tuesday, 10 AM (with 8-18 hours)
      const result = addBusinessHours(new Date(2023, 0, 3, 8, 0), 2, {
        startOfDay: 8,
        endOfDay: 18,
      });
      expect(result).toEqual(new Date(2023, 0, 3, 10, 0));
    });

    it("handles end of custom business day", () => {
      // Tuesday, 5 PM + 2 hours = Wednesday, 9 AM (with 8-18 hours)
      const result = addBusinessHours(new Date(2023, 0, 3, 17, 0), 2, {
        startOfDay: 8,
        endOfDay: 18,
      });
      expect(result).toEqual(new Date(2023, 0, 4, 9, 0));
    });
  });

  describe("custom working days", () => {
    it("includes Saturday when specified in workingDays", () => {
      // Friday, 4 PM + 3 hours = Saturday, 11 AM
      const result = addBusinessHours(new Date(2023, 0, 6, 16, 0), 3, {
        workingDays: [1, 2, 3, 4, 5, 6], // Mon-Sat
      });
      expect(result).toEqual(new Date(2023, 0, 7, 11, 0));
    });

    it("skips Monday when not in workingDays", () => {
      // Friday, 4 PM + 3 hours = Tuesday, 11 AM (skips Mon)
      const result = addBusinessHours(new Date(2023, 0, 6, 16, 0), 3, {
        workingDays: [2, 3, 4, 5], // Tue-Fri
      });
      expect(result).toEqual(new Date(2023, 0, 10, 11, 0));
    });
  });

  describe("holidays", () => {
    it("skips a holiday when adding hours", () => {
      // Monday (Jan 2) is a holiday, Tuesday, 4 PM + 3 hours = Thursday, 11 AM
      const result = addBusinessHours(new Date(2023, 0, 3, 16, 0), 3, {
        holidays: [new Date(2023, 0, 4)], // Wednesday is a holiday
      });
      expect(result).toEqual(new Date(2023, 0, 5, 11, 0));
    });

    it("handles starting on a holiday", () => {
      // Monday is a holiday, Monday, 2 PM + 2 hours = Tuesday, 11 AM
      const result = addBusinessHours(new Date(2023, 0, 2, 14, 0), 2, {
        holidays: [new Date(2023, 0, 2)],
      });
      expect(result).toEqual(new Date(2023, 0, 3, 11, 0));
    });
  });

  describe("edge cases", () => {
    it("handles fractional hours", () => {
      // Tuesday, 10 AM + 0.5 hours = Tuesday, 10:30 AM
      const result = addBusinessHours(new Date(2023, 0, 3, 10, 0), 0.5);
      expect(result).toEqual(new Date(2023, 0, 3, 10, 30));
    });

    it("handles large number of hours", () => {
      // Tuesday, 9 AM + 40 hours (5 full days) = Tuesday next week, 9 AM
      const result = addBusinessHours(new Date(2023, 0, 3, 9, 0), 40);
      expect(result).toEqual(new Date(2023, 0, 10, 9, 0));
    });

    it("returns Invalid Date for invalid business hours config", () => {
      const result = addBusinessHours(new Date(2023, 0, 3, 14, 0), 2, {
        startOfDay: 17,
        endOfDay: 9, // Invalid: start >= end
      });
      expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
  });

  it("resolves the date type by default", () => {
    const result = addBusinessHours(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = addBusinessHours(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const result = addBusinessHours("2023-01-03T06:00:00Z", 2, {
        in: tz("Asia/Singapore"),
      });
      expect(result.toISOString()).toBe("2023-01-03T16:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2023-01-03T10:00:00Z");
      const result = addBusinessHours(date, 2, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
