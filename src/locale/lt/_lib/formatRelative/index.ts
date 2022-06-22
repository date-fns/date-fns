import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'Praėjusį' eeee p",
  yesterday: "'Vakar' p",
  today: "'Šiandien' p",
  tomorrow: "'Rytoj' p",
  nextWeek: 'eeee p',
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
