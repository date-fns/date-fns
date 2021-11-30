import { Token } from './tokens'
import { TimezoneParser } from './timezone-parser'

export class TimezoneZISO8601 extends TimezoneParser {
  public static readonly TOKEN = Token.X
  public static readonly PRIORITY = 10
  public static readonly INCOMPATIBLE_TOKENS = [Token.t, Token.T, Token.x]

  protected constructor() {
    super(
      TimezoneZISO8601.TOKEN,
      TimezoneZISO8601.PRIORITY,
      TimezoneZISO8601.INCOMPATIBLE_TOKENS
    )
  }

  public parse(string: string, token: Token) {
    switch (token) {
      case Token.X:
        return this.parseWithPattern(
          TimezoneParser.BASIC_OPTIONAL_MINUTES,
          string
        )
      case Token.XX:
        return this.parseWithPattern(TimezoneParser.BASIC, string)
      case Token.XXXX:
        return this.parseWithPattern(
          TimezoneParser.BASIC_OPTIONAL_SECONDS,
          string
        )
      case Token.XXXXX:
        return this.parseWithPattern(
          TimezoneParser.EXTENDED_OPTIONAL_SECONDS,
          string
        )
      case Token.XXX:
      default:
        return this.parseWithPattern(TimezoneParser.EXTENDED, string)
    }
  }
}
