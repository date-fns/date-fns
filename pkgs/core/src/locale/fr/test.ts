import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { frCA } from "../fr-CA/index.ts";
import { frCH } from "../fr-CH/index.ts";
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
});

describe.each([fr, frCA, frCH])(
  "$code afternoon day period parsing",
  (locale) => {
    it.each([12, 15, 16])(
      "round-trips a wide afternoon label at %i:30",
      (hour) => {
        const date = new Date(2026, 10, 24, hour, 30);
        const pattern = "yyyy-MM-dd h:mm BBBB";
        const input = format(date, pattern, { locale });

        expect(input).toContain("de l’après-midi");
        expect(parse(input, pattern, new Date(2026, 0, 1), { locale })).toEqual(
          date,
        );
      },
    );

    it.each([
      "de l'après-midi",
      "de l’après-midi",
      "de l'après midi",
      "de l’après midi",
    ])("parses %s and preserves the remaining input", (dayPeriod) => {
      expect(
        locale.match.dayPeriod(`${dayPeriod} suite`, { width: "wide" }),
      ).toEqual({
        value: "afternoon",
        rest: " suite",
      });
    });

    it("parses a capitalized afternoon label", () => {
      expect(
        parse(
          "2026-11-24 3:30 DE L’APRÈS-MIDI",
          "yyyy-MM-dd h:mm BBBB",
          new Date(2026, 0, 1),
          { locale },
        ),
      ).toEqual(new Date(2026, 10, 24, 15, 30));
    });

    it.each([0, 9, 20])(
      "keeps other wide day periods at %i:30 unchanged",
      (hour) => {
        const date = new Date(2026, 10, 24, hour, 30);
        const pattern = "yyyy-MM-dd h:mm BBBB";
        expect(
          parse(
            format(date, pattern, { locale }),
            pattern,
            new Date(2026, 0, 1),
            { locale },
          ),
        ).toEqual(date);
      },
    );
  },
);
