import { tz, TZDate } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { previousFriday } from "./index.js";

describe("previousFriday", () => {
  it("returns the previous Friday given various dates after the same", () => {
    expect(previousFriday(new Date(2021, 5 /* Jun */, 5))).toEqual(
      new Date(2021, 5 /* Jun */, 4),
    );

    expect(previousFriday(new Date(2021, 5 /* Jun */, 6))).toEqual(
      new Date(2021, 5 /* Jun */, 4),
    );

    expect(previousFriday(new Date(2021, 5 /* Jun */, 11))).toEqual(
      new Date(2021, 5 /* Jun */, 4),
    );

    expect(previousFriday(new Date(2021, 5 /* Jun */, 14))).toEqual(
      new Date(2021, 5 /* Jun */, 11),
    );

    expect(previousFriday(new Date(2021, 5 /* Jun */, 15))).toEqual(
      new Date(2021, 5 /* Jun */, 11),
    );

    expect(previousFriday(new Date(2021, 5 /* Jun */, 24))).toEqual(
      new Date(2021, 5 /* Jun */, 18),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousFriday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = previousFriday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = previousFriday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        previousFriday("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-05T15:00:00.000+08:00");
      expect(
        previousFriday("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-05T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = previousFriday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
