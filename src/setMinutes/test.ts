import { describe, expect, it } from "vitest";
import { setMinutes } from "./index.js";

describe("setMinutes", () => {
  it("sets the minutes", () => {
    const result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 45, 40));
  });

  it("accepts a timestamp", () => {
    const result = setMinutes(
      new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(),
      5,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 5));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11, 30);
    setMinutes(date, 15);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setMinutes(new Date(NaN), 45);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
