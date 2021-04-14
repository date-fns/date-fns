import { FormatLong } from '../../../locale/types'

function dateLongFormatter(pattern: string, formatLong: FormatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({ width: 'short' })
    case 'PP':
      return formatLong.date({ width: 'medium' })
    case 'PPP':
      return formatLong.date({ width: 'long' })
    case 'PPPP':
    default:
      return formatLong.date({ width: 'full' })
  }
}

function timeLongFormatter(pattern: string, formatLong: FormatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({ width: 'short' })
    case 'pp':
      return formatLong.time({ width: 'medium' })
    case 'ppp':
      return formatLong.time({ width: 'long' })
    case 'pppp':
    default:
      return formatLong.time({ width: 'full' })
  }
}

function dateTimeLongFormatter(pattern: string, formatLong: FormatLong) {
  const matchResult = pattern.match(/(P+)(p+)?/)
  if (matchResult === null) {
    throw new Error("no match found!"); // TODO: implement proper error handling
  }

  const datePattern = matchResult[1]
  const timePattern = matchResult[2]

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong)
  }

  let dateTimeFormat

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({ width: 'short' })
      break
    case 'PP':
      dateTimeFormat = formatLong.dateTime({ width: 'medium' })
      break
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({ width: 'long' })
      break
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({ width: 'full' })
      break
  }

  return dateTimeFormat
    .replace('{{date}}', dateLongFormatter(datePattern, formatLong))
    .replace('{{time}}', timeLongFormatter(timePattern, formatLong))
}

const FORMATTERS = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
}

export default FORMATTERS
