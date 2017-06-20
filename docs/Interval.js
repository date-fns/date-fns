/**
 * @category Types
 * @summary An object that combines two dates to represent the time interval.
 *
 * @description
 * An object that combines two dates to represent the time interval.
 *
 * @typedef {Object} Interval
 * @property {Date|String|Number} start - the start of the interval
 * @property {Date|String|Number} end - the end of the interval
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 */
var Interval = {}

module.exports = Interval
