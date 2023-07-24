import endOfDay from '../endOfDay/index'
import endOfMonth from '../endOfMonth/index'
import toDate from '../toDate/index'

/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param date - the date to check
 * @returns the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
export default function isLastDayOfMonth<DateType extends Date>(
  date: DateType | number
): boolean {
  const convertedDate = toDate(date)
  return (
    endOfDay(convertedDate).getTime() === endOfMonth(convertedDate).getTime()
  )
}
