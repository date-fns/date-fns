import { describe, expect, it } from "vitest";
import { setSeconds } from "./index.js";

describe("setSeconds", () => {
  it("sets the seconds", () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      45,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500));
  });

  it("accepts a timestamp", () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(),
      45,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 45));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40);
    setSeconds(date, 15);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 40));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setSeconds(new Date(NaN), 45);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
