import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { transpose } from "./index.js";

describe("transpose", () => {
  it("allows to use context function", () => {
    const date = new Date(2022, 6, 10, 12, 34, 56, 789);
    const result = transpose(date, tz("Asia/Singapore"));
    expect(result instanceof TZDate).toBe(true);
    expect(result.getFullYear()).toBe(2022);
    expect(result.getMonth()).toBe(6);
    expect(result.getDate()).toBe(10);
    expect(result.getHours()).toBe(12);
    expect(result.getMinutes()).toBe(34);
    expect(result.getSeconds()).toBe(56);
    expect(result.getMilliseconds()).toBe(789);
  });
});
