import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { ContextOptions } from "../types.js";
import { isThisHour } from "./index.js";

describe("isThisHour", () => {
  const { fakeNow } = fakeDate(
    new Date(2014, 8 /* Sep */, 25, 18, 15, 15, 500),
  );

  it("returns true if the given date and the current date have the same hour", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18);
    expect(isThisHour(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different hours", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 19);
    expect(isThisHour(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 45).getTime();
    expect(isThisHour(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isThisHour(new UTCDate(+new Date(2014, 8 /* Sep */, 25, 18)))).toBe(
      true,
    );
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      fakeNow(new Date("2014-09-25T16:00:00Z"));
      const in30Minutes = Date.now() + 30 * 60 * 1000;
      expect(isThisHour(in30Minutes, { in: tz("America/Los_Angeles") })).toBe(
        true,
      );
      expect(isThisHour(in30Minutes, { in: tz("Asia/Kolkata") })).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateType | number | string,
        options?: ContextOptions<ResultDate>,
      ) {
        isThisHour(arg, { in: options?.in });
      }
    });
  });
});
