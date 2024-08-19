import { TZDate, tz } from "@date-fns/tz";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { startOfToday } from "./index.js";

describe("startOfToday", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns the current date with the time set to 00:00:00", () => {
    const result = startOfToday();
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 25));
  });

  it("resolves the date type by default", () => {
    const result = startOfToday();
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      clock = sinon.useFakeTimers(new Date("2024-08-18T15:00:00Z").getTime());
      expect(startOfToday({ in: tz("Asia/Singapore") }).toISOString()).toBe(
        "2024-08-18T00:00:00.000+08:00",
      );
      clock = sinon.useFakeTimers(new Date("2024-08-18T16:00:00Z").getTime());
      expect(startOfToday({ in: tz("Asia/Singapore") }).toISOString()).toBe(
        "2024-08-19T00:00:00.000+08:00",
      );
      clock = sinon.useFakeTimers(new Date("2024-08-18T03:00:00Z").getTime());
      expect(startOfToday({ in: tz("America/New_York") }).toISOString()).toBe(
        "2024-08-17T00:00:00.000-04:00",
      );
      clock = sinon.useFakeTimers(new Date("2024-08-18T04:00:00Z").getTime());
      expect(startOfToday({ in: tz("America/New_York") }).toISOString()).toBe(
        "2024-08-18T00:00:00.000-04:00",
      );
    });

    it("resolves the context date type", () => {
      const result = startOfToday({ in: tz("Asia/Tokyo") });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
