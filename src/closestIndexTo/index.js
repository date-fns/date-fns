import toDate from '../toDate/index.js'

/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link docs/toDate}
 * @returns {Number} an index of the date closest to the given date
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * var dateToCompare = new Date(2015, 8, 6)
 * var datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * var result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
export default function closestIndexTo (dirtyDateToCompare, dirtyDatesArray, dirtyOptions) {
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions)

  if (isNaN(dateToCompare)) {
    return NaN
  }

  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate, index) {
    var currentDate = toDate(dirtyDate, dirtyOptions)

    if (isNaN(currentDate)) {
      result = NaN
      minDistance = NaN
      return
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = index
      minDistance = distance
    }
  })

  return result
}
