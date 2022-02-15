import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { mapValue, normalizeTwoDigitYear, parseNDigits } from '../utils'

export interface YearParserValue {
  year: number
  isTwoDigitYear: boolean
}

// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
export class YearParser extends Parser<YearParserValue> {
  priority = 130
  incompatibleTokens = ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']

  parse(
    dateString: string,
    token: string,
    match: Match
  ): ParseResult<YearParserValue> {
    const valueCallback = (year: number) => ({
      year,
      isTwoDigitYear: token === 'yy',
    })

    switch (token) {
      case 'y':
        return mapValue(parseNDigits(4, dateString), valueCallback)
      case 'yo':
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: 'year',
          }),
          valueCallback
        )
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback)
    }
  }

  validate(_date: Date, value: YearParserValue): boolean {
    return value.isTwoDigitYear || value.year > 0
  }

  set(date: Date, flags: ParseFlags, value: YearParserValue): Date {
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
