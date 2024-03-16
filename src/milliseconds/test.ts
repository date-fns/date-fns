import { describe, expect, it } from "vitest";
import { milliseconds } from "./index.js";

describe("milliseconds", () => {
  it("converts years to milliseconds", () => {
    const result = milliseconds({ years: 2 });
    expect(result).toBe(63113903999);
  });

  it("converts months to milliseconds", () => {
    const result = milliseconds({ months: 3 });
    expect(result).toBe(7889237999);
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
});
