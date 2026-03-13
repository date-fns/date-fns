import { describe, expect, it } from "vitest";
import { parse } from "../../parse/index.ts";
import { deAT } from "./index.ts";

describe("issue 4148 reproduction", () => {
  it("should parse 'Jänner' with deAT locale", () => {
    const result = parse("16. Jänner", "dd. MMMM", new Date(2026, 0, 1), {
      locale: deAT,
    });
    
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(16);
    expect(result.getTime()).not.toBeNaN();
  });

  it("should parse 'Januar' with deAT locale", () => {
    const result = parse("16. Januar", "dd. MMMM", new Date(2026, 0, 1), {
      locale: deAT,
    });
    
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(16);
    expect(result.getTime()).not.toBeNaN();
  });
});
