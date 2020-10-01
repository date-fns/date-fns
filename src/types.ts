export interface Duration {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export interface Localize {
  ordinalNumber?: (number: number) => number
  era?: (option: 1 | 0) => Object
  quarter?: (option: Date | number) => Object
  month?: (option: Date | number) => Object
  day?: (option: Date | number) => Object
  dayPeriod?: (
    option:
      | 'am'
      | 'pm'
      | 'midnight'
      | 'noon'
      | 'morning'
      | 'afternoon'
      | 'evening'
      | 'night'
  ) => Object
}

interface FormatLong {
  date?: (...args: unknown[]) => Object
  time?: (...args: unknown[]) => Object
  dateTime?: (...args: unknown[]) => Object
}

interface LocaleOptions {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export interface Locale {
  code?: string
  formatDistance?: (
    dirtyDate: Date | number,
    dirtyBaseDate: Date | number,
    dirtyOptions: Object
  ) => string
  formatRelative?: (
    dirtyDate: Date | number,
    dirtyBaseDate: Date | number,
    dirtyOptions: Object
  ) => number
  localize?: Localize
  formatLong?: FormatLong
  match?: Localize
  options?: LocaleOptions
}
