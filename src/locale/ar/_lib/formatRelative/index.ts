import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'الماضي عند الساعة' p",
  yesterday: "'الأمس عند الساعة' p",
  today: "'اليوم عند الساعة' p",
  tomorrow: "'غدا عند الساعة' p",
  nextWeek: "eeee 'القادم عند الساعة' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
