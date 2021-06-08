/**
 * Months Enum.
 *
 * @name Month
 * @constant
 * @type {Object.<string, number>}
 * @default
 */

export const Month = {
  Jan : 0,
  Feb : 1,
  Mar : 2,
  Apr : 3,
  May : 4,
  Jun : 5,
  Jul : 6,
  Aug : 7,
  Sep : 8,
  Oct : 9,
  Nov : 10,
  Dec : 11,
}

/**
 * Days of week Enum.
 *
 * @name DayOfWeek
 * @constant
 * @type {Object.<string, number>}
 * @default
 */
 export const DayOfWeek = {
  Sun : 0,
  Mon : 1,
  Tue : 2,
  Wed : 3,
  Thu : 4,
  Fri : 5,
  Sat : 6,
}

/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
export const daysInWeek = 7

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
export const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
export const millisecondsInMinute = 60000

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
export const millisecondsInHour = 3600000

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
export const millisecondsInSecond = 1000

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
export const minTime = -maxTime

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
export const minutesInHour = 60

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
export const monthsInQuarter = 3

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
export const monthsInYear = 12

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
export const quartersInYear = 4

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
export const secondsInHour = 3600

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
export const secondsInMinute = 60
