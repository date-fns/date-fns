import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { nextSunday } from "./index.js";

describe("nextSunday", () => {
  it("returns the following Sunday given various dates before the same", () => {
    expect(nextSunday(new Date(2020, 4 /* May */, 23))).toEqual(
      new Date(2020, 4 /* May */, 24),
    );
    expect(nextSunday(new Date(2020, 4 /* May */, 22))).toEqual(
      new Date(2020, 4 /* May */, 24),
    );
    expect(nextSunday(new Date(2020, 4 /* May */, 21))).toEqual(
      new Date(2020, 4 /* May */, 24),
    );
    expect(nextSunday(new Date(2020, 4 /* May */, 20))).toEqual(
      new Date(2020, 4 /* May */, 24),
    );
    expect(nextSunday(new Date(2020, 4 /* May */, 19))).toEqual(
      new Date(2020, 4 /* May */, 24),
    );
    expect(nextSunday(new Date(2020, 4 /* May */, 18))).toEqual(
      new Date(2020, 4 /* May */, 24),
    );
    expect(nextSunday(new Date(2020, 4 /* May */, 17))).toEqual(
      new Date(2020, 4 /* May */, 24),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextSunday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = nextSunday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = nextSunday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        nextSunday("2024-04-12T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-14T15:00:00.000+08:00");
      expect(
        nextSunday("2024-04-12T07:00:00Z", {
          in: tz("Asia/Calcutta"),
        }).toISOString(),
      ).toBe("2024-04-14T12:30:00.000+05:30");
    });

    it("resolves the context date type", () => {
      const result = nextSunday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
