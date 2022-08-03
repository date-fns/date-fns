import previousDay from '../previousDay/index'

/**
 * @name previousSaturday
 * @category Weekday Helpers
 * @summary When is the previous Saturday?
 *
 * @description
 * When is the previous Saturday?
 *
 * @param date - the date to start counting from
 * @returns the previous Saturday
 *
 * @example
 * // When is the previous Saturday before Jun, 20, 2021?
 * const result = previousSaturday(new Date(2021, 5, 20))
 * //=> Sat June 19 2021 00:00:00
 */
export default function previousSaturday<DateType extends Date>(
  date: DateType | number
): DateType {
  return previousDay(date, 6)
}
