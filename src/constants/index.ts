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
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
export const daysInYear: number = 365.2425

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
 * Milliseconds in 1 week.
 *
 * @name millisecondsInWeek
 * @constant
 * @type {number}
 * @default
 */
export const millisecondsInWeek = 604800000

/**
 * Milliseconds in 1 day.
 *
 * @name millisecondsInDay
 * @constant
 * @type {number}
 * @default
 */
export const millisecondsInDay = 86400000

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
 * Minutes in 1 year.
 *
 * @name minutesInYear
 * @constant
 * @type {number}
 * @default
 */
export const minutesInYear = 525600

/**
 * Minutes in 1 month.
 *
 * @name minutesInMonth
 * @constant
 * @type {number}
 * @default
 */
export const minutesInMonth = 43200

/**
 * Minutes in 1 day.
 *
 * @name minutesInDay
 * @constant
 * @type {number}
 * @default
 */
export const minutesInDay = 1440

/**
 * Minutes in 1 hour.
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
export const minutesInHour = 60

/**
 * Months in 1 quarter.
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
export const monthsInQuarter = 3

/**
 * Months in 1 year.
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
 * Seconds in 1 hour.
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
export const secondsInHour = 3600

/**
 * Seconds in 1 minute.
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
export const secondsInMinute = 60

/**
 * Seconds in 1 day.
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
export const secondsInDay = secondsInHour * 24

/**
 * Seconds in 1 week.
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
export const secondsInWeek = secondsInDay * 7

/**
 * Seconds in 1 year.
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
export const secondsInYear = secondsInDay * daysInYear

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
export const secondsInMonth = secondsInYear / 12

/**
 * Seconds in 1 quarter.
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
export const secondsInQuarter = secondsInMonth * 3
