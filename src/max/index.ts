/**
 * @name max
 * @category Common Helpers
 * @summary Returns the latest of the given dates.
 *
 * @description
 * Returns the latest of the given dates.
 *
 * @param dates - the dates to compare
 * @returns the latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */
export default function max(dates: Array<Date | number>): Date {
  let result: Date | undefined

  dates.forEach((date) => {
    const current = new Date(date)
    if (result === undefined || result < current || isNaN(+current)) {
      result = current
    }
  })

  return result || new Date(NaN)
}
