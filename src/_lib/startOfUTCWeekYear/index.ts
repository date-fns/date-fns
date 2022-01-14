import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'
import getUTCWeekYear from '../getUTCWeekYear/index'
import requiredArgs from '../requiredArgs/index'
import startOfUTCWeek from '../startOfUTCWeek/index'
import toInteger from '../toInteger/index'

export default function startOfUTCWeekYear(
  dirtyDate: Date | number,
  dirtyOptions?: LocaleOptions & FirstWeekContainsDateOptions & WeekStartOptions
): Date {
  requiredArgs(1, arguments)

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
