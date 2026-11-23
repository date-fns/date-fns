import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { bn } from "./index.ts";

describe("bn locale", () => {
  it.each(Array.from({ length: 31 }, (_, index) => index + 1))(
    "round-trips the ordinal date %i",
    (day) => {
      const date = new Date(2024, 0, day);
      const formatted = format(date, "do", { locale: bn });
      expect(parse(formatted, "do", date, { locale: bn })).toEqual(date);
    },
  );

  it.each(["Mo", "Qo", "yo"])("round-trips the ordinal token %s", (token) => {
    const date = new Date(2024, 0, 1);
    const formatted = format(date, token, { locale: bn });
    expect(parse(formatted, token, date, { locale: bn })).toEqual(date);
  });

  it.each([
    ["0তম rest", 0],
    ["1ম rest", 1],
    ["2য় rest", 2],
    ["4র্থ rest", 4],
    ["6ষ্ঠ rest", 6],
    ["21শে rest", 21],
    ["10 rest", 10],
  ] as const)("keeps accepting ASCII digits in %s", (text, value) => {
    expect(bn.match.ordinalNumber(text)).toEqual({ value, rest: " rest" });
  });

  it("leaves the text after a localized ordinal unconsumed", () => {
    expect(bn.match.ordinalNumber("২১শে জানুয়ারি")).toEqual({
      value: 21,
      rest: " জানুয়ারি",
    });
    expect(bn.match.ordinalNumber("not an ordinal")).toBeNull();
  });
});
