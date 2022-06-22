import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'vorige' eeee 'om' p",
  yesterday: "'gisteren om' p",
  today: "'vandaag om' p",
  tomorrow: "'morgen om' p",
  nextWeek: "eeee 'om' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
