import { describe, expect, it } from "vitest";
import { fromUnixTime } from "./index.js";

describe("fromUnixTime", () => {
  it("returns the date derived from the given UNIX timestamp", () => {
    const result = fromUnixTime(1330515499);
    expect(result.getTime()).toBe(1330515499000);
  });

  it("returns invalid if the given timestamp is invalid", () => {
    const result = fromUnixTime(NaN);
    expect(isNaN(result.getTime())).toBe(true);
  });
});
