import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getDay } from "./index.js";

describe("getDay", () => {
  it("returns the day of the week of the given date", () => {
    const result = getDay(new Date(2012, 1 /* Feb */, 29));
    expect(result).toBe(3);
  });

  it("accepts a timestamp", () => {
    const result = getDay(new Date(2014, 5 /* Jun */, 1).getTime());
    expect(result).toBe(0);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getDay(new Date("2023-08-18T15:00:00Z"), { in: tz("Asia/Singapore") }),
      ).toBe(5);
      expect(
        getDay(new Date("2023-08-18T16:00:00Z"), { in: tz("Asia/Singapore") }),
      ).toBe(6);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getDay(arg, { in: options?.in });
      }
    });
  });
});
