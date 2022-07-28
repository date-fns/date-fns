import previousDay from '../previousDay/index'

/**
 * @name previousWednesday
 * @category Weekday Helpers
 * @summary When is the previous Wednesday?
 *
 * @description
 * When is the previous Wednesday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Wednesday
 *
 * @example
 * // When is the previous Wednesday before Jun, 18, 2021?
 * const result = previousWednesday(new Date(2021, 5, 18))
 * //=> Wed June 16 2021 00:00:00
 */
export default function previousWednesday<DateType extends Date>(
  date: DateType | number
): DateType {
  return previousDay(date, 3)
}
