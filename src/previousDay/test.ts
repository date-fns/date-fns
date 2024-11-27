import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { previousDay } from "./index.js";

describe("previousDay", () => {
  it("returns the previous Monday given various dates after the same", () => {
    expect(previousDay(new Date(2021, 5 /* Jun */, 18), 1)).toEqual(
      new Date(2021, 5 /* Jun */, 14),
    );
    expect(previousDay(new Date(2021, 5 /* Jun */, 17), 1)).toEqual(
      new Date(2021, 5 /* Jun */, 14),
    );
    expect(previousDay(new Date(2021, 5 /* Jun */, 14), 1)).toEqual(
      new Date(2021, 5 /* Jun */, 7),
    );
    expect(previousDay(new Date(2021, 5 /* Jun */, 9), 1)).toEqual(
      new Date(2021, 5 /* Jun */, 7),
    );
    expect(previousDay(new Date(2021, 5 /* Jun */, 8), 1)).toEqual(
      new Date(2021, 5 /* Jun */, 7),
    );
    expect(previousDay(new Date(2021, 5 /* Jun */, 7), 1)).toEqual(
      new Date(2021, 4 /* May */, 31),
    );
  });

  it("returns the previous Tuesday given the Saturday after it", () => {
    expect(previousDay(new Date(2021, 5 /* Jun */, 26), 2)).toEqual(
      new Date(2021, 5 /* Jun */, 22),
    );
  });

  it("returns the previous Wednesday given the Saturday after it", () => {
    expect(previousDay(new Date(2021, 5 /* Jun */, 26), 3)).toEqual(
      new Date(2021, 5 /* Jun */, 23),
    );
  });

  it("returns the previous Thursday given the Saturday after it", () => {
    expect(previousDay(new Date(2021, 5 /* Jun */, 26), 4)).toEqual(
      new Date(2021, 5 /* Jun */, 24),
    );
  });

  it("returns the previous Friday given the Saturday after it", () => {
    expect(previousDay(new Date(2021, 5 /* Jun */, 26), 5)).toEqual(
      new Date(2021, 5 /* Jun */, 25),
    );
  });

  it("returns the previous Saturday given the Saturday after it", () => {
    expect(previousDay(new Date(2021, 5 /* Jun */, 26), 6)).toEqual(
      new Date(2021, 5 /* Jun */, 19),
    );
  });

  it("returns the previous Sunday given the day is Sunday", () => {
    expect(previousDay(new Date(2021, 5 /* Jun */, 27), 0)).toEqual(
      new Date(2021, 5 /* Jun */, 20),
    );
  });

  it("resolves the date type by default", () => {
    const result = previousDay(Date.now(), 1);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = previousDay(new UTCDate(), 1);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        previousDay("2024-04-10T07:00:00Z", 1, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-08T15:00:00.000+08:00");
      expect(
        previousDay("2024-04-10T07:00:00Z", 1, {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-08T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = previousDay("2014-09-01T00:00:00Z", 1, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
