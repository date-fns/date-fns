import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'ئ‍ۆتكەن' eeee 'دە' p",
  yesterday: "'تۈنۈگۈن دە' p",
  today: "'بۈگۈن دە' p",
  tomorrow: "'ئەتە دە' p",
  nextWeek: "eeee 'دە' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
