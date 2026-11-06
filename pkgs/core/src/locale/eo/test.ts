import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { eo } from "./index.ts";

describe("eo era parsing", () => {
  it.each(["antaŭ Komuna Erao", "ANTAŬ KOMUNA ERAO"])(
    "matches the localized wide era %s",
    (text) => {
      expect(eo.match.era(`${text}!`, { width: "wide" })).toEqual({
        value: 0,
        rest: "!",
      });
    },
  );

  it.each([-42, 2026])("round-trips the wide era for year %s", (year) => {
    const date = new Date(0);
    date.setFullYear(year, 0, 2);
    date.setHours(0, 0, 0, 0);
    const pattern = "GGGG y-MM-dd";
    const text = format(date, pattern, { locale: eo });
    expect(parse(text, pattern, new Date(2026, 0, 1), { locale: eo })).toEqual(
      date,
    );
  });

  it("retains the previously accepted caron spelling", () => {
    expect(eo.match.era("antaǔ Komuna Erao", { width: "wide" })?.value).toBe(0);
  });
});
