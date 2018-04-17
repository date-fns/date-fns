import getUTCWeekYear from '../getUTCWeekYear/index.js'
import startOfUTCWeek from '../startOfUTCWeek/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function startOfUTCWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeFirstWeekContainsDate = locale &&
    locale.options &&
    locale.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate === undefined
      ? 1
      : Number(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate === undefined
      ? defaultFirstWeekContainsDate
      : Number(options.firstWeekContainsDate)

  var year = getUTCWeekYear(dirtyDate, dirtyOptions)
  var firstWeek = new Date(0)
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate)
  firstWeek.setUTCHours(0, 0, 0, 0)
  var date = startOfUTCWeek(firstWeek, dirtyOptions)
  return date
}
