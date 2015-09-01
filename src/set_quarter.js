var parse = require('./parse')
var setMonth = require('./set_month')

/**
 * Sets quarter of year to passed date.
 * @param {date|string} dirtyDate
 * @param {number} quarter
 * @returns {date} (new date)
 *
 * @example set second quarter to date 2 July 2014
 * var result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
var setQuarter = function(dirtyDate, quarter) {
  var date = parse(dirtyDate)
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1
  var diff = quarter - oldQuarter
  return setMonth(date, date.getMonth() + diff * 3)
}

module.exports = setQuarter

