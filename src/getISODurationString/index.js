import compareAsc from '../compareAsc/index.js'
import differenceInYears from '../differenceInYears/index.js'
import differenceInMonths from '../differenceInMonths/index.js'
import differenceInDays from '../differenceInDays/index.js'
import differenceInHours from '../differenceInHours/index.js'
import differenceInMinutes from '../differenceInMinutes/index.js'
import differenceInSeconds from '../differenceInSeconds/index.js'
import requiredArgs from '../_lib/requiredArgs/index.js'
import toDate from '../toDate/index.js'
import sub from '../sub/index.js'

// input date1
// input date2
// output <String> P(n)Y(n)M(n)DT(n)H(n)M(n)S

export default function getISODurationString(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  const dateLeft = toDate(dirtyDateLeft)
  const dateRight = toDate(dirtyDateRight)

  const sign = compareAsc(dateLeft, dateRight)

  const Years = Math.abs(differenceInYears(dateLeft, dateRight))

  const remainingMonths = sub(dateLeft, { years: sign * Years })
  const Months = Math.abs(differenceInMonths(remainingMonths, dateRight))

  const remainingDays = sub(remainingMonths, { months: sign * Months })
  const Days = Math.abs(differenceInDays(remainingDays, dateRight))

  const remainingHours = sub(remainingDays, { days: sign * Days })
  const Hours = Math.abs(differenceInHours(remainingHours, dateRight))

  const remainingMinutes = sub(remainingHours, { hours: sign * Hours })
  const Minutes = Math.abs(differenceInMinutes(remainingMinutes, dateRight))

  const remainingSeconds = sub(remainingMinutes, { minutes: sign * Minutes })
  const Seconds = Math.abs(differenceInSeconds(remainingSeconds, dateRight))

  return `P${Years}Y${Months}M${Days}DT${Hours}H${Minutes}M${Seconds}S`
}
