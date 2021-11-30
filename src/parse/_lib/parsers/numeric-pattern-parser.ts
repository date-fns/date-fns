import { Token } from './tokens'
import { AbstractParser, Options } from './abstract-parser'

export abstract class NumericPatternParser extends AbstractParser<number> {
  public static readonly TWO_DIGITS = /^\d{1,2}/ // 0 to 99
  public static readonly FOUR_DIGITS = /^\d{1,4}/ // 0 to 9999
  public static readonly SINGLE_DIGIT = /^\d/ // 0 to 9
  public static readonly THREE_DIGITS = /^\d{1,3}/ // 0 to 999
  public static readonly ANY_SIGNED_DIGIT = /^-?\d+/

  public static readonly DATE = /^(3[0-1]|[0-2]?\d)/ // 0 to 31
  public static readonly WEEK = /^(5[0-3]|[0-4]?\d)/ // 0 to 53
  public static readonly MONTH = /^(1[0-2]|0?\d)/ // 0 to 12
  public static readonly MINUTE = /^[0-5]?\d/ // 0 to 59
  public static readonly SECOND = /^[0-5]?\d/ // 0 to 59
  public static readonly HOUR_23H = /^(2[0-3]|[0-1]?\d)/ // 0 to 23
  public static readonly HOUR_24H = /^(2[0-4]|[0-1]?\d)/ // 0 to 24
  public static readonly HOUR_11H = /^(1[0-1]|0?\d)/ // 0 to 11
  public static readonly HOUR_12H = /^(1[0-2]|0?\d)/ // 0 to 12
  public static readonly DAY_OF_YEAR = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/ // 0 to 366

  protected constructor(
    public readonly pattern: RegExp,
    token: Token,
    priority?: number,
    incompatibleTokens?: Token | Token[]
  ) {
    super(token, priority, incompatibleTokens)
  }

  public parse(string: string, _token: Token, _match: any, _options: Options) {
    return this.parseWithPattern(this.pattern, string)
  }

  protected parseWithPattern(
    pattern: RegExp,
    string: string,
    valueCallback?: Function
  ) {
    const matchResult = string.match(pattern)

    if (!matchResult) {
      return null
    }

    const value = parseInt(matchResult[0], 10)

    return {
      value: valueCallback ? valueCallback(value) : value,
      rest: string.slice(matchResult[0].length),
    }
  }
}
