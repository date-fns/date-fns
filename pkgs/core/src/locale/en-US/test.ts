import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { enUS } from "./index.ts";

describe("en-US locale", () => {
  describe("day period matching", () => {
    it("matches the day periods it formats", () => {
      const dayPeriods = [
        [new Date(2024, 0 /* Jan */, 1, 4), "morning"],
        [new Date(2024, 0 /* Jan */, 1, 13), "afternoon"],
        [new Date(2024, 0 /* Jan */, 1, 18), "evening"],
        [new Date(2024, 0 /* Jan */, 1, 2), "night"],
      ] as const;

      (["BBBB", "BBBBB"] as const).forEach((formatString) => {
        dayPeriods.forEach(([date, dayPeriod]) => {
          const formatted = format(date, formatString);
          const width = formatString.length === 5 ? "narrow" : "any";

          expect(enUS.match.dayPeriod(formatted, { width })).toEqual({
            value: dayPeriod,
            rest: "",
          });
        });
      });
    });

    it("does not read `at night` as `am`", () => {
      // see https://github.com/date-fns/date-fns/issues/4271
      expect(enUS.match.dayPeriod("at night", { width: "any" })).toEqual({
        value: "night",
        rest: "",
      });
      expect(enUS.match.dayPeriod("at night", { width: "narrow" })).toEqual({
        value: "night",
        rest: "",
      });
    });

    it("keeps matching the am and pm forms", () => {
      expect(enUS.match.dayPeriod("a", { width: "narrow" })?.value).toBe("am");
      expect(enUS.match.dayPeriod("p", { width: "narrow" })?.value).toBe("pm");
      expect(enUS.match.dayPeriod("am", { width: "any" })?.value).toBe("am");
      expect(enUS.match.dayPeriod("a.m.", { width: "any" })?.value).toBe("am");
      expect(enUS.match.dayPeriod("pm", { width: "any" })?.value).toBe("pm");
      expect(enUS.match.dayPeriod("mi", { width: "narrow" })?.value).toBe(
        "midnight",
      );
    });
  });
});
