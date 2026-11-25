import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { tr } from "./index.ts";

describe("tr locale", () => {
  const noon = new Date(2024, 0, 7, 12);
  const options = { locale: tr };

  it("parses the formatted Turkish time at noon", () => {
    const pattern = "h:mm bbbb";
    const formatted = format(noon, pattern, options);
    expect(parse(formatted, pattern, noon, options)).toEqual(noon);
  });

  it.each([
    [0, "12:30 gy"],
    [2, "2:30 öö"],
    [12, "12:30 ö"],
    [14, "2:30 ös"],
  ] as const)("round-trips the narrow day period at hour %i", (hour, label) => {
    const date = new Date(2024, 0, 7, hour, 30);
    const pattern = "h:mm bbbbb";
    expect(format(date, pattern, options)).toBe(label);
    expect(parse(label, pattern, noon, options)).toEqual(date);
  });

  it("also accepts the standalone noon form", () => {
    expect(parse("12:00 öğle", "h:mm bbbb", noon, options)).toEqual(noon);
  });

  it("parses the longer afternoon form", () => {
    expect(tr.match.dayPeriod("öğleden sonra", { width: "wide" })?.value).toBe(
      "afternoon",
    );
    expect(parse("1:00 öğleden sonra", "h:mm BBBB", noon, options)).toEqual(
      new Date(2024, 0, 7, 13),
    );
  });
});
