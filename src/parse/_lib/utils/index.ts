import {
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_SECOND,
  numericPatterns,
} from './constants'
export function parseNumericPattern(pattern, string, valueCallback) {
  const matchResult = string.match(pattern)

  if (!matchResult) {
    return null
  }

  const value = parseInt(matchResult[0], 10)

  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length),
  }
}

export function parseTimezonePattern(pattern, string) {
  const matchResult = string.match(pattern)

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

  const sign = matchResult[1] === '+' ? 1 : -1
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0

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
  const isCommonEra = currentYear > 0
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear

  let result
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100
  } else {
    const rangeEnd = absCurrentYear + 50
    const rangeEndCentury = Math.floor(rangeEnd / 100) * 100
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0)
  }

  return isCommonEra ? result : 1 - result
}

// User for validation
export function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
