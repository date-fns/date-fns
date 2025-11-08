import { describe, expect, it } from "vitest";
import { addMonths } from "./index.ts";

describe("addMonths UTC handling", () => {
  it("should handle UTC dates correctly", () => {
    // Test case from issue #4061
    const utcDate = new Date(Date.UTC(2024, 11, 1)); // Dec 1, 2024 UTC
    const result = addMonths(utcDate, 1);
    
    // Should be Jan 1, 2025 UTC, not Dec 31, 2024
    expect(result.getUTCFullYear()).toBe(2025);
    expect(result.getUTCMonth()).toBe(0); // January
    expect(result.getUTCDate()).toBe(1);
  });

  it("should handle local dates correctly (regression test)", () => {
    const localDate = new Date(2024, 11, 1); // Dec 1, 2024 local
    const result = addMonths(localDate, 1);
    
    // Should be Jan 1, 2025 local
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(1);
  });

  it("should handle UTC end-of-month correctly", () => {
    const utcDate = new Date(Date.UTC(2024, 0, 31)); // Jan 31, 2024 UTC
    const result = addMonths(utcDate, 1);
    
    // Should be Feb 29, 2024 UTC (leap year)
    expect(result.getUTCFullYear()).toBe(2024);
    expect(result.getUTCMonth()).toBe(1); // February
    expect(result.getUTCDate()).toBe(29);
  });
});