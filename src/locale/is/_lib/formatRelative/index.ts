import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'síðasta' dddd 'kl.' p",
  yesterday: "'í gær kl.' p",
  today: "'í dag kl.' p",
  tomorrow: "'á morgun kl.' p",
  nextWeek: "dddd 'kl.' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
