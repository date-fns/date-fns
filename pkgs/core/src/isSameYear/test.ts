import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.ts";
import { isSameYear } from "./index.ts";

describe("isSameYear", () => {
  it("returns true if the given dates have the same year", () => {
    const result = isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different years", () => {
    const result = isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameYear(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameYear(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameYear(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameYear(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSameYear("2023-12-31T15:00:00Z", "2023-12-31T21:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
      expect(
        isSameYear("2023-12-31T16:00:00Z", "2024-08-23T00:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isSameYear(arg1, arg2, { in: options?.in });
      }
    });
  });
});

describe("isSameYear with the yearStartsOn option", () => {
  it("returns true for dates in the same fiscal year across a calendar year boundary", () => {
    const result = isSameYear(
      new Date(2025, 11 /* Dec */, 15),
      new Date(2026, 1 /* Feb */, 15),
      { yearStartsOn: 3 /* Apr */ },
    );
    expect(result).toBe(true);
  });

  it("returns false when one date is in the next fiscal year", () => {
    const result = isSameYear(
      new Date(2026, 2 /* Mar */, 31),
      new Date(2026, 3 /* Apr */, 1),
      { yearStartsOn: 3 /* Apr */ },
    );
    expect(result).toBe(false);
  });

  it("keeps the calendar year comparison when the option is not passed", () => {
    const result = isSameYear(
      new Date(2025, 11 /* Dec */, 15),
      new Date(2026, 1 /* Feb */, 15),
    );
    expect(result).toBe(false);
  });
});
