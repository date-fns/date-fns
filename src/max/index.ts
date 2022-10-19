import toDate from '../toDate/index'

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param datesArray - the dates to compare
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
export default function max<DateType extends Date>(
  datesArray: Array<DateType | number>
): DateType | Date {
  let result: Date | undefined
  datesArray.forEach(function (dirtyDate) {
    const currentDate = toDate(dirtyDate)

    if (
      result === undefined ||
      result < currentDate ||
      isNaN(Number(currentDate))
    ) {
      result = currentDate
    }
  })

  return result || new Date(NaN)
}
