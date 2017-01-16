var parse = require('../parse/index.js')

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date, is no params then default to new Date()
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  dirtyDate = (typeof dirtyDate !== 'undefined') ? dirtyDate : new Date()

  var date = parse(dirtyDate)
  var year = date.getFullYear()

  return year
}

module.exports = getYear
