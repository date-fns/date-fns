import { compareAsc } from "../compareAsc/index.js";
import { differenceInCalendarISOWeekYears } from "../differenceInCalendarISOWeekYears/index.js";
import { subISOWeekYears } from "../subISOWeekYears/index.js";
import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link differenceInISOWeekYears} function options.
 */
export interface DifferenceInISOWeekYearsOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - The options
 *
 * @returns The number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * const result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * // => 1
 */
export function differenceInISOWeekYears<
  DateType extends Date,
  ContextDate extends Date,
>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: DifferenceInISOWeekYearsOptions<ContextDate> | undefined,
): number {
  let _dateLeft = toDate(dateLeft, options?.in);
  const _dateRight = toDate(dateRight, options?.in);

  const sign = compareAsc(_dateLeft, _dateRight);
  const difference = Math.abs(
    differenceInCalendarISOWeekYears(_dateLeft, _dateRight, options),
  );
  _dateLeft = subISOWeekYears(_dateLeft, sign * difference, options);

  const isLastISOWeekYearNotFull = Number(
    compareAsc(_dateLeft, _dateRight) === -sign,
  );
  const result = sign * (difference - isLastISOWeekYearNotFull);

  return result === 0 ? 0 : result;
}
