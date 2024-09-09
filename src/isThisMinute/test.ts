import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import { isThisMinute } from "./index.js";

describe("isThisMinute", () => {
  fakeDate(new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500));

  it("returns true if the given date and the current date have the same minute", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 30);
    expect(isThisMinute(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different minutes", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 31);
    expect(isThisMinute(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 30, 30).getTime();
    expect(isThisMinute(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(
      isThisMinute(
        new UTCDate(+new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500)),
      ),
    ).toBe(true);
  });
});
