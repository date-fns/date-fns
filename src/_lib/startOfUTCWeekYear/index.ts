import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'
import getUTCWeekYear from '../getUTCWeekYear/index'
import requiredArgs from '../requiredArgs/index'
import startOfUTCWeek from '../startOfUTCWeek/index'
import toInteger from '../toInteger/index'
import { getDefaultOptions } from '../defaultOptions/index'

export default function startOfUTCWeekYear(
  dirtyDate: Date | number,
  options?: LocaleOptions & FirstWeekContainsDateOptions & WeekStartOptions
): Date {
  requiredArgs(1, arguments)

  const defaultOptions = getDefaultOptions()
  const firstWeekContainsDate = toInteger(
    options?.firstWeekContainsDate ??
      options?.locale?.options?.firstWeekContainsDate ??
      defaultOptions.firstWeekContainsDate ??
      defaultOptions.locale?.options?.firstWeekContainsDate ??
      1
  )

  const year = getUTCWeekYear(dirtyDate, options)
  const firstWeek = new Date(0)
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate)
  firstWeek.setUTCHours(0, 0, 0, 0)
  const date = startOfUTCWeek(firstWeek, options)
  return date
}
