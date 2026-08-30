import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.ts";
import { isWorkingDay } from "./index.ts";

describe("isWorkingDay", () => {
  it("returns true if the given date is a working day", () => {
    const result = isWorkingDay(new Date(2014, 8 /* Sep */, 22));
    expect(result).toBe(true);
  });

  it("returns false if the given date is a default weekend day", () => {
    expect(isWorkingDay(new Date(2014, 8 /* Sep */, 20))).toBe(false);
    expect(isWorkingDay(new Date(2014, 8 /* Sep */, 21))).toBe(false);
  });

  it("allows to specify custom weekend days", () => {
    expect(
      isWorkingDay(new Date(2014, 8 /* Sep */, 19), {
        weekendDays: [5, 6],
      }),
    ).toBe(false);
    expect(
      isWorkingDay(new Date(2014, 8 /* Sep */, 21), {
        weekendDays: [5, 6],
      }),
    ).toBe(true);
  });

  it("returns false if the given date is a non-working day", () => {
    const result = isWorkingDay(new Date(2014, 11 /* Dec */, 25), {
      nonWorkingDays: [new Date(2014, 11 /* Dec */, 25)],
    });

    expect(result).toBe(false);
  });

  it("matches non-working days by calendar day", () => {
    const result = isWorkingDay(new Date(2014, 11 /* Dec */, 25, 18, 30), {
      nonWorkingDays: [new Date(2014, 11 /* Dec */, 25, 9, 0)],
    });

    expect(result).toBe(false);
  });

  it("does not match non-working days across different years", () => {
    const result = isWorkingDay(new Date(2015, 11 /* Dec */, 25), {
      nonWorkingDays: [new Date(2014, 11 /* Dec */, 25)],
    });

    expect(result).toBe(true);
  });

  it("accepts timestamps in non-working days", () => {
    const result = isWorkingDay(new Date(2014, 11 /* Dec */, 25), {
      nonWorkingDays: [new Date(2014, 11, 25).getTime()],
    });

    expect(result).toBe(false);
  });

  it("returns false when a non-working day also falls on a weekend", () => {
    const result = isWorkingDay(new Date(2014, 11 /* Dec */, 27) /* Sat */, {
      nonWorkingDays: [new Date(2014, 11 /* Dec */, 27)],
    });

    expect(result).toBe(false);
  });

  it("returns true for every day when weekendDays is empty", () => {
    expect(
      isWorkingDay(new Date(2014, 8 /* Sep */, 20) /* Sat */, {
        weekendDays: [],
      }),
    ).toBe(true);
    expect(
      isWorkingDay(new Date(2014, 8 /* Sep */, 21) /* Sun */, {
        weekendDays: [],
      }),
    ).toBe(true);
  });

  it("combines custom weekendDays with nonWorkingDays", () => {
    const sunday = new Date(2014, 8 /* Sep */, 21);
    // Sunday is a working day under a Friday-Saturday weekend
    expect(isWorkingDay(sunday, { weekendDays: [5, 6] })).toBe(true);
    // ...unless it is also listed as a non-working day
    expect(
      isWorkingDay(sunday, {
        weekendDays: [5, 6],
        nonWorkingDays: [sunday],
      }),
    ).toBe(false);
    // Non-working days do not bleed into other days in the same week
    expect(
      isWorkingDay(sunday, {
        weekendDays: [5, 6],
        nonWorkingDays: [new Date(2014, 8 /* Sep */, 19) /* Fri */],
      }),
    ).toBe(true);
  });

  it("accepts a timestamp", () => {
    const result = isWorkingDay(new Date(2014, 8 /* Sep */, 22).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isWorkingDay(new Date(NaN));
    expect(result).toBe(false);
  });

  it("ignores invalid non-working days", () => {
    const result = isWorkingDay(new Date(2014, 8 /* Sep */, 22), {
      nonWorkingDays: [new Date(NaN)],
    });
    expect(result).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isWorkingDay("2024-08-18T17:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isWorkingDay("2024-08-17T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
    });

    it("matches non-working days in the specified context", () => {
      expect(
        isWorkingDay("2024-08-18T17:00:00Z", {
          in: tz("Asia/Singapore"),
          nonWorkingDays: ["2024-08-19T00:00:00+08:00"],
        }),
      ).toBe(false);
      expect(
        isWorkingDay("2024-08-17T03:00:00Z", {
          in: tz("America/New_York"),
          nonWorkingDays: ["2024-08-16T00:00:00-04:00"],
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isWorkingDay(arg, { in: options?.in });
      }
    });
  });
});
