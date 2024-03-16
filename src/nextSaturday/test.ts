import { describe, expect, it } from "vitest";
import { nextSaturday } from "./index.js";

describe("nextSaturday", () => {
  it("returns the following Saturday given various dates before the same", () => {
    expect(nextSaturday(new Date(2020, 4 /* May */, 23))).toEqual(new Date(2020, 4 /* May */, 30));

    expect(nextSaturday(new Date(2020, 4 /* May */, 22))).toEqual(new Date(2020, 4 /* May */, 23));

    expect(nextSaturday(new Date(2020, 4 /* May */, 21))).toEqual(new Date(2020, 4 /* May */, 23));

    expect(nextSaturday(new Date(2020, 4 /* May */, 20))).toEqual(new Date(2020, 4 /* May */, 23));

    expect(nextSaturday(new Date(2020, 4 /* May */, 19))).toEqual(new Date(2020, 4 /* May */, 23));

    expect(nextSaturday(new Date(2020, 4 /* May */, 18))).toEqual(new Date(2020, 4 /* May */, 23));

    expect(nextSaturday(new Date(2020, 4 /* May */, 17))).toEqual(new Date(2020, 4 /* May */, 23));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextSaturday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
