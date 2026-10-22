import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { FormatDistanceFn } from "../locale/types.ts";
import { formatDistance } from "./index.ts";

describe("formatDistance", () => {
  describe("seconds", () => {
    describe("when the includeSeconds option is true", () => {
      it("less than 5 seconds", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          { includeSeconds: true },
        );
        expect(result).toBe("less than 5 seconds");
      });

      it("less than 10 seconds", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 7),
          { includeSeconds: true },
        );
        expect(result).toBe("less than 10 seconds");
      });

      it("less than 20 seconds", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 15),
          { includeSeconds: true },
        );
        expect(result).toBe("less than 20 seconds");
      });

      it("half a minute", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 25),
          { includeSeconds: true },
        );
        expect(result).toBe("half a minute");
      });

      it("less than a minute", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 45),
          { includeSeconds: true },
        );
        expect(result).toBe("less than a minute");
      });

      it("1 minute", () => {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 33, 0),
          { includeSeconds: true },
        );
        expect(result).toBe("1 minute");
      });
    });
  });

  describe("minutes", () => {
    it("less than a minute", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 20),
      );
      expect(result).toBe("less than a minute");
    });

    it("1 minute", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 50),
      );
      expect(result).toBe("1 minute");
    });

    it("n minutes", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 34, 50),
      );
      expect(result).toBe("3 minutes");
    });
  });

  describe("hours", () => {
    it("about 1 hour", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0),
      );
      expect(result).toBe("about 1 hour");
    });

    it("about n hours", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 13, 32, 0),
      );
      expect(result).toBe("about 3 hours");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 5, 10, 32, 0),
      );
      expect(result).toBe("1 day");
    });

    it("n days", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 7, 10, 32, 0),
      );
      expect(result).toBe("3 days");
    });
  });

  describe("months", () => {
    it("about 1 month", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 4, 4, 10, 32, 0),
      );
      expect(result).toBe("about 1 month");
    });

    it("n months", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 6, 4, 10, 32, 0),
      );
      expect(result).toBe("3 months");
    });
  });

  describe("years", () => {
    it("about 1 year", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("about 1 year");
    });

    it("over 1 year", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 9, 4, 10, 32, 0),
      );
      expect(result).toBe("over 1 year");
    });

    it("almost n years", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 2, 4, 10, 32, 0),
      );
      expect(result).toBe("almost 3 years");
    });

    it("about n years", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("about 3 years");
    });

    it("over n years", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 9, 4, 10, 32, 0),
      );
      expect(result).toBe("over 3 years");
    });
  });

  it("accepts timestamps", () => {
    const result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0).getTime(),
      new Date(1986, 3, 4, 11, 32, 0).getTime(),
    );
    expect(result).toBe("about 1 hour");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 25),
        { includeSeconds: true, addSuffix: true },
      );
      expect(result).toBe("half a minute ago");
    });

    it("adds a future suffix", () => {
      const result = formatDistance(
        new Date(1986, 3, 4, 11, 32, 0),
        new Date(1986, 3, 4, 10, 32, 0),
        { addSuffix: true },
      );
      expect(result).toBe("in about 1 hour");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        expect(token).toBe("lessThanXSeconds");
        expect(count).toBe(5);
        expect(options!.addSuffix).toBe(true);
        expect(options!.comparison!).toBeGreaterThan(0);
        return "It works!";
      };

      const customLocale = {
        formatDistance: localizeDistance,
      };

      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 3),
        new Date(1986, 3, 4, 10, 32, 0),
        {
          includeSeconds: true,
          addSuffix: true,
          locale: customLocale,
        },
      );

      expect(result).toBe("It works!");
    });
  });

  it("throws RangeError if the first date is `Invalid Date`", () => {
    expect(
      formatDistance.bind(null, new Date(NaN), new Date(1986, 3, 7, 10, 32, 0)),
    ).toThrow(RangeError);
  });

  it("throws RangeError if the second date is `Invalid Date`", () => {
    expect(
      formatDistance.bind(null, new Date(1986, 3, 4, 10, 32, 0), new Date(NaN)),
    ).toThrow(RangeError);
  });

  it("throws RangeError if the both dates are `Invalid Date`", () => {
    expect(formatDistance.bind(null, new Date(NaN), new Date(NaN))).toThrow(
      RangeError,
    );
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2023, 5, 1, "Asia/Singapore");
    const dateRight = new TZDate(2023, 11, 1, "America/New_York");
    expect(formatDistance(dateLeft, dateRight)).toEqual("6 months");
    expect(formatDistance(dateRight, dateLeft)).toBe("6 months");
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      formatDistance(start, end);
    }
  });

  describe("DST", () => {
    it.each([0, 3])(
      "formats 24 elapsed hours in month %i as a day",
      (month) => {
        const start = new TZDate(2018, month, 1, 0, 0, 0, "Australia/Sydney");
        const end = new TZDate(
          +start + 24 * 60 * 60 * 1000,
          "Australia/Sydney",
        );
        for (const includeSeconds of [false, true]) {
          const options = { includeSeconds };
          expect(formatDistance(start, end, options)).toBe("1 day");
          expect(formatDistance(end, start, options)).toBe("1 day");
          expect(
            formatDistance(start, end, { ...options, addSuffix: true }),
          ).toBe("1 day ago");
          expect(
            formatDistance(end, start, { ...options, addSuffix: true }),
          ).toBe("in 1 day");
        }
      },
    );

    it.each([
      ["2018-04-01T02:59:59+11:00", "2018-04-01T02:00:00+10:00"],
      ["2018-10-07T01:59:59+10:00", "2018-10-07T03:00:00+11:00"],
    ])("formats one elapsed second across %s to %s", (earlier, later) => {
      for (const includeSeconds of [false, true]) {
        const options = { in: tz("Australia/Sydney"), includeSeconds };
        const expected = includeSeconds
          ? "less than 5 seconds"
          : "less than a minute";
        expect(formatDistance(earlier, later, options)).toBe(expected);
        expect(formatDistance(later, earlier, options)).toBe(expected);
        expect(
          formatDistance(earlier, later, { ...options, addSuffix: true }),
        ).toBe(`${expected} ago`);
        expect(
          formatDistance(later, earlier, { ...options, addSuffix: true }),
        ).toBe(`in ${expected}`);
      }
    });

    it.each([
      [
        "Australia/Sydney",
        "2018-04-01T00:00+11:00",
        "2018-04-02T00:00+10:00",
        "1 day",
      ],
      [
        "Australia/Sydney",
        "2018-10-07T00:00+10:00",
        "2018-10-08T00:00+11:00",
        "about 23 hours",
      ],
      [
        "Australia/Sydney",
        "2018-03-31T00:00+11:00",
        "2018-04-03T00:00+10:00",
        "3 days",
      ],
      [
        "Australia/Sydney",
        "2018-10-07T00:00+10:00",
        "2018-11-07T00:00+11:00",
        "about 1 month",
      ],
      [
        "Australia/Sydney",
        "2018-01-01T00:00+11:00",
        "2019-01-01T00:00+11:00",
        "about 1 year",
      ],
      ["UTC", "2018-04-01T00:00Z", "2018-04-02T00:00Z", "1 day"],
    ])(
      "formats calendar intervals in %s from %s to %s",
      (zone, start, end, expected) => {
        const options = { in: tz(zone) };
        expect(formatDistance(start, end, options)).toBe(expected);
        expect(formatDistance(end, start, options)).toBe(expected);
      },
    );
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        formatDistance("2024-04-10T07:00:00Z", "2024-04-12T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }),
      ).toEqual("2 days");
      expect(
        formatDistance("2024-04-10T07:00:00Z", "2024-04-12T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toEqual("2 days");
    });
  });
});
