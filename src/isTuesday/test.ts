import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isTuesday } from "./index.js";

describe("isTuesday", () => {
  it("returns true if the given date is Tuesday", () => {
    const result = isTuesday(new Date(2014, 8 /* Sep */, 23));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Tuesday", () => {
    const result = isTuesday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isTuesday(new Date(2014, 1 /* Feb */, 11).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isTuesday(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isTuesday("2024-08-19T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
      expect(
        isTuesday("2024-08-19T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isTuesday("2024-08-20T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isTuesday("2024-08-20T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isTuesday(arg, { in: options?.in });
      }
    });
  });
});
