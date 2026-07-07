import { afterEach, describe, expect, it, vi } from "vitest";
import { constructFromSymbol } from "../constants/index.ts";
import { TZDate } from "./index.js";

describe("TZDate", () => {
  const defaultDateStr = "1987-02-11T00:00:00.000Z";
  const beforeGMTDateStr = "1880-02-11T00:00:00.000Z";

  let now = new Date();

  // NOTE: Make sure to add `{ concurrent: false }` to all tests that use it!
  function fakeNow(date = new Date(defaultDateStr)) {
    now = date;
    vi.useFakeTimers({ now });
  }

  afterEach(() => vi.useRealTimers());

  describe("static", () => {
    describe("constructor", () => {
      it("creates a new date", { concurrent: false }, () => {
        fakeNow();
        const date = new TZDate();
        expect(+date).toBe(+now);
      });

      it("creates a new date from a timestamp", () => {
        expect(
          new TZDate(+new Date(defaultDateStr), "Asia/Singapore").toISOString(),
        ).toBe("1987-02-11T08:00:00.000+08:00");
        expect(
          new TZDate(
            +new Date(defaultDateStr),
            "America/New_York",
          ).toISOString(),
        ).toBe("1987-02-10T19:00:00.000-05:00");
      });

      it("creates a new date from a string", () => {
        const dateStr = "2024-02-11T00:00:00.000Z";
        expect(new TZDate(dateStr, "Asia/Singapore").toISOString()).toBe(
          "2024-02-11T08:00:00.000+08:00",
        );
        expect(new TZDate("2024-02-11", "Asia/Singapore").toISOString()).toBe(
          "2024-02-11T08:00:00.000+08:00",
        );
        expect(new TZDate(dateStr, "America/New_York").toISOString()).toBe(
          "2024-02-10T19:00:00.000-05:00",
        );
        expect(new TZDate("2024-02-11", "America/New_York").toISOString()).toBe(
          "2024-02-10T19:00:00.000-05:00",
        );
        expect(
          new TZDate(beforeGMTDateStr, "America/New_York").toISOString(),
        ).toBe("1880-02-10T19:03:58.000-04:56");
        expect(new TZDate("1880-02-11", "America/New_York").toISOString()).toBe(
          "1880-02-10T19:03:58.000-04:56",
        );
        expect(
          new TZDate(beforeGMTDateStr, "Asia/Singapore").toISOString(),
        ).toBe("1880-02-11T06:55:25.000+06:55");
        expect(new TZDate("1880-02-11", "Asia/Singapore").toISOString()).toBe(
          "1880-02-11T06:55:25.000+06:55",
        );
      });

      it("creates a new date from a date instance", () => {
        const nativeDate = new Date(defaultDateStr);
        const beforeGMTNativeDate = new Date(beforeGMTDateStr);
        expect(new TZDate(nativeDate, "Asia/Singapore").toISOString()).toBe(
          "1987-02-11T08:00:00.000+08:00",
        );
        expect(new TZDate(nativeDate, "America/New_York").toISOString()).toBe(
          "1987-02-10T19:00:00.000-05:00",
        );
        expect(
          new TZDate(beforeGMTNativeDate, "Asia/Singapore").toISOString(),
        ).toBe("1880-02-11T06:55:25.000+06:55");
        expect(
          new TZDate(beforeGMTNativeDate, "America/New_York").toISOString(),
        ).toBe("1880-02-10T19:03:58.000-04:56");
      });

      it("creates a new date from date values", () => {
        // Month
        expect(new TZDate(2024, 1, "Asia/Singapore").toISOString()).toBe(
          "2024-02-01T00:00:00.000+08:00",
        );
        expect(new TZDate(2024, 1, "America/New_York").toISOString()).toBe(
          "2024-02-01T00:00:00.000-05:00",
        );
        expect(new TZDate(1880, 1, "Asia/Singapore").toISOString()).toBe(
          "1880-02-01T00:00:00.000+06:55",
        );
        expect(new TZDate(1880, 1, "America/New_York").toISOString()).toBe(
          "1880-02-01T00:00:00.000-04:56",
        );
        // Date
        expect(new TZDate(2024, 1, 11, "Asia/Singapore").toISOString()).toBe(
          "2024-02-11T00:00:00.000+08:00",
        );
        expect(new TZDate(2024, 1, 11, "America/New_York").toISOString()).toBe(
          "2024-02-11T00:00:00.000-05:00",
        );
        expect(new TZDate(1880, 1, 11, "Asia/Singapore").toISOString()).toBe(
          "1880-02-11T00:00:00.000+06:55",
        );
        expect(new TZDate(1880, 1, 11, "America/New_York").toISOString()).toBe(
          "1880-02-11T00:00:00.000-04:56",
        );
        // Hours
        expect(
          new TZDate(2024, 1, 11, 12, "Asia/Singapore").toISOString(),
        ).toBe("2024-02-11T12:00:00.000+08:00");
        expect(
          new TZDate(2024, 1, 11, 12, "America/New_York").toISOString(),
        ).toBe("2024-02-11T12:00:00.000-05:00");
        expect(
          new TZDate(1880, 1, 11, 12, "Asia/Singapore").toISOString(),
        ).toBe("1880-02-11T12:00:00.000+06:55");
        expect(
          new TZDate(1880, 1, 11, 12, "America/New_York").toISOString(),
        ).toBe("1880-02-11T12:00:00.000-04:56");
        // Minutes
        expect(
          new TZDate(2024, 1, 11, 12, 30, "Asia/Singapore").toISOString(),
        ).toBe("2024-02-11T12:30:00.000+08:00");
        expect(
          new TZDate(2024, 1, 11, 12, 30, "America/New_York").toISOString(),
        ).toBe("2024-02-11T12:30:00.000-05:00");
        expect(
          new TZDate(1880, 1, 11, 12, 30, "Asia/Singapore").toISOString(),
        ).toBe("1880-02-11T12:30:00.000+06:55");
        expect(
          new TZDate(1880, 1, 11, 12, 30, "America/New_York").toISOString(),
        ).toBe("1880-02-11T12:30:00.000-04:56");
        // Seconds
        expect(
          new TZDate(2024, 1, 11, 12, 30, 45, "Asia/Singapore").toISOString(),
        ).toBe("2024-02-11T12:30:45.000+08:00");
        expect(
          new TZDate(2024, 1, 11, 12, 30, 45, "America/New_York").toISOString(),
        ).toBe("2024-02-11T12:30:45.000-05:00");
        expect(
          new TZDate(1880, 1, 11, 12, 30, 45, "Asia/Singapore").toISOString(),
        ).toBe("1880-02-11T12:30:45.000+06:55");
        expect(
          new TZDate(1880, 1, 11, 12, 30, 45, "America/New_York").toISOString(),
        ).toBe("1880-02-11T12:30:45.000-04:56");
        // Milliseconds
        expect(
          new TZDate(
            2024,
            1,
            11,
            12,
            30,
            45,
            987,
            "Asia/Singapore",
          ).toISOString(),
        ).toBe("2024-02-11T12:30:45.987+08:00");
        expect(
          new TZDate(
            2024,
            1,
            11,
            12,
            30,
            45,
            987,
            "America/New_York",
          ).toISOString(),
        ).toBe("2024-02-11T12:30:45.987-05:00");
        expect(
          new TZDate(
            1880,
            1,
            11,
            12,
            30,
            45,
            987,
            "Asia/Singapore",
          ).toISOString(),
        ).toBe("1880-02-11T12:30:45.987+06:55");
        expect(
          new TZDate(
            1880,
            1,
            11,
            12,
            30,
            45,
            987,
            "America/New_York",
          ).toISOString(),
        ).toBe("1880-02-11T12:30:45.987-04:56");
      });

      it("returns Invalid Date for invalid date values", () => {
        expect(+new TZDate(NaN, "Asia/Singapore")).toBe(NaN);
      });

      describe("DST", () => {
        it("America/Los_Angeles", () => {
          expect(utcStr(new TZDate(2020, 2, 8, 1, laName))).toBe(
            "2020-03-08T09:00:00.000Z",
          );
          expect(utcStr(new TZDate(2020, 2, 8, 2, laName))).toBe(
            "2020-03-08T10:00:00.000Z",
          );
          expect(utcStr(new TZDate(2020, 2, 8, 3, laName))).toBe(
            "2020-03-08T10:00:00.000Z",
          );
          expect(utcStr(new TZDate(2020, 2, 8, 4, laName))).toBe(
            "2020-03-08T11:00:00.000Z",
          );
        });

        it("America/New_York", () => {
          expect(utcStr(new TZDate(2020, 2, 8, 1, nyName))).toBe(
            "2020-03-08T06:00:00.000Z",
          );
          expect(utcStr(new TZDate(2020, 2, 8, 2, nyName))).toBe(
            "2020-03-08T07:00:00.000Z",
          );
          expect(utcStr(new TZDate(2020, 2, 8, 3, nyName))).toBe(
            "2020-03-08T07:00:00.000Z",
          );
          expect(utcStr(new TZDate(2020, 2, 8, 4, nyName))).toBe(
            "2020-03-08T08:00:00.000Z",
          );
        });
      });
    });

    describe("TZ", () => {
      it("constructs now date in the timezone", { concurrent: false }, () => {
        fakeNow();
        const date = TZDate.tz("Asia/Singapore");
        expect(date.toISOString()).toBe("1987-02-11T08:00:00.000+08:00");
      });

      it("constructs a date in the timezone", () => {
        // Timestamp
        expect(
          TZDate.tz("Asia/Singapore", +new Date(defaultDateStr)).toISOString(),
        ).toBe("1987-02-11T08:00:00.000+08:00");
        expect(
          TZDate.tz(
            "America/New_York",
            +new Date(defaultDateStr),
          ).toISOString(),
        ).toBe("1987-02-10T19:00:00.000-05:00");
        // Date string
        expect(TZDate.tz("Asia/Singapore", defaultDateStr).toISOString()).toBe(
          "1987-02-11T08:00:00.000+08:00",
        );
        // Date
        expect(
          TZDate.tz("Asia/Singapore", new Date(defaultDateStr)).toISOString(),
        ).toBe("1987-02-11T08:00:00.000+08:00");
        expect(
          TZDate.tz("America/New_York", defaultDateStr).toISOString(),
        ).toBe("1987-02-10T19:00:00.000-05:00");
        // Month
        expect(TZDate.tz("Asia/Singapore", 2024, 1).toISOString()).toBe(
          "2024-02-01T00:00:00.000+08:00",
        );
        expect(TZDate.tz("America/New_York", 2024, 1).toISOString()).toBe(
          "2024-02-01T00:00:00.000-05:00",
        );
        // Date
        expect(TZDate.tz("Asia/Singapore", 2024, 1, 11).toISOString()).toBe(
          "2024-02-11T00:00:00.000+08:00",
        );
        expect(TZDate.tz("America/New_York", 2024, 1, 11).toISOString()).toBe(
          "2024-02-11T00:00:00.000-05:00",
        );
        // Hours
        expect(TZDate.tz("Asia/Singapore", 2024, 1, 11, 12).toISOString()).toBe(
          "2024-02-11T12:00:00.000+08:00",
        );
        expect(
          TZDate.tz("America/New_York", 2024, 1, 11, 12).toISOString(),
        ).toBe("2024-02-11T12:00:00.000-05:00");
        // Minutes
        expect(
          TZDate.tz("Asia/Singapore", 2024, 1, 11, 12, 30).toISOString(),
        ).toBe("2024-02-11T12:30:00.000+08:00");
        expect(
          TZDate.tz("America/New_York", 2024, 1, 11, 12, 30).toISOString(),
        ).toBe("2024-02-11T12:30:00.000-05:00");
        // Seconds
        expect(
          TZDate.tz("Asia/Singapore", 2024, 1, 11, 12, 30, 45).toISOString(),
        ).toBe("2024-02-11T12:30:45.000+08:00");
        expect(
          TZDate.tz("America/New_York", 2024, 1, 11, 12, 30, 45).toISOString(),
        ).toBe("2024-02-11T12:30:45.000-05:00");
        // Milliseconds
        expect(
          TZDate.tz(
            "Asia/Singapore",
            2024,
            1,
            11,
            12,
            30,
            45,
            987,
          ).toISOString(),
        ).toBe("2024-02-11T12:30:45.987+08:00");
        expect(
          TZDate.tz(
            "America/New_York",
            2024,
            1,
            11,
            12,
            30,
            45,
            987,
          ).toISOString(),
        ).toBe("2024-02-11T12:30:45.987-05:00");
      });

      it("constructs proper date around DST changes", () => {
        expect(
          new Date(
            +new TZDate(2023, 2, 10, 3, 30, "America/New_York"),
          ).toISOString(),
        ).toBe("2023-03-10T08:30:00.000Z");
        expect(
          new Date(
            +new TZDate(2023, 2, 11, 3, 30, "America/New_York"),
          ).toISOString(),
        ).toBe("2023-03-11T08:30:00.000Z");
        expect(
          new Date(
            +new TZDate(2023, 2, 12, 3, 30, "America/New_York"),
          ).toISOString(),
        ).toBe("2023-03-12T07:30:00.000Z");
        expect(
          new Date(
            +new TZDate(2023, 2, 13, 3, 30, "America/New_York"),
          ).toISOString(),
        ).toBe("2023-03-13T07:30:00.000Z");
      });
    });

    describe("UTC", () => {
      it("returns a timestamp in a date in UTC", () => {
        expect(new Date(TZDate.UTC(2024, 1)).toISOString()).toBe(
          "2024-02-01T00:00:00.000Z",
        );
      });
    });

    describe("parse", () => {
      it("parses a date string to a timestamp", () => {
        expect(
          new Date(TZDate.parse("1987-02-11T00:00:00.000Z")).toISOString(),
        ).toBe("1987-02-11T00:00:00.000Z");
        expect(
          new Date(TZDate.parse("1987-02-11T00:00:00.000Z")).toISOString(),
        ).toBe("1987-02-11T00:00:00.000Z");
      });
    });
  });

  describe("time", () => {
    describe("getTime", () => {
      it("returns the time in the timezone", () => {
        const nativeDate = new Date(2020, 0, 1);
        expect(new TZDate(+nativeDate, "Asia/Singapore").getTime()).toBe(
          +nativeDate,
        );
        expect(new TZDate(+nativeDate, "America/New_York").getTime()).toBe(
          +nativeDate,
        );
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getTime()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getTime()).toBe(NaN);
      });
    });

    describe("setTime", () => {
      it("sets the time in the timezone", () => {
        const nativeDate = new Date(2020, 0, 1);
        {
          const date = new TZDate(defaultDateStr, "Asia/Singapore");
          date.setTime(+nativeDate);
          expect(+date).toBe(+nativeDate);
        }
        {
          const date = new TZDate(defaultDateStr, "America/New_York");
          date.setTime(+nativeDate);
          expect(+date).toBe(+nativeDate);
        }
      });

      it("updated time is reflected in ISO timestamp", () => {
        const nativeDate = new Date("2020-01-01T06:00:00.000+08:00");

        const date = new TZDate(defaultDateStr, "Asia/Singapore");
        expect(date.toISOString()).toEqual("1987-02-11T08:00:00.000+08:00");

        date.setTime(+nativeDate);
        expect(+date).toBe(+nativeDate);
        expect(date.toISOString()).toEqual("2020-01-01T06:00:00.000+08:00");
      });
    });

    describe("valueOf", () => {
      it("returns the primitive value of the date", () => {
        const nativeDate = new Date(2020, 0, 1);
        expect(new TZDate(+nativeDate, "Asia/Singapore").valueOf()).toBe(
          +nativeDate,
        );
        expect(new TZDate(+nativeDate, "America/New_York").valueOf()).toBe(
          +nativeDate,
        );
      });
    });
  });

  describe("year", () => {
    describe("getFullYear", () => {
      it("returns the full year in the timezone", () => {
        expect(new TZDate(2020, 0, 1, 0, "Asia/Singapore").getFullYear()).toBe(
          2020,
        );
        expect(
          new TZDate(2020, 0, 1, 0, "America/New_York").getFullYear(),
        ).toBe(2020);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getFullYear()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getFullYear()).toBe(NaN);
      });
    });

    describe("getUTCFullYear", () => {
      it("returns the full year in the UTC timezone", () => {
        expect(
          new TZDate(2020, 0, 1, 0, "Asia/Singapore").getUTCFullYear(),
        ).toBe(2019);
        expect(
          new TZDate(2020, 0, 1, 0, "America/New_York").getUTCFullYear(),
        ).toBe(2020);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getUTCFullYear()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getUTCFullYear()).toBe(
          NaN,
        );
      });
    });

    describe("setFullYear", () => {
      it("sets the full year in the timezone", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setFullYear(2021);
          expect(date.toISOString()).toBe("2021-01-01T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setFullYear(2021);
          expect(date.toISOString()).toBe("2021-01-01T00:00:00.000-05:00");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setFullYear(2020)).toBe(+date);
      });

      it("allows to set the month and date", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setFullYear(2021, 1, 11);
          expect(date.toISOString()).toBe("2021-02-11T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setFullYear(2021, 1, 11);
          expect(date.toISOString()).toBe("2021-02-11T00:00:00.000-05:00");
        }
      });

      it("allows to overflow into the future", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setFullYear(2021, 15, 45);
          expect(date.toISOString()).toBe("2022-05-15T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setFullYear(2021, 15, 45);
          expect(date.toISOString()).toBe("2022-05-15T00:00:00.000-04:00");
        }
      });

      it("allows to overflow into the past", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setFullYear(2021, -15, -15);
          expect(date.toISOString()).toBe("2019-09-15T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setFullYear(2021, -15, -150);
          expect(date.toISOString()).toBe("2019-05-03T00:00:00.000-04:00");
        }
      });
    });

    describe("setUTCFullYear", () => {
      it("sets the full year in the UTC timezone", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2020-12-31 16:00:00 (UTC) ->
          date.setUTCFullYear(2020);
          expect(utcStr(date)).toBe("2020-12-31T16:00:00.000Z");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 05:00:00 (UTC) ->
          date.setUTCFullYear(2020);
          expect(utcStr(date)).toBe("2020-01-01T05:00:00.000Z");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setUTCFullYear(2020)).toBe(+date);
      });

      it("allows to set the month and date", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2020-01-01 16:00:00 (UTC) -> ...
          date.setUTCFullYear(2020, 0, 1);
          expect(date.toISOString()).toBe("2020-01-02T00:00:00.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 05:00:00 (UTC) -> ...
          date.setUTCFullYear(2020, 0, 1);
          expect(date.toISOString()).toBe("2020-01-01T00:00:00.000-05:00");
        }
      });

      it("allows to overflow into the future", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2021-04-14 16:00:00 (UTC) -> ...
          date.setUTCFullYear(2020, 14, 45);
          expect(utcStr(date)).toBe("2021-04-14T16:00:00.000Z");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2021-04-14 05:00:00 (UTC) -> ...
          date.setUTCFullYear(2020, 14, 45);
          expect(utcStr(date)).toBe("2021-04-14T05:00:00.000Z");
        }
      });

      it("allows to overflow into the past", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-03-01 16:00:00 (UTC) -> ...
          date.setUTCFullYear(2020, -8, -60);
          expect(date.toISOString()).toBe("2019-03-02T00:00:00.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2019-03-01 05:00:00 (UTC) -> ...
          date.setUTCFullYear(2020, -8, -60);
          expect(date.toISOString()).toBe("2019-03-01T00:00:00.000-05:00");
        }
      });
    });
  });

  describe("month", () => {
    describe("getMonth", () => {
      it("returns the month in the timezone", () => {
        expect(new TZDate(2020, 0, 1, 0, "America/New_York").getMonth()).toBe(
          0,
        );
        expect(new TZDate(2020, 0, 1, 0, "Asia/Singapore").getMonth()).toBe(0);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getMonth()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getMonth()).toBe(NaN);
      });
    });

    describe("getUTCMonth", () => {
      it("returns the month in the UTC timezone", () => {
        expect(
          new TZDate(2020, 0, 1, 0, "America/New_York").getUTCMonth(),
        ).toBe(0);
        expect(new TZDate(2020, 0, 1, 0, "Asia/Singapore").getUTCMonth()).toBe(
          11,
        );
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getUTCMonth()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getUTCMonth()).toBe(NaN);
      });
    });

    describe("setMonth", () => {
      it("sets the month in the timezone", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMonth(1);
          expect(date.toISOString()).toBe("2020-02-01T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMonth(1);
          expect(date.toISOString()).toBe("2020-02-01T00:00:00.000-05:00");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setMonth(1)).toBe(+date);
      });

      it("allows to set the date", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMonth(1, 11);
          expect(date.toISOString()).toBe("2020-02-11T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMonth(1, 11);
          expect(date.toISOString()).toBe("2020-02-11T00:00:00.000-05:00");
        }
      });

      it("allows to overflow into the future", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMonth(15, 45);
          expect(date.toISOString()).toBe("2021-05-15T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMonth(15, 45);
          expect(date.toISOString()).toBe("2021-05-15T00:00:00.000-04:00");
        }
      });

      it("allows to overflow into the past", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMonth(-15, -150);
          expect(date.toISOString()).toBe("2018-05-03T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMonth(-15, -150);
          expect(date.toISOString()).toBe("2018-05-03T00:00:00.000-04:00");
        }
      });
    });

    describe("setUTCMonth", () => {
      it("sets the month in the UTC timezone", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-03-03 16:00:00 (UTC) -> ...
          date.setUTCMonth(1);
          expect(utcStr(date)).toBe("2019-03-03T16:00:00.000Z");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-02-01 05:00:00 (UTC) -> ...
          date.setUTCMonth(1);
          expect(utcStr(date)).toBe("2020-02-01T05:00:00.000Z");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setUTCMonth(1)).toBe(+date);
      });

      it("allows to set the date", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-02-11 16:00:00 (UTC) -> ...
          date.setUTCMonth(1, 11);
          expect(date.toISOString()).toBe("2019-02-12T00:00:00.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-02-11 05:00:00 (UTC) -> ...
          date.setUTCMonth(1, 11);
          expect(date.toISOString()).toBe("2020-02-11T00:00:00.000-05:00");
        }
      });

      it("allows to overflow into the future", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2020-08-14 16:00:00 (UTC) -> ...
          date.setUTCMonth(18, 45);
          expect(date.toISOString()).toBe("2020-08-15T00:00:00.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2021-08-14 05:00:00 (UTC) -> ...
          date.setUTCMonth(18, 45);
          expect(utcStr(date)).toBe("2021-08-14T05:00:00.000Z");
        }
      });

      it("allows to overflow into the past", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2017-05-01 16:00:00 (UTC) -> ...
          date.setUTCMonth(-18, -60);
          expect(date.toISOString()).toBe("2017-05-02T00:00:00.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2018-05-01 05:00:00 (UTC) -> ...
          date.setUTCMonth(-18, -60);
          expect(utcStr(date)).toBe("2018-05-01T05:00:00.000Z");
        }
      });
    });
  });

  describe("date", () => {
    describe("getDate", () => {
      it("returns the date in the timezone", () => {
        expect(new TZDate(defaultDateStr, "America/New_York").getDate()).toBe(
          10,
        );
        expect(new TZDate(defaultDateStr, "Asia/Singapore").getDate()).toBe(11);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getDate()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getDate()).toBe(NaN);
      });
    });

    describe("getUTCDate", () => {
      it("returns the date in the UTC timezone", () => {
        expect(
          new TZDate(defaultDateStr, "America/New_York").getUTCDate(),
        ).toBe(11);
        expect(new TZDate(defaultDateStr, "Asia/Singapore").getUTCDate()).toBe(
          11,
        );
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getUTCDate()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getUTCDate()).toBe(NaN);
      });
    });

    describe("setDate", () => {
      it("sets the date in the timezone", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setDate(2);
          expect(date.toISOString()).toBe("2020-01-02T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setDate(2);
          expect(date.toISOString()).toBe("2020-01-02T00:00:00.000-05:00");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setDate(2)).toBe(+date);
      });

      it("allows to overflow the month into the future", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setDate(92);
          expect(date.toISOString()).toBe("2020-04-01T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setDate(92);
          expect(date.toISOString()).toBe("2020-04-01T00:00:00.000-04:00");
        }
      });

      it("allows to overflow the month into the past", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setDate(-15);
          expect(date.toISOString()).toBe("2019-12-16T00:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setDate(-15);
          expect(date.toISOString()).toBe("2019-12-16T00:00:00.000-05:00");
        }
      });
    });

    describe("setUTCDate", () => {
      it("sets the date in the UTC timezone", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-11 16:00:00 (UTC) ->
          date.setUTCDate(11);
          expect(utcStr(date)).toBe("2019-12-11T16:00:00.000Z");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-11 05:00:00 (UTC) ->
          date.setUTCDate(11);
          expect(utcStr(date)).toBe("2020-01-11T05:00:00.000Z");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setUTCDate(2)).toBe(+date);
      });

      it("allows to overflow into the future", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2022-07-02 16:00:00 (UTC) ->
          date.setUTCDate(945);
          expect(date.toISOString()).toBe("2022-07-03T00:00:00.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2022-08-02 05:00:00 (UTC) ->
          date.setUTCDate(945);
          expect(utcStr(date)).toBe("2022-08-02T05:00:00.000Z");
        }
      });

      it("allows to overflow into the past", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-10-01 16:00:00 (UTC) ->
          date.setUTCDate(-60);
          expect(utcStr(date)).toBe("2019-10-01T16:00:00.000Z");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2019-11-01 05:00:00 (UTC) ->
          date.setUTCDate(-60);
          expect(utcStr(date)).toBe("2019-11-01T05:00:00.000Z");
        }
      });
    });
  });

  describe("day", () => {
    describe("getDay", () => {
      it("returns the day in the timezone", () => {
        const dateStr = "2020-01-01T00:00:00.000Z";
        expect(new TZDate(dateStr, "America/New_York").getDay()).toBe(2);
        expect(new TZDate(dateStr, "Asia/Singapore").getDay()).toBe(3);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getDay()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getDay()).toBe(NaN);
      });
    });

    describe("getUTCDay", () => {
      it("returns the day in the UTC timezone", () => {
        expect(new TZDate(2020, 0, 1, 0, "America/New_York").getUTCDay()).toBe(
          3,
        );
        expect(new TZDate(2020, 0, 1, 0, "Asia/Singapore").getUTCDay()).toBe(2);
        const dateStr = "2020-01-01T00:00:00.000Z";
        expect(new TZDate(dateStr, "America/New_York").getUTCDay()).toBe(3);
        expect(new TZDate(dateStr, "Asia/Singapore").getUTCDay()).toBe(3);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getUTCDay()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getUTCDay()).toBe(NaN);
      });
    });
  });

  describe("hours", () => {
    describe("getHours", () => {
      it("returns the hours in the timezone", () => {
        const dateStr = "1987-02-10T09:00:00.000Z";
        expect(new TZDate(dateStr, "Asia/Singapore").getHours()).toBe(17);
        expect(new TZDate(dateStr, "America/New_York").getHours()).toBe(4);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getHours()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getHours()).toBe(NaN);
      });
    });

    describe("getUTCHours", () => {
      it("returns the hours in the UTC timezone", () => {
        const dateStr = "1987-02-10T09:00:00.000Z";
        expect(new TZDate(dateStr, "Asia/Singapore").getUTCHours()).toBe(9);
        expect(new TZDate(dateStr, "America/New_York").getUTCHours()).toBe(9);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getUTCHours()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getUTCHours()).toBe(NaN);
      });
    });

    describe("setHours", () => {
      it("sets the hours in the timezone", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setHours(14);
          expect(date.toISOString()).toBe("2020-01-01T14:00:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setDate(14);
          expect(date.toISOString()).toBe("2020-01-14T00:00:00.000-05:00");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setHours(14)).toBe(+date);
      });

      it("allows to set hours, minutes, seconds and milliseconds", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setHours(14, 30, 45, 987);
          expect(date.toISOString()).toBe("2020-01-01T14:30:45.987+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setHours(14, 30, 45, 987);
          expect(date.toISOString()).toBe("2020-01-01T14:30:45.987-05:00");
        }
      });

      it("allows to overflow the date into the future", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setHours(30, 120, 120, 30000);
          // 30 hours + 120 minutes (2 hours) + 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 1 day + 08:02:30
          expect(date.toISOString()).toBe("2020-01-02T08:02:30.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setHours(30, 120, 120, 30000);
          // 30 hours + 120 minutes (2 hours) + 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 1 day + 08:02:30
          expect(date.toISOString()).toBe("2020-01-02T08:02:30.000-05:00");
        }
      });

      it("allows to overflow the date into the past", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setHours(-30, -120, -120, -30000);
          // 30 hours + 120 minutes (2 hours) + 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 1 day + 08:02:30
          expect(date.toISOString()).toBe("2019-12-30T15:57:30.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setHours(-30, -120, -120, -30000);
          // 30 hours + 120 minutes (2 hours) + 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 1 day + 08:02:30
          expect(date.toISOString()).toBe("2019-12-30T15:57:30.000-05:00");
        }
      });

      it("constructs proper date around DST changes", () => {
        const date10 = new TZDate(2023, 2, 10, "America/New_York");
        date10.setHours(3, 30);
        expect(new Date(+date10).toISOString()).toBe(
          "2023-03-10T08:30:00.000Z",
        );
        const date11 = new TZDate(2023, 2, 11, "America/New_York");
        date11.setHours(3, 30);
        expect(new Date(+date11).toISOString()).toBe(
          "2023-03-11T08:30:00.000Z",
        );
        const date12 = new TZDate(2023, 2, 12, "America/New_York");
        date12.setHours(3, 30);
        expect(new Date(+date12).toISOString()).toBe(
          "2023-03-12T07:30:00.000Z",
        );
        const date13 = new TZDate(2023, 2, 13, "America/New_York");
        date13.setHours(3, 30);
        expect(new Date(+date13).toISOString()).toBe(
          "2023-03-13T07:30:00.000Z",
        );
      });
    });

    describe("setUTCHours", () => {
      it("sets the hours in the UTC timezone", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 12:00:00 (UTC) ->
          date.setUTCHours(12);
          expect(utcStr(date)).toBe("2019-12-31T12:00:00.000Z");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 12:00:00 (UTC) ->
          date.setUTCHours(12);
          expect(utcStr(date)).toBe("2020-01-01T12:00:00.000Z");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setUTCHours(14)).toBe(+date);
      });

      it("allows to set hours, minutes, seconds and milliseconds", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31T12:34:56.789Z (UTC) ->
          date.setUTCHours(12, 34, 56, 789);
          expect(date.toISOString()).toBe("2019-12-31T20:34:56.789+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01T12:34:56.789Z (UTC) ->
          date.setUTCHours(12, 34, 56, 789);
          expect(date.toISOString()).toBe("2020-01-01T07:34:56.789-05:00");
        }
      });

      it("allows to overflow the date into the future", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2020-01-01 08:02:30 (UTC) ->
          date.setUTCHours(30, 120, 120, 30000);
          expect(date.toISOString()).toBe("2020-01-01T16:02:30.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-02 08:02:30 (UTC) ->
          date.setUTCHours(30, 120, 120, 30000);
          expect(date.toISOString()).toBe("2020-01-02T03:02:30.000-05:00");
        }
      });

      it("allows to overflow the date into the past", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-29 15:57:30 (UTC) ->
          date.setUTCHours(-30, -120, -120, -30000);
          expect(date.toISOString()).toBe("2019-12-29T23:57:30.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2019-12-30 15:57:30 (UTC) ->
          date.setUTCHours(-30, -120, -120, -30000);
          expect(date.toISOString()).toBe("2019-12-30T10:57:30.000-05:00");
        }
      });
    });
  });

  describe("minutes", () => {
    describe("getMinutes", () => {
      it("returns the minutes in the timezone", () => {
        const dateStr = "1987-02-10T00:15:00.000Z";
        expect(new TZDate(dateStr, "America/New_York").getMinutes()).toBe(15);
        expect(new TZDate(dateStr, "Asia/Kolkata").getMinutes()).toBe(45);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getMinutes()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getMinutes()).toBe(NaN);
      });
    });

    describe("getUTCMinutes", () => {
      it("returns the minutes in the UTC timezone", () => {
        const dateStr = "1987-02-10T00:15:00.000Z";
        expect(new TZDate(dateStr, "America/New_York").getUTCMinutes()).toBe(
          15,
        );
        expect(new TZDate(dateStr, "Asia/Kolkata").getUTCMinutes()).toBe(15);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getUTCMinutes()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getUTCMinutes()).toBe(NaN);
      });
    });

    describe("setMinutes", () => {
      it("sets the minutes in the timezone", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMinutes(30);
          expect(date.toISOString()).toBe("2020-01-01T00:30:00.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMinutes(30);
          expect(date.toISOString()).toBe("2020-01-01T00:30:00.000-05:00");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setMinutes(30)).toBe(+date);
      });

      it("allows to set minutes, seconds and milliseconds", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMinutes(30, 45, 987);
          expect(date.toISOString()).toBe("2020-01-01T00:30:45.987+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMinutes(30, 45, 987);
          expect(date.toISOString()).toBe("2020-01-01T00:30:45.987-05:00");
        }
      });

      it("allows to overflow the hours into the future", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMinutes(120, 120, 30000);
          // 120 minutes (2 hours) + 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 02:02:30
          expect(date.toISOString()).toBe("2020-01-01T02:02:30.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMinutes(120, 120, 30000);
          // 120 minutes (2 hours) + 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 02:02:30
          expect(date.toISOString()).toBe("2020-01-01T02:02:30.000-05:00");
        }
      });

      it("allows to overflow the hours into the past", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMinutes(-120, -120, -30000);
          // 120 minutes (2 hours) + 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 02:02:30
          expect(date.toISOString()).toBe("2019-12-31T21:57:30.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMinutes(-120, -120, -30000);
          // 120 minutes (2 hours) + 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 02:02:30
          expect(date.toISOString()).toBe("2019-12-31T21:57:30.000-05:00");
        }
      });
    });

    describe("setUTCMinutes", () => {
      it("sets the minutes in the UTC timezone", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 16:34:00 (UTC) ->
          date.setUTCMinutes(34);
          expect(utcStr(date)).toBe("2019-12-31T16:34:00.000Z");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 05:34:00 (UTC) ->
          date.setUTCMinutes(34);
          expect(utcStr(date)).toBe("2020-01-01T05:34:00.000Z");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setUTCMinutes(30)).toBe(+date);
      });

      it("allows to set minutes, seconds and milliseconds", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 16:34:56 (UTC) ->
          date.setUTCMinutes(34, 56, 789);
          expect(date.toISOString()).toBe("2020-01-01T00:34:56.789+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 05:34:56 (UTC) ->
          date.setUTCMinutes(34, 56, 789);
          expect(date.toISOString()).toBe("2020-01-01T00:34:56.789-05:00");
        }
      });

      it("allows to overflow the hours into the future", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 18:02:30 (UTC) ->
          date.setUTCMinutes(120, 120, 30000);
          expect(date.toISOString()).toBe("2020-01-01T02:02:30.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 07:02:30 (UTC) ->
          date.setUTCMinutes(120, 120, 30000);
          expect(date.toISOString()).toBe("2020-01-01T02:02:30.000-05:00");
        }
      });

      it("allows to overflow the hours into the past", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 13:57:30 (UTC) ->
          date.setUTCMinutes(-120, -120, -30000);
          expect(date.toISOString()).toBe("2019-12-31T21:57:30.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 02:57:30 (UTC) ->
          date.setUTCMinutes(-120, -120, -30000);
          expect(date.toISOString()).toBe("2019-12-31T21:57:30.000-05:00");
        }
      });
    });
  });

  describe("seconds", () => {
    describe("getSeconds", () => {
      it("returns the seconds in the timezone", () => {
        const dateStr = "1987-02-10T00:00:30.000Z";
        expect(new TZDate(dateStr, "America/New_York").getSeconds()).toBe(30);
        expect(new TZDate(dateStr, "Asia/Singapore").getSeconds()).toBe(30);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getSeconds()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getSeconds()).toBe(NaN);
      });
    });

    describe("getUTCSeconds", () => {
      it("returns the seconds in the UTC timezone", () => {
        const dateStr = "1987-02-10T00:00:30.000Z";
        const beforeGMTDateStr = "1880-02-10T00:00:30.000Z";
        expect(new TZDate(dateStr, "America/New_York").getUTCSeconds()).toBe(
          30,
        );
        expect(new TZDate(dateStr, "Asia/Singapore").getUTCSeconds()).toBe(30);
        expect(
          new TZDate(beforeGMTDateStr, "America/New_York").getUTCSeconds(),
        ).toBe(30);
        expect(
          new TZDate(beforeGMTDateStr, "Asia/Singapore").getUTCSeconds(),
        ).toBe(30);
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getUTCSeconds()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getUTCSeconds()).toBe(NaN);
      });
    });

    describe("setSeconds", () => {
      it("sets the seconds in the timezone", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setSeconds(56);
          expect(date.toISOString()).toBe("2020-01-01T00:00:56.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setSeconds(56);
          expect(date.toISOString()).toBe("2020-01-01T00:00:56.000-05:00");
        }
        {
          const date = new TZDate(1880, 0, 1, "Asia/Singapore");
          date.setSeconds(56);
          expect(date.toISOString()).toBe("1880-01-01T00:00:31.000+06:55"); // 56s - 25s = 31s
        }
        {
          const date = new TZDate(1880, 0, 1, "America/New_York");
          date.setSeconds(56);
          expect(date.toISOString()).toBe("1880-01-01T00:00:58.000-04:56"); // 56s + 2s = 58s
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setSeconds(56)).toBe(+date);
      });

      it("allows to set seconds and milliseconds", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setSeconds(56, 987);
          expect(date.toISOString()).toBe("2020-01-01T00:00:56.987+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setSeconds(56, 987);
          expect(date.toISOString()).toBe("2020-01-01T00:00:56.987-05:00");
        }
      });

      it("allows to overflow the minutes into the future", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setSeconds(120, 30000);
          // 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 02:30
          expect(date.toISOString()).toBe("2020-01-01T00:02:30.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setSeconds(120, 30000);
          // 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 02:30
          expect(date.toISOString()).toBe("2020-01-01T00:02:30.000-05:00");
        }
      });

      it("allows to overflow the minutes into the past", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setSeconds(-120, -30000);
          // 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 02:30
          expect(date.toISOString()).toBe("2019-12-31T23:57:30.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setSeconds(-120, -30000);
          // 120 seconds (2 minutes) + 30000 ms (30 seconds)
          // = 02:30
          expect(date.toISOString()).toBe("2019-12-31T23:57:30.000-05:00");
        }
      });
    });

    describe("setUTCSeconds", () => {
      it("sets the seconds in the UTC timezone", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 16:00:56 (UTC) ->
          date.setUTCSeconds(56);
          expect(utcStr(date)).toBe("2019-12-31T16:00:56.000Z");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 05:00:56 (UTC) ->
          date.setUTCSeconds(56);
          expect(utcStr(date)).toBe("2020-01-01T05:00:56.000Z");
        }
        {
          // 1880-12-31 17:04:35 (UTC) -> ...
          const date = new TZDate(1880, 0, 1, "Asia/Singapore");
          // ... -> 1880-12-31 17:05:56 (UTC) ->
          date.setUTCSeconds(56);
          expect(utcStr(date)).toBe("1879-12-31T17:04:56.000Z");
        }
        {
          // 1880-01-01 04:56:58 (UTC) -> ...
          const date = new TZDate(1880, 0, 1, "America/New_York");
          // ... -> 1880-01-01 04:56:56 (UTC) ->
          date.setUTCSeconds(56);
          expect(utcStr(date)).toBe("1880-01-01T04:56:56.000Z");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setUTCSeconds(56)).toBe(+date);
      });

      it("allows to set seconds and milliseconds", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 16:00:56 (UTC) ->
          date.setUTCSeconds(56, 789);
          expect(date.toISOString()).toBe("2020-01-01T00:00:56.789+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 05:00:56 (UTC) ->
          date.setUTCSeconds(56, 789);
          expect(date.toISOString()).toBe("2020-01-01T00:00:56.789-05:00");
        }
      });

      it("allows to overflow the minutes into the future", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 16:02:30 (UTC) ->
          date.setUTCSeconds(120, 30000);
          expect(date.toISOString()).toBe("2020-01-01T00:02:30.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 05:02:30 (UTC) ->
          date.setUTCSeconds(120, 30000);
          expect(date.toISOString()).toBe("2020-01-01T00:02:30.000-05:00");
        }
      });

      it("allows to overflow the minutes into the past", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 15:57:30 (UTC) ->
          date.setUTCSeconds(-120, -30000);
          expect(date.toISOString()).toBe("2019-12-31T23:57:30.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 04:57:30 (UTC) ->
          date.setUTCSeconds(-120, -30000);
          expect(date.toISOString()).toBe("2019-12-31T23:57:30.000-05:00");
        }
      });
    });
  });

  describe("milliseconds", () => {
    describe("getMilliseconds", () => {
      it("returns the milliseconds in the timezone", () => {
        const dateStr = "1987-02-10T00:00:00.456Z";
        expect(new TZDate(dateStr, "America/New_York").getMilliseconds()).toBe(
          456,
        );
        expect(new TZDate(dateStr, "Asia/Singapore").getMilliseconds()).toBe(
          456,
        );
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getMilliseconds()).toBe(NaN);
        expect(new TZDate(Date.now(), "Etc/Invalid").getMilliseconds()).toBe(
          NaN,
        );
      });
    });

    describe("getUTCMilliseconds", () => {
      it("returns the milliseconds in the UTC timezone", () => {
        const dateStr = "1987-02-10T00:00:00.456Z";
        expect(
          new TZDate(dateStr, "America/New_York").getUTCMilliseconds(),
        ).toBe(456);
        expect(new TZDate(dateStr, "Asia/Singapore").getUTCMilliseconds()).toBe(
          456,
        );
      });

      it("returns NaN when the date or time zone are invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getUTCMilliseconds()).toBe(
          NaN,
        );
        expect(new TZDate(Date.now(), "Etc/Invalid").getUTCMilliseconds()).toBe(
          NaN,
        );
      });
    });

    describe("setMilliseconds", () => {
      it("sets the milliseconds in the timezone", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMilliseconds(789);
          expect(date.toISOString()).toBe("2020-01-01T00:00:00.789+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMilliseconds(789);
          expect(date.toISOString()).toBe("2020-01-01T00:00:00.789-05:00");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setMilliseconds(789)).toBe(+date);
      });

      it("allows to overflow the seconds into the future", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMilliseconds(1000);
          expect(date.toISOString()).toBe("2020-01-01T00:00:01.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMilliseconds(1000);
          expect(date.toISOString()).toBe("2020-01-01T00:00:01.000-05:00");
        }
      });

      it("allows to overflow the seconds into the past", () => {
        {
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          date.setMilliseconds(-1000);
          expect(date.toISOString()).toBe("2019-12-31T23:59:59.000+08:00");
        }
        {
          const date = new TZDate(2020, 0, 1, "America/New_York");
          date.setMilliseconds(-1000);
          expect(date.toISOString()).toBe("2019-12-31T23:59:59.000-05:00");
        }
      });
    });

    describe("setUTCMilliseconds", () => {
      it("sets the milliseconds in the UTC timezone", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 16:00:00 (UTC) ->
          date.setUTCMilliseconds(789);
          expect(utcStr(date)).toBe("2019-12-31T16:00:00.789Z");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 05:00:00 (UTC) ->
          date.setUTCMilliseconds(789);
          expect(utcStr(date)).toBe("2020-01-01T05:00:00.789Z");
        }
      });

      it("returns the timestamp after setting", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        expect(date.setUTCMilliseconds(789)).toBe(+date);
      });

      it("allows to overflow the seconds into the future", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2019-12-31 16:00:30 (UTC) ->
          date.setUTCMilliseconds(30000);
          expect(date.toISOString()).toBe("2020-01-01T00:00:30.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2019-12-31 15:59:30 (UTC) ->
          date.setUTCMilliseconds(30000);
          expect(date.toISOString()).toBe("2020-01-01T00:00:30.000-05:00");
        }
      });

      it("allows to overflow the seconds into the past", () => {
        {
          // 2019-12-31 16:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "Asia/Singapore");
          // ... -> 2020-01-01 04:59:30 (UTC) ->
          date.setUTCMilliseconds(-30000);
          expect(date.toISOString()).toBe("2019-12-31T23:59:30.000+08:00");
        }
        {
          // 2020-01-01 05:00:00 (UTC) -> ...
          const date = new TZDate(2020, 0, 1, "America/New_York");
          // ... -> 2020-01-01 04:59:30 (UTC) ->
          date.setUTCMilliseconds(-30000);
          expect(date.toISOString()).toBe("2019-12-31T23:59:30.000-05:00");
        }
      });
    });
  });

  describe("time zone", () => {
    describe("withTimeZone", () => {
      it("returns a new date with the given timezone", () => {
        const date = new TZDate(defaultDateStr, "America/New_York");
        const newDate = date.withTimeZone("Asia/Tokyo");

        expect(date.toISOString()).toBe("1987-02-10T19:00:00.000-05:00");
        expect(newDate.toISOString()).toBe("1987-02-11T09:00:00.000+09:00");

        const beforeGMTDate = new TZDate(beforeGMTDateStr, "America/New_York");
        const beforeGMTNewDate = beforeGMTDate.withTimeZone("Asia/Singapore");

        expect(beforeGMTDate.toISOString()).toBe(
          "1880-02-10T19:03:58.000-04:56",
        );
        expect(beforeGMTNewDate.toISOString()).toBe(
          "1880-02-11T06:55:25.000+06:55",
        );
      });
    });

    describe("getTimezoneOffset", () => {
      it("returns the timezone offset", () => {
        expect(
          new TZDate(defaultDateStr, "America/New_York").getTimezoneOffset(),
        ).toBe(300);
        expect(
          new TZDate(defaultDateStr, "Asia/Singapore").getTimezoneOffset(),
        ).toBe(-480);
        expect(
          new TZDate(beforeGMTDateStr, "America/New_York").getTimezoneOffset(),
        ).toBe(296);
        expect(
          new TZDate(beforeGMTDateStr, "Asia/Singapore").getTimezoneOffset(),
        ).toBe(-415);
      });

      it("returns NaN when the date is invalid", () => {
        expect(new TZDate(NaN, "America/New_York").getTimezoneOffset()).toBe(
          NaN,
        );
      });
    });
  });

  describe("representation", () => {
    describe("[Symbol.toPrimitive]", () => {
      it("returns string representation of the date when the hint is 'string'", () => {
        expect(
          new TZDate(2020, 0, 1, "Asia/Singapore")[Symbol.toPrimitive](
            "string",
          ),
        ).toBe("Wed Jan 01 2020 00:00:00 GMT+0800 (Singapore Standard Time)");
        expect(
          new TZDate(2020, 0, 1, "America/New_York")[Symbol.toPrimitive](
            "string",
          ),
        ).toBe("Wed Jan 01 2020 00:00:00 GMT-0500 (Eastern Standard Time)");
      });

      it("returns string representation of the date when the hint is 'default'", () => {
        expect(
          new TZDate(2020, 0, 1, "Asia/Singapore")[Symbol.toPrimitive](
            "default",
          ),
        ).toBe("Wed Jan 01 2020 00:00:00 GMT+0800 (Singapore Standard Time)");
        expect(
          new TZDate(2020, 0, 1, "America/New_York")[Symbol.toPrimitive](
            "default",
          ),
        ).toBe("Wed Jan 01 2020 00:00:00 GMT-0500 (Eastern Standard Time)");
      });

      it("returns number representation of the date when the hint is 'number'", () => {
        const nativeDate = new Date("2020-01-01T00:00:00.000+08:00");
        expect(
          new TZDate(+nativeDate, "Asia/Singapore")[Symbol.toPrimitive](
            "number",
          ),
        ).toBe(+nativeDate);
        expect(
          new TZDate(+nativeDate, "America/New_York")[Symbol.toPrimitive](
            "number",
          ),
        ).toBe(+nativeDate);

        const beforeGMTDate = new Date("1880-01-01T00:00:00.000+08:00");
        expect(
          new TZDate(+beforeGMTDate, "America/New_York")[Symbol.toPrimitive](
            "number",
          ),
        ).toBe(+beforeGMTDate);
      });
    });

    describe("toISOString", () => {
      it("returns ISO 8601 formatted date in the timezone", () => {
        expect(new TZDate(2020, 0, 1, "America/New_York").toISOString()).toBe(
          "2020-01-01T00:00:00.000-05:00",
        );
        expect(new TZDate(2020, 0, 1, "Asia/Singapore").toISOString()).toBe(
          "2020-01-01T00:00:00.000+08:00",
        );
        expect(new TZDate(2020, 0, 1, "Asia/Kolkata").toISOString()).toBe(
          "2020-01-01T00:00:00.000+05:30",
        );
        expect(new TZDate(2015, 7, 1, "Asia/Pyongyang").toISOString()).toBe(
          "2015-08-01T00:00:00.000+09:00",
        );
        expect(new TZDate(2015, 8, 1, "Asia/Pyongyang").toISOString()).toBe(
          "2015-09-01T00:00:00.000+08:30",
        );
        expect(
          new TZDate(1880, 0, 1, 22, 25, 54, "America/New_York").toISOString(),
        ).toBe("1880-01-01T22:25:54.000-04:56");
        expect(new TZDate(1880, 0, 1, "America/New_York").toISOString()).toBe(
          "1880-01-01T00:00:00.000-04:56",
        );
        expect(new TZDate(1880, 0, 1, "Asia/Pyongyang").toISOString()).toBe(
          "1880-01-01T00:00:00.000+08:23",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Moscow").toISOString()).toBe(
          "1880-01-01T00:00:00.000+02:30",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Berlin").toISOString()).toBe(
          "1880-01-01T00:00:00.000+00:53",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Vienna").toISOString()).toBe(
          "1880-01-01T00:00:00.000+01:05",
        );
      });
    });

    describe("toJSON", () => {
      it("works the same as toISOString", () => {
        expect(new TZDate(2020, 0, 1, "America/New_York").toJSON()).toBe(
          "2020-01-01T00:00:00.000-05:00",
        );
        expect(new TZDate(2015, 7, 1, "Asia/Pyongyang").toJSON()).toBe(
          "2015-08-01T00:00:00.000+09:00",
        );
        expect(new TZDate(2015, 8, 1, "Asia/Pyongyang").toJSON()).toBe(
          "2015-09-01T00:00:00.000+08:30",
        );
        expect(
          new TZDate(1880, 0, 1, 22, 25, 54, "America/New_York").toJSON(),
        ).toBe("1880-01-01T22:25:54.000-04:56");
        expect(new TZDate(1880, 0, 1, "America/New_York").toJSON()).toBe(
          "1880-01-01T00:00:00.000-04:56",
        );
        expect(new TZDate(1880, 0, 1, "Asia/Pyongyang").toJSON()).toBe(
          "1880-01-01T00:00:00.000+08:23",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Moscow").toJSON()).toBe(
          "1880-01-01T00:00:00.000+02:30",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Berlin").toJSON()).toBe(
          "1880-01-01T00:00:00.000+00:53",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Vienna").toJSON()).toBe(
          "1880-01-01T00:00:00.000+01:05",
        );
      });
    });

    describe("toString", () => {
      it("returns string representation of the date in the timezone", () => {
        expect(new TZDate(2020, 0, 1, "America/New_York").toString()).toBe(
          "Wed Jan 01 2020 00:00:00 GMT-0500 (Eastern Standard Time)",
        );
        expect(
          new TZDate("2020-01-01T00:00:00.000Z", "America/New_York").toString(),
        ).toBe("Tue Dec 31 2019 19:00:00 GMT-0500 (Eastern Standard Time)");
        expect(new TZDate(2020, 5, 1, "America/New_York").toString()).toBe(
          "Mon Jun 01 2020 00:00:00 GMT-0400 (Eastern Daylight Time)",
        );
        expect(
          new TZDate(1880, 0, 1, 22, 25, 54, "America/New_York").toString(),
        ).toBe("Thu Jan 01 1880 22:25:54 GMT-0456 (GMT-04:56:02)");
        expect(new TZDate(1880, 0, 1, "America/New_York").toString()).toBe(
          "Thu Jan 01 1880 00:00:00 GMT-0456 (GMT-04:56:02)",
        );
        expect(new TZDate(1880, 0, 1, "Asia/Pyongyang").toString()).toBe(
          "Thu Jan 01 1880 00:00:00 GMT+0823 (GMT+08:23)",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Moscow").toString()).toBe(
          "Thu Jan 01 1880 00:00:00 GMT+0230 (GMT+02:30:17)",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Berlin").toString()).toBe(
          "Thu Jan 01 1880 00:00:00 GMT+0053 (GMT+00:53:28)",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Vienna").toString()).toBe(
          "Thu Jan 01 1880 00:00:00 GMT+0105 (GMT+01:05:21)",
        );
      });
    });

    describe("toDateString", () => {
      it("returns formatted date portion of the in the timezone", () => {
        expect(new TZDate(2020, 0, 1, "America/New_York").toDateString()).toBe(
          "Wed Jan 01 2020",
        );
        expect(
          new TZDate("2020-01-01T00:00:00Z", "America/New_York").toDateString(),
        ).toBe("Tue Dec 31 2019");
        expect(
          new TZDate(1880, 0, 1, 22, 25, 54, "America/New_York").toDateString(),
        ).toBe("Thu Jan 01 1880");
        expect(new TZDate(1880, 0, 1, "America/New_York").toDateString()).toBe(
          "Thu Jan 01 1880",
        );
        expect(new TZDate(1880, 0, 1, "Asia/Pyongyang").toDateString()).toBe(
          "Thu Jan 01 1880",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Moscow").toDateString()).toBe(
          "Thu Jan 01 1880",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Berlin").toDateString()).toBe(
          "Thu Jan 01 1880",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Vienna").toDateString()).toBe(
          "Thu Jan 01 1880",
        );
      });
    });

    describe("toTimeString", () => {
      it("returns formatted time portion of the in the timezone", () => {
        expect(new TZDate(2020, 0, 1, "America/New_York").toTimeString()).toBe(
          "00:00:00 GMT-0500 (Eastern Standard Time)",
        );
        expect(
          new TZDate(
            "2020-01-01T00:00:00.000Z",
            "America/New_York",
          ).toTimeString(),
        ).toBe("19:00:00 GMT-0500 (Eastern Standard Time)");
        expect(new TZDate(2020, 5, 1, "America/New_York").toTimeString()).toBe(
          "00:00:00 GMT-0400 (Eastern Daylight Time)",
        );
        expect(new TZDate(1880, 0, 1, "America/New_York").toTimeString()).toBe(
          "00:00:00 GMT-0456 (GMT-04:56:02)",
        );
        expect(new TZDate(1880, 0, 1, "Asia/Pyongyang").toTimeString()).toBe(
          "00:00:00 GMT+0823 (GMT+08:23)",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Moscow").toTimeString()).toBe(
          "00:00:00 GMT+0230 (GMT+02:30:17)",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Berlin").toTimeString()).toBe(
          "00:00:00 GMT+0053 (GMT+00:53:28)",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Vienna").toTimeString()).toBe(
          "00:00:00 GMT+0105 (GMT+01:05:21)",
        );
      });
    });

    describe("toUTCString", () => {
      it("returns string representation of the date in UTC", () => {
        expect(
          new TZDate(
            "2020-02-11T08:00:00.000Z",
            "America/New_York",
          ).toUTCString(),
        ).toBe("Tue, 11 Feb 2020 08:00:00 GMT");
        expect(
          new TZDate(
            "2020-02-11T08:00:00.000Z",
            "Asia/Singapore",
          ).toUTCString(),
        ).toBe("Tue, 11 Feb 2020 08:00:00 GMT");
        expect(new TZDate(1880, 0, 1, "America/New_York").toUTCString()).toBe(
          "Thu, 01 Jan 1880 04:56:02 GMT",
        );
        expect(new TZDate(1880, 0, 1, "Asia/Pyongyang").toUTCString()).toBe(
          "Wed, 31 Dec 1879 15:37:00 GMT",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Moscow").toUTCString()).toBe(
          "Wed, 31 Dec 1879 21:29:43 GMT",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Berlin").toUTCString()).toBe(
          "Wed, 31 Dec 1879 23:06:32 GMT",
        );
        expect(new TZDate(1880, 0, 1, "Europe/Vienna").toUTCString()).toBe(
          "Wed, 31 Dec 1879 22:54:39 GMT",
        );
      });
    });

    describe("toLocaleString", () => {
      it("returns localized date and time in the timezone", () => {
        expect(
          new TZDate(2020, 0, 1, "America/New_York").toLocaleString(),
        ).toBe("1/1/2020, 12:00:00 AM");
        expect(
          new TZDate(
            "2020-01-01T00:00:00.000Z",
            "America/New_York",
          ).toLocaleString(),
        ).toBe("12/31/2019, 7:00:00 PM");
        expect(
          new TZDate(2020, 5, 1, "America/New_York").toLocaleString("es-ES", {
            dateStyle: "full",
            timeStyle: "full",
          }),
        ).toBe("lunes, 1 de junio de 2020, 0:00:00 (hora de verano oriental)");
        expect(
          new TZDate(
            "2020-01-01T02:00:00.000Z",
            "America/New_York",
          ).toLocaleString("es-ES", {
            dateStyle: "full",
            timeStyle: "full",
          }),
        ).toBe(
          "martes, 31 de diciembre de 2019, 21:00:00 (hora estándar oriental)",
        );
        expect(
          new TZDate(
            "2020-01-01T02:00:00.000Z",
            "America/New_York",
          ).toLocaleString("es-ES", {
            dateStyle: "full",
            timeStyle: "full",
            timeZone: "Asia/Singapore",
          }),
        ).toBe("miércoles, 1 de enero de 2020, 10:00:00 (hora de Singapur)");
      });
    });

    describe("toLocaleDateString", () => {
      it("returns localized date portion of the in the timezone", () => {
        expect(
          new TZDate(2020, 0, 1, "America/New_York").toLocaleDateString(),
        ).toBe("1/1/2020");
        expect(
          new TZDate(
            "2020-01-01T00:00:00.000Z",
            "America/New_York",
          ).toLocaleDateString(),
        ).toBe("12/31/2019");
        expect(
          new TZDate(2020, 5, 1, "America/New_York").toLocaleDateString(
            "es-ES",
            { dateStyle: "full" },
          ),
        ).toBe("lunes, 1 de junio de 2020");
        expect(
          new TZDate(
            "2020-01-01T02:00:00.000Z",
            "America/New_York",
          ).toLocaleDateString("es-ES", {
            dateStyle: "full",
          }),
        ).toBe("martes, 31 de diciembre de 2019");
        expect(
          new TZDate(2020, 0, 1, 10, "America/New_York").toLocaleDateString(
            "es-ES",
            { dateStyle: "full", timeZone: "Asia/Singapore" },
          ),
        ).toBe("miércoles, 1 de enero de 2020");
      });
    });

    describe("toLocaleTimeString", () => {
      it("returns localized time portion of the in the timezone", () => {
        expect(
          new TZDate(2020, 0, 1, "America/New_York").toLocaleTimeString(),
        ).toBe("12:00:00 AM");
        expect(
          new TZDate(
            "2020-02-11T00:00:00.000Z",
            "America/New_York",
          ).toLocaleTimeString(),
        ).toBe("7:00:00 PM");
        expect(
          new TZDate(2020, 5, 1, "America/New_York").toLocaleTimeString(
            "es-ES",
            { timeStyle: "full" },
          ),
        ).toBe("0:00:00 (hora de verano oriental)");
        expect(
          new TZDate(
            "2020-01-01T00:00:00.000Z",
            "America/New_York",
          ).toLocaleTimeString("es-ES", { timeStyle: "full" }),
        ).toBe("19:00:00 (hora estándar oriental)");
        expect(
          new TZDate(
            "2020-01-01T00:00:00.000Z",
            "America/New_York",
          ).toLocaleTimeString("es-ES", {
            timeStyle: "full",
            timeZone: "Asia/Singapore",
          }),
        ).toBe("8:00:00 (hora de Singapur)");
      });
    });
  });

  describe('[Symbol.for("constructDateFrom")]', () => {
    it("constructs a new date from value and the instance time zone", () => {
      const dateStr = "2020-01-01T00:00:00.000Z";
      const beforeGMTDateStr = "1880-01-01T00:00:00.000Z";
      const nativeDate = new Date(dateStr);
      const beforeGMTNativeDate = new Date("1880-01-01T00:00:00.000Z");
      {
        const date = new TZDate(defaultDateStr, "Asia/Singapore");
        const result = date[constructFromSymbol](nativeDate);
        expect(result.toISOString()).toBe("2020-01-01T08:00:00.000+08:00");
      }
      {
        const date = new TZDate(defaultDateStr, "America/New_York");
        const result = date[constructFromSymbol](nativeDate);
        expect(result.toISOString()).toBe("2019-12-31T19:00:00.000-05:00");
      }
      {
        const date = new TZDate(defaultDateStr, "Asia/Singapore");
        const result = date[constructFromSymbol](+nativeDate);
        expect(result.toISOString()).toBe("2020-01-01T08:00:00.000+08:00");
      }
      {
        const date = new TZDate(defaultDateStr, "America/New_York");
        const result = date[constructFromSymbol](+nativeDate);
        expect(result.toISOString()).toBe("2019-12-31T19:00:00.000-05:00");
      }
      {
        const date = new TZDate(beforeGMTDateStr, "America/New_York");
        const result = date[constructFromSymbol](+beforeGMTNativeDate);
        expect(result.toISOString()).toBe("1879-12-31T19:03:58.000-04:56");
      }
      {
        const date = new TZDate(beforeGMTDateStr, "Europe/Berlin");
        const result = date[constructFromSymbol](+beforeGMTNativeDate);
        expect(result.toISOString()).toBe("1880-01-01T00:53:28.000+00:53");
      }
      {
        const date = new TZDate(defaultDateStr, "Asia/Singapore");
        const result = date[constructFromSymbol](dateStr);
        expect(result.toISOString()).toBe("2020-01-01T08:00:00.000+08:00");
      }
      {
        const date = new TZDate(defaultDateStr, "America/New_York");
        const result = date[constructFromSymbol](dateStr);
        expect(result.toISOString()).toBe("2019-12-31T19:00:00.000-05:00");
      }
      {
        const date = new TZDate(beforeGMTDateStr, "America/New_York");
        const result = date[constructFromSymbol](beforeGMTDateStr);
        expect(result.toISOString()).toBe("1879-12-31T19:03:58.000-04:56");
      }
      {
        const date = new TZDate(beforeGMTDateStr, "Europe/Berlin");
        const result = date[constructFromSymbol](+beforeGMTNativeDate);
        expect(result.toISOString()).toBe("1880-01-01T00:53:28.000+00:53");
      }
    });
  });

  describe("DST", () => {
    describe("setting the DST time", () => {
      describe("DST start", () => {
        describe("default methods", () => {
          it("America/Los_Angeles", () => {
            withDSTStart(laName, (date) => {
              expect(utcStr(date)).toBe("2020-03-08T08:00:00.000Z");
            });

            // Set on the DST hour
            withDSTStart(laName, (date) => {
              date.setHours(2);
              expect(utcStr(date)).toBe("2020-03-08T10:00:00.000Z");
            });

            // Set on the hour DST moves to
            withDSTStart(laName, (date) => {
              date.setHours(3);
              expect(utcStr(date)).toBe("2020-03-08T10:00:00.000Z");
            });

            // Set after the DST hour
            withDSTStart(laName, (date) => {
              date.setHours(5);
              expect(utcStr(date)).toBe("2020-03-08T12:00:00.000Z");
            });
          });

          it("America/New_York", () => {
            withDSTStart(nyName, (date) => {
              expect(utcStr(date)).toBe("2020-03-08T05:00:00.000Z");
            });

            // Set on the DST hour
            withDSTStart(nyName, (date) => {
              date.setHours(2);
              expect(utcStr(date)).toBe("2020-03-08T07:00:00.000Z");
            });

            // Set on the hour DST moves to
            withDSTStart(nyName, (date) => {
              date.setHours(3);
              expect(utcStr(date)).toBe("2020-03-08T07:00:00.000Z");
            });

            // Set after the DST hour
            withDSTStart(nyName, (date) => {
              date.setHours(5);
              expect(utcStr(date)).toBe("2020-03-08T09:00:00.000Z");
            });
          });
        });

        describe("UTC methods", () => {
          it("America/Los_Angeles", () => {
            // Set on the DST hour
            withDSTStart(laName, (date) => {
              date.setUTCHours(10);
              expect(utcStr(date)).toBe("2020-03-08T10:00:00.000Z");
            });

            // Set after the DST hour
            withDSTStart(laName, (date) => {
              date.setUTCHours(12);
              expect(utcStr(date)).toBe("2020-03-08T12:00:00.000Z");
            });
          });

          it("America/New_York", () => {
            // Set on the DST hour
            withDSTStart(nyName, (date) => {
              date.setUTCHours(7);
              expect(utcStr(date)).toBe("2020-03-08T07:00:00.000Z");
            });

            // Set after the DST hour
            withDSTStart(nyName, (date) => {
              date.setUTCHours(9);
              expect(utcStr(date)).toBe("2020-03-08T09:00:00.000Z");
            });
          });
        });
      });
    });

    describe("updating to the DST time", () => {
      describe("DST start", () => {
        describe("default methods", () => {
          it("America/Los_Angeles", () => {
            withDSTStart(laName, (date) => {
              date.setHours(1);
              date.setHours(1);
              expect(utcStr(date)).toBe("2020-03-08T09:00:00.000Z");
            });

            // Update to the same DST hour
            withDSTStart(laName, (date) => {
              date.setHours(2);
              date.setHours(2);
              expect(utcStr(date)).toBe("2020-03-08T10:00:00.000Z");
            });

            // Update to the hour DST moves to
            withDSTStart(laName, (date) => {
              date.setHours(2);
              date.setHours(3);
              expect(utcStr(date)).toBe("2020-03-08T10:00:00.000Z");
            });

            // Update to same DST hour
            withDSTStart(laName, (date) => {
              date.setHours(2);
              date.setHours(date.getHours());
              expect(utcStr(date)).toBe("2020-03-08T10:00:00.000Z");
            });

            // Update to same hour DST moves to
            withDSTStart(laName, (date) => {
              date.setHours(3);
              date.setHours(date.getHours());
              expect(utcStr(date)).toBe("2020-03-08T10:00:00.000Z");
            });

            // Update from after the DST hour
            withDSTStart(laName, (date) => {
              date.setHours(5);
              date.setHours(2);
              expect(utcStr(date)).toBe("2020-03-08T10:00:00.000Z");
            });

            // Update to another year with the same DST hour
            withDSTStart(laName, (date) => {
              date.setHours(2);
              date.setFullYear(2015);
              expect(utcStr(date)).toBe("2015-03-08T10:00:00.000Z");
            });
          });

          it("America/New_York", () => {
            withDSTStart(nyName, (date) => {
              date.setHours(1);
              date.setHours(1);
              expect(utcStr(date)).toBe("2020-03-08T06:00:00.000Z");
            });

            // Update to the same DST hour
            withDSTStart(nyName, (date) => {
              date.setHours(2);
              date.setHours(2);
              expect(utcStr(date)).toBe("2020-03-08T07:00:00.000Z");
            });

            // Update to the hour DST moves to
            withDSTStart(nyName, (date) => {
              date.setHours(2);
              date.setHours(3);
              expect(utcStr(date)).toBe("2020-03-08T07:00:00.000Z");
            });

            // Update to same DST hour
            withDSTStart(nyName, (date) => {
              date.setHours(2);
              date.setHours(date.getHours());
              expect(utcStr(date)).toBe("2020-03-08T07:00:00.000Z");
            });

            // Update to same hour DST moves to
            withDSTStart(nyName, (date) => {
              date.setHours(3);
              date.setHours(date.getHours());
              expect(utcStr(date)).toBe("2020-03-08T07:00:00.000Z");
            });

            // Update from after the DST hour
            withDSTStart(nyName, (date) => {
              date.setHours(5);
              date.setHours(2);
              expect(utcStr(date)).toBe("2020-03-08T07:00:00.000Z");
            });

            // Update to another year with the same DST hour
            withDSTStart(nyName, (date) => {
              date.setHours(2);
              date.setFullYear(2015);
              expect(utcStr(date)).toBe("2015-03-08T07:00:00.000Z");
            });
          });
        });

        describe("UTC methods", () => {
          it("America/Los_Angeles", () => {
            withDSTStart(laName, (date) => {
              date.setUTCHours(9);
              date.setUTCHours(9);
              expect(utcStr(date)).toBe("2020-03-08T09:00:00.000Z");
            });

            // Update to the same DST hour
            withDSTStart(laName, (date) => {
              date.setUTCHours(10);
              date.setUTCHours(10);
              expect(utcStr(date)).toBe("2020-03-08T10:00:00.000Z");
            });

            // Update from after the DST hour
            withDSTStart(laName, (date) => {
              date.setUTCHours(12);
              date.setUTCHours(10);
              expect(utcStr(date)).toBe("2020-03-08T10:00:00.000Z");
            });

            // Update to another year with the same DST hour
            withDSTStart(laName, (date) => {
              date.setUTCHours(10);
              date.setUTCFullYear(2015);
              expect(utcStr(date)).toBe("2015-03-08T10:00:00.000Z");
            });
          });

          it("America/New_York", () => {
            withDSTStart(nyName, (date) => {
              date.setUTCHours(6);
              date.setUTCHours(6);
              expect(utcStr(date)).toBe("2020-03-08T06:00:00.000Z");
            });

            // Update to the same DST hour
            withDSTStart(nyName, (date) => {
              date.setUTCHours(7);
              date.setUTCHours(7);
              expect(utcStr(date)).toBe("2020-03-08T07:00:00.000Z");
            });

            // Update from after the DST hour
            withDSTStart(nyName, (date) => {
              date.setUTCHours(10);
              date.setUTCHours(7);
              expect(utcStr(date)).toBe("2020-03-08T07:00:00.000Z");
            });

            // Update to another year with the same DST hour
            withDSTStart(nyName, (date) => {
              date.setUTCHours(7);
              date.setUTCFullYear(2015);
              expect(utcStr(date)).toBe("2015-03-08T07:00:00.000Z");
            });
          });
        });
      });
    });
  });
});

function withDSTStart(tz: string, fn: (date: TZDate) => void) {
  fn(new TZDate(2020, 2, 8, tz));
}

function utcStr(date: TZDate) {
  return new Date(+date).toISOString();
}

const laName = "America/Los_Angeles";
const nyName = "America/New_York";
