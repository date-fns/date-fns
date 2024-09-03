import { tz, TZDate } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { previousSaturday } from "./index.js";

describe("previousSaturday", () => {
  it("returns the previous Saturday given various dates after the same", () => {
    expect(previousSaturday(new Date(2021, 5 /* Jun */, 7))).toEqual(
      new Date(2021, 5 /* Jun */, 5),
    );

    expect(previousSaturday(new Date(2021, 5 /* Jun */, 8))).toEqual(
      new Date(2021, 5 /* Jun */, 5),
    );

    expect(previousSaturday(new Date(2021, 5 /* Jun */, 12))).toEqual(
      new Date(2021, 5 /* Jun */, 5),
    );

    expect(previousSaturday(new Date(2021, 5 /* Jun */, 16))).toEqual(
      new Date(2021, 5 /* Jun */, 12),
    );

    expect(previousSaturday(new Date(2021, 5 /* Jun */, 17))).toEqual(
      new Date(2021, 5 /* Jun */, 12),
    );

    expect(previousSaturday(new Date(2021, 5 /* Jun */, 24))).toEqual(
      new Date(2021, 5 /* Jun */, 19),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = previousSaturday(new Date(NaN));
    expect(result instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = previousSaturday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = previousSaturday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        previousSaturday("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-06T15:00:00.000+08:00");
      expect(
        previousSaturday("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-06T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = previousSaturday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
