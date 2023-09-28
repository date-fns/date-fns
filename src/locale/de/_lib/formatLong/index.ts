import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'
import type { FormatLong } from '../../../types'

// DIN 5008: https://de.wikipedia.org/wiki/Datumsformat#DIN_5008
const dateFormats = {
  full: 'EEEE, do MMMM y', // Montag, 7. Januar 2018
  long: 'do MMMM yyyy', // 7. Januar 2018
  medium: 'do MMM yyyy', // 7. Jan. 2018
  short: 'dd.MM.yyyy', // 07.01.2018
}

const timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm',
}

const dateTimeFormats = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: '{{date}} {{time}}',
  short: '{{date}} {{time}}',
}

const formatLong: FormatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full',
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full',
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full',
  }),
}

export default formatLong
