import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { es } from "./index.ts";

describe("es locale", () => {
  it("parses the Saturday names it formats", () => {
    const referenceDate = new Date(2024, 0 /* Jan */, 3);
    const saturday = new Date(2024, 0 /* Jan */, 6);
    [
      ["EEE", "sáb"],
      ["EEEE", "sábado"],
      ["EEEEEE", "sá"],
      ["cccc", "sábado"],
    ].forEach(([formatString, text]) => {
      expect(format(saturday, formatString, { locale: es })).toBe(text);
      expect(parse(text, formatString, referenceDate, { locale: es })).toEqual(
        saturday,
      );
    });
  });

  it("parses Saturday with or without the accent and in upper case", () => {
    const referenceDate = new Date(2024, 0 /* Jan */, 3);
    ["sábado", "sabado", "SÁBADO"].forEach((text) => {
      expect(parse(text, "EEEE", referenceDate, { locale: es })).toEqual(
        new Date(2024, 0 /* Jan */, 6),
      );
    });
  });

  it("parses Saturday followed by a time", () => {
    const result = parse(
      "sábado 14:30",
      "EEEE HH:mm",
      new Date(2024, 0 /* Jan */, 3),
      { locale: es },
    );
    expect(result).toEqual(new Date(2024, 0 /* Jan */, 6, 14, 30));
  });
});
