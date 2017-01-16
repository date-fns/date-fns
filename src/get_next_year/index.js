var parse = require('../parse/index.js')
var getYear = require('../get_year/index.js')

/**
 * @category Month Helpers
 * @summary Get the next year of the given date.
 *
 * @description
 * Get the next year of the given date.
 *
 * @param {date|String|Number} date - the given date
 * @return {number} the year
 *
 * @example
 * // Which year is after 28 February 2016?
 * var result = getNextYear(new Date(2016, 2, 28));
 * // => 2017
 */
function getNextYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = getYear(date)

  return year + 1
};

module.exports = getNextYear
