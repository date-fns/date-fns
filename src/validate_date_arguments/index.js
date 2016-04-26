var isDate = require('../is_date')
var isValid = require('../is_valid')

/**
 * @category Common Helpers
 * @summary Does the date constructed from the given arguments exist?
 *
 * @description
 * Validates that the given `Date` constructor arguments are valid, are within acceptable ranges,
 * and can be used to build existing date.
 *
 * This function mirrors behavior of the `Date` constuctor and additionally checks if
 * provided numerical date values and values of resulting `Date` match:
 * - If no arguments are provided, the result is always true.
 * - If single argument is a `Date`, the result is true if this date is valid.
 * - If single argument is a number, the result is true if this number is a valid timestamp.
 * - If single argument is a string, the result is true
 *   if this string is in a format recognized by the Date.parse() method.
 * - If at least two arguments are supplied, function checks if arguments are numbers within acceptable ranges,
 *   e. g. the hour value should be within range [0..23], the minute value within [0..59] etc.,
 *   considering situations when values are impossible in local timezone,
 *   e. g. the missing hours during the DST transition.
 * - Year value can be in the two digit format.
 * - If at least two arguments are supplied, and some of the arguments are strings,
 *   they are implicitly converted to number, like when using `Number` function:
 *   | `str`        | `Number(str)` |
 *   |--------------|---------------|
 *   | '2014'       | 2014          |
 *   | '2014.0'     | 2014          |
 *   | '2014.5'     | 2014.5        |
 *   | '-2014'      | -2014         |
 *   | '-2014.5'    | -2014.5       |
 *   | '2014e1'     | 20140         |
 *   | '201.4e1'    | 2014          |
 *   | '20140e-1'   | 2014          |
 *   | '2014abc'    | NaN           |
 *   | 'abc2014'    | NaN           |
 *   | '0xfff'      | 4095          |
 *   | '0xfff.0'    | NaN           |
 *   | '-0xfff'     | NaN           |
 *   | '02014'      | 2014          |
 *   | '0o10000'    | 4096          |
 *   | '0b10000'    | 16            |
 *   The result of implicit convertion is implementation-dependent,
 *   e. g. octary and binary literals are added in JavaScript 2015 so they may not work in older browsers.
 * - `null` and `false` arguments are converted to 0, `true` is converted to 1.
 * - If any of the first 7 arguments are non-integral numbers or strings converted to non-integral numbers,
 *   the result is false.
 * - If any of the first 7 arguments is provided and `undefined`, the result is false.
 * - If any of the first 7 arguments are `NaN`, `Infinity`, `-Infinity`, or other types, the result if false.
 * - Arguments after 7th are ignored.
 *
 * @param {...*} - Date contructor arguments
 * @returns {Boolean} all arguments are correct
 *
 * @example
 * // For the correct arguments:
 * var result = validateDateArguments(2014, 1, 28, 12, 0)
 * //=> true
 *
 * @example
 * // For the arguments that make impossible date (29 February of non-leap year):
 * var result = validateDateArguments(2014, 1, 29, 12, 0)
 * //=> false
 */
function validateDateArguments () {
  // Apply arguments to Date constructor
  var args = Array.prototype.slice.call(arguments)
  var length = args.unshift(null) - 1
  var date = new (Function.prototype.bind.apply(Date, args))

  if (!isValid(date)) {
    return false
  }

  if (length === 0) {
    return true
  }

  if (length === 1) {
    var arg = args[1]

    if (isDate(arg)) {
      return true
    }

    if (!isNaN(arg)) {
      return arg === date.getTime()
    }

    return true
  }

  return validateYearArgument(args[1], date.getFullYear()) &&
    validateMonthArgument(args[2], date.getMonth()) &&
    validateOptionalArgument(args[3], date.getDate(), length >= 3, 1) &&
    validateOptionalArgument(args[4], date.getHours(), length >= 4, 0) &&
    validateOptionalArgument(args[5], date.getMinutes(), length >= 5, 0) &&
    validateOptionalArgument(args[6], date.getSeconds(), length >= 6, 0) &&
    validateOptionalArgument(args[7], date.getMilliseconds(), length >= 7, 0)
}

function validateYearArgument (argument, value) {
  if (argument === null) {
    argument = 1900
  }

  if (argument >= 0 && argument < 100) {
    argument = 1900 + argument
  }

  /* eslint-disable eqeqeq */
  return argument == value
  /* eslint-enable eqeqeq */
}

function validateMonthArgument (argument, value) {
  if (argument === null) {
    argument = 0
  }

  /* eslint-disable eqeqeq */
  return argument == value
  /* eslint-enable eqeqeq */
}

function validateOptionalArgument (argument, value, isProvided, defaultValue) {
  if (value === defaultValue) {
    return !isProvided || argument === null
  }

  /* eslint-disable eqeqeq */
  return argument == value
  /* eslint-enable eqeqeq */
}

module.exports = validateDateArguments
