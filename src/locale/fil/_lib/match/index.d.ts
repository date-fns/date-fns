import parseDecimal from '../../../_lib/parseDecimal/index'
declare var match: {
  ordinalNumbers: (
    dirtyString: any,
    dirtyOptions: any
  ) => {
    value: any
    rest: string
  } | null
  ordinalNumber: typeof parseDecimal
  weekdays: (
    dirtyString: any,
    dirtyOptions: any
  ) => {
    value: any
    rest: string
  } | null
  weekday: void
  months: (
    dirtyString: any,
    dirtyOptions: any
  ) => {
    value: any
    rest: string
  } | null
  month: void
  timesOfDay: (
    dirtyString: any,
    dirtyOptions: any
  ) => {
    value: any
    rest: string
  } | null
  timeOfDay: void
}
export default match
