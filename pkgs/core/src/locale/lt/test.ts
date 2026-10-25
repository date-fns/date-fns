import { describe, expect, it } from "vitest";
import { parse } from "../../parse/index.ts";
import { lt } from "./index.ts";

describe("lt locale", () => {
  const referenceDate = new Date(2021, 0 /* Jan */, 1);

  it("parses the genitive month form March (kovo) that localize produces", () => {
    expect(parse("kovo", "MMMM", referenceDate, { locale: lt })).toEqual(
      new Date(2021, 2 /* Mar */, 1),
    );
  });

  it("still parses the nominative month form March (kovas)", () => {
    expect(parse("kovas", "MMMM", referenceDate, { locale: lt })).toEqual(
      new Date(2021, 2 /* Mar */, 1),
    );
  });

  it("parses the months adjacent to March as distinct months", () => {
    expect(parse("vasario", "MMMM", referenceDate, { locale: lt })).toEqual(
      new Date(2021, 1 /* Feb */, 1),
    );

    expect(parse("balandžio", "MMMM", referenceDate, { locale: lt })).toEqual(
      new Date(2021, 3 /* Apr */, 1),
    );
  });
});
