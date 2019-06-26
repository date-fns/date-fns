import toInteger from '../toInteger/index.js'
import getUTCDayOfWeek from '../getUTCDayOfWeek/index.js'
import getUTCDateOfMonth from '../getUTCDateOfMonth/index.js'
import startOfUTCMonth from '../startOfUTCMonth/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function getUTCWeekOfMonth(date, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn =
    locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var startWeekDay = getUTCDayOfWeek(startOfUTCMonth(date))
  var currentWeekDay = getUTCDayOfWeek(date)

  var startWeekDayWithOptions =
    startWeekDay < weekStartsOn ? 7 - weekStartsOn : startWeekDay
  var diff = startWeekDayWithOptions > currentWeekDay ? 7 - weekStartsOn : 0

  return Math.ceil((getUTCDateOfMonth(date) + diff) / 7)
}
