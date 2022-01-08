import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'pasinta' eeee 'je' p",
  yesterday: "'hieraŭ je' p",
  today: "'hodiaŭ je' p",
  tomorrow: "'morgaŭ je' p",
  nextWeek: "eeee 'je' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
