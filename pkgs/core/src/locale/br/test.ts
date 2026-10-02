import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { formatDistance } from "../../formatDistance/index.ts";
import { formatDuration } from "../../formatDuration/index.ts";
import { parse } from "../../parse/index.ts";
import { br } from "./index.ts";

describe("br locale", () => {
  describe("plural forms", () => {
    // see https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#br

    it("mutates the unit after numbers ending in 2, except 12, 72 and 92", () => {
      (
        [
          [1, "1 munut"],
          [2, "2 vunut"],
          [3, "3 munut"],
          [12, "12 munut"],
          [21, "21 munut"],
          [22, "22 vunut"],
          [72, "72 munut"],
          [102, "102 vunut"],
        ] as const
      ).forEach(([minutes, expectedResult]) => {
        const result = formatDuration({ minutes }, { locale: br });
        expect(result).toBe(expectedResult);
      });
    });

    it("keeps bloaz after one and few counts and mutates it otherwise", () => {
      (
        [
          [1, "1 bloaz"],
          [2, "2 vloaz"],
          [3, "3 bloaz"],
          [4, "4 bloaz"],
          [5, "5 vloaz"],
          [9, "9 bloaz"],
          [19, "19 vloaz"],
          [21, "21 bloaz"],
          [29, "29 bloaz"],
        ] as const
      ).forEach(([years, expectedResult]) => {
        const result = formatDuration({ years }, { locale: br });
        expect(result).toBe(expectedResult);
      });
    });

    it("uses the many form for millions", () => {
      const result = formatDuration({ days: 1000000 }, { locale: br });
      expect(result).toBe("1000000 a zeizioù");
    });

    it("adds the future and past suffixes", () => {
      const baseDate = new Date(2000, 0, 1);
      expect(
        formatDistance(new Date(2000, 2, 1), baseDate, {
          locale: br,
          addSuffix: true,
        }),
      ).toBe("a-benn 2 viz");
      expect(
        formatDistance(new Date(1999, 10, 1), baseDate, {
          locale: br,
          addSuffix: true,
        }),
      ).toBe("2 viz zo");
    });
  });

  describe("ordinal numbers", () => {
    it("formats and parses the ordinal suffixes", () => {
      (
        [
          [1, "1añ"],
          [2, "2l"],
          [3, "3e"],
          [4, "4e"],
          [5, "5vet"],
          [21, "21vet"],
        ] as const
      ).forEach(([day, expectedResult]) => {
        const date = new Date(2019, 0, day);
        const result = format(date, "do", { locale: br });
        expect(result).toBe(expectedResult);
        expect(parse(result, "do", date, { locale: br })).toEqual(date);
      });
    });
  });

  describe("parse", () => {
    it("accepts the modifier letter, typographic and ASCII apostrophes", () => {
      ["Cʼhwevrer", "C’hwevrer", "C'hwevrer"].forEach((month) => {
        expect(
          parse(`2 ${month} 2019`, "d MMMM y", new Date(), { locale: br }),
        ).toEqual(new Date(2019, 1, 2));
      });

      ["Mercʼher", "Merc’her", "Merc'her"].forEach((day) => {
        expect(
          parse(day, "EEEE", new Date(2019, 0, 1), { locale: br }),
        ).toEqual(new Date(2019, 0, 2));
      });
    });

    it("parses abbreviated months ending with a dot", () => {
      expect(
        parse("2 Mezh. 2019", "d MMM y", new Date(), { locale: br }),
      ).toEqual(new Date(2019, 5, 2));

      expect(
        parse("2 Kzu. 2019", "d MMM y", new Date(), { locale: br }),
      ).toEqual(new Date(2019, 11, 2));
    });

    it("distinguishes Meurzh (Tuesday) from Mercʼher (Wednesday)", () => {
      const referenceDate = new Date(2019, 0, 1);
      expect(parse("Meu.", "EEE", referenceDate, { locale: br })).toEqual(
        new Date(2019, 0, 1),
      );
      expect(parse("Mer.", "EEE", referenceDate, { locale: br })).toEqual(
        new Date(2019, 0, 2),
      );
    });
  });

  // see https://www.fr.brezhoneg.bzh/178-decisions-et-recommandations-du-conseil-scientifique.htm
  describe("Ofis Publik ar Brezhoneg recommendations", () => {
    it("writes the date as weekday, day 'a viz' month and year", () => {
      const result = format(new Date(2023, 8, 19), "PPPP", {
        locale: br,
      });
      expect(result).toBe("Meurzh 19 a viz Gwengolo 2023");
    });

    it("uses the 12-hour clock with a.m. and g.m.", () => {
      const date = new Date(2019, 1, 2, 19, 5, 30);
      [
        ["p", "7:05 g.m."],
        ["pp", "7:05:30 g.m."],
        ["Pp", "02/02/2019 7:05 g.m."],
        ["PPPp", "2 a viz Cʼhwevrer 2019 da 7:05 g.m."],
      ].forEach(([formatString, expectedResult]) => {
        const result = format(date, formatString, { locale: br });
        expect(result).toBe(expectedResult);
      });

      expect(
        parse("2 a viz Cʼhwevrer 2019 da 7:05:30 g.m.", "PPPpp", date, {
          locale: br,
        }),
      ).toEqual(date);
    });

    it("parses a.m. and g.m. with or without dots", () => {
      const referenceDate = new Date(2019, 0, 1);
      (
        [
          ["10 e am", 10],
          ["10 e a.m.", 10],
          ["7 e gm", 19],
          ["7 e g.m.", 19],
        ] as const
      ).forEach(([time, hours]) => {
        expect(parse(time, "h 'e' a", referenceDate, { locale: br })).toEqual(
          new Date(2019, 0, 1, hours),
        );
      });
    });
  });
});
