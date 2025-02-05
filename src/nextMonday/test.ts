import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { nextMonday } from "./index.js";

describe("nextMonday", () => {
  it("returns the following Monday given various dates before the same", () => {
    expect(nextMonday(new Date(2020, 2 /* Mar */, 23))).toEqual(
      new Date(2020, 2 /* Mar */, 30),
    );

    expect(nextMonday(new Date(2020, 2 /* Mar */, 22))).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextMonday(new Date(2020, 3 /* Apr */, 11))).toEqual(
      new Date(2020, 3 /* Apr */, 13),
    );

    expect(nextMonday(new Date(2020, 2 /* Mar */, 20))).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextMonday(new Date(2020, 2 /* Mar */, 19))).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextMonday(new Date(2020, 2 /* Mar */, 18))).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextMonday(new Date(2020, 2 /* Mar */, 17))).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextMonday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = nextMonday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = nextMonday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        nextMonday("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-15T15:00:00.000+08:00");
      expect(
        nextMonday("2024-04-10T07:00:00Z", {
          in: tz("Asia/Kolkata"),
        }).toISOString(),
      ).toBe("2024-04-15T12:30:00.000+05:30");
    });

    it("resolves the context date type", () => {
      const result = nextMonday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
