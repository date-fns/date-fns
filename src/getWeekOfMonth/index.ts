import getDate from '../getDate/index'
import getDay from '../getDay/index'
import startOfMonth from '../startOfMonth/index'
import { Locale } from '../locale/types'

// prettier-ignore
type Options = {
  locale?: Locale;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

const defaultOptions: Options = { locale: undefined, weekStartsOn: 0 }

/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 * [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The given date
 * @param options - An object with options
 * @param [options.locale=defaultLocale] - The locale object. See {@link https://date-fns.org/docs/Locale Locale}
 * @param [options.weekStartsOn=0] - The index of the first day of the week (0 - Sunday)
 * @returns The week of month
 *
 * @example // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9));
 */
const getWeekOfMonth = (
  date: Date | number,
  { locale, weekStartsOn } = defaultOptions
): number => {
  weekStartsOn = weekStartsOn ?? locale?.options?.weekStartsOn ?? 0

  const dayOfMonth = getDate(date)

  if (isNaN(dayOfMonth)) {
    return dayOfMonth
  }

  const weekNumber = 1
  const startWeekDay = getDay(startOfMonth(date))
  const lastDayOfFirstWeek =
    startWeekDay >= weekStartsOn
      ? weekStartsOn + 7 - startWeekDay
      : weekStartsOn - startWeekDay

  return dayOfMonth > lastDayOfFirstWeek
    ? weekNumber + Math.ceil((dayOfMonth - lastDayOfFirstWeek) / 7)
    : weekNumber
}

export default getWeekOfMonth
