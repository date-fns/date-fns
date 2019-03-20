import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

// v1
// var formatLong = buildFormatLongFn({
//   LT: 'h:mm aa',
//   LTS: 'h:mm:ss aa',
//   L: 'MM/DD/YYYY',
//   LL: 'MMMM D YYYY',
//   LLL: 'MMMM D YYYY h:mm aa',
//   LLLL: 'dddd, MMMM D YYYY h:mm aa'
// })

var dateFormats = {
  full: 'EEEE d. MMMM y',
  long: 'd. MMMM y',
  medium: 'd. M. y',
  short: 'dd.MM.yy'
}

var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
}

var dateTimeFormats = {
  full: "{{date}} 'v' {{time}}",
  long: "{{date}} 'v' {{time}}",
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
