import nextDay from '../nextDay/index'

/**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 *
 * @param date - the date to start counting from
 * @returns the next Tuesday
 *
 * @example
 * // When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * //=> Tue Mar 24 2020 00:00:00
 */
export default function nextTuesday<DateType extends Date>(
  date: DateType | number
): DateType {
  return nextDay(date, 2)
}
