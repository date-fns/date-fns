import { describe, expect, it } from "vitest";
import { interval } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";
import { TZDate, tz } from "@date-fns/tz";

describe("Interval", () => {
  it("exposes start and end", () => {
    const result = interval(new Date(2000, 0), new Date(2023, 0));
    expect(result.start).toEqual(new Date(2000, 0));
    expect(result.end).toEqual(new Date(2023, 0));
  });

  it("normalizes the dates", () => {
    const result = interval(
      +new Date(2000, 0),
      new Date(2023, 0).toISOString(),
    );
    expect(result.start).toEqual(new Date(2000, 0));
    expect(result.end).toEqual(new Date(2023, 0));
  });

  it("throws an error if one of the arguments is invalid", () => {
    expect(() => {
      interval(new Date(2000, 0), new Date(NaN));
    }).toThrow(new TypeError("End date is invalid"));

    expect(() => {
      interval(new Date(NaN), new Date(2000, 0));
    }).toThrow(new TypeError("Start date is invalid"));
  });

  it("throws an error if the interval is not positive", () => {
    // Should be ok
    interval(new Date(2023, 0), new Date(2000, 0));

    expect(() => {
      interval(new Date(2023, 0), new Date(2000, 0), {
        assertPositive: true,
      });
    }).toThrow(new TypeError("End date must be after start date"));

    // Should be ok too
    interval(new Date(2000, 0), new Date(2000, 0), {
      assertPositive: true,
    });
  });

  it("resolves the date type by default", () => {
    const result = interval(Date.now(), Date.now());
    expect(result.start).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result.start>>(true);
    expect(result.end).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result.end>>(true);
  });

  it("resolves the start date object type", () => {
    const result = interval(new UTCDate(), new TZDate());
    expect(result.start).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result.start>>(true);
    expect(result.end).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result.end>>(true);
  });

  it("resolves the end date object type if the start isn't object", () => {
    const result = interval(Date.now(), new TZDate());
    expect(result.start).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate, typeof result.start>>(true);
    expect(result.end).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate, typeof result.end>>(true);
  });

  describe("context", () => {
    it("resolves the context date type", () => {
      const result = interval(new UTCDate(), new Date(), {
        in: tz("Asia/Tokyo"),
      });
      expect(result.start).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result.start>>(true);
      expect(result.end).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result.end>>(true);
    });
  });
});
