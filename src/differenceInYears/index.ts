import { compareAsc } from "../compareAsc/index.js";
import { differenceInCalendarYears } from "../differenceInCalendarYears/index.js";
import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link differenceInYears} function options.
 */
export interface DifferenceInYearsOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @typeParam DateType - The `Date` type the function operates on. Gets inferred from passed arguments. Allows use of extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
export function differenceInYears<
  DateType extends Date,
  ContextDate extends Date,
>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: DifferenceInYearsOptions<ContextDate> | undefined,
): number {
  const dateLeft_ = toDate(dateLeft, options?.in);
  const dateRight_ = toDate(dateRight, options?.in);

  // -1 if the left date is earlier than the right date
  // 2023-12-31 - 2024-01-01 = -1
  const sign = compareAsc(dateLeft_, dateRight_);

  // First calculate the difference in calendar years
  // 2024-01-01 - 2023-12-31 = 1 year
  const difference = Math.abs(differenceInCalendarYears(dateLeft_, dateRight_));

  // Now we need to calculate if the difference is full. To do that we set
  // both dates to the same year and check if the both date's month and day
  // form a full year.
  dateLeft_.setFullYear(1584);
  dateRight_.setFullYear(1584);

  // For it to be true, when the left date is later than the right date
  // (2026-02-01 - 2023-12-10 = 3 years), the difference is full if
  // the normalized left date is also later than the normalized right date.
  // In our example, 1584-02-01 is earlier than 1584-12-10, so the difference
  // is partial, hence we need to subtract 1 from the difference 3 - 1 = 2.
  const partial = compareAsc(dateLeft_, dateRight_) === -sign;

  const result = sign * (difference - +partial);

  // Prevent negative zero
  return result === 0 ? 0 : result;
}
