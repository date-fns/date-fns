import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'지난' eeee p",
  yesterday: "'어제' p",
  today: "'오늘' p",
  tomorrow: "'내일' p",
  nextWeek: "'다음' eeee p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
