/**
 * @name isLegitimate
 * @category Common Helpers
 * @summary Is the given date legitimate?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param {*} year of the date to check
 * @param {*} month of the date to check
 * @param {*} day of the date to check
 * @returns {Boolean} the date exists
 * @throws {TypeError} 3 arguments required
 *
 * @example
 * // For the valid date:
 * var result = isLegitimate(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isLegitimate(2018, 1, 31)
 * //=> false
 */
export default function isLegitimate (year, month, day) {
  if (arguments.length < 3) {
    throw new TypeError('3 argument required, but only ' + arguments.length + ' present')
  }

  var date = new Date(year, month, day)
  return (date.getFullYear() === (year | 0) && date.getMonth() === (month | 0) && date.getDate() === (day | 0))
}
