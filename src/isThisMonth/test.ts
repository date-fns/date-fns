import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { ContextOptions, DateArg } from "../types.js";
import { isThisMonth } from "./index.js";

describe("isThisMonth", () => {
  const { fakeNow } = fakeDate(new Date(2014, 8 /* Sep */, 1));

  it("returns true if the given date and the current date have the same month (and year)", () => {
    const date = new Date(2014, 8 /* Sep */, 15);
    expect(isThisMonth(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different months", () => {
    const date = new Date(2013, 7 /* Aug */, 31);
    expect(isThisMonth(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 30).getTime();
    expect(isThisMonth(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isThisMonth(new UTCDate(+new Date(2014, 8 /* Sep */, 1)))).toBe(
      true,
    );
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      fakeNow(new Date("2014-09-02T00:00:00Z"));
      expect(
        isThisMonth("2014-09-01T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
      expect(
        isThisMonth("2014-09-01T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isThisMonth(arg, { in: options?.in });
      }
    });
  });
});
