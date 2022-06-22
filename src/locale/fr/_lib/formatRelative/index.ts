import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'dernier à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'prochain à' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
