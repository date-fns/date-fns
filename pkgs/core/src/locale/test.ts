import { describe, expect, it } from "vitest";
import { format } from "../format/index.ts";
import { parse } from "../parse/index.ts";
import { ckb } from "./ckb/index.ts";
import { gd } from "./gd/index.ts";
import { gu } from "./gu/index.ts";
import { hy } from "./hy/index.ts";
import { kk } from "./kk/index.ts";
import { th } from "./th/index.ts";
import { vi } from "./vi/index.ts";

// 2026-10-09: Month parsing should round-trip unambiguous formatted names.
describe.each([ckb, gd, gu, kk, th, vi])("$code month parsing", (locale) => {
  describe.each(["MMM", "MMMM"])("%s", (token) => {
    it.each(Array.from({ length: 12 }, (_, month) => month))(
      "round-trips month %i",
      (month) => {
        const date = new Date(2024, month, 15);
        const pattern = `d ${token} yyyy`;
        const input = format(date, pattern, { locale });

        expect(parse(input, pattern, new Date(2024, 0, 1), { locale })).toEqual(
          date,
        );
      },
    );
  });
});

// 2026-10-09: The Armenian full names distinguish January, June and July.
describe("hy month parsing", () => {
  it.each(Array.from({ length: 12 }, (_, month) => month))(
    "round-trips full month %i",
    (month) => {
      const date = new Date(2024, month, 15);
      const pattern = "d MMMM yyyy";
      const input = format(date, pattern, { locale: hy });

      expect(
        parse(input, pattern, new Date(2024, 0, 1), { locale: hy }),
      ).toEqual(date);
    },
  );

  it("parses the July abbreviation separately from January", () => {
    expect(
      parse("15 հուլ 2024", "d MMM yyyy", new Date(2024, 0, 1), { locale: hy }),
    ).toEqual(new Date(2024, 6, 15));
  });
});
