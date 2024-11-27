import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { getDstTransitions } from "../../test/dst/tzOffsetTransitions.js";
import { assertType } from "../_lib/test/index.js";
import { add } from "./index.js";

describe("add", () => {
  it("adds the values from the given object", () => {
    const result = add(new Date(2014, 8 /* Sep */, 1, 10, 19, 50), {
      years: 2,
      months: 9,
      weeks: 1,
      days: 7,
      hours: 5,
      minutes: 9,
      seconds: 30,
    });
    expect(result).toEqual(new Date(2017, 5 /* June */, 15, 15, 29, 20));
  });

  it("supports an undefined value in the duration object", () => {
    const result = add(new Date(2014, 8 /* Sep */, 1, 10, 19, 50), {
      years: undefined,
      months: 9,
      weeks: 1,
      days: 7,
      hours: 5,
      minutes: 9,
      seconds: 30,
    });
    expect(result).toEqual(new Date(2015, 5 /* June */, 15, 15, 29, 20));
  });

  it("returns the same date object when passed empty duration values", () => {
    const result = add(new Date(2014, 8 /* Sep */, 1, 10).getTime(), {
      years: undefined,
      months: undefined,
      weeks: undefined,
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 10));
  });

  it("returns the same date object when passed undefined duration values", () => {
    const result = add(new Date(2014, 8 /* Sep */, 1, 10).getTime(), {});
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 10));
  });

  it("accepts a timestamp", () => {
    const result = add(new Date(2014, 8 /* Sep */, 1, 10).getTime(), {
      hours: 4,
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 14));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1, 10);
    add(date, { hours: 4 });
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1, 10));
  });

  it("works well if the desired month has fewer days and the provided date is on the last day of a month", () => {
    const date = new Date(2014, 11 /* Dec */, 31);
    const result = add(date, { months: 9 });
    expect(result).toEqual(new Date(2015, 8 /* Sep */, 30));
  });

  const dstTransitions = getDstTransitions(2017);
  const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip;
  const tzName =
    Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
  const HOUR = 1000 * 60 * 60;

  dstOnly(
    `works at DST-end boundary in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = dstTransitions.end;
      const result = add(date!, { hours: 1 });
      expect(result).toEqual(new Date(date!.getTime() + HOUR));
    },
  );

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(-1, 10 /* Nov */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = add(initialDate, { months: 3 });
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = add(new Date(NaN), { hours: 5 });
    expect(result instanceof Date && isNaN(+result)).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = add(Date.now(), { hours: 5 });
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = add(new UTCDate(), { hours: 5 });
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        add(
          "2024-04-10T07:00:00Z",
          { days: 10 },
          { in: tz("Asia/Singapore") },
        ).toISOString(),
      ).toBe("2024-04-20T15:00:00.000+08:00");
      expect(
        add(
          "2024-04-10T07:00:00Z",
          { days: 10 },
          { in: tz("America/Los_Angeles") },
        ).toISOString(),
      ).toBe("2024-04-20T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = add(
        "2014-09-01T00:00:00Z",
        { days: 10 },
        { in: tz("Asia/Tokyo") },
      );
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
