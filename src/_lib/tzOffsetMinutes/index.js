import tzTokenizeDate from '../tzTokenizeDate/index.js'

export default function tzOffsetMinutes (timeZone, date) {
  // Z
  if (!timeZone || timeZone === 'Z') {
    return 0
  }

  let token
  let absoluteOffset

  // ±hh
  token = /^([+-])(\d{2})$/.exec(timeZone)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = /^([+-])(\d{2}):?(\d{2})$/.exec(timeZone)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // IANA time zone
  const [fYear, fMonth, fDay, fHour, fMinute, fSecond] = tzTokenizeDate(date, timeZone)
  const asUTC = Date.UTC(fYear, fMonth - 1, fDay, fHour, fMinute, fSecond)
  const tsMilliSeconds = date.getTime() - (date.getTime() % 1000)
  return -(asUTC - tsMilliSeconds) / 60000
}
