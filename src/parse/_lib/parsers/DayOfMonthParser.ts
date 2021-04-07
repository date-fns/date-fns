import { AbstractParser } from './AbstractParser'
import { parseNumericPattern, parseNDigits, isLeapYearIndex } from '../utils'
import {
  DAYS_IN_MONTH_LEAP_YEAR,
  DAYS_IN_MONTH,
  numericPatterns,
} from '../utils/constants'
import { Match } from 'src/locale/types'

// Day of the month
export class DayOfMonthParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'Y',
    'R',
    'q',
    'Q',
    'w',
    'I',
    'D',
    'i',
    'e',
    'c',
    't',
    'T',
  ]
  public readonly subPriority: number = 1

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'd':
        return parseNumericPattern(numericPatterns.date, string)
      case 'do':
        return match.ordinalNumber(string, { unit: 'date' })
      default:
        return parseNDigits(token.length, string)
    }
  }

  validate(_date, value, _options) {
    const year = _date.getUTCFullYear()
    const isLeapYear = isLeapYearIndex(year)
    const month = _date.getUTCMonth()
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month]
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month]
    }
  }

  set(date: any, flags: any, value: any, _options: any) {
    date.setUTCDate(value)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}
