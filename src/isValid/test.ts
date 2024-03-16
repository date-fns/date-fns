import { describe, expect, it } from "vitest";
import { isValid } from "./index.js";

describe("isValid", () => {
  it("returns true if the given date is valid", () => {
    const result = isValid(new Date());
    expect(result).toBe(true);
  });

  it("returns false if the given date is invalid", () => {
    const result = isValid(new Date(""));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    expect(isValid(new Date(2014, 1 /* Feb */, 11).getTime())).toBe(true);
    expect(isValid(NaN)).toBe(false);
  });

  it("treats null as an invalid date", () => {
    const result = isValid(null);
    expect(result).toBe(false);
  });
});
