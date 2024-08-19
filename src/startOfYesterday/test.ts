import { afterEach, beforeEach, describe, expect, it } from "vitest";
import sinon from "sinon";
import { startOfYesterday } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { TZDate, tz } from "@date-fns/tz";

describe("startOfYesterday", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns the start of yesterday", () => {
    const result = startOfYesterday();
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 24));

    clock.restore();
  });

  it("handles dates before 100 AD", () => {
    const now = new Date(0);
    now.setFullYear(14, 8 /* Sep */, 25);
    now.setHours(0, 0, 0, 0);
    clock = sinon.useFakeTimers(now.getTime());

    const expectedResult = new Date(0);
    expectedResult.setFullYear(14, 8 /* Sep */, 24);
    expectedResult.setHours(0, 0, 0, 0);
    const result = startOfYesterday();
    expect(result).toEqual(expectedResult);

    clock.restore();
  });

  it("resolves the date type by default", () => {
    const result = startOfYesterday();
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      clock = sinon.useFakeTimers(new Date("2024-08-18T15:00:00Z").getTime());
      expect(startOfYesterday({ in: tz("Asia/Singapore") }).toISOString()).toBe(
        "2024-08-19T00:00:00.000+08:00",
      );
      clock = sinon.useFakeTimers(new Date("2024-08-18T16:00:00Z").getTime());
      expect(startOfYesterday({ in: tz("Asia/Singapore") }).toISOString()).toBe(
        "2024-08-20T00:00:00.000+08:00",
      );
      clock = sinon.useFakeTimers(new Date("2024-08-18T03:00:00Z").getTime());
      expect(
        startOfYesterday({ in: tz("America/New_York") }).toISOString(),
      ).toBe("2024-08-18T00:00:00.000-04:00");
      clock = sinon.useFakeTimers(new Date("2024-08-18T04:00:00Z").getTime());
      expect(
        startOfYesterday({ in: tz("America/New_York") }).toISOString(),
      ).toBe("2024-08-19T00:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const result = startOfYesterday({ in: tz("Asia/Tokyo") });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
