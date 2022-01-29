import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'ôfrûne' eeee 'om' p",
  yesterday: "'juster om' p",
  today: "'hjoed om' p",
  tomorrow: "'moarn om' p",
  nextWeek: "eeee 'om' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
