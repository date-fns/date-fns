import { describe, expect, it } from "vitest";
import { endOfDecade } from "./index.js";

describe("endOfDecade", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last millisecond of a decade", () => {
    const date = new Date(2017, 3 /* Apr */, 10, 0, 0, 0);
    const result = endOfDecade(date);
    expect(result).toEqual(new Date(2019, 11 /* Dec */, 31, 23, 59, 59, 999));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2007, 9 /* Oct */, 10, 0, 0, 0).getTime();
    const result = endOfDecade(date);
    expect(result).toEqual(new Date(2009, 11 /* Dec */, 31, 23, 59, 59, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2038, 0 /* Jan */, 19, 3, 14, 8);
    endOfDecade(date);
    expect(date).toEqual(new Date(2038, 0 /* Jan */, 19, 3, 14, 8));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfDecade(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("properly works with negative numbers", () => {
    expect(endOfDecade(new Date(2001, 0, 1))).toEqual(
      new Date(2009, 11, 31, 23, 59, 59, 999),
    );
    expect(endOfDecade(new Date(-2009, 0, 1))).toEqual(
      new Date(-2001, 11, 31, 23, 59, 59, 999),
    );
  });
});
