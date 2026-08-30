import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { formatDistance } from "../../formatDistance/index.ts";
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
    it("returns the singular form for one unit", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 33),
        new Date(1986, 3 /* Apr */, 4, 10, 32),
        { locale: fr },
      );
      expect(result).toBe("1 minute");
    });

    it("returns the plural form with the count for multiple units", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 32, 3),
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0),
        { locale: fr, includeSeconds: true },
      );
      expect(result).toBe("moins de 5 secondes");
    });

    it("returns the invariable form for half a minute", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 32, 25),
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0),
        { locale: fr, includeSeconds: true },
      );
      expect(result).toBe("30 secondes");
    });

    it("adds the future suffix when `addSuffix` is true", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 19),
        new Date(1986, 3 /* Apr */, 4),
        { locale: fr, addSuffix: true },
      );
      expect(result).toBe("dans 15 jours");
    });

    it("adds the past suffix when `addSuffix` is true", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4),
        new Date(1986, 3 /* Apr */, 19),
        { locale: fr, addSuffix: true },
      );
      expect(result).toBe("il y a 15 jours");
    });
  });

  describe("formatRelative", () => {
    it("formats a date from the last week", () => {
      const result = formatRelative(
        new Date(1986, 3 /* Apr */, 1, 10, 32),
        new Date(1986, 3 /* Apr */, 4, 10, 32),
        { locale: fr },
      );
      expect(result).toBe("mardi dernier à 10:32");
    });
  });

  describe("ordinalNumber", () => {
    it("returns `0` without a suffix for zero", () => {
      const result = format(new Date(2014, 3 /* Apr */, 7, 5, 9, 0), "so", {
        locale: fr,
      });
      expect(result).toBe("0");
    });

    it("uses the feminine suffix for feminine units", () => {
      const result = format(new Date(2014, 3 /* Apr */, 7, 1), "ho", {
        locale: fr,
      });
      expect(result).toBe("1ère");
    });

    it("parses an ordinal day of the month", () => {
      const result = parse("2e", "do", new Date(1986, 3 /* Apr */, 4), {
        locale: fr,
      });
      expect(result).toEqual(new Date(1986, 3 /* Apr */, 2));
    });
  });

  describe("quarter", () => {
    it("formats an abbreviated quarter", () => {
      const result = format(new Date(2014, 3 /* Apr */, 7), "QQQ", {
        locale: fr,
      });
      expect(result).toBe("2ème trim.");
    });

    it("parses a wide quarter", () => {
      const result = parse(
        "1er trimestre",
        "QQQQ",
        new Date(1986, 3 /* Apr */, 4),
        { locale: fr },
      );
      expect(result).toEqual(new Date(1986, 0 /* Jan */, 1));
    });
  });
});
