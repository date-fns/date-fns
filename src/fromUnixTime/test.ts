import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { fromUnixTime } from "./index.js";

describe("fromUnixTime", () => {
  it("returns the date derived from the given UNIX timestamp", () => {
    const result = fromUnixTime(1330515499);
    expect(result.getTime()).toBe(1330515499000);
  });

  it("returns invalid if the given timestamp is invalid", () => {
    const result = fromUnixTime(NaN);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = fromUnixTime(1330515499);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const result = fromUnixTime(1330515499, {
        in: tz("America/Los_Angeles"),
      });
      expect(result.getTime()).toBe(1330515499000);
      expect(result).toBeInstanceOf(TZDate);
    });

    it("resolves the context date type", () => {
      const result = fromUnixTime(1330515499, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
