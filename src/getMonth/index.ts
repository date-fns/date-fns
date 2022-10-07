import toDate from '../toDate/index'

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - the given date
 * @returns the month
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
export default function getMonth<DateType extends Date>(
  date: DateType | number
): number {
  const convertedDate = toDate(date)
  const month = convertedDate.getMonth()
  return month
}
