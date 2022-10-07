import differenceInCalendarDays from '../differenceInCalendarDays/index'
import startOfYear from '../startOfYear/index'
import toDate from '../toDate/index'

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - the given date
 * @returns the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
export default function getDayOfYear<DateType extends Date>(
  date: DateType | number
): number {
  const convertedDate = toDate(date)
  const diff = differenceInCalendarDays(
    convertedDate,
    startOfYear(convertedDate)
  )
  const dayOfYear = diff + 1
  return dayOfYear
}
