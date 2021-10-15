import startOfDay from '../startOfDay/index'

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @returns the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */
export default function isSameDay(
  dateLeft: Date | number,
  dateRight: Date | number
): boolean {
  return startOfDay(dateLeft).getTime() === startOfDay(dateRight).getTime()
}
