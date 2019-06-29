declare function timeOfDay(dirtyHours: number, dirtyOptions: any): string
declare function ordinalNumber(dirtyNumber: number, dirtyOptions: any): string
declare var localize: {
  ordinalNumber: typeof ordinalNumber
  weekday: (dirtyIndex: any, dirtyOptions: any) => any
  weekdays: void
  month: (dirtyIndex: any, dirtyOptions: any) => any
  months: void
  timeOfDay: typeof timeOfDay
  timesOfDay: void
}
export default localize
