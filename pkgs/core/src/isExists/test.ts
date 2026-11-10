import { describe, expect, it } from "vitest";
import { isExists } from "./index.ts";

describe("isValid", () => {
  it("returns true if the given date is valid", () => {
    const result = isExists(2018, 0, 31);
    expect(result).toBe(true);
  });

  it("returns false if the given date is invalid", () => {
    const result = isExists(2018, 1 /* Feb */, 31);
    expect(result).toBe(false);
  });

  it("returns true for Feb 29 in a leap year", () => {
    // 2020 is divisible by 4, so Feb 29 exists
    const result = isExists(2020, 1 /* Feb */, 29);
    expect(result).toBe(true);
  });

  it("returns false for Feb 29 in a non-leap year", () => {
    // 2019 is not a leap year, so Feb 29 rolls over to Mar 1
    const result = isExists(2019, 1 /* Feb */, 29);
    expect(result).toBe(false);
  });

  it("returns false for Feb 29 in a century non-leap year", () => {
    // 1900 is divisible by 100 but not 400, so it is not a leap year
    const result = isExists(1900, 1 /* Feb */, 29);
    expect(result).toBe(false);
  });

  it("returns true for Feb 29 in a 400-year leap cycle", () => {
    // 2000 is divisible by 400, so it is a leap year
    const result = isExists(2000, 1 /* Feb */, 29);
    expect(result).toBe(true);
  });
});
