import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { compareAsc } from "../compareAsc/index.ts";
import { differenceInCalendarMonths } from "../differenceInCalendarMonths/index.ts";
import { addMonths } from "../addMonths/index.ts";
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
 */
export function differenceInMonths(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInMonthsOptions | undefined,
): number {
  const [laterDate_, , earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    laterDate,
    earlierDate,
  );

  const sign = compareAsc(laterDate_, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(laterDate_, earlierDate_),
  );

  if (difference < 1) return 0;

  const fullMonthsDate = addMonths(earlierDate_, sign * difference, options);
  const isLastMonthNotFull = compareAsc(laterDate_, fullMonthsDate) === -sign;

  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}
