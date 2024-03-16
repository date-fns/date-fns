import { describe, expect, it } from "vitest";
import { getWeeksInMonth } from "./index.js";

describe("getWeeksInMonth", () => {
  it("returns the number of calendar weeks the month in the given date spans", () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0));
    expect(result).toBe(4);
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
      weekStartsOn: 1,
    });
    expect(result).toBe(5);
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
      locale: {
        options: { weekStartsOn: 1 },
      },
    });
    expect(result).toBe(5);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const result = getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      },
    });
    expect(result).toBe(5);
  });

  it("accepts timestamps", () => {
    const result = getWeeksInMonth(
      new Date(2017, 3 /* Apr */, 8, 18, 0).getTime(),
    );
    expect(result).toBe(6);
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    getWeeksInMonth(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns NaN if the date is `Invalid Date`", () => {
    const result = getWeeksInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
