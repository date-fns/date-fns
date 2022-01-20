import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'նախորդ' eeee p'֊ին'",
  yesterday: "'երեկ' p'֊ին'",
  today: "'այսօր' p'֊ին'",
  tomorrow: "'վաղը' p'֊ին'",
  nextWeek: "'հաջորդ' eeee p'֊ին'",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
