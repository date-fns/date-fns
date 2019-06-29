declare function ordinalNumber(dirtyNumber: any, _dirtyOptions: any): string
declare var localize: {
  ordinalNumber: typeof ordinalNumber
  weekday: (dirtyIndex: any, dirtyOptions: any) => any
  weekdays: void
  month: (dirtyIndex: any, dirtyOptions: any) => any
  months: void
  timeOfDay: (dirtyIndex: any, dirtyOptions: any) => any
  timesOfDay: void
}
export default localize
