import nextDay from '../nextDay/index'

/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @param date - the date to start counting from
 * @returns the next Monday
 *
 * @example
 * // When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * //=> Mon Mar 23 2020 00:00:00
 */
export default function nextMonday<DateType extends Date>(
  date: DateType | number
): DateType {
  return nextDay(date, 1)
}
