import { describe, expect, it } from "vitest";
import { isMatch } from "./index.js";
import { eo } from "../locale/eo/index.js";

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
});
