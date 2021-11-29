import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: '先週のeeeeのp',
  yesterday: '昨日のp',
  today: '今日のp',
  tomorrow: '明日のp',
  nextWeek: '翌週のeeeeのp',
  other: 'P',
}

const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options
) => {
  return formatRelativeLocale[token]
}

export default formatRelative
