import type { FormatLong } from '../../../types';
import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'

const dateFormats = {
  full: "EEEE, do MMMM y 'с.'",
  long: "do MMMM y 'с.'",
  medium: "d MMM y 'с.'",
  short: 'dd.MM.y',
}

const timeFormats = {
  full: 'H:mm:ss zzzz',
  long: 'H:mm:ss z',
  medium: 'H:mm:ss',
  short: 'H:mm',
}

const dateTimeFormats = {
  full: "{{date}} 'соати' {{time}}",
  long: "{{date}} 'соати' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}',
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
