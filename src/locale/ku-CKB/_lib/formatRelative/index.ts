import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'هەفتەی ڕابردوو' eeee 'کاتژمێر' p",
  yesterday: "'دوێنێ کاتژمێر' p",
  today: "'ئەمڕۆ کاتژمێر' p",
  tomorrow: "'بەیانی کاتژمێر' p",
  nextWeek: "eeee 'کاتژمێر' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
