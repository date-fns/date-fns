import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { previousWednesday } from "./index.js";

describe("previousWednesday", () => {
  it("returns the previous Wednesday given various dates after the same", () => {
    expect(previousWednesday(new Date(2021, 5 /* Jun */, 5))).toEqual(
      new Date(2021, 5 /* Jun */, 2),
    );

    expect(previousWednesday(new Date(2021, 5 /* Jun */, 6))).toEqual(
      new Date(2021, 5 /* Jun */, 2),
    );

    expect(previousWednesday(new Date(2021, 5 /* Jun */, 9))).toEqual(
      new Date(2021, 5 /* Jun */, 2),
    );

    expect(previousWednesday(new Date(2021, 5 /* Jun */, 17))).toEqual(
      new Date(2021, 5 /* Jun */, 16),
    );

    expect(previousWednesday(new Date(2021, 5 /* Jun */, 18))).toEqual(
      new Date(2021, 5 /* Jun */, 16),
    );

    expect(previousWednesday(new Date(2021, 5 /* Jun */, 25))).toEqual(
      new Date(2021, 5 /* Jun */, 23),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = previousWednesday(new Date(NaN));
    expect(result instanceof Date).toBe(true);
    expect(result.toString()).toBe("Invalid Date");
  });

  it("resolves the date type by default", () => {
    const result = previousWednesday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = previousWednesday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        previousWednesday("2024-04-11T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-10T00:00:00.000-07:00");
      expect(
        previousWednesday("2024-04-12T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = previousWednesday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
