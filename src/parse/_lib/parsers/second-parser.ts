import { Token } from './tokens'
import { Flags, Value } from './abstract-parser'
import { NDigitsParser } from './n-digits-parser'
import { NumericPatternParser } from './numeric-pattern-parser'

export class SecondsParser extends NDigitsParser {
  public static readonly TOKEN = Token.s
  public static readonly PRIORITY = 50
  public static readonly INCOMPATIBLE_TOKENS = [Token.t, Token.T]
  protected constructor() {
    super(
      SecondsParser.TOKEN,
      SecondsParser.PRIORITY,
      SecondsParser.INCOMPATIBLE_TOKENS
    )
  }

  public set(date: Date, _flags: Flags, value: Value) {
    date.setUTCSeconds(value, 0)
    return { date }
  }

  public isValidResult(_date: Date, value: Value) {
    return value >= 0 && value <= 59
  }

  public parse(string: string, token: Token, match: any) {
    switch (token) {
      case Token.s:
        return this.parseWithPattern(NumericPatternParser.SECOND, string)
      case Token.so:
        return match.ordinalNumber(string, { unit: 'second' })
      default:
        return this.parseNDigits(token.length, string)
    }
  }
}
