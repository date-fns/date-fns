import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'viime' eeee 'klo' p",
  yesterday: "'eilen klo' p",
  today: "'tänään klo' p",
  tomorrow: "'huomenna klo' p",
  nextWeek: "'ensi' eeee 'klo' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
