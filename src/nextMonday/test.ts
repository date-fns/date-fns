import { describe, expect, it } from "vitest";
import { nextMonday } from "./index.js";

describe("nextMonday", () => {
  it("returns the following Monday given various dates before the same", () => {
    expect(nextMonday(new Date(2020, 2 /* Mar */, 23))).toEqual(new Date(2020, 2 /* Mar */, 30));

    expect(nextMonday(new Date(2020, 2 /* Mar */, 22))).toEqual(new Date(2020, 2 /* Mar */, 23));

    expect(nextMonday(new Date(2020, 3 /* Apr */, 11))).toEqual(new Date(2020, 3 /* Apr */, 13));

    expect(nextMonday(new Date(2020, 2 /* Mar */, 20))).toEqual(new Date(2020, 2 /* Mar */, 23));

    expect(nextMonday(new Date(2020, 2 /* Mar */, 19))).toEqual(new Date(2020, 2 /* Mar */, 23));

    expect(nextMonday(new Date(2020, 2 /* Mar */, 18))).toEqual(new Date(2020, 2 /* Mar */, 23));

    expect(nextMonday(new Date(2020, 2 /* Mar */, 17))).toEqual(new Date(2020, 2 /* Mar */, 23));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextMonday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
