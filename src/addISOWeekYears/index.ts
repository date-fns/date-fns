import { getISOWeekYear } from "../getISOWeekYear/index.js";
import { setISOWeekYear } from "../setISOWeekYear/index.js";
import { toDate } from "../toDate";

/**
 * @name addISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of ISO week-numbering years to be added.
 *
 * @returns The new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * const result = addISOWeekYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jn 26 2015 00:00:00
 */
export function addISOWeekYears<DateType extends Date>(
  date: DateType | number | string,
  amount: number,
): DateType {
  const _date = toDate(date);
  const hours: number = _date.getHours();
  const minutes = _date.getMinutes();
  const seconds = _date.getSeconds();
  const milliseconds = _date.getMilliseconds();

  const result = setISOWeekYear(date, getISOWeekYear(date) + amount);
  result.setHours(hours, minutes, seconds, milliseconds);

  return result;
}
