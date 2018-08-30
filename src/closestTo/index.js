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
 * @throws {TypeError} 2 arguments required
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
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions)

  if (isNaN(dateToCompare)) {
    return new Date(NaN)
  }

  var timeToCompare = dateToCompare.getTime()

  var datesArray
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

  var result
  var minDistance
  datesArray.forEach(function (dirtyDate) {
    var currentDate = toDate(dirtyDate, dirtyOptions)

    if (isNaN(currentDate)) {
      result = new Date(NaN)
      minDistance = NaN
      return
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result == null || distance < minDistance) {
      result = currentDate
      minDistance = distance
    }
  })

  return result
}
