import previousDay from '../previousDay/index'

/**
 * @name previousTuesday
 * @category Weekday Helpers
 * @summary When is the previous Tuesday?
 *
 * @description
 * When is the previous Tuesday?
 *
 * @param date - the date to start counting from
 * @returns the previous Tuesday
 *
 * @example
 * // When is the previous Tuesday before Jun, 18, 2021?
 * const result = previousTuesday(new Date(2021, 5, 18))
 * //=> Tue June 15 2021 00:00:00
 */
export default function previousTuesday<DateType extends Date>(
  date: DateType | number
): DateType {
  return previousDay(date, 2)
}
