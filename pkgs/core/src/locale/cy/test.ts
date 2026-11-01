import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { cy } from "./index.ts";

// See CLDR, cy locale: the wide day names are capitalized, consistently with
// the month names, which are capitalized as well.
// https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-dates-full/main/cy/ca-gregorian.json

describe("cy locale", () => {
  it("capitalizes the wide day names", function () {
    const cases: [Date, string, string][] = [
      [new Date(2019, 1 /* Feb */, 10), "EEEE", "Dydd Sul"],
      [new Date(2019, 1 /* Feb */, 11), "EEEE", "Dydd Llun"],
      [new Date(2019, 1 /* Feb */, 15), "EEEE", "Dydd Gwener"],
    ];
    cases.forEach(([date, formatString, expectedResult]) => {
      const result = format(date, formatString, { locale: cy });
      expect(result).toBe(expectedResult);
    });
  });
});
