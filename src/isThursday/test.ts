import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isThursday } from "./index.js";

describe("isThursday", () => {
  it("returns true if the given date is Thursday", () => {
    const result = isThursday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Thursday", () => {
    const result = isThursday(new Date(2014, 8 /* Sep */, 24));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isThursday(new Date(2014, 1 /* Feb */, 13).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isThursday(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isThursday("2024-08-22T03:00:00Z", { in: tz("America/New_York") }),
      ).toBe(false);
      expect(
        isThursday("2024-08-22T04:00:00Z", { in: tz("America/New_York") }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isThursday(arg, { in: options?.in });
      }
    });
  });
});
