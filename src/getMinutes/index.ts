import toDate from '../toDate/index'

/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param date - the given date
 * @returns the minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
export default function getMinutes<DateType extends Date>(
  date: DateType | number
): number {
  const convertedDate = toDate(date)
  const minutes = convertedDate.getMinutes()
  return minutes
}
