var MONTHS_IN_YEAR = 12
var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000

var patterns = {
  years: /^P(\d+)Y/,
  months: /^P.*(\d+)M/,
  days: /^P.*(\d+)D/,
  hours: /^P.*T(\d+)H/,
  minutes: /^P.*T.*H(\d+)M/
}

var parseYears = parse(patterns.years)
var parseMonths = parse(patterns.months)
var parseDays = parse(patterns.days)
var parseHours = parse(patterns.hours)
var parseMinutes = parse(patterns.minutes)

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
    milliseconds: parseHours(argument) * MILLISECONDS_IN_HOUR + parseMinutes(argument) * MILLISECONDS_IN_MINUTE
  }
}

function parse (pattern) {
  return function (durationString) {
    var token = pattern.exec(durationString)
    if (token) {
      return parseInt(token[1], 10)
    }

    return 0
  }
}

