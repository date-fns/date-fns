/**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * @param date - the original date
 * @returns the start of a decade
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */
export default function startOfDecade(date: Date | number): Date {
  const result = new Date(date)
  const year = result.getFullYear()
  const decade = Math.floor(year / 10) * 10
  result.setFullYear(decade, 0, 1)
  result.setHours(0, 0, 0, 0)
  return result
}
