import toDate from '../to_date/index.js'

/**
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date} the new date with the minutes setted
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 * */
export default function setMinutes (dirtyDate, minutes, options) {
  var date = toDate(dirtyDate, options)
  date.setMinutes(minutes)
  return date
}

