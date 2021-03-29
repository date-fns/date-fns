export var MILLISECONDS_IN_HOUR = 3600000
export var MILLISECONDS_IN_MINUTE = 60000
export var MILLISECONDS_IN_SECOND = 1000

export var numericPatterns = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/, // 0 to 9999, -0 to -9999
}

export var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
}

export function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern)

  if (!matchResult) {
    return null
  }

  var value = parseInt(matchResult[0], 10)

  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length),
  }
}

export function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern)

  if (!matchResult) {
    return null
  }

  // Input is 'Z'
  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1),
    }
  }

  var sign = matchResult[1] === '+' ? 1 : -1
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0

  return {
    value:
      sign *
      (hours * MILLISECONDS_IN_HOUR +
        minutes * MILLISECONDS_IN_MINUTE +
        seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length),
  }
}

export function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(
    numericPatterns.anyDigitsSigned,
    string,
    valueCallback
  )
}

export function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(
        numericPatterns.singleDigit,
        string,
        valueCallback
      )
    case 2:
      return parseNumericPattern(
        numericPatterns.twoDigits,
        string,
        valueCallback
      )
    case 3:
      return parseNumericPattern(
        numericPatterns.threeDigits,
        string,
        valueCallback
      )
    case 4:
      return parseNumericPattern(
        numericPatterns.fourDigits,
        string,
        valueCallback
      )
    default:
      return parseNumericPattern(
        new RegExp('^\\d{1,' + n + '}'),
        string,
        valueCallback
      )
  }
}

export function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(
        numericPatterns.singleDigitSigned,
        string,
        valueCallback
      )
    case 2:
      return parseNumericPattern(
        numericPatterns.twoDigitsSigned,
        string,
        valueCallback
      )
    case 3:
      return parseNumericPattern(
        numericPatterns.threeDigitsSigned,
        string,
        valueCallback
      )
    case 4:
      return parseNumericPattern(
        numericPatterns.fourDigitsSigned,
        string,
        valueCallback
      )
    default:
      return parseNumericPattern(
        new RegExp('^-?\\d{1,' + n + '}'),
        string,
        valueCallback
      )
  }
}

export function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4
    case 'evening':
      return 17
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0
  }
}

export function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear

  var result
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100
  } else {
    var rangeEnd = absCurrentYear + 50
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0)
  }

  return isCommonEra ? result : 1 - result
}

export var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
export var DAYS_IN_MONTH_LEAP_YEAR = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
]

// User for validation
export function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
