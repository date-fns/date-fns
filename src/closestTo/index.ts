import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now, `closestTo` doesn't throw an exception
 *   when the second argument is not an array, and returns Invalid Date instead.
 *
 * @param {Date|Number} dateToCompare - the date to compare with
 * @param {Date[]|Number[]} datesArray - the array to search
 * @returns {Date} the date from the array closest to the given date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
export default function closestTo(
  dirtyDateToCompare: Date | number,
  dirtyDatesArray: Date[] | number[]
): Date {
  requiredArgs(2, arguments)

  const dateToCompare = toDate(dirtyDateToCompare)

  if (isNaN(dateToCompare.getTime())) {
    return new Date(NaN)
  }

  const timeToCompare = dateToCompare.getTime()

  let datesArray: Date[] | number[]
  // `dirtyDatesArray` is undefined or null
  if (dirtyDatesArray == null) {
    datesArray = []

    // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray

    // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray)
  }

  let result, minDistance

  for (let index = 0; index < datesArray.length; index++) {
    const dirtyDate = datesArray[index]
    const currentDate = toDate(dirtyDate)

    if (isNaN(currentDate.getTime())) {
      result = new Date(NaN)
      minDistance = NaN
      continue
    }

    const distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result == null || distance < (minDistance || NaN)) {
      result = currentDate
      minDistance = distance
    }
  }

  return result as Date
}
