import { describe, expect, it } from "vitest";
import { intlFormat } from "./index.ts";

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

const getOperationSystemLocale = () => {
  // https://stackoverflow.com/questions/46072248/node-js-how-to-detect-user-language/46072415
  return Intl.DateTimeFormat().resolvedOptions().locale;
};

describe("intlFormat", () => {
  describe("formats date", () => {
    fullICUOnly(
      "should work without format's options and locale's options",
      () => {
        const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
        const result = intlFormat(date);
        const localeResult = intlFormat(date, {
          locale: getOperationSystemLocale(),
        });

        expect(result).toBe(localeResult);
      },
    );

    fullICUOnly("should work with only format's options", () => {
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
      const formatOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "America/Los_Angeles",
      };

      const result = intlFormat(date, formatOptions);
      const localeResult = intlFormat(date, formatOptions, {
        locale: getOperationSystemLocale(),
      });

      expect(result).toBe(localeResult);
    });

    fullICUOnly("should work with only locale's options", () => {
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
      // Korean uses year-month-day order
      const localeOptions = {
        locale: "ko-KR",
      };

      const result = intlFormat(date, localeOptions);

      expect(result).toBe("2019. 10. 4.");
    });

    fullICUOnly(
      "should work with format's options and locale's options",
      () => {
        const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
        const formatOptions: Intl.DateTimeFormatOptions = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const localeOptions = {
          locale: "de-DE",
        };

        const result = intlFormat(date, formatOptions, localeOptions);

        expect(result).toBe("Freitag, 4. Oktober 2019");
      },
    );
  });

  it("throws RangeError if the date value is invalid", () => {
    expect(() => intlFormat(new Date(NaN))).toThrow(RangeError);
  });

  describe("formatter reuse", () => {
    const date = new Date(Date.UTC(2019, 9, 4, 12, 30, 13, 456));

    fullICUOnly("formats like a fresh formatter for each argument set", () => {
      const variants: Array<[Intl.DateTimeFormatOptions, string | string[]]> = [
        [{ weekday: "long", year: "numeric", month: "long" }, "en-GB"],
        [{ hour: "numeric", timeZone: "Asia/Tokyo" }, "ja-JP"],
        [{ hour: "numeric", timeZone: "Asia/Tokyo", hour12: false }, "ja-JP"],
        [{ dateStyle: "full", timeZone: "UTC" }, ["ko-KR", "en-US"]],
        [{ dateStyle: "full", timeZone: "UTC" }, "ko-KR"],
      ];
      for (let pass = 0; pass < 2; pass++) {
        expect(intlFormat(date)).toBe(new Intl.DateTimeFormat().format(date));
        expect(intlFormat(date, { locale: "de-DE" })).toBe(
          new Intl.DateTimeFormat("de-DE").format(date),
        );
        for (const [formatOptions, locale] of variants) {
          expect(intlFormat(date, formatOptions, { locale })).toBe(
            new Intl.DateTimeFormat(locale, formatOptions).format(date),
          );
        }
      }
    });

    it("throws on an invalid locale every time", () => {
      intlFormat(date, { locale: "en-US" });
      expect(() => intlFormat(date, { locale: "en_US" })).toThrow(RangeError);
      expect(() => intlFormat(date, { locale: "en_US" })).toThrow(RangeError);
    });

    // Node.js and Bun apply `process.env.TZ` changes at runtime.
    const canSwitchTimeZone = () => {
      if (typeof process !== "object" || !process.env) return false;
      const originalTZ = process.env.TZ;
      try {
        process.env.TZ = "Asia/Tokyo";
        const tokyo = new Date(0).getTimezoneOffset();
        process.env.TZ = "America/New_York";
        return tokyo === -540 && new Date(0).getTimezoneOffset() === 300;
      } finally {
        restoreTZ(originalTZ);
      }
    };

    const restoreTZ = (originalTZ: string | undefined) => {
      if (originalTZ === undefined) delete process.env.TZ;
      else process.env.TZ = originalTZ;
    };

    it.skipIf(!canSwitchTimeZone())("respects system time zone changes", () => {
      // Paris and Berlin: same offsets in 2025, different in 1977.
      const date = new Date(Date.UTC(1977, 6, 15, 12));
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        timeZoneName: "long",
      };
      const zones = [
        "America/New_York",
        "Asia/Tokyo",
        "Europe/Paris",
        "Europe/Berlin",
        "America/New_York",
      ];
      const originalTZ = process.env.TZ;
      try {
        const results = zones.map((zone) => {
          process.env.TZ = zone;
          const result = intlFormat(date, options, { locale: "en-US" });
          expect(result).toBe(
            new Intl.DateTimeFormat("en-US", options).format(date),
          );
          return result;
        });
        expect(new Set(results).size).toBe(4);
      } finally {
        restoreTZ(originalTZ);
      }
    });
  });
});
