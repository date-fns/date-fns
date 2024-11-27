import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { ContextOptions, DateArg } from "../types.js";
import { isThisISOWeek } from "./index.js";

describe("isThisISOWeek", () => {
  const { fakeNow } = fakeDate(new Date(2014, 8 /* Sep */, 25));

  it("returns true if the given date and the current date have the same ISO week", () => {
    const date = new Date(2014, 8 /* Sep */, 22);
    expect(isThisISOWeek(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different ISO weeks", () => {
    const date = new Date(2014, 8 /* Sep */, 21);
    expect(isThisISOWeek(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 29).getTime();
    expect(isThisISOWeek(date)).toBe(false);
  });

  it("respects date extensions", () => {
    expect(isThisISOWeek(new Date(+new Date(2014, 8 /* Sep */, 25)))).toBe(
      true,
    );
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      fakeNow(new Date("2024-08-20T00:00:00Z"));
      expect(
        isThisISOWeek("2024-08-19T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
      expect(
        isThisISOWeek("2024-08-19T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isThisISOWeek(arg, { in: options?.in });
      }
    });
  });
});
