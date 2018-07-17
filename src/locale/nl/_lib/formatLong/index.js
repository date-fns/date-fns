import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var dateFormats = {
  full: 'EEEE, d MMMM YYYY',
  long: 'd MMMM YYYY',
  medium: 'd MMMM YYYY',
  short: 'dd-MM-YYYY'
}

var timeFormats = {
  full: 'HH:mm:ss',
  long: 'HH:mm',
  medium: 'HH:mm',
  short: 'HH'
}

var dateTimeFormats = {
  full: "{{date}} 'om' {{time}}",
  long: "{{date}} 'om' {{time}}",
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

export default formatLong
