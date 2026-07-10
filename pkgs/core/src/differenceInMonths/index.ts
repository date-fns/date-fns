import { normalizeDates } from "../_lib/normalizeDates/index.ts";
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

  const sign = compareLocalAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_),
  );

  if (difference < 1) return 0;

  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27)
    workingLaterDate.setDate(30);

  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);

  // Only `workingLaterDate`'s year/month/day are used below, not its
  // time-of-day. Navigating a Date `difference` months back (above) can land
  // on a nonexistent local time during a DST "spring forward" gap, which gets
  // silently renormalized to a different hour, masking the very discrepancy
  // this comparison is meant to catch. Its year/month/day are unaffected by
  // that (a DST gap never changes the date), so they're still trustworthy.
  // `laterDate_` was never renavigated, so its time-of-day is used instead.
  let isLastMonthNotFull =
    compareCalendarAndTime(workingLaterDate, laterDate_, earlierDate_) ===
    -sign;

  if (
    isLastDayOfMonth(laterDate_) &&
    difference === 1 &&
    compareLocalAsc(laterDate_, earlierDate_) === 1
  ) {
    isLastMonthNotFull = false;
  }

  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(laterDate: Date, earlierDate: Date): number {
  return compareCalendarAndTime(laterDate, laterDate, earlierDate);
}

// Compares a year/month/day (`calendar`'s) & time-of-day (`time`'s
// hours/minutes/seconds/ms) against `other`'s. `calendar` and `time` are
// passed separately so callers can supply a year/month/day derived from a
// Date that may have been renavigated (and so shouldn't be trusted for its
// time-of-day), alongside a `time` value that wasn't.
function compareCalendarAndTime(
  calendar: Date,
  time: Date,
  other: Date,
): number {
  const diff =
    calendar.getFullYear() - other.getFullYear() ||
    calendar.getMonth() - other.getMonth() ||
    calendar.getDate() - other.getDate() ||
    time.getHours() - other.getHours() ||
    time.getMinutes() - other.getMinutes() ||
    time.getSeconds() - other.getSeconds() ||
    time.getMilliseconds() - other.getMilliseconds();

  if (diff < 0) return -1;
  if (diff > 0) return 1;

  // Return 0 if diff is 0; return NaN if diff is NaN
  return diff;
}
