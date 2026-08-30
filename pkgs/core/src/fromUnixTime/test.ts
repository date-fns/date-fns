import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.ts";
import { fromUnixTime } from "./index.ts";

describe("fromUnixTime", () => {
  it("returns the date derived from the given UNIX timestamp", () => {
    const result = fromUnixTime(1330515499);
    expect(result.getTime()).toBe(1330515499000);
  });

  it("preserves fractional seconds as milliseconds", () => {
    // The implementation multiplies by 1000, so fractional seconds in the
    // Unix timestamp become milliseconds. The docs previously (incorrectly)
    // stated that decimal values would be discarded — these tests pin the
    // actual behavior. See #4248.
    const result = fromUnixTime(1640888727.872);
    expect(result.getTime()).toBe(1640888727872);
  });

  it("preserves small fractional values as milliseconds", () => {
    expect(fromUnixTime(0.001).getTime()).toBe(1);
  });

  it("preserves negative fractional values as milliseconds", () => {
    expect(fromUnixTime(-0.001).getTime()).toBe(-1);
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
