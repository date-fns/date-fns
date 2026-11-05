import { describe, expect, it } from "vitest";
import { format } from "../../../../format/index.ts";
import { parse } from "../../../../parse/index.ts";
import { et } from "../../index.ts";

describe("et abbreviated weekdays", () => {
  it.each([
    ["esmasp.", 1],
    ["teisip.", 2],
    ["kolmap.", 3],
    ["neljap.", 4],
    ["reede.", 5],
    ["laup.", 6],
    ["pühap.", 7],
  ])("parses the entire abbreviation %s", (text, day) => {
    expect(
      parse(text + " 12:30", "EEE HH:mm", new Date(2024, 0, 1), { locale: et }),
    ).toEqual(new Date(2024, 0, day, 12, 30));
  });

  it.each(["EEE", "ccc"])("round-trips every weekday with %s", (token) => {
    for (let day = 1; day <= 7; day++) {
      const date = new Date(2024, 0, day);
      const text = format(date, token, { locale: et });
      expect(parse(text, token, date, { locale: et }), text).toEqual(date);
    }
  });

  it.each(["esm.", "ESM", "es"])("continues to accept %s", (text) => {
    expect(parse(text, "EEE", new Date(2024, 0, 1), { locale: et })).toEqual(
      new Date(2024, 0, 1),
    );
  });
});
