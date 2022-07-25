import type { LocaleOptions, WeekStartOptions } from '../../types'
import requiredArgs from '../requiredArgs/index'
import startOfUTCWeek from '../startOfUTCWeek/index'

/**
 * The {@link isSameUTCWeek} function options.
 */
export interface IsSameUTCWeekOptions extends LocaleOptions, WeekStartOptions {}

export default function isSameUTCWeek(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number,
  options?: IsSameUTCWeekOptions
): boolean {
  requiredArgs(2, arguments)

  const dateLeftStartOfWeek = startOfUTCWeek(dirtyDateLeft, options)
  const dateRightStartOfWeek = startOfUTCWeek(dirtyDateRight, options)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}
