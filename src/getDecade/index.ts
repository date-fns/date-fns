import { toDate } from "../toDate/index.js";

/**
 * @name getDecade
 * @category Decade Helpers
 * @summary Get the decade of the given date.
 *
 * @description
 * Get the decade of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The year of decade
 *
 * @example
 * // Which decade belongs 27 November 1942?
 * const result = getDecade(new Date(1942, 10, 27))
 * //=> 1940
 */
export function getDecade<DateType extends Date>(
  date: DateType | number | string,
): number {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const decade = Math.floor(year / 10) * 10;
  return decade;
}
