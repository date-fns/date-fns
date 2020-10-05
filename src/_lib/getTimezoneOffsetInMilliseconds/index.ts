const MILLISECONDS_IN_MINUTE = 60000

function getDateMillisecondsPart(date: Date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE
}

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
export default function getTimezoneOffsetInMilliseconds(
  dirtyDate: Date | number
): number {
  const date = new Date((dirtyDate as Date).getTime())
  const baseTimezoneOffset = Math.ceil(date.getTimezoneOffset())
  date.setSeconds(0, 0)
  const hasNegativeUTCOffset = baseTimezoneOffset > 0
  const millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset
    ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) %
      MILLISECONDS_IN_MINUTE
    : getDateMillisecondsPart(date)

  return (
    baseTimezoneOffset * MILLISECONDS_IN_MINUTE +
    millisecondsPartOfTimezoneOffset
  )
}
