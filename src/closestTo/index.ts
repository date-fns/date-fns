import constructFrom from '../constructFrom/index'
import toDate from '../toDate/index'

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
 * @returns the date from the array closest to the given date or undefined if no valid value is given
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
export default function closestTo<DateType extends Date>(
  dateToCompare: DateType | number,
  datesArray: Array<DateType | number>
): DateType | undefined {
  const convertedDateToCompare = toDate(dateToCompare)

  if (isNaN(Number(convertedDateToCompare)))
    return constructFrom(dateToCompare, NaN)

  const timeToCompare = convertedDateToCompare.getTime()

  let result: DateType | undefined
  let minDistance: number
  datesArray.forEach((dirtyDate) => {
    const currentDate = toDate(dirtyDate)

    if (isNaN(Number(currentDate))) {
      result = constructFrom(dateToCompare, NaN)
      minDistance = NaN
      return
    }

    const distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result == null || distance < minDistance) {
      result = currentDate
      minDistance = distance
    }
  })

  return result
}
