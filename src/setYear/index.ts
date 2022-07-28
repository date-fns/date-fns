import constructFrom from '../constructFrom/index'
import toDate from '../toDate/index'
import toInteger from '../_lib/toInteger/index'

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
export default function setYear<DateType extends Date>(
  dirtyDate: DateType | number,
  dirtyYear: number
): DateType {
  const date = toDate(dirtyDate)
  const year = toInteger(dirtyYear)

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date.getTime())) {
    return constructFrom(dirtyDate, NaN)
  }

  date.setFullYear(year)
  return date
}
