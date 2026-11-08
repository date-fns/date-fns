import { describe, expect, it } from "vitest";
import { isMatch } from "./index.ts";
import { eo } from "../locale/eo/index.ts";

describe("isMatch", () => {
  it("accepts a dd-MM-yyyy format against 22-02-1998", () => {
    expect(isMatch("22-02-1998", "dd-MM-yyyy")).toBe(true);
  });

  it("reject a yyyy-dd-MM format against 22-02-1998", () => {
    expect(!isMatch("22-02-1998", "yyyy-dd-MM")).toBe(true);
  });

  it("accepts a date & format with locale", () => {
    expect(
      isMatch("28-a de februaro", "do 'de' MMMM", {
        locale: eo,
      }),
    ).toBe(true);
  });

  it("rejects a short year against a yyyy token", () => {
    expect(isMatch("2024-02-02", "yyyy-MM-dd")).toBe(true);
    expect(isMatch("202-02-02", "yyyy-MM-dd")).toBe(false);
    expect(isMatch("20-02-02", "yyyy-MM-dd")).toBe(false);
    expect(isMatch("2-02-02", "yyyy-MM-dd")).toBe(false);
  });

  it("rejects a short month or day against MM and dd tokens", () => {
    expect(isMatch("12", "MM")).toBe(true);
    expect(isMatch("2", "MM")).toBe(false);
    expect(isMatch("04", "dd")).toBe(true);
    expect(isMatch("4", "dd")).toBe(false);
    expect(isMatch("2024-2-02", "yyyy-MM-dd")).toBe(false);
    expect(isMatch("2024-02-2", "yyyy-MM-dd")).toBe(false);
  });

  it("rejects a short value against other fixed-width numeric tokens", () => {
    expect(isMatch("44", "yy")).toBe(true);
    expect(isMatch("4", "yy")).toBe(false);
    expect(isMatch("044", "yyy")).toBe(true);
    expect(isMatch("44", "yyy")).toBe(false);
    expect(isMatch("09", "HH")).toBe(true);
    expect(isMatch("9", "HH")).toBe(false);
    expect(isMatch("05", "mm")).toBe(true);
    expect(isMatch("5", "mm")).toBe(false);
    expect(isMatch("00", "SS")).toBe(true);
    expect(isMatch("0", "SS")).toBe(false);
  });

  it("still accepts variable-width values for single-letter tokens", () => {
    expect(isMatch("44", "y")).toBe(true);
    expect(isMatch("1", "y")).toBe(true);
    expect(isMatch("1900", "y")).toBe(true);
    expect(isMatch("2", "M")).toBe(true);
    expect(isMatch("4", "d")).toBe(true);
    expect(isMatch("9", "H")).toBe(true);
  });
});
