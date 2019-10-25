import addSeconds from '../addSeconds/index.js'
import addMinutes from '../addMinutes/index.js'
import addHours from '../addHours/index.js'
import addDays from '../addDays/index.js'
import addWeeks from '../addWeeks/index.js'
import addMonths from '../addMonths/index.js'
import addQuarters from '../addQuarters/index.js'
import addYears from '../addYears/index.js'
import toDate from '../toDate/index'
import toInteger from '../_lib/toInteger/index.js'

const DEFAULT = {
  hours: 0,
  years: 0,
  days: 0,
  quarters: 0,
  weeks: 0,
  months: 0,
  minutes: 0,
  seconds: 0
}

/**
 * @name add
 * @category Combined time Helpers
 * @summary Add the specified seconds, minutes, hours, days, months, quarters and years to the given date.
 *
 * @description
 * Add the specified seconds, minutes, hours, days, months, quarters and years to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Object} amount - the object with seconds, minutes, hours, days, months, quarters and years to be added
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours, 15 minutes and 30 seconds to 10 July 2014 12:45:00:
 * var result = add(new Date(2014, 6, 10, 12, 45, 0), {minutes: 15, hours: 2, seconds: 30})
 * //=> Thu Jul 10 2014 15:00:30
 */
export default function add(dirtyDate, givenAmount) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }
  if (typeof givenAmount !== 'object' || !Object.keys(givenAmount).length) {
    throw new TypeError(
      '2nd argument expected Object, found ' + typeof givenAmount
    )
  }
  const givenDate = toDate(dirtyDate)
  const dirtyAmount = {
    ...DEFAULT,
    ...givenAmount
  }
  const {
    hours,
    years,
    days,
    quarters,
    weeks,
    months,
    minutes,
    seconds
  } = dirtyAmount
  return addYears(
    addQuarters(
      addMonths(
        addWeeks(
          addDays(
            addHours(
              addMinutes(
                addSeconds(givenDate, toInteger(seconds)),
                toInteger(minutes)
              ),
              toInteger(hours)
            ),
            toInteger(days)
          ),
          toInteger(weeks)
        ),
        toInteger(months)
      ),
      toInteger(quarters)
    ),
    toInteger(years)
  )
}
