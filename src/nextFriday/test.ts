import { describe, expect, it } from "vitest";
import { nextFriday } from "./index.js";

describe("nextFriday", () => {
  it("returns the following Friday given various dates before the same", () => {
    expect(nextFriday(new Date(2020, 4 /* May */, 23))).toEqual(new Date(2020, 4 /* May */, 29));

    expect(nextFriday(new Date(2020, 4 /* May */, 22))).toEqual(new Date(2020, 4 /* May */, 29));

    expect(nextFriday(new Date(2020, 4 /* May */, 21))).toEqual(new Date(2020, 4 /* May */, 22));

    expect(nextFriday(new Date(2020, 4 /* May */, 20))).toEqual(new Date(2020, 4 /* May */, 22));

    expect(nextFriday(new Date(2020, 4 /* May */, 19))).toEqual(new Date(2020, 4 /* May */, 22));

    expect(nextFriday(new Date(2020, 4 /* May */, 18))).toEqual(new Date(2020, 4 /* May */, 22));

    expect(nextFriday(new Date(2020, 4 /* May */, 17))).toEqual(new Date(2020, 4 /* May */, 22));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextFriday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
