import tzMakeDateTimeFormat from '../tzMakeDateTimeFormat/index.js'

export default function tzTokenizeDate (date, timeZone) {
  const dtf = tzMakeDateTimeFormat(timeZone)
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date)
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
}

function partsOffset (dtf, date) {
  const formatted = dtf.formatToParts(date)
  const filled = []
  for (let i = 0; i < formatted.length; i++) {
    const {type, value} = formatted[i]
    const pos = typeToPos[type]

    if (pos >= 0) {
      filled[pos] = parseInt(value, 10)
    }
  }
  return filled
}

function hackyOffset (dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, '')
  const parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted)
  const [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
}
