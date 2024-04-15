import { describe, expect, it } from "vitest";
import { subWeeks } from "./index.js";

describe("subWeeks", () => {
  it("subtracts the given number of weeks", () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 4));
  });

  it("accepts a timestamp", () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 25));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    subWeeks(date, 2);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subWeeks(new Date(NaN), 4);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
