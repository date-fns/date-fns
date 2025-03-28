import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { ContextOptions, DateArg } from "../types.js";
import { isYesterday } from "./index.js";

describe("isYesterday", () => {
  const { fakeNow } = fakeDate(new Date(2014, 8 /* Sep */, 25));

  it("returns true if the given date is yesterday", () => {
    const result = isYesterday(new Date(2014, 8 /* Sep */, 24));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not yesterday", () => {
    const result = isYesterday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isYesterday(new Date(2014, 8 /* Sep */, 24).getTime());
    expect(result).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isYesterday(new UTCDate(+new Date(2014, 8 /* Sep */, 24)))).toBe(
      true,
    );
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      fakeNow(new Date("2024-08-18T15:00:00Z"));
      expect(
        isYesterday("2024-08-17T04:00:00Z", { in: tz("America/New_York") }),
      ).toBe(true);
      expect(
        isYesterday("2024-08-17T03:00:00Z", { in: tz("America/New_York") }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isYesterday(arg, { in: options?.in });
      }
    });
  });
});
