import type { ParserOptions, ParseFlags, ParseResult } from './types'
import type { Match } from '../../locale/types'
import { ValueSetter } from './Setter'

export abstract class Parser<TValue> {
  public abstract incompatibleTokens: string[] | '*'
  public abstract priority: number
  public subPriority?: number

  public run(
    dateString: string,
    token: string,
    match: Match,
    options?: ParserOptions
  ): { setter: ValueSetter<TValue>; rest: string } | null {
    const result = this.parse(dateString, token, match, options)
    if (!result) {
      return null
    }

    return {
      setter: new ValueSetter<TValue>(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: result.rest,
    }
  }

  protected abstract parse(
    dateString: string,
    token: string,
    match: Match,
    options?: ParserOptions
  ): ParseResult<TValue>

  protected validate(
    _utcDate: Date,
    _value: TValue,
    _options?: ParserOptions
  ): boolean {
    return true
  }

  protected abstract set(
    date: Date,
    flags: ParseFlags,
    value: TValue,
    options?: ParserOptions
  ): Date | [Date, ParseFlags]
}
