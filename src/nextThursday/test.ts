import { describe, expect, it } from "vitest";
import { nextThursday } from "./index.js";

describe("nextThursday", () => {
  it("returns the following Thursday given various dates before the same", () => {
    expect(nextThursday(new Date(2020, 4 /* May */, 23))).toEqual(new Date(2020, 4 /* May */, 28));

    expect(nextThursday(new Date(2020, 4 /* May */, 22))).toEqual(new Date(2020, 4 /* May */, 28));

    expect(nextThursday(new Date(2020, 4 /* May */, 21))).toEqual(new Date(2020, 4 /* May */, 28));

    expect(nextThursday(new Date(2020, 4 /* May */, 20))).toEqual(new Date(2020, 4 /* May */, 21));

    expect(nextThursday(new Date(2020, 4 /* May */, 19))).toEqual(new Date(2020, 4 /* May */, 21));

    expect(nextThursday(new Date(2020, 4 /* May */, 18))).toEqual(new Date(2020, 4 /* May */, 21));

    expect(nextThursday(new Date(2020, 4 /* May */, 17))).toEqual(new Date(2020, 4 /* May */, 21));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextThursday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
