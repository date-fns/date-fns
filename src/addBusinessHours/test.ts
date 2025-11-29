import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.ts";
import { addBusinessHours } from "./index.ts";

describe("addBusinessHours", () => {
  it("adds business hours within the same working day", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 10, 0), 3);
    expect(result).toEqual(new Date(2023, 0, 2, 13, 0));
  });

  it("adds business hours crossing to the next working day", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 15, 0), 4);
    // 2 hours left on Monday (15:00-17:00), 2 hours on Tuesday (9:00-11:00)
    expect(result).toEqual(new Date(2023, 0, 3, 11, 0));
  });

  it("adds business hours crossing a weekend", () => {
    const result = addBusinessHours(new Date(2023, 0, 6, 15, 0), 4);
    // Friday 15:00 + 2 hours = Friday 17:00
    // Remaining 2 hours on Monday 9:00-11:00
    expect(result).toEqual(new Date(2023, 0, 9, 11, 0));
  });

  it("adds business hours crossing multiple weeks", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 9, 0), 50);
    // 50 hours = 6.25 working days
    // Mon: 8h, Tue: 8h, Wed: 8h, Thu: 8h, Fri: 8h, Mon: 8h, Tue: 2h
    // Result: Tuesday at 11:00
    expect(result).toEqual(new Date(2023, 0, 10, 11, 0));
  });

  it("subtracts business hours within the same day", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 14, 0), -3);
    expect(result).toEqual(new Date(2023, 0, 2, 11, 0));
  });

  it("subtracts business hours crossing to previous day", () => {
    const result = addBusinessHours(new Date(2023, 0, 3, 11, 0), -4);
    // 2 hours on Tuesday (9:00-11:00), 2 hours on Monday (15:00-17:00)
    expect(result).toEqual(new Date(2023, 0, 2, 15, 0));
  });

  it("subtracts business hours crossing a weekend", () => {
    const result = addBusinessHours(new Date(2023, 0, 9, 11, 0), -4);
    // 2 hours on Monday (9:00-11:00), 2 hours on Friday (15:00-17:00)
    expect(result).toEqual(new Date(2023, 0, 6, 15, 0));
  });

  it("returns the same date when adding 0 hours", () => {
    const date = new Date(2023, 0, 2, 10, 0);
    const result = addBusinessHours(date, 0);
    expect(result).toEqual(date);
  });

  it("does not mutate the original date", () => {
    const date = new Date(2023, 0, 2, 10, 0);
    const originalTime = date.getTime();
    addBusinessHours(date, 5);
    expect(date.getTime()).toBe(originalTime);
  });

  it("returns Invalid Date for invalid input date", () => {
    const result = addBusinessHours(new Date(NaN), 5);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns Invalid Date for NaN amount", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 10, 0), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("accepts a timestamp", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 2, 10, 0).getTime(),
      3,
    );
    expect(result).toEqual(new Date(2023, 0, 2, 13, 0));
  });

  it("skips holidays when adding hours", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 2, 15, 0), // Monday 3 PM
      10,
      {
        holidays: [new Date(2023, 0, 3)], // Tuesday is holiday
      },
    );
    // 2 hours on Monday (15:00-17:00), 8 hours on Wednesday (9:00-17:00)
    expect(result).toEqual(new Date(2023, 0, 4, 17, 0));
  });

  it("skips holidays when subtracting hours", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 4, 11, 0), // Wednesday 11 AM
      -10,
      {
        holidays: [new Date(2023, 0, 3)], // Tuesday is holiday
      },
    );
    // 2 hours on Wednesday (9:00-11:00), 8 hours on Monday (9:00-17:00)
    expect(result).toEqual(new Date(2023, 0, 2, 9, 0));
  });

  it("works with custom business hours", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 2, 16, 0), // Monday 4 PM
      4,
      {
        startOfDay: "08:00",
        endOfDay: "18:00", // 10-hour work day
      },
    );
    // 2 hours on Monday (16:00-18:00), 2 hours on Tuesday (8:00-10:00)
    expect(result).toEqual(new Date(2023, 0, 3, 10, 0));
  });

  it("works with custom working days including Saturday", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 6, 15, 0), // Friday 3 PM
      4,
      {
        workingDays: [1, 2, 3, 4, 5, 6], // Mon-Sat
      },
    );
    // 2 hours on Friday (15:00-17:00), 2 hours on Saturday (9:00-11:00)
    expect(result).toEqual(new Date(2023, 0, 7, 11, 0));
  });

  it("handles starting from a non-working day (weekend)", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 7, 10, 0), // Saturday 10 AM
      5,
    );
    // Should start from Monday 9:00 and add 5 hours
    expect(result).toEqual(new Date(2023, 0, 9, 14, 0));
  });

  it("handles starting from a holiday", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 2, 10, 0), // Monday (holiday)
      5,
      {
        holidays: [new Date(2023, 0, 2)],
      },
    );
    // Should start from Tuesday 9:00 and add 5 hours
    expect(result).toEqual(new Date(2023, 0, 3, 14, 0));
  });

  it("handles starting before business hours", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 2, 7, 0), // Monday 7 AM (before 9 AM)
      3,
    );
    // Should start from 9:00 and add 3 hours
    expect(result).toEqual(new Date(2023, 0, 2, 12, 0));
  });

  it("handles starting after business hours", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 2, 19, 0), // Monday 7 PM (after 5 PM)
      3,
    );
    // Should start from Tuesday 9:00 and add 3 hours
    expect(result).toEqual(new Date(2023, 0, 3, 12, 0));
  });

  it("handles fractional hours", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 10, 0), 1.5);
    expect(result).toEqual(new Date(2023, 0, 2, 11, 30));
  });

  it("handles very small fractional hours", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 10, 0), 0.25);
    expect(result).toEqual(new Date(2023, 0, 2, 10, 15));
  });

  it("handles negative fractional hours", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 11, 30), -1.5);
    expect(result).toEqual(new Date(2023, 0, 2, 10, 0));
  });

  it("handles adding hours that end exactly at business day end", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 9, 0), 8);
    expect(result).toEqual(new Date(2023, 0, 2, 17, 0));
  });

  it("handles subtracting hours that end exactly at business day start", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 17, 0), -8);
    expect(result).toEqual(new Date(2023, 0, 2, 9, 0));
  });

  it("handles adding hours starting at exact business day start", () => {
    const result = addBusinessHours(new Date(2023, 0, 2, 9, 0), 5);
    expect(result).toEqual(new Date(2023, 0, 2, 14, 0));
  });

  it("handles subtracting hours starting at exact business day start", () => {
    const result = addBusinessHours(new Date(2023, 0, 3, 9, 0), -5);
    // Goes to previous day at 12:00 PM (17:00 - 5 hours)
    expect(result).toEqual(new Date(2023, 0, 2, 12, 0));
  });

  it("handles multiple holidays in sequence", () => {
    const result = addBusinessHours(
      new Date(2023, 0, 6, 15, 0), // Friday 3 PM
      10,
      {
        holidays: [
          new Date(2023, 0, 9), // Monday
          new Date(2023, 0, 10), // Tuesday
        ],
      },
    );
    // 2 hours on Friday (15:00-17:00), 8 hours on Wednesday (9:00-17:00)
    expect(result).toEqual(new Date(2023, 0, 11, 17, 0));
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
      const result = addBusinessHours("2024-01-02T10:00:00Z", 5, {
        in: tz("Asia/Singapore"),
      });
      // Start: Tuesday 10:00 UTC = 18:00 SGT (after business hours)
      // Should move to next working moment and add 5 hours
      expect(result).toBeInstanceOf(TZDate);
    });

    it("resolves the context date type", () => {
      const result = addBusinessHours(new Date("2024-01-02T10:00:00Z"), 5, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
