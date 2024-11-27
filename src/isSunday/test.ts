import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isSunday } from "./index.js";

describe("isSunday", () => {
  it("returns true if the given date is Sunday", () => {
    const result = isSunday(new Date(2014, 8 /* Sep */, 21));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Sunday", () => {
    const result = isSunday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSunday(new Date(2014, 1 /* Feb */, 9).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isSunday(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSunday("2024-08-18T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
      expect(
        isSunday("2024-08-18T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isSunday("2024-08-18T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isSunday("2024-08-18T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isSunday(arg, { in: options?.in });
      }
    });
  });
});
