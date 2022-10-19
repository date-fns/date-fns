import differenceInCalendarDays from '../differenceInCalendarDays/index'
import format from '../format/index'
import type { FormatRelativeToken } from '../locale/types'
import toDate from '../toDate/index'
import type { LocaleOptions, WeekStartOptions } from '../types'
import defaultLocale from '../_lib/defaultLocale/index'
import { getDefaultOptions } from '../_lib/defaultOptions/index'
import type { ReadonlyDate } from '../types'

/**
 * The {@link formatRelative} function options.
 */
export interface FormatRelativeOptions
  extends LocaleOptions,
    WeekStartOptions {}

/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @param date - the date to format
 * @param baseDate - the date to compare with
 * @param options - an object with options.
 * @returns the date in words
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(addDays(new Date(), -6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */
export default function formatRelative<DateType extends Date>(
  dirtyDate: ReadonlyDate<DateType> | number,
  dirtyBaseDate: ReadonlyDate<DateType> | number,
  options?: FormatRelativeOptions
): string {
  const date = toDate(dirtyDate)
  const baseDate = toDate(dirtyBaseDate)

  const defaultOptions = getDefaultOptions()
  const locale = options?.locale ?? defaultOptions.locale ?? defaultLocale
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  if (!locale.formatRelative) {
    throw new RangeError('locale must contain formatRelative property')
  }

  const diff = differenceInCalendarDays(date, baseDate)

  if (isNaN(diff)) {
    throw new RangeError('Invalid time value')
  }

  let token: FormatRelativeToken
  if (diff < -6) {
    token = 'other'
  } else if (diff < -1) {
    token = 'lastWeek'
  } else if (diff < 0) {
    token = 'yesterday'
  } else if (diff < 1) {
    token = 'today'
  } else if (diff < 2) {
    token = 'tomorrow'
  } else if (diff < 7) {
    token = 'nextWeek'
  } else {
    token = 'other'
  }

  const formatStr = locale.formatRelative(token, date, baseDate, {
    locale,
    weekStartsOn,
  })
  return format(date, formatStr, { locale, weekStartsOn })
}
