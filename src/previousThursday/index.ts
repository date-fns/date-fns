import previousDay from '../previousDay/index'

/**
 * @name previousThursday
 * @category Weekday Helpers
 * @summary When is the previous Thursday?
 *
 * @description
 * When is the previous Thursday?
 *
 * @param date - the date to start counting from
 * @returns the previous Thursday
 *
 * @example
 * // When is the previous Thursday before Jun, 18, 2021?
 * const result = previousThursday(new Date(2021, 5, 18))
 * //=> Thu June 17 2021 00:00:00
 */
export default function previousThursday<DateType extends Date>(
  date: DateType | number
): DateType {
  return previousDay(date, 4)
}
