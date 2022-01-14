import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index'
import type { FormatRelativeFn, FormatRelativeFnOptions } from '../../../types'

const weekdays = [
  'svētdienā',
  'pirmdienā',
  'otrdienā',
  'trešdienā',
  'ceturtdienā',
  'piektdienā',
  'sestdienā',
]

const formatRelativeLocale = {
  lastWeek: (
    date: Date,
    baseDate: Date,
    options?: FormatRelativeFnOptions
  ): string => {
    if (isSameUTCWeek(date, baseDate, options)) {
      return "eeee 'plkst.' p"
    }

    const weekday = weekdays[date.getUTCDay()]
    return "'Pagājušā " + weekday + " plkst.' p"
  },
  yesterday: "'Vakar plkst.' p",
  today: "'Šodien plkst.' p",
  tomorrow: "'Rīt plkst.' p",
  nextWeek: (
    date: Date,
    baseDate: Date,
    options?: FormatRelativeFnOptions
  ): string => {
    if (isSameUTCWeek(date, baseDate, options)) {
      return "eeee 'plkst.' p"
    }

    const weekday = weekdays[date.getUTCDay()]
    return "'Nākamajā " + weekday + " plkst.' p"
  },
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, date, baseDate, options) => {
  const format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}

export default formatRelative
