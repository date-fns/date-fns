import { millisecondsInWeek } from "../constants/index.js";
import { startOfISOWeek } from "../startOfISOWeek/index.js";
import { getTimezoneOffsetInMilliseconds } from "../_lib/getTimezoneOffsetInMilliseconds/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link differenceInCalendarISOWeeks} function options.
 */
export interface DifferenceInCalendarISOWeeksOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6),
 * )
 * //=> 3
 */
export function differenceInCalendarISOWeeks<
  DateType extends Date,
  ContextDate extends Date,
>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: DifferenceInCalendarISOWeeksOptions<ContextDate> | undefined,
): number {
  const startOfISOWeekLeft = startOfISOWeek(dateLeft, options);
  const startOfISOWeekRight = startOfISOWeek(dateRight, options);

  const timestampLeft =
    +startOfISOWeekLeft - getTimezoneOffsetInMilliseconds(startOfISOWeekLeft);
  const timestampRight =
    +startOfISOWeekRight - getTimezoneOffsetInMilliseconds(startOfISOWeekRight);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / millisecondsInWeek);
}
