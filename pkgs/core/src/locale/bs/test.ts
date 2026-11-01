import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { bs } from "./index.ts";

// See CLDR, bs locale: August is "august" in Bosnian; "avgust" is the
// Croatian spelling.
// https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-dates-full/main/bs/ca-gregorian.json

describe("bs locale", () => {
  it("formats August with the Bosnian month name", function () {
    [
      ["MMM", "aug"],
      ["MMMM", "august"],
      ["d MMMM yyyy", "11 august 1987"],
    ].forEach(([formatString, expectedResult]) => {
      const result = format(new Date(1987, 7 /* Aug */, 11), formatString, {
        locale: bs,
      });
      expect(result).toBe(expectedResult);
    });
  });
});
