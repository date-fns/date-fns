import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { assertType, fakeDate } from "../_lib/test/index.js";
import { endOfToday } from "./index.js";

describe("endOfToday", () => {
  const { fakeNow } = fakeDate(
    new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500),
  );

  it("returns the current date with the time settled to 23:59:59.999", () => {
    const result = endOfToday();
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 25, 23, 59, 59, 999));
  });

  it("resolves the default date type", () => {
    const result = endOfToday();
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      fakeNow(new Date("2014-09-25T16:00:00Z"));
      expect(
        endOfToday({
          in: tz("Asia/Tokyo"),
        }).toISOString(),
      ).toBe("2014-09-26T23:59:59.999+09:00");
      expect(
        endOfToday({
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2014-09-25T23:59:59.999-04:00");
    });

    it("resolves the context date type", () => {
      const result = endOfToday({
        in: tz("Asia/Singapore"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
