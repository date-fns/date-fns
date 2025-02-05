import { describe, expect, it } from "vitest";
import { getDayOfYear } from "./index.js";
import { tz } from "@date-fns/tz";
import type { ContextOptions, DateArg } from "../types.js";

describe("getDayOfYear", () => {
  it("returns the day of the year of the given date", () => {
    const result = getDayOfYear(new Date(2014, 6 /* Jul */, 2));
    expect(result).toBe(183);
  });

  it("accepts a timestamp", () => {
    const result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).getTime());
    expect(result).toBe(2);
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const result = getDayOfYear(initialDate);
    expect(result).toBe(366);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDayOfYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getDayOfYear(new Date("2014-07-02T00:00:00Z"), {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(183);
      expect(
        getDayOfYear(new Date("2014-07-02T00:00:00Z"), {
          in: tz("America/Los_Angeles"),
        }),
      ).toBe(182);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getDayOfYear(arg, { in: options?.in });
      }
    });
  });
});
