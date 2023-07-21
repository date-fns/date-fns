import transpose from '../../transpose/index'
import constructFrom from '../../constructFrom/index'
import type { ParseFlags, ParserOptions } from './types'

const TIMEZONE_UNIT_PRIORITY = 10

export abstract class Setter {
  public abstract priority: number
  public subPriority = 0

  public validate<DateType extends Date>(
    _utcDate: DateType,
    _options?: ParserOptions
  ): boolean {
    return true
  }

  public abstract set<DateType extends Date>(
    utcDate: DateType,
    flags: ParseFlags,
    options: ParserOptions
  ): DateType | [DateType, ParseFlags]
}

export class ValueSetter<Value> extends Setter {
  constructor(
    private value: Value,

    private validateValue: <DateType extends Date>(
      utcDate: DateType,
      value: Value,
      options: ParserOptions
    ) => boolean,

    private setValue: <DateType extends Date>(
      utcDate: DateType,
      flags: ParseFlags,
      value: Value,
      options: ParserOptions
    ) => DateType | [DateType, ParseFlags],
    public priority: number,
    subPriority?: number
  ) {
    super()
    if (subPriority) {
      this.subPriority = subPriority
    }
  }

  validate<DateType extends Date>(
    date: DateType,
    options: ParserOptions
  ): boolean {
    return this.validateValue(date, this.value, options)
  }

  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    options: ParserOptions
  ): DateType | [DateType, ParseFlags] {
    return this.setValue(date, flags, this.value, options)
  }
}

export class DateToSystemTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY
  subPriority = -1
  set<DateType extends Date>(date: DateType, flags: ParseFlags): DateType {
    if (flags.timestampIsSet) return date
    return constructFrom(date, transpose(date, Date))
  }
}
