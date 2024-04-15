import { describe, expect, it } from "vitest";
import { subMilliseconds } from "./index.js";

describe("subMilliseconds", () => {
  it("subtracts the given number of milliseconds", () => {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      750,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250));
  });

  it("accepts a timestamp", () => {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(),
      500,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0);
    subMilliseconds(date, 250);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subMilliseconds(new Date(NaN), 750);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
