import { describe, expect, it } from "vitest";
import { setMilliseconds } from "./index.js";

describe("setMilliseconds", () => {
  it("sets the milliseconds", () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      300,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300));
  });

  it("accepts a timestamp", () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(),
      755,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500);
    setMilliseconds(date, 137);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setMilliseconds(new Date(NaN), 300);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
