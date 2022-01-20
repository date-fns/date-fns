import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: 'せんしゅうのeeeeのp',
  yesterday: 'きのうのp',
  today: 'きょうのp',
  tomorrow: 'あしたのp',
  nextWeek: 'よくしゅうのeeeeのp',
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
