import toDate from '../toDate/index'

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date. Months are indexed from 0, like Javascript dates,
 * so January = 0, February = 1 etc.
 *
 * @param date - the given date
 * @returns the month number, where January = 0 as with standard Javascript Dates
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date('2012-02-29'))
 * //=> 1
 */
export default function getMonth<DateType extends Date>(
  dirtyDate: DateType | number
): number {
  const date = toDate(dirtyDate)
  const month = date.getMonth()
  return month
}
