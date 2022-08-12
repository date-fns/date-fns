import type { Match } from '../../locale/types'
import { ValueSetter } from './Setter'
import type { ParseFlags, ParseResult, ParserOptions } from './types'

export abstract class Parser<Value> {
  public abstract incompatibleTokens: string[] | '*'
  public abstract priority: number
  public subPriority?: number

  public run(
    dateString: string,
    token: string,
    match: Match,
    options: ParserOptions
  ): { setter: ValueSetter<Value>; rest: string } | null {
    const result = this.parse(dateString, token, match, options)
    if (!result) {
      return null
    }

    return {
      setter: new ValueSetter<Value>(
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
    options: ParserOptions
  ): ParseResult<Value>

  protected validate<DateType extends Date>(
    _utcDate: DateType,
    _value: Value,
    _options: ParserOptions
  ): boolean {
    return true
  }

  protected abstract set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    value: Value,
    options: ParserOptions
  ): DateType | [DateType, ParseFlags]
}
