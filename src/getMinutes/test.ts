import { describe, expect, it } from "vitest";
import { getMinutes } from "./index.js";

describe("getMinutes", () => {
  it("returns the minutes of the given date", () => {
    const result = getMinutes(new Date(2012, 1 /* Feb */, 29, 11, 45, 5));
    expect(result).toBe(45);
  });

  it("accepts a timestamp", () => {
    const result = getMinutes(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime());
    expect(result).toBe(30);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getMinutes(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
