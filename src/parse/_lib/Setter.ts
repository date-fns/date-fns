import { constructFrom } from "../../constructFrom/index.js";
import { transpose } from "../../transpose/index.js";
import type { ContextFn, DateArg } from "../../types.js";
import type { ParseFlags, ParserOptions } from "./types.js";

const TIMEZONE_UNIT_PRIORITY = 10;

export abstract class Setter {
  public abstract priority: number;
  public subPriority = 0;

  public validate<DateType extends Date>(
    _utcDate: DateType,
    _options?: ParserOptions,
  ): boolean {
    return true;
  }

  public abstract set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    options: ParserOptions,
  ): DateType | [DateType, ParseFlags];
}

export class ValueSetter<Value> extends Setter {
  constructor(
    private value: Value,

    private validateValue: <DateType extends Date>(
      date: DateType,
      value: Value,
      options: ParserOptions,
    ) => boolean,

    private setValue: <DateType extends Date>(
      date: DateType,
      flags: ParseFlags,
      value: Value,
      options: ParserOptions,
    ) => DateType | [DateType, ParseFlags],
    public priority: number,
    subPriority?: number,
  ) {
    super();
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }

  validate<DateType extends Date>(
    date: DateType,
    options: ParserOptions,
  ): boolean {
    return this.validateValue(date, this.value, options);
  }

  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    options: ParserOptions,
  ): DateType | [DateType, ParseFlags] {
    return this.setValue(date, flags, this.value, options);
  }
}

export class DateTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  context: ContextFn<Date>;

  constructor(
    context: ContextFn<Date> | undefined,
    reference: DateArg<Date> & {},
  ) {
    super();
    this.context = context || ((date) => constructFrom(reference, date));
  }

  set<DateType extends Date>(date: DateType, flags: ParseFlags): DateType {
    if (flags.timestampIsSet) return date;
    return constructFrom(date, transpose(date, this.context));
  }
}
