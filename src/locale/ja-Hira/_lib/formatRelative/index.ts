import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: 'せんしゅうのeeeeのp',
  yesterday: 'きのうのp',
  today: 'きょうのp',
  tomorrow: 'あしたのp',
  nextWeek: 'よくしゅうのeeeeのp',
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
