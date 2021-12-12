import type { FormatRelativeToken } from '../../../types'
import { FormatRelativeFnOptions } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'पिछले' eeee p",
  yesterday: "'कल' p",
  today: "'आज' p",
  tomorrow: "'कल' p",
  nextWeek: "eeee 'को' p",
  other: 'P',
}

export default function formatRelative(
  token: FormatRelativeToken,
  _date: Date | number,
  _baseDate: Date | number,
  _options: FormatRelativeFnOptions
) {
  return formatRelativeLocale[token]
}
