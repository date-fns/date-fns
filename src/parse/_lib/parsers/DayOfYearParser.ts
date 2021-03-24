import { AbstractParser } from './AbstractParser'
import {
  numericPatterns,
  parseNumericPattern,
  parseNDigits,
  isLeapYearIndex,
} from '../utils'

// Day of year
export class DayOfYearParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'Y',
    'R',
    'q',
    'Q',
    'M',
    'L',
    'w',
    'I',
    'd',
    'E',
    'i',
    'e',
    'c',
    't',
    'T',
  ]
  public readonly subPriority: number = 1

  parse(string: any, token: any, match: any, _options: any) {
    switch (token) {
      case 'D':
      case 'DD':
        return parseNumericPattern(numericPatterns.dayOfYear, string)
      case 'Do':
        return match.ordinalNumber(string, { unit: 'date' })
      default:
        return parseNDigits(token.length, string)
    }
  }

  validate(_date, value, _options) {
    var year = _date.getUTCFullYear()
    var isLeapYear = isLeapYearIndex(year)
    if (isLeapYear) {
      return value >= 1 && value <= 366
    } else {
      return value >= 1 && value <= 365
    }
  }

  set(date: any, flags: any, value: any, _options: any) {
    date.setUTCMonth(0, value)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}
