declare function ordinalNumber(
  dirtyNumber: number,
  dirtyOptions: any
): string | 0
declare var localize: {
  ordinalNumber: typeof ordinalNumber
  era: (dirtyIndex: any, dirtyOptions: any) => any
  quarter: (dirtyIndex: any, dirtyOptions: any) => any
  month: (dirtyIndex: any, dirtyOptions: any) => any
  day: (dirtyIndex: any, dirtyOptions: any) => any
  dayPeriod: (dirtyIndex: any, dirtyOptions: any) => any
}
export default localize
