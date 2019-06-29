import formatDistance from './_lib/formatDistance/index'
import formatRelative from './_lib/formatRelative/index'
/**
 * @type {Locale}
 * @category Locales
 * @summary Ukrainian locale.
 * @language Ukrainian
 * @iso-639-2 ukr
 * @author Andrii Korzh [@korzhyk]{@link https://github.com/korzhyk}
 * @author Andriy Shcherbyak [@shcherbyakdev]{@link https://github.com/shcherbyakdev}
 */
declare var locale: {
  formatDistance: typeof formatDistance
  formatLong: {
    date: (dirtyOptions: any) => any
    time: (dirtyOptions: any) => any
    dateTime: (dirtyOptions: any) => any
  }
  formatRelative: typeof formatRelative
  localize: {
    ordinalNumber: (dirtyNumber: number, dirtyOptions: any) => string
    era: (dirtyIndex: any, dirtyOptions: any) => any
    quarter: (dirtyIndex: any, dirtyOptions: any) => any
    month: (dirtyIndex: any, dirtyOptions: any) => any
    day: (dirtyIndex: any, dirtyOptions: any) => any
    dayPeriod: (dirtyIndex: any, dirtyOptions: any) => any
  }
  match: {
    ordinalNumber: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
    era: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
    quarter: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
    month: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
    day: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
    dayPeriod: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
  }
  options: {
    weekStartsOn: number
    firstWeekContainsDate: number
  }
}
export default locale
