import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { nextTuesday } from "./index.js";

describe("nextTuesday", () => {
  it("returns the following Tuesday given various dates before the same", () => {
    expect(nextTuesday(new Date(2020, 2 /* Mar */, 23))).toEqual(
      new Date(2020, 2 /* Mar */, 24),
    );

    expect(nextTuesday(new Date(2020, 2 /* Mar */, 22))).toEqual(
      new Date(2020, 2 /* Mar */, 24),
    );

    expect(nextTuesday(new Date(2020, 3 /* Apr */, 11))).toEqual(
      new Date(2020, 3 /* Apr */, 14),
    );

    expect(nextTuesday(new Date(2020, 2 /* Mar */, 20))).toEqual(
      new Date(2020, 2 /* Mar */, 24),
    );

    expect(nextTuesday(new Date(2020, 2 /* Mar */, 19))).toEqual(
      new Date(2020, 2 /* Mar */, 24),
    );

    expect(nextTuesday(new Date(2020, 2 /* Mar */, 18))).toEqual(
      new Date(2020, 2 /* Mar */, 24),
    );

    expect(nextTuesday(new Date(2020, 2 /* Mar */, 17))).toEqual(
      new Date(2020, 2 /* Mar */, 24),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextTuesday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = nextTuesday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = nextTuesday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        nextTuesday("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-16T15:00:00.000+08:00");
      expect(
        nextTuesday("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-16T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = nextTuesday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
