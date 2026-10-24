import { defaultLocale } from "../_lib/defaultLocale/index.ts";
import { getDefaultOptions } from "../_lib/defaultOptions/index.ts";
import { getRoundingMethod } from "../_lib/getRoundingMethod/index.ts";
import { getTimezoneOffsetInMilliseconds } from "../_lib/getTimezoneOffsetInMilliseconds/index.ts";
import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { compareAsc } from "../compareAsc/index.ts";
import {
  millisecondsInMinute,
  minutesInDay,
  minutesInMonth,
  minutesInYear,
} from "../constants/index.ts";
import type {
  ContextOptions,
  DateArg,
  LocalizedOptions,
  RoundingOptions,
} from "../types.ts";

/**
 * A per-unit custom formatter for {@link formatDistanceStrict}. Each entry
 * receives the unit value and returns the string to render for that unit.
 */
export type FormatDistanceUnitFormatters = Partial<
  Record<FormatDistanceStrictUnit, (value: number) => string>
>;

/**
 * The label style for {@link formatDistanceStrict}.
 *
 * - `long` (default): the locale's long form, e.g. `5 minutes`.
 * - `short`: a compact, locale-agnostic form, e.g. `5 mins`.
 * - `narrow`: a minimal, locale-agnostic form, e.g. `5m`.
 * - a per-unit formatter map for full control.
 */
export type FormatDistanceStyle =
  | "long"
  | "short"
  | "narrow"
  | FormatDistanceUnitFormatters;

const NARROW_DISTANCE_UNITS: Record<FormatDistanceStrictUnit, string> = {
  second: "s",
  minute: "m",
  hour: "h",
  day: "d",
  month: "mo",
  year: "y",
};

const SHORT_DISTANCE_UNITS: Record<FormatDistanceStrictUnit, string> = {
  second: "secs",
  minute: "mins",
  hour: "hrs",
  day: "days",
  month: "mos",
  year: "yrs",
};

function distanceStyleFormatter(
  style: FormatDistanceStyle,
): FormatDistanceUnitFormatters {
  if (style === "long") return {};
  if (style === "narrow") {
    return Object.fromEntries(
      (Object.keys(NARROW_DISTANCE_UNITS) as FormatDistanceStrictUnit[]).map(
        (unit) => [unit, (value: number) => `${value}${NARROW_DISTANCE_UNITS[unit]}`],
      ),
    ) as FormatDistanceUnitFormatters;
  }
  if (style === "short") {
    return Object.fromEntries(
      (Object.keys(SHORT_DISTANCE_UNITS) as FormatDistanceStrictUnit[]).map(
        (unit) => [
          unit,
          (value: number) => `${value} ${SHORT_DISTANCE_UNITS[unit]}`,
        ],
      ),
    ) as FormatDistanceUnitFormatters;
  }
  return style as FormatDistanceUnitFormatters;
}

/**
 * The {@link formatDistanceStrict} function options.
 */
export interface FormatDistanceStrictOptions
  extends
    LocalizedOptions<"formatDistance">,
    RoundingOptions,
    ContextOptions<Date> {
  /** Add "X ago"/"in X" in the locale language */
  addSuffix?: boolean;
  /** If specified, will force the unit */
  unit?: FormatDistanceStrictUnit;
  /**
   * The label style for the distance. `long` (the default) uses the locale's
   * long form; `short` and `narrow` use locale-agnostic compact forms
   * (e.g. `5m`, `2h`, `1d`); a per-unit formatter map gives full control.
   *
   * @default "long"
   */
  style?: FormatDistanceStyle;
}

/**
 * The unit used to format the distance in {@link formatDistanceStrict}.
 */
export type FormatDistanceStrictUnit =
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "month"
  | "year";

/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

export function formatDistanceStrict(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: FormatDistanceStrictOptions,
): string {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? defaultLocale;

  const comparison = compareAsc(laterDate, earlierDate);

  if (isNaN(comparison)) {
    throw new RangeError("Invalid time value");
  }

  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison: comparison as -1 | 0 | 1,
  });

  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    ...(comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]),
  );

  const roundingMethod = getRoundingMethod(options?.roundingMethod ?? "round");
  const style = options?.style ?? "long";
  const styleFormatters = distanceStyleFormatter(style);
  const formatUnit = (
    token: "xSeconds" | "xMinutes" | "xHours" | "xDays" | "xMonths" | "xYears",
    unit: FormatDistanceStrictUnit,
    value: number,
  ): string => {
    const custom = styleFormatters[unit];
    if (custom) return custom(value);
    return locale.formatDistance(token, value, localizeOptions);
  };

  const milliseconds = earlierDate_.getTime() - laterDate_.getTime();
  const minutes = milliseconds / millisecondsInMinute;

  const timezoneOffset =
    getTimezoneOffsetInMilliseconds(earlierDate_) -
    getTimezoneOffsetInMilliseconds(laterDate_);

  // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.
  const dstNormalizedMinutes =
    (milliseconds - timezoneOffset) / millisecondsInMinute;

  const defaultUnit = options?.unit;
  let unit: FormatDistanceStrictUnit;
  if (!defaultUnit) {
    if (minutes < 1) {
      unit = "second";
    } else if (minutes < 60) {
      unit = "minute";
    } else if (minutes < minutesInDay) {
      unit = "hour";
    } else if (dstNormalizedMinutes < minutesInMonth) {
      unit = "day";
    } else if (dstNormalizedMinutes < minutesInYear) {
      unit = "month";
    } else {
      unit = "year";
    }
  } else {
    unit = defaultUnit;
  }

  // 0 up to 60 seconds
  if (unit === "second") {
    const seconds = roundingMethod(milliseconds / 1000);
    return formatUnit("xSeconds", "second", seconds);

    // 1 up to 60 mins
  } else if (unit === "minute") {
    const roundedMinutes = roundingMethod(minutes);
    return formatUnit("xMinutes", "minute", roundedMinutes);

    // 1 up to 24 hours
  } else if (unit === "hour") {
    const hours = roundingMethod(minutes / 60);
    return formatUnit("xHours", "hour", hours);

    // 1 up to 30 days
  } else if (unit === "day") {
    const days = roundingMethod(dstNormalizedMinutes / minutesInDay);
    return formatUnit("xDays", "day", days);

    // 1 up to 12 months
  } else if (unit === "month") {
    const months = roundingMethod(dstNormalizedMinutes / minutesInMonth);
    return months === 12 && defaultUnit !== "month"
      ? formatUnit("xYears", "year", 1)
      : formatUnit("xMonths", "month", months);

    // 1 year up to max Date
  } else {
    const years = roundingMethod(dstNormalizedMinutes / minutesInYear);
    return formatUnit("xYears", "year", years);
  }
}
