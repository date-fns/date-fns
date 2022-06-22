import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'passat a' p",
  yesterday: "'ièr a' p",
  today: "'uèi a' p",
  tomorrow: "'deman a' p",
  nextWeek: "eeee 'a' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
