import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'पिछले' eeee p",
  yesterday: "'कल' p",
  today: "'आज' p",
  tomorrow: "'कल' p",
  nextWeek: "eeee 'को' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
