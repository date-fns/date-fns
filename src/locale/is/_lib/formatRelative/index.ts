import type { FormatRelativeFn, FormatRelativeToken } from '../../../types'

const formatRelativeLocale: Record<FormatRelativeToken, string> = {
  lastWeek: "'síðasti' eeee 'kl.' p",
  yesterday: "'í gær kl.' p",
  today: "'í dag kl.' p",
  tomorrow: "'á morgun kl.' p",
  nextWeek: "eeee 'kl.' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
