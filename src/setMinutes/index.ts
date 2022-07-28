import toDate from '../toDate/index'
import toInteger from '../_lib/toInteger/index'

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param date - the date to be changed
 * @param minutes - the minutes of the new date
 * @returns the new date with the minutes set
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
export default function setMinutes<DateType extends Date>(
  dirtyDate: DateType | number,
  dirtyMinutes: number
): DateType {
  const date = toDate(dirtyDate)
  const minutes = toInteger(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}
