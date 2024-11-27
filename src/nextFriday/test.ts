import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { nextFriday } from "./index.js";

describe("nextFriday", () => {
  it("returns the following Friday given various dates before the same", () => {
    expect(nextFriday(new Date(2020, 4 /* May */, 23))).toEqual(
      new Date(2020, 4 /* May */, 29),
    );

    expect(nextFriday(new Date(2020, 4 /* May */, 22))).toEqual(
      new Date(2020, 4 /* May */, 29),
    );

    expect(nextFriday(new Date(2020, 4 /* May */, 21))).toEqual(
      new Date(2020, 4 /* May */, 22),
    );

    expect(nextFriday(new Date(2020, 4 /* May */, 20))).toEqual(
      new Date(2020, 4 /* May */, 22),
    );

    expect(nextFriday(new Date(2020, 4 /* May */, 19))).toEqual(
      new Date(2020, 4 /* May */, 22),
    );

    expect(nextFriday(new Date(2020, 4 /* May */, 18))).toEqual(
      new Date(2020, 4 /* May */, 22),
    );

    expect(nextFriday(new Date(2020, 4 /* May */, 17))).toEqual(
      new Date(2020, 4 /* May */, 22),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextFriday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = nextFriday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = nextFriday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        nextFriday("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-12T15:00:00.000+08:00");
      expect(
        nextFriday("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-12T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = nextFriday("2024-04-10T07:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
