import nextDay from '../nextDay/index'

/**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @param date - the date to start counting from
 * @returns the next Sunday
 *
 * @example
 * // When is the next Sunday after Mar, 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */
export default function nextSunday<DateType extends Date>(
  date: DateType | number
): DateType {
  return nextDay(date, 0)
}
