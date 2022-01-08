import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'
import type { FormatLong } from '../../../types'

const dateFormats = {
  full: "EEEE, do 'de' MMMM y",
  long: 'y-MMMM-dd',
  medium: 'y-MMM-dd',
  short: 'yyyy-MM-dd',
}

const timeFormats = {
  full: "Ho 'horo kaj' m:ss zzzz",
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm',
}

const dateTimeFormats = {
  any: '{{date}} {{time}}',
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
    defaultWidth: 'any',
  }),
}

export default formatLong
