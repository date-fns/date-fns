import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { addMonths } from "../addMonths/index.ts";
import { compareAsc } from "../compareAsc/index.ts";
import { differenceInCalendarMonths } from "../differenceInCalendarMonths/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link differenceInMonths} function options.
 */
export interface DifferenceInMonthsOptions extends ContextOptions<Date> {}

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * A month counts as full when {@link addMonths} would carry the earlier date to
 * the later one, which means the end of a short month counts: 31 January to 28
 * February is one full month, because `addMonths` clamps 31 February to the 28th.
 * The result therefore has the same magnitude whichever order the dates are
 * given in.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 *
 * @example
 * // The end of a short month counts as a full month:
 * const result = differenceInMonths(
 *   new Date(2014, 1, 28),
 *   new Date(2014, 0, 31)
 * )
 * //=> 1
 */
export function differenceInMonths(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInMonthsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const sign = compareAsc(laterDate_, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(laterDate_, earlierDate_),
  );

  if (difference < 1) return 0;

  // Walk the earlier of the two dates forward by the calendar-month difference
  // and see whether it reaches the later one. addMonths clamps to the end of
  // the target month, so this stays correct when the day-of-month doesn't exist
  // there (31 January + 1 month is 28 February).
  //
  // Stepping the later date backwards instead is not equivalent, because
  // clamping isn't invertible: 31 December + 2 months is 29 February 2024, but
  // 29 February 2024 - 2 months is 29 December. Compensating for that on one
  // operand only is what made differenceInMonths(a, b) and (b, a) disagree.
  const [earlier, later] =
    sign > 0 ? [earlierDate_, laterDate_] : [laterDate_, earlierDate_];
  const isLastMonthNotFull =
    compareAsc(addMonths(earlier, difference), later) === 1;

  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}
