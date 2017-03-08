import toDate from '../toDate/index.js'

/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the date from the array closest to the given date
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * var dateToCompare = new Date(2015, 8, 6)
 * var result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
export default function closestTo (dirtyDateToCompare, dirtyDatesArray, dirtyOptions) {
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions)

  if (isNaN(dateToCompare)) {
    return new Date(NaN)
  }

  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate) {
    var currentDate = toDate(dirtyDate, dirtyOptions)

    if (isNaN(currentDate)) {
      result = new Date(NaN)
      minDistance = NaN
      return
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = currentDate
      minDistance = distance
    }
  })

  return result
}
