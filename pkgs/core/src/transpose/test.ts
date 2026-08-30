import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { transpose } from "./index.ts";
import { fakeDate } from "../_lib/test/index.ts";

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

  describe("with fake timers", () => {
    // Fake timers (Jest, Vitest) replace the global Date with a mock whose
    // prototype.constructor points to the native Date, so transpose must still
    // recognize the constructor instead of calling it without `new`.
    fakeDate(new Date(2009, 4, 5, 20));

    it("transposes to the native Date constructor", () => {
      const date = new Date(2022, 6, 10, 12, 34, 56, 789);
      const result = transpose(date, Date);
      expect(result instanceof Date).toBe(true);
      expect(result.getFullYear()).toBe(2022);
      expect(result.getMonth()).toBe(6);
      expect(result.getDate()).toBe(10);
      expect(result.getHours()).toBe(12);
      expect(result.getMinutes()).toBe(34);
      expect(result.getSeconds()).toBe(56);
      expect(result.getMilliseconds()).toBe(789);
    });
  });
});
