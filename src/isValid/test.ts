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

  it("accepts a valid number", () => {
    expect(isValid(1393804800000)).toBe(true);
    expect(isValid(2**53+1)).toBe(false);
  });

  it("accepts a valid string", () => {
    expect(isValid('2014-02-11T11:30:30.000Z')).toBe(true);
    expect(isValid('asd')).toBe(false);
  });

  it("treats null as an invalid date", () => {
    const result = isValid(null);
    expect(result).toBe(false);
  });
});
