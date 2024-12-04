import { describe, expect, it } from "vitest";
import { getISODay } from "./index.js";

describe("getISODay", () => {
  it("returns the day of the ISO week of the given date", () => {
    const result = getISODay(new Date(2012, 1 /* Feb */, 29));
    expect(result).toBe(3);
  });

  it("returns 7 if the given day is Sunday", () => {
    const result = getISODay(new Date(2014, 5 /* Jun */, 1));
    expect(result).toBe(7);
  });

  it("accepts a timestamp", () => {
    const result = getISODay(new Date(2014, 5 /* Jun */, 1).getTime());
    expect(result).toBe(7);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getISODay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
