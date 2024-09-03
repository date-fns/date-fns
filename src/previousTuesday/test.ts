import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { previousTuesday } from "./index.js";

describe("previousTuesday", () => {
  it("returns the previous Tuesday given various dates after the same", () => {
    expect(previousTuesday(new Date(2021, 5 /* Jun */, 5))).toEqual(
      new Date(2021, 5 /* Jun */, 1),
    );

    expect(previousTuesday(new Date(2021, 5 /* Jun */, 6))).toEqual(
      new Date(2021, 5 /* Jun */, 1),
    );

    expect(previousTuesday(new Date(2021, 5 /* Jun */, 8))).toEqual(
      new Date(2021, 5 /* Jun */, 1),
    );

    expect(previousTuesday(new Date(2021, 5 /* Jun */, 15))).toEqual(
      new Date(2021, 5 /* Jun */, 8),
    );

    expect(previousTuesday(new Date(2021, 5 /* Jun */, 17))).toEqual(
      new Date(2021, 5 /* Jun */, 15),
    );

    expect(previousTuesday(new Date(2021, 5 /* Jun */, 18))).toEqual(
      new Date(2021, 5 /* Jun */, 15),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousTuesday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = previousTuesday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = previousTuesday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        previousTuesday("2024-08-21T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-08-20T00:00:00.000-07:00");
      expect(
        previousTuesday("2024-08-21T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-08-20T15:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = previousTuesday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
