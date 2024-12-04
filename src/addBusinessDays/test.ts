import { describe, expect, it } from "vitest";
import { addBusinessDays } from "./index.js";

describe("addBusinessDays", () => {
  it("adds the given number of business days", () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), 10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 15));
  });

  it("handles negative amount", () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 15), -10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns the Monday when 1 day is added on the Friday", () => {
    expect(addBusinessDays(new Date(2020, 0 /* Jan */, 10), 1)).toEqual(// Friday
    // Monday
    new Date(2020, 0 /* Jan */, 13));
  });

  it("returns the Monday when 1 day is added on the Satuday", () => {
    expect(addBusinessDays(new Date(2020, 0 /* Jan */, 11), 1)).toEqual(// Saturday
    // Monday
    new Date(2020, 0 /* Jan */, 13));
  });

  it("returns the Monday when 1 day is added on the Sunday", () => {
    expect(addBusinessDays(new Date(2020, 0 /* Jan */, 12), 1)).toEqual(// Sunday
    // Monday
    new Date(2020, 0 /* Jan */, 13));
  });

  it("can handle a large number of business days", () => {
    const result = addBusinessDays(new Date(2014, 0 /* Jan */, 1), 3387885);
    expect(result).toEqual(new Date(15000, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const result = addBusinessDays(
      new Date(2014, 8 /* Sep */, 1).getTime(),
      10,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 15));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    addBusinessDays(date, 11);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addBusinessDays(new Date(NaN), 10);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("starting from a weekend day should land on a weekday when reducing a divisible by 5", () => {
    const substractResult = addBusinessDays(new Date(2019, 7, 18), -5);
    expect(substractResult).toEqual(new Date(2019, 7, 12));

    const subtractResultWeekend = addBusinessDays(new Date(2019, 7, 17), -5);
    expect(subtractResultWeekend).toEqual(new Date(2019, 7, 12));

    const addResult = addBusinessDays(new Date(2019, 7, 18), 5);
    expect(addResult).toEqual(new Date(2019, 7, 23));

    const addResultWeekend = addBusinessDays(new Date(2019, 7, 17), 5);
    expect(addResultWeekend).toEqual(new Date(2019, 7, 23));
  });
});
