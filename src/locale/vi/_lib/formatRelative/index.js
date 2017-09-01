var formatRelativeLocale = {
  lastWeek: 'dddd [tuần trước vào lúc] LT',
  yesterday: '[hôm qua vào lúc] LT',
  today: '[hôm nay vào lúc] LT',
  tomorrow: '[ngày mai vào lúc] LT',
  nextWeek: 'dddd [vào lúc] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
