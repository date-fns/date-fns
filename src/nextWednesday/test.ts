import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { nextWednesday } from "./index.js";

describe("nextWednesday", () => {
  it("returns the following Wednesday given various dates before the same", () => {
    expect(nextWednesday(new Date(2020, 4 /* May */, 23))).toEqual(
      new Date(2020, 4 /* May */, 27),
    );

    expect(nextWednesday(new Date(2020, 4 /* May */, 22))).toEqual(
      new Date(2020, 4 /* May */, 27),
    );

    expect(nextWednesday(new Date(2020, 4 /* May */, 21))).toEqual(
      new Date(2020, 4 /* May */, 27),
    );

    expect(nextWednesday(new Date(2020, 4 /* May */, 20))).toEqual(
      new Date(2020, 4 /* May */, 27),
    );

    expect(nextWednesday(new Date(2020, 4 /* May */, 19))).toEqual(
      new Date(2020, 4 /* May */, 20),
    );

    expect(nextWednesday(new Date(2020, 4 /* May */, 18))).toEqual(
      new Date(2020, 4 /* May */, 20),
    );

    expect(nextWednesday(new Date(2020, 4 /* May */, 17))).toEqual(
      new Date(2020, 4 /* May */, 20),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextWednesday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = nextWednesday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = nextWednesday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        nextWednesday("2024-04-07T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:00.000+08:00");
      expect(
        nextWednesday("2024-04-07T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-10T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = nextWednesday("2024-04-07T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
