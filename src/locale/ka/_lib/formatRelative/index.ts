import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'წინა' eeee p'-ზე'",
  yesterday: "'გუშინ' p'-ზე'",
  today: "'დღეს' p'-ზე'",
  tomorrow: "'ხვალ' p'-ზე'",
  nextWeek: "'შემდეგი' eeee p'-ზე'",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
