import type { LocaleOptions, WeekStartOptions } from '../../types'
import toDate from '../../toDate/index'
import requiredArgs from '../requiredArgs/index'
import toInteger from '../toInteger/index'
import { getDefaultOptions } from '../defaultOptions/index'

export default function setUTCDay(
  dirtyDate: Date | number,
  dirtyDay: Date | number,
  options?: LocaleOptions & WeekStartOptions
): Date {
  requiredArgs(2, arguments)

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
  const day = toInteger(dirtyDay)

  const currentDay = date.getUTCDay()

  const remainder = day % 7
  const dayIndex = (remainder + 7) % 7

  const diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay

  date.setUTCDate(date.getUTCDate() + diff)
  return date
}
