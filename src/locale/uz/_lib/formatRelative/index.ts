import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'oldingi' eeee p 'da'",
  yesterday: "'kecha' p 'da'",
  today: "'bugun' p 'da'",
  tomorrow: "'ertaga' p 'da'",
  nextWeek: "eeee p 'da'",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
