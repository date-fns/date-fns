import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.ts";
import { addBusinessDays } from "./index.ts";
import { getDstTransitions } from "../_lib/test/tzOffsetTransitions.ts";

describe("addBusinessDays", () => {
  it("adds the given number of business days", () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), 10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 15));
  });

  it("handles negative amount", () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 15), -10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it.each([
    [0.5, new Date(2014, 8, 1)],
    [-0.5, new Date(2014, 8, 1)],
    [1.5, new Date(2014, 8, 2)],
    [-1.5, new Date(2014, 7, 29)],
    [5.5, new Date(2014, 8, 8)],
    [-5.5, new Date(2014, 7, 25)],
  ])("truncates fractional amount %s toward zero", (amount, expected) => {
    expect(addBusinessDays(new Date(2014, 8, 1), amount)).toEqual(expected);
  });

  it.each([0.5, -0.5])(
    "does not move a weekend date for amount %s",
    (amount) => {
      for (const day of [6, 7]) {
        const date = new Date(2014, 8, day, 12, 30);
        const result = addBusinessDays(date, amount);
        expect(result).toEqual(date);
        expect(result).not.toBe(date);
      }
    },
  );

  it("returns the Monday when 1 day is added on the Friday", () => {
    expect(addBusinessDays(new Date(2020, 0 /* Jan */, 10), 1)).toEqual(
      // Friday
      // Monday
      new Date(2020, 0 /* Jan */, 13),
    );
  });

  it("returns the Monday when 1 day is added on the Satuday", () => {
    expect(addBusinessDays(new Date(2020, 0 /* Jan */, 11), 1)).toEqual(
      // Saturday
      // Monday
      new Date(2020, 0 /* Jan */, 13),
    );
  });

  it("returns the Monday when 1 day is added on the Sunday", () => {
    expect(addBusinessDays(new Date(2020, 0 /* Jan */, 12), 1)).toEqual(
      // Sunday
      // Monday
      new Date(2020, 0 /* Jan */, 13),
    );
  });

  it("can handle a large number of business days", () => {
    const result = addBusinessDays(new Date(2014, 0 /* Jan */, 1), 3387885);
    expect(result).toEqual(new Date(15000, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const result = addBusinessDays(
      new Date(2014, 8 /* Sep */, 1).getTime(),
      10,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 15));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    addBusinessDays(date, 11);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addBusinessDays(new Date(NaN), 10);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("starting from a weekend day should land on a weekday when reducing a divisible by 5", () => {
    const subtractResult = addBusinessDays(new Date(2019, 7, 18), -5);
    expect(subtractResult).toEqual(new Date(2019, 7, 12));

    const subtractResultWeekend = addBusinessDays(new Date(2019, 7, 17), -5);
    expect(subtractResultWeekend).toEqual(new Date(2019, 7, 12));

    const addResult = addBusinessDays(new Date(2019, 7, 18), 5);
    expect(addResult).toEqual(new Date(2019, 7, 23));

    const addResultWeekend = addBusinessDays(new Date(2019, 7, 17), 5);
    expect(addResultWeekend).toEqual(new Date(2019, 7, 23));
  });

  it("resolves the date type by default", () => {
    const result = addBusinessDays(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = addBusinessDays(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  it.each([0, 0.5, -0.5])(
    "preserves the date extension for a zero increment of %s",
    (amount) => {
      const date = new UTCDate(2014, 8, 1);
      const result = addBusinessDays(date, amount);
      expect(result).toBeInstanceOf(UTCDate);
      expect(result.getTime()).toBe(date.getTime());
      expect(result).not.toBe(date);
    },
  );

  describe("context", () => {
    it.each([0, 0.5, -0.5])(
      "preserves the context date type for a zero increment of %s",
      (amount) => {
        const date = new Date("2024-11-03T06:30:00Z");
        const result = addBusinessDays(date, amount, {
          in: tz("America/New_York"),
        });
        expect(result).toBeInstanceOf(TZDate);
        expect(result.getTime()).toBe(date.getTime());
        expect(result).not.toBe(date);
      },
    );

    it("allows to specify the context", () => {
      expect(
        addBusinessDays("2024-08-20T15:00:00Z", 3, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-08-23T23:00:00.000+08:00");
      expect(
        addBusinessDays("2024-08-20T16:00:00Z", 3, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-08-26T00:00:00.000+08:00");
      expect(
        addBusinessDays(new Date("2024-08-21T03:00:00Z"), 3, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-08-23T23:00:00.000-04:00");
      expect(
        addBusinessDays(new Date("2024-08-21T04:00:00Z"), 3, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-08-26T00:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = addBusinessDays(date, 1, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });

  const dstTransitions = getDstTransitions(2017);
  const dstOnlyDescribe =
    dstTransitions.start && dstTransitions.end ? describe : describe.skip;
  const tzName =
    Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;

  dstOnlyDescribe(`DST (${tzName || "(unknown)"})`, () => {
    it.each([0, 0.5, -0.5])(
      "does not change the repeated DST-end hour for amount %s",
      (amount) => {
        const date = new Date(dstTransitions.end!.getTime() + 30 * 60 * 1000);
        expect(addBusinessDays(date, amount)).toEqual(date);
      },
    );

    it("works across DST-start weekend", () => {
      const date = new Date(dstTransitions.start!);
      date.setDate(date.getDate() - ((date.getDay() + 2) % 7));
      date.setHours(date.getHours() - 1, 30, 0, 0);

      const result = addBusinessDays(date, 1);
      const expected = new Date(date);
      expected.setDate(expected.getDate() + 3);

      expect(result).toEqual(expected);
    });
  });
});
