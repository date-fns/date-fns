var MONTHS_IN_YEAR = 12

var patterns = {
  years: /^P(\d+)Y/,
  months: /^P.*(\d+)M/,
  days: /^P.*(\d+)D/,
}

/**
 * @name toDuration
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Duration.
 *
 * @description
 * Convert the given argument to an instance of Duration.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {*} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @returns {Duration} the parsed duration
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert string '' to duration:
 * var result = toDuration('')
 * //=> {}
 *
 */
export default function toDuration (argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  return {
    months: parseYears(argument) * MONTHS_IN_YEAR + parseMonths(argument),
    days: parseDays(argument),
    milliseconds: 0
  }
}

function parseYears(durationString) {
  var token

  token = patterns.years.exec(durationString)
  if (token) {
    var yearString = token[1]
    return parseInt(yearString, 10)
  }

  return 0
}

function parseMonths(durationString) {
  var token

  token = patterns.months.exec(durationString)
  if (token) {
    var yearString = token[1]
    return parseInt(yearString, 10)
  }

  return 0
}

function parseDays(durationString) {
  var token

  token = patterns.days.exec(durationString)
  if (token) {
    var yearString = token[1]
    return parseInt(yearString, 10)
  }

  return 0
}
