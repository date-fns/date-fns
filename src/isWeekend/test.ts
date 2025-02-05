import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isWeekend } from "./index.js";

describe("isWeekend", () => {
  it("returns true if the given date is in a weekend", () => {
    const result = isWeekend(new Date(2014, 9 /* Oct */, 5));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not in a weekend", () => {
    const result = isWeekend(new Date(2014, 9 /* Oct */, 6));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isWeekend(new Date(2014, 9 /* Oct */, 5).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isWeekend("2024-08-18T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isWeekend("2024-08-19T01:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
      expect(
        isWeekend("2024-08-17T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isWeekend("2024-08-17T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isWeekend(arg, { in: options?.in });
      }
    });
  });
});
