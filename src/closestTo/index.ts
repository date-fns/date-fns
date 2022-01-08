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
 * @param {Date | Number} dateToCompare - the date to compare with
 * @param {Array<Date> | Array<number>} datesArray - the array to search
 * @returns {Date | undefined} the date from the array closest to the given date or undefined if no valid value is given
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
  dirtyDatesArray: Array<Date | number>
): Date | undefined {
  requiredArgs(2, arguments)

  const dateToCompare = toDate(dirtyDateToCompare)

  if (isNaN(Number(dateToCompare))) return new Date(NaN)

  const timeToCompare = dateToCompare.getTime()

  let datesArray: Array<Date | number>
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

  let result: Date | undefined
  let minDistance: number
  datesArray.forEach(function (dirtyDate) {
    const currentDate = toDate(dirtyDate)

    if (isNaN(Number(currentDate))) {
      result = new Date(NaN)
      minDistance = NaN
      return
    }

    const distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result == null || distance < Number(minDistance)) {
      result = currentDate
      minDistance = distance
    }
  })

  return result
}
