/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @param dateToCompare - the date to compare with
 * @param datesArray - the array to search
 * @returns the date from the array closest to the given date
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
  dateToCompare: Date | number,
  datesArray: Array<Date | number>
): Date | undefined {
  const dateToCompareTransformed = new Date(dateToCompare)

  if (isNaN(Number(dateToCompareTransformed))) return new Date(NaN)

  const timeToCompare = dateToCompareTransformed.getTime()

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

  let result: Date | undefined
  let minDistance: number
  datesArr.forEach(function (dirtyDate) {
    const currentDate = new Date(dirtyDate)

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
