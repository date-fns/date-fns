import { describe, expect, it } from "vitest";
import { parse } from "../../parse/index.ts";
import { fy } from "./index.ts";

describe("fy locale", () => {
  describe.each(["MMMM", "LLLL"])("%s month names", (token) => {
    it.each([
      ["maart", 2],
      ["maaie", 4],
      ["MAART", 2],
      ["MAAIE", 4],
    ])("parses %s", (name, month) => {
      expect(parse(name, token, new Date(2024, 0, 1), { locale: fy })).toEqual(
        new Date(2024, month, 1),
      );
    });
  });

  describe.each(["MMM", "LLL"])("%s month names", (token) => {
    it.each([
      ["mrt.", 2],
      ["mai.", 4],
    ])("parses %s", (name, month) => {
      expect(parse(name, token, new Date(2024, 0, 1), { locale: fy })).toEqual(
        new Date(2024, month, 1),
      );
    });
  });
});
