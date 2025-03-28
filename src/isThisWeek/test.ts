import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { ContextOptions, DateArg } from "../types.js";
import { isThisWeek } from "./index.js";

describe("isThisWeek", () => {
  const { fakeNow } = fakeDate(new Date(2014, 8 /* Sep */, 21));

  it("returns true if the given date and the current date have the same week", () => {
    const date = new Date(2014, 8 /* Sep */, 21);
    expect(isThisWeek(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different weeks", () => {
    const date = new Date(2014, 8 /* Sep */, 29);
    expect(isThisWeek(date)).toBe(false);
  });

  it("allows to specify which day is the first day of the week", () => {
    const date = new Date(2014, 8 /* Sep */, 22);
    expect(isThisWeek(date, { weekStartsOn: 1 })).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 21).getTime();
    expect(isThisWeek(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isThisWeek(new UTCDate(+new Date(2014, 8 /* Sep */, 21)))).toBe(
      true,
    );
  });

  describe("context", () => {
    it("allows specifying the context", () => {
      fakeNow(new Date("2024-08-20T00:00:00Z"));
      expect(
        isThisWeek("2024-08-18T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isThisWeek("2024-08-18T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isThisWeek(arg, { in: options?.in });
      }
    });
  });
});
