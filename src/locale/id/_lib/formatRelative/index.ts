import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'lalu pukul' p",
  yesterday: "'Kemarin pukul' p",
  today: "'Hari ini pukul' p",
  tomorrow: "'Besok pukul' p",
  nextWeek: "eeee 'pukul' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
