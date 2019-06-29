import formatDistance from './_lib/formatDistance/index'
import formatRelative from './_lib/formatRelative/index'
/**
 * @type {Locale}
 * @category Locales
 * @summary Arabic locale (Modern Standard Arabic ).
 * @language Modern Standard Arabic (Algeria) [ar-dz]
 * @iso-639-2 ara
 * @author Badreddine Boumaza [@badre429]{@link https://github.com/badre429}
 * @author Ahmed ElShahat [@elshahat]{@link https://github.com/elshahat}
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
    ordinalNumber: (dirtyNumber: any) => string
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
