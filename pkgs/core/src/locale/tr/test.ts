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

  it("also accepts the standalone noon form", () => {
    expect(parse("12:00 öğle", "h:mm bbbb", noon, options)).toEqual(noon);
  });

  it("parses the longer afternoon form", () => {
    expect(parse("1:00 öğleden sonra", "h:mm BBBB", noon, options)).toEqual(
      new Date(2024, 0, 7, 13),
    );
  });
});
