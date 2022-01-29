import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'geçen hafta' eeee 'saat' p",
  yesterday: "'dün saat' p",
  today: "'bugün saat' p",
  tomorrow: "'yarın saat' p",
  nextWeek: "eeee 'saat' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
