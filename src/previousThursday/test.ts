import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { previousThursday } from "./index.js";

describe("previousThursday", () => {
  it("returns the previous Thursday given various dates after the same", () => {
    expect(previousThursday(new Date(2021, 5 /* Jun */, 5))).toEqual(
      new Date(2021, 5 /* Jun */, 3),
    );

    expect(previousThursday(new Date(2021, 5 /* Jun */, 6))).toEqual(
      new Date(2021, 5 /* Jun */, 3),
    );

    expect(previousThursday(new Date(2021, 5 /* Jun */, 10))).toEqual(
      new Date(2021, 5 /* Jun */, 3),
    );

    expect(previousThursday(new Date(2021, 5 /* Jun */, 14))).toEqual(
      new Date(2021, 5 /* Jun */, 10),
    );

    expect(previousThursday(new Date(2021, 5 /* Jun */, 15))).toEqual(
      new Date(2021, 5 /* Jun */, 10),
    );

    expect(previousThursday(new Date(2021, 5 /* Jun */, 24))).toEqual(
      new Date(2021, 5 /* Jun */, 17),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousThursday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = previousThursday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = previousThursday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        previousThursday("2024-04-12T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-11T15:00:00.000+08:00");
      expect(
        previousThursday("2024-04-12T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-11T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = previousThursday("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
