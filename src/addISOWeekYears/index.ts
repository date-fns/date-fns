import getISOWeekYear from '../getISOWeekYear/index'
import setISOWeekYear from '../setISOWeekYear/index'

/**
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * @param date - The date to be changed
 * @param amount - The amount of ISO week-numbering years to be added
 * @returns The new date with the ISO week-numbering years added
 *
 * @example
 * Add 5 ISO week-numbering years to 2 July 2010:
 * ```ts
 * const result = addISOWeekYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 * ```
 *
 * @category ISO Week-Numbering Year Helpers
 */
export default function addISOWeekYears(date: Date | number, amount: number) {
  return setISOWeekYear(date, getISOWeekYear(date) + amount)
}
