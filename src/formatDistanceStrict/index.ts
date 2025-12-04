import { defaultLocale } from "../_lib/defaultLocale/index.ts";
import { getDefaultOptions } from "../_lib/defaultOptions/index.ts";
import { getRoundingMethod } from "../_lib/getRoundingMethod/index.ts";
import { getTimezoneOffsetInMilliseconds } from "../_lib/getTimezoneOffsetInMilliseconds/index.ts";
import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { compareAsc } from "../compareAsc/index.ts";
import { differenceInMonths } from "../differenceInMonths/index.ts";
import { differenceInYears } from "../differenceInYears/index.ts";
import { addMonths } from "../addMonths/index.ts";
import { addYears } from "../addYears/index.ts";
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
 * The {@link formatDistanceStrict} function options.
 */
export interface FormatDistanceStrictOptions
  extends LocalizedOptions<"formatDistance">,
    RoundingOptions,
    ContextOptions<Date> {
  /** Add "X ago"/"in X" in the locale language */
  addSuffix?: boolean;
  /** If specified, will force the unit */
  unit?: FormatDistanceStrictUnit;
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
    return locale.formatDistance("xSeconds", seconds, localizeOptions);

    // 1 up to 60 mins
  } else if (unit === "minute") {
    const roundedMinutes = roundingMethod(minutes);
    return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions);

    // 1 up to 24 hours
  } else if (unit === "hour") {
    const hours = roundingMethod(minutes / 60);
    return locale.formatDistance("xHours", hours, localizeOptions);

    // 1 up to 30 days
  } else if (unit === "day") {
    const days = roundingMethod(dstNormalizedMinutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);

    // 1 up to 12 months
  } else if (unit === "month") {
    const months = differenceInMonths(earlierDate_, laterDate_);
    const remainder =
      earlierDate_.getTime() - addMonths(laterDate_, months).getTime();

    const roundedMonths = roundingMethod(
      months + remainder / (millisecondsInMinute * minutesInMonth),
    );
    return roundedMonths === 12 && defaultUnit !== "month"
      ? locale.formatDistance("xYears", 1, localizeOptions)
      : locale.formatDistance("xMonths", roundedMonths, localizeOptions);

    // 1 year up to max Date
  } else {
    const years = differenceInYears(earlierDate_, laterDate_);
    const remainder =
      earlierDate_.getTime() - addYears(laterDate_, years).getTime();

    const roundedYears = roundingMethod(
      years + remainder / (millisecondsInMinute * minutesInYear),
    );
    return locale.formatDistance("xYears", roundedYears, localizeOptions);
  }
}
