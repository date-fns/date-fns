import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { clamp } from "./index.js";

describe("clamp", () => {
  it("accepts timestamps", () => {
    const start = new Date(2000, 1, 1).getTime();
    const date = new Date(2000, 1, 2).getTime();
    const end = new Date(2000, 1, 3).getTime();
    const result = clamp(date, { start, end });
    expect(result).toEqual(new Date(2000, 1, 2));
  });

  it("returns the start date when the date is less than start", () => {
    const start = new Date(2001, 1, 1);
    const date = new Date(2000, 1, 1);
    const end = new Date(2020, 1, 1);
    const result = clamp(date, { start, end });
    expect(result).toEqual(new Date(2001, 1, 1));
  });

  it("returns the end date when the date is greater than the end date", () => {
    const start = new Date(2000, 1, 1);
    const date = new Date(2003, 1, 1);
    const end = new Date(2001, 1, 1);
    const result = clamp(date, { start, end });
    expect(result).toEqual(new Date(2001, 1, 1));
  });

  it("returns the date when the date is within the bound of start and end", () => {
    const start = new Date(2000, 1, 1);
    const date = new Date(2001, 1, 1);
    const end = new Date(2003, 1, 1);
    const result = clamp(date, { start, end });
    expect(result).toEqual(new Date(2001, 1, 1));
  });

  it("resolves the date type by default", () => {
    const result = clamp(Date.now(), {
      start: Date.now() - 1000,
      end: Date.now() + 1000,
    });
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = clamp(new UTCDate(), {
      start: Date.now(),
      end: Date.now(),
    });
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  it("resolves the first argument date object type", () => {
    const argResult = clamp(new UTCDate(), {
      start: new TZDate(),
      end: new UTCDate(),
    });
    expect(argResult).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof argResult>>(true);

    const startResult = clamp(Date.now(), {
      start: new TZDate(),
      end: new UTCDate(),
    });
    expect(startResult).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate, typeof startResult>>(true);

    const endResult = clamp(Date.now(), {
      start: Date.now(),
      end: new UTCDate(),
    });
    expect(endResult).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof endResult>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: "2024-04-10T07:00:00Z",
        end: "2024-04-12T07:00:00Z",
      };
      expect(
        clamp("2024-04-11T07:00:00Z", interval, {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-11T00:00:00.000-07:00");
      expect(
        clamp("2024-04-11T07:00:00Z", interval, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-11T15:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date("2014-09-01T00:00:00Z"),
        end: new Date("2014-09-05T00:00:00Z"),
      };
      const result = clamp(interval.start, interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
