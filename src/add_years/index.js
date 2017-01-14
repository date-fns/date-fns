import addMonths from '../add_months/index.js'

/**
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date} the new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * var result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 * */
export default function addYears (dirtyDate, amount, options) {
  return addMonths(dirtyDate, amount * 12, options)
}

