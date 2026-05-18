import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { transpose } from "./index.ts";

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

  it("transpose to UTCDate (issue 4161 reproduction)", async () => {
    const { UTCDate } = await import("../../submodules/utc/src/index.ts");
    const date = new Date(2022, 6, 10, 0, 0, 0); // July 10 2022 00:00 local
    const transposed = transpose(date, UTCDate);
    
    expect(transposed).toBeInstanceOf(UTCDate);
    expect(transposed.getFullYear()).toBe(2022);
    expect(transposed.getMonth()).toBe(6);
    expect(transposed.getDate()).toBe(10);
    expect(transposed.getHours()).toBe(0);
    expect(transposed.toString()).toMatch(/GMT\+0000 \(Coordinated Universal Time\)/);
  });
});
