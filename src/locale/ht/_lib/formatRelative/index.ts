import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'pase nan lè' p",
  yesterday: "'yè nan lè' p",
  today: "'jodi a' p",
  tomorrow: "'demen nan lè' p'",
  nextWeek: "eeee 'pwochen nan lè' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
