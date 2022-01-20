import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'গত' eeee 'সময়' p",
  yesterday: "'গতকাল' 'সময়' p",
  today: "'আজ' 'সময়' p",
  tomorrow: "'আগামীকাল' 'সময়' p",
  nextWeek: "eeee 'সময়' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
