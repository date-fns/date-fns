import { tz, TZDate } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { nextThursday } from "./index.js";

describe("nextThursday", () => {
  it("returns the following Thursday given various dates before the same", () => {
    expect(nextThursday(new Date(2020, 4 /* May */, 23))).toEqual(
      new Date(2020, 4 /* May */, 28),
    );

    expect(nextThursday(new Date(2020, 4 /* May */, 22))).toEqual(
      new Date(2020, 4 /* May */, 28),
    );

    expect(nextThursday(new Date(2020, 4 /* May */, 21))).toEqual(
      new Date(2020, 4 /* May */, 28),
    );

    expect(nextThursday(new Date(2020, 4 /* May */, 20))).toEqual(
      new Date(2020, 4 /* May */, 21),
    );

    expect(nextThursday(new Date(2020, 4 /* May */, 19))).toEqual(
      new Date(2020, 4 /* May */, 21),
    );

    expect(nextThursday(new Date(2020, 4 /* May */, 18))).toEqual(
      new Date(2020, 4 /* May */, 21),
    );

    expect(nextThursday(new Date(2020, 4 /* May */, 17))).toEqual(
      new Date(2020, 4 /* May */, 21),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextThursday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = nextThursday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = nextThursday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        nextThursday("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-11T15:00:00.000+08:00");
      expect(
        nextThursday("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-11T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = nextThursday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
