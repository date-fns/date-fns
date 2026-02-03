import { describe, it, expect } from "vitest";
import { parseISO } from "../index.js";

describe("VENUS_NEW – strict timezone validation for parseISO", () => {
  it("returns Invalid Date for timezone with invalid hour (+25:00)", () => {
    const result = parseISO("2020-01-01T00:00:00+25:00");
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("returns Invalid Date for timezone with invalid hour (+99:00)", () => {
    const result = parseISO("2020-01-01T00:00:00+99:00");
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("returns Invalid Date for timezone with invalid minutes (+24:01)", () => {
    const result = parseISO("2020-01-01T00:00:00+24:01");
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("returns Invalid Date for malformed timezone (+2)", () => {
    const result = parseISO("2020-01-01T00:00:00+2");
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("returns Invalid Date for malformed timezone (+2360)", () => {
    const result = parseISO("2020-01-01T00:00:00+2360");
    expect(isNaN(result.getTime())).toBe(true);
  });
});
