import toDate from '../../toDate/index'
import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'
import getUTCWeek from '../getUTCWeek/index'
import requiredArgs from '../requiredArgs/index'
import toInteger from '../toInteger/index'

/**
 * The {@link setUTCWeek} function options.
 */
export interface SetUTCWeekOptions
  extends LocaleOptions,
    WeekStartOptions,
    FirstWeekContainsDateOptions {}

export default function setUTCWeek(
  dirtyDate: Date | number,
  dirtyWeek: number,
  options?: SetUTCWeekOptions
): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const week = toInteger(dirtyWeek)
  const diff = getUTCWeek(date, options) - week
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
