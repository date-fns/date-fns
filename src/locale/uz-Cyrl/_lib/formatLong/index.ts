import type { FormatLong } from '../../../types'
import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'

const dateFormats = {
  full: 'EEEE, do MMMM, y',
  long: 'do MMMM, y',
  medium: 'd MMM, y',
  short: 'dd/MM/yyyy',
}

const timeFormats = {
  full: 'H:mm:ss zzzz',
  long: 'H:mm:ss z',
  medium: 'H:mm:ss',
  short: 'H:mm',
}

const dateTimeFormats = {
  any: '{{date}}, {{time}}',
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
