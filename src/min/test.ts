import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { min } from "./index.js";

describe("min", () => {
  it("returns the earliest date", () => {
    const result = min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11),
    ]);
    expect(result).toEqual(new Date(1987, 1 /* Feb */, 11));
  });

  it("accepts array with more than 2 entries", () => {
    const result = min([
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1985, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1),
    ]);
    expect(result).toEqual(new Date(1985, 6 /* Jul */, 2));
  });

  it("accepts timestamps", () => {
    const result = min([
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime(),
    ]);
    expect(result).toEqual(new Date(1987, 1 /* Feb */, 11));
  });

  it("returns `Invalid Date` if any given date is invalid", () => {
    const result = min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
      new Date(1987, 1 /* Feb */, 11),
    ]);
    expect(isNaN(+result)).toBe(true);
  });

  it("returns `Invalid Date` for empty array", () => {
    const result = min([]);
    expect(isNaN(+result)).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = min([Date.now()]);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the first date object type in the array", () => {
    const result = min([Date.now(), "2024-01-01T00:00:00Z", new UTCDate()]);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  it("resolves the date union when the array contains more than single date object", () => {
    const result = min([
      new Date(),
      Date.now(),
      "2024-01-01T00:00:00Z",
      new UTCDate(),
    ]);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<UTCDate | Date, typeof result>>(true);
  });

  describe("context", () => {
    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = min([date], { in: tz("Asia/Tokyo") });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
