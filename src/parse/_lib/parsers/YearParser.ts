import { AbstractParser } from './AbstractParser'
import { parseNDigits, normalizeTwoDigitYear } from '../utils'
import { Match } from 'src/locale/types'

// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
export class YearParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'Y',
    'R',
    'u',
    'w',
    'I',
    'i',
    'e',
    'c',
    't',
    'T',
  ]

  parse(string: any, token: any, match: Match, _options: any) {
    const valueCallback = function (year) {
      return {
        year: year,
        isTwoDigitYear: token === 'yy',
      }
    }

    switch (token) {
      case 'y':
        return parseNDigits(4, string, valueCallback)
      case 'yo':
        return match.ordinalNumber(string, {
          unit: 'year',
          valueCallback: valueCallback,
        })
      default:
        return parseNDigits(token.length, string, valueCallback)
    }
  }

  validate(_date: any, value: any, _options: any) {
    return value.isTwoDigitYear || value.year > 0
  }

  set(date: any, flags: any, value: any, _options: any) {
    const currentYear = date.getUTCFullYear()

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      )
      date.setUTCFullYear(normalizedTwoDigitYear, 0, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    }

    const year =
      !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year
    date.setUTCFullYear(year, 0, 1)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}
