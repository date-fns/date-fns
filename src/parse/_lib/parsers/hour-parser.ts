import { Token } from './tokens'
import { Value } from './abstract-parser'
import { NDigitsParser } from './n-digits-parser'

export abstract class HourParser extends NDigitsParser {
  public static readonly INCOMPATIBLE_TOKENS = [
    Token.a,
    Token.b,
    Token.h,
    Token.H,
    Token.k,
    Token.K,
    Token.t,
    Token.T,
  ]

  protected constructor(
    token: Token,
    priority: number,
    private readonly range: readonly [from: number, to: number],
    private readonly numericPattern: RegExp,
    private readonly extended: Token,
    incompatibleTokens: Token[] = HourParser.INCOMPATIBLE_TOKENS.filter(t => t !== token)
  ) {
    super(
      token,
      priority,
      incompatibleTokens
    )
  }

  public isValidResult(_date: Date, value: Value) {
    return value >= this.range[0] && value <= this.range[1]
  }

  public parse(string: string, token: Token, match: any) {
    switch (token) {
      case this.token:
        return this.parseWithPattern(this.numericPattern, string)
      case this.extended:
        return match.ordinalNumber(string, { unit: 'hour' })
      default:
        return this.parseNDigits(token.length, string)
    }
  }
}

