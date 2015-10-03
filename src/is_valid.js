/**
 * Is the given date valid?
 * @param {Date|String|Number} date to check
 * @returns {Boolean} date is valid
 */
var isValid = function(date) {
  if (date instanceof Date) {
    return !isNaN((new Date(date)).getTime())
  } else {
    throw new TypeError(toString.call(date) + ' is not a date')
  }
}

module.exports = isValid

