import { TZDate, tz } from "@date-fns/tz";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { endOfTomorrow } from "./index.js";

describe("endOfTomorrow", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns tomorrow with the time settled to 23:59:59.999", () => {
    const result = endOfTomorrow();
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 26, 23, 59, 59, 999));
  });

  it("handles dates before 100 AD", () => {
    const now = new Date(0);
    now.setFullYear(14, 8 /* Sep */, 25);
    now.setHours(14, 30, 45, 500);
    clock = sinon.useFakeTimers(now.getTime());

    const expectedResult = new Date(0);
    expectedResult.setFullYear(14, 8 /* Sep */, 26);
    expectedResult.setHours(23, 59, 59, 999);
    const result = endOfTomorrow();
    expect(result).toEqual(expectedResult);
  });

  it("resolves the default date type", () => {
    const result = endOfTomorrow();
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfTomorrow({
          in: tz("Asia/Tokyo"),
        }).toISOString(),
      ).toBe("2014-09-26T23:59:59.999+09:00");
      expect(
        endOfTomorrow({
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2014-09-26T23:59:59.999-04:00");
    });

    it("resolves the context date type", () => {
      const result = endOfTomorrow({
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
