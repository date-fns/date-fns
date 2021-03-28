import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'sonuncu' eeee p -'də'",
  yesterday: "'dünən' p -'də'",
  today: "'bugün' p -'də'",
  tomorrow: "'sabah' p -'də'",
  nextWeek: "eeee p -'də'",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options
) => {
  return formatRelativeLocale[token]
}

export default formatRelative
