import { describe, expect, it } from "vitest";
import { getYear } from "./index.js";

describe("getYear", () => {
  it("returns the year of the given date", () => {
    const result = getYear(new Date(2014, 6 /* Jul */, 2));
    expect(result).toBe(2014);
  });

  it("accepts a timestamp", () => {
    const result = getYear(new Date(2000, 3 /* Apr */, 2).getTime());
    expect(result).toBe(2000);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
