import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { compareAsc } from "../compareAsc/index.ts";
import { constructFrom } from "../constructFrom/index.ts";
import { differenceInCalendarMonths } from "../differenceInCalendarMonths/index.ts";
import { isLastDayOfMonth } from "../isLastDayOfMonth/index.ts";
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
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    laterDate,
    earlierDate,
  );

  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_),
  );

  if (difference < 1) return 0;

  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27)
    workingLaterDate.setDate(30);

  // Capture the wall-clock time before shifting the month back so we can
  // detect a rare case below: if the shift lands on a local time that
  // doesn't exist (a DST "spring forward" gap, e.g. 2:00 AM on the day
  // clocks jump to 3:00 AM, or a 30-minute gap in some time zones), the
  // engine silently normalizes it forward, which would otherwise corrupt
  // the comparison that follows.
  const workingLaterDateClockMinutes =
    workingLaterDate.getHours() * 60 + workingLaterDate.getMinutes();

  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);

  let isLastMonthNotFull: boolean;
  if (
    workingLaterDate.getHours() * 60 + workingLaterDate.getMinutes() !==
    workingLaterDateClockMinutes
  ) {
    // The backward shift landed in a DST gap and got silently normalized,
    // corrupting workingLaterDate. Shift earlierDate_ forward by the same
    // number of months instead and compare against the untouched laterDate_
    // - moving forward from a valid, already-normalized date can't land back
    // in the same gap.
    const workingEarlierDate = constructFrom(earlierDate_, +earlierDate_);
    workingEarlierDate.setMonth(
      workingEarlierDate.getMonth() + sign * difference,
    );
    isLastMonthNotFull = compareAsc(workingEarlierDate, laterDate_) === sign;
  } else {
    isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  }

  if (
    isLastDayOfMonth(laterDate_) &&
    difference === 1 &&
    compareAsc(laterDate_, earlierDate_) === 1
  ) {
    isLastMonthNotFull = false;
  }

  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}
