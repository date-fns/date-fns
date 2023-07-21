import toDate from '../toDate/index'

/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */
export default function min<DateType extends Date>(
  dates: Array<DateType | number>
): DateType | Date {
  let result: Date | undefined

  dates.forEach(function (dirtyDate: Date | number) {
    let currentDate = toDate(dirtyDate)

    if (
      result === undefined ||
      result > currentDate ||
      isNaN(currentDate.getDate())
    ) {
      result = currentDate
    }
  })

  return result || new Date(NaN)
}
