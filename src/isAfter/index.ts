import { toDate } from "../toDate/index.ts";
import type { DateArg } from "../types.ts";

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 * 
 * Note: This comparison is strict (`>`). The function returns `true` only if `date` is strictly later than `dateToCompare`. If both dates are equal, the function returns `false`.
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 * 
 * @example
 * // Is 10 July 1989 before 10 July 1989?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1989, 6, 10))
 * //=> false
 */
export function isAfter(
  date: DateArg<Date> & {},
  dateToCompare: DateArg<Date> & {},
): boolean {
  return +toDate(date) > +toDate(dateToCompare);
}
