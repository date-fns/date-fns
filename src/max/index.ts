import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
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
export default function max(dirtyDatesArray: Array<Date | number>): Date {
  requiredArgs(1, arguments)

  let datesArray: Array<Date | number>
  // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray

    // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray)
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN)
  }

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
