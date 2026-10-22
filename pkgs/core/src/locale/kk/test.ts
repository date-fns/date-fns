import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { kk } from "./index.ts";

describe("kk locale", () => {
  const referenceDate = new Date(2020, 0 /* Jan */, 1);

  describe("month parsing", () => {
    // мамыр/маусым share the prefix "ма", and
    // қаңтар/қыркүйек/қазан/қараша all share "қа" or "қ".
    it("parses every wide month back to the same month", () => {
      for (let month = 0; month < 12; month++) {
        const text = format(new Date(2024, month, 15), "MMMM", { locale: kk });
        const result = parse(text, "MMMM", referenceDate, { locale: kk });
        expect(result.getMonth(), `wide month "${text}"`).toBe(month);
      }
    });

    it("parses every abbreviated month back to the same month", () => {
      for (let month = 0; month < 12; month++) {
        const text = format(new Date(2024, month, 15), "MMM", { locale: kk });
        const result = parse(text, "MMM", referenceDate, { locale: kk });
        expect(result.getMonth(), `abbreviated month "${text}"`).toBe(month);
      }
    });

    it("distinguishes months that share a first letter", () => {
      const cases: Array<[string, number]> = [
        ["қаңтар", 0],
        ["мамыр", 4],
        ["маусым", 5],
        ["қыркүйек", 8],
        ["қазан", 9],
        ["қараша", 10],
      ];

      cases.forEach(([text, expected]) => {
        const result = parse(text, "MMMM", referenceDate, { locale: kk });
        expect(result.getMonth(), text).toBe(expected);
      });
    });
  });

  describe("day parsing", () => {
    it("parses every wide weekday back to the same weekday", () => {
      // 2024-09-01 is a Sunday.
      for (let offset = 0; offset < 7; offset++) {
        const date = new Date(2024, 8 /* Sep */, 1 + offset);
        const text = format(date, "EEEE", { locale: kk });
        const result = parse(text, "EEEE", referenceDate, { locale: kk });
        expect(result.getDay(), `wide weekday "${text}"`).toBe(date.getDay());
      }
    });

    it("parses Tuesday, whose pattern contained a Latin letter", () => {
      // "сейсенбі" is spelled with Cyrillic "е" (U+0435); the parse pattern
      // used a Latin "e" (U+0065), so it could never match.
      const result = parse("сейсенбі", "EEEE", referenceDate, { locale: kk });
      expect(result.getDay()).toBe(2);
    });
  });
});
