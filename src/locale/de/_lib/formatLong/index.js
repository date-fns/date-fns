import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'
// DIN 5008: https://de.wikipedia.org/wiki/Datumsformat#DIN_5008
var dateFormats = {
  full: 'EEEE, do MMMM y',
  long: 'do MMMM y',
  medium: 'do MMM. y',
  short: 'dd.MM.y' // 07.01.2018
}
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
}
var dateTimeFormats = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: '{{date}} {{time}}',
  short: '{{date}} {{time}}'
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
export default formatLong
