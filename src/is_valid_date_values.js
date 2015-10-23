var isValid = require('./is_valid')

/**
 * @category Common Helpers
 * @summary Is the date constructed from the given values exist?
 *
 * @description
 * Validates that the given values are within acceptable ranges,
 * e. g. the hour value should be within range [0..23], the second value within [0..59] etc.
 *
 * @param {Number} year
 * @param {Number} month
 * @param {Number} [day=1]
 * @param {Number} [hours=0]
 * @param {Number} [minutes=0]
 * @param {Number} [seconds=0]
 * @param {Number} [milliseconds=0]
 * @returns {Boolean} all values are valid
 *
 * @example
 * // For the existing date:
 * var result = isValidDateValues(new Date(2014, 1, 28, 12, 0))
 * //=> true
 *
 * @example
 * // For the impossible date (29 February of non-leap year):
 * var result = isValidDateValues(new Date(2014, 1, 29, 12, 0))
 * //=> false
 */
var isValidDateValues = function(year, month, day, hours, minutes, seconds, milliseconds) {
  if (year >= 0 && year < 100) {
    year = 1900 + year
  }

  day = day || 1
  hours = hours || 0
  minutes = minutes || 0
  seconds = seconds || 0
  milliseconds = milliseconds || 0

  var date = new Date(year, month, day, hours, minutes, seconds, milliseconds)

  return isValid(date)
    && date.getFullYear() == year
    && date.getMonth() == month
    && date.getDate() == day
    && date.getHours() == hours
    && date.getMinutes() == minutes
    && date.getSeconds() == seconds
    && date.getMilliseconds() == milliseconds
}

module.exports = isValidDateValues

