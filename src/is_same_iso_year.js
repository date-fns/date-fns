var startOfISOYear = require('./start_of_iso_year')

/**
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dirtyDateLeft - the first date to check
 * @param {Date|String|Number} dirtyDateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO year
 */
var isSameISOYear = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft)
  var dateRightStartOfYear = startOfISOYear(dirtyDateRight)
  console.log(dateLeftStartOfYear, dateRightStartOfYear)

  return(
    dateLeftStartOfYear.getTime() == dateRightStartOfYear.getTime()
  )
}

module.exports = isSameISOYear

