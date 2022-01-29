import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee'ที่แล้วเวลา' p",
  yesterday: "'เมื่อวานนี้เวลา' p",
  today: "'วันนี้เวลา' p",
  tomorrow: "'พรุ่งนี้เวลา' p",
  nextWeek: "eeee 'เวลา' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
