import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { previousMonday } from "./index.js";

describe("previousMonday", () => {
  it("returns the previous Monday given various dates after the same", () => {
    expect(previousMonday(new Date(2021, 5 /* Jun */, 5))).toEqual(
      new Date(2021, 4 /* May */, 31),
    );

    expect(previousMonday(new Date(2021, 5 /* Jun */, 6))).toEqual(
      new Date(2021, 4 /* May */, 31),
    );

    expect(previousMonday(new Date(2021, 5 /* Jun */, 7))).toEqual(
      new Date(2021, 4 /* May */, 31),
    );

    expect(previousMonday(new Date(2021, 5 /* Jun */, 14))).toEqual(
      new Date(2021, 5 /* Jun */, 7),
    );

    expect(previousMonday(new Date(2021, 5 /* Jun */, 15))).toEqual(
      new Date(2021, 5 /* Jun */, 14),
    );

    expect(previousMonday(new Date(2021, 5 /* Jun */, 16))).toEqual(
      new Date(2021, 5 /* Jun */, 14),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousMonday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = previousMonday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = previousMonday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        previousMonday("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-08T15:00:00.000+08:00");
      expect(
        previousMonday("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-08T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = previousMonday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
