/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @param dates - the dates to compare
 * @returns the earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */
export default function min(dates: Array<Date | number>): Date {
  let result: Date | undefined

  dates.forEach((date) => {
    const current = new Date(date)
    if (result === undefined || result > current || isNaN(+current)) {
      result = current
    }
  })

  return result || new Date(NaN)
}
