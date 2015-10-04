var addISOYears = require('./add_iso_years')

/**
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of ISO week-numbering years to be subtracted
 * @returns {Date} new date with the ISO week-numbering years subtracted
 */
var subISOYears = function(dirtyDate, amount) {
  return addISOYears(dirtyDate, -amount)
}

module.exports = subISOYears

