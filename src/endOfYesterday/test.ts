import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { assertType, fakeDate } from "../_lib/test/index.js";
import { endOfYesterday } from "./index.js";

describe("endOfYesterday", () => {
  const { fakeNow } = fakeDate(
    new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500),
  );

  it("returns yesterday with the time settled to 23:59:59.999", () => {
    const result = endOfYesterday();
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 24, 23, 59, 59, 999));
  });

  it("handles dates before 100 AD", () => {
    const now = new Date(0);
    now.setFullYear(14, 8 /* Sep */, 25);
    now.setHours(14, 30, 45, 500);
    fakeNow(now);

    const expectedResult = new Date(0);
    expectedResult.setFullYear(14, 8 /* Sep */, 24);
    expectedResult.setHours(23, 59, 59, 999);
    const result = endOfYesterday();
    expect(result).toEqual(expectedResult);
  });

  it("resolves the date type by default", () => {
    const result = endOfYesterday();
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      fakeNow(new Date("2024-08-18T15:00:00Z"));
      expect(endOfYesterday({ in: tz("Asia/Singapore") }).toISOString()).toBe(
        "2024-08-17T23:59:59.999+08:00",
      );
      fakeNow(new Date("2024-08-18T16:00:00Z"));
      expect(endOfYesterday({ in: tz("Asia/Singapore") }).toISOString()).toBe(
        "2024-08-18T23:59:59.999+08:00",
      );
      fakeNow(new Date("2024-08-18T03:00:00Z"));
      expect(endOfYesterday({ in: tz("America/New_York") }).toISOString()).toBe(
        "2024-08-16T23:59:59.999-04:00",
      );
      fakeNow(new Date("2024-08-18T04:00:00Z"));
      expect(endOfYesterday({ in: tz("America/New_York") }).toISOString()).toBe(
        "2024-08-17T23:59:59.999-04:00",
      );
    });

    it("resolves the context date type", () => {
      const result = endOfYesterday({ in: tz("Asia/Tokyo") });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
