import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'ўтган' eeee p 'да'",
  yesterday: "'кеча' p 'да'",
  today: "'бугун' p 'да'",
  tomorrow: "'эртага' p 'да'",
  nextWeek: "eeee p 'да'",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
