import toDate from '../toDate/index'

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
 * @returns an index of the date closest to the given date or undefined if no valid value is given
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
export default function closestIndexTo<DateType extends Date>(
  dirtyDateToCompare: DateType | number,
  datesArray: Array<DateType | number>
): number | undefined {
  const dateToCompare = toDate(dirtyDateToCompare)

  if (isNaN(Number(dateToCompare))) return NaN

  const timeToCompare = dateToCompare.getTime()

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
    if (result == null || distance < minDistance) {
      result = index
      minDistance = distance
    }
  })

  return result
}
