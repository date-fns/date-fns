import toInteger from '../toInteger/index.js'
import getUTCWeekYear from '../getUTCWeekYear/index.js'
import startOfUTCWeek from '../startOfUTCWeek/index.js'
import requiredArgs from '../requiredArgs/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function startOfUTCWeekYear(
  dirtyDate: Date | number,
  dirtyOptions
) {
  const options = dirtyOptions || {}
  const locale = options.locale
  const localeFirstWeekContainsDate =
    locale && locale.options && locale.options.firstWeekContainsDate
  const defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate)
  const firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate)

  const year = getUTCWeekYear(dirtyDate, dirtyOptions)
  const firstWeek = new Date(0)
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate)
  firstWeek.setUTCHours(0, 0, 0, 0)
  const date = startOfUTCWeek(firstWeek, dirtyOptions)
  return date
}
