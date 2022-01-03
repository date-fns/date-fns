import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: (date: Date): string => {
    const weekday = date.getUTCDay()
    const last = weekday === 0 || weekday === 6 ? 'último' : 'última'
    return "'" + last + "' eeee 'às' p"
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, date, _baseDate, _options) => {
  const format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date)
  }

  return format
}

export default formatRelative
