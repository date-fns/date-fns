import { describe, expect, it } from "vitest";
import { format } from "../../../../format/index.ts";
import { parse } from "../../../../parse/index.ts";
import { be } from "../../../be/index.ts";
import { beTarask } from "../../index.ts";

describe("be-tarask month parsing", () => {
  const referenceDate = new Date(2024, 0, 1);
  const december = new Date(2024, 11, 1);
  const monthFormats = ["MMM", "MMMM", "LLL", "LLLL"];

  it.each(monthFormats)("round-trips December with %s", (token) => {
    const text = format(december, token, { locale: beTarask });
    expect(parse(text, token, referenceDate, { locale: beTarask })).toEqual(
      december,
    );
  });

  it("parses an uppercase December name", () => {
    expect(
      parse("СЬНЕЖАНЬ", "LLLL", referenceDate, { locale: beTarask }),
    ).toEqual(december);
  });

  it.each([0, 5, 10])("preserves month %i", (month) => {
    const date = new Date(2024, month, 1);
    for (const token of monthFormats) {
      const text = format(date, token, { locale: beTarask });
      expect(parse(text, token, referenceDate, { locale: beTarask })).toEqual(
        date,
      );
    }
  });

  it.each(["M", "MM", "L", "LL"])(
    "preserves numeric December with %s",
    (token) => {
      const text = format(december, token, { locale: beTarask });
      expect(parse(text, token, referenceDate, { locale: beTarask })).toEqual(
        december,
      );
    },
  );

  it.each(monthFormats)("preserves the be locale with %s", (token) => {
    const text = format(december, token, { locale: be });
    expect(parse(text, token, referenceDate, { locale: be })).toEqual(december);
  });

  it("continues rejecting a December form without the soft sign", () => {
    const result = parse("снежань", "LLLL", referenceDate, {
      locale: beTarask,
    });
    expect(Number.isNaN(result.getTime())).toBe(true);
  });
});
