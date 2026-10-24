import { describe, expect, it } from "vitest";
import { milliseconds } from "./index.ts";

describe("milliseconds", () => {
  it("converts years to milliseconds", () => {
    const result = milliseconds({ years: 2 });
    expect(result).toBe(63113904000);
  });

  it("converts months to milliseconds", () => {
    const result = milliseconds({ months: 3 });
    expect(result).toBe(7889238000);
  });

  it("converts weeks to milliseconds", () => {
    const result = milliseconds({ weeks: 2 });
    expect(result).toBe(1209600000);
  });

  it("converts days to milliseconds", () => {
    const result = milliseconds({ days: 5 });
    expect(result).toBe(432000000);
  });

  it("converts hours to milliseconds", () => {
    const result = milliseconds({ hours: 2 });
    expect(result).toBe(7200000);
  });

  it("converts minutes to milliseconds", () => {
    const result = milliseconds({ minutes: 5 });
    expect(result).toBe(300000);
  });

  it("converts seconds to milliseconds", () => {
    const result = milliseconds({ seconds: 10 });
    expect(result).toBe(10000);
  });

  it("sums all the duration values", () => {
    const result = milliseconds({
      years: 2,
      months: 3,
      weeks: 2,
      days: 5,
      hours: 2,
      minutes: 5,
      seconds: 10,
    });
    expect(result).toBe(72652252000);
  });

  it("returns 0 for an empty duration", () => {
    const result = milliseconds({});
    expect(result).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(milliseconds({ seconds: 1.2345 })).toBe(1234);
    expect(milliseconds({ seconds: -1.2345 })).toBe(-1234);
  });
  it("matches the documented examples", () => {
    expect(milliseconds({ years: 1 })).toBe(31556952000);
    expect(milliseconds({ months: 3 })).toBe(7889238000);
  });

  it("does not lose a millisecond to floating point drift", () => {
    // A mean year is 365.2425 days, i.e. exactly 31556952000 ms. Scaling the
    // day count by 24 * 60 * 60 * 1000 produced 31556951999.999996, which
    // Math.trunc then rounded down to 31556951999.
    expect(milliseconds({ years: 2 })).toBe(63113904000);
    expect(milliseconds({ months: 6 })).toBe(15778476000);
    expect(milliseconds({ months: 11 })).toBe(28927206000);
    expect(milliseconds({ years: 1, months: 1 })).toBe(34186698000);
  });
});
