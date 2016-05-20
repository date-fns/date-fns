var isBefore = require('../is_before/index.js')
var parse = require('../parse/index.js')
var differenceInSeconds = require('../difference_in_seconds/index.js')
var differenceInMonths = require('../difference_in_months/index.js')
var enLocale = require('../locale/en/index.js')

var MINUTES_IN_DAY = 1440
var MINUTES_IN_ALMOST_TWO_DAYS = 2520
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_TWO_MONTHS = 86400

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|String|Number} dateFrom - the first date of the distance
 * @param {Date|String|Number} dateTo - the second date of the distance
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWords(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 1)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = distanceInWords(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 */
function distanceInWords (dirtyDateFrom, dirtyDateTo, options) {
  var translate = enLocale.distanceInWords

  var dateTo, dateFrom
  if (isBefore(dirtyDateFrom, dirtyDateTo)) {
    dateFrom = parse(dirtyDateFrom)
    dateTo = parse(dirtyDateTo)
  } else {
    dateFrom = parse(dirtyDateTo)
    dateTo = parse(dirtyDateFrom)
  }

  var includeSeconds = options ? options.includeSeconds : false
  var seconds = differenceInSeconds(dateTo, dateFrom)
  var offset = dateTo.getTimezoneOffset() - dateFrom.getTimezoneOffset()
  var minutes = Math.round(seconds / 60) - offset
  var months

  // 0 up to 2 mins
  if (minutes < 2) {
    if (includeSeconds) {
      if (seconds < 5) {
        return translate('lessThanXSeconds', 5)
      } else if (seconds < 10) {
        return translate('lessThanXSeconds', 10)
      } else if (seconds < 20) {
        return translate('lessThanXSeconds', 20)
      } else if (seconds < 40) {
        return translate('halfAMinute')
      } else if (seconds < 60) {
        return translate('lessThanXMinutes', 1)
      } else {
        return translate('xMinutes', 1)
      }
    } else {
      if (minutes === 0) {
        return translate('lessThanXMinutes', 1)
      } else {
        return translate('xMinutes', minutes)
      }
    }

  // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return translate('xMinutes', minutes)

  // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return translate('aboutXHours', 1)

  // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60)
    return translate('aboutXHours', hours)

  // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return translate('xDays', 1)

  // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY)
    return translate('xDays', days)

  // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH)
    return translate('aboutXMonths', months)
  }

  months = differenceInMonths(dateTo, dateFrom)

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
    return translate('xMonths', nearestMonth)

  // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12
    var years = Math.floor(months / 12)

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return translate('aboutXYears', years)

    // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return translate('overXYears', years)

    // N years 9 months up to N year 12 months
    } else {
      return translate('almostXYears', years + 1)
    }
  }
}

module.exports = distanceInWords
