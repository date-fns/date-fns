import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'שעבר בשעה' p",
  yesterday: "'אתמול בשעה' p",
  today: "'היום בשעה' p",
  tomorrow: "'מחר בשעה' p",
  nextWeek: "eeee 'בשעה' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
