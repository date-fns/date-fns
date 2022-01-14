import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'lepas pada jam' p",
  yesterday: "'Semalam pada jam' p",
  today: "'Hari ini pada jam' p",
  tomorrow: "'Esok pada jam' p",
  nextWeek: "eeee 'pada jam' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
