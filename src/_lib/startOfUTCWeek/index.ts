import toDate from '../../toDate/index'
import type { LocaleOptions, WeekStartOptions } from '../../types'
import requiredArgs from '../requiredArgs/index'
import toInteger from '../toInteger/index'
import { getDefaultOptions } from '../defaultOptions/index'

export default function startOfUTCWeek(
  dirtyDate: Date | number,
  options?: LocaleOptions & WeekStartOptions
): Date {
  requiredArgs(1, arguments)

  const defaultOptions = getDefaultOptions()
  const weekStartsOn = toInteger(
    options?.weekStartsOn ??
      options?.locale?.options?.weekStartsOn ??
      defaultOptions.weekStartsOn ??
      defaultOptions.locale?.options?.weekStartsOn ??
      0
  )

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  const date = toDate(dirtyDate)
  const day = date.getUTCDay()
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setUTCDate(date.getUTCDate() - diff)
  date.setUTCHours(0, 0, 0, 0)
  return date
}
