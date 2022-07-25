import type { Match } from '../../../locale/types'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
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

  validate<DateType extends Date>(
    _date: DateType,
    value: YearParserValue
  ): boolean {
    return value.isTwoDigitYear || value.year > 0
  }

  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    value: YearParserValue
  ): DateType {
    const currentYear = date.getFullYear()

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      )
      date.setFullYear(normalizedTwoDigitYear, 0, 1)
      date.setHours(0, 0, 0, 0)
      return date
    }

    const year =
      !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year
    date.setFullYear(year, 0, 1)
    date.setHours(0, 0, 0, 0)
    return date
  }
}
