import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isLeapYear } from "./index.js";

describe("isLeapYear", () => {
  it("returns true if the given date is in the leap year", () => {
    const result = isLeapYear(new Date(2012, 6 /* Jul */, 2));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not in the leap year", () => {
    const result = isLeapYear(new Date(2014, 6 /* Jul */, 2));
    expect(result).toBe(false);
  });

  it("works for the years divisible by 100 but not by 400", () => {
    const result = isLeapYear(new Date(2100, 6 /* Jul */, 2));
    expect(result).toBe(false);
  });

  it("works for the years divisible by 400", () => {
    const result = isLeapYear(new Date(2000, 6 /* Jul */, 2));
    expect(result).toBe(true);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2012, 6 /* Jul */, 2).getTime();
    const result = isLeapYear(date);
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isLeapYear(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isLeapYear("2012-01-01T00:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isLeapYear("2012-01-01T00:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isLeapYear(arg, { in: options?.in });
      }
    });
  });
});
