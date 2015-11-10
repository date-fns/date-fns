var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// date tokens
var parseTokenYYYY = /^(\d{4})-?/
var parseTokenYYYYY = /^([+-]\d{4,6})-/
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Parse the ISO-8601-formatted date.
 *
 * @description
 * Parse the date string representation.
 * It accepts the ISO 8601 format as well as a partial implementation.
 *
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {String} dateStr - the ISO 8601 formatted string to parse
 * @returns {Date} the parsed date in the local time zone.
 *
 * @example
 * // Parse string '2014-02-11T11:30:30':
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 */
var parse = function(dateStr) {
  if (dateStr instanceof Date) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(dateStr.getTime())
  } else if (typeof dateStr !== 'string') {
    return new Date(dateStr)
  }

  var dateStrings = splitDateString(dateStr)

  var date = parseDate(dateStrings.date)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(dateStr)
  }
}

var splitDateString = function(dateStr) {
  var dateStrings = {}
  var array = dateStr.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token
    if (token = parseTokenTimezone.exec(timeString)) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

var parseDate = function(dateString) {
  var year
  var yearToken

  // YYYY or ±YYYYY
  if (yearToken = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)) {
    var yearString = yearToken[1]
    year = parseInt(yearString, 10)
    dateString = dateString.slice(yearString.length)

  // Invalid ISO-formatted year
  } else {
    return null
  }

  var token

  // YYYY
  if (dateString.length === 0) {
    var date = new Date(0)
    date.setUTCFullYear(year)
    return date

  // YYYY-MM
  } else if (token = parseTokenMM.exec(dateString)) {
    var date = new Date(0)
    var month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date

  // YYYY-DDD or YYYYDDD
  } else if (token = parseTokenDDD.exec(dateString)) {
    var date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date

  // YYYY-MM-DD or YYYYMMDD
  } else if (token = parseTokenMMDD.exec(dateString)) {
    var date = new Date(0)
    var month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date

  // YYYY-Www or YYYYWww
  } else if (token = parseTokenWww.exec(dateString)) {
    var week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)

  // YYYY-Www-D or YYYYWwwD
  } else if (token = parseTokenWwwD.exec(dateString)) {
    var week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)

  // Invalid ISO-formatted date
  } else {
    return null
  }
}

var parseTime = function(timeString) {
  var token

  // hh
  if (token = parseTokenHH.exec(timeString)) {
    var hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR

  // hh:mm or hhmm
  } else if (token = parseTokenHHMM.exec(timeString)) {
    var hours = parseInt(token[1], 10)
    var minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
      + minutes * MILLISECONDS_IN_MINUTE

  // hh:mm:ss or hhmmss
  } else if (token = parseTokenHHMMSS.exec(timeString)) {
    var hours = parseInt(token[1], 10)
    var minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
      + minutes * MILLISECONDS_IN_MINUTE
      + seconds * 1000

  // Invalid ISO-formatted time
  } else {
    return null
  }
}

var parseTimezone = function(timezoneString) {
  var token
  var offset = 0

  // Z
  if (token = parseTokenTimezoneZ.exec(timezoneString)) {
    offset = 0

  // ±hh
  } else if (token = parseTokenTimezoneHH.exec(timezoneString)) {
    var absoluteOffset = parseInt(token[2], 10) * 60
    offset = (token[1] == '+') ? - absoluteOffset : absoluteOffset

  // ±hh:mm or ±hhmm
  } else if (token = parseTokenTimezoneHHMM.exec(timezoneString)) {
    var absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    offset = (token[1] == '+') ? - absoluteOffset : absoluteOffset
  }

  return offset
}

var dayOfISOYear = function(isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var diff = week * 7 + day + 1 - date.getUTCDay()
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse

