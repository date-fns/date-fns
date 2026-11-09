import { describe, expect, it } from "vitest";
import { getDateTimeFormat, getRelativeTimeFormat } from "./index.ts";

describe("getDateTimeFormat", () => {
  const date = new Date(Date.UTC(2019, 9, 4, 12, 30, 13, 456));

  const format = (
    locales: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) => getDateTimeFormat(locales, options).format(date);

  const freshFormat = (
    locales: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) => new Intl.DateTimeFormat(locales, options).format(date);

  it("reuses formatters for equal arguments", () => {
    expect(getDateTimeFormat(undefined)).toBe(getDateTimeFormat(undefined));
    expect(getDateTimeFormat("en-US", { hour: "numeric" })).toBe(
      getDateTimeFormat("en-US", { hour: "numeric" }),
    );
    expect(
      getDateTimeFormat(["de-DE", "en-US"], { timeZone: "Asia/Tokyo" }),
    ).toBe(getDateTimeFormat(["de-DE", "en-US"], { timeZone: "Asia/Tokyo" }));
  });

  it("doesn't reuse formatters for different arguments", () => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      timeZone: "UTC",
    };
    const variants: Array<[Intl.LocalesArgument, Intl.DateTimeFormatOptions]> =
      [
        ["en-US", options],
        ["de-DE", options],
        [["ja-JP"], options],
        [["ar-EG", "en-US"], options],
        ["en-US", { ...options, hour12: false }],
        ["en-US", { ...options, hourCycle: "h23" }],
        ["en-US", { ...options, timeZone: "Asia/Tokyo" }],
      ];
    // Interleaved to catch reuse across arguments.
    for (let pass = 0; pass < 2; pass++) {
      for (const [locales, options] of variants) {
        expect(format(locales, options)).toBe(freshFormat(locales, options));
      }
    }
    const formatters = new Set(
      variants.map(([locales, options]) => getDateTimeFormat(locales, options)),
    );
    expect(formatters.size).toBe(variants.length);
  });

  it("distinguishes option value types", () => {
    const values = [false, "false", 0, "0", Infinity, ""];
    for (let pass = 0; pass < 2; pass++) {
      for (const hour12 of values) {
        const options = {
          hour: "numeric",
          timeZone: "UTC",
          hour12,
        } as unknown as Intl.DateTimeFormatOptions;
        expect(format("en-US", options)).toBe(freshFormat("en-US", options));
      }
    }
  });

  it("formats correctly with arguments that skip the cache", () => {
    const locale = new Intl.Locale("de-DE");
    const inherited = Object.create({ hour: "numeric", timeZone: "UTC" });
    const nonEnumerable = Object.defineProperty<Intl.DateTimeFormatOptions>(
      { hour: "numeric", timeZone: "UTC" },
      "hour12",
      { value: false },
    );
    const objectValue = {
      hour: "numeric",
      timeZone: { toString: () => "Asia/Tokyo" },
    } as unknown as Intl.DateTimeFormatOptions;

    for (let pass = 0; pass < 2; pass++) {
      expect(format(locale, { hour: "numeric" })).toBe(
        freshFormat(locale, { hour: "numeric" }),
      );
      expect(format("en-US", inherited)).toBe(freshFormat("en-US", inherited));
      expect(format("en-US", nonEnumerable)).toBe(
        freshFormat("en-US", nonEnumerable),
      );
      expect(format("en-US", objectValue)).toBe(
        freshFormat("en-US", objectValue),
      );
    }

    expect(getDateTimeFormat(locale)).not.toBe(getDateTimeFormat(locale));
    expect(getDateTimeFormat("en-US", inherited)).not.toBe(
      getDateTimeFormat("en-US", inherited),
    );
  });

  it("throws on invalid arguments every time", () => {
    getDateTimeFormat("en-US", { timeZone: "UTC" });
    for (let pass = 0; pass < 2; pass++) {
      expect(() => getDateTimeFormat("en_US")).toThrow(RangeError);
      expect(() =>
        getDateTimeFormat("en-US", { timeZone: "Mars/Phobos" }),
      ).toThrow(RangeError);
      expect(() =>
        getDateTimeFormat("en-US", {
          hour: Symbol() as unknown as "numeric",
        }),
      ).toThrow(TypeError);
      expect(() =>
        getDateTimeFormat("en-US", {
          hour: (() => "numeric") as unknown as "numeric",
        }),
      ).toThrow(RangeError);
    }
  });

  it("evicts the oldest formatter when the cache is full", () => {
    const first = getDateTimeFormat("en-US", { evictionTest: "first" } as {});
    for (let index = 0; index < 99; index++)
      getDateTimeFormat("en-US", { evictionTest: index } as {});
    expect(getDateTimeFormat("en-US", { evictionTest: "first" } as {})).toBe(
      first,
    );

    getDateTimeFormat("en-US", { evictionTest: 99 } as {});
    expect(
      getDateTimeFormat("en-US", { evictionTest: "first" } as {}),
    ).not.toBe(first);
  });
});

describe("getRelativeTimeFormat", () => {
  it("reuses formatters for equal arguments", () => {
    expect(getRelativeTimeFormat("es", { numeric: "auto" })).toBe(
      getRelativeTimeFormat("es", { numeric: "auto" }),
    );
  });

  it("doesn't reuse formatters for different arguments", () => {
    const variants: Array<
      [Intl.LocalesArgument, Intl.RelativeTimeFormatOptions]
    > = [
      ["en-US", { numeric: "auto" }],
      ["en-US", { numeric: "always" }],
      ["es", { numeric: "auto" }],
      [["de", "en-US"], { numeric: "auto" }],
      ["en-US", { numeric: "always", style: "narrow" }],
    ];
    for (let pass = 0; pass < 2; pass++) {
      for (const [locales, options] of variants) {
        expect(getRelativeTimeFormat(locales, options).format(1, "day")).toBe(
          new Intl.RelativeTimeFormat(locales, options).format(1, "day"),
        );
      }
    }
  });

  it("throws on invalid arguments every time", () => {
    getRelativeTimeFormat("en-US", { style: "long" });
    for (let pass = 0; pass < 2; pass++) {
      expect(() => getRelativeTimeFormat("en_US")).toThrow(RangeError);
      expect(() =>
        getRelativeTimeFormat("en-US", { style: "tiny" as "long" }),
      ).toThrow(RangeError);
    }
  });
});
