const getDateFromFormat = require('./date-fns-wrapper')

const dateFormat = 'EEE, LLL dd, yyyy, hh:mm:ss.sss'
const duration = {
  years: 0,
  months: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}
const locale = 'en-US'

const result = getDateFromFormat(dateFormat, duration, locale)
console.log(result)
