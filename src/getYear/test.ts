import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getYear } from "./index.js";

describe("getYear", () => {
  it("returns the year of the given date", () => {
    const result = getYear(new Date(2014, 6 /* Jul */, 2));
    expect(result).toBe(2014);
  });

  it("accepts a timestamp", () => {
    const result = getYear(new Date(2000, 3 /* Apr */, 2).getTime());
    expect(result).toBe(2000);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getYear("2023-12-31T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(2023);
      expect(
        getYear("2023-12-31T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(2024);
      expect(
        getYear("2024-01-01T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(2023);
      expect(
        getYear("2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(2024);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getYear(arg, { in: options?.in });
      }
    });
  });
});
