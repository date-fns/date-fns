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
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} an index of the date closest to the given date
 * @throws {TypeError} 2 arguments required
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
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions)

  if (isNaN(dateToCompare)) {
    return NaN
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
  datesArray.forEach(function (dirtyDate, index) {
    var currentDate = toDate(dirtyDate, dirtyOptions)

    if (isNaN(currentDate)) {
      result = NaN
      minDistance = NaN
      return
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result == null || distance < minDistance) {
      result = index
      minDistance = distance
    }
  })

  return result
}
