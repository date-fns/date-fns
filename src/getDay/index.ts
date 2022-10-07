import toDate from '../toDate/index'

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param date - the given date
 * @returns the day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
export default function getDay<DateType extends Date>(
  date: DateType | number
): number {
  const convertedDate = toDate(date)
  const day = convertedDate.getDay()
  return day
}
