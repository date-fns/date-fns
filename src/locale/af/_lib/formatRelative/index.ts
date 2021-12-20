import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'verlede' eeee 'om' p",
  yesterday: "'gister om' p",
  today: "'vandag om' p",
  tomorrow: "'môre om' p",
  nextWeek: "eeee 'om' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => {
  return formatRelativeLocale[token]
}

export default formatRelative
