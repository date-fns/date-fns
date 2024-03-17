import { describe, expect, it } from "vitest";
import { lastDayOfWeek } from "./index.js";

describe("lastDayOfWeek", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of a week", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfWeek(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 6));
  });

  it("allows to specify which day is the first day of the week", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfWeek(date, { weekStartsOn: 1 });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7));
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfWeek(date, {
      locale: {
        options: { weekStartsOn: 1 },
      },
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfWeek(date, {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      },
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = lastDayOfWeek(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 6));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    lastDayOfWeek(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  describe("edge cases", () => {
    describe("when the given day is before the start of a week", () => {
      it("it returns the last day of a week", () => {
        const date = new Date(2014, 9 /* Oct */, 6);
        const result = lastDayOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(new Date(2014, 9 /* Oct */, 7));
      });
    });

    describe("when the given day is the start of a week", () => {
      it("it returns the last day of a week", () => {
        const date = new Date(2014, 9 /* Oct */, 8);
        const result = lastDayOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(new Date(2014, 9 /* Oct */, 14));
      });
    });

    describe("when the given day is after the start of a week", () => {
      it("it returns the last day of a week", () => {
        const date = new Date(2014, 9 /* Oct */, 10);
        const result = lastDayOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(new Date(2014, 9 /* Oct */, 14));
      });
    });

    it("handles the week at the end of a year", () => {
      const date = new Date(2014, 11 /* Dec */, 29);
      const result = lastDayOfWeek(date, { weekStartsOn: 5 });
      expect(result).toEqual(new Date(2015, 0 /* Jan */, 1));
    });
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfWeek(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
