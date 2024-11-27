import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { previousSunday } from "./index.js";

describe("previousSunday", () => {
  it("returns the previous Sunday given various dates after the same", () => {
    expect(previousSunday(new Date(2021, 5 /* Jun */, 7))).toEqual(
      new Date(2021, 5 /* Jun */, 6),
    );

    expect(previousSunday(new Date(2021, 5 /* Jun */, 8))).toEqual(
      new Date(2021, 5 /* Jun */, 6),
    );

    expect(previousSunday(new Date(2021, 5 /* Jun */, 13))).toEqual(
      new Date(2021, 5 /* Jun */, 6),
    );

    expect(previousSunday(new Date(2021, 5 /* Jun */, 16))).toEqual(
      new Date(2021, 5 /* Jun */, 13),
    );

    expect(previousSunday(new Date(2021, 5 /* Jun */, 17))).toEqual(
      new Date(2021, 5 /* Jun */, 13),
    );

    expect(previousSunday(new Date(2021, 5 /* Jun */, 24))).toEqual(
      new Date(2021, 5 /* Jun */, 20),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousSunday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = previousSunday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = previousSunday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        previousSunday("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-07T15:00:00.000+08:00");
      expect(
        previousSunday("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-07T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = previousSunday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
