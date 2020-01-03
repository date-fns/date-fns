import toDate from '../toDate/index.js'
import getDaysInMonth from '../getDaysInMonth/index.js'
import toInteger from '../_lib/toInteger/index.js'

/**
 * @name add
 * @category Combined time Helpers
 * @summary Add the specified milliseconds, seconds, minutes, hours, days, months and years to the given date.
 *
 * @description
 * Add the specified milliseconds, seconds, minutes, hours, days, months and years to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Object} duration - the object with milliseconds, seconds, minutes, hours, days, months and years to be added
 *
 * | Key            | Description                          |
 * |----------------|------------------------------------- |
 * | milliseconds   | Amount of milliseconds to be added   |
 * | seconds        | Amount of seconds to be added        |
 * | minutes        | Amount of minutes to be added        |
 * | hours          | Amount of hours to be added          |
 * | days           | Amount of days to be added           |
 * | weeks          | Amount of weeks to be added          |
 * | months         | Amount of months to be added         |
 * | years          | Amount of years to be added          |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 'Mon Sep 01 2014 10:19:50 GMT+0530 (India Standard Time)':
 * var result = add(new Date(2014, 8, 1, 10, 19, 50, 10000), {
 *   milliseconds: 30000,
 *   seconds: 30,
 *   minutes: 9,
 *   hours: 5,
 *   days: 7,
 *   weeks: 1,
 *   months: 24,
 *   years: 2
 * })
 * // => Sat Sep 15 2018 15:30:00 GMT+0530 (India Standard Time)
 */
export default function add(dirtyDate, duration) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }
  if (!duration || typeof duration !== 'object')
    throw new RangeError('duration must be an object')

  const finalDate = toDate(dirtyDate)

  if (Object.keys(duration).length === 0) {
    return finalDate
  }
  let milliseconds =
    'milliseconds' in duration ? toInteger(duration.milliseconds) : 0
  let seconds = 'seconds' in duration ? toInteger(duration.seconds) : 0
  let minutes = 'minutes' in duration ? toInteger(duration.minutes) : 0
  let hours = 'hours' in duration ? toInteger(duration.hours) : 0
  let days = 'days' in duration ? toInteger(duration.days) : 0
  let months = 'months' in duration ? toInteger(duration.months) : 0
  const weeks = 'weeks' in duration ? toInteger(duration.weeks) : 0
  const years = 'years' in duration ? toInteger(duration.years) : 0

  months += years * 12
  let desiredMonth = finalDate.getMonth() + months
  let dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(finalDate.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  let daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  finalDate.setMonth(desiredMonth, Math.min(daysInMonth, finalDate.getDate()))
  days += weeks * 7
  hours += days * 24
  minutes += hours * 60
  seconds += minutes * 60
  milliseconds += seconds * 1000
  finalDate.setTime(finalDate.getTime() + milliseconds)
  return finalDate
}
