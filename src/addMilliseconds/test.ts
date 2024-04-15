import { describe, expect, it } from "vitest";
import { addMilliseconds } from "./index.js";

describe("addMilliseconds", () => {
  it("adds the given number of milliseconds", () => {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      750,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750));
  });

  it("accepts a timestamp", () => {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(),
      500,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 500));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0);
    addMilliseconds(date, 250);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addMilliseconds(new Date(NaN), 750);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
