import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getHours } from "./index.js";

describe("getHours", () => {
  it("returns the hours of the given date", () => {
    const result = getHours(new Date(2012, 1 /* Feb */, 29, 11, 45));
    expect(result).toBe(11);
  });

  it("accepts a timestamp", () => {
    const result = getHours(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime());
    expect(result).toBe(23);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getHours(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getHours("2023-08-18T15:00:00Z", { in: tz("Asia/Singapore") }),
      ).toBe(23);
      expect(
        getHours("2023-08-18T15:00:00Z", { in: tz("America/New_York") }),
      ).toBe(11);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getHours(arg, { in: options?.in });
      }
    });
  });
});
