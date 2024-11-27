import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { ContextOptions, DateArg } from "../types.js";
import { isThisQuarter } from "./index.js";

describe("isThisQuarter", () => {
  const { fakeNow } = fakeDate(new Date(2014, 6 /* Jul */, 1));

  it("returns true if the given date and the current date have the same quarter (and year)", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    expect(isThisQuarter(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different quarters", () => {
    const date = new Date(2014, 1 /* Feb */, 11);
    expect(isThisQuarter(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    expect(isThisQuarter(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isThisQuarter(new UTCDate(+new Date(2014, 6 /* Jul */, 1)))).toBe(
      true,
    );
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      fakeNow(new Date("2024-01-02T00:00:00Z"));
      expect(
        isThisQuarter("2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
      expect(
        isThisQuarter("2024-01-01T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isThisQuarter(arg, { in: options?.in });
      }
    });
  });
});
