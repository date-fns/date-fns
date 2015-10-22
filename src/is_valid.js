/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} date is valid
 * @throws {TypeError} Argument must be an instance of Date
 */
var isValid = function(date) {
  if (date instanceof Date) {
    return !isNaN((new Date(date)).getTime())
  } else {
    throw new TypeError(toString.call(date) + ' is not a date')
  }
}

module.exports = isValid

