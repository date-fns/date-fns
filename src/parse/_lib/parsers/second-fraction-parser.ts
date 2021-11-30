import { Token } from './tokens'
import { Flags, Value } from './abstract-parser'
import { NDigitsParser } from './n-digits-parser'

export class SecondsFractionParser extends NDigitsParser {
  public static readonly TOKEN = Token.S
  public static readonly PRIORITY = 30
  public static readonly INCOMPATIBLE_TOKENS = [Token.t, Token.T]

  protected constructor() {
    super(
      SecondsFractionParser.TOKEN,
      SecondsFractionParser.PRIORITY,
      SecondsFractionParser.INCOMPATIBLE_TOKENS
    )
  }

  public set(date: Date, _flags: Flags, value: Value) {
    date.setUTCMilliseconds(value)
    return { date }
  }

  public parse(string: string, token: Token) {
    return this.parseNDigits(token.length, string, (value: number) =>
      this.convertValueToInt(value, token)
    )
  }

  private convertValueToInt(value: number, token: Token) {
    return Math.floor(value * Math.pow(10, -token.length + 3))
  }
}
