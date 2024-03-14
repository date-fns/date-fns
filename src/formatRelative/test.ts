import { describe, expect, it } from "vitest";
import { formatRelative } from "./index.js";

describe("formatRelative", () => {
  const baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900);

  it("accepts a timestamp", () => {
    const date = new Date(2014, 3 /* Apr */, 4);
    expect(formatRelative(date.getTime(), baseDate.getTime())).toBe("04/04/2014");
  });

  it("before the last week", () => {
    const result = formatRelative(
      new Date(1986, 2 /* Mar */, 28, 16, 50),
      baseDate,
    );
    expect(result).toBe("03/28/1986");
  });

  it("last week", () => {
    const result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate);
    expect(result).toBe("last Tuesday at 12:00 AM");
  });

  it("yesterday", () => {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 3, 22, 22),
      baseDate,
    );
    expect(result).toBe("yesterday at 10:22 PM");
  });

  it("today", () => {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 4, 16, 50),
      baseDate,
    );
    expect(result).toBe("today at 4:50 PM");
  });

  it("tomorrow", () => {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 5, 7, 30),
      baseDate,
    );
    expect(result).toBe("tomorrow at 7:30 AM");
  });

  it("next week", () => {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 6, 12, 0),
      baseDate,
    );
    expect(result).toBe("Sunday at 12:00 PM");
  });

  it("after the next week", () => {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 11, 16, 50),
      baseDate,
    );
    expect(result).toBe("04/11/1986");
  });

  describe("edge cases", () => {
    it("throws RangeError if the date isn't valid", () => {
      expect(formatRelative.bind(null, new Date(NaN), baseDate)).toThrow(RangeError);
    });

    it("throws RangeError if the base date isn't valid", () => {
      expect(formatRelative.bind(
        null,
        new Date(2017, 0 /* Jan */, 1),
        new Date(NaN),
      )).toThrow(RangeError);
    });

    it("throws RangeError if both dates aren't valid", () => {
      expect(formatRelative.bind(null, new Date(NaN), new Date(NaN))).toThrow(RangeError);
    });

    it("handles dates before 100 AD", () => {
      const date = new Date(0);
      date.setFullYear(7, 11 /* Dec */, 31);
      date.setHours(0, 0, 0, 0);
      expect(formatRelative(date, baseDate)).toBe("12/31/0007");
    });
  });

  describe("custom locale", () => {
    it("allows to pass a custom locale", () => {
      const customLocale = {
        localize: {
          month: () => {
            return "works";
          },
        },
        formatLong: {
          date: () => {
            return "'It' MMMM";
          },
        },
        formatRelative: () => {
          return "P 'perfectly!'";
        },
      };
      const result = formatRelative(
        new Date(1986, 2 /* Mar */, 28, 16, 50),
        baseDate,
        {
          // @ts-expect-error - It's ok to have incomplete locale
          locale: customLocale,
        },
      );
      expect(result).toBe("It works perfectly!");
    });
  });
});
