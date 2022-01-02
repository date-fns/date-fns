import type { FormatLong } from '../../../types'
import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'

const dateFormats = {
  full: 'EEEE, dd MMMM yyyy',
  long: 'dd MMMM yyyy',
  medium: 'dd MMM yyyy',
  short: 'dd/MM/yyyy',
}

const timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'H:mm',
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
