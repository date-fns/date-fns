import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getWeeksInMonth } from "./index.js";

describe("getWeeksInMonth", () => {
  it("returns the number of calendar weeks the month in the given date spans", () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0));
    expect(result).toBe(4);
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
      weekStartsOn: 1,
    });
    expect(result).toBe(5);
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
      locale: {
        options: { weekStartsOn: 1 },
      },
    });
    expect(result).toBe(5);
  });

  it("options.weekStartsOn overwrites the first day of the week specified in locale", () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      },
    });
    expect(result).toBe(5);
  });

  it("accepts timestamps", () => {
    const result = getWeeksInMonth(
      new Date(2017, 3 /* Apr */, 8, 18, 0).getTime(),
    );
    expect(result).toBe(6);
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    getWeeksInMonth(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns NaN if the date is `Invalid Date`", () => {
    const result = getWeeksInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getWeeksInMonth("2023-12-31T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(6);
      expect(
        getWeeksInMonth("2023-12-31T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(5);
      expect(
        getWeeksInMonth("2024-01-01T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(6);
      expect(
        getWeeksInMonth("2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(5);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getWeeksInMonth(arg, { in: options?.in });
      }
    });
  });
});
