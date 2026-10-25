import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { formatRelative } from "../../formatRelative/index.ts";
import { parse } from "../../parse/index.ts";
import { sq } from "./index.ts";

describe("sq locale", () => {
  const date = new Date(2026, 9 /* Oct */, 8, 14, 5, 9);

  it("formats long dates with the CLDR day-first patterns", () => {
    expect(format(date, "PPPP", { locale: sq })).toBe("e enjte, 8 tetor 2026");
    expect(format(date, "PPP", { locale: sq })).toBe("8 tetor 2026");
    expect(format(date, "PP", { locale: sq })).toBe("8 tet 2026");
    expect(format(date, "P", { locale: sq })).toBe("8.10.26");
  });

  it("formats times and date-times with the CLDR patterns", () => {
    expect(format(date, "pp", { locale: sq })).toBe("2:05:09 m.d.");
    expect(format(date, "PPPPp", { locale: sq })).toBe(
      "e enjte, 8 tetor 2026 në 2:05 m.d.",
    );
    expect(format(date, "Pp", { locale: sq })).toBe("8.10.26, 2:05 m.d.");
  });

  it("uses the CLDR day periods", () => {
    expect(format(new Date(2026, 9, 8, 9), "h a", { locale: sq })).toBe(
      "9 p.d.",
    );
    expect(format(date, "h B", { locale: sq })).toBe("2 e pasdites");
    expect(format(new Date(2026, 9, 8, 12), "h b", { locale: sq })).toBe(
      "12 e mesditës",
    );
  });

  it("uses the CLDR quarter names for each context", () => {
    expect(format(date, "QQQQ", { locale: sq })).toBe("tremujori i katërt");
    expect(format(date, "qqqq", { locale: sq })).toBe("Tremujori i 4-t");
  });

  it("uses the CLDR ordinal categories", () => {
    expect(sq.localize.ordinalNumber(1)).toBe("1-rë");
    expect(sq.localize.ordinalNumber(4)).toBe("4-t");
    expect(sq.localize.ordinalNumber(14)).toBe("14-të");
    expect(sq.localize.ordinalNumber(21)).toBe("21-të");
    expect(sq.localize.ordinalNumber(24)).toBe("24-t");
  });

  it("formats relative weekdays with the CLDR definite forms", () => {
    const baseDate = new Date(2026, 9, 8, 10);
    expect(
      formatRelative(new Date(2026, 9, 5, 9), baseDate, { locale: sq }),
    ).toBe("të hënën e kaluar në 9:00 p.d.");
    expect(
      formatRelative(new Date(2026, 9, 10, 9), baseDate, { locale: sq }),
    ).toBe("të shtunën në 9:00 p.d.");
  });

  it("parses what it formats", () => {
    for (const pattern of [
      "PPPP",
      "PPP",
      "PP",
      "P",
      "EEEE, d MMMM yyyy h:mm a",
      "EEE, d MMM yyyy h:mm aaaa",
      "QQQ yyyy",
      "QQQQ yyyy",
      "qqqq yyyy",
      "do MMMM yyyy G",
      "do MMMM yyyy GGGG",
    ]) {
      const formatted = format(date, pattern, { locale: sq });
      expect(
        format(parse(formatted, pattern, date, { locale: sq }), pattern, {
          locale: sq,
        }),
      ).toBe(formatted);
    }

    expect(
      parse("e enjte, 8 tetor 2026", "PPPP", new Date(), { locale: sq }),
    ).toEqual(new Date(2026, 9, 8));
    expect(
      parse("8 korr 2026", "d MMM yyyy", new Date(), { locale: sq }),
    ).toEqual(new Date(2026, 6, 8));
    expect(parse("e premte", "EEEE", date, { locale: sq }).getDay()).toBe(5);
  });
});
