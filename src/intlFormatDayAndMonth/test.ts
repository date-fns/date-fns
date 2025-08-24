import { describe, expect, it } from "vitest";
import { intlFormatDayAndMonth } from "./index.ts";

// Before Node version 13.0.0, only the locale data for en-US is available by default.
const hasFullICU = () => {
  try {
    const january = new Date(9e8);
    const spanish = new Intl.DateTimeFormat("es", { month: "long" });
    return spanish.format(january) === "enero";
  } catch (_err) {
    return false;
  }
};

const fullICUOnly = hasFullICU() ? it : it.skip;

describe("intlFormatDayAndMonth", () => {
  fullICUOnly("should format the day and month in English", () => {
    const date = new Date(2021, 3 /* Apr */, 5);
    const result = intlFormatDayAndMonth(date, { locale: "en-US" });
    expect(result).toBe("April 5");
  });

  fullICUOnly("should format the day and month in Spanish", () => {
    const date = new Date(2021, 3 /* Apr */, 5);
    const result = intlFormatDayAndMonth(date, { locale: "es-ES" });
    expect(result).toBe("5 de abril");
  });

  it("throws RangeError if the date value is invalid", () => {
    expect(() => intlFormatDayAndMonth(new Date(NaN))).toThrow(RangeError);
  });
});
