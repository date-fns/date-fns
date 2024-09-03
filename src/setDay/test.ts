import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setDay } from "./index.js";

describe("setDay", () => {
  it("sets the day of the week", () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), 0);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 31));
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {
      weekStartsOn: 1,
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7));
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {
      locale: {
        options: { weekStartsOn: 1 },
      },
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      },
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7));
  });

  it("specifies Monday as the first day of the week", () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 6), 1, {
      weekStartsOn: 1,
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("specifies Tuesday as the first day of the week", () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 6), 1, {
      weekStartsOn: 2,
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 8));
  });

  describe("the day index is more than 6", () => {
    it("sets the day of the next week", () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), 8);
      expect(result).toEqual(new Date(2014, 8 /* Sep */, 8));
    });

    it("allows to specify which day is the first day of the week", () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), 7, {
        weekStartsOn: 1,
      });
      expect(result).toEqual(new Date(2014, 8 /* Sep */, 8));
    });

    it("sets the day of another week in the future", () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), 14, {
        weekStartsOn: 1,
      });
      expect(result).toEqual(new Date(2014, 8 /* Sep */, 15));
    });
  });

  describe("the day index is less than 0", () => {
    it("sets the day of the last week", () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), -6);
      expect(result).toEqual(new Date(2014, 7 /* Aug */, 25));
    });

    it("allows to specify which day is the first day of the week", () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), -7, {
        weekStartsOn: 1,
      });
      expect(result).toEqual(new Date(2014, 7 /* Aug */, 25));
    });

    it("set the day of another week in the past", () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), -14, {
        weekStartsOn: 1,
      });
      expect(result).toEqual(new Date(2014, 7 /* Aug */, 18));
    });
  });

  it("accepts a timestamp", () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1).getTime(), 3);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 3));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    setDay(date, 3);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setDay(new Date(NaN), 0);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setDay(Date.now(), 15);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setDay(new UTCDate(), 15);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setDay("2024-04-10T07:00:00Z", 15, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-22T15:00:00.000+08:00");
      expect(
        setDay("2024-04-10T07:00:00Z", 15, {
          in: tz("Asia/Kolkata"),
        }).toISOString(),
      ).toBe("2024-04-22T12:30:00.000+05:30");
    });

    it("resolves the context date type", () => {
      const result = setDay("2014-09-01T00:00:00Z", 15, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
