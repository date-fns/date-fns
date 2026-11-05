import { describe, expect, it } from "vitest";
import { format } from "../../../../format/index.ts";
import { parse } from "../../../../parse/index.ts";
import { el } from "../../index.ts";

describe("el abbreviated weekdays", () => {
  it.each([
    ["Τρί", 2],
    ["Πέμ", 4],
    ["Σάβ", 6],
    ["Τρι", 2],
    ["Πεμ", 4],
    ["Σαβ", 6],
    ["ΤΡΊ", 2],
    ["ΠΈΜ", 4],
    ["ΣΆΒ", 6],
  ])("parses %s", (text, day) => {
    expect(parse(text, "EEE", new Date(2024, 0, 1), { locale: el })).toEqual(
      new Date(2024, 0, day),
    );
  });

  it.each(["EEE", "ccc"])("round-trips every weekday with %s", (token) => {
    for (let day = 1; day <= 7; day++) {
      const date = new Date(2024, 0, day);
      const text = format(date, token, { locale: el });
      expect(parse(text, token, date, { locale: el }), text).toEqual(date);
    }
  });
});
