import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'اللي جاي الساعة' p",
  yesterday: "'إمبارح الساعة' p",
  today: "'النهاردة الساعة' p",
  tomorrow: "'بكرة الساعة' p",
  nextWeek: "eeee 'الساعة' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
