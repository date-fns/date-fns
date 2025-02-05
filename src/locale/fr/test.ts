import { describe, expect, it } from "vitest";
import { format } from "../../format/index.js";
import { fr } from "./index.js";

describe("fr locale", () => {
  describe("format edge case with day ordinal and long month format", () => {
    // see https://github.com/date-fns/date-fns/issues/1391

    it("returns ordinal for the first day of the month", function () {
      [
        ["do", "1er"],
        ["do M", "1er 1"],
        ["do MMM", "1er janv."],
        ["do MMMM", "1er janvier"],
      ].forEach(([formatString, expectedResult]) => {
        const result = format(new Date(2017, 0 /* Jan */, 1), formatString, {
          locale: fr,
        });
        expect(result).toBe(expectedResult);
      });
    });

    it("returns cardinal for days of the month greater than one", function () {
      [
        ["do", "2ème"],
        ["do M", "2ème 1"],
        ["do MMM", "2 janv."],
        ["do MMMM", "2 janvier"],
      ].forEach(([formatString, expectedResult]) => {
        const result = format(new Date(2017, 0 /* Jan */, 2), formatString, {
          locale: fr,
        });
        expect(result).toBe(expectedResult);
      });
    });
  });
});
