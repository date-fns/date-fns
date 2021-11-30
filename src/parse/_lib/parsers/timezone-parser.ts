import { Time } from './time-constants'
import { Token } from './tokens'
import { AbstractParser, Flags, Value } from './abstract-parser'

export abstract class TimezoneParser extends AbstractParser<number> {
  public static readonly BASIC = /^([+-])(\d{2})(\d{2})|Z/
  public static readonly BASIC_OPTIONAL_MINUTES = /^([+-])(\d{2})(\d{2})?|Z/
  public static readonly BASIC_OPTIONAL_SECONDS = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/
  public static readonly EXTENDED = /^([+-])(\d{2}):(\d{2})|Z/
  public static readonly EXTENDED_OPTIONAL_SECONDS = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/

  protected constructor(
    token: Token,
    priority: number = 0,
    incompatibleTokens?: Token | Token[]
  ) {
    super(token, priority, incompatibleTokens)
  }

  public set(date: Date, flags: Flags, value: Value) {
    const resultDate = flags.isTimestampSet
      ? date
      : new Date(date.getTime() - value)

    return { date: resultDate }
  }

  protected parseWithPattern(pattern: RegExp, string: string) {
    const matchResult = string.match(pattern)

    if (!matchResult) {
      return null
    }

    // Input is 'Z'
    if (matchResult[0] === 'Z') {
      return {
        value: 0,
        rest: string.slice(1),
      }
    }

    const sign = matchResult[1] === '+' ? 1 : -1
    const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0
    const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0
    const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0

    const milliseconds =
      hours * Time.MILLISECONDS_IN_HOUR +
      minutes * Time.MILLISECONDS_IN_MINUTE +
      seconds * Time.MILLISECONDS_IN_SECOND

    return {
      value: sign * milliseconds,
      rest: string.slice(matchResult[0].length),
    }
  }
}
