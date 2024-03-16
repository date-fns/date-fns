import { eachWeekendOfInterval } from "../eachWeekendOfInterval/index.js";
import { endOfYear } from "../endOfYear/index.js";
import { startOfYear } from "../startOfYear/index.js";

/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given year
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * const result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */
export function eachWeekendOfYear<DateType extends Date>(
  date: DateType | number | string,
): DateType[] {
  const start = startOfYear(date);
  const end = endOfYear(date);
  return eachWeekendOfInterval({ start, end });
}
