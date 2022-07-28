import toDate from '../toDate/index'

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
export default function isWednesday<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  return toDate(dirtyDate).getDay() === 3
}
