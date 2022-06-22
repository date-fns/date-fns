import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'forrige' eeee 'kl.' p",
  yesterday: "'i går kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgen kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
