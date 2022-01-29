import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'li għadda' 'fil-'p",
  yesterday: "'Il-bieraħ fil-'p",
  today: "'Illum fil-'p",
  tomorrow: "'Għada fil-'p",
  nextWeek: "eeee 'fil-'p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
