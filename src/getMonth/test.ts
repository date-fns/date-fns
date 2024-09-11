import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getMonth } from "./index.js";

describe("getMonth", () => {
  it("returns the month of the given date", () => {
    const result = getMonth(new Date(2012, 1 /* Feb */, 29));
    expect(result).toBe(1);
  });

  it("accepts a timestamp", () => {
    const result = getMonth(new Date(2014, 3 /* Apr */, 2).getTime());
    expect(result).toBe(3);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getMonth("2024-08-31T15:00:00Z", { in: tz("Asia/Singapore") }),
      ).toBe(7);
      expect(
        getMonth("2024-08-31T16:00:00Z", { in: tz("Asia/Singapore") }),
      ).toBe(8);
      expect(
        getMonth("2024-09-01T03:00:00Z", { in: tz("America/New_York") }),
      ).toBe(7);
      expect(
        getMonth("2024-09-01T04:00:00Z", { in: tz("America/New_York") }),
      ).toBe(8);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getMonth(arg, { in: options?.in });
      }
    });
  });
});
