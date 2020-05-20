import toDate from '../toDate/index.js'

/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now, `closestIndexTo` doesn't throw an exception
 *   when the second argument is not an array, and returns Invalid Date instead.
 *
 * @param dateToCompare - The date to compare with
 * @param datesArray - The array to search
 * @returns an index of the date closest to the given date
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
  dirtyDatesArray: (Date | number)[]
) {
  const dateToCompare = toDate(dirtyDateToCompare)

  if (isNaN(dateToCompare.getTime())) {
    return NaN
  }

  const timeToCompare = dateToCompare.getTime()

  const datesArray
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

  const result
  const minDistance
  datesArray.forEach(function (dirtyDate: Date | number, index) {
    const currentDate = toDate(dirtyDate)

    if (isNaN(currentDate.getTime())) {
      result = NaN
      minDistance = NaN
      return
    }

    const distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result == null || distance < minDistance) {
      result = index
      minDistance = distance
    }
  })

  return result
}
