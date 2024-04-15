import { describe, expect, it } from "vitest";
import { getDay } from "./index.js";

describe("getDay", () => {
  it("returns the day of the week of the given date", () => {
    const result = getDay(new Date(2012, 1 /* Feb */, 29));
    expect(result).toBe(3);
  });

  it("accepts a timestamp", () => {
    const result = getDay(new Date(2014, 5 /* Jun */, 1).getTime());
    expect(result).toBe(0);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
