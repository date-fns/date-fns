import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index.js'

function checkWeek(date, baseDate, options, baseFormat) {
  if (isSameUTCWeek(date, baseDate, options)) {
    return baseFormat // in same week
  } else if (date.getTime() > baseDate.getTime()) {
    return "'下个'" + baseFormat // in next week
  }
  return "'上个'" + baseFormat // in last week
}

var formatRelativeLocale = {
  lastWeek: checkWeek, // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: checkWeek, // days after tomorrow, maybe in this week or next week
  other: 'PP p'
}

export default function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options, 'eeee p')
  }

  return format
}
