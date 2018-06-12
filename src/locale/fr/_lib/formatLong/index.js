import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var dateFormats = {
  full: 'EEEE d MMMM y',
  long: 'd MMMM y',
  medium: 'd MMM y',
  short: 'dd/MM/y'
}

var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
}

var dateTimeFormats = {
  full: "{{date}} 'à' {{time}}",
  long: "{{date}} 'à' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
}

var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
}
var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'DD/MM/YYYY',
  LL: 'Do MMMM YYYY',
  LLL: 'Do MMMM YYYY HH:mm',
  LLLL: 'dddd, Do MMMM YYYY HH:mm'
})

export default formatLong
