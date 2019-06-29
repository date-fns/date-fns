var formatRelativeLocale: any = {
  lastWeek: "'上個' eeee p",
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: "'下個' eeee p",
  other: 'P'
}

export default function formatRelative(
  token: any,
  _date: any,
  _baseDate: any,
  _options: any
) {
  return formatRelativeLocale[token]
}
