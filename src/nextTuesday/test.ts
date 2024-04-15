import { describe, expect, it } from "vitest";
import { nextTuesday } from "./index.js";

describe("nextTuesday", () => {
  it("returns the following Tuesday given various dates before the same", () => {
    expect(nextTuesday(new Date(2020, 2 /* Mar */, 23))).toEqual(new Date(2020, 2 /* Mar */, 24));

    expect(nextTuesday(new Date(2020, 2 /* Mar */, 22))).toEqual(new Date(2020, 2 /* Mar */, 24));

    expect(nextTuesday(new Date(2020, 3 /* Apr */, 11))).toEqual(new Date(2020, 3 /* Apr */, 14));

    expect(nextTuesday(new Date(2020, 2 /* Mar */, 20))).toEqual(new Date(2020, 2 /* Mar */, 24));

    expect(nextTuesday(new Date(2020, 2 /* Mar */, 19))).toEqual(new Date(2020, 2 /* Mar */, 24));

    expect(nextTuesday(new Date(2020, 2 /* Mar */, 18))).toEqual(new Date(2020, 2 /* Mar */, 24));

    expect(nextTuesday(new Date(2020, 2 /* Mar */, 17))).toEqual(new Date(2020, 2 /* Mar */, 24));
  });
  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextTuesday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
