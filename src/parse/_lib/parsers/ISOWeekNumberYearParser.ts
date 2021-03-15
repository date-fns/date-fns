import { AbstractParser } from './AbstractParser'

// ISO week-numbering year
export class ISOWeekNumberYearParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'G',
    'y',
    'Y',
    'u',
    'Q',
    'q',
    'M',
    'L',
    'w',
    'd',
    'D',
    'e',
    'c',
    't',
    'T',
  ]

  parse(string: any, token: any, match: any, _options: any) {
    if (token === 'R') {
      return parseNDigitsSigned(4, string)
    }

    return parseNDigitsSigned(token.length, string)
  }

  set(date: any, flags: any, value: any, _options: any) {
    var firstWeekOfYear = new Date(0)
    firstWeekOfYear.setUTCFullYear(value, 0, 4)
    firstWeekOfYear.setUTCHours(0, 0, 0, 0)
    return startOfUTCISOWeek(firstWeekOfYear)
  }
}
