import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isMonday } from "./index.js";

describe("isMonday", () => {
  it("returns true if the given date is Monday", () => {
    const result = isMonday(new Date(2014, 8 /* Sep */, 22));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Monday", () => {
    const result = isMonday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isMonday(new Date(2014, 1 /* Feb */, 10).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isMonday(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isMonday("2024-08-18T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
      expect(
        isMonday("2024-08-18T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isMonday("2024-08-10T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isMonday("2024-08-10T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isMonday(arg, { in: options?.in });
      }
    });
  });
});
