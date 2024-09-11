import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isWednesday } from "./index.js";

describe("isWednesday", () => {
  it("returns true if the given date is Wednesday", () => {
    const result = isWednesday(new Date(2014, 8 /* Sep */, 24));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Wednesday", () => {
    const result = isWednesday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isWednesday(new Date(2014, 1 /* Feb */, 12).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isWednesday(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isWednesday("2024-08-21T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isWednesday("2024-08-21T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isWednesday(arg, { in: options?.in });
      }
    });
  });
});
