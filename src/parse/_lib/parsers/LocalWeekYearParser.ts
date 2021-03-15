import { AbstractParser } from './AbstractParser'

// Local week of year
export class LocalWeekYearParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'y',
    'R',
    'u',
    'q',
    'Q',
    'M',
    'L',
    'I',
    'd',
    'D',
    'i',
    't',
    'T',
  ]

  parse(string: any, token: any, match: any, _options: any) {
    switch (token) {
      case 'w':
        return parseNumericPattern(numericPatterns.week, string)
      case 'wo':
        return match.ordinalNumber(string, { unit: 'week' })
      default:
        return parseNDigits(token.length, string)
    }
  }

  validate(_date, value, _options) {
    return value >= 1 && value <= 53
  }

  set(date: any, flags: any, value: any, _options: any) {
    return startOfUTCWeek(setUTCWeek(date, value, _options), _options)
  }
}
