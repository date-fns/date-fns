import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { gu } from "./index.ts";

describe("gu locale era parsing", () => {
  for (const width of ["narrow", "abbreviated", "wide"] as const) {
    it.each([0, 1] as const)(`matches era %s in ${width} form`, (era) => {
      const text = gu.localize.era(era, { width });

      expect(gu.match.era(text, { width })).toEqual({ value: era, rest: "" });
    });
  }

  for (const token of ["G", "GG", "GGG", "GGGG", "GGGGG"]) {
    it.each([-43, 2024])(`round-trips year %s with ${token}`, (year) => {
      const date = new Date(2024, 0, 1);
      date.setFullYear(year);
      const pattern = `yyyy ${token}`;
      const text = format(date, pattern, { locale: gu });

      expect(
        parse(text, pattern, new Date(2024, 0, 1), { locale: gu }),
      ).toEqual(date);
    });
  }

  it.each(["abbreviated", "wide"] as const)(
    "matches the complete BC label in %s form without consuming following text",
    (width) => {
      const text = gu.localize.era(0, { width });

      expect(gu.match.era(`${text} remaining`, { width })).toEqual({
        value: 0,
        rest: " remaining",
      });
    },
  );

  it("rejects unknown era labels", () => {
    expect(gu.match.era("unknown", { width: "wide" })).toBeNull();
  });
});
