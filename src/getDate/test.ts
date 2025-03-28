import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getDate } from "./index.js";

describe("getDate", () => {
  it("returns the day of the month of the given date", () => {
    const result = getDate(new Date(2012, 1 /* Feb */, 29));
    expect(result).toBe(29);
  });

  it("accepts a timestamp", () => {
    const result = getDate(new Date(2014, 11 /* Dec */, 31).getTime());
    expect(result).toBe(31);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getDate(new Date("2024-08-18T15:00:00Z"), { in: tz("Asia/Singapore") }),
      ).toBe(18);
      expect(
        getDate(new Date("2024-08-18T16:00:00Z"), { in: tz("Asia/Singapore") }),
      ).toBe(19);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getDate(arg, { in: options?.in });
      }
    });
  });
});
