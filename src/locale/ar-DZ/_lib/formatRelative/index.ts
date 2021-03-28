import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'أخر' eeee 'عند' p",
  yesterday: "'أمس عند' p",
  today: "'اليوم عند' p",
  tomorrow: "'غداً عند' p",
  nextWeek: "eeee 'عند' p",
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
