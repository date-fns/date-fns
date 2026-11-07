import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { sk } from "./index.ts";

describe("sk weekday parsing", () => {
  it.each(["sobota", "SOBOTA"])("matches Saturday: %s", (text) => {
    expect(sk.match.day(`${text}!`, { width: "wide" })).toEqual({
      value: 6,
      rest: "!",
    });
  });

  it.each(["EEEE", "cccc"])("round-trips all weekdays using %s", (pattern) => {
    for (let day = 1; day <= 7; day++) {
      const date = new Date(2026, 10, day);
      const text = format(date, pattern, { locale: sk });
      expect(parse(text, pattern, date, { locale: sk })).toEqual(date);
    }
  });
});
