import format from '../format'

// This FORMATS variable contains all the pre-defined date, time, and datetime formats.
// For each standard used, there is a link for the source.
const FORMATS = {
  // RFC7231 source: https://tools.ietf.org/html/rfc7231#section-7.1.1.1.
  RFC_7231: "E, dd MMM yyyy HH:mm:ss 'GMT'",
  RFC_7231_DATE: 'E, dd MMM yyyy',
  RFC_7231_TIME: "HH:mm:ss 'GMT'",
  // ISO8601 source: http://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm.
  ISO_8601: 'yyyyMMddTHHmmss',
  ISO_8601_EXTENDED: 'yyyy-MM-ddTHH:mm:ss',
  // ISO9075 source: https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_get-format.
  ISO_9075: 'yyyy-MM-dd HH:mm:ss',
  ISO_9075_DATE: 'yyyy-MM-dd',
  ISO_9075_TIME: 'HH:mm:ss'
}

export default function formatConstants(
  dirtyDate,
  standardFormat,
  dirtyOptions
) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  // Check if the standard format passed in the parameter is valid.
  if (FORMATS[standardFormat] === undefined) {
    throw new TypeError(
      `Invalid format, expected any of {${Object.keys(FORMATS).join(' | ')}}`
    )
  }

  // Since we have the `format` function already, we can just re-use it.
  return format(dirtyDate, FORMATS, dirtyOptions)
}
