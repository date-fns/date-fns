import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { nextSaturday } from "./index.js";

describe("nextSaturday", () => {
  it("returns the following Saturday given various dates before the same", () => {
    expect(nextSaturday(new Date(2020, 4 /* May */, 23))).toEqual(
      new Date(2020, 4 /* May */, 30),
    );

    expect(nextSaturday(new Date(2020, 4 /* May */, 22))).toEqual(
      new Date(2020, 4 /* May */, 23),
    );

    expect(nextSaturday(new Date(2020, 4 /* May */, 21))).toEqual(
      new Date(2020, 4 /* May */, 23),
    );

    expect(nextSaturday(new Date(2020, 4 /* May */, 20))).toEqual(
      new Date(2020, 4 /* May */, 23),
    );

    expect(nextSaturday(new Date(2020, 4 /* May */, 19))).toEqual(
      new Date(2020, 4 /* May */, 23),
    );

    expect(nextSaturday(new Date(2020, 4 /* May */, 18))).toEqual(
      new Date(2020, 4 /* May */, 23),
    );

    expect(nextSaturday(new Date(2020, 4 /* May */, 17))).toEqual(
      new Date(2020, 4 /* May */, 23),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextSaturday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = nextSaturday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = nextSaturday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        nextSaturday("2024-04-10T10:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-13T18:00:00.000+08:00");
      expect(
        nextSaturday("2024-04-10T16:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-04-13T12:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const result = nextSaturday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
