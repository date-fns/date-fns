import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { nextDay } from "./index.js";

describe("nextDay", () => {
  it("returns the following Monday given various dates before the same", () => {
    expect(nextDay(new Date(2020, 2 /* Mar */, 20), 1)).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextDay(new Date(2020, 2 /* Mar */, 19), 1)).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextDay(new Date(2020, 2 /* Mar */, 18), 1)).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextDay(new Date(2020, 2 /* Mar */, 17), 1)).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextDay(new Date(2020, 2 /* Mar */, 16), 1)).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextDay(new Date(2020, 2 /* Mar */, 22), 1)).toEqual(
      new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextDay(new Date(2020, 4 /* May */, 2), 1)).toEqual(
      new Date(2020, 4 /* May */, 4),
    );
  });

  it("returns the following Tuesday given the Saturday before it", () => {
    expect(nextDay(new Date(2020, 4 /* May */, 2), 2)).toEqual(
      new Date(2020, 4 /* May */, 5),
    );
  });

  it("returns the following Wednesday given the Saturday before it", () => {
    expect(nextDay(new Date(2020, 4 /* May */, 2), 3)).toEqual(
      new Date(2020, 4 /* May */, 6),
    );
  });

  it("returns the following Thursday given the Saturday before it", () => {
    expect(nextDay(new Date(2020, 4 /* May */, 2), 4)).toEqual(
      new Date(2020, 4 /* May */, 7),
    );
  });

  it("returns the following Friday given the Saturday before it", () => {
    expect(nextDay(new Date(2020, 4 /* May */, 2), 5)).toEqual(
      new Date(2020, 4 /* May */, 8),
    );
  });

  it("returns the following Saturday given the Saturday before it", () => {
    expect(nextDay(new Date(2020, 4 /* May */, 2), 6)).toEqual(
      new Date(2020, 4 /* May */, 9),
    );
  });

  it("returns next Sunday given the day is Sunday", () => {
    expect(nextDay(new Date(2020, 2 /* Mar */, 22), 0)).toEqual(
      new Date(2020, 2 /* Mar */, 29),
    );
  });

  it("resolves the date type by default", () => {
    const result = nextDay(Date.now(), 3);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = nextDay(new UTCDate(), 3);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        nextDay("2024-04-10T07:00:00Z", 1, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-15T15:00:00.000+08:00");
      expect(
        nextDay("2024-04-10T07:00:00Z", 1, {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-15T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = nextDay("2014-09-01T00:00:00Z", 1, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
