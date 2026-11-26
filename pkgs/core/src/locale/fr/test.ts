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
    describe.each([
      ["B", "après-midi"],
      ["BB", "après-midi"],
      ["BBB", "après-midi"],
      ["BBBB", "de l’après-midi"],
      ["BBBBB", "ap.m."],
      ["BBBBBB", "de l’après-midi"],
    ])("%s afternoon width", (token, label) => {
      it.each([12, 15, 16])(
        "round-trips an afternoon label at %i:30",
        (hour) => {
          const date = new Date(2026, 10, 24, hour, 30);
          const pattern = `yyyy-MM-dd h:mm ${token}`;
          const input = format(date, pattern, { locale });

          expect(input).toContain(label);
          expect(
            parse(input, pattern, new Date(2026, 0, 1), { locale }),
          ).toEqual(date);
        },
      );
    });

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

describe.each([fr, frCA, frCH])(
  "$code afternoon matching compatibility",
  (locale) => {
    it.each([
      ["abbreviated", "après-midi"],
      ["abbreviated", "APRÈS MIDI"],
      ["wide", "après-midi"],
      ["narrow", "ap.m."],
      ["narrow", "AP.M."],
      ["narrow", "apm"],
    ] as const)(
      "matches %s %s without consuming the suffix",
      (width, input) => {
        expect(locale.match.dayPeriod(`${input} suite`, { width })).toEqual({
          value: "afternoon",
          rest: " suite",
        });
      },
    );

    it.each(["B", "BB", "BBB", "BBBB", "BBBBB", "BBBBBB"])(
      "rejects malformed or trailing afternoon text with %s",
      (token) => {
        for (const label of [
          "après",
          "après--midi",
          "après_midi",
          "après-midiX",
          "ap.m.X",
          "de l’après-midiX",
        ]) {
          expect(
            parse(`3:30 ${label}`, `h:mm ${token}`, new Date(2026, 0, 1), {
              locale,
            }).getTime(),
          ).toBeNaN();
        }
      },
    );

    it.each([
      ["abbreviated", "AM", "am"],
      ["abbreviated", "a.m.", "am"],
      ["abbreviated", "a m", "am"],
      ["abbreviated", "PM", "pm"],
      ["abbreviated", "p.m.", "pm"],
      ["abbreviated", "p m", "pm"],
      ["narrow", "a", "am"],
      ["narrow", "p", "pm"],
    ] as const)("preserves %s %s matching", (width, input, value) => {
      expect(locale.match.dayPeriod(`${input} suite`, { width })).toEqual({
        value,
        rest: " suite",
      });
    });

    it.each(["a", "aa", "aaa", "aaaa", "b", "bb", "bbb", "bbbb"])(
      "preserves AM/PM round trips with %s",
      (token) => {
        for (const hour of [3, 15]) {
          const date = new Date(2026, 10, 24, hour, 30);
          const pattern = `yyyy-MM-dd h:mm ${token}`;
          expect(
            parse(
              format(date, pattern, { locale }),
              pattern,
              new Date(2026, 0, 1),
              { locale },
            ),
          ).toEqual(date);
        }
      },
    );
  },
);
