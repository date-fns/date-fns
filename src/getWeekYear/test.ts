import { describe, expect, it } from "vitest";
import { getWeekYear } from "./index.js";

describe("getWeekYear", () => {
  it("returns the local week-numbering year of the given date", () => {
    const result = getWeekYear(new Date(2004, 11 /* Dec */, 26));
    expect(result).toBe(2005);
  });

  it("accepts a timestamp", () => {
    const result = getWeekYear(new Date(2000, 11 /* Dec */, 30).getTime());
    expect(result).toBe(2000);
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(7, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const result = getWeekYear(initialDate);
    expect(result).toBe(8);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getWeekYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = new Date(2004, 11 /* Dec */, 26);
    const result = getWeekYear(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    expect(result).toBe(2004);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = new Date(2004, 11 /* Dec */, 26);
    const result = getWeekYear(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    expect(result).toBe(2004);
  });
});
