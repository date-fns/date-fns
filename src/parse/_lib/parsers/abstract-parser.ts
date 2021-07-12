import { Token } from './tokens'

export type ParsingResult<T> = null | {
  readonly value: T
  readonly rest: string
}

export interface SetResult {
  readonly date: Date
  readonly isTimestampSet?: boolean
}

export interface Flags {
  isTimestampSet?: boolean
}

export interface ParserFabric<T> {
  create(): AbstractParser<T>;
}

export type Value = number
export type Options = any

export abstract class AbstractParser<T> {
  public static create() {
    return new (this as any)()
  }

  public static merge<T>(...parsers: Array<ParserFabric<T>>) {
    return parsers.reduce((result, fabric) => {
      const parser = fabric.create();
      return {
        ...result,
        [parser.token]: parser
      }
    }, {} as Record<Token, AbstractParser<T>>) 
  }

  protected constructor(
    public readonly token: Token,
    public readonly priority: number = 0,
    public readonly incompatibleTokens?: Token | Token[]
  ) {}

  public abstract set(
    date: Date,
    flags: Flags,
    value: Value,
    options: Options
  ): SetResult
  public abstract parse(
    string: string,
    token: Token,
    match: any,
    options: Options
  ): ParsingResult<T>

  public isValidResult(_date: Date, _value: Value, _options: Options) {
    return true;
  }
}
