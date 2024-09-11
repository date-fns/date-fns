import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { ContextOptions, DateArg } from "../types.js";
import { isToday } from "./index.js";

describe("isToday", () => {
  const { fakeNow } = fakeDate(new Date(2014, 8 /* Sep */, 25));

  it("returns true if the given date is today", () => {
    const result = isToday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not today", () => {
    const result = isToday(new Date(2014, 8 /* Sep */, 26));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isToday(new Date(2014, 8 /* Sep */, 25).getTime());
    expect(result).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      fakeNow(new Date("2024-08-18T15:00:00Z"));
      expect(
        isToday("2024-08-18T04:00:00Z", { in: tz("America/New_York") }),
      ).toBe(true);
      expect(
        isToday("2024-08-18T03:00:00Z", { in: tz("America/New_York") }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isToday(arg, { in: options?.in });
      }
    });
  });
});
