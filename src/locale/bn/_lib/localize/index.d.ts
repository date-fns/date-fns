declare function ordinalNumber(
  dirtyNumber: number,
  dirtyOptions: any
): string | undefined
declare function localeToNumber(locale: any): number
declare function numberToLocale(number: number): string
declare var localize: {
  localeToNumber: typeof localeToNumber
  numberToLocale: typeof numberToLocale
  ordinalNumber: typeof ordinalNumber
  era: (dirtyIndex: any, dirtyOptions: any) => any
  quarter: (dirtyIndex: any, dirtyOptions: any) => any
  month: (dirtyIndex: any, dirtyOptions: any) => any
  day: (dirtyIndex: any, dirtyOptions: any) => any
  dayPeriod: (dirtyIndex: any, dirtyOptions: any) => any
}
export default localize
