import { describe, expect, it } from "vitest";
import { eachDayOfInterval } from "./index.js";

describe("eachDayOfInterval", () => {
  it("returns an array with starts of days from the day of the start date to the day of the end date", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 9 /* Oct */, 12),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6).getTime(),
      end: new Date(2014, 9 /* Oct */, 12).getTime(),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 6, 35),
      end: new Date(2014, 9 /* Oct */, 12, 22, 15),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("returns one day if the both arguments are on the same day", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 15),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 6)]);
  });

  it("returns one day if the both arguments are the same", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 6)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 6),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 9 /* Oct */, 13),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachDayOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 6),
        new Date(2014, 9 /* Oct */, 9),
        new Date(2014, 9 /* Oct */, 12),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachDayOfInterval(
        {
          start: new Date(2014, 9 /* Oct */, 10),
          end: new Date(2014, 9 /* Oct */, 12),
        },
        { step: -1 },
      );
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 12),
        new Date(2014, 9 /* Oct */, 11),
        new Date(2014, 9 /* Oct */, 10),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachDayOfInterval(
        {
          start: new Date(2014, 9 /* Oct */, 12),
          end: new Date(2014, 9 /* Oct */, 10),
        },
        { step: -1 },
      );
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 10),
        new Date(2014, 9 /* Oct */, 11),
        new Date(2014, 9 /* Oct */, 12),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachDayOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachDayOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });
});
