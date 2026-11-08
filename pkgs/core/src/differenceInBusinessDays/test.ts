import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.ts";
import { differenceInBusinessDays } from "./index.ts";

describe("differenceInBusinessDays", () => {
  it("returns the number of business days between the given dates, excluding weekends", () => {
    const result = differenceInBusinessDays(
      new Date(2014, 6 /* Jul */, 18),
      new Date(2014, 0 /* Jan */, 10),
    );
    expect(result).toBe(135);
  });

  it("counts calendar weekdays across a skipped local date", () => {
    // Samoa skipped Friday, 30 December 2011 when crossing the date line.
    const thursday = new TZDate(2011, 11 /* Dec */, 29, "Pacific/Apia");
    const saturday = new TZDate(2011, 11 /* Dec */, 31, "Pacific/Apia");

    expect(differenceInBusinessDays(saturday, thursday)).toBe(2);
    expect(differenceInBusinessDays(thursday, saturday)).toBe(-1);
  });

  it("counts full weeks consistently with partial weeks across a skipped date", () => {
    const monday = new TZDate(2011, 11 /* Dec */, 26, "Pacific/Apia");
    const nextMonday = new TZDate(2012, 0 /* Jan */, 2, "Pacific/Apia");

    expect(differenceInBusinessDays(nextMonday, monday)).toBe(5);
    expect(differenceInBusinessDays(monday, nextMonday)).toBe(-5);
  });

  it("can handle long ranges", () => {
    const result = differenceInBusinessDays(
      new Date(15000, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1),
    );
    expect(result).toBe(3387885);
  });

  it("the same except given first date falls on a weekend", () => {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 20),
      new Date(2019, 6 /* Jul */, 18),
    );
    expect(result).toBe(2);
  });

  it("the same except given second date falls on a weekend", () => {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 23),
      new Date(2019, 6 /* Jul */, 20),
    );
    expect(result).toBe(1);
  });

  it("the same except both given dates fall on a weekend", () => {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 28),
      new Date(2019, 6 /* Jul */, 20),
    );
    expect(result).toBe(5);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInBusinessDays(
      new Date(2014, 0 /* Jan */, 10),
      new Date(2014, 6 /* Jul */, 20),
    );
    expect(result).toBe(-135);
  });

  it("accepts timestamps", () => {
    const result = differenceInBusinessDays(
      new Date(2014, 6, 18).getTime(),
      new Date(2014, 0, 10).getTime(),
    );
    expect(result).toBe(135);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2025, 0, 1, "Asia/Singapore");
    const dateRight = new TZDate(2024, 0, 1, "America/New_York");
    expect(differenceInBusinessDays(dateLeft, dateRight)).toBe(262);
    expect(differenceInBusinessDays(dateRight, dateLeft)).toBe(-261);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInBusinessDays(arg1, arg2);
    }
  });

  describe("context", () => {
    it("counts skipped calendar weekdays in the context without mutating Date inputs", () => {
      const thursday = new Date("2011-12-29T00:00:00-10:00");
      const saturday = new Date("2011-12-31T00:00:00+14:00");
      const thursdayTime = thursday.getTime();
      const saturdayTime = saturday.getTime();
      const options = { in: tz("Pacific/Apia") };

      expect(differenceInBusinessDays(saturday, thursday, options)).toBe(2);
      expect(differenceInBusinessDays(thursday, saturday, options)).toBe(-1);
      expect(thursday.getTime()).toBe(thursdayTime);
      expect(saturday.getTime()).toBe(saturdayTime);
    });

    it("allows to specify the context", () => {
      expect(
        differenceInBusinessDays(
          "2024-04-10T02:00:00Z",
          "2024-04-07T02:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(1);
      expect(
        differenceInBusinessDays(
          "2024-04-10T02:00:00Z",
          "2024-04-07T02:00:00Z",
          { in: tz("Asia/Singapore") },
        ),
      ).toBe(2);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ContextDate extends Date>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ContextDate>,
      ) {
        differenceInBusinessDays(arg1, arg2, { in: options?.in });
      }
    });
  });

  describe("edge cases", () => {
    it("the difference is less than a day, but the given dates are in different calendar days", () => {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 23, 59),
      );
      expect(result).toBe(1);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 4, 23, 59),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(-1);
    });

    it("the time values of the given dates are the same", () => {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 0, 0),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number) {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });

    it("returns NaN if the first date is `Invalid Date`", () => {
      const result = differenceInBusinessDays(
        new Date(NaN),
        new Date(2017, 0 /* Jan */, 1),
      );
      expect(isNaN(result)).toBe(true);
    });

    it("returns NaN if the second date is `Invalid Date`", () => {
      const result = differenceInBusinessDays(
        new Date(2017, 0 /* Jan */, 1),
        new Date(NaN),
      );
      expect(isNaN(result)).toBe(true);
    });

    it("returns NaN if the both dates are `Invalid Date`", () => {
      const result = differenceInBusinessDays(new Date(NaN), new Date(NaN));
      expect(isNaN(result)).toBe(true);
    });
  });
});
