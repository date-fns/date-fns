import { describe, expect, it } from "vitest";
import { formatISO9075 } from "./index.js";

describe("formatISO9075", () => {
  it("formats ISO-9075 extended date format", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    expect(formatISO9075(date)).toBe("2019-03-03 19:00:52");
  });

  it("accepts a timestamp", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime();
    expect(formatISO9075(date)).toBe("2019-03-03 19:00:52");
  });

  it("formats ISO-8601 basic date format", () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
    expect(formatISO9075(date, { format: "basic" })).toBe("20191004 123013");
  });

  it("formats only date", () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);
    expect(formatISO9075(date, { representation: "date", format: "extended" })).toBe("2019-12-11");
    expect(formatISO9075(date, { representation: "date", format: "basic" })).toBe("20191211");
  });

  it("formats only time", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    expect(formatISO9075(date, { representation: "time", format: "extended" })).toBe("19:00:52");
    expect(formatISO9075(date, { representation: "time", format: "basic" })).toBe("190052");
  });

  it("throws RangeError if the time value is invalid", () => {
    expect(formatISO9075.bind(null, new Date(NaN))).toThrow(RangeError);
  });
});
