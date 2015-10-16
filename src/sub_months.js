var addMonths = require('./add_months')

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of month from the gien date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of months to be subtracted
 * @returns {Date} new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
var subMonths = function(dirtyDate, amount) {
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths

