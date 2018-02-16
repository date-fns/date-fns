import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'M/d/yy',
}

var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a',
}

var dateTimeFormats = {
  full: "{1} 'at' {0}",
  long: "{1} 'at' {0}",
  medium: '{1}, {0}',
  short: '{1}, {0}',
}

var formatLong = {
  date: buildFormatLongFn(dateFormats, 'full'),
  time: buildFormatLongFn(timeFormats, 'full'),
  dateTime: buildFormatLongFn(dateTimeFormats, 'full')
}

export default formatLong
