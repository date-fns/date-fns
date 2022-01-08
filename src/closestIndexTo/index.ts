/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param dateToCompare - the date to compare with
 * @param datesArray - the array to search
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
  dateToCompare: Date | number,
  datesArray: Array<Date | number>
): number | undefined {
  const dateToComp = new Date(dateToCompare)

  if (isNaN(Number(dateToComp))) return NaN

  const timeToCompare = dateToComp.getTime()

  let datesArr: Array<Date | number>
  // `dirtyDatesArray` is undefined or null
  if (datesArray == null) {
    datesArr = []

    // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof datesArray.forEach === 'function') {
    datesArr = datesArray

    // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArr = Array.prototype.slice.call(datesArray)
  }

  let result: number | undefined
  let minDistance: number
  datesArr.forEach(function (dirtyDate, index) {
    const currentDate = new Date(dirtyDate)

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
