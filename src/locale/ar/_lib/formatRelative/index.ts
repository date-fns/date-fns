import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'إلي فات مع' p",
  yesterday: "'البارح مع' p",
  today: "'اليوم مع' p",
  tomorrow: "'غدوة مع' p",
  nextWeek: "eeee 'الجمعة الجاية مع' p 'نهار'",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
