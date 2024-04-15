import { describe, expect, it } from "vitest";
import { subHours } from "./index.js";

describe("subHours", () => {
  it("subtracts the given numbers of hours", () => {
    const result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), 2);
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 23, 0));
  });

  it("accepts a timestamp", () => {
    const result = subHours(
      new Date(2014, 6 /* Jul */, 12, 1, 0).getTime(),
      26,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 23, 0));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 23, 0);
    subHours(date, 10);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 10, 23, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subHours(new Date(NaN), 2);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
