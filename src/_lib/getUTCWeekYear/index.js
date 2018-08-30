import toInteger from '../toInteger/index.js'
import toDate from '../../toDate/index.js'
import startOfUTCWeek from '../startOfUTCWeek/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function getUTCWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions)
  var year = date.getUTCFullYear()

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeFirstWeekContainsDate = locale &&
    locale.options &&
    locale.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate)

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  }

  var firstWeekOfNextYear = new Date(0)
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate)
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0)
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions)

  var firstWeekOfThisYear = new Date(0)
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate)
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0)
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
