import { describe, expect, it } from "vitest";
import { nextWednesday } from "./index.js";

describe("nextWednesday", () => {
  it("returns the following Wednesday given various dates before the same", () => {
    expect(nextWednesday(new Date(2020, 4 /* May */, 23))).toEqual(new Date(2020, 4 /* May */, 27));

    expect(nextWednesday(new Date(2020, 4 /* May */, 22))).toEqual(new Date(2020, 4 /* May */, 27));

    expect(nextWednesday(new Date(2020, 4 /* May */, 21))).toEqual(new Date(2020, 4 /* May */, 27));

    expect(nextWednesday(new Date(2020, 4 /* May */, 20))).toEqual(new Date(2020, 4 /* May */, 27));

    expect(nextWednesday(new Date(2020, 4 /* May */, 19))).toEqual(new Date(2020, 4 /* May */, 20));

    expect(nextWednesday(new Date(2020, 4 /* May */, 18))).toEqual(new Date(2020, 4 /* May */, 20));

    expect(nextWednesday(new Date(2020, 4 /* May */, 17))).toEqual(new Date(2020, 4 /* May */, 20));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextWednesday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
