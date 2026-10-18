import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { gd } from "./index.ts";

describe("gd locale", () => {
  const referenceDate = new Date(2020, 0 /* Jan */, 1);

  describe("month parsing", () => {
    // The wide names carry a definite article, e.g. "Am Faoilleach".
    it("parses every wide month back to the same month", () => {
      for (let month = 0; month < 12; month++) {
        const text = format(new Date(2024, month, 15), "MMMM", { locale: gd });
        const result = parse(text, "MMMM", referenceDate, { locale: gd });
        expect(result.getMonth(), `wide month "${text}"`).toBe(month);
      }
    });

    it("parses every abbreviated month back to the same month", () => {
      for (let month = 0; month < 12; month++) {
        const text = format(new Date(2024, month, 15), "MMM", { locale: gd });
        const result = parse(text, "MMM", referenceDate, { locale: gd });
        expect(result.getMonth(), `abbreviated month "${text}"`).toBe(month);
      }
    });

    it("distinguishes the two months starting with the same letter", () => {
      const cases: Array<[string, number]> = [
        ["An Gearran", 1],
        ["An Giblean", 3],
        ["An Dàmhair", 9],
        ["An Dùbhlachd", 11],
        ["Dàmh", 9],
        ["Dùbh", 11],
      ];

      cases.forEach(([text, expected]) => {
        const result = parse(text, "MMMM", referenceDate, { locale: gd });
        expect(result.getMonth(), text).toBe(expected);
      });
    });
  });

  describe("day parsing", () => {
    // Every wide and abbreviated weekday name begins with "Di".
    it("parses every wide weekday back to the same weekday", () => {
      // 2024-09-01 is a Sunday.
      for (let offset = 0; offset < 7; offset++) {
        const date = new Date(2024, 8 /* Sep */, 1 + offset);
        const text = format(date, "EEEE", { locale: gd });
        const result = parse(text, "EEEE", referenceDate, { locale: gd });
        expect(result.getDay(), `wide weekday "${text}"`).toBe(date.getDay());
      }
    });

    it("parses every abbreviated weekday back to the same weekday", () => {
      for (let offset = 0; offset < 7; offset++) {
        const date = new Date(2024, 8 /* Sep */, 1 + offset);
        const text = format(date, "EEE", { locale: gd });
        const result = parse(text, "EEE", referenceDate, { locale: gd });
        expect(result.getDay(), `abbreviated weekday "${text}"`).toBe(
          date.getDay(),
        );
      }
    });

    it("parses every short weekday back to the same weekday", () => {
      for (let offset = 0; offset < 7; offset++) {
        const date = new Date(2024, 8 /* Sep */, 1 + offset);
        const text = format(date, "EEEEEE", { locale: gd });
        const result = parse(text, "EEEEEE", referenceDate, { locale: gd });
        expect(result.getDay(), `short weekday "${text}"`).toBe(date.getDay());
      }
    });
  });
});
