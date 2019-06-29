import formatDistance from './_lib/formatDistance/index'
import formatRelative from './_lib/formatRelative/index'
/**
 * @type {Locale}
 * @category Locales
 * @summary Japanese locale.
 * @language Japanese
 * @iso-639-2 jpn
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Yamagishi Kazutoshi [@ykzts]{@link https://github.com/ykzts}
 * @author Luca Ban [@mesqueeb]{@link https://github.com/mesqueeb}
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
    ordinalNumber: (dirtyNumber: number) => number
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
