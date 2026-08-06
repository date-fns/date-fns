import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { addMonths } from "../addMonths/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";
import { differenceInMonths } from "./index.ts";

describe("differenceInMonths", () => {
  it("returns the number of full months between the given dates", () => {
    const result = differenceInMonths(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(12);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-12);
  });

  it("accepts timestamps", () => {
    const result = differenceInMonths(
      new Date(2014, 7 /* Aug */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(49);
  });

  describe("edge cases", () => {
    it("it returns diff of 1 month between Feb 28 2021 and Jan 30 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 1 /* Feb */, 28),
        new Date(2021, 0 /* Jan */, 30),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Feb 28 2021 and Jan 31 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 1 /* Feb */, 28),
        new Date(2021, 0 /* Jan */, 31),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Nov, 30 2021 and Oct, 31 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 10 /* Nov */, 30),
        new Date(2021, 9 /* Oct */, 31),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Oct, 31 2021 and Sep, 30 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 9 /* Oct */, 31),
        new Date(2021, 8 /* Sep */, 30),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 6 month between Oct, 31 2021 and Apr, 30 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 9 /* Oct */, 31),
        new Date(2021, 3 /* Apr */, 30),
      );
      expect(result).toBe(6);
    });

    it("it returns diff of -1 month between Sep, 30 2021 and Oct, 31 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 8 /* Sep */, 30),
        new Date(2021, 9 /* Oct */, 31),
      );
      expect(result).toBe(-1);
    });

    it("the difference is less than a month, but the given dates are in different calendar months", () => {
      const result = differenceInMonths(
        new Date(2014, 7 /* Aug */, 1),
        new Date(2014, 6 /* Jul */, 31),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInMonths(
        new Date(2014, 6 /* Jul */, 31),
        new Date(2014, 7 /* Aug */, 1),
      );
      expect(result).toBe(0);
    });

    it("the days of months of the given dates are the same", () => {
      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 6),
        new Date(2014, 7 /* Aug */, 6),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });

    it("counts a whole year between Feb 28 2026 and Feb 28 2027", () => {
      const result = differenceInMonths(
        new Date(2027, 1 /* Feb */, 28),
        new Date(2026, 1 /* Feb */, 28),
      );
      expect(result).toBe(12);
    });

    it("gives the same magnitude whichever way round the arguments go", () => {
      // The later date landing on the last day of February used to change the
      // magnitude depending on argument order.
      expect(
        differenceInMonths(
          new Date(2027, 1 /* Feb */, 28),
          new Date(2026, 1 /* Feb */, 28),
        ),
      ).toBe(12);
      expect(
        differenceInMonths(
          new Date(2026, 1 /* Feb */, 28),
          new Date(2027, 1 /* Feb */, 28),
        ),
      ).toBe(-12);

      expect(
        differenceInMonths(
          new Date(2025, 1 /* Feb */, 28),
          new Date(2024, 4 /* May */, 30),
        ),
      ).toBe(9);
      expect(
        differenceInMonths(
          new Date(2024, 4 /* May */, 30),
          new Date(2025, 1 /* Feb */, 28),
        ),
      ).toBe(-9);
    });

    it("round-trips with addMonths, which clamps to the month end", () => {
      // In a common year 31 January + 1 month clamps to the 28th...
      const jan31 = new Date(2026, 0 /* Jan */, 31);
      expect(addMonths(jan31, 1)).toEqual(new Date(2026, 1 /* Feb */, 28));
      expect(differenceInMonths(addMonths(jan31, 1), jan31)).toBe(1);
      expect(differenceInMonths(addMonths(jan31, 3), jan31)).toBe(3);

      // ...and in a leap year it clamps to the 29th instead
      const leapJan31 = new Date(2024, 0 /* Jan */, 31);
      expect(addMonths(leapJan31, 1)).toEqual(new Date(2024, 1 /* Feb */, 29));
      expect(differenceInMonths(addMonths(leapJan31, 1), leapJan31)).toBe(1);

      const leapDay = new Date(2024, 1 /* Feb */, 29);
      expect(differenceInMonths(addMonths(leapDay, 12), leapDay)).toBe(12);
    });

    it("follows the century leap year rules", () => {
      // 2000 is divisible by 400, so it is a leap year and 29 February exists
      const y2kJan31 = new Date(2000, 0 /* Jan */, 31);
      expect(addMonths(y2kJan31, 1)).toEqual(new Date(2000, 1 /* Feb */, 29));
      expect(differenceInMonths(addMonths(y2kJan31, 1), y2kJan31)).toBe(1);
      expect(
        differenceInMonths(
          new Date(2001, 1 /* Feb */, 28),
          new Date(2000, 1 /* Feb */, 29),
        ),
      ).toBe(12);
      expect(
        differenceInMonths(
          new Date(2000, 1 /* Feb */, 29),
          new Date(2001, 1 /* Feb */, 28),
        ),
      ).toBe(-12);

      // 1900 and 2100 are divisible by 100 but not 400, so February has 28 days
      const jan31In1900 = new Date(1900, 0 /* Jan */, 31);
      expect(addMonths(jan31In1900, 1)).toEqual(
        new Date(1900, 1 /* Feb */, 28),
      );
      expect(differenceInMonths(addMonths(jan31In1900, 1), jan31In1900)).toBe(
        1,
      );
      expect(
        differenceInMonths(
          new Date(2101, 1 /* Feb */, 28),
          new Date(2100, 1 /* Feb */, 28),
        ),
      ).toBe(12);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInMonths(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInMonths(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if both dates are `Invalid Date`", () => {
    const result = differenceInMonths(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2025, 0, 1, "Asia/Singapore");
    const dateRight = new TZDate(2024, 0, 1, "America/New_York");
    expect(differenceInMonths(dateLeft, dateRight)).toBe(11);
    expect(differenceInMonths(dateRight, dateLeft)).toBe(-11);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInMonths(arg1, arg2);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInMonths("2024-03-01T00:00:00Z", "2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(1);
      expect(
        differenceInMonths("2024-03-01T00:00:00Z", "2024-01-01T00:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(2);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ContextDate extends Date>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ContextDate>,
      ) {
        differenceInMonths(arg1, arg2, { in: options?.in });
      }
    });
  });
});
