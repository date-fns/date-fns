import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'diwethaf am' p",
  yesterday: "'ddoe am' p",
  today: "'heddiw am' p",
  tomorrow: "'yfory am' p",
  nextWeek: "eeee 'am' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
