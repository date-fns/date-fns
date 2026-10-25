import type { FormatDistanceToken } from "../locale/types.ts";
import type { Duration, DurationUnit, LocalizedOptions } from "../types.ts";
import { defaultLocale } from "../_lib/defaultLocale/index.ts";
import { getDefaultOptions } from "../_lib/defaultOptions/index.ts";

/**
 * A per-unit custom formatter. Each entry receives the unit value and returns the
 * string to render for that unit (e.g. `(5) => "5h"`).
 */
export type DurationUnitFormatters = Partial<
  Record<DurationUnit, (value: number) => string>
>;

/**
 * The label style for {@link formatDuration}.
 *
 * - `long` (default): the locale's long form, e.g. `5 hours 9 minutes`.
 * - `short`: a compact, locale-agnostic form, e.g. `5 hrs 9 mins`.
 * - `narrow`: a minimal, locale-agnostic form, e.g. `5h 9m`.
 * - a per-unit formatter map for full control.
 */
export type DurationStyle = "long" | "short" | "narrow" | DurationUnitFormatters;

const NARROW_UNITS: Record<DurationUnit, string> = {
  years: "y",
  months: "mo",
  weeks: "w",
  days: "d",
  hours: "h",
  minutes: "m",
  seconds: "s",
};

const SHORT_UNITS: Record<DurationUnit, string> = {
  years: "yrs",
  months: "mos",
  weeks: "wks",
  days: "days",
  hours: "hrs",
  minutes: "mins",
  seconds: "secs",
};

const styleFormatter = (
  style: DurationStyle
): DurationUnitFormatters => {
  if (style === "long") return {};
  if (style === "narrow") {
    return Object.fromEntries(
      (Object.keys(NARROW_UNITS) as DurationUnit[]).map((unit) => [
        unit,
        (value: number) => `${value}${NARROW_UNITS[unit]}`,
      ])
    ) as DurationUnitFormatters;
  }
  if (style === "short") {
    return Object.fromEntries(
      (Object.keys(SHORT_UNITS) as DurationUnit[]).map((unit) => [
        unit,
        (value: number) => `${value} ${SHORT_UNITS[unit]}`,
      ])
    ) as DurationUnitFormatters;
  }
  return style as DurationUnitFormatters;
};

/**
 * The {@link formatDuration} function options.
 */
export interface FormatDurationOptions extends LocalizedOptions<"formatDistance"> {
  /** The array of units to format */
  format?: DurationUnit[];
  /** Should be zeros be included in the output? */
  zero?: boolean;
  /** The delimiter string to use */
  delimiter?: string;
  /**
   * The label style for each unit. `long` (the default) uses the locale's long
   * form; `short` and `narrow` use locale-agnostic compact forms; a per-unit
   * formatter map gives full control over each unit's label.
   *
   * @default "long"
   */
  style?: DurationStyle;
}

const defaultFormat: DurationUnit[] = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
];

/**
 * @name formatDuration
 * @category Common Helpers
 * @summary Formats a duration in human-readable format
 *
 * @description
 * Return human-readable duration string i.e. "9 months 2 days"
 *
 * @param duration - The duration to format
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @example
 * // Format full duration
 * formatDuration({
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds'
 *
 * @example
 * // Format partial duration
 * formatDuration({ months: 9, days: 2 })
 * //=> '9 months 2 days'
 *
 * @example
 * // Customize the format
 * formatDuration(
 *   {
 *     years: 2,
 *     months: 9,
 *     weeks: 1,
 *     days: 7,
 *     hours: 5,
 *     minutes: 9,
 *     seconds: 30
 *   },
 *   { format: ['months', 'weeks'] }
 * ) === '9 months 1 week'
 *
 * @example
 * // Customize the zeros presence
 * formatDuration({ years: 0, months: 9 })
 * //=> '9 months'
 * formatDuration({ years: 0, months: 9 }, { zero: true })
 * //=> '0 years 9 months'
 *
 * @example
 * // Customize the delimiter
 * formatDuration({ years: 2, months: 9, weeks: 3 }, { delimiter: ', ' })
 * //=> '2 years, 9 months, 3 weeks'
 */
export function formatDuration(
  duration: Duration,
  options?: FormatDurationOptions,
): string {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? defaultLocale;
  const format = options?.format ?? defaultFormat;
  const zero = options?.zero ?? false;
  const delimiter = options?.delimiter ?? " ";
  const style = options?.style ?? "long";
  const styleFormatters = styleFormatter(style);

  if (!locale.formatDistance && style === "long") {
    return "";
  }

  const result = format
    .reduce((acc, unit) => {
      const value = duration[unit];
      if (value !== undefined && (zero || duration[unit])) {
        const customFormatter = styleFormatters[unit];
        if (customFormatter) {
          return acc.concat(customFormatter(value));
        }
        const token = `x${unit.replace(/(^.)/, (m) =>
          m.toUpperCase(),
        )}` as FormatDistanceToken;
        return acc.concat(locale.formatDistance!(token, value));
      }
      return acc;
    }, [] as string[])
    .join(delimiter);

  return result;
}
