import { describe, expect, it } from "vitest";
import { lastDayOfDecade } from "./index.js";

describe("lastDayOfDecade", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of a decade", () => {
    const date = new Date(1985, 9 /* Oct */, 20);
    const result = lastDayOfDecade(date);
    expect(result).toEqual(new Date(1989, 11 /* Dec */, 31));
  });

  it("accepts a timestamp", () => {
    const date = new Date(1975, 0 /* Jan */, 19).getTime();
    const result = lastDayOfDecade(date);
    expect(result).toEqual(new Date(1979, 11 /* Dec */, 31));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2013, 3 /* Apr */, 23);
    lastDayOfDecade(date);
    expect(date).toEqual(new Date(2013, 3 /* Apr */, 23));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfDecade(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("properly works with negative numbers", () => {
    expect(lastDayOfDecade(new Date(2001, 0, 1))).toEqual(
      new Date(2009, 11, 31),
    );
    expect(lastDayOfDecade(new Date(-2009, 0, 1))).toEqual(
      new Date(-2001, 11, 31),
    );
  });
});
