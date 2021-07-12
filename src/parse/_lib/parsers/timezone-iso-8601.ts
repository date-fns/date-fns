import { Token } from './tokens'
import { TimezoneParser } from './timezone-parser'

export class TimezoneISO8601 extends TimezoneParser {
  public static readonly TOKEN = Token.x
  public static readonly PRIORITY = 10
  public static readonly INCOMPATIBLE_TOKENS = [Token.t, Token.T, Token.X]

  protected constructor() {
    super(
      TimezoneISO8601.TOKEN,
      TimezoneISO8601.PRIORITY,
      TimezoneISO8601.INCOMPATIBLE_TOKENS
    )
  }

  public parse(string: string, token: Token) {
    switch (token) {
      case Token.x:
        return this.parseWithPattern(
          TimezoneParser.BASIC_OPTIONAL_MINUTES,
          string
        )
      case Token.xx:
        return this.parseWithPattern(TimezoneParser.BASIC, string)
      case Token.xxxx:
        return this.parseWithPattern(
          TimezoneParser.BASIC_OPTIONAL_SECONDS,
          string
        )
      case Token.xxxxx:
        return this.parseWithPattern(
          TimezoneParser.EXTENDED_OPTIONAL_SECONDS,
          string
        )
      case Token.xxx:
      default:
        return this.parseWithPattern(TimezoneParser.EXTENDED, string)
    }
  }
}
