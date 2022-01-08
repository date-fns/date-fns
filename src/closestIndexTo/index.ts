import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param {Date | Number} dateToCompare - the date to compare with
 * @param {Array<Date> | Array<number>} datesArray - the array to search
 * @returns {Number | undefined} an index of the date closest to the given date or undefined if no valid value is given
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * const dateToCompare = new Date(2015, 8, 6)
 * const datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * const result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
export default function closestIndexTo(
  dirtyDateToCompare: Date | number,
  dirtyDatesArray: Array<Date | number>
): number | undefined {
  requiredArgs(2, arguments)

  const dateToCompare = toDate(dirtyDateToCompare)

  if (isNaN(Number(dateToCompare))) return NaN

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

  let result: number | undefined
  let minDistance: number
  datesArray.forEach(function (dirtyDate, index) {
    const currentDate = toDate(dirtyDate)

    if (isNaN(Number(currentDate))) {
      result = NaN
      minDistance = NaN
      return
    }

    const distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result == null || distance < Number(minDistance)) {
      result = index
      minDistance = distance
    }
  })

  return result
}
