import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { isFirstDayOfMonth } from "./index.js";
import type { ContextOptions, DateArg } from "../types.js";

describe("isFirstDayOfMonth", () => {
  it("returns true if the given date is the first day of a month", () => {
    const result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not the first day of a month", () => {
    const result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 2));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 9 /* Oct */, 1).getTime();
    const result = isFirstDayOfMonth(date);
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isFirstDayOfMonth(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isFirstDayOfMonth("2024-08-31T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
      expect(
        isFirstDayOfMonth("2024-08-31T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isFirstDayOfMonth("2024-09-01T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isFirstDayOfMonth("2024-09-01T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isFirstDayOfMonth(arg, { in: options?.in });
      }
    });
  });
});
