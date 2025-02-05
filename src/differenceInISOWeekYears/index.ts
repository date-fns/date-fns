import { normalizeDates } from "../_lib/normalizeDates/index.js";
import { compareAsc } from "../compareAsc/index.js";
import { differenceInCalendarISOWeekYears } from "../differenceInCalendarISOWeekYears/index.js";
import { subISOWeekYears } from "../subISOWeekYears/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link differenceInISOWeekYears} function options.
 */
export interface DifferenceInISOWeekYearsOptions extends ContextOptions<Date> {}

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
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
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
export function differenceInISOWeekYears(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInISOWeekYearsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const sign = compareAsc(laterDate_, earlierDate_);
  const diff = Math.abs(
    differenceInCalendarISOWeekYears(laterDate_, earlierDate_, options),
  );

  const adjustedDate = subISOWeekYears(laterDate_, sign * diff, options);

  const isLastISOWeekYearNotFull = Number(
    compareAsc(adjustedDate, earlierDate_) === -sign,
  );
  const result = sign * (diff - isLastISOWeekYearNotFull);

  // Prevent negative zero
  return result === 0 ? 0 : result;
}
