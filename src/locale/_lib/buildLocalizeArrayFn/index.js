/**
 * @name buildLocalizeArrayFn
 * @category Locale Helpers
 * @summary Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 * If no `width` is supplied to the options of the resulting function, `defaultWidth` will be used (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultWidth - the default width for the localize function
 * @returns {Function} the resulting function
 *
 * @example
 * var weekdayValues = {
 *   narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
 *   short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
 *   long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
 * }
 * locale.localize.weekdays = buildLocalizeArrayFn(weekdayValues, 'wide')
 * locale.localize.weekdays({width: 'narrow'}) //=> ['Su', 'Mo', ...]
 * locale.localize.weekdays() //=> ['Sunday', 'Monday', ...]
 */
export default function buildLocalizeArrayFn (values, defaultWidth) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {}
    var width = options.width ? String(options.width) : defaultWidth
    return values[width] || values[defaultWidth]
  }
}
