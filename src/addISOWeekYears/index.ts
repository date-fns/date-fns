import getISOWeekYear from '../getISOWeekYear/index'
import setISOWeekYear from '../setISOWeekYear/index'

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
 * @param date - the date to be changed
 * @param amount - the amount of ISO week-numbering years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * const result = addISOWeekYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jn 26 2015 00:00:00
 */
export default function addISOWeekYears<DateType extends Date>(
  dirtyDate: DateType | number,
  amount: number
): DateType {
  return setISOWeekYear(dirtyDate, getISOWeekYear(dirtyDate) + amount)
}
