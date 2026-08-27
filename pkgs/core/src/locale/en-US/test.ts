import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { enUS } from "./index.ts";

describe("en-US locale", () => {
  describe("day period matching", () => {
    // see https://github.com/date-fns/date-fns/issues/4271

    it("matches the narrow noon to the noon day period", () => {
      expect(enUS.match.dayPeriod("n", { width: "narrow" })).toEqual({
        value: "noon",
        rest: "",
      });
    });

    it("does not truncate night to noon", () => {
      expect(enUS.match.dayPeriod("night", { width: "narrow" })).toEqual({
        value: "night",
        rest: "",
      });
    });

    it("does not truncate afternoon to am", () => {
      expect(enUS.match.dayPeriod("afternoon", { width: "narrow" })).toEqual({
        value: "afternoon",
        rest: "",
      });
    });

    it("parses the narrow noon as midday", () => {
      const referenceDate = new Date(2024, 0 /* Jan */, 1);

      expect(parse("n", "bbbbb", referenceDate)).toEqual(
        new Date(2024, 0 /* Jan */, 1, 12),
      );
    });

    it("keeps parsing the wider noon and midnight forms", () => {
      const referenceDate = new Date(2024, 0 /* Jan */, 1);

      expect(parse("noon", "b", referenceDate)).toEqual(
        new Date(2024, 0 /* Jan */, 1, 12),
      );
      expect(parse("midnight", "b", referenceDate)).toEqual(
        new Date(2024, 0 /* Jan */, 1, 0),
      );
      expect(parse("mi", "bbbbb", referenceDate)).toEqual(
        new Date(2024, 0 /* Jan */, 1, 0),
      );
    });

    it("round-trips the day periods it formats", () => {
      const referenceDate = new Date(2024, 0 /* Jan */, 1);

      (
        [
          [new Date(2024, 0 /* Jan */, 1, 12), "b"],
          [new Date(2024, 0 /* Jan */, 1, 12), "bbbbb"],
          [new Date(2024, 0 /* Jan */, 1, 0), "b"],
          [new Date(2024, 0 /* Jan */, 1, 0), "bbbbb"],
        ] as const
      ).forEach(([date, formatString]) => {
        expect(
          parse(format(date, formatString), formatString, referenceDate),
        ).toEqual(date);
      });
    });
  });
});
