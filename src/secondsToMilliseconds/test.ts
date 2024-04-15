import { describe, expect, it } from "vitest";
import { secondsToMilliseconds } from "./index.js";

describe("secondsToMilliseconds", () => {
  it("converts seconds to milliseconds", () => {
    expect(secondsToMilliseconds(1)).toBe(1000);
    expect(secondsToMilliseconds(2)).toBe(2000);
  });

  it("handles border values", () => {
    expect(secondsToMilliseconds(1.5)).toBe(1500);
    expect(secondsToMilliseconds(0)).toBe(0);
  });
});
