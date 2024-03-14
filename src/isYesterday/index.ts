import { constructNow } from "../constructNow/index.js";
import { isSameDay } from "../isSameDay/index.js";
import { subDays } from "../subDays/index.js";

/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
export function isYesterday<DateType extends Date>(
  date: DateType | number | string,
): boolean {
  return isSameDay(date, subDays(constructNow(date), 1));
}
