import { describe, expect, it } from "vitest";

import { eachMinuteOfInterval } from "./index.js";

describe("eachMinuteOfInterval", () => {
  it("should return an array of Date objects containing a Date for each minute between the interval", () => {
    const result = eachMinuteOfInterval({
      start: new Date(2020, 10, 14, 13, 0),
      end: new Date(2020, 10, 14, 13, 5),
    });

    expect(result).toEqual([
      new Date(2020, 10, 14, 13, 0),
      new Date(2020, 10, 14, 13, 1),
      new Date(2020, 10, 14, 13, 2),
      new Date(2020, 10, 14, 13, 3),
      new Date(2020, 10, 14, 13, 4),
      new Date(2020, 10, 14, 13, 5),
    ]);
  });

  it("should handle all the minutes that are not in the begining", () => {
    const result = eachMinuteOfInterval({
      start: new Date(2020, 10, 14, 13, 0, 33),
      end: new Date(2020, 10, 14, 13, 2),
    });

    expect(result[0]).toEqual(new Date(2020, 10, 14, 13));
    expect(result[2]).toEqual(new Date(2020, 10, 14, 13, 2));
  });

  it("should accept timestamps", () => {
    const start = new Date(2020, 10, 14, 13, 0).getTime();
    const end = new Date(2020, 10, 14, 13, 2).getTime();

    const result = eachMinuteOfInterval({
      start,
      end,
    });

    expect(result).toEqual([
      new Date(2020, 10, 14, 13, 0),
      new Date(2020, 10, 14, 13, 1),
      new Date(2020, 10, 14, 13, 2),
    ]);
  });

  it("treats intervals shorter than a minute as valid", () => {
    const block = eachMinuteOfInterval.bind(null, {
      start: new Date(2014, 10, 14, 10, 1, 0),
      end: new Date(2014, 10, 14, 10, 1, 1),
    });
    expect(block).not.toThrow();
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachMinuteOfInterval({
      start: new Date(2020, 10, 14, 13, 5),
      end: new Date(2020, 10, 14, 13, 0),
    });

    expect(result).toEqual([
      new Date(2020, 10, 14, 13, 5),
      new Date(2020, 10, 14, 13, 4),
      new Date(2020, 10, 14, 13, 3),
      new Date(2020, 10, 14, 13, 2),
      new Date(2020, 10, 14, 13, 1),
      new Date(2020, 10, 14, 13, 0),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachMinuteOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachMinuteOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachMinuteOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2020, 9, 14, 13, 1),
      end: new Date(2020, 9, 14, 13, 7),
    };

    it("returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step", () => {
      const result = eachMinuteOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        new Date(2020, 9, 14, 13, 1),
        new Date(2020, 9, 14, 13, 4),
        new Date(2020, 9, 14, 13, 7),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachMinuteOfInterval(
        {
          start: new Date(2020, 10, 14, 13, 0),
          end: new Date(2020, 10, 14, 13, 5),
        },
        { step: -1 },
      );

      expect(result).toEqual([
        new Date(2020, 10, 14, 13, 5),
        new Date(2020, 10, 14, 13, 4),
        new Date(2020, 10, 14, 13, 3),
        new Date(2020, 10, 14, 13, 2),
        new Date(2020, 10, 14, 13, 1),
        new Date(2020, 10, 14, 13, 0),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachMinuteOfInterval(
        {
          start: new Date(2020, 10, 14, 13, 5),
          end: new Date(2020, 10, 14, 13, 0),
        },
        { step: -1 },
      );

      expect(result).toEqual([
        new Date(2020, 10, 14, 13, 0),
        new Date(2020, 10, 14, 13, 1),
        new Date(2020, 10, 14, 13, 2),
        new Date(2020, 10, 14, 13, 3),
        new Date(2020, 10, 14, 13, 4),
        new Date(2020, 10, 14, 13, 5),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachMinuteOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachMinuteOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });
});
