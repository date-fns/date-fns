import {
  secondsInDay,
  secondsInHour,
  secondsInMinute,
  secondsInMonth,
  secondsInQuarter,
  secondsInWeek,
  secondsInYear,
} from "../constants/index.js";
import { differenceInCalendarDays } from "../differenceInCalendarDays/index.js";
import { differenceInCalendarMonths } from "../differenceInCalendarMonths/index.js";
import { differenceInCalendarQuarters } from "../differenceInCalendarQuarters/index.js";
import { differenceInCalendarWeeks } from "../differenceInCalendarWeeks/index.js";
import { differenceInCalendarYears } from "../differenceInCalendarYears/index.js";
import { differenceInHours } from "../differenceInHours/index.js";
import { differenceInMinutes } from "../differenceInMinutes/index.js";
import { differenceInSeconds } from "../differenceInSeconds/index.js";
import { toDate } from "../toDate/index.js";

/**
 * The {@link intlFormatDistance} function options.
 */
export interface IntlFormatDistanceOptions {
  /** Force the distance unit */
  unit?: IntlFormatDistanceUnit;
  /** The locale(s) to use (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) */
  locale?: Intl.UnicodeBCP47LocaleIdentifier | Intl.UnicodeBCP47LocaleIdentifier[];
  /** The locale matching algorithm to use. Other value: 'lookup'. See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) */
  localeMatcher?: Intl.RelativeTimeFormatLocaleMatcher;
  /** The output message format. The values are 'auto' (e.g. `yesterday`), 'always'(e.g. `1 day ago`) */
  numeric?: Intl.RelativeTimeFormatNumeric;
  /** The length of the result. The values are: 'long' (e.g. `1 month`), 'short' (e.g. 'in 1 mo.'), 'narrow' (e.g. 'in 1 mo.'). The narrow one could be similar to the short one for some locales. */
  style?: Intl.RelativeTimeFormatStyle;
}

/**
 * The unit used to format the distance in {@link intlFormatDistance}.
 */
export type IntlFormatDistanceUnit =
  | "year"
  | "quarter"
  | "month"
  | "week"
  | "day"
  | "hour"
  | "minute"
  | "second";

/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date
 * @param baseDate - The date to compare with.
 * @param options - An object with options.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * The narrow one could be similar to the short one for some locales.
 *
 * @returns The distance in words according to language-sensitive relative time formatting.
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must not be invalid Unit
 * @throws `options.locale` must not be invalid locale
 * @throws `options.localeMatcher` must not be invalid localeMatcher
 * @throws `options.numeric` must not be invalid numeric
 * @throws `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */
export function intlFormatDistance<DateType extends Date>(
  date: DateType | number | string,
  baseDate: DateType | number | string,
  options?: IntlFormatDistanceOptions,
): string {
  let value: number = 0;
  let unit: Intl.RelativeTimeFormatUnit;
  const dateLeft = toDate(date);
  const dateRight = toDate(baseDate);

  if (!options?.unit) {
    // Get the unit based on diffInSeconds calculations if no unit is specified
    const diffInSeconds = differenceInSeconds(dateLeft, dateRight); // The smallest unit

    if (Math.abs(diffInSeconds) < secondsInMinute) {
      value = differenceInSeconds(dateLeft, dateRight);
      unit = "second";
    } else if (Math.abs(diffInSeconds) < secondsInHour) {
      value = differenceInMinutes(dateLeft, dateRight);
      unit = "minute";
    } else if (
      Math.abs(diffInSeconds) < secondsInDay &&
      Math.abs(differenceInCalendarDays(dateLeft, dateRight)) < 1
    ) {
      value = differenceInHours(dateLeft, dateRight);
      unit = "hour";
    } else if (
      Math.abs(diffInSeconds) < secondsInWeek &&
      (value = differenceInCalendarDays(dateLeft, dateRight)) &&
      Math.abs(value) < 7
    ) {
      unit = "day";
    } else if (Math.abs(diffInSeconds) < secondsInMonth) {
      value = differenceInCalendarWeeks(dateLeft, dateRight);
      unit = "week";
    } else if (Math.abs(diffInSeconds) < secondsInQuarter) {
      value = differenceInCalendarMonths(dateLeft, dateRight);
      unit = "month";
    } else if (Math.abs(diffInSeconds) < secondsInYear) {
      if (differenceInCalendarQuarters(dateLeft, dateRight) < 4) {
        // To filter out cases that are less than a year but match 4 quarters
        value = differenceInCalendarQuarters(dateLeft, dateRight);
        unit = "quarter";
      } else {
        value = differenceInCalendarYears(dateLeft, dateRight);
        unit = "year";
      }
    } else {
      value = differenceInCalendarYears(dateLeft, dateRight);
      unit = "year";
    }
  } else {
    // Get the value if unit is specified
    unit = options?.unit;
    if (unit === "second") {
      value = differenceInSeconds(dateLeft, dateRight);
    } else if (unit === "minute") {
      value = differenceInMinutes(dateLeft, dateRight);
    } else if (unit === "hour") {
      value = differenceInHours(dateLeft, dateRight);
    } else if (unit === "day") {
      value = differenceInCalendarDays(dateLeft, dateRight);
    } else if (unit === "week") {
      value = differenceInCalendarWeeks(dateLeft, dateRight);
    } else if (unit === "month") {
      value = differenceInCalendarMonths(dateLeft, dateRight);
    } else if (unit === "quarter") {
      value = differenceInCalendarQuarters(dateLeft, dateRight);
    } else if (unit === "year") {
      value = differenceInCalendarYears(dateLeft, dateRight);
    }
  }

  const rtf = new Intl.RelativeTimeFormat(options?.locale, {
    localeMatcher: options?.localeMatcher,
    numeric: options?.numeric || "auto",
    style: options?.style,
  });

  return rtf.format(value, unit);
}
