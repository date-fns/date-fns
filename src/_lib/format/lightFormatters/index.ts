import addLeadingZeros from '../../addLeadingZeros/index'

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const formatters = {
  // Year
  y(date: Date, token: string): string {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getUTCFullYear()
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length)
  },

  // Month
  M(date: Date, token: string): string {
    const month = date.getUTCMonth()
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2)
  },

  // Day of the month
  d(date: Date, token: string): string {
    return addLeadingZeros(date.getUTCDate(), token.length)
  },

  // AM or PM
  a(date: Date, token: string): string {
    const dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am'

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase()
      case 'aaa':
        return dayPeriodEnumValue
      case 'aaaaa':
        return dayPeriodEnumValue[0]
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.'
    }
  },

  // Hour [1-12]
  h(date: Date, token: string): string {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length)
  },

  // Hour [0-23]
  H(date: Date, token: string): string {
    return addLeadingZeros(date.getUTCHours(), token.length)
  },

  // Minute
  m(date: Date, token: string): string {
    return addLeadingZeros(date.getUTCMinutes(), token.length)
  },

  // Second
  s(date: Date, token: string): string {
    return addLeadingZeros(date.getUTCSeconds(), token.length)
  },

  // Fraction of second
  S(date: Date, token: string): string {
    const numberOfDigits = token.length
    const milliseconds = date.getUTCMilliseconds()
    const fractionalSeconds = Math.floor(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    )
    return addLeadingZeros(fractionalSeconds, token.length)
  },
}

export default formatters
