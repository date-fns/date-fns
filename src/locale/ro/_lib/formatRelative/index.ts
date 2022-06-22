import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "eeee 'trecută la' p",
  yesterday: "'ieri la' p",
  today: "'astăzi la' p",
  tomorrow: "'mâine la' p",
  nextWeek: "eeee 'viitoare la' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
