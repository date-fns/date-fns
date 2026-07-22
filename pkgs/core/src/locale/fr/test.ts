import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { formatRelative } from "../../formatRelative/index.ts";
import { parse } from "../../parse/index.ts";
import { fr } from "./index.ts";

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

  describe("formatDistance", () => {
    it("works with a token without forms", () => {
      expect(fr.formatDistance("halfAMinute", 30)).toBe("30 secondes");
    });

    it("works with the one form", () => {
      expect(fr.formatDistance("xSeconds", 1)).toBe("1 seconde");
    });

    it("works with the other form", () => {
      expect(fr.formatDistance("xSeconds", 30)).toBe("30 secondes");
    });

    it("adds a suffix for the future", () => {
      expect(
        fr.formatDistance("xDays", 2, { addSuffix: true, comparison: 1 }),
      ).toBe("dans 2 jours");
    });

    it("adds a suffix for the past", () => {
      expect(
        fr.formatDistance("xDays", 2, { addSuffix: true, comparison: -1 }),
      ).toBe("il y a 2 jours");
    });
  });

  describe("formatRelative", () => {
    it("works with tomorrow", () => {
      const result = formatRelative(
        new Date(1986, 3 /* Apr */, 5, 10, 30),
        new Date(1986, 3 /* Apr */, 4, 10, 30),
        { locale: fr },
      );
      expect(result).toBe("demain à 10:30");
    });
  });

  describe("ordinalNumber", () => {
    it("returns zero without a suffix", () => {
      const result = format(new Date(2017, 0 /* Jan */, 1, 10, 30, 0), "so", {
        locale: fr,
      });
      expect(result).toBe("0");
    });

    it("uses the feminine form for feminine units", () => {
      const result = format(new Date(2017, 0 /* Jan */, 1, 1, 30), "ho", {
        locale: fr,
      });
      expect(result).toBe("1ère");
    });
  });

  describe("quarter", () => {
    it("formats a quarter", () => {
      const result = format(new Date(2017, 0 /* Jan */, 1), "QQQ", {
        locale: fr,
      });
      expect(result).toBe("1er trim.");
    });

    it("parses a narrow quarter", () => {
      const result = parse("T3", "QQQ", new Date(2017, 0 /* Jan */, 1), {
        locale: fr,
      });
      expect(result).toEqual(new Date(2017, 6 /* Jul */, 1));
    });
  });

  describe("ordinal number parsing", () => {
    it("parses an ordinal day of the month", () => {
      const result = parse("2ème", "do", new Date(2017, 0 /* Jan */, 1), {
        locale: fr,
      });
      expect(result).toEqual(new Date(2017, 0 /* Jan */, 2));
    });
  });
});
