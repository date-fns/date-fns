// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it.

// FP Interfaces

interface CurriedFn1<A, R> {
  <A>(a: A): R
}

interface CurriedFn2<A, B, R> {
  <A>(a: A): CurriedFn1<B, R>
  <A, B>(a: A, b: B): R
}

interface CurriedFn3<A, B, C, R> {
  <A>(a: A): CurriedFn2<B, C, R>
  <A,B>(a: A, b: B): CurriedFn1<C, R>
  <A,B,C>(a: A, b: B, c: C): R
}

interface CurriedFn4<A, B, C, D, R> {
  <A>(a: A): CurriedFn3<B, C, D, R>
  <A,B>(a: A, b: B): CurriedFn2<C, D, R>
  <A,B,C>(a: A, b: B, c: C): CurriedFn1<D, R>
  <A,B,C,D>(a: A, b: B, c: C, d: D): R
}

// Type Aliases

type Interval = {
  start: Date | string | number,
  end: Date | string | number
}

type Options = {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7,
  additionalDigits?: 0 | 1 | 2,
  locale?: Locale,
  includeSeconds?: boolean,
  addSuffix?: boolean,
  unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year',
  roundingMethod?: 'floor' | 'ceil' | 'round'
}

type Locale = {
  formatDistance: Function,
  formatRelative: Function,
  localize: {
    ordinalNumber: Function,
    era: Function,
    quarter: Function,
    month: Function,
    day: Function,
    dayPeriod: Function
  },
  formatLong: Object,
  date: Function,
  time: Function,
  dateTime: Function,
  match: {
    ordinalNumber: Function,
    era: Function,
    quarter: Function,
    month: Function,
    day: Function,
    dayPeriod: Function
  },
  options?: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }
}

// Regular Functions

declare module 'date-fns' {
  function addDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addDays {}

  function addHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addHours {}

  function addISOWeekYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addISOWeekYears {}

  function addMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMilliseconds {}

  function addMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMinutes {}

  function addMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMonths {}

  function addQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addQuarters {}

  function addSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addSeconds {}

  function addWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addWeeks {}

  function addYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addYears {}

  function areIntervalsOverlapping (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): boolean
  namespace areIntervalsOverlapping {}

  function closestIndexTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): number
  namespace closestIndexTo {}

  function closestTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace closestTo {}

  function compareAsc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareAsc {}

  function compareDesc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareDesc {}

  function differenceInCalendarDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOWeekYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOWeekYears {}

  function differenceInCalendarMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInDays {}

  function differenceInHours (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInHours {}

  function differenceInISOWeekYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInISOWeekYears {}

  function differenceInMilliseconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInWeeks {}

  function differenceInYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInYears {}

  function eachDayOfInterval (
    interval: Interval,
    options?: Options
  ): Date[]
  namespace eachDayOfInterval {}

  function eachWeekOfInterval (
    interval: Interval,
    options?: Options
  ): Date[]
  namespace eachWeekOfInterval {}

  function endOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfDay {}

  function endOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfHour {}

  function endOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOWeek {}

  function endOfISOWeekYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOWeekYear {}

  function endOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMinute {}

  function endOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMonth {}

  function endOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfQuarter {}

  function endOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfSecond {}

  function endOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfWeek {}

  function endOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfYear {}

  function format (
    date: Date | string | number,
    format: string,
    options?: Options
  ): string
  namespace format {}

  function formatDistance (
    date: Date | string | number,
    baseDate: Date | string | number,
    options?: Options
  ): string
  namespace formatDistance {}

  function formatDistanceStrict (
    date: Date | string | number,
    baseDate: Date | string | number,
    options?: Options
  ): string
  namespace formatDistanceStrict {}

  function formatRelative (
    date: Date | string | number,
    baseDate: Date | string | number,
    options?: Options
  ): string
  namespace formatRelative {}

  function getDate (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDate {}

  function getDay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDay {}

  function getDayOfYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDayOfYear {}

  function getDaysInMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInMonth {}

  function getDaysInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInYear {}

  function getHours (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getHours {}

  function getISODay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISODay {}

  function getISOWeek (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeek {}

  function getISOWeeksInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeeksInYear {}

  function getISOWeekYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeekYear {}

  function getMilliseconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMilliseconds {}

  function getMinutes (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMinutes {}

  function getMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getQuarter {}

  function getSeconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getSeconds {}

  function getTime (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getTime {}

  function getWeek (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getWeek {}

  function getWeekOfMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getWeekOfMonth {}

  function getWeeksInMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getWeeksInMonth {}

  function getWeekYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getWeekYear {}

  function getYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getYear {}

  function isAfter (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isAfter {}

  function isBefore (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isBefore {}

  function isDate (
    value: any,
    options?: Options
  ): boolean
  namespace isDate {}

  function isEqual (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isEqual {}

  function isFirstDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFirstDayOfMonth {}

  function isFriday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFriday {}

  function isLastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLeapYear {}

  function isMonday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isMonday {}

  function isSameDay (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameDay {}

  function isSameHour (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOWeekYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOWeekYear {}

  function isSameMinute (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMinute {}

  function isSameMonth (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameSecond {}

  function isSameWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameWeek {}

  function isSameYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameYear {}

  function isSaturday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSaturday {}

  function isSunday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSunday {}

  function isThursday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isThursday {}

  function isTuesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isTuesday {}

  function isValid (
    date: any,
    options?: Options
  ): boolean
  namespace isValid {}

  function isWednesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWednesday {}

  function isWeekend (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWeekend {}

  function isWithinInterval (
    date: Date | string | number,
    interval: Interval,
    options?: Options
  ): boolean
  namespace isWithinInterval {}

  function lastDayOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOWeekYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOWeekYear {}

  function lastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfYear {}

  function max (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace max {}

  function min (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace min {}

  function parse (
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: Options
  ): Date
  namespace parse {}

  function setDate (
    date: Date | string | number,
    dayOfMonth: number,
    options?: Options
  ): Date
  namespace setDate {}

  function setDay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setDay {}

  function setDayOfYear (
    date: Date | string | number,
    dayOfYear: number,
    options?: Options
  ): Date
  namespace setDayOfYear {}

  function setHours (
    date: Date | string | number,
    hours: number,
    options?: Options
  ): Date
  namespace setHours {}

  function setISODay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setISODay {}

  function setISOWeek (
    date: Date | string | number,
    isoWeek: number,
    options?: Options
  ): Date
  namespace setISOWeek {}

  function setISOWeekYear (
    date: Date | string | number,
    isoWeekYear: number,
    options?: Options
  ): Date
  namespace setISOWeekYear {}

  function setMilliseconds (
    date: Date | string | number,
    milliseconds: number,
    options?: Options
  ): Date
  namespace setMilliseconds {}

  function setMinutes (
    date: Date | string | number,
    minutes: number,
    options?: Options
  ): Date
  namespace setMinutes {}

  function setMonth (
    date: Date | string | number,
    month: number,
    options?: Options
  ): Date
  namespace setMonth {}

  function setQuarter (
    date: Date | string | number,
    quarter: number,
    options?: Options
  ): Date
  namespace setQuarter {}

  function setSeconds (
    date: Date | string | number,
    seconds: number,
    options?: Options
  ): Date
  namespace setSeconds {}

  function setWeek (
    date: Date | string | number,
    week: number,
    options?: Options
  ): Date
  namespace setWeek {}

  function setWeekYear (
    date: Date | string | number,
    weekYear: number,
    options?: Options
  ): Date
  namespace setWeekYear {}

  function setYear (
    date: Date | string | number,
    year: number,
    options?: Options
  ): Date
  namespace setYear {}

  function startOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfDay {}

  function startOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfHour {}

  function startOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOWeek {}

  function startOfISOWeekYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOWeekYear {}

  function startOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMinute {}

  function startOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMonth {}

  function startOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfQuarter {}

  function startOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfSecond {}

  function startOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfWeek {}

  function startOfWeekYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfWeekYear {}

  function startOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfYear {}

  function subDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subDays {}

  function subHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subHours {}

  function subISOWeekYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subISOWeekYears {}

  function subMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMilliseconds {}

  function subMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMinutes {}

  function subMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMonths {}

  function subQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subQuarters {}

  function subSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subSeconds {}

  function subWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subWeeks {}

  function subYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subYears {}

  function toDate (
    argument: Date | string | number,
    options?: Options
  ): Date
  namespace toDate {}
}

declare module 'date-fns/addDays' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/addHours' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/addISOWeekYears' {
  import {addISOWeekYears} from 'date-fns'
  export = addISOWeekYears
}

declare module 'date-fns/addMilliseconds' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/addMinutes' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/addMonths' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/addQuarters' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/addSeconds' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/addWeeks' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/addYears' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/areIntervalsOverlapping' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closestTo' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compareAsc' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compareDesc' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOWeekYears' {
  import {differenceInCalendarISOWeekYears} from 'date-fns'
  export = differenceInCalendarISOWeekYears
}

declare module 'date-fns/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/differenceInDays' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/differenceInHours' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/differenceInISOWeekYears' {
  import {differenceInISOWeekYears} from 'date-fns'
  export = differenceInISOWeekYears
}

declare module 'date-fns/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/differenceInMonths' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/differenceInYears' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/eachDayOfInterval' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/eachWeekOfInterval' {
  import {eachWeekOfInterval} from 'date-fns'
  export = eachWeekOfInterval
}

declare module 'date-fns/endOfDay' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/endOfHour' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/endOfISOWeekYear' {
  import {endOfISOWeekYear} from 'date-fns'
  export = endOfISOWeekYear
}

declare module 'date-fns/endOfMinute' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/endOfMonth' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/endOfQuarter' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/endOfSecond' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/endOfWeek' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/endOfYear' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/formatDistance' {
  import {formatDistance} from 'date-fns'
  export = formatDistance
}

declare module 'date-fns/formatDistanceStrict' {
  import {formatDistanceStrict} from 'date-fns'
  export = formatDistanceStrict
}

declare module 'date-fns/formatRelative' {
  import {formatRelative} from 'date-fns'
  export = formatRelative
}

declare module 'date-fns/getDate' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/getDay' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/getDayOfYear' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/getDaysInYear' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/getHours' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/getISODay' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/getISOWeek' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/getISOWeekYear' {
  import {getISOWeekYear} from 'date-fns'
  export = getISOWeekYear
}

declare module 'date-fns/getMilliseconds' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/getMinutes' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/getMonth' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/getSeconds' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/getTime' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/getWeek' {
  import {getWeek} from 'date-fns'
  export = getWeek
}

declare module 'date-fns/getWeekOfMonth' {
  import {getWeekOfMonth} from 'date-fns'
  export = getWeekOfMonth
}

declare module 'date-fns/getWeeksInMonth' {
  import {getWeeksInMonth} from 'date-fns'
  export = getWeeksInMonth
}

declare module 'date-fns/getWeekYear' {
  import {getWeekYear} from 'date-fns'
  export = getWeekYear
}

declare module 'date-fns/getYear' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/isAfter' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/isBefore' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/isDate' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/isEqual' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/isFriday' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/isLeapYear' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/isMonday' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/isSameDay' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/isSameHour' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/isSameISOWeekYear' {
  import {isSameISOWeekYear} from 'date-fns'
  export = isSameISOWeekYear
}

declare module 'date-fns/isSameMinute' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/isSameMonth' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/isSameQuarter' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/isSameSecond' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/isSameWeek' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/isSameYear' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/isSaturday' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/isSunday' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/isThursday' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/isTuesday' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/isValid' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/isWednesday' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/isWeekend' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/isWithinInterval' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOWeekYear' {
  import {lastDayOfISOWeekYear} from 'date-fns'
  export = lastDayOfISOWeekYear
}

declare module 'date-fns/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/setDate' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/setDay' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/setDayOfYear' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/setHours' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/setISODay' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/setISOWeek' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/setISOWeekYear' {
  import {setISOWeekYear} from 'date-fns'
  export = setISOWeekYear
}

declare module 'date-fns/setMilliseconds' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/setMinutes' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/setMonth' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/setQuarter' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/setSeconds' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/setWeek' {
  import {setWeek} from 'date-fns'
  export = setWeek
}

declare module 'date-fns/setWeekYear' {
  import {setWeekYear} from 'date-fns'
  export = setWeekYear
}

declare module 'date-fns/setYear' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/startOfDay' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/startOfHour' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/startOfISOWeekYear' {
  import {startOfISOWeekYear} from 'date-fns'
  export = startOfISOWeekYear
}

declare module 'date-fns/startOfMinute' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/startOfMonth' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/startOfQuarter' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/startOfSecond' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/startOfWeek' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/startOfWeekYear' {
  import {startOfWeekYear} from 'date-fns'
  export = startOfWeekYear
}

declare module 'date-fns/startOfYear' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/subDays' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/subHours' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/subISOWeekYears' {
  import {subISOWeekYears} from 'date-fns'
  export = subISOWeekYears
}

declare module 'date-fns/subMilliseconds' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/subMinutes' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/subMonths' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/subQuarters' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/subSeconds' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/subWeeks' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/subYears' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/toDate' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/addDays/index' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/addHours/index' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/addISOWeekYears/index' {
  import {addISOWeekYears} from 'date-fns'
  export = addISOWeekYears
}

declare module 'date-fns/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/addMinutes/index' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/addMonths/index' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/addQuarters/index' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/addSeconds/index' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/addWeeks/index' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/addYears/index' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/areIntervalsOverlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closestTo/index' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compareAsc/index' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compareDesc/index' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOWeekYears/index' {
  import {differenceInCalendarISOWeekYears} from 'date-fns'
  export = differenceInCalendarISOWeekYears
}

declare module 'date-fns/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/differenceInDays/index' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/differenceInHours/index' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/differenceInISOWeekYears/index' {
  import {differenceInISOWeekYears} from 'date-fns'
  export = differenceInISOWeekYears
}

declare module 'date-fns/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/differenceInYears/index' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/eachDayOfInterval/index' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/eachWeekOfInterval/index' {
  import {eachWeekOfInterval} from 'date-fns'
  export = eachWeekOfInterval
}

declare module 'date-fns/endOfDay/index' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/endOfHour/index' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/endOfISOWeekYear/index' {
  import {endOfISOWeekYear} from 'date-fns'
  export = endOfISOWeekYear
}

declare module 'date-fns/endOfMinute/index' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/endOfMonth/index' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/endOfSecond/index' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/endOfWeek/index' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/endOfYear/index' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/formatDistance/index' {
  import {formatDistance} from 'date-fns'
  export = formatDistance
}

declare module 'date-fns/formatDistanceStrict/index' {
  import {formatDistanceStrict} from 'date-fns'
  export = formatDistanceStrict
}

declare module 'date-fns/formatRelative/index' {
  import {formatRelative} from 'date-fns'
  export = formatRelative
}

declare module 'date-fns/getDate/index' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/getDay/index' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/getHours/index' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/getISODay/index' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/getISOWeek/index' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/getISOWeekYear/index' {
  import {getISOWeekYear} from 'date-fns'
  export = getISOWeekYear
}

declare module 'date-fns/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/getMinutes/index' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/getMonth/index' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter/index' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/getSeconds/index' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/getTime/index' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/getWeek/index' {
  import {getWeek} from 'date-fns'
  export = getWeek
}

declare module 'date-fns/getWeekOfMonth/index' {
  import {getWeekOfMonth} from 'date-fns'
  export = getWeekOfMonth
}

declare module 'date-fns/getWeeksInMonth/index' {
  import {getWeeksInMonth} from 'date-fns'
  export = getWeeksInMonth
}

declare module 'date-fns/getWeekYear/index' {
  import {getWeekYear} from 'date-fns'
  export = getWeekYear
}

declare module 'date-fns/getYear/index' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/isAfter/index' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/isBefore/index' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/isDate/index' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/isEqual/index' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/isFriday/index' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/isLeapYear/index' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/isMonday/index' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/isSameDay/index' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/isSameHour/index' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/isSameISOWeekYear/index' {
  import {isSameISOWeekYear} from 'date-fns'
  export = isSameISOWeekYear
}

declare module 'date-fns/isSameMinute/index' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/isSameMonth/index' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/isSameSecond/index' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/isSameWeek/index' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/isSameYear/index' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/isSaturday/index' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/isSunday/index' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/isThursday/index' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/isTuesday/index' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/isValid/index' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/isWednesday/index' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/isWeekend/index' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/isWithinInterval/index' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOWeekYear/index' {
  import {lastDayOfISOWeekYear} from 'date-fns'
  export = lastDayOfISOWeekYear
}

declare module 'date-fns/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max/index' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min/index' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse/index' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/setDate/index' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/setDay/index' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/setHours/index' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/setISODay/index' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/setISOWeek/index' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/setISOWeekYear/index' {
  import {setISOWeekYear} from 'date-fns'
  export = setISOWeekYear
}

declare module 'date-fns/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/setMinutes/index' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/setMonth/index' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/setQuarter/index' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/setSeconds/index' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/setWeek/index' {
  import {setWeek} from 'date-fns'
  export = setWeek
}

declare module 'date-fns/setWeekYear/index' {
  import {setWeekYear} from 'date-fns'
  export = setWeekYear
}

declare module 'date-fns/setYear/index' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/startOfDay/index' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/startOfHour/index' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/startOfISOWeekYear/index' {
  import {startOfISOWeekYear} from 'date-fns'
  export = startOfISOWeekYear
}

declare module 'date-fns/startOfMinute/index' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/startOfMonth/index' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/startOfSecond/index' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/startOfWeek/index' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/startOfWeekYear/index' {
  import {startOfWeekYear} from 'date-fns'
  export = startOfWeekYear
}

declare module 'date-fns/startOfYear/index' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/subDays/index' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/subHours/index' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/subISOWeekYears/index' {
  import {subISOWeekYears} from 'date-fns'
  export = subISOWeekYears
}

declare module 'date-fns/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/subMinutes/index' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/subMonths/index' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/subQuarters/index' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/subSeconds/index' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/subWeeks/index' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/subYears/index' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/toDate/index' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/addDays/index.js' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/addHours/index.js' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/addISOWeekYears/index.js' {
  import {addISOWeekYears} from 'date-fns'
  export = addISOWeekYears
}

declare module 'date-fns/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/addMinutes/index.js' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/addMonths/index.js' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/addQuarters/index.js' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/addSeconds/index.js' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/addWeeks/index.js' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/addYears/index.js' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/areIntervalsOverlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closestTo/index.js' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compareAsc/index.js' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compareDesc/index.js' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOWeekYears/index.js' {
  import {differenceInCalendarISOWeekYears} from 'date-fns'
  export = differenceInCalendarISOWeekYears
}

declare module 'date-fns/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/differenceInISOWeekYears/index.js' {
  import {differenceInISOWeekYears} from 'date-fns'
  export = differenceInISOWeekYears
}

declare module 'date-fns/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/eachDayOfInterval/index.js' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/eachWeekOfInterval/index.js' {
  import {eachWeekOfInterval} from 'date-fns'
  export = eachWeekOfInterval
}

declare module 'date-fns/endOfDay/index.js' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/endOfHour/index.js' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/endOfISOWeekYear/index.js' {
  import {endOfISOWeekYear} from 'date-fns'
  export = endOfISOWeekYear
}

declare module 'date-fns/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/endOfYear/index.js' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index.js' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/formatDistance/index.js' {
  import {formatDistance} from 'date-fns'
  export = formatDistance
}

declare module 'date-fns/formatDistanceStrict/index.js' {
  import {formatDistanceStrict} from 'date-fns'
  export = formatDistanceStrict
}

declare module 'date-fns/formatRelative/index.js' {
  import {formatRelative} from 'date-fns'
  export = formatRelative
}

declare module 'date-fns/getDate/index.js' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/getDay/index.js' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/getHours/index.js' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/getISODay/index.js' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/getISOWeekYear/index.js' {
  import {getISOWeekYear} from 'date-fns'
  export = getISOWeekYear
}

declare module 'date-fns/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/getMinutes/index.js' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/getMonth/index.js' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter/index.js' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/getSeconds/index.js' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/getTime/index.js' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/getWeek/index.js' {
  import {getWeek} from 'date-fns'
  export = getWeek
}

declare module 'date-fns/getWeekOfMonth/index.js' {
  import {getWeekOfMonth} from 'date-fns'
  export = getWeekOfMonth
}

declare module 'date-fns/getWeeksInMonth/index.js' {
  import {getWeeksInMonth} from 'date-fns'
  export = getWeeksInMonth
}

declare module 'date-fns/getWeekYear/index.js' {
  import {getWeekYear} from 'date-fns'
  export = getWeekYear
}

declare module 'date-fns/getYear/index.js' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/isAfter/index.js' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/isBefore/index.js' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/isDate/index.js' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/isEqual/index.js' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/isFriday/index.js' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/isMonday/index.js' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/isSameDay/index.js' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/isSameHour/index.js' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/isSameISOWeekYear/index.js' {
  import {isSameISOWeekYear} from 'date-fns'
  export = isSameISOWeekYear
}

declare module 'date-fns/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/isSameYear/index.js' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/isSaturday/index.js' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/isSunday/index.js' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/isThursday/index.js' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/isTuesday/index.js' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/isValid/index.js' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/isWednesday/index.js' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/isWeekend/index.js' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/isWithinInterval/index.js' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOWeekYear/index.js' {
  import {lastDayOfISOWeekYear} from 'date-fns'
  export = lastDayOfISOWeekYear
}

declare module 'date-fns/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max/index.js' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min/index.js' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse/index.js' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/setDate/index.js' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/setDay/index.js' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/setHours/index.js' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/setISODay/index.js' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/setISOWeekYear/index.js' {
  import {setISOWeekYear} from 'date-fns'
  export = setISOWeekYear
}

declare module 'date-fns/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/setMinutes/index.js' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/setMonth/index.js' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/setQuarter/index.js' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/setSeconds/index.js' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/setWeek/index.js' {
  import {setWeek} from 'date-fns'
  export = setWeek
}

declare module 'date-fns/setWeekYear/index.js' {
  import {setWeekYear} from 'date-fns'
  export = setWeekYear
}

declare module 'date-fns/setYear/index.js' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/startOfDay/index.js' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/startOfHour/index.js' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/startOfISOWeekYear/index.js' {
  import {startOfISOWeekYear} from 'date-fns'
  export = startOfISOWeekYear
}

declare module 'date-fns/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/startOfWeekYear/index.js' {
  import {startOfWeekYear} from 'date-fns'
  export = startOfWeekYear
}

declare module 'date-fns/startOfYear/index.js' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/subDays/index.js' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/subHours/index.js' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/subISOWeekYears/index.js' {
  import {subISOWeekYears} from 'date-fns'
  export = subISOWeekYears
}

declare module 'date-fns/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/subMinutes/index.js' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/subMonths/index.js' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/subQuarters/index.js' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/subSeconds/index.js' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/subWeeks/index.js' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/subYears/index.js' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/toDate/index.js' {
  import {toDate} from 'date-fns'
  export = toDate
}

// FP Functions

declare module 'date-fns/fp' {
  const addDays: CurriedFn2<number, Date | string | number, Date>
  namespace addDays {}

  const addDaysWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addDaysWithOptions {}

  const addHours: CurriedFn2<number, Date | string | number, Date>
  namespace addHours {}

  const addHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addHoursWithOptions {}

  const addISOWeekYears: CurriedFn2<number, Date | string | number, Date>
  namespace addISOWeekYears {}

  const addISOWeekYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addISOWeekYearsWithOptions {}

  const addMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace addMilliseconds {}

  const addMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMillisecondsWithOptions {}

  const addMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace addMinutes {}

  const addMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMinutesWithOptions {}

  const addMonths: CurriedFn2<number, Date | string | number, Date>
  namespace addMonths {}

  const addMonthsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMonthsWithOptions {}

  const addQuarters: CurriedFn2<number, Date | string | number, Date>
  namespace addQuarters {}

  const addQuartersWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addQuartersWithOptions {}

  const addSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace addSeconds {}

  const addSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addSecondsWithOptions {}

  const addWeeks: CurriedFn2<number, Date | string | number, Date>
  namespace addWeeks {}

  const addWeeksWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addWeeksWithOptions {}

  const addYears: CurriedFn2<number, Date | string | number, Date>
  namespace addYears {}

  const addYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addYearsWithOptions {}

  const areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  const areIntervalsOverlappingWithOptions: CurriedFn3<Options, Interval, Interval, boolean>
  namespace areIntervalsOverlappingWithOptions {}

  const closestIndexTo: CurriedFn2<(Date | string | number)[], Date | string | number, number>
  namespace closestIndexTo {}

  const closestIndexToWithOptions: CurriedFn3<Options, (Date | string | number)[], Date | string | number, number>
  namespace closestIndexToWithOptions {}

  const closestTo: CurriedFn2<(Date | string | number)[], Date | string | number, Date>
  namespace closestTo {}

  const closestToWithOptions: CurriedFn3<Options, (Date | string | number)[], Date | string | number, Date>
  namespace closestToWithOptions {}

  const compareAsc: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace compareAsc {}

  const compareAscWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace compareAscWithOptions {}

  const compareDesc: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace compareDesc {}

  const compareDescWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace compareDescWithOptions {}

  const differenceInCalendarDays: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarDays {}

  const differenceInCalendarDaysWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarDaysWithOptions {}

  const differenceInCalendarISOWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeeks {}

  const differenceInCalendarISOWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeeksWithOptions {}

  const differenceInCalendarISOWeekYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeekYears {}

  const differenceInCalendarISOWeekYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeekYearsWithOptions {}

  const differenceInCalendarMonths: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarMonths {}

  const differenceInCalendarMonthsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarMonthsWithOptions {}

  const differenceInCalendarQuarters: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarQuarters {}

  const differenceInCalendarQuartersWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarQuartersWithOptions {}

  const differenceInCalendarWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarWeeks {}

  const differenceInCalendarWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarWeeksWithOptions {}

  const differenceInCalendarYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarYears {}

  const differenceInCalendarYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarYearsWithOptions {}

  const differenceInDays: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInDays {}

  const differenceInDaysWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInDaysWithOptions {}

  const differenceInHours: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInHours {}

  const differenceInHoursWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInHoursWithOptions {}

  const differenceInISOWeekYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInISOWeekYears {}

  const differenceInISOWeekYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInISOWeekYearsWithOptions {}

  const differenceInMilliseconds: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMilliseconds {}

  const differenceInMillisecondsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMillisecondsWithOptions {}

  const differenceInMinutes: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMinutes {}

  const differenceInMinutesWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMinutesWithOptions {}

  const differenceInMonths: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMonths {}

  const differenceInMonthsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMonthsWithOptions {}

  const differenceInQuarters: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInQuarters {}

  const differenceInQuartersWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInQuartersWithOptions {}

  const differenceInSeconds: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInSeconds {}

  const differenceInSecondsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInSecondsWithOptions {}

  const differenceInWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInWeeks {}

  const differenceInWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInWeeksWithOptions {}

  const differenceInYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInYears {}

  const differenceInYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInYearsWithOptions {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<Options, Interval, Date[]>
  namespace eachDayOfIntervalWithOptions {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<Options, Interval, Date[]>
  namespace eachWeekOfIntervalWithOptions {}

  const endOfDay: CurriedFn1<Date | string | number, Date>
  namespace endOfDay {}

  const endOfDayWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfDayWithOptions {}

  const endOfHour: CurriedFn1<Date | string | number, Date>
  namespace endOfHour {}

  const endOfHourWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfHourWithOptions {}

  const endOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace endOfISOWeek {}

  const endOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfISOWeekWithOptions {}

  const endOfISOWeekYear: CurriedFn1<Date | string | number, Date>
  namespace endOfISOWeekYear {}

  const endOfISOWeekYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfISOWeekYearWithOptions {}

  const endOfMinute: CurriedFn1<Date | string | number, Date>
  namespace endOfMinute {}

  const endOfMinuteWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfMinuteWithOptions {}

  const endOfMonth: CurriedFn1<Date | string | number, Date>
  namespace endOfMonth {}

  const endOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfMonthWithOptions {}

  const endOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace endOfQuarter {}

  const endOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfQuarterWithOptions {}

  const endOfSecond: CurriedFn1<Date | string | number, Date>
  namespace endOfSecond {}

  const endOfSecondWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfSecondWithOptions {}

  const endOfWeek: CurriedFn1<Date | string | number, Date>
  namespace endOfWeek {}

  const endOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfWeekWithOptions {}

  const endOfYear: CurriedFn1<Date | string | number, Date>
  namespace endOfYear {}

  const endOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfYearWithOptions {}

  const format: CurriedFn2<string, Date | string | number, string>
  namespace format {}

  const formatDistance: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace formatDistance {}

  const formatDistanceStrict: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace formatDistanceStrict {}

  const formatDistanceStrictWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace formatDistanceWithOptions {}

  const formatRelative: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace formatRelativeWithOptions {}

  const formatWithOptions: CurriedFn3<Options, string, Date | string | number, string>
  namespace formatWithOptions {}

  const getDate: CurriedFn1<Date | string | number, number>
  namespace getDate {}

  const getDateWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDateWithOptions {}

  const getDay: CurriedFn1<Date | string | number, number>
  namespace getDay {}

  const getDayOfYear: CurriedFn1<Date | string | number, number>
  namespace getDayOfYear {}

  const getDayOfYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDayOfYearWithOptions {}

  const getDaysInMonth: CurriedFn1<Date | string | number, number>
  namespace getDaysInMonth {}

  const getDaysInMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaysInMonthWithOptions {}

  const getDaysInYear: CurriedFn1<Date | string | number, number>
  namespace getDaysInYear {}

  const getDaysInYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaysInYearWithOptions {}

  const getDayWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDayWithOptions {}

  const getHours: CurriedFn1<Date | string | number, number>
  namespace getHours {}

  const getHoursWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getHoursWithOptions {}

  const getISODay: CurriedFn1<Date | string | number, number>
  namespace getISODay {}

  const getISODayWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISODayWithOptions {}

  const getISOWeek: CurriedFn1<Date | string | number, number>
  namespace getISOWeek {}

  const getISOWeeksInYear: CurriedFn1<Date | string | number, number>
  namespace getISOWeeksInYear {}

  const getISOWeeksInYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeeksInYearWithOptions {}

  const getISOWeekWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeekWithOptions {}

  const getISOWeekYear: CurriedFn1<Date | string | number, number>
  namespace getISOWeekYear {}

  const getISOWeekYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeekYearWithOptions {}

  const getMilliseconds: CurriedFn1<Date | string | number, number>
  namespace getMilliseconds {}

  const getMillisecondsWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMillisecondsWithOptions {}

  const getMinutes: CurriedFn1<Date | string | number, number>
  namespace getMinutes {}

  const getMinutesWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMinutesWithOptions {}

  const getMonth: CurriedFn1<Date | string | number, number>
  namespace getMonth {}

  const getMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMonthWithOptions {}

  const getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  const getOverlappingDaysInIntervalsWithOptions: CurriedFn3<Options, Interval, Interval, number>
  namespace getOverlappingDaysInIntervalsWithOptions {}

  const getQuarter: CurriedFn1<Date | string | number, number>
  namespace getQuarter {}

  const getQuarterWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getQuarterWithOptions {}

  const getSeconds: CurriedFn1<Date | string | number, number>
  namespace getSeconds {}

  const getSecondsWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getSecondsWithOptions {}

  const getTime: CurriedFn1<Date | string | number, number>
  namespace getTime {}

  const getTimeWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getTimeWithOptions {}

  const getWeek: CurriedFn1<Date | string | number, number>
  namespace getWeek {}

  const getWeekOfMonth: CurriedFn1<Date | string | number, number>
  namespace getWeekOfMonth {}

  const getWeekOfMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | string | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | string | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | string | number, number>
  namespace getYear {}

  const getYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getYearWithOptions {}

  const isAfter: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isAfter {}

  const isAfterWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isAfterWithOptions {}

  const isBefore: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isBefore {}

  const isBeforeWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isBeforeWithOptions {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isDateWithOptions: CurriedFn2<Options, any, boolean>
  namespace isDateWithOptions {}

  const isEqual: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isEqual {}

  const isEqualWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isEqualWithOptions {}

  const isFirstDayOfMonth: CurriedFn1<Date | string | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFirstDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isFirstDayOfMonthWithOptions {}

  const isFriday: CurriedFn1<Date | string | number, boolean>
  namespace isFriday {}

  const isFridayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isFridayWithOptions {}

  const isLastDayOfMonth: CurriedFn1<Date | string | number, boolean>
  namespace isLastDayOfMonth {}

  const isLastDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isLastDayOfMonthWithOptions {}

  const isLeapYear: CurriedFn1<Date | string | number, boolean>
  namespace isLeapYear {}

  const isLeapYearWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isLeapYearWithOptions {}

  const isMonday: CurriedFn1<Date | string | number, boolean>
  namespace isMonday {}

  const isMondayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isMondayWithOptions {}

  const isSameDay: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameDay {}

  const isSameDayWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameDayWithOptions {}

  const isSameHour: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameHour {}

  const isSameHourWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameHourWithOptions {}

  const isSameISOWeek: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeek {}

  const isSameISOWeekWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeekWithOptions {}

  const isSameISOWeekYear: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeekYear {}

  const isSameISOWeekYearWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeekYearWithOptions {}

  const isSameMinute: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameMinute {}

  const isSameMinuteWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameMinuteWithOptions {}

  const isSameMonth: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameMonth {}

  const isSameMonthWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameMonthWithOptions {}

  const isSameQuarter: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameQuarter {}

  const isSameQuarterWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameQuarterWithOptions {}

  const isSameSecond: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameSecond {}

  const isSameSecondWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameSecondWithOptions {}

  const isSameWeek: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameWeek {}

  const isSameWeekWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameWeekWithOptions {}

  const isSameYear: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameYear {}

  const isSameYearWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameYearWithOptions {}

  const isSaturday: CurriedFn1<Date | string | number, boolean>
  namespace isSaturday {}

  const isSaturdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isSaturdayWithOptions {}

  const isSunday: CurriedFn1<Date | string | number, boolean>
  namespace isSunday {}

  const isSundayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isSundayWithOptions {}

  const isThursday: CurriedFn1<Date | string | number, boolean>
  namespace isThursday {}

  const isThursdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isThursdayWithOptions {}

  const isTuesday: CurriedFn1<Date | string | number, boolean>
  namespace isTuesday {}

  const isTuesdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isTuesdayWithOptions {}

  const isValid: CurriedFn1<any, boolean>
  namespace isValid {}

  const isValidWithOptions: CurriedFn2<Options, any, boolean>
  namespace isValidWithOptions {}

  const isWednesday: CurriedFn1<Date | string | number, boolean>
  namespace isWednesday {}

  const isWednesdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isWednesdayWithOptions {}

  const isWeekend: CurriedFn1<Date | string | number, boolean>
  namespace isWeekend {}

  const isWeekendWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isWeekendWithOptions {}

  const isWithinInterval: CurriedFn2<Interval, Date | string | number, boolean>
  namespace isWithinInterval {}

  const isWithinIntervalWithOptions: CurriedFn3<Options, Interval, Date | string | number, boolean>
  namespace isWithinIntervalWithOptions {}

  const lastDayOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfISOWeek {}

  const lastDayOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfISOWeekWithOptions {}

  const lastDayOfISOWeekYear: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfISOWeekYear {}

  const lastDayOfISOWeekYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfISOWeekYearWithOptions {}

  const lastDayOfMonth: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfMonth {}

  const lastDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfMonthWithOptions {}

  const lastDayOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfQuarter {}

  const lastDayOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfYear {}

  const lastDayOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfYearWithOptions {}

  const max: CurriedFn1<(Date | string | number)[], Date>
  namespace max {}

  const maxWithOptions: CurriedFn2<Options, (Date | string | number)[], Date>
  namespace maxWithOptions {}

  const min: CurriedFn1<(Date | string | number)[], Date>
  namespace min {}

  const minWithOptions: CurriedFn2<Options, (Date | string | number)[], Date>
  namespace minWithOptions {}

  const parse: CurriedFn3<Date | string | number, string, string, Date>
  namespace parse {}

  const parseWithOptions: CurriedFn4<Options, Date | string | number, string, string, Date>
  namespace parseWithOptions {}

  const setDate: CurriedFn2<number, Date | string | number, Date>
  namespace setDate {}

  const setDateWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDateWithOptions {}

  const setDay: CurriedFn2<number, Date | string | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | string | number, Date>
  namespace setDayOfYear {}

  const setDayOfYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDayOfYearWithOptions {}

  const setDayWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDayWithOptions {}

  const setHours: CurriedFn2<number, Date | string | number, Date>
  namespace setHours {}

  const setHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setHoursWithOptions {}

  const setISODay: CurriedFn2<number, Date | string | number, Date>
  namespace setISODay {}

  const setISODayWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISODayWithOptions {}

  const setISOWeek: CurriedFn2<number, Date | string | number, Date>
  namespace setISOWeek {}

  const setISOWeekWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISOWeekWithOptions {}

  const setISOWeekYear: CurriedFn2<number, Date | string | number, Date>
  namespace setISOWeekYear {}

  const setISOWeekYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISOWeekYearWithOptions {}

  const setMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace setMilliseconds {}

  const setMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMillisecondsWithOptions {}

  const setMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace setMinutes {}

  const setMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMinutesWithOptions {}

  const setMonth: CurriedFn2<number, Date | string | number, Date>
  namespace setMonth {}

  const setMonthWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMonthWithOptions {}

  const setQuarter: CurriedFn2<number, Date | string | number, Date>
  namespace setQuarter {}

  const setQuarterWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setQuarterWithOptions {}

  const setSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace setSeconds {}

  const setSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setSecondsWithOptions {}

  const setWeek: CurriedFn2<number, Date | string | number, Date>
  namespace setWeek {}

  const setWeekWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | string | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setWeekYearWithOptions {}

  const setYear: CurriedFn2<number, Date | string | number, Date>
  namespace setYear {}

  const setYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setYearWithOptions {}

  const startOfDay: CurriedFn1<Date | string | number, Date>
  namespace startOfDay {}

  const startOfDayWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfDayWithOptions {}

  const startOfHour: CurriedFn1<Date | string | number, Date>
  namespace startOfHour {}

  const startOfHourWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfHourWithOptions {}

  const startOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace startOfISOWeek {}

  const startOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfISOWeekWithOptions {}

  const startOfISOWeekYear: CurriedFn1<Date | string | number, Date>
  namespace startOfISOWeekYear {}

  const startOfISOWeekYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfISOWeekYearWithOptions {}

  const startOfMinute: CurriedFn1<Date | string | number, Date>
  namespace startOfMinute {}

  const startOfMinuteWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfMinuteWithOptions {}

  const startOfMonth: CurriedFn1<Date | string | number, Date>
  namespace startOfMonth {}

  const startOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfMonthWithOptions {}

  const startOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace startOfQuarter {}

  const startOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfQuarterWithOptions {}

  const startOfSecond: CurriedFn1<Date | string | number, Date>
  namespace startOfSecond {}

  const startOfSecondWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfSecondWithOptions {}

  const startOfWeek: CurriedFn1<Date | string | number, Date>
  namespace startOfWeek {}

  const startOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | string | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | string | number, Date>
  namespace startOfYear {}

  const startOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfYearWithOptions {}

  const subDays: CurriedFn2<number, Date | string | number, Date>
  namespace subDays {}

  const subDaysWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subDaysWithOptions {}

  const subHours: CurriedFn2<number, Date | string | number, Date>
  namespace subHours {}

  const subHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subHoursWithOptions {}

  const subISOWeekYears: CurriedFn2<number, Date | string | number, Date>
  namespace subISOWeekYears {}

  const subISOWeekYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subISOWeekYearsWithOptions {}

  const subMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace subMilliseconds {}

  const subMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMillisecondsWithOptions {}

  const subMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace subMinutes {}

  const subMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMinutesWithOptions {}

  const subMonths: CurriedFn2<number, Date | string | number, Date>
  namespace subMonths {}

  const subMonthsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMonthsWithOptions {}

  const subQuarters: CurriedFn2<number, Date | string | number, Date>
  namespace subQuarters {}

  const subQuartersWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subQuartersWithOptions {}

  const subSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace subSeconds {}

  const subSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subSecondsWithOptions {}

  const subWeeks: CurriedFn2<number, Date | string | number, Date>
  namespace subWeeks {}

  const subWeeksWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subWeeksWithOptions {}

  const subYears: CurriedFn2<number, Date | string | number, Date>
  namespace subYears {}

  const subYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subYearsWithOptions {}

  const toDate: CurriedFn1<Date | string | number, Date>
  namespace toDate {}

  const toDateWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace toDateWithOptions {}
}

declare module 'date-fns/fp/addDays' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addDaysWithOptions' {
  import {addDaysWithOptions} from 'date-fns/fp'
  export = addDaysWithOptions
}

declare module 'date-fns/fp/addHours' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addHoursWithOptions' {
  import {addHoursWithOptions} from 'date-fns/fp'
  export = addHoursWithOptions
}

declare module 'date-fns/fp/addISOWeekYears' {
  import {addISOWeekYears} from 'date-fns/fp'
  export = addISOWeekYears
}

declare module 'date-fns/fp/addISOWeekYearsWithOptions' {
  import {addISOWeekYearsWithOptions} from 'date-fns/fp'
  export = addISOWeekYearsWithOptions
}

declare module 'date-fns/fp/addMilliseconds' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMillisecondsWithOptions' {
  import {addMillisecondsWithOptions} from 'date-fns/fp'
  export = addMillisecondsWithOptions
}

declare module 'date-fns/fp/addMinutes' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMinutesWithOptions' {
  import {addMinutesWithOptions} from 'date-fns/fp'
  export = addMinutesWithOptions
}

declare module 'date-fns/fp/addMonths' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addMonthsWithOptions' {
  import {addMonthsWithOptions} from 'date-fns/fp'
  export = addMonthsWithOptions
}

declare module 'date-fns/fp/addQuarters' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addQuartersWithOptions' {
  import {addQuartersWithOptions} from 'date-fns/fp'
  export = addQuartersWithOptions
}

declare module 'date-fns/fp/addSeconds' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addSecondsWithOptions' {
  import {addSecondsWithOptions} from 'date-fns/fp'
  export = addSecondsWithOptions
}

declare module 'date-fns/fp/addWeeks' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addWeeksWithOptions' {
  import {addWeeksWithOptions} from 'date-fns/fp'
  export = addWeeksWithOptions
}

declare module 'date-fns/fp/addYears' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/addYearsWithOptions' {
  import {addYearsWithOptions} from 'date-fns/fp'
  export = addYearsWithOptions
}

declare module 'date-fns/fp/areIntervalsOverlapping' {
  import {areIntervalsOverlapping} from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/areIntervalsOverlappingWithOptions' {
  import {areIntervalsOverlappingWithOptions} from 'date-fns/fp'
  export = areIntervalsOverlappingWithOptions
}

declare module 'date-fns/fp/closestIndexTo' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestIndexToWithOptions' {
  import {closestIndexToWithOptions} from 'date-fns/fp'
  export = closestIndexToWithOptions
}

declare module 'date-fns/fp/closestTo' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/closestToWithOptions' {
  import {closestToWithOptions} from 'date-fns/fp'
  export = closestToWithOptions
}

declare module 'date-fns/fp/compareAsc' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareAscWithOptions' {
  import {compareAscWithOptions} from 'date-fns/fp'
  export = compareAscWithOptions
}

declare module 'date-fns/fp/compareDesc' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/compareDescWithOptions' {
  import {compareDescWithOptions} from 'date-fns/fp'
  export = compareDescWithOptions
}

declare module 'date-fns/fp/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarDaysWithOptions' {
  import {differenceInCalendarDaysWithOptions} from 'date-fns/fp'
  export = differenceInCalendarDaysWithOptions
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOWeeksWithOptions' {
  import {differenceInCalendarISOWeeksWithOptions} from 'date-fns/fp'
  export = differenceInCalendarISOWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYears' {
  import {differenceInCalendarISOWeekYears} from 'date-fns/fp'
  export = differenceInCalendarISOWeekYears
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYearsWithOptions' {
  import {differenceInCalendarISOWeekYearsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarISOWeekYearsWithOptions
}

declare module 'date-fns/fp/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarMonthsWithOptions' {
  import {differenceInCalendarMonthsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarMonthsWithOptions
}

declare module 'date-fns/fp/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarQuartersWithOptions' {
  import {differenceInCalendarQuartersWithOptions} from 'date-fns/fp'
  export = differenceInCalendarQuartersWithOptions
}

declare module 'date-fns/fp/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions' {
  import {differenceInCalendarWeeksWithOptions} from 'date-fns/fp'
  export = differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInCalendarYearsWithOptions' {
  import {differenceInCalendarYearsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarYearsWithOptions
}

declare module 'date-fns/fp/differenceInDays' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInDaysWithOptions' {
  import {differenceInDaysWithOptions} from 'date-fns/fp'
  export = differenceInDaysWithOptions
}

declare module 'date-fns/fp/differenceInHours' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInHoursWithOptions' {
  import {differenceInHoursWithOptions} from 'date-fns/fp'
  export = differenceInHoursWithOptions
}

declare module 'date-fns/fp/differenceInISOWeekYears' {
  import {differenceInISOWeekYears} from 'date-fns/fp'
  export = differenceInISOWeekYears
}

declare module 'date-fns/fp/differenceInISOWeekYearsWithOptions' {
  import {differenceInISOWeekYearsWithOptions} from 'date-fns/fp'
  export = differenceInISOWeekYearsWithOptions
}

declare module 'date-fns/fp/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMillisecondsWithOptions' {
  import {differenceInMillisecondsWithOptions} from 'date-fns/fp'
  export = differenceInMillisecondsWithOptions
}

declare module 'date-fns/fp/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMinutesWithOptions' {
  import {differenceInMinutesWithOptions} from 'date-fns/fp'
  export = differenceInMinutesWithOptions
}

declare module 'date-fns/fp/differenceInMonths' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInMonthsWithOptions' {
  import {differenceInMonthsWithOptions} from 'date-fns/fp'
  export = differenceInMonthsWithOptions
}

declare module 'date-fns/fp/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInQuartersWithOptions' {
  import {differenceInQuartersWithOptions} from 'date-fns/fp'
  export = differenceInQuartersWithOptions
}

declare module 'date-fns/fp/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInSecondsWithOptions' {
  import {differenceInSecondsWithOptions} from 'date-fns/fp'
  export = differenceInSecondsWithOptions
}

declare module 'date-fns/fp/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInWeeksWithOptions' {
  import {differenceInWeeksWithOptions} from 'date-fns/fp'
  export = differenceInWeeksWithOptions
}

declare module 'date-fns/fp/differenceInYears' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/differenceInYearsWithOptions' {
  import {differenceInYearsWithOptions} from 'date-fns/fp'
  export = differenceInYearsWithOptions
}

declare module 'date-fns/fp/eachDayOfInterval' {
  import {eachDayOfInterval} from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions' {
  import {eachDayOfIntervalWithOptions} from 'date-fns/fp'
  export = eachDayOfIntervalWithOptions
}

declare module 'date-fns/fp/eachWeekOfInterval' {
  import {eachWeekOfInterval} from 'date-fns/fp'
  export = eachWeekOfInterval
}

declare module 'date-fns/fp/eachWeekOfIntervalWithOptions' {
  import {eachWeekOfIntervalWithOptions} from 'date-fns/fp'
  export = eachWeekOfIntervalWithOptions
}

declare module 'date-fns/fp/endOfDay' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfDayWithOptions' {
  import {endOfDayWithOptions} from 'date-fns/fp'
  export = endOfDayWithOptions
}

declare module 'date-fns/fp/endOfHour' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfHourWithOptions' {
  import {endOfHourWithOptions} from 'date-fns/fp'
  export = endOfHourWithOptions
}

declare module 'date-fns/fp/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOWeekWithOptions' {
  import {endOfISOWeekWithOptions} from 'date-fns/fp'
  export = endOfISOWeekWithOptions
}

declare module 'date-fns/fp/endOfISOWeekYear' {
  import {endOfISOWeekYear} from 'date-fns/fp'
  export = endOfISOWeekYear
}

declare module 'date-fns/fp/endOfISOWeekYearWithOptions' {
  import {endOfISOWeekYearWithOptions} from 'date-fns/fp'
  export = endOfISOWeekYearWithOptions
}

declare module 'date-fns/fp/endOfMinute' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMinuteWithOptions' {
  import {endOfMinuteWithOptions} from 'date-fns/fp'
  export = endOfMinuteWithOptions
}

declare module 'date-fns/fp/endOfMonth' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfMonthWithOptions' {
  import {endOfMonthWithOptions} from 'date-fns/fp'
  export = endOfMonthWithOptions
}

declare module 'date-fns/fp/endOfQuarter' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfQuarterWithOptions' {
  import {endOfQuarterWithOptions} from 'date-fns/fp'
  export = endOfQuarterWithOptions
}

declare module 'date-fns/fp/endOfSecond' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfSecondWithOptions' {
  import {endOfSecondWithOptions} from 'date-fns/fp'
  export = endOfSecondWithOptions
}

declare module 'date-fns/fp/endOfWeek' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfWeekWithOptions' {
  import {endOfWeekWithOptions} from 'date-fns/fp'
  export = endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYear' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/endOfYearWithOptions' {
  import {endOfYearWithOptions} from 'date-fns/fp'
  export = endOfYearWithOptions
}

declare module 'date-fns/fp/format' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/formatDistance' {
  import {formatDistance} from 'date-fns/fp'
  export = formatDistance
}

declare module 'date-fns/fp/formatDistanceStrict' {
  import {formatDistanceStrict} from 'date-fns/fp'
  export = formatDistanceStrict
}

declare module 'date-fns/fp/formatDistanceStrictWithOptions' {
  import {formatDistanceStrictWithOptions} from 'date-fns/fp'
  export = formatDistanceStrictWithOptions
}

declare module 'date-fns/fp/formatDistanceWithOptions' {
  import {formatDistanceWithOptions} from 'date-fns/fp'
  export = formatDistanceWithOptions
}

declare module 'date-fns/fp/formatRelative' {
  import {formatRelative} from 'date-fns/fp'
  export = formatRelative
}

declare module 'date-fns/fp/formatRelativeWithOptions' {
  import {formatRelativeWithOptions} from 'date-fns/fp'
  export = formatRelativeWithOptions
}

declare module 'date-fns/fp/formatWithOptions' {
  import {formatWithOptions} from 'date-fns/fp'
  export = formatWithOptions
}

declare module 'date-fns/fp/getDate' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDateWithOptions' {
  import {getDateWithOptions} from 'date-fns/fp'
  export = getDateWithOptions
}

declare module 'date-fns/fp/getDay' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDayOfYearWithOptions' {
  import {getDayOfYearWithOptions} from 'date-fns/fp'
  export = getDayOfYearWithOptions
}

declare module 'date-fns/fp/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInMonthWithOptions' {
  import {getDaysInMonthWithOptions} from 'date-fns/fp'
  export = getDaysInMonthWithOptions
}

declare module 'date-fns/fp/getDaysInYear' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getDaysInYearWithOptions' {
  import {getDaysInYearWithOptions} from 'date-fns/fp'
  export = getDaysInYearWithOptions
}

declare module 'date-fns/fp/getDayWithOptions' {
  import {getDayWithOptions} from 'date-fns/fp'
  export = getDayWithOptions
}

declare module 'date-fns/fp/getHours' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getHoursWithOptions' {
  import {getHoursWithOptions} from 'date-fns/fp'
  export = getHoursWithOptions
}

declare module 'date-fns/fp/getISODay' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISODayWithOptions' {
  import {getISODayWithOptions} from 'date-fns/fp'
  export = getISODayWithOptions
}

declare module 'date-fns/fp/getISOWeek' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOWeeksInYearWithOptions' {
  import {getISOWeeksInYearWithOptions} from 'date-fns/fp'
  export = getISOWeeksInYearWithOptions
}

declare module 'date-fns/fp/getISOWeekWithOptions' {
  import {getISOWeekWithOptions} from 'date-fns/fp'
  export = getISOWeekWithOptions
}

declare module 'date-fns/fp/getISOWeekYear' {
  import {getISOWeekYear} from 'date-fns/fp'
  export = getISOWeekYear
}

declare module 'date-fns/fp/getISOWeekYearWithOptions' {
  import {getISOWeekYearWithOptions} from 'date-fns/fp'
  export = getISOWeekYearWithOptions
}

declare module 'date-fns/fp/getMilliseconds' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMillisecondsWithOptions' {
  import {getMillisecondsWithOptions} from 'date-fns/fp'
  export = getMillisecondsWithOptions
}

declare module 'date-fns/fp/getMinutes' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMinutesWithOptions' {
  import {getMinutesWithOptions} from 'date-fns/fp'
  export = getMinutesWithOptions
}

declare module 'date-fns/fp/getMonth' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getMonthWithOptions' {
  import {getMonthWithOptions} from 'date-fns/fp'
  export = getMonthWithOptions
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getOverlappingDaysInIntervalsWithOptions' {
  import {getOverlappingDaysInIntervalsWithOptions} from 'date-fns/fp'
  export = getOverlappingDaysInIntervalsWithOptions
}

declare module 'date-fns/fp/getQuarter' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getQuarterWithOptions' {
  import {getQuarterWithOptions} from 'date-fns/fp'
  export = getQuarterWithOptions
}

declare module 'date-fns/fp/getSeconds' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getSecondsWithOptions' {
  import {getSecondsWithOptions} from 'date-fns/fp'
  export = getSecondsWithOptions
}

declare module 'date-fns/fp/getTime' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getTimeWithOptions' {
  import {getTimeWithOptions} from 'date-fns/fp'
  export = getTimeWithOptions
}

declare module 'date-fns/fp/getWeek' {
  import {getWeek} from 'date-fns/fp'
  export = getWeek
}

declare module 'date-fns/fp/getWeekOfMonth' {
  import {getWeekOfMonth} from 'date-fns/fp'
  export = getWeekOfMonth
}

declare module 'date-fns/fp/getWeekOfMonthWithOptions' {
  import {getWeekOfMonthWithOptions} from 'date-fns/fp'
  export = getWeekOfMonthWithOptions
}

declare module 'date-fns/fp/getWeeksInMonth' {
  import {getWeeksInMonth} from 'date-fns/fp'
  export = getWeeksInMonth
}

declare module 'date-fns/fp/getWeeksInMonthWithOptions' {
  import {getWeeksInMonthWithOptions} from 'date-fns/fp'
  export = getWeeksInMonthWithOptions
}

declare module 'date-fns/fp/getWeekWithOptions' {
  import {getWeekWithOptions} from 'date-fns/fp'
  export = getWeekWithOptions
}

declare module 'date-fns/fp/getWeekYear' {
  import {getWeekYear} from 'date-fns/fp'
  export = getWeekYear
}

declare module 'date-fns/fp/getWeekYearWithOptions' {
  import {getWeekYearWithOptions} from 'date-fns/fp'
  export = getWeekYearWithOptions
}

declare module 'date-fns/fp/getYear' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/getYearWithOptions' {
  import {getYearWithOptions} from 'date-fns/fp'
  export = getYearWithOptions
}

declare module 'date-fns/fp/isAfter' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isAfterWithOptions' {
  import {isAfterWithOptions} from 'date-fns/fp'
  export = isAfterWithOptions
}

declare module 'date-fns/fp/isBefore' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isBeforeWithOptions' {
  import {isBeforeWithOptions} from 'date-fns/fp'
  export = isBeforeWithOptions
}

declare module 'date-fns/fp/isDate' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isDateWithOptions' {
  import {isDateWithOptions} from 'date-fns/fp'
  export = isDateWithOptions
}

declare module 'date-fns/fp/isEqual' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isEqualWithOptions' {
  import {isEqualWithOptions} from 'date-fns/fp'
  export = isEqualWithOptions
}

declare module 'date-fns/fp/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFirstDayOfMonthWithOptions' {
  import {isFirstDayOfMonthWithOptions} from 'date-fns/fp'
  export = isFirstDayOfMonthWithOptions
}

declare module 'date-fns/fp/isFriday' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isFridayWithOptions' {
  import {isFridayWithOptions} from 'date-fns/fp'
  export = isFridayWithOptions
}

declare module 'date-fns/fp/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLastDayOfMonthWithOptions' {
  import {isLastDayOfMonthWithOptions} from 'date-fns/fp'
  export = isLastDayOfMonthWithOptions
}

declare module 'date-fns/fp/isLeapYear' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isLeapYearWithOptions' {
  import {isLeapYearWithOptions} from 'date-fns/fp'
  export = isLeapYearWithOptions
}

declare module 'date-fns/fp/isMonday' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isMondayWithOptions' {
  import {isMondayWithOptions} from 'date-fns/fp'
  export = isMondayWithOptions
}

declare module 'date-fns/fp/isSameDay' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameDayWithOptions' {
  import {isSameDayWithOptions} from 'date-fns/fp'
  export = isSameDayWithOptions
}

declare module 'date-fns/fp/isSameHour' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameHourWithOptions' {
  import {isSameHourWithOptions} from 'date-fns/fp'
  export = isSameHourWithOptions
}

declare module 'date-fns/fp/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOWeekWithOptions' {
  import {isSameISOWeekWithOptions} from 'date-fns/fp'
  export = isSameISOWeekWithOptions
}

declare module 'date-fns/fp/isSameISOWeekYear' {
  import {isSameISOWeekYear} from 'date-fns/fp'
  export = isSameISOWeekYear
}

declare module 'date-fns/fp/isSameISOWeekYearWithOptions' {
  import {isSameISOWeekYearWithOptions} from 'date-fns/fp'
  export = isSameISOWeekYearWithOptions
}

declare module 'date-fns/fp/isSameMinute' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMinuteWithOptions' {
  import {isSameMinuteWithOptions} from 'date-fns/fp'
  export = isSameMinuteWithOptions
}

declare module 'date-fns/fp/isSameMonth' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameMonthWithOptions' {
  import {isSameMonthWithOptions} from 'date-fns/fp'
  export = isSameMonthWithOptions
}

declare module 'date-fns/fp/isSameQuarter' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameQuarterWithOptions' {
  import {isSameQuarterWithOptions} from 'date-fns/fp'
  export = isSameQuarterWithOptions
}

declare module 'date-fns/fp/isSameSecond' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameSecondWithOptions' {
  import {isSameSecondWithOptions} from 'date-fns/fp'
  export = isSameSecondWithOptions
}

declare module 'date-fns/fp/isSameWeek' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameWeekWithOptions' {
  import {isSameWeekWithOptions} from 'date-fns/fp'
  export = isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYear' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSameYearWithOptions' {
  import {isSameYearWithOptions} from 'date-fns/fp'
  export = isSameYearWithOptions
}

declare module 'date-fns/fp/isSaturday' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSaturdayWithOptions' {
  import {isSaturdayWithOptions} from 'date-fns/fp'
  export = isSaturdayWithOptions
}

declare module 'date-fns/fp/isSunday' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isSundayWithOptions' {
  import {isSundayWithOptions} from 'date-fns/fp'
  export = isSundayWithOptions
}

declare module 'date-fns/fp/isThursday' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isThursdayWithOptions' {
  import {isThursdayWithOptions} from 'date-fns/fp'
  export = isThursdayWithOptions
}

declare module 'date-fns/fp/isTuesday' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isTuesdayWithOptions' {
  import {isTuesdayWithOptions} from 'date-fns/fp'
  export = isTuesdayWithOptions
}

declare module 'date-fns/fp/isValid' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isValidWithOptions' {
  import {isValidWithOptions} from 'date-fns/fp'
  export = isValidWithOptions
}

declare module 'date-fns/fp/isWednesday' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWednesdayWithOptions' {
  import {isWednesdayWithOptions} from 'date-fns/fp'
  export = isWednesdayWithOptions
}

declare module 'date-fns/fp/isWeekend' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWeekendWithOptions' {
  import {isWeekendWithOptions} from 'date-fns/fp'
  export = isWeekendWithOptions
}

declare module 'date-fns/fp/isWithinInterval' {
  import {isWithinInterval} from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/isWithinIntervalWithOptions' {
  import {isWithinIntervalWithOptions} from 'date-fns/fp'
  export = isWithinIntervalWithOptions
}

declare module 'date-fns/fp/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOWeekWithOptions' {
  import {lastDayOfISOWeekWithOptions} from 'date-fns/fp'
  export = lastDayOfISOWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfISOWeekYear' {
  import {lastDayOfISOWeekYear} from 'date-fns/fp'
  export = lastDayOfISOWeekYear
}

declare module 'date-fns/fp/lastDayOfISOWeekYearWithOptions' {
  import {lastDayOfISOWeekYearWithOptions} from 'date-fns/fp'
  export = lastDayOfISOWeekYearWithOptions
}

declare module 'date-fns/fp/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfMonthWithOptions' {
  import {lastDayOfMonthWithOptions} from 'date-fns/fp'
  export = lastDayOfMonthWithOptions
}

declare module 'date-fns/fp/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions' {
  import {lastDayOfQuarterWithOptions} from 'date-fns/fp'
  export = lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions' {
  import {lastDayOfWeekWithOptions} from 'date-fns/fp'
  export = lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/lastDayOfYearWithOptions' {
  import {lastDayOfYearWithOptions} from 'date-fns/fp'
  export = lastDayOfYearWithOptions
}

declare module 'date-fns/fp/max' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/maxWithOptions' {
  import {maxWithOptions} from 'date-fns/fp'
  export = maxWithOptions
}

declare module 'date-fns/fp/min' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/minWithOptions' {
  import {minWithOptions} from 'date-fns/fp'
  export = minWithOptions
}

declare module 'date-fns/fp/parse' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/parseWithOptions' {
  import {parseWithOptions} from 'date-fns/fp'
  export = parseWithOptions
}

declare module 'date-fns/fp/setDate' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDateWithOptions' {
  import {setDateWithOptions} from 'date-fns/fp'
  export = setDateWithOptions
}

declare module 'date-fns/fp/setDay' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setDayOfYearWithOptions' {
  import {setDayOfYearWithOptions} from 'date-fns/fp'
  export = setDayOfYearWithOptions
}

declare module 'date-fns/fp/setDayWithOptions' {
  import {setDayWithOptions} from 'date-fns/fp'
  export = setDayWithOptions
}

declare module 'date-fns/fp/setHours' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setHoursWithOptions' {
  import {setHoursWithOptions} from 'date-fns/fp'
  export = setHoursWithOptions
}

declare module 'date-fns/fp/setISODay' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISODayWithOptions' {
  import {setISODayWithOptions} from 'date-fns/fp'
  export = setISODayWithOptions
}

declare module 'date-fns/fp/setISOWeek' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOWeekWithOptions' {
  import {setISOWeekWithOptions} from 'date-fns/fp'
  export = setISOWeekWithOptions
}

declare module 'date-fns/fp/setISOWeekYear' {
  import {setISOWeekYear} from 'date-fns/fp'
  export = setISOWeekYear
}

declare module 'date-fns/fp/setISOWeekYearWithOptions' {
  import {setISOWeekYearWithOptions} from 'date-fns/fp'
  export = setISOWeekYearWithOptions
}

declare module 'date-fns/fp/setMilliseconds' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMillisecondsWithOptions' {
  import {setMillisecondsWithOptions} from 'date-fns/fp'
  export = setMillisecondsWithOptions
}

declare module 'date-fns/fp/setMinutes' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMinutesWithOptions' {
  import {setMinutesWithOptions} from 'date-fns/fp'
  export = setMinutesWithOptions
}

declare module 'date-fns/fp/setMonth' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setMonthWithOptions' {
  import {setMonthWithOptions} from 'date-fns/fp'
  export = setMonthWithOptions
}

declare module 'date-fns/fp/setQuarter' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setQuarterWithOptions' {
  import {setQuarterWithOptions} from 'date-fns/fp'
  export = setQuarterWithOptions
}

declare module 'date-fns/fp/setSeconds' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setSecondsWithOptions' {
  import {setSecondsWithOptions} from 'date-fns/fp'
  export = setSecondsWithOptions
}

declare module 'date-fns/fp/setWeek' {
  import {setWeek} from 'date-fns/fp'
  export = setWeek
}

declare module 'date-fns/fp/setWeekWithOptions' {
  import {setWeekWithOptions} from 'date-fns/fp'
  export = setWeekWithOptions
}

declare module 'date-fns/fp/setWeekYear' {
  import {setWeekYear} from 'date-fns/fp'
  export = setWeekYear
}

declare module 'date-fns/fp/setWeekYearWithOptions' {
  import {setWeekYearWithOptions} from 'date-fns/fp'
  export = setWeekYearWithOptions
}

declare module 'date-fns/fp/setYear' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/setYearWithOptions' {
  import {setYearWithOptions} from 'date-fns/fp'
  export = setYearWithOptions
}

declare module 'date-fns/fp/startOfDay' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfDayWithOptions' {
  import {startOfDayWithOptions} from 'date-fns/fp'
  export = startOfDayWithOptions
}

declare module 'date-fns/fp/startOfHour' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfHourWithOptions' {
  import {startOfHourWithOptions} from 'date-fns/fp'
  export = startOfHourWithOptions
}

declare module 'date-fns/fp/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOWeekWithOptions' {
  import {startOfISOWeekWithOptions} from 'date-fns/fp'
  export = startOfISOWeekWithOptions
}

declare module 'date-fns/fp/startOfISOWeekYear' {
  import {startOfISOWeekYear} from 'date-fns/fp'
  export = startOfISOWeekYear
}

declare module 'date-fns/fp/startOfISOWeekYearWithOptions' {
  import {startOfISOWeekYearWithOptions} from 'date-fns/fp'
  export = startOfISOWeekYearWithOptions
}

declare module 'date-fns/fp/startOfMinute' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMinuteWithOptions' {
  import {startOfMinuteWithOptions} from 'date-fns/fp'
  export = startOfMinuteWithOptions
}

declare module 'date-fns/fp/startOfMonth' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfMonthWithOptions' {
  import {startOfMonthWithOptions} from 'date-fns/fp'
  export = startOfMonthWithOptions
}

declare module 'date-fns/fp/startOfQuarter' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfQuarterWithOptions' {
  import {startOfQuarterWithOptions} from 'date-fns/fp'
  export = startOfQuarterWithOptions
}

declare module 'date-fns/fp/startOfSecond' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfSecondWithOptions' {
  import {startOfSecondWithOptions} from 'date-fns/fp'
  export = startOfSecondWithOptions
}

declare module 'date-fns/fp/startOfWeek' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfWeekWithOptions' {
  import {startOfWeekWithOptions} from 'date-fns/fp'
  export = startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfWeekYear' {
  import {startOfWeekYear} from 'date-fns/fp'
  export = startOfWeekYear
}

declare module 'date-fns/fp/startOfWeekYearWithOptions' {
  import {startOfWeekYearWithOptions} from 'date-fns/fp'
  export = startOfWeekYearWithOptions
}

declare module 'date-fns/fp/startOfYear' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/startOfYearWithOptions' {
  import {startOfYearWithOptions} from 'date-fns/fp'
  export = startOfYearWithOptions
}

declare module 'date-fns/fp/subDays' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subDaysWithOptions' {
  import {subDaysWithOptions} from 'date-fns/fp'
  export = subDaysWithOptions
}

declare module 'date-fns/fp/subHours' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subHoursWithOptions' {
  import {subHoursWithOptions} from 'date-fns/fp'
  export = subHoursWithOptions
}

declare module 'date-fns/fp/subISOWeekYears' {
  import {subISOWeekYears} from 'date-fns/fp'
  export = subISOWeekYears
}

declare module 'date-fns/fp/subISOWeekYearsWithOptions' {
  import {subISOWeekYearsWithOptions} from 'date-fns/fp'
  export = subISOWeekYearsWithOptions
}

declare module 'date-fns/fp/subMilliseconds' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMillisecondsWithOptions' {
  import {subMillisecondsWithOptions} from 'date-fns/fp'
  export = subMillisecondsWithOptions
}

declare module 'date-fns/fp/subMinutes' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMinutesWithOptions' {
  import {subMinutesWithOptions} from 'date-fns/fp'
  export = subMinutesWithOptions
}

declare module 'date-fns/fp/subMonths' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subMonthsWithOptions' {
  import {subMonthsWithOptions} from 'date-fns/fp'
  export = subMonthsWithOptions
}

declare module 'date-fns/fp/subQuarters' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subQuartersWithOptions' {
  import {subQuartersWithOptions} from 'date-fns/fp'
  export = subQuartersWithOptions
}

declare module 'date-fns/fp/subSeconds' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subSecondsWithOptions' {
  import {subSecondsWithOptions} from 'date-fns/fp'
  export = subSecondsWithOptions
}

declare module 'date-fns/fp/subWeeks' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subWeeksWithOptions' {
  import {subWeeksWithOptions} from 'date-fns/fp'
  export = subWeeksWithOptions
}

declare module 'date-fns/fp/subYears' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/subYearsWithOptions' {
  import {subYearsWithOptions} from 'date-fns/fp'
  export = subYearsWithOptions
}

declare module 'date-fns/fp/toDate' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/toDateWithOptions' {
  import {toDateWithOptions} from 'date-fns/fp'
  export = toDateWithOptions
}

declare module 'date-fns/fp/addDays/index' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addDaysWithOptions/index' {
  import {addDaysWithOptions} from 'date-fns/fp'
  export = addDaysWithOptions
}

declare module 'date-fns/fp/addHours/index' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addHoursWithOptions/index' {
  import {addHoursWithOptions} from 'date-fns/fp'
  export = addHoursWithOptions
}

declare module 'date-fns/fp/addISOWeekYears/index' {
  import {addISOWeekYears} from 'date-fns/fp'
  export = addISOWeekYears
}

declare module 'date-fns/fp/addISOWeekYearsWithOptions/index' {
  import {addISOWeekYearsWithOptions} from 'date-fns/fp'
  export = addISOWeekYearsWithOptions
}

declare module 'date-fns/fp/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMillisecondsWithOptions/index' {
  import {addMillisecondsWithOptions} from 'date-fns/fp'
  export = addMillisecondsWithOptions
}

declare module 'date-fns/fp/addMinutes/index' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMinutesWithOptions/index' {
  import {addMinutesWithOptions} from 'date-fns/fp'
  export = addMinutesWithOptions
}

declare module 'date-fns/fp/addMonths/index' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addMonthsWithOptions/index' {
  import {addMonthsWithOptions} from 'date-fns/fp'
  export = addMonthsWithOptions
}

declare module 'date-fns/fp/addQuarters/index' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addQuartersWithOptions/index' {
  import {addQuartersWithOptions} from 'date-fns/fp'
  export = addQuartersWithOptions
}

declare module 'date-fns/fp/addSeconds/index' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addSecondsWithOptions/index' {
  import {addSecondsWithOptions} from 'date-fns/fp'
  export = addSecondsWithOptions
}

declare module 'date-fns/fp/addWeeks/index' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addWeeksWithOptions/index' {
  import {addWeeksWithOptions} from 'date-fns/fp'
  export = addWeeksWithOptions
}

declare module 'date-fns/fp/addYears/index' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/addYearsWithOptions/index' {
  import {addYearsWithOptions} from 'date-fns/fp'
  export = addYearsWithOptions
}

declare module 'date-fns/fp/areIntervalsOverlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/areIntervalsOverlappingWithOptions/index' {
  import {areIntervalsOverlappingWithOptions} from 'date-fns/fp'
  export = areIntervalsOverlappingWithOptions
}

declare module 'date-fns/fp/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestIndexToWithOptions/index' {
  import {closestIndexToWithOptions} from 'date-fns/fp'
  export = closestIndexToWithOptions
}

declare module 'date-fns/fp/closestTo/index' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/closestToWithOptions/index' {
  import {closestToWithOptions} from 'date-fns/fp'
  export = closestToWithOptions
}

declare module 'date-fns/fp/compareAsc/index' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareAscWithOptions/index' {
  import {compareAscWithOptions} from 'date-fns/fp'
  export = compareAscWithOptions
}

declare module 'date-fns/fp/compareDesc/index' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/compareDescWithOptions/index' {
  import {compareDescWithOptions} from 'date-fns/fp'
  export = compareDescWithOptions
}

declare module 'date-fns/fp/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarDaysWithOptions/index' {
  import {differenceInCalendarDaysWithOptions} from 'date-fns/fp'
  export = differenceInCalendarDaysWithOptions
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOWeeksWithOptions/index' {
  import {differenceInCalendarISOWeeksWithOptions} from 'date-fns/fp'
  export = differenceInCalendarISOWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYears/index' {
  import {differenceInCalendarISOWeekYears} from 'date-fns/fp'
  export = differenceInCalendarISOWeekYears
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYearsWithOptions/index' {
  import {differenceInCalendarISOWeekYearsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarISOWeekYearsWithOptions
}

declare module 'date-fns/fp/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarMonthsWithOptions/index' {
  import {differenceInCalendarMonthsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarMonthsWithOptions
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarQuartersWithOptions/index' {
  import {differenceInCalendarQuartersWithOptions} from 'date-fns/fp'
  export = differenceInCalendarQuartersWithOptions
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions/index' {
  import {differenceInCalendarWeeksWithOptions} from 'date-fns/fp'
  export = differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInCalendarYearsWithOptions/index' {
  import {differenceInCalendarYearsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarYearsWithOptions
}

declare module 'date-fns/fp/differenceInDays/index' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInDaysWithOptions/index' {
  import {differenceInDaysWithOptions} from 'date-fns/fp'
  export = differenceInDaysWithOptions
}

declare module 'date-fns/fp/differenceInHours/index' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInHoursWithOptions/index' {
  import {differenceInHoursWithOptions} from 'date-fns/fp'
  export = differenceInHoursWithOptions
}

declare module 'date-fns/fp/differenceInISOWeekYears/index' {
  import {differenceInISOWeekYears} from 'date-fns/fp'
  export = differenceInISOWeekYears
}

declare module 'date-fns/fp/differenceInISOWeekYearsWithOptions/index' {
  import {differenceInISOWeekYearsWithOptions} from 'date-fns/fp'
  export = differenceInISOWeekYearsWithOptions
}

declare module 'date-fns/fp/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMillisecondsWithOptions/index' {
  import {differenceInMillisecondsWithOptions} from 'date-fns/fp'
  export = differenceInMillisecondsWithOptions
}

declare module 'date-fns/fp/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMinutesWithOptions/index' {
  import {differenceInMinutesWithOptions} from 'date-fns/fp'
  export = differenceInMinutesWithOptions
}

declare module 'date-fns/fp/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInMonthsWithOptions/index' {
  import {differenceInMonthsWithOptions} from 'date-fns/fp'
  export = differenceInMonthsWithOptions
}

declare module 'date-fns/fp/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInQuartersWithOptions/index' {
  import {differenceInQuartersWithOptions} from 'date-fns/fp'
  export = differenceInQuartersWithOptions
}

declare module 'date-fns/fp/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInSecondsWithOptions/index' {
  import {differenceInSecondsWithOptions} from 'date-fns/fp'
  export = differenceInSecondsWithOptions
}

declare module 'date-fns/fp/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInWeeksWithOptions/index' {
  import {differenceInWeeksWithOptions} from 'date-fns/fp'
  export = differenceInWeeksWithOptions
}

declare module 'date-fns/fp/differenceInYears/index' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/differenceInYearsWithOptions/index' {
  import {differenceInYearsWithOptions} from 'date-fns/fp'
  export = differenceInYearsWithOptions
}

declare module 'date-fns/fp/eachDayOfInterval/index' {
  import {eachDayOfInterval} from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions/index' {
  import {eachDayOfIntervalWithOptions} from 'date-fns/fp'
  export = eachDayOfIntervalWithOptions
}

declare module 'date-fns/fp/eachWeekOfInterval/index' {
  import {eachWeekOfInterval} from 'date-fns/fp'
  export = eachWeekOfInterval
}

declare module 'date-fns/fp/eachWeekOfIntervalWithOptions/index' {
  import {eachWeekOfIntervalWithOptions} from 'date-fns/fp'
  export = eachWeekOfIntervalWithOptions
}

declare module 'date-fns/fp/endOfDay/index' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfDayWithOptions/index' {
  import {endOfDayWithOptions} from 'date-fns/fp'
  export = endOfDayWithOptions
}

declare module 'date-fns/fp/endOfHour/index' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfHourWithOptions/index' {
  import {endOfHourWithOptions} from 'date-fns/fp'
  export = endOfHourWithOptions
}

declare module 'date-fns/fp/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOWeekWithOptions/index' {
  import {endOfISOWeekWithOptions} from 'date-fns/fp'
  export = endOfISOWeekWithOptions
}

declare module 'date-fns/fp/endOfISOWeekYear/index' {
  import {endOfISOWeekYear} from 'date-fns/fp'
  export = endOfISOWeekYear
}

declare module 'date-fns/fp/endOfISOWeekYearWithOptions/index' {
  import {endOfISOWeekYearWithOptions} from 'date-fns/fp'
  export = endOfISOWeekYearWithOptions
}

declare module 'date-fns/fp/endOfMinute/index' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMinuteWithOptions/index' {
  import {endOfMinuteWithOptions} from 'date-fns/fp'
  export = endOfMinuteWithOptions
}

declare module 'date-fns/fp/endOfMonth/index' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfMonthWithOptions/index' {
  import {endOfMonthWithOptions} from 'date-fns/fp'
  export = endOfMonthWithOptions
}

declare module 'date-fns/fp/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfQuarterWithOptions/index' {
  import {endOfQuarterWithOptions} from 'date-fns/fp'
  export = endOfQuarterWithOptions
}

declare module 'date-fns/fp/endOfSecond/index' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfSecondWithOptions/index' {
  import {endOfSecondWithOptions} from 'date-fns/fp'
  export = endOfSecondWithOptions
}

declare module 'date-fns/fp/endOfWeek/index' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfWeekWithOptions/index' {
  import {endOfWeekWithOptions} from 'date-fns/fp'
  export = endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYear/index' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/endOfYearWithOptions/index' {
  import {endOfYearWithOptions} from 'date-fns/fp'
  export = endOfYearWithOptions
}

declare module 'date-fns/fp/format/index' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/formatDistance/index' {
  import {formatDistance} from 'date-fns/fp'
  export = formatDistance
}

declare module 'date-fns/fp/formatDistanceStrict/index' {
  import {formatDistanceStrict} from 'date-fns/fp'
  export = formatDistanceStrict
}

declare module 'date-fns/fp/formatDistanceStrictWithOptions/index' {
  import {formatDistanceStrictWithOptions} from 'date-fns/fp'
  export = formatDistanceStrictWithOptions
}

declare module 'date-fns/fp/formatDistanceWithOptions/index' {
  import {formatDistanceWithOptions} from 'date-fns/fp'
  export = formatDistanceWithOptions
}

declare module 'date-fns/fp/formatRelative/index' {
  import {formatRelative} from 'date-fns/fp'
  export = formatRelative
}

declare module 'date-fns/fp/formatRelativeWithOptions/index' {
  import {formatRelativeWithOptions} from 'date-fns/fp'
  export = formatRelativeWithOptions
}

declare module 'date-fns/fp/formatWithOptions/index' {
  import {formatWithOptions} from 'date-fns/fp'
  export = formatWithOptions
}

declare module 'date-fns/fp/getDate/index' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDateWithOptions/index' {
  import {getDateWithOptions} from 'date-fns/fp'
  export = getDateWithOptions
}

declare module 'date-fns/fp/getDay/index' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDayOfYearWithOptions/index' {
  import {getDayOfYearWithOptions} from 'date-fns/fp'
  export = getDayOfYearWithOptions
}

declare module 'date-fns/fp/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInMonthWithOptions/index' {
  import {getDaysInMonthWithOptions} from 'date-fns/fp'
  export = getDaysInMonthWithOptions
}

declare module 'date-fns/fp/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getDaysInYearWithOptions/index' {
  import {getDaysInYearWithOptions} from 'date-fns/fp'
  export = getDaysInYearWithOptions
}

declare module 'date-fns/fp/getDayWithOptions/index' {
  import {getDayWithOptions} from 'date-fns/fp'
  export = getDayWithOptions
}

declare module 'date-fns/fp/getHours/index' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getHoursWithOptions/index' {
  import {getHoursWithOptions} from 'date-fns/fp'
  export = getHoursWithOptions
}

declare module 'date-fns/fp/getISODay/index' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISODayWithOptions/index' {
  import {getISODayWithOptions} from 'date-fns/fp'
  export = getISODayWithOptions
}

declare module 'date-fns/fp/getISOWeek/index' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOWeeksInYearWithOptions/index' {
  import {getISOWeeksInYearWithOptions} from 'date-fns/fp'
  export = getISOWeeksInYearWithOptions
}

declare module 'date-fns/fp/getISOWeekWithOptions/index' {
  import {getISOWeekWithOptions} from 'date-fns/fp'
  export = getISOWeekWithOptions
}

declare module 'date-fns/fp/getISOWeekYear/index' {
  import {getISOWeekYear} from 'date-fns/fp'
  export = getISOWeekYear
}

declare module 'date-fns/fp/getISOWeekYearWithOptions/index' {
  import {getISOWeekYearWithOptions} from 'date-fns/fp'
  export = getISOWeekYearWithOptions
}

declare module 'date-fns/fp/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMillisecondsWithOptions/index' {
  import {getMillisecondsWithOptions} from 'date-fns/fp'
  export = getMillisecondsWithOptions
}

declare module 'date-fns/fp/getMinutes/index' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMinutesWithOptions/index' {
  import {getMinutesWithOptions} from 'date-fns/fp'
  export = getMinutesWithOptions
}

declare module 'date-fns/fp/getMonth/index' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getMonthWithOptions/index' {
  import {getMonthWithOptions} from 'date-fns/fp'
  export = getMonthWithOptions
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getOverlappingDaysInIntervalsWithOptions/index' {
  import {getOverlappingDaysInIntervalsWithOptions} from 'date-fns/fp'
  export = getOverlappingDaysInIntervalsWithOptions
}

declare module 'date-fns/fp/getQuarter/index' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getQuarterWithOptions/index' {
  import {getQuarterWithOptions} from 'date-fns/fp'
  export = getQuarterWithOptions
}

declare module 'date-fns/fp/getSeconds/index' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getSecondsWithOptions/index' {
  import {getSecondsWithOptions} from 'date-fns/fp'
  export = getSecondsWithOptions
}

declare module 'date-fns/fp/getTime/index' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getTimeWithOptions/index' {
  import {getTimeWithOptions} from 'date-fns/fp'
  export = getTimeWithOptions
}

declare module 'date-fns/fp/getWeek/index' {
  import {getWeek} from 'date-fns/fp'
  export = getWeek
}

declare module 'date-fns/fp/getWeekOfMonth/index' {
  import {getWeekOfMonth} from 'date-fns/fp'
  export = getWeekOfMonth
}

declare module 'date-fns/fp/getWeekOfMonthWithOptions/index' {
  import {getWeekOfMonthWithOptions} from 'date-fns/fp'
  export = getWeekOfMonthWithOptions
}

declare module 'date-fns/fp/getWeeksInMonth/index' {
  import {getWeeksInMonth} from 'date-fns/fp'
  export = getWeeksInMonth
}

declare module 'date-fns/fp/getWeeksInMonthWithOptions/index' {
  import {getWeeksInMonthWithOptions} from 'date-fns/fp'
  export = getWeeksInMonthWithOptions
}

declare module 'date-fns/fp/getWeekWithOptions/index' {
  import {getWeekWithOptions} from 'date-fns/fp'
  export = getWeekWithOptions
}

declare module 'date-fns/fp/getWeekYear/index' {
  import {getWeekYear} from 'date-fns/fp'
  export = getWeekYear
}

declare module 'date-fns/fp/getWeekYearWithOptions/index' {
  import {getWeekYearWithOptions} from 'date-fns/fp'
  export = getWeekYearWithOptions
}

declare module 'date-fns/fp/getYear/index' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/getYearWithOptions/index' {
  import {getYearWithOptions} from 'date-fns/fp'
  export = getYearWithOptions
}

declare module 'date-fns/fp/isAfter/index' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isAfterWithOptions/index' {
  import {isAfterWithOptions} from 'date-fns/fp'
  export = isAfterWithOptions
}

declare module 'date-fns/fp/isBefore/index' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isBeforeWithOptions/index' {
  import {isBeforeWithOptions} from 'date-fns/fp'
  export = isBeforeWithOptions
}

declare module 'date-fns/fp/isDate/index' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isDateWithOptions/index' {
  import {isDateWithOptions} from 'date-fns/fp'
  export = isDateWithOptions
}

declare module 'date-fns/fp/isEqual/index' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isEqualWithOptions/index' {
  import {isEqualWithOptions} from 'date-fns/fp'
  export = isEqualWithOptions
}

declare module 'date-fns/fp/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFirstDayOfMonthWithOptions/index' {
  import {isFirstDayOfMonthWithOptions} from 'date-fns/fp'
  export = isFirstDayOfMonthWithOptions
}

declare module 'date-fns/fp/isFriday/index' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isFridayWithOptions/index' {
  import {isFridayWithOptions} from 'date-fns/fp'
  export = isFridayWithOptions
}

declare module 'date-fns/fp/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLastDayOfMonthWithOptions/index' {
  import {isLastDayOfMonthWithOptions} from 'date-fns/fp'
  export = isLastDayOfMonthWithOptions
}

declare module 'date-fns/fp/isLeapYear/index' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isLeapYearWithOptions/index' {
  import {isLeapYearWithOptions} from 'date-fns/fp'
  export = isLeapYearWithOptions
}

declare module 'date-fns/fp/isMonday/index' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isMondayWithOptions/index' {
  import {isMondayWithOptions} from 'date-fns/fp'
  export = isMondayWithOptions
}

declare module 'date-fns/fp/isSameDay/index' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameDayWithOptions/index' {
  import {isSameDayWithOptions} from 'date-fns/fp'
  export = isSameDayWithOptions
}

declare module 'date-fns/fp/isSameHour/index' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameHourWithOptions/index' {
  import {isSameHourWithOptions} from 'date-fns/fp'
  export = isSameHourWithOptions
}

declare module 'date-fns/fp/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOWeekWithOptions/index' {
  import {isSameISOWeekWithOptions} from 'date-fns/fp'
  export = isSameISOWeekWithOptions
}

declare module 'date-fns/fp/isSameISOWeekYear/index' {
  import {isSameISOWeekYear} from 'date-fns/fp'
  export = isSameISOWeekYear
}

declare module 'date-fns/fp/isSameISOWeekYearWithOptions/index' {
  import {isSameISOWeekYearWithOptions} from 'date-fns/fp'
  export = isSameISOWeekYearWithOptions
}

declare module 'date-fns/fp/isSameMinute/index' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMinuteWithOptions/index' {
  import {isSameMinuteWithOptions} from 'date-fns/fp'
  export = isSameMinuteWithOptions
}

declare module 'date-fns/fp/isSameMonth/index' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameMonthWithOptions/index' {
  import {isSameMonthWithOptions} from 'date-fns/fp'
  export = isSameMonthWithOptions
}

declare module 'date-fns/fp/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameQuarterWithOptions/index' {
  import {isSameQuarterWithOptions} from 'date-fns/fp'
  export = isSameQuarterWithOptions
}

declare module 'date-fns/fp/isSameSecond/index' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameSecondWithOptions/index' {
  import {isSameSecondWithOptions} from 'date-fns/fp'
  export = isSameSecondWithOptions
}

declare module 'date-fns/fp/isSameWeek/index' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameWeekWithOptions/index' {
  import {isSameWeekWithOptions} from 'date-fns/fp'
  export = isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYear/index' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSameYearWithOptions/index' {
  import {isSameYearWithOptions} from 'date-fns/fp'
  export = isSameYearWithOptions
}

declare module 'date-fns/fp/isSaturday/index' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSaturdayWithOptions/index' {
  import {isSaturdayWithOptions} from 'date-fns/fp'
  export = isSaturdayWithOptions
}

declare module 'date-fns/fp/isSunday/index' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isSundayWithOptions/index' {
  import {isSundayWithOptions} from 'date-fns/fp'
  export = isSundayWithOptions
}

declare module 'date-fns/fp/isThursday/index' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isThursdayWithOptions/index' {
  import {isThursdayWithOptions} from 'date-fns/fp'
  export = isThursdayWithOptions
}

declare module 'date-fns/fp/isTuesday/index' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isTuesdayWithOptions/index' {
  import {isTuesdayWithOptions} from 'date-fns/fp'
  export = isTuesdayWithOptions
}

declare module 'date-fns/fp/isValid/index' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isValidWithOptions/index' {
  import {isValidWithOptions} from 'date-fns/fp'
  export = isValidWithOptions
}

declare module 'date-fns/fp/isWednesday/index' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWednesdayWithOptions/index' {
  import {isWednesdayWithOptions} from 'date-fns/fp'
  export = isWednesdayWithOptions
}

declare module 'date-fns/fp/isWeekend/index' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWeekendWithOptions/index' {
  import {isWeekendWithOptions} from 'date-fns/fp'
  export = isWeekendWithOptions
}

declare module 'date-fns/fp/isWithinInterval/index' {
  import {isWithinInterval} from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/isWithinIntervalWithOptions/index' {
  import {isWithinIntervalWithOptions} from 'date-fns/fp'
  export = isWithinIntervalWithOptions
}

declare module 'date-fns/fp/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOWeekWithOptions/index' {
  import {lastDayOfISOWeekWithOptions} from 'date-fns/fp'
  export = lastDayOfISOWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfISOWeekYear/index' {
  import {lastDayOfISOWeekYear} from 'date-fns/fp'
  export = lastDayOfISOWeekYear
}

declare module 'date-fns/fp/lastDayOfISOWeekYearWithOptions/index' {
  import {lastDayOfISOWeekYearWithOptions} from 'date-fns/fp'
  export = lastDayOfISOWeekYearWithOptions
}

declare module 'date-fns/fp/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfMonthWithOptions/index' {
  import {lastDayOfMonthWithOptions} from 'date-fns/fp'
  export = lastDayOfMonthWithOptions
}

declare module 'date-fns/fp/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions/index' {
  import {lastDayOfQuarterWithOptions} from 'date-fns/fp'
  export = lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions/index' {
  import {lastDayOfWeekWithOptions} from 'date-fns/fp'
  export = lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/lastDayOfYearWithOptions/index' {
  import {lastDayOfYearWithOptions} from 'date-fns/fp'
  export = lastDayOfYearWithOptions
}

declare module 'date-fns/fp/max/index' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/maxWithOptions/index' {
  import {maxWithOptions} from 'date-fns/fp'
  export = maxWithOptions
}

declare module 'date-fns/fp/min/index' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/minWithOptions/index' {
  import {minWithOptions} from 'date-fns/fp'
  export = minWithOptions
}

declare module 'date-fns/fp/parse/index' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/parseWithOptions/index' {
  import {parseWithOptions} from 'date-fns/fp'
  export = parseWithOptions
}

declare module 'date-fns/fp/setDate/index' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDateWithOptions/index' {
  import {setDateWithOptions} from 'date-fns/fp'
  export = setDateWithOptions
}

declare module 'date-fns/fp/setDay/index' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setDayOfYearWithOptions/index' {
  import {setDayOfYearWithOptions} from 'date-fns/fp'
  export = setDayOfYearWithOptions
}

declare module 'date-fns/fp/setDayWithOptions/index' {
  import {setDayWithOptions} from 'date-fns/fp'
  export = setDayWithOptions
}

declare module 'date-fns/fp/setHours/index' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setHoursWithOptions/index' {
  import {setHoursWithOptions} from 'date-fns/fp'
  export = setHoursWithOptions
}

declare module 'date-fns/fp/setISODay/index' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISODayWithOptions/index' {
  import {setISODayWithOptions} from 'date-fns/fp'
  export = setISODayWithOptions
}

declare module 'date-fns/fp/setISOWeek/index' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOWeekWithOptions/index' {
  import {setISOWeekWithOptions} from 'date-fns/fp'
  export = setISOWeekWithOptions
}

declare module 'date-fns/fp/setISOWeekYear/index' {
  import {setISOWeekYear} from 'date-fns/fp'
  export = setISOWeekYear
}

declare module 'date-fns/fp/setISOWeekYearWithOptions/index' {
  import {setISOWeekYearWithOptions} from 'date-fns/fp'
  export = setISOWeekYearWithOptions
}

declare module 'date-fns/fp/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMillisecondsWithOptions/index' {
  import {setMillisecondsWithOptions} from 'date-fns/fp'
  export = setMillisecondsWithOptions
}

declare module 'date-fns/fp/setMinutes/index' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMinutesWithOptions/index' {
  import {setMinutesWithOptions} from 'date-fns/fp'
  export = setMinutesWithOptions
}

declare module 'date-fns/fp/setMonth/index' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setMonthWithOptions/index' {
  import {setMonthWithOptions} from 'date-fns/fp'
  export = setMonthWithOptions
}

declare module 'date-fns/fp/setQuarter/index' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setQuarterWithOptions/index' {
  import {setQuarterWithOptions} from 'date-fns/fp'
  export = setQuarterWithOptions
}

declare module 'date-fns/fp/setSeconds/index' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setSecondsWithOptions/index' {
  import {setSecondsWithOptions} from 'date-fns/fp'
  export = setSecondsWithOptions
}

declare module 'date-fns/fp/setWeek/index' {
  import {setWeek} from 'date-fns/fp'
  export = setWeek
}

declare module 'date-fns/fp/setWeekWithOptions/index' {
  import {setWeekWithOptions} from 'date-fns/fp'
  export = setWeekWithOptions
}

declare module 'date-fns/fp/setWeekYear/index' {
  import {setWeekYear} from 'date-fns/fp'
  export = setWeekYear
}

declare module 'date-fns/fp/setWeekYearWithOptions/index' {
  import {setWeekYearWithOptions} from 'date-fns/fp'
  export = setWeekYearWithOptions
}

declare module 'date-fns/fp/setYear/index' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/setYearWithOptions/index' {
  import {setYearWithOptions} from 'date-fns/fp'
  export = setYearWithOptions
}

declare module 'date-fns/fp/startOfDay/index' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfDayWithOptions/index' {
  import {startOfDayWithOptions} from 'date-fns/fp'
  export = startOfDayWithOptions
}

declare module 'date-fns/fp/startOfHour/index' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfHourWithOptions/index' {
  import {startOfHourWithOptions} from 'date-fns/fp'
  export = startOfHourWithOptions
}

declare module 'date-fns/fp/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOWeekWithOptions/index' {
  import {startOfISOWeekWithOptions} from 'date-fns/fp'
  export = startOfISOWeekWithOptions
}

declare module 'date-fns/fp/startOfISOWeekYear/index' {
  import {startOfISOWeekYear} from 'date-fns/fp'
  export = startOfISOWeekYear
}

declare module 'date-fns/fp/startOfISOWeekYearWithOptions/index' {
  import {startOfISOWeekYearWithOptions} from 'date-fns/fp'
  export = startOfISOWeekYearWithOptions
}

declare module 'date-fns/fp/startOfMinute/index' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMinuteWithOptions/index' {
  import {startOfMinuteWithOptions} from 'date-fns/fp'
  export = startOfMinuteWithOptions
}

declare module 'date-fns/fp/startOfMonth/index' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfMonthWithOptions/index' {
  import {startOfMonthWithOptions} from 'date-fns/fp'
  export = startOfMonthWithOptions
}

declare module 'date-fns/fp/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfQuarterWithOptions/index' {
  import {startOfQuarterWithOptions} from 'date-fns/fp'
  export = startOfQuarterWithOptions
}

declare module 'date-fns/fp/startOfSecond/index' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfSecondWithOptions/index' {
  import {startOfSecondWithOptions} from 'date-fns/fp'
  export = startOfSecondWithOptions
}

declare module 'date-fns/fp/startOfWeek/index' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfWeekWithOptions/index' {
  import {startOfWeekWithOptions} from 'date-fns/fp'
  export = startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfWeekYear/index' {
  import {startOfWeekYear} from 'date-fns/fp'
  export = startOfWeekYear
}

declare module 'date-fns/fp/startOfWeekYearWithOptions/index' {
  import {startOfWeekYearWithOptions} from 'date-fns/fp'
  export = startOfWeekYearWithOptions
}

declare module 'date-fns/fp/startOfYear/index' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/startOfYearWithOptions/index' {
  import {startOfYearWithOptions} from 'date-fns/fp'
  export = startOfYearWithOptions
}

declare module 'date-fns/fp/subDays/index' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subDaysWithOptions/index' {
  import {subDaysWithOptions} from 'date-fns/fp'
  export = subDaysWithOptions
}

declare module 'date-fns/fp/subHours/index' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subHoursWithOptions/index' {
  import {subHoursWithOptions} from 'date-fns/fp'
  export = subHoursWithOptions
}

declare module 'date-fns/fp/subISOWeekYears/index' {
  import {subISOWeekYears} from 'date-fns/fp'
  export = subISOWeekYears
}

declare module 'date-fns/fp/subISOWeekYearsWithOptions/index' {
  import {subISOWeekYearsWithOptions} from 'date-fns/fp'
  export = subISOWeekYearsWithOptions
}

declare module 'date-fns/fp/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMillisecondsWithOptions/index' {
  import {subMillisecondsWithOptions} from 'date-fns/fp'
  export = subMillisecondsWithOptions
}

declare module 'date-fns/fp/subMinutes/index' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMinutesWithOptions/index' {
  import {subMinutesWithOptions} from 'date-fns/fp'
  export = subMinutesWithOptions
}

declare module 'date-fns/fp/subMonths/index' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subMonthsWithOptions/index' {
  import {subMonthsWithOptions} from 'date-fns/fp'
  export = subMonthsWithOptions
}

declare module 'date-fns/fp/subQuarters/index' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subQuartersWithOptions/index' {
  import {subQuartersWithOptions} from 'date-fns/fp'
  export = subQuartersWithOptions
}

declare module 'date-fns/fp/subSeconds/index' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subSecondsWithOptions/index' {
  import {subSecondsWithOptions} from 'date-fns/fp'
  export = subSecondsWithOptions
}

declare module 'date-fns/fp/subWeeks/index' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subWeeksWithOptions/index' {
  import {subWeeksWithOptions} from 'date-fns/fp'
  export = subWeeksWithOptions
}

declare module 'date-fns/fp/subYears/index' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/subYearsWithOptions/index' {
  import {subYearsWithOptions} from 'date-fns/fp'
  export = subYearsWithOptions
}

declare module 'date-fns/fp/toDate/index' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/toDateWithOptions/index' {
  import {toDateWithOptions} from 'date-fns/fp'
  export = toDateWithOptions
}

declare module 'date-fns/fp/addDays/index.js' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addDaysWithOptions/index.js' {
  import {addDaysWithOptions} from 'date-fns/fp'
  export = addDaysWithOptions
}

declare module 'date-fns/fp/addHours/index.js' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addHoursWithOptions/index.js' {
  import {addHoursWithOptions} from 'date-fns/fp'
  export = addHoursWithOptions
}

declare module 'date-fns/fp/addISOWeekYears/index.js' {
  import {addISOWeekYears} from 'date-fns/fp'
  export = addISOWeekYears
}

declare module 'date-fns/fp/addISOWeekYearsWithOptions/index.js' {
  import {addISOWeekYearsWithOptions} from 'date-fns/fp'
  export = addISOWeekYearsWithOptions
}

declare module 'date-fns/fp/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMillisecondsWithOptions/index.js' {
  import {addMillisecondsWithOptions} from 'date-fns/fp'
  export = addMillisecondsWithOptions
}

declare module 'date-fns/fp/addMinutes/index.js' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMinutesWithOptions/index.js' {
  import {addMinutesWithOptions} from 'date-fns/fp'
  export = addMinutesWithOptions
}

declare module 'date-fns/fp/addMonths/index.js' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addMonthsWithOptions/index.js' {
  import {addMonthsWithOptions} from 'date-fns/fp'
  export = addMonthsWithOptions
}

declare module 'date-fns/fp/addQuarters/index.js' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addQuartersWithOptions/index.js' {
  import {addQuartersWithOptions} from 'date-fns/fp'
  export = addQuartersWithOptions
}

declare module 'date-fns/fp/addSeconds/index.js' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addSecondsWithOptions/index.js' {
  import {addSecondsWithOptions} from 'date-fns/fp'
  export = addSecondsWithOptions
}

declare module 'date-fns/fp/addWeeks/index.js' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addWeeksWithOptions/index.js' {
  import {addWeeksWithOptions} from 'date-fns/fp'
  export = addWeeksWithOptions
}

declare module 'date-fns/fp/addYears/index.js' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/addYearsWithOptions/index.js' {
  import {addYearsWithOptions} from 'date-fns/fp'
  export = addYearsWithOptions
}

declare module 'date-fns/fp/areIntervalsOverlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/areIntervalsOverlappingWithOptions/index.js' {
  import {areIntervalsOverlappingWithOptions} from 'date-fns/fp'
  export = areIntervalsOverlappingWithOptions
}

declare module 'date-fns/fp/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestIndexToWithOptions/index.js' {
  import {closestIndexToWithOptions} from 'date-fns/fp'
  export = closestIndexToWithOptions
}

declare module 'date-fns/fp/closestTo/index.js' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/closestToWithOptions/index.js' {
  import {closestToWithOptions} from 'date-fns/fp'
  export = closestToWithOptions
}

declare module 'date-fns/fp/compareAsc/index.js' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareAscWithOptions/index.js' {
  import {compareAscWithOptions} from 'date-fns/fp'
  export = compareAscWithOptions
}

declare module 'date-fns/fp/compareDesc/index.js' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/compareDescWithOptions/index.js' {
  import {compareDescWithOptions} from 'date-fns/fp'
  export = compareDescWithOptions
}

declare module 'date-fns/fp/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarDaysWithOptions/index.js' {
  import {differenceInCalendarDaysWithOptions} from 'date-fns/fp'
  export = differenceInCalendarDaysWithOptions
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOWeeksWithOptions/index.js' {
  import {differenceInCalendarISOWeeksWithOptions} from 'date-fns/fp'
  export = differenceInCalendarISOWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYears/index.js' {
  import {differenceInCalendarISOWeekYears} from 'date-fns/fp'
  export = differenceInCalendarISOWeekYears
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYearsWithOptions/index.js' {
  import {differenceInCalendarISOWeekYearsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarISOWeekYearsWithOptions
}

declare module 'date-fns/fp/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarMonthsWithOptions/index.js' {
  import {differenceInCalendarMonthsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarMonthsWithOptions
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarQuartersWithOptions/index.js' {
  import {differenceInCalendarQuartersWithOptions} from 'date-fns/fp'
  export = differenceInCalendarQuartersWithOptions
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import {differenceInCalendarWeeksWithOptions} from 'date-fns/fp'
  export = differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInCalendarYearsWithOptions/index.js' {
  import {differenceInCalendarYearsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarYearsWithOptions
}

declare module 'date-fns/fp/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInDaysWithOptions/index.js' {
  import {differenceInDaysWithOptions} from 'date-fns/fp'
  export = differenceInDaysWithOptions
}

declare module 'date-fns/fp/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInHoursWithOptions/index.js' {
  import {differenceInHoursWithOptions} from 'date-fns/fp'
  export = differenceInHoursWithOptions
}

declare module 'date-fns/fp/differenceInISOWeekYears/index.js' {
  import {differenceInISOWeekYears} from 'date-fns/fp'
  export = differenceInISOWeekYears
}

declare module 'date-fns/fp/differenceInISOWeekYearsWithOptions/index.js' {
  import {differenceInISOWeekYearsWithOptions} from 'date-fns/fp'
  export = differenceInISOWeekYearsWithOptions
}

declare module 'date-fns/fp/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMillisecondsWithOptions/index.js' {
  import {differenceInMillisecondsWithOptions} from 'date-fns/fp'
  export = differenceInMillisecondsWithOptions
}

declare module 'date-fns/fp/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMinutesWithOptions/index.js' {
  import {differenceInMinutesWithOptions} from 'date-fns/fp'
  export = differenceInMinutesWithOptions
}

declare module 'date-fns/fp/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInMonthsWithOptions/index.js' {
  import {differenceInMonthsWithOptions} from 'date-fns/fp'
  export = differenceInMonthsWithOptions
}

declare module 'date-fns/fp/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInQuartersWithOptions/index.js' {
  import {differenceInQuartersWithOptions} from 'date-fns/fp'
  export = differenceInQuartersWithOptions
}

declare module 'date-fns/fp/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInSecondsWithOptions/index.js' {
  import {differenceInSecondsWithOptions} from 'date-fns/fp'
  export = differenceInSecondsWithOptions
}

declare module 'date-fns/fp/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInWeeksWithOptions/index.js' {
  import {differenceInWeeksWithOptions} from 'date-fns/fp'
  export = differenceInWeeksWithOptions
}

declare module 'date-fns/fp/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/differenceInYearsWithOptions/index.js' {
  import {differenceInYearsWithOptions} from 'date-fns/fp'
  export = differenceInYearsWithOptions
}

declare module 'date-fns/fp/eachDayOfInterval/index.js' {
  import {eachDayOfInterval} from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions/index.js' {
  import {eachDayOfIntervalWithOptions} from 'date-fns/fp'
  export = eachDayOfIntervalWithOptions
}

declare module 'date-fns/fp/eachWeekOfInterval/index.js' {
  import {eachWeekOfInterval} from 'date-fns/fp'
  export = eachWeekOfInterval
}

declare module 'date-fns/fp/eachWeekOfIntervalWithOptions/index.js' {
  import {eachWeekOfIntervalWithOptions} from 'date-fns/fp'
  export = eachWeekOfIntervalWithOptions
}

declare module 'date-fns/fp/endOfDay/index.js' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfDayWithOptions/index.js' {
  import {endOfDayWithOptions} from 'date-fns/fp'
  export = endOfDayWithOptions
}

declare module 'date-fns/fp/endOfHour/index.js' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfHourWithOptions/index.js' {
  import {endOfHourWithOptions} from 'date-fns/fp'
  export = endOfHourWithOptions
}

declare module 'date-fns/fp/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOWeekWithOptions/index.js' {
  import {endOfISOWeekWithOptions} from 'date-fns/fp'
  export = endOfISOWeekWithOptions
}

declare module 'date-fns/fp/endOfISOWeekYear/index.js' {
  import {endOfISOWeekYear} from 'date-fns/fp'
  export = endOfISOWeekYear
}

declare module 'date-fns/fp/endOfISOWeekYearWithOptions/index.js' {
  import {endOfISOWeekYearWithOptions} from 'date-fns/fp'
  export = endOfISOWeekYearWithOptions
}

declare module 'date-fns/fp/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMinuteWithOptions/index.js' {
  import {endOfMinuteWithOptions} from 'date-fns/fp'
  export = endOfMinuteWithOptions
}

declare module 'date-fns/fp/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfMonthWithOptions/index.js' {
  import {endOfMonthWithOptions} from 'date-fns/fp'
  export = endOfMonthWithOptions
}

declare module 'date-fns/fp/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfQuarterWithOptions/index.js' {
  import {endOfQuarterWithOptions} from 'date-fns/fp'
  export = endOfQuarterWithOptions
}

declare module 'date-fns/fp/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfSecondWithOptions/index.js' {
  import {endOfSecondWithOptions} from 'date-fns/fp'
  export = endOfSecondWithOptions
}

declare module 'date-fns/fp/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfWeekWithOptions/index.js' {
  import {endOfWeekWithOptions} from 'date-fns/fp'
  export = endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYear/index.js' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/endOfYearWithOptions/index.js' {
  import {endOfYearWithOptions} from 'date-fns/fp'
  export = endOfYearWithOptions
}

declare module 'date-fns/fp/format/index.js' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/formatDistance/index.js' {
  import {formatDistance} from 'date-fns/fp'
  export = formatDistance
}

declare module 'date-fns/fp/formatDistanceStrict/index.js' {
  import {formatDistanceStrict} from 'date-fns/fp'
  export = formatDistanceStrict
}

declare module 'date-fns/fp/formatDistanceStrictWithOptions/index.js' {
  import {formatDistanceStrictWithOptions} from 'date-fns/fp'
  export = formatDistanceStrictWithOptions
}

declare module 'date-fns/fp/formatDistanceWithOptions/index.js' {
  import {formatDistanceWithOptions} from 'date-fns/fp'
  export = formatDistanceWithOptions
}

declare module 'date-fns/fp/formatRelative/index.js' {
  import {formatRelative} from 'date-fns/fp'
  export = formatRelative
}

declare module 'date-fns/fp/formatRelativeWithOptions/index.js' {
  import {formatRelativeWithOptions} from 'date-fns/fp'
  export = formatRelativeWithOptions
}

declare module 'date-fns/fp/formatWithOptions/index.js' {
  import {formatWithOptions} from 'date-fns/fp'
  export = formatWithOptions
}

declare module 'date-fns/fp/getDate/index.js' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDateWithOptions/index.js' {
  import {getDateWithOptions} from 'date-fns/fp'
  export = getDateWithOptions
}

declare module 'date-fns/fp/getDay/index.js' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDayOfYearWithOptions/index.js' {
  import {getDayOfYearWithOptions} from 'date-fns/fp'
  export = getDayOfYearWithOptions
}

declare module 'date-fns/fp/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInMonthWithOptions/index.js' {
  import {getDaysInMonthWithOptions} from 'date-fns/fp'
  export = getDaysInMonthWithOptions
}

declare module 'date-fns/fp/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getDaysInYearWithOptions/index.js' {
  import {getDaysInYearWithOptions} from 'date-fns/fp'
  export = getDaysInYearWithOptions
}

declare module 'date-fns/fp/getDayWithOptions/index.js' {
  import {getDayWithOptions} from 'date-fns/fp'
  export = getDayWithOptions
}

declare module 'date-fns/fp/getHours/index.js' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getHoursWithOptions/index.js' {
  import {getHoursWithOptions} from 'date-fns/fp'
  export = getHoursWithOptions
}

declare module 'date-fns/fp/getISODay/index.js' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISODayWithOptions/index.js' {
  import {getISODayWithOptions} from 'date-fns/fp'
  export = getISODayWithOptions
}

declare module 'date-fns/fp/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOWeeksInYearWithOptions/index.js' {
  import {getISOWeeksInYearWithOptions} from 'date-fns/fp'
  export = getISOWeeksInYearWithOptions
}

declare module 'date-fns/fp/getISOWeekWithOptions/index.js' {
  import {getISOWeekWithOptions} from 'date-fns/fp'
  export = getISOWeekWithOptions
}

declare module 'date-fns/fp/getISOWeekYear/index.js' {
  import {getISOWeekYear} from 'date-fns/fp'
  export = getISOWeekYear
}

declare module 'date-fns/fp/getISOWeekYearWithOptions/index.js' {
  import {getISOWeekYearWithOptions} from 'date-fns/fp'
  export = getISOWeekYearWithOptions
}

declare module 'date-fns/fp/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMillisecondsWithOptions/index.js' {
  import {getMillisecondsWithOptions} from 'date-fns/fp'
  export = getMillisecondsWithOptions
}

declare module 'date-fns/fp/getMinutes/index.js' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMinutesWithOptions/index.js' {
  import {getMinutesWithOptions} from 'date-fns/fp'
  export = getMinutesWithOptions
}

declare module 'date-fns/fp/getMonth/index.js' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getMonthWithOptions/index.js' {
  import {getMonthWithOptions} from 'date-fns/fp'
  export = getMonthWithOptions
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getOverlappingDaysInIntervalsWithOptions/index.js' {
  import {getOverlappingDaysInIntervalsWithOptions} from 'date-fns/fp'
  export = getOverlappingDaysInIntervalsWithOptions
}

declare module 'date-fns/fp/getQuarter/index.js' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getQuarterWithOptions/index.js' {
  import {getQuarterWithOptions} from 'date-fns/fp'
  export = getQuarterWithOptions
}

declare module 'date-fns/fp/getSeconds/index.js' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getSecondsWithOptions/index.js' {
  import {getSecondsWithOptions} from 'date-fns/fp'
  export = getSecondsWithOptions
}

declare module 'date-fns/fp/getTime/index.js' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getTimeWithOptions/index.js' {
  import {getTimeWithOptions} from 'date-fns/fp'
  export = getTimeWithOptions
}

declare module 'date-fns/fp/getWeek/index.js' {
  import {getWeek} from 'date-fns/fp'
  export = getWeek
}

declare module 'date-fns/fp/getWeekOfMonth/index.js' {
  import {getWeekOfMonth} from 'date-fns/fp'
  export = getWeekOfMonth
}

declare module 'date-fns/fp/getWeekOfMonthWithOptions/index.js' {
  import {getWeekOfMonthWithOptions} from 'date-fns/fp'
  export = getWeekOfMonthWithOptions
}

declare module 'date-fns/fp/getWeeksInMonth/index.js' {
  import {getWeeksInMonth} from 'date-fns/fp'
  export = getWeeksInMonth
}

declare module 'date-fns/fp/getWeeksInMonthWithOptions/index.js' {
  import {getWeeksInMonthWithOptions} from 'date-fns/fp'
  export = getWeeksInMonthWithOptions
}

declare module 'date-fns/fp/getWeekWithOptions/index.js' {
  import {getWeekWithOptions} from 'date-fns/fp'
  export = getWeekWithOptions
}

declare module 'date-fns/fp/getWeekYear/index.js' {
  import {getWeekYear} from 'date-fns/fp'
  export = getWeekYear
}

declare module 'date-fns/fp/getWeekYearWithOptions/index.js' {
  import {getWeekYearWithOptions} from 'date-fns/fp'
  export = getWeekYearWithOptions
}

declare module 'date-fns/fp/getYear/index.js' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/getYearWithOptions/index.js' {
  import {getYearWithOptions} from 'date-fns/fp'
  export = getYearWithOptions
}

declare module 'date-fns/fp/isAfter/index.js' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isAfterWithOptions/index.js' {
  import {isAfterWithOptions} from 'date-fns/fp'
  export = isAfterWithOptions
}

declare module 'date-fns/fp/isBefore/index.js' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isBeforeWithOptions/index.js' {
  import {isBeforeWithOptions} from 'date-fns/fp'
  export = isBeforeWithOptions
}

declare module 'date-fns/fp/isDate/index.js' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isDateWithOptions/index.js' {
  import {isDateWithOptions} from 'date-fns/fp'
  export = isDateWithOptions
}

declare module 'date-fns/fp/isEqual/index.js' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isEqualWithOptions/index.js' {
  import {isEqualWithOptions} from 'date-fns/fp'
  export = isEqualWithOptions
}

declare module 'date-fns/fp/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFirstDayOfMonthWithOptions/index.js' {
  import {isFirstDayOfMonthWithOptions} from 'date-fns/fp'
  export = isFirstDayOfMonthWithOptions
}

declare module 'date-fns/fp/isFriday/index.js' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isFridayWithOptions/index.js' {
  import {isFridayWithOptions} from 'date-fns/fp'
  export = isFridayWithOptions
}

declare module 'date-fns/fp/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLastDayOfMonthWithOptions/index.js' {
  import {isLastDayOfMonthWithOptions} from 'date-fns/fp'
  export = isLastDayOfMonthWithOptions
}

declare module 'date-fns/fp/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isLeapYearWithOptions/index.js' {
  import {isLeapYearWithOptions} from 'date-fns/fp'
  export = isLeapYearWithOptions
}

declare module 'date-fns/fp/isMonday/index.js' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isMondayWithOptions/index.js' {
  import {isMondayWithOptions} from 'date-fns/fp'
  export = isMondayWithOptions
}

declare module 'date-fns/fp/isSameDay/index.js' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameDayWithOptions/index.js' {
  import {isSameDayWithOptions} from 'date-fns/fp'
  export = isSameDayWithOptions
}

declare module 'date-fns/fp/isSameHour/index.js' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameHourWithOptions/index.js' {
  import {isSameHourWithOptions} from 'date-fns/fp'
  export = isSameHourWithOptions
}

declare module 'date-fns/fp/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOWeekWithOptions/index.js' {
  import {isSameISOWeekWithOptions} from 'date-fns/fp'
  export = isSameISOWeekWithOptions
}

declare module 'date-fns/fp/isSameISOWeekYear/index.js' {
  import {isSameISOWeekYear} from 'date-fns/fp'
  export = isSameISOWeekYear
}

declare module 'date-fns/fp/isSameISOWeekYearWithOptions/index.js' {
  import {isSameISOWeekYearWithOptions} from 'date-fns/fp'
  export = isSameISOWeekYearWithOptions
}

declare module 'date-fns/fp/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMinuteWithOptions/index.js' {
  import {isSameMinuteWithOptions} from 'date-fns/fp'
  export = isSameMinuteWithOptions
}

declare module 'date-fns/fp/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameMonthWithOptions/index.js' {
  import {isSameMonthWithOptions} from 'date-fns/fp'
  export = isSameMonthWithOptions
}

declare module 'date-fns/fp/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameQuarterWithOptions/index.js' {
  import {isSameQuarterWithOptions} from 'date-fns/fp'
  export = isSameQuarterWithOptions
}

declare module 'date-fns/fp/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameSecondWithOptions/index.js' {
  import {isSameSecondWithOptions} from 'date-fns/fp'
  export = isSameSecondWithOptions
}

declare module 'date-fns/fp/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameWeekWithOptions/index.js' {
  import {isSameWeekWithOptions} from 'date-fns/fp'
  export = isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYear/index.js' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSameYearWithOptions/index.js' {
  import {isSameYearWithOptions} from 'date-fns/fp'
  export = isSameYearWithOptions
}

declare module 'date-fns/fp/isSaturday/index.js' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSaturdayWithOptions/index.js' {
  import {isSaturdayWithOptions} from 'date-fns/fp'
  export = isSaturdayWithOptions
}

declare module 'date-fns/fp/isSunday/index.js' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isSundayWithOptions/index.js' {
  import {isSundayWithOptions} from 'date-fns/fp'
  export = isSundayWithOptions
}

declare module 'date-fns/fp/isThursday/index.js' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isThursdayWithOptions/index.js' {
  import {isThursdayWithOptions} from 'date-fns/fp'
  export = isThursdayWithOptions
}

declare module 'date-fns/fp/isTuesday/index.js' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isTuesdayWithOptions/index.js' {
  import {isTuesdayWithOptions} from 'date-fns/fp'
  export = isTuesdayWithOptions
}

declare module 'date-fns/fp/isValid/index.js' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isValidWithOptions/index.js' {
  import {isValidWithOptions} from 'date-fns/fp'
  export = isValidWithOptions
}

declare module 'date-fns/fp/isWednesday/index.js' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWednesdayWithOptions/index.js' {
  import {isWednesdayWithOptions} from 'date-fns/fp'
  export = isWednesdayWithOptions
}

declare module 'date-fns/fp/isWeekend/index.js' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWeekendWithOptions/index.js' {
  import {isWeekendWithOptions} from 'date-fns/fp'
  export = isWeekendWithOptions
}

declare module 'date-fns/fp/isWithinInterval/index.js' {
  import {isWithinInterval} from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/isWithinIntervalWithOptions/index.js' {
  import {isWithinIntervalWithOptions} from 'date-fns/fp'
  export = isWithinIntervalWithOptions
}

declare module 'date-fns/fp/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOWeekWithOptions/index.js' {
  import {lastDayOfISOWeekWithOptions} from 'date-fns/fp'
  export = lastDayOfISOWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfISOWeekYear/index.js' {
  import {lastDayOfISOWeekYear} from 'date-fns/fp'
  export = lastDayOfISOWeekYear
}

declare module 'date-fns/fp/lastDayOfISOWeekYearWithOptions/index.js' {
  import {lastDayOfISOWeekYearWithOptions} from 'date-fns/fp'
  export = lastDayOfISOWeekYearWithOptions
}

declare module 'date-fns/fp/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfMonthWithOptions/index.js' {
  import {lastDayOfMonthWithOptions} from 'date-fns/fp'
  export = lastDayOfMonthWithOptions
}

declare module 'date-fns/fp/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions/index.js' {
  import {lastDayOfQuarterWithOptions} from 'date-fns/fp'
  export = lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions/index.js' {
  import {lastDayOfWeekWithOptions} from 'date-fns/fp'
  export = lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/lastDayOfYearWithOptions/index.js' {
  import {lastDayOfYearWithOptions} from 'date-fns/fp'
  export = lastDayOfYearWithOptions
}

declare module 'date-fns/fp/max/index.js' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/maxWithOptions/index.js' {
  import {maxWithOptions} from 'date-fns/fp'
  export = maxWithOptions
}

declare module 'date-fns/fp/min/index.js' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/minWithOptions/index.js' {
  import {minWithOptions} from 'date-fns/fp'
  export = minWithOptions
}

declare module 'date-fns/fp/parse/index.js' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/parseWithOptions/index.js' {
  import {parseWithOptions} from 'date-fns/fp'
  export = parseWithOptions
}

declare module 'date-fns/fp/setDate/index.js' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDateWithOptions/index.js' {
  import {setDateWithOptions} from 'date-fns/fp'
  export = setDateWithOptions
}

declare module 'date-fns/fp/setDay/index.js' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setDayOfYearWithOptions/index.js' {
  import {setDayOfYearWithOptions} from 'date-fns/fp'
  export = setDayOfYearWithOptions
}

declare module 'date-fns/fp/setDayWithOptions/index.js' {
  import {setDayWithOptions} from 'date-fns/fp'
  export = setDayWithOptions
}

declare module 'date-fns/fp/setHours/index.js' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setHoursWithOptions/index.js' {
  import {setHoursWithOptions} from 'date-fns/fp'
  export = setHoursWithOptions
}

declare module 'date-fns/fp/setISODay/index.js' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISODayWithOptions/index.js' {
  import {setISODayWithOptions} from 'date-fns/fp'
  export = setISODayWithOptions
}

declare module 'date-fns/fp/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOWeekWithOptions/index.js' {
  import {setISOWeekWithOptions} from 'date-fns/fp'
  export = setISOWeekWithOptions
}

declare module 'date-fns/fp/setISOWeekYear/index.js' {
  import {setISOWeekYear} from 'date-fns/fp'
  export = setISOWeekYear
}

declare module 'date-fns/fp/setISOWeekYearWithOptions/index.js' {
  import {setISOWeekYearWithOptions} from 'date-fns/fp'
  export = setISOWeekYearWithOptions
}

declare module 'date-fns/fp/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMillisecondsWithOptions/index.js' {
  import {setMillisecondsWithOptions} from 'date-fns/fp'
  export = setMillisecondsWithOptions
}

declare module 'date-fns/fp/setMinutes/index.js' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMinutesWithOptions/index.js' {
  import {setMinutesWithOptions} from 'date-fns/fp'
  export = setMinutesWithOptions
}

declare module 'date-fns/fp/setMonth/index.js' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setMonthWithOptions/index.js' {
  import {setMonthWithOptions} from 'date-fns/fp'
  export = setMonthWithOptions
}

declare module 'date-fns/fp/setQuarter/index.js' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setQuarterWithOptions/index.js' {
  import {setQuarterWithOptions} from 'date-fns/fp'
  export = setQuarterWithOptions
}

declare module 'date-fns/fp/setSeconds/index.js' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setSecondsWithOptions/index.js' {
  import {setSecondsWithOptions} from 'date-fns/fp'
  export = setSecondsWithOptions
}

declare module 'date-fns/fp/setWeek/index.js' {
  import {setWeek} from 'date-fns/fp'
  export = setWeek
}

declare module 'date-fns/fp/setWeekWithOptions/index.js' {
  import {setWeekWithOptions} from 'date-fns/fp'
  export = setWeekWithOptions
}

declare module 'date-fns/fp/setWeekYear/index.js' {
  import {setWeekYear} from 'date-fns/fp'
  export = setWeekYear
}

declare module 'date-fns/fp/setWeekYearWithOptions/index.js' {
  import {setWeekYearWithOptions} from 'date-fns/fp'
  export = setWeekYearWithOptions
}

declare module 'date-fns/fp/setYear/index.js' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/setYearWithOptions/index.js' {
  import {setYearWithOptions} from 'date-fns/fp'
  export = setYearWithOptions
}

declare module 'date-fns/fp/startOfDay/index.js' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfDayWithOptions/index.js' {
  import {startOfDayWithOptions} from 'date-fns/fp'
  export = startOfDayWithOptions
}

declare module 'date-fns/fp/startOfHour/index.js' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfHourWithOptions/index.js' {
  import {startOfHourWithOptions} from 'date-fns/fp'
  export = startOfHourWithOptions
}

declare module 'date-fns/fp/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOWeekWithOptions/index.js' {
  import {startOfISOWeekWithOptions} from 'date-fns/fp'
  export = startOfISOWeekWithOptions
}

declare module 'date-fns/fp/startOfISOWeekYear/index.js' {
  import {startOfISOWeekYear} from 'date-fns/fp'
  export = startOfISOWeekYear
}

declare module 'date-fns/fp/startOfISOWeekYearWithOptions/index.js' {
  import {startOfISOWeekYearWithOptions} from 'date-fns/fp'
  export = startOfISOWeekYearWithOptions
}

declare module 'date-fns/fp/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMinuteWithOptions/index.js' {
  import {startOfMinuteWithOptions} from 'date-fns/fp'
  export = startOfMinuteWithOptions
}

declare module 'date-fns/fp/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfMonthWithOptions/index.js' {
  import {startOfMonthWithOptions} from 'date-fns/fp'
  export = startOfMonthWithOptions
}

declare module 'date-fns/fp/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfQuarterWithOptions/index.js' {
  import {startOfQuarterWithOptions} from 'date-fns/fp'
  export = startOfQuarterWithOptions
}

declare module 'date-fns/fp/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfSecondWithOptions/index.js' {
  import {startOfSecondWithOptions} from 'date-fns/fp'
  export = startOfSecondWithOptions
}

declare module 'date-fns/fp/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfWeekWithOptions/index.js' {
  import {startOfWeekWithOptions} from 'date-fns/fp'
  export = startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfWeekYear/index.js' {
  import {startOfWeekYear} from 'date-fns/fp'
  export = startOfWeekYear
}

declare module 'date-fns/fp/startOfWeekYearWithOptions/index.js' {
  import {startOfWeekYearWithOptions} from 'date-fns/fp'
  export = startOfWeekYearWithOptions
}

declare module 'date-fns/fp/startOfYear/index.js' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/startOfYearWithOptions/index.js' {
  import {startOfYearWithOptions} from 'date-fns/fp'
  export = startOfYearWithOptions
}

declare module 'date-fns/fp/subDays/index.js' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subDaysWithOptions/index.js' {
  import {subDaysWithOptions} from 'date-fns/fp'
  export = subDaysWithOptions
}

declare module 'date-fns/fp/subHours/index.js' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subHoursWithOptions/index.js' {
  import {subHoursWithOptions} from 'date-fns/fp'
  export = subHoursWithOptions
}

declare module 'date-fns/fp/subISOWeekYears/index.js' {
  import {subISOWeekYears} from 'date-fns/fp'
  export = subISOWeekYears
}

declare module 'date-fns/fp/subISOWeekYearsWithOptions/index.js' {
  import {subISOWeekYearsWithOptions} from 'date-fns/fp'
  export = subISOWeekYearsWithOptions
}

declare module 'date-fns/fp/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMillisecondsWithOptions/index.js' {
  import {subMillisecondsWithOptions} from 'date-fns/fp'
  export = subMillisecondsWithOptions
}

declare module 'date-fns/fp/subMinutes/index.js' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMinutesWithOptions/index.js' {
  import {subMinutesWithOptions} from 'date-fns/fp'
  export = subMinutesWithOptions
}

declare module 'date-fns/fp/subMonths/index.js' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subMonthsWithOptions/index.js' {
  import {subMonthsWithOptions} from 'date-fns/fp'
  export = subMonthsWithOptions
}

declare module 'date-fns/fp/subQuarters/index.js' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subQuartersWithOptions/index.js' {
  import {subQuartersWithOptions} from 'date-fns/fp'
  export = subQuartersWithOptions
}

declare module 'date-fns/fp/subSeconds/index.js' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subSecondsWithOptions/index.js' {
  import {subSecondsWithOptions} from 'date-fns/fp'
  export = subSecondsWithOptions
}

declare module 'date-fns/fp/subWeeks/index.js' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subWeeksWithOptions/index.js' {
  import {subWeeksWithOptions} from 'date-fns/fp'
  export = subWeeksWithOptions
}

declare module 'date-fns/fp/subYears/index.js' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/subYearsWithOptions/index.js' {
  import {subYearsWithOptions} from 'date-fns/fp'
  export = subYearsWithOptions
}

declare module 'date-fns/fp/toDate/index.js' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/toDateWithOptions/index.js' {
  import {toDateWithOptions} from 'date-fns/fp'
  export = toDateWithOptions
}

// ECMAScript Module Functions

declare module 'date-fns/esm' {
  function addDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addDays {}

  function addHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addHours {}

  function addISOWeekYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addISOWeekYears {}

  function addMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMilliseconds {}

  function addMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMinutes {}

  function addMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMonths {}

  function addQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addQuarters {}

  function addSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addSeconds {}

  function addWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addWeeks {}

  function addYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addYears {}

  function areIntervalsOverlapping (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): boolean
  namespace areIntervalsOverlapping {}

  function closestIndexTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): number
  namespace closestIndexTo {}

  function closestTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace closestTo {}

  function compareAsc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareAsc {}

  function compareDesc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareDesc {}

  function differenceInCalendarDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOWeekYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOWeekYears {}

  function differenceInCalendarMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInDays {}

  function differenceInHours (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInHours {}

  function differenceInISOWeekYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInISOWeekYears {}

  function differenceInMilliseconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInWeeks {}

  function differenceInYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInYears {}

  function eachDayOfInterval (
    interval: Interval,
    options?: Options
  ): Date[]
  namespace eachDayOfInterval {}

  function eachWeekOfInterval (
    interval: Interval,
    options?: Options
  ): Date[]
  namespace eachWeekOfInterval {}

  function endOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfDay {}

  function endOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfHour {}

  function endOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOWeek {}

  function endOfISOWeekYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOWeekYear {}

  function endOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMinute {}

  function endOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMonth {}

  function endOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfQuarter {}

  function endOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfSecond {}

  function endOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfWeek {}

  function endOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfYear {}

  function format (
    date: Date | string | number,
    format: string,
    options?: Options
  ): string
  namespace format {}

  function formatDistance (
    date: Date | string | number,
    baseDate: Date | string | number,
    options?: Options
  ): string
  namespace formatDistance {}

  function formatDistanceStrict (
    date: Date | string | number,
    baseDate: Date | string | number,
    options?: Options
  ): string
  namespace formatDistanceStrict {}

  function formatRelative (
    date: Date | string | number,
    baseDate: Date | string | number,
    options?: Options
  ): string
  namespace formatRelative {}

  function getDate (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDate {}

  function getDay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDay {}

  function getDayOfYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDayOfYear {}

  function getDaysInMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInMonth {}

  function getDaysInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInYear {}

  function getHours (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getHours {}

  function getISODay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISODay {}

  function getISOWeek (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeek {}

  function getISOWeeksInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeeksInYear {}

  function getISOWeekYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeekYear {}

  function getMilliseconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMilliseconds {}

  function getMinutes (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMinutes {}

  function getMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getQuarter {}

  function getSeconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getSeconds {}

  function getTime (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getTime {}

  function getWeek (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getWeek {}

  function getWeekOfMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getWeekOfMonth {}

  function getWeeksInMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getWeeksInMonth {}

  function getWeekYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getWeekYear {}

  function getYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getYear {}

  function isAfter (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isAfter {}

  function isBefore (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isBefore {}

  function isDate (
    value: any,
    options?: Options
  ): boolean
  namespace isDate {}

  function isEqual (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isEqual {}

  function isFirstDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFirstDayOfMonth {}

  function isFriday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFriday {}

  function isLastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLeapYear {}

  function isMonday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isMonday {}

  function isSameDay (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameDay {}

  function isSameHour (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOWeekYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOWeekYear {}

  function isSameMinute (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMinute {}

  function isSameMonth (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameSecond {}

  function isSameWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameWeek {}

  function isSameYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameYear {}

  function isSaturday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSaturday {}

  function isSunday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSunday {}

  function isThursday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isThursday {}

  function isTuesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isTuesday {}

  function isValid (
    date: any,
    options?: Options
  ): boolean
  namespace isValid {}

  function isWednesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWednesday {}

  function isWeekend (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWeekend {}

  function isWithinInterval (
    date: Date | string | number,
    interval: Interval,
    options?: Options
  ): boolean
  namespace isWithinInterval {}

  function lastDayOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOWeekYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOWeekYear {}

  function lastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfYear {}

  function max (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace max {}

  function min (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace min {}

  function parse (
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: Options
  ): Date
  namespace parse {}

  function setDate (
    date: Date | string | number,
    dayOfMonth: number,
    options?: Options
  ): Date
  namespace setDate {}

  function setDay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setDay {}

  function setDayOfYear (
    date: Date | string | number,
    dayOfYear: number,
    options?: Options
  ): Date
  namespace setDayOfYear {}

  function setHours (
    date: Date | string | number,
    hours: number,
    options?: Options
  ): Date
  namespace setHours {}

  function setISODay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setISODay {}

  function setISOWeek (
    date: Date | string | number,
    isoWeek: number,
    options?: Options
  ): Date
  namespace setISOWeek {}

  function setISOWeekYear (
    date: Date | string | number,
    isoWeekYear: number,
    options?: Options
  ): Date
  namespace setISOWeekYear {}

  function setMilliseconds (
    date: Date | string | number,
    milliseconds: number,
    options?: Options
  ): Date
  namespace setMilliseconds {}

  function setMinutes (
    date: Date | string | number,
    minutes: number,
    options?: Options
  ): Date
  namespace setMinutes {}

  function setMonth (
    date: Date | string | number,
    month: number,
    options?: Options
  ): Date
  namespace setMonth {}

  function setQuarter (
    date: Date | string | number,
    quarter: number,
    options?: Options
  ): Date
  namespace setQuarter {}

  function setSeconds (
    date: Date | string | number,
    seconds: number,
    options?: Options
  ): Date
  namespace setSeconds {}

  function setWeek (
    date: Date | string | number,
    week: number,
    options?: Options
  ): Date
  namespace setWeek {}

  function setWeekYear (
    date: Date | string | number,
    weekYear: number,
    options?: Options
  ): Date
  namespace setWeekYear {}

  function setYear (
    date: Date | string | number,
    year: number,
    options?: Options
  ): Date
  namespace setYear {}

  function startOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfDay {}

  function startOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfHour {}

  function startOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOWeek {}

  function startOfISOWeekYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOWeekYear {}

  function startOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMinute {}

  function startOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMonth {}

  function startOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfQuarter {}

  function startOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfSecond {}

  function startOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfWeek {}

  function startOfWeekYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfWeekYear {}

  function startOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfYear {}

  function subDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subDays {}

  function subHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subHours {}

  function subISOWeekYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subISOWeekYears {}

  function subMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMilliseconds {}

  function subMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMinutes {}

  function subMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMonths {}

  function subQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subQuarters {}

  function subSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subSeconds {}

  function subWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subWeeks {}

  function subYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subYears {}

  function toDate (
    argument: Date | string | number,
    options?: Options
  ): Date
  namespace toDate {}
}

declare module 'date-fns/esm/addDays' {
  import {addDays} from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours' {
  import {addHours} from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOWeekYears' {
  import {addISOWeekYears} from 'date-fns/esm'
  export default addISOWeekYears
}

declare module 'date-fns/esm/addMilliseconds' {
  import {addMilliseconds} from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes' {
  import {addMinutes} from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths' {
  import {addMonths} from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters' {
  import {addQuarters} from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds' {
  import {addSeconds} from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks' {
  import {addWeeks} from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears' {
  import {addYears} from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping' {
  import {areIntervalsOverlapping} from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo' {
  import {closestIndexTo} from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo' {
  import {closestTo} from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc' {
  import {compareAsc} from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc' {
  import {compareDesc} from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOWeekYears' {
  import {differenceInCalendarISOWeekYears} from 'date-fns/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays' {
  import {differenceInDays} from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours' {
  import {differenceInHours} from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOWeekYears' {
  import {differenceInISOWeekYears} from 'date-fns/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths' {
  import {differenceInMonths} from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears' {
  import {differenceInYears} from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/eachDayOfInterval' {
  import {eachDayOfInterval} from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/eachWeekOfInterval' {
  import {eachWeekOfInterval} from 'date-fns/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/endOfDay' {
  import {endOfDay} from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfHour' {
  import {endOfHour} from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOWeekYear' {
  import {endOfISOWeekYear} from 'date-fns/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/endOfMinute' {
  import {endOfMinute} from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth' {
  import {endOfMonth} from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter' {
  import {endOfQuarter} from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond' {
  import {endOfSecond} from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfWeek' {
  import {endOfWeek} from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear' {
  import {endOfYear} from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/format' {
  import {format} from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance' {
  import {formatDistance} from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/formatDistanceStrict' {
  import {formatDistanceStrict} from 'date-fns/esm'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/formatRelative' {
  import {formatRelative} from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/getDate' {
  import {getDate} from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay' {
  import {getDay} from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear' {
  import {getDayOfYear} from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear' {
  import {getDaysInYear} from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getHours' {
  import {getHours} from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay' {
  import {getISODay} from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek' {
  import {getISOWeek} from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOWeekYear' {
  import {getISOWeekYear} from 'date-fns/esm'
  export default getISOWeekYear
}

declare module 'date-fns/esm/getMilliseconds' {
  import {getMilliseconds} from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes' {
  import {getMinutes} from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth' {
  import {getMonth} from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter' {
  import {getQuarter} from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds' {
  import {getSeconds} from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime' {
  import {getTime} from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getWeek' {
  import {getWeek} from 'date-fns/esm'
  export default getWeek
}

declare module 'date-fns/esm/getWeekOfMonth' {
  import {getWeekOfMonth} from 'date-fns/esm'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/getWeeksInMonth' {
  import {getWeeksInMonth} from 'date-fns/esm'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/getWeekYear' {
  import {getWeekYear} from 'date-fns/esm'
  export default getWeekYear
}

declare module 'date-fns/esm/getYear' {
  import {getYear} from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter' {
  import {isAfter} from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore' {
  import {isBefore} from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate' {
  import {isDate} from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual' {
  import {isEqual} from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday' {
  import {isFriday} from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear' {
  import {isLeapYear} from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday' {
  import {isMonday} from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isSameDay' {
  import {isSameDay} from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour' {
  import {isSameHour} from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOWeekYear' {
  import {isSameISOWeekYear} from 'date-fns/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/isSameMinute' {
  import {isSameMinute} from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth' {
  import {isSameMonth} from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter' {
  import {isSameQuarter} from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond' {
  import {isSameSecond} from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek' {
  import {isSameWeek} from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear' {
  import {isSameYear} from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday' {
  import {isSaturday} from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday' {
  import {isSunday} from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThursday' {
  import {isThursday} from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isTuesday' {
  import {isTuesday} from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid' {
  import {isValid} from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday' {
  import {isWednesday} from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend' {
  import {isWeekend} from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval' {
  import {isWithinInterval} from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOWeekYear' {
  import {lastDayOfISOWeekYear} from 'date-fns/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/max' {
  import {max} from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min' {
  import {min} from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse' {
  import {parse} from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/setDate' {
  import {setDate} from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay' {
  import {setDay} from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear' {
  import {setDayOfYear} from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours' {
  import {setHours} from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay' {
  import {setISODay} from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek' {
  import {setISOWeek} from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOWeekYear' {
  import {setISOWeekYear} from 'date-fns/esm'
  export default setISOWeekYear
}

declare module 'date-fns/esm/setMilliseconds' {
  import {setMilliseconds} from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes' {
  import {setMinutes} from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth' {
  import {setMonth} from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter' {
  import {setQuarter} from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds' {
  import {setSeconds} from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setWeek' {
  import {setWeek} from 'date-fns/esm'
  export default setWeek
}

declare module 'date-fns/esm/setWeekYear' {
  import {setWeekYear} from 'date-fns/esm'
  export default setWeekYear
}

declare module 'date-fns/esm/setYear' {
  import {setYear} from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay' {
  import {startOfDay} from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfHour' {
  import {startOfHour} from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOWeekYear' {
  import {startOfISOWeekYear} from 'date-fns/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/startOfMinute' {
  import {startOfMinute} from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth' {
  import {startOfMonth} from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter' {
  import {startOfQuarter} from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond' {
  import {startOfSecond} from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfWeek' {
  import {startOfWeek} from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfWeekYear' {
  import {startOfWeekYear} from 'date-fns/esm'
  export default startOfWeekYear
}

declare module 'date-fns/esm/startOfYear' {
  import {startOfYear} from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/subDays' {
  import {subDays} from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours' {
  import {subHours} from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOWeekYears' {
  import {subISOWeekYears} from 'date-fns/esm'
  export default subISOWeekYears
}

declare module 'date-fns/esm/subMilliseconds' {
  import {subMilliseconds} from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes' {
  import {subMinutes} from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths' {
  import {subMonths} from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters' {
  import {subQuarters} from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds' {
  import {subSeconds} from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks' {
  import {subWeeks} from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears' {
  import {subYears} from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate' {
  import {toDate} from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/addDays/index' {
  import {addDays} from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours/index' {
  import {addHours} from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOWeekYears/index' {
  import {addISOWeekYears} from 'date-fns/esm'
  export default addISOWeekYears
}

declare module 'date-fns/esm/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes/index' {
  import {addMinutes} from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths/index' {
  import {addMonths} from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters/index' {
  import {addQuarters} from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds/index' {
  import {addSeconds} from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks/index' {
  import {addWeeks} from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears/index' {
  import {addYears} from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo/index' {
  import {closestTo} from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc/index' {
  import {compareAsc} from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc/index' {
  import {compareDesc} from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOWeekYears/index' {
  import {differenceInCalendarISOWeekYears} from 'date-fns/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays/index' {
  import {differenceInDays} from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours/index' {
  import {differenceInHours} from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOWeekYears/index' {
  import {differenceInISOWeekYears} from 'date-fns/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears/index' {
  import {differenceInYears} from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/eachDayOfInterval/index' {
  import {eachDayOfInterval} from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/eachWeekOfInterval/index' {
  import {eachWeekOfInterval} from 'date-fns/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/endOfDay/index' {
  import {endOfDay} from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfHour/index' {
  import {endOfHour} from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOWeekYear/index' {
  import {endOfISOWeekYear} from 'date-fns/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/endOfMinute/index' {
  import {endOfMinute} from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth/index' {
  import {endOfMonth} from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond/index' {
  import {endOfSecond} from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfWeek/index' {
  import {endOfWeek} from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear/index' {
  import {endOfYear} from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/format/index' {
  import {format} from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance/index' {
  import {formatDistance} from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/formatDistanceStrict/index' {
  import {formatDistanceStrict} from 'date-fns/esm'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/formatRelative/index' {
  import {formatRelative} from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/getDate/index' {
  import {getDate} from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay/index' {
  import {getDay} from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getHours/index' {
  import {getHours} from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay/index' {
  import {getISODay} from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek/index' {
  import {getISOWeek} from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOWeekYear/index' {
  import {getISOWeekYear} from 'date-fns/esm'
  export default getISOWeekYear
}

declare module 'date-fns/esm/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes/index' {
  import {getMinutes} from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth/index' {
  import {getMonth} from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter/index' {
  import {getQuarter} from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds/index' {
  import {getSeconds} from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime/index' {
  import {getTime} from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getWeek/index' {
  import {getWeek} from 'date-fns/esm'
  export default getWeek
}

declare module 'date-fns/esm/getWeekOfMonth/index' {
  import {getWeekOfMonth} from 'date-fns/esm'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/getWeeksInMonth/index' {
  import {getWeeksInMonth} from 'date-fns/esm'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/getWeekYear/index' {
  import {getWeekYear} from 'date-fns/esm'
  export default getWeekYear
}

declare module 'date-fns/esm/getYear/index' {
  import {getYear} from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter/index' {
  import {isAfter} from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore/index' {
  import {isBefore} from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate/index' {
  import {isDate} from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual/index' {
  import {isEqual} from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday/index' {
  import {isFriday} from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear/index' {
  import {isLeapYear} from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday/index' {
  import {isMonday} from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isSameDay/index' {
  import {isSameDay} from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour/index' {
  import {isSameHour} from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOWeekYear/index' {
  import {isSameISOWeekYear} from 'date-fns/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/isSameMinute/index' {
  import {isSameMinute} from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth/index' {
  import {isSameMonth} from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond/index' {
  import {isSameSecond} from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek/index' {
  import {isSameWeek} from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear/index' {
  import {isSameYear} from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday/index' {
  import {isSaturday} from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index' {
  import {isSunday} from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThursday/index' {
  import {isThursday} from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isTuesday/index' {
  import {isTuesday} from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid/index' {
  import {isValid} from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday/index' {
  import {isWednesday} from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend/index' {
  import {isWeekend} from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval/index' {
  import {isWithinInterval} from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOWeekYear/index' {
  import {lastDayOfISOWeekYear} from 'date-fns/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/max/index' {
  import {max} from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min/index' {
  import {min} from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse/index' {
  import {parse} from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/setDate/index' {
  import {setDate} from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay/index' {
  import {setDay} from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours/index' {
  import {setHours} from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay/index' {
  import {setISODay} from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek/index' {
  import {setISOWeek} from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOWeekYear/index' {
  import {setISOWeekYear} from 'date-fns/esm'
  export default setISOWeekYear
}

declare module 'date-fns/esm/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes/index' {
  import {setMinutes} from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth/index' {
  import {setMonth} from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter/index' {
  import {setQuarter} from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds/index' {
  import {setSeconds} from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setWeek/index' {
  import {setWeek} from 'date-fns/esm'
  export default setWeek
}

declare module 'date-fns/esm/setWeekYear/index' {
  import {setWeekYear} from 'date-fns/esm'
  export default setWeekYear
}

declare module 'date-fns/esm/setYear/index' {
  import {setYear} from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay/index' {
  import {startOfDay} from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfHour/index' {
  import {startOfHour} from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOWeekYear/index' {
  import {startOfISOWeekYear} from 'date-fns/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/startOfMinute/index' {
  import {startOfMinute} from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth/index' {
  import {startOfMonth} from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond/index' {
  import {startOfSecond} from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfWeek/index' {
  import {startOfWeek} from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfWeekYear/index' {
  import {startOfWeekYear} from 'date-fns/esm'
  export default startOfWeekYear
}

declare module 'date-fns/esm/startOfYear/index' {
  import {startOfYear} from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/subDays/index' {
  import {subDays} from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours/index' {
  import {subHours} from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOWeekYears/index' {
  import {subISOWeekYears} from 'date-fns/esm'
  export default subISOWeekYears
}

declare module 'date-fns/esm/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes/index' {
  import {subMinutes} from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths/index' {
  import {subMonths} from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters/index' {
  import {subQuarters} from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds/index' {
  import {subSeconds} from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks/index' {
  import {subWeeks} from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears/index' {
  import {subYears} from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate/index' {
  import {toDate} from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/addDays/index.js' {
  import {addDays} from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours/index.js' {
  import {addHours} from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOWeekYears/index.js' {
  import {addISOWeekYears} from 'date-fns/esm'
  export default addISOWeekYears
}

declare module 'date-fns/esm/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes/index.js' {
  import {addMinutes} from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths/index.js' {
  import {addMonths} from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters/index.js' {
  import {addQuarters} from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds/index.js' {
  import {addSeconds} from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks/index.js' {
  import {addWeeks} from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears/index.js' {
  import {addYears} from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo/index.js' {
  import {closestTo} from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc/index.js' {
  import {compareAsc} from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc/index.js' {
  import {compareDesc} from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOWeekYears/index.js' {
  import {differenceInCalendarISOWeekYears} from 'date-fns/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOWeekYears/index.js' {
  import {differenceInISOWeekYears} from 'date-fns/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/eachDayOfInterval/index.js' {
  import {eachDayOfInterval} from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/eachWeekOfInterval/index.js' {
  import {eachWeekOfInterval} from 'date-fns/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/endOfDay/index.js' {
  import {endOfDay} from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfHour/index.js' {
  import {endOfHour} from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOWeekYear/index.js' {
  import {endOfISOWeekYear} from 'date-fns/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear/index.js' {
  import {endOfYear} from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/format/index.js' {
  import {format} from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance/index.js' {
  import {formatDistance} from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/formatDistanceStrict/index.js' {
  import {formatDistanceStrict} from 'date-fns/esm'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/formatRelative/index.js' {
  import {formatRelative} from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/getDate/index.js' {
  import {getDate} from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay/index.js' {
  import {getDay} from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getHours/index.js' {
  import {getHours} from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay/index.js' {
  import {getISODay} from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOWeekYear/index.js' {
  import {getISOWeekYear} from 'date-fns/esm'
  export default getISOWeekYear
}

declare module 'date-fns/esm/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes/index.js' {
  import {getMinutes} from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth/index.js' {
  import {getMonth} from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter/index.js' {
  import {getQuarter} from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds/index.js' {
  import {getSeconds} from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime/index.js' {
  import {getTime} from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getWeek/index.js' {
  import {getWeek} from 'date-fns/esm'
  export default getWeek
}

declare module 'date-fns/esm/getWeekOfMonth/index.js' {
  import {getWeekOfMonth} from 'date-fns/esm'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/getWeeksInMonth/index.js' {
  import {getWeeksInMonth} from 'date-fns/esm'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/getWeekYear/index.js' {
  import {getWeekYear} from 'date-fns/esm'
  export default getWeekYear
}

declare module 'date-fns/esm/getYear/index.js' {
  import {getYear} from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter/index.js' {
  import {isAfter} from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore/index.js' {
  import {isBefore} from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate/index.js' {
  import {isDate} from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual/index.js' {
  import {isEqual} from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday/index.js' {
  import {isFriday} from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday/index.js' {
  import {isMonday} from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isSameDay/index.js' {
  import {isSameDay} from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour/index.js' {
  import {isSameHour} from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOWeekYear/index.js' {
  import {isSameISOWeekYear} from 'date-fns/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear/index.js' {
  import {isSameYear} from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday/index.js' {
  import {isSaturday} from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index.js' {
  import {isSunday} from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThursday/index.js' {
  import {isThursday} from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isTuesday/index.js' {
  import {isTuesday} from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid/index.js' {
  import {isValid} from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday/index.js' {
  import {isWednesday} from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend/index.js' {
  import {isWeekend} from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval/index.js' {
  import {isWithinInterval} from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOWeekYear/index.js' {
  import {lastDayOfISOWeekYear} from 'date-fns/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/max/index.js' {
  import {max} from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min/index.js' {
  import {min} from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse/index.js' {
  import {parse} from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/setDate/index.js' {
  import {setDate} from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay/index.js' {
  import {setDay} from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours/index.js' {
  import {setHours} from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay/index.js' {
  import {setISODay} from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOWeekYear/index.js' {
  import {setISOWeekYear} from 'date-fns/esm'
  export default setISOWeekYear
}

declare module 'date-fns/esm/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes/index.js' {
  import {setMinutes} from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth/index.js' {
  import {setMonth} from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter/index.js' {
  import {setQuarter} from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds/index.js' {
  import {setSeconds} from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setWeek/index.js' {
  import {setWeek} from 'date-fns/esm'
  export default setWeek
}

declare module 'date-fns/esm/setWeekYear/index.js' {
  import {setWeekYear} from 'date-fns/esm'
  export default setWeekYear
}

declare module 'date-fns/esm/setYear/index.js' {
  import {setYear} from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay/index.js' {
  import {startOfDay} from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfHour/index.js' {
  import {startOfHour} from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOWeekYear/index.js' {
  import {startOfISOWeekYear} from 'date-fns/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfWeekYear/index.js' {
  import {startOfWeekYear} from 'date-fns/esm'
  export default startOfWeekYear
}

declare module 'date-fns/esm/startOfYear/index.js' {
  import {startOfYear} from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/subDays/index.js' {
  import {subDays} from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours/index.js' {
  import {subHours} from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOWeekYears/index.js' {
  import {subISOWeekYears} from 'date-fns/esm'
  export default subISOWeekYears
}

declare module 'date-fns/esm/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes/index.js' {
  import {subMinutes} from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths/index.js' {
  import {subMonths} from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters/index.js' {
  import {subQuarters} from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds/index.js' {
  import {subSeconds} from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks/index.js' {
  import {subWeeks} from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears/index.js' {
  import {subYears} from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate/index.js' {
  import {toDate} from 'date-fns/esm'
  export default toDate
}

// ECMAScript Module FP Functions

declare module 'date-fns/esm/fp' {
  const addDays: CurriedFn2<number, Date | string | number, Date>
  namespace addDays {}

  const addDaysWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addDaysWithOptions {}

  const addHours: CurriedFn2<number, Date | string | number, Date>
  namespace addHours {}

  const addHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addHoursWithOptions {}

  const addISOWeekYears: CurriedFn2<number, Date | string | number, Date>
  namespace addISOWeekYears {}

  const addISOWeekYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addISOWeekYearsWithOptions {}

  const addMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace addMilliseconds {}

  const addMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMillisecondsWithOptions {}

  const addMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace addMinutes {}

  const addMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMinutesWithOptions {}

  const addMonths: CurriedFn2<number, Date | string | number, Date>
  namespace addMonths {}

  const addMonthsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMonthsWithOptions {}

  const addQuarters: CurriedFn2<number, Date | string | number, Date>
  namespace addQuarters {}

  const addQuartersWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addQuartersWithOptions {}

  const addSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace addSeconds {}

  const addSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addSecondsWithOptions {}

  const addWeeks: CurriedFn2<number, Date | string | number, Date>
  namespace addWeeks {}

  const addWeeksWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addWeeksWithOptions {}

  const addYears: CurriedFn2<number, Date | string | number, Date>
  namespace addYears {}

  const addYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addYearsWithOptions {}

  const areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  const areIntervalsOverlappingWithOptions: CurriedFn3<Options, Interval, Interval, boolean>
  namespace areIntervalsOverlappingWithOptions {}

  const closestIndexTo: CurriedFn2<(Date | string | number)[], Date | string | number, number>
  namespace closestIndexTo {}

  const closestIndexToWithOptions: CurriedFn3<Options, (Date | string | number)[], Date | string | number, number>
  namespace closestIndexToWithOptions {}

  const closestTo: CurriedFn2<(Date | string | number)[], Date | string | number, Date>
  namespace closestTo {}

  const closestToWithOptions: CurriedFn3<Options, (Date | string | number)[], Date | string | number, Date>
  namespace closestToWithOptions {}

  const compareAsc: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace compareAsc {}

  const compareAscWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace compareAscWithOptions {}

  const compareDesc: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace compareDesc {}

  const compareDescWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace compareDescWithOptions {}

  const differenceInCalendarDays: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarDays {}

  const differenceInCalendarDaysWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarDaysWithOptions {}

  const differenceInCalendarISOWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeeks {}

  const differenceInCalendarISOWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeeksWithOptions {}

  const differenceInCalendarISOWeekYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeekYears {}

  const differenceInCalendarISOWeekYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeekYearsWithOptions {}

  const differenceInCalendarMonths: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarMonths {}

  const differenceInCalendarMonthsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarMonthsWithOptions {}

  const differenceInCalendarQuarters: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarQuarters {}

  const differenceInCalendarQuartersWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarQuartersWithOptions {}

  const differenceInCalendarWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarWeeks {}

  const differenceInCalendarWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarWeeksWithOptions {}

  const differenceInCalendarYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarYears {}

  const differenceInCalendarYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarYearsWithOptions {}

  const differenceInDays: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInDays {}

  const differenceInDaysWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInDaysWithOptions {}

  const differenceInHours: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInHours {}

  const differenceInHoursWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInHoursWithOptions {}

  const differenceInISOWeekYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInISOWeekYears {}

  const differenceInISOWeekYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInISOWeekYearsWithOptions {}

  const differenceInMilliseconds: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMilliseconds {}

  const differenceInMillisecondsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMillisecondsWithOptions {}

  const differenceInMinutes: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMinutes {}

  const differenceInMinutesWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMinutesWithOptions {}

  const differenceInMonths: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMonths {}

  const differenceInMonthsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMonthsWithOptions {}

  const differenceInQuarters: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInQuarters {}

  const differenceInQuartersWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInQuartersWithOptions {}

  const differenceInSeconds: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInSeconds {}

  const differenceInSecondsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInSecondsWithOptions {}

  const differenceInWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInWeeks {}

  const differenceInWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInWeeksWithOptions {}

  const differenceInYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInYears {}

  const differenceInYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInYearsWithOptions {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<Options, Interval, Date[]>
  namespace eachDayOfIntervalWithOptions {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<Options, Interval, Date[]>
  namespace eachWeekOfIntervalWithOptions {}

  const endOfDay: CurriedFn1<Date | string | number, Date>
  namespace endOfDay {}

  const endOfDayWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfDayWithOptions {}

  const endOfHour: CurriedFn1<Date | string | number, Date>
  namespace endOfHour {}

  const endOfHourWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfHourWithOptions {}

  const endOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace endOfISOWeek {}

  const endOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfISOWeekWithOptions {}

  const endOfISOWeekYear: CurriedFn1<Date | string | number, Date>
  namespace endOfISOWeekYear {}

  const endOfISOWeekYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfISOWeekYearWithOptions {}

  const endOfMinute: CurriedFn1<Date | string | number, Date>
  namespace endOfMinute {}

  const endOfMinuteWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfMinuteWithOptions {}

  const endOfMonth: CurriedFn1<Date | string | number, Date>
  namespace endOfMonth {}

  const endOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfMonthWithOptions {}

  const endOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace endOfQuarter {}

  const endOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfQuarterWithOptions {}

  const endOfSecond: CurriedFn1<Date | string | number, Date>
  namespace endOfSecond {}

  const endOfSecondWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfSecondWithOptions {}

  const endOfWeek: CurriedFn1<Date | string | number, Date>
  namespace endOfWeek {}

  const endOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfWeekWithOptions {}

  const endOfYear: CurriedFn1<Date | string | number, Date>
  namespace endOfYear {}

  const endOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfYearWithOptions {}

  const format: CurriedFn2<string, Date | string | number, string>
  namespace format {}

  const formatDistance: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace formatDistance {}

  const formatDistanceStrict: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace formatDistanceStrict {}

  const formatDistanceStrictWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace formatDistanceWithOptions {}

  const formatRelative: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace formatRelativeWithOptions {}

  const formatWithOptions: CurriedFn3<Options, string, Date | string | number, string>
  namespace formatWithOptions {}

  const getDate: CurriedFn1<Date | string | number, number>
  namespace getDate {}

  const getDateWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDateWithOptions {}

  const getDay: CurriedFn1<Date | string | number, number>
  namespace getDay {}

  const getDayOfYear: CurriedFn1<Date | string | number, number>
  namespace getDayOfYear {}

  const getDayOfYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDayOfYearWithOptions {}

  const getDaysInMonth: CurriedFn1<Date | string | number, number>
  namespace getDaysInMonth {}

  const getDaysInMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaysInMonthWithOptions {}

  const getDaysInYear: CurriedFn1<Date | string | number, number>
  namespace getDaysInYear {}

  const getDaysInYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaysInYearWithOptions {}

  const getDayWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDayWithOptions {}

  const getHours: CurriedFn1<Date | string | number, number>
  namespace getHours {}

  const getHoursWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getHoursWithOptions {}

  const getISODay: CurriedFn1<Date | string | number, number>
  namespace getISODay {}

  const getISODayWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISODayWithOptions {}

  const getISOWeek: CurriedFn1<Date | string | number, number>
  namespace getISOWeek {}

  const getISOWeeksInYear: CurriedFn1<Date | string | number, number>
  namespace getISOWeeksInYear {}

  const getISOWeeksInYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeeksInYearWithOptions {}

  const getISOWeekWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeekWithOptions {}

  const getISOWeekYear: CurriedFn1<Date | string | number, number>
  namespace getISOWeekYear {}

  const getISOWeekYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeekYearWithOptions {}

  const getMilliseconds: CurriedFn1<Date | string | number, number>
  namespace getMilliseconds {}

  const getMillisecondsWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMillisecondsWithOptions {}

  const getMinutes: CurriedFn1<Date | string | number, number>
  namespace getMinutes {}

  const getMinutesWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMinutesWithOptions {}

  const getMonth: CurriedFn1<Date | string | number, number>
  namespace getMonth {}

  const getMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMonthWithOptions {}

  const getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  const getOverlappingDaysInIntervalsWithOptions: CurriedFn3<Options, Interval, Interval, number>
  namespace getOverlappingDaysInIntervalsWithOptions {}

  const getQuarter: CurriedFn1<Date | string | number, number>
  namespace getQuarter {}

  const getQuarterWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getQuarterWithOptions {}

  const getSeconds: CurriedFn1<Date | string | number, number>
  namespace getSeconds {}

  const getSecondsWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getSecondsWithOptions {}

  const getTime: CurriedFn1<Date | string | number, number>
  namespace getTime {}

  const getTimeWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getTimeWithOptions {}

  const getWeek: CurriedFn1<Date | string | number, number>
  namespace getWeek {}

  const getWeekOfMonth: CurriedFn1<Date | string | number, number>
  namespace getWeekOfMonth {}

  const getWeekOfMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | string | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | string | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | string | number, number>
  namespace getYear {}

  const getYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getYearWithOptions {}

  const isAfter: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isAfter {}

  const isAfterWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isAfterWithOptions {}

  const isBefore: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isBefore {}

  const isBeforeWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isBeforeWithOptions {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isDateWithOptions: CurriedFn2<Options, any, boolean>
  namespace isDateWithOptions {}

  const isEqual: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isEqual {}

  const isEqualWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isEqualWithOptions {}

  const isFirstDayOfMonth: CurriedFn1<Date | string | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFirstDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isFirstDayOfMonthWithOptions {}

  const isFriday: CurriedFn1<Date | string | number, boolean>
  namespace isFriday {}

  const isFridayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isFridayWithOptions {}

  const isLastDayOfMonth: CurriedFn1<Date | string | number, boolean>
  namespace isLastDayOfMonth {}

  const isLastDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isLastDayOfMonthWithOptions {}

  const isLeapYear: CurriedFn1<Date | string | number, boolean>
  namespace isLeapYear {}

  const isLeapYearWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isLeapYearWithOptions {}

  const isMonday: CurriedFn1<Date | string | number, boolean>
  namespace isMonday {}

  const isMondayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isMondayWithOptions {}

  const isSameDay: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameDay {}

  const isSameDayWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameDayWithOptions {}

  const isSameHour: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameHour {}

  const isSameHourWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameHourWithOptions {}

  const isSameISOWeek: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeek {}

  const isSameISOWeekWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeekWithOptions {}

  const isSameISOWeekYear: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeekYear {}

  const isSameISOWeekYearWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeekYearWithOptions {}

  const isSameMinute: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameMinute {}

  const isSameMinuteWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameMinuteWithOptions {}

  const isSameMonth: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameMonth {}

  const isSameMonthWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameMonthWithOptions {}

  const isSameQuarter: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameQuarter {}

  const isSameQuarterWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameQuarterWithOptions {}

  const isSameSecond: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameSecond {}

  const isSameSecondWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameSecondWithOptions {}

  const isSameWeek: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameWeek {}

  const isSameWeekWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameWeekWithOptions {}

  const isSameYear: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameYear {}

  const isSameYearWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameYearWithOptions {}

  const isSaturday: CurriedFn1<Date | string | number, boolean>
  namespace isSaturday {}

  const isSaturdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isSaturdayWithOptions {}

  const isSunday: CurriedFn1<Date | string | number, boolean>
  namespace isSunday {}

  const isSundayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isSundayWithOptions {}

  const isThursday: CurriedFn1<Date | string | number, boolean>
  namespace isThursday {}

  const isThursdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isThursdayWithOptions {}

  const isTuesday: CurriedFn1<Date | string | number, boolean>
  namespace isTuesday {}

  const isTuesdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isTuesdayWithOptions {}

  const isValid: CurriedFn1<any, boolean>
  namespace isValid {}

  const isValidWithOptions: CurriedFn2<Options, any, boolean>
  namespace isValidWithOptions {}

  const isWednesday: CurriedFn1<Date | string | number, boolean>
  namespace isWednesday {}

  const isWednesdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isWednesdayWithOptions {}

  const isWeekend: CurriedFn1<Date | string | number, boolean>
  namespace isWeekend {}

  const isWeekendWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isWeekendWithOptions {}

  const isWithinInterval: CurriedFn2<Interval, Date | string | number, boolean>
  namespace isWithinInterval {}

  const isWithinIntervalWithOptions: CurriedFn3<Options, Interval, Date | string | number, boolean>
  namespace isWithinIntervalWithOptions {}

  const lastDayOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfISOWeek {}

  const lastDayOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfISOWeekWithOptions {}

  const lastDayOfISOWeekYear: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfISOWeekYear {}

  const lastDayOfISOWeekYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfISOWeekYearWithOptions {}

  const lastDayOfMonth: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfMonth {}

  const lastDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfMonthWithOptions {}

  const lastDayOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfQuarter {}

  const lastDayOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfYear {}

  const lastDayOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfYearWithOptions {}

  const max: CurriedFn1<(Date | string | number)[], Date>
  namespace max {}

  const maxWithOptions: CurriedFn2<Options, (Date | string | number)[], Date>
  namespace maxWithOptions {}

  const min: CurriedFn1<(Date | string | number)[], Date>
  namespace min {}

  const minWithOptions: CurriedFn2<Options, (Date | string | number)[], Date>
  namespace minWithOptions {}

  const parse: CurriedFn3<Date | string | number, string, string, Date>
  namespace parse {}

  const parseWithOptions: CurriedFn4<Options, Date | string | number, string, string, Date>
  namespace parseWithOptions {}

  const setDate: CurriedFn2<number, Date | string | number, Date>
  namespace setDate {}

  const setDateWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDateWithOptions {}

  const setDay: CurriedFn2<number, Date | string | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | string | number, Date>
  namespace setDayOfYear {}

  const setDayOfYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDayOfYearWithOptions {}

  const setDayWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDayWithOptions {}

  const setHours: CurriedFn2<number, Date | string | number, Date>
  namespace setHours {}

  const setHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setHoursWithOptions {}

  const setISODay: CurriedFn2<number, Date | string | number, Date>
  namespace setISODay {}

  const setISODayWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISODayWithOptions {}

  const setISOWeek: CurriedFn2<number, Date | string | number, Date>
  namespace setISOWeek {}

  const setISOWeekWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISOWeekWithOptions {}

  const setISOWeekYear: CurriedFn2<number, Date | string | number, Date>
  namespace setISOWeekYear {}

  const setISOWeekYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISOWeekYearWithOptions {}

  const setMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace setMilliseconds {}

  const setMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMillisecondsWithOptions {}

  const setMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace setMinutes {}

  const setMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMinutesWithOptions {}

  const setMonth: CurriedFn2<number, Date | string | number, Date>
  namespace setMonth {}

  const setMonthWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMonthWithOptions {}

  const setQuarter: CurriedFn2<number, Date | string | number, Date>
  namespace setQuarter {}

  const setQuarterWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setQuarterWithOptions {}

  const setSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace setSeconds {}

  const setSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setSecondsWithOptions {}

  const setWeek: CurriedFn2<number, Date | string | number, Date>
  namespace setWeek {}

  const setWeekWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | string | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setWeekYearWithOptions {}

  const setYear: CurriedFn2<number, Date | string | number, Date>
  namespace setYear {}

  const setYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setYearWithOptions {}

  const startOfDay: CurriedFn1<Date | string | number, Date>
  namespace startOfDay {}

  const startOfDayWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfDayWithOptions {}

  const startOfHour: CurriedFn1<Date | string | number, Date>
  namespace startOfHour {}

  const startOfHourWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfHourWithOptions {}

  const startOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace startOfISOWeek {}

  const startOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfISOWeekWithOptions {}

  const startOfISOWeekYear: CurriedFn1<Date | string | number, Date>
  namespace startOfISOWeekYear {}

  const startOfISOWeekYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfISOWeekYearWithOptions {}

  const startOfMinute: CurriedFn1<Date | string | number, Date>
  namespace startOfMinute {}

  const startOfMinuteWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfMinuteWithOptions {}

  const startOfMonth: CurriedFn1<Date | string | number, Date>
  namespace startOfMonth {}

  const startOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfMonthWithOptions {}

  const startOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace startOfQuarter {}

  const startOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfQuarterWithOptions {}

  const startOfSecond: CurriedFn1<Date | string | number, Date>
  namespace startOfSecond {}

  const startOfSecondWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfSecondWithOptions {}

  const startOfWeek: CurriedFn1<Date | string | number, Date>
  namespace startOfWeek {}

  const startOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | string | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | string | number, Date>
  namespace startOfYear {}

  const startOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfYearWithOptions {}

  const subDays: CurriedFn2<number, Date | string | number, Date>
  namespace subDays {}

  const subDaysWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subDaysWithOptions {}

  const subHours: CurriedFn2<number, Date | string | number, Date>
  namespace subHours {}

  const subHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subHoursWithOptions {}

  const subISOWeekYears: CurriedFn2<number, Date | string | number, Date>
  namespace subISOWeekYears {}

  const subISOWeekYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subISOWeekYearsWithOptions {}

  const subMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace subMilliseconds {}

  const subMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMillisecondsWithOptions {}

  const subMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace subMinutes {}

  const subMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMinutesWithOptions {}

  const subMonths: CurriedFn2<number, Date | string | number, Date>
  namespace subMonths {}

  const subMonthsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMonthsWithOptions {}

  const subQuarters: CurriedFn2<number, Date | string | number, Date>
  namespace subQuarters {}

  const subQuartersWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subQuartersWithOptions {}

  const subSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace subSeconds {}

  const subSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subSecondsWithOptions {}

  const subWeeks: CurriedFn2<number, Date | string | number, Date>
  namespace subWeeks {}

  const subWeeksWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subWeeksWithOptions {}

  const subYears: CurriedFn2<number, Date | string | number, Date>
  namespace subYears {}

  const subYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subYearsWithOptions {}

  const toDate: CurriedFn1<Date | string | number, Date>
  namespace toDate {}

  const toDateWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace toDateWithOptions {}
}

declare module 'date-fns/esm/fp/addDays' {
  import {addDays} from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addDaysWithOptions' {
  import {addDaysWithOptions} from 'date-fns/esm/fp'
  export default addDaysWithOptions
}

declare module 'date-fns/esm/fp/addHours' {
  import {addHours} from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addHoursWithOptions' {
  import {addHoursWithOptions} from 'date-fns/esm/fp'
  export default addHoursWithOptions
}

declare module 'date-fns/esm/fp/addISOWeekYears' {
  import {addISOWeekYears} from 'date-fns/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns/esm/fp/addISOWeekYearsWithOptions' {
  import {addISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default addISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/addMilliseconds' {
  import {addMilliseconds} from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMillisecondsWithOptions' {
  import {addMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default addMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/addMinutes' {
  import {addMinutes} from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMinutesWithOptions' {
  import {addMinutesWithOptions} from 'date-fns/esm/fp'
  export default addMinutesWithOptions
}

declare module 'date-fns/esm/fp/addMonths' {
  import {addMonths} from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addMonthsWithOptions' {
  import {addMonthsWithOptions} from 'date-fns/esm/fp'
  export default addMonthsWithOptions
}

declare module 'date-fns/esm/fp/addQuarters' {
  import {addQuarters} from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addQuartersWithOptions' {
  import {addQuartersWithOptions} from 'date-fns/esm/fp'
  export default addQuartersWithOptions
}

declare module 'date-fns/esm/fp/addSeconds' {
  import {addSeconds} from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addSecondsWithOptions' {
  import {addSecondsWithOptions} from 'date-fns/esm/fp'
  export default addSecondsWithOptions
}

declare module 'date-fns/esm/fp/addWeeks' {
  import {addWeeks} from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addWeeksWithOptions' {
  import {addWeeksWithOptions} from 'date-fns/esm/fp'
  export default addWeeksWithOptions
}

declare module 'date-fns/esm/fp/addYears' {
  import {addYears} from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/addYearsWithOptions' {
  import {addYearsWithOptions} from 'date-fns/esm/fp'
  export default addYearsWithOptions
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping' {
  import {areIntervalsOverlapping} from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions' {
  import {areIntervalsOverlappingWithOptions} from 'date-fns/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/esm/fp/closestIndexTo' {
  import {closestIndexTo} from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestIndexToWithOptions' {
  import {closestIndexToWithOptions} from 'date-fns/esm/fp'
  export default closestIndexToWithOptions
}

declare module 'date-fns/esm/fp/closestTo' {
  import {closestTo} from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/closestToWithOptions' {
  import {closestToWithOptions} from 'date-fns/esm/fp'
  export default closestToWithOptions
}

declare module 'date-fns/esm/fp/compareAsc' {
  import {compareAsc} from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareAscWithOptions' {
  import {compareAscWithOptions} from 'date-fns/esm/fp'
  export default compareAscWithOptions
}

declare module 'date-fns/esm/fp/compareDesc' {
  import {compareDesc} from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/compareDescWithOptions' {
  import {compareDescWithOptions} from 'date-fns/esm/fp'
  export default compareDescWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarDaysWithOptions' {
  import {differenceInCalendarDaysWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarDaysWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeksWithOptions' {
  import {differenceInCalendarISOWeeksWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYears' {
  import {differenceInCalendarISOWeekYears} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYearsWithOptions' {
  import {differenceInCalendarISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarMonthsWithOptions' {
  import {differenceInCalendarMonthsWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarMonthsWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarQuartersWithOptions' {
  import {differenceInCalendarQuartersWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions' {
  import {differenceInCalendarWeeksWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInCalendarYearsWithOptions' {
  import {differenceInCalendarYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarYearsWithOptions
}

declare module 'date-fns/esm/fp/differenceInDays' {
  import {differenceInDays} from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInDaysWithOptions' {
  import {differenceInDaysWithOptions} from 'date-fns/esm/fp'
  export default differenceInDaysWithOptions
}

declare module 'date-fns/esm/fp/differenceInHours' {
  import {differenceInHours} from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInHoursWithOptions' {
  import {differenceInHoursWithOptions} from 'date-fns/esm/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns/esm/fp/differenceInISOWeekYears' {
  import {differenceInISOWeekYears} from 'date-fns/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInISOWeekYearsWithOptions' {
  import {differenceInISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMillisecondsWithOptions' {
  import {differenceInMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default differenceInMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions' {
  import {differenceInMinutesWithOptions} from 'date-fns/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/esm/fp/differenceInMonths' {
  import {differenceInMonths} from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInMonthsWithOptions' {
  import {differenceInMonthsWithOptions} from 'date-fns/esm/fp'
  export default differenceInMonthsWithOptions
}

declare module 'date-fns/esm/fp/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions' {
  import {differenceInQuartersWithOptions} from 'date-fns/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions' {
  import {differenceInSecondsWithOptions} from 'date-fns/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions' {
  import {differenceInWeeksWithOptions} from 'date-fns/esm/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInYears' {
  import {differenceInYears} from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/differenceInYearsWithOptions' {
  import {differenceInYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInYearsWithOptions
}

declare module 'date-fns/esm/fp/eachDayOfInterval' {
  import {eachDayOfInterval} from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions' {
  import {eachDayOfIntervalWithOptions} from 'date-fns/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachWeekOfInterval' {
  import {eachWeekOfInterval} from 'date-fns/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/fp/eachWeekOfIntervalWithOptions' {
  import {eachWeekOfIntervalWithOptions} from 'date-fns/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/endOfDay' {
  import {endOfDay} from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfDayWithOptions' {
  import {endOfDayWithOptions} from 'date-fns/esm/fp'
  export default endOfDayWithOptions
}

declare module 'date-fns/esm/fp/endOfHour' {
  import {endOfHour} from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfHourWithOptions' {
  import {endOfHourWithOptions} from 'date-fns/esm/fp'
  export default endOfHourWithOptions
}

declare module 'date-fns/esm/fp/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOWeekWithOptions' {
  import {endOfISOWeekWithOptions} from 'date-fns/esm/fp'
  export default endOfISOWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfISOWeekYear' {
  import {endOfISOWeekYear} from 'date-fns/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/fp/endOfISOWeekYearWithOptions' {
  import {endOfISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default endOfISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/endOfMinute' {
  import {endOfMinute} from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMinuteWithOptions' {
  import {endOfMinuteWithOptions} from 'date-fns/esm/fp'
  export default endOfMinuteWithOptions
}

declare module 'date-fns/esm/fp/endOfMonth' {
  import {endOfMonth} from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfMonthWithOptions' {
  import {endOfMonthWithOptions} from 'date-fns/esm/fp'
  export default endOfMonthWithOptions
}

declare module 'date-fns/esm/fp/endOfQuarter' {
  import {endOfQuarter} from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfQuarterWithOptions' {
  import {endOfQuarterWithOptions} from 'date-fns/esm/fp'
  export default endOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/endOfSecond' {
  import {endOfSecond} from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfSecondWithOptions' {
  import {endOfSecondWithOptions} from 'date-fns/esm/fp'
  export default endOfSecondWithOptions
}

declare module 'date-fns/esm/fp/endOfWeek' {
  import {endOfWeek} from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions' {
  import {endOfWeekWithOptions} from 'date-fns/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfYear' {
  import {endOfYear} from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/endOfYearWithOptions' {
  import {endOfYearWithOptions} from 'date-fns/esm/fp'
  export default endOfYearWithOptions
}

declare module 'date-fns/esm/fp/format' {
  import {format} from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance' {
  import {formatDistance} from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceStrict' {
  import {formatDistanceStrict} from 'date-fns/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/fp/formatDistanceStrictWithOptions' {
  import {formatDistanceStrictWithOptions} from 'date-fns/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions' {
  import {formatDistanceWithOptions} from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatRelative' {
  import {formatRelative} from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions' {
  import {formatRelativeWithOptions} from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatWithOptions' {
  import {formatWithOptions} from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/getDate' {
  import {getDate} from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDateWithOptions' {
  import {getDateWithOptions} from 'date-fns/esm/fp'
  export default getDateWithOptions
}

declare module 'date-fns/esm/fp/getDay' {
  import {getDay} from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear' {
  import {getDayOfYear} from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDayOfYearWithOptions' {
  import {getDayOfYearWithOptions} from 'date-fns/esm/fp'
  export default getDayOfYearWithOptions
}

declare module 'date-fns/esm/fp/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInMonthWithOptions' {
  import {getDaysInMonthWithOptions} from 'date-fns/esm/fp'
  export default getDaysInMonthWithOptions
}

declare module 'date-fns/esm/fp/getDaysInYear' {
  import {getDaysInYear} from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getDaysInYearWithOptions' {
  import {getDaysInYearWithOptions} from 'date-fns/esm/fp'
  export default getDaysInYearWithOptions
}

declare module 'date-fns/esm/fp/getDayWithOptions' {
  import {getDayWithOptions} from 'date-fns/esm/fp'
  export default getDayWithOptions
}

declare module 'date-fns/esm/fp/getHours' {
  import {getHours} from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getHoursWithOptions' {
  import {getHoursWithOptions} from 'date-fns/esm/fp'
  export default getHoursWithOptions
}

declare module 'date-fns/esm/fp/getISODay' {
  import {getISODay} from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISODayWithOptions' {
  import {getISODayWithOptions} from 'date-fns/esm/fp'
  export default getISODayWithOptions
}

declare module 'date-fns/esm/fp/getISOWeek' {
  import {getISOWeek} from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOWeeksInYearWithOptions' {
  import {getISOWeeksInYearWithOptions} from 'date-fns/esm/fp'
  export default getISOWeeksInYearWithOptions
}

declare module 'date-fns/esm/fp/getISOWeekWithOptions' {
  import {getISOWeekWithOptions} from 'date-fns/esm/fp'
  export default getISOWeekWithOptions
}

declare module 'date-fns/esm/fp/getISOWeekYear' {
  import {getISOWeekYear} from 'date-fns/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns/esm/fp/getISOWeekYearWithOptions' {
  import {getISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default getISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getMilliseconds' {
  import {getMilliseconds} from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMillisecondsWithOptions' {
  import {getMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default getMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/getMinutes' {
  import {getMinutes} from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMinutesWithOptions' {
  import {getMinutesWithOptions} from 'date-fns/esm/fp'
  export default getMinutesWithOptions
}

declare module 'date-fns/esm/fp/getMonth' {
  import {getMonth} from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getMonthWithOptions' {
  import {getMonthWithOptions} from 'date-fns/esm/fp'
  export default getMonthWithOptions
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervalsWithOptions' {
  import {getOverlappingDaysInIntervalsWithOptions} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervalsWithOptions
}

declare module 'date-fns/esm/fp/getQuarter' {
  import {getQuarter} from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getQuarterWithOptions' {
  import {getQuarterWithOptions} from 'date-fns/esm/fp'
  export default getQuarterWithOptions
}

declare module 'date-fns/esm/fp/getSeconds' {
  import {getSeconds} from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getSecondsWithOptions' {
  import {getSecondsWithOptions} from 'date-fns/esm/fp'
  export default getSecondsWithOptions
}

declare module 'date-fns/esm/fp/getTime' {
  import {getTime} from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getTimeWithOptions' {
  import {getTimeWithOptions} from 'date-fns/esm/fp'
  export default getTimeWithOptions
}

declare module 'date-fns/esm/fp/getWeek' {
  import {getWeek} from 'date-fns/esm/fp'
  export default getWeek
}

declare module 'date-fns/esm/fp/getWeekOfMonth' {
  import {getWeekOfMonth} from 'date-fns/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/fp/getWeekOfMonthWithOptions' {
  import {getWeekOfMonthWithOptions} from 'date-fns/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeeksInMonth' {
  import {getWeeksInMonth} from 'date-fns/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/fp/getWeeksInMonthWithOptions' {
  import {getWeeksInMonthWithOptions} from 'date-fns/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeekWithOptions' {
  import {getWeekWithOptions} from 'date-fns/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/esm/fp/getWeekYear' {
  import {getWeekYear} from 'date-fns/esm/fp'
  export default getWeekYear
}

declare module 'date-fns/esm/fp/getWeekYearWithOptions' {
  import {getWeekYearWithOptions} from 'date-fns/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getYear' {
  import {getYear} from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/getYearWithOptions' {
  import {getYearWithOptions} from 'date-fns/esm/fp'
  export default getYearWithOptions
}

declare module 'date-fns/esm/fp/isAfter' {
  import {isAfter} from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isAfterWithOptions' {
  import {isAfterWithOptions} from 'date-fns/esm/fp'
  export default isAfterWithOptions
}

declare module 'date-fns/esm/fp/isBefore' {
  import {isBefore} from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isBeforeWithOptions' {
  import {isBeforeWithOptions} from 'date-fns/esm/fp'
  export default isBeforeWithOptions
}

declare module 'date-fns/esm/fp/isDate' {
  import {isDate} from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isDateWithOptions' {
  import {isDateWithOptions} from 'date-fns/esm/fp'
  export default isDateWithOptions
}

declare module 'date-fns/esm/fp/isEqual' {
  import {isEqual} from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isEqualWithOptions' {
  import {isEqualWithOptions} from 'date-fns/esm/fp'
  export default isEqualWithOptions
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFirstDayOfMonthWithOptions' {
  import {isFirstDayOfMonthWithOptions} from 'date-fns/esm/fp'
  export default isFirstDayOfMonthWithOptions
}

declare module 'date-fns/esm/fp/isFriday' {
  import {isFriday} from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isFridayWithOptions' {
  import {isFridayWithOptions} from 'date-fns/esm/fp'
  export default isFridayWithOptions
}

declare module 'date-fns/esm/fp/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLastDayOfMonthWithOptions' {
  import {isLastDayOfMonthWithOptions} from 'date-fns/esm/fp'
  export default isLastDayOfMonthWithOptions
}

declare module 'date-fns/esm/fp/isLeapYear' {
  import {isLeapYear} from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isLeapYearWithOptions' {
  import {isLeapYearWithOptions} from 'date-fns/esm/fp'
  export default isLeapYearWithOptions
}

declare module 'date-fns/esm/fp/isMonday' {
  import {isMonday} from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isMondayWithOptions' {
  import {isMondayWithOptions} from 'date-fns/esm/fp'
  export default isMondayWithOptions
}

declare module 'date-fns/esm/fp/isSameDay' {
  import {isSameDay} from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameDayWithOptions' {
  import {isSameDayWithOptions} from 'date-fns/esm/fp'
  export default isSameDayWithOptions
}

declare module 'date-fns/esm/fp/isSameHour' {
  import {isSameHour} from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameHourWithOptions' {
  import {isSameHourWithOptions} from 'date-fns/esm/fp'
  export default isSameHourWithOptions
}

declare module 'date-fns/esm/fp/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOWeekWithOptions' {
  import {isSameISOWeekWithOptions} from 'date-fns/esm/fp'
  export default isSameISOWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameISOWeekYear' {
  import {isSameISOWeekYear} from 'date-fns/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/fp/isSameISOWeekYearWithOptions' {
  import {isSameISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default isSameISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/isSameMinute' {
  import {isSameMinute} from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMinuteWithOptions' {
  import {isSameMinuteWithOptions} from 'date-fns/esm/fp'
  export default isSameMinuteWithOptions
}

declare module 'date-fns/esm/fp/isSameMonth' {
  import {isSameMonth} from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameMonthWithOptions' {
  import {isSameMonthWithOptions} from 'date-fns/esm/fp'
  export default isSameMonthWithOptions
}

declare module 'date-fns/esm/fp/isSameQuarter' {
  import {isSameQuarter} from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameQuarterWithOptions' {
  import {isSameQuarterWithOptions} from 'date-fns/esm/fp'
  export default isSameQuarterWithOptions
}

declare module 'date-fns/esm/fp/isSameSecond' {
  import {isSameSecond} from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameSecondWithOptions' {
  import {isSameSecondWithOptions} from 'date-fns/esm/fp'
  export default isSameSecondWithOptions
}

declare module 'date-fns/esm/fp/isSameWeek' {
  import {isSameWeek} from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions' {
  import {isSameWeekWithOptions} from 'date-fns/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameYear' {
  import {isSameYear} from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSameYearWithOptions' {
  import {isSameYearWithOptions} from 'date-fns/esm/fp'
  export default isSameYearWithOptions
}

declare module 'date-fns/esm/fp/isSaturday' {
  import {isSaturday} from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSaturdayWithOptions' {
  import {isSaturdayWithOptions} from 'date-fns/esm/fp'
  export default isSaturdayWithOptions
}

declare module 'date-fns/esm/fp/isSunday' {
  import {isSunday} from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isSundayWithOptions' {
  import {isSundayWithOptions} from 'date-fns/esm/fp'
  export default isSundayWithOptions
}

declare module 'date-fns/esm/fp/isThursday' {
  import {isThursday} from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isThursdayWithOptions' {
  import {isThursdayWithOptions} from 'date-fns/esm/fp'
  export default isThursdayWithOptions
}

declare module 'date-fns/esm/fp/isTuesday' {
  import {isTuesday} from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isTuesdayWithOptions' {
  import {isTuesdayWithOptions} from 'date-fns/esm/fp'
  export default isTuesdayWithOptions
}

declare module 'date-fns/esm/fp/isValid' {
  import {isValid} from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isValidWithOptions' {
  import {isValidWithOptions} from 'date-fns/esm/fp'
  export default isValidWithOptions
}

declare module 'date-fns/esm/fp/isWednesday' {
  import {isWednesday} from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWednesdayWithOptions' {
  import {isWednesdayWithOptions} from 'date-fns/esm/fp'
  export default isWednesdayWithOptions
}

declare module 'date-fns/esm/fp/isWeekend' {
  import {isWeekend} from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWeekendWithOptions' {
  import {isWeekendWithOptions} from 'date-fns/esm/fp'
  export default isWeekendWithOptions
}

declare module 'date-fns/esm/fp/isWithinInterval' {
  import {isWithinInterval} from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/isWithinIntervalWithOptions' {
  import {isWithinIntervalWithOptions} from 'date-fns/esm/fp'
  export default isWithinIntervalWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekWithOptions' {
  import {lastDayOfISOWeekWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfISOWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYear' {
  import {lastDayOfISOWeekYear} from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYearWithOptions' {
  import {lastDayOfISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfMonthWithOptions' {
  import {lastDayOfMonthWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfMonthWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions' {
  import {lastDayOfQuarterWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions' {
  import {lastDayOfWeekWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/lastDayOfYearWithOptions' {
  import {lastDayOfYearWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfYearWithOptions
}

declare module 'date-fns/esm/fp/max' {
  import {max} from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/maxWithOptions' {
  import {maxWithOptions} from 'date-fns/esm/fp'
  export default maxWithOptions
}

declare module 'date-fns/esm/fp/min' {
  import {min} from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/minWithOptions' {
  import {minWithOptions} from 'date-fns/esm/fp'
  export default minWithOptions
}

declare module 'date-fns/esm/fp/parse' {
  import {parse} from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseWithOptions' {
  import {parseWithOptions} from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/setDate' {
  import {setDate} from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDateWithOptions' {
  import {setDateWithOptions} from 'date-fns/esm/fp'
  export default setDateWithOptions
}

declare module 'date-fns/esm/fp/setDay' {
  import {setDay} from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear' {
  import {setDayOfYear} from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setDayOfYearWithOptions' {
  import {setDayOfYearWithOptions} from 'date-fns/esm/fp'
  export default setDayOfYearWithOptions
}

declare module 'date-fns/esm/fp/setDayWithOptions' {
  import {setDayWithOptions} from 'date-fns/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns/esm/fp/setHours' {
  import {setHours} from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setHoursWithOptions' {
  import {setHoursWithOptions} from 'date-fns/esm/fp'
  export default setHoursWithOptions
}

declare module 'date-fns/esm/fp/setISODay' {
  import {setISODay} from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISODayWithOptions' {
  import {setISODayWithOptions} from 'date-fns/esm/fp'
  export default setISODayWithOptions
}

declare module 'date-fns/esm/fp/setISOWeek' {
  import {setISOWeek} from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOWeekWithOptions' {
  import {setISOWeekWithOptions} from 'date-fns/esm/fp'
  export default setISOWeekWithOptions
}

declare module 'date-fns/esm/fp/setISOWeekYear' {
  import {setISOWeekYear} from 'date-fns/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns/esm/fp/setISOWeekYearWithOptions' {
  import {setISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default setISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setMilliseconds' {
  import {setMilliseconds} from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMillisecondsWithOptions' {
  import {setMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default setMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/setMinutes' {
  import {setMinutes} from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMinutesWithOptions' {
  import {setMinutesWithOptions} from 'date-fns/esm/fp'
  export default setMinutesWithOptions
}

declare module 'date-fns/esm/fp/setMonth' {
  import {setMonth} from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setMonthWithOptions' {
  import {setMonthWithOptions} from 'date-fns/esm/fp'
  export default setMonthWithOptions
}

declare module 'date-fns/esm/fp/setQuarter' {
  import {setQuarter} from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setQuarterWithOptions' {
  import {setQuarterWithOptions} from 'date-fns/esm/fp'
  export default setQuarterWithOptions
}

declare module 'date-fns/esm/fp/setSeconds' {
  import {setSeconds} from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setSecondsWithOptions' {
  import {setSecondsWithOptions} from 'date-fns/esm/fp'
  export default setSecondsWithOptions
}

declare module 'date-fns/esm/fp/setWeek' {
  import {setWeek} from 'date-fns/esm/fp'
  export default setWeek
}

declare module 'date-fns/esm/fp/setWeekWithOptions' {
  import {setWeekWithOptions} from 'date-fns/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/esm/fp/setWeekYear' {
  import {setWeekYear} from 'date-fns/esm/fp'
  export default setWeekYear
}

declare module 'date-fns/esm/fp/setWeekYearWithOptions' {
  import {setWeekYearWithOptions} from 'date-fns/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setYear' {
  import {setYear} from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/setYearWithOptions' {
  import {setYearWithOptions} from 'date-fns/esm/fp'
  export default setYearWithOptions
}

declare module 'date-fns/esm/fp/startOfDay' {
  import {startOfDay} from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfDayWithOptions' {
  import {startOfDayWithOptions} from 'date-fns/esm/fp'
  export default startOfDayWithOptions
}

declare module 'date-fns/esm/fp/startOfHour' {
  import {startOfHour} from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfHourWithOptions' {
  import {startOfHourWithOptions} from 'date-fns/esm/fp'
  export default startOfHourWithOptions
}

declare module 'date-fns/esm/fp/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOWeekWithOptions' {
  import {startOfISOWeekWithOptions} from 'date-fns/esm/fp'
  export default startOfISOWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfISOWeekYear' {
  import {startOfISOWeekYear} from 'date-fns/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/fp/startOfISOWeekYearWithOptions' {
  import {startOfISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default startOfISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfMinute' {
  import {startOfMinute} from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMinuteWithOptions' {
  import {startOfMinuteWithOptions} from 'date-fns/esm/fp'
  export default startOfMinuteWithOptions
}

declare module 'date-fns/esm/fp/startOfMonth' {
  import {startOfMonth} from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfMonthWithOptions' {
  import {startOfMonthWithOptions} from 'date-fns/esm/fp'
  export default startOfMonthWithOptions
}

declare module 'date-fns/esm/fp/startOfQuarter' {
  import {startOfQuarter} from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfQuarterWithOptions' {
  import {startOfQuarterWithOptions} from 'date-fns/esm/fp'
  export default startOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/startOfSecond' {
  import {startOfSecond} from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfSecondWithOptions' {
  import {startOfSecondWithOptions} from 'date-fns/esm/fp'
  export default startOfSecondWithOptions
}

declare module 'date-fns/esm/fp/startOfWeek' {
  import {startOfWeek} from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions' {
  import {startOfWeekWithOptions} from 'date-fns/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfWeekYear' {
  import {startOfWeekYear} from 'date-fns/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns/esm/fp/startOfWeekYearWithOptions' {
  import {startOfWeekYearWithOptions} from 'date-fns/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfYear' {
  import {startOfYear} from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/startOfYearWithOptions' {
  import {startOfYearWithOptions} from 'date-fns/esm/fp'
  export default startOfYearWithOptions
}

declare module 'date-fns/esm/fp/subDays' {
  import {subDays} from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subDaysWithOptions' {
  import {subDaysWithOptions} from 'date-fns/esm/fp'
  export default subDaysWithOptions
}

declare module 'date-fns/esm/fp/subHours' {
  import {subHours} from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subHoursWithOptions' {
  import {subHoursWithOptions} from 'date-fns/esm/fp'
  export default subHoursWithOptions
}

declare module 'date-fns/esm/fp/subISOWeekYears' {
  import {subISOWeekYears} from 'date-fns/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns/esm/fp/subISOWeekYearsWithOptions' {
  import {subISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default subISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/subMilliseconds' {
  import {subMilliseconds} from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMillisecondsWithOptions' {
  import {subMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default subMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/subMinutes' {
  import {subMinutes} from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMinutesWithOptions' {
  import {subMinutesWithOptions} from 'date-fns/esm/fp'
  export default subMinutesWithOptions
}

declare module 'date-fns/esm/fp/subMonths' {
  import {subMonths} from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subMonthsWithOptions' {
  import {subMonthsWithOptions} from 'date-fns/esm/fp'
  export default subMonthsWithOptions
}

declare module 'date-fns/esm/fp/subQuarters' {
  import {subQuarters} from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subQuartersWithOptions' {
  import {subQuartersWithOptions} from 'date-fns/esm/fp'
  export default subQuartersWithOptions
}

declare module 'date-fns/esm/fp/subSeconds' {
  import {subSeconds} from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subSecondsWithOptions' {
  import {subSecondsWithOptions} from 'date-fns/esm/fp'
  export default subSecondsWithOptions
}

declare module 'date-fns/esm/fp/subWeeks' {
  import {subWeeks} from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subWeeksWithOptions' {
  import {subWeeksWithOptions} from 'date-fns/esm/fp'
  export default subWeeksWithOptions
}

declare module 'date-fns/esm/fp/subYears' {
  import {subYears} from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/subYearsWithOptions' {
  import {subYearsWithOptions} from 'date-fns/esm/fp'
  export default subYearsWithOptions
}

declare module 'date-fns/esm/fp/toDate' {
  import {toDate} from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/toDateWithOptions' {
  import {toDateWithOptions} from 'date-fns/esm/fp'
  export default toDateWithOptions
}

declare module 'date-fns/esm/fp/addDays/index' {
  import {addDays} from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addDaysWithOptions/index' {
  import {addDaysWithOptions} from 'date-fns/esm/fp'
  export default addDaysWithOptions
}

declare module 'date-fns/esm/fp/addHours/index' {
  import {addHours} from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addHoursWithOptions/index' {
  import {addHoursWithOptions} from 'date-fns/esm/fp'
  export default addHoursWithOptions
}

declare module 'date-fns/esm/fp/addISOWeekYears/index' {
  import {addISOWeekYears} from 'date-fns/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns/esm/fp/addISOWeekYearsWithOptions/index' {
  import {addISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default addISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMillisecondsWithOptions/index' {
  import {addMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default addMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/addMinutes/index' {
  import {addMinutes} from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMinutesWithOptions/index' {
  import {addMinutesWithOptions} from 'date-fns/esm/fp'
  export default addMinutesWithOptions
}

declare module 'date-fns/esm/fp/addMonths/index' {
  import {addMonths} from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addMonthsWithOptions/index' {
  import {addMonthsWithOptions} from 'date-fns/esm/fp'
  export default addMonthsWithOptions
}

declare module 'date-fns/esm/fp/addQuarters/index' {
  import {addQuarters} from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addQuartersWithOptions/index' {
  import {addQuartersWithOptions} from 'date-fns/esm/fp'
  export default addQuartersWithOptions
}

declare module 'date-fns/esm/fp/addSeconds/index' {
  import {addSeconds} from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addSecondsWithOptions/index' {
  import {addSecondsWithOptions} from 'date-fns/esm/fp'
  export default addSecondsWithOptions
}

declare module 'date-fns/esm/fp/addWeeks/index' {
  import {addWeeks} from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addWeeksWithOptions/index' {
  import {addWeeksWithOptions} from 'date-fns/esm/fp'
  export default addWeeksWithOptions
}

declare module 'date-fns/esm/fp/addYears/index' {
  import {addYears} from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/addYearsWithOptions/index' {
  import {addYearsWithOptions} from 'date-fns/esm/fp'
  export default addYearsWithOptions
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions/index' {
  import {areIntervalsOverlappingWithOptions} from 'date-fns/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/esm/fp/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestIndexToWithOptions/index' {
  import {closestIndexToWithOptions} from 'date-fns/esm/fp'
  export default closestIndexToWithOptions
}

declare module 'date-fns/esm/fp/closestTo/index' {
  import {closestTo} from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/closestToWithOptions/index' {
  import {closestToWithOptions} from 'date-fns/esm/fp'
  export default closestToWithOptions
}

declare module 'date-fns/esm/fp/compareAsc/index' {
  import {compareAsc} from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareAscWithOptions/index' {
  import {compareAscWithOptions} from 'date-fns/esm/fp'
  export default compareAscWithOptions
}

declare module 'date-fns/esm/fp/compareDesc/index' {
  import {compareDesc} from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/compareDescWithOptions/index' {
  import {compareDescWithOptions} from 'date-fns/esm/fp'
  export default compareDescWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarDaysWithOptions/index' {
  import {differenceInCalendarDaysWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarDaysWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeksWithOptions/index' {
  import {differenceInCalendarISOWeeksWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYears/index' {
  import {differenceInCalendarISOWeekYears} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYearsWithOptions/index' {
  import {differenceInCalendarISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarMonthsWithOptions/index' {
  import {differenceInCalendarMonthsWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarMonthsWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarQuartersWithOptions/index' {
  import {differenceInCalendarQuartersWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index' {
  import {differenceInCalendarWeeksWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInCalendarYearsWithOptions/index' {
  import {differenceInCalendarYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarYearsWithOptions
}

declare module 'date-fns/esm/fp/differenceInDays/index' {
  import {differenceInDays} from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInDaysWithOptions/index' {
  import {differenceInDaysWithOptions} from 'date-fns/esm/fp'
  export default differenceInDaysWithOptions
}

declare module 'date-fns/esm/fp/differenceInHours/index' {
  import {differenceInHours} from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInHoursWithOptions/index' {
  import {differenceInHoursWithOptions} from 'date-fns/esm/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns/esm/fp/differenceInISOWeekYears/index' {
  import {differenceInISOWeekYears} from 'date-fns/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInISOWeekYearsWithOptions/index' {
  import {differenceInISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMillisecondsWithOptions/index' {
  import {differenceInMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default differenceInMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions/index' {
  import {differenceInMinutesWithOptions} from 'date-fns/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/esm/fp/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInMonthsWithOptions/index' {
  import {differenceInMonthsWithOptions} from 'date-fns/esm/fp'
  export default differenceInMonthsWithOptions
}

declare module 'date-fns/esm/fp/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions/index' {
  import {differenceInQuartersWithOptions} from 'date-fns/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions/index' {
  import {differenceInSecondsWithOptions} from 'date-fns/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions/index' {
  import {differenceInWeeksWithOptions} from 'date-fns/esm/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInYears/index' {
  import {differenceInYears} from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/differenceInYearsWithOptions/index' {
  import {differenceInYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInYearsWithOptions
}

declare module 'date-fns/esm/fp/eachDayOfInterval/index' {
  import {eachDayOfInterval} from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions/index' {
  import {eachDayOfIntervalWithOptions} from 'date-fns/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachWeekOfInterval/index' {
  import {eachWeekOfInterval} from 'date-fns/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/fp/eachWeekOfIntervalWithOptions/index' {
  import {eachWeekOfIntervalWithOptions} from 'date-fns/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/endOfDay/index' {
  import {endOfDay} from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfDayWithOptions/index' {
  import {endOfDayWithOptions} from 'date-fns/esm/fp'
  export default endOfDayWithOptions
}

declare module 'date-fns/esm/fp/endOfHour/index' {
  import {endOfHour} from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfHourWithOptions/index' {
  import {endOfHourWithOptions} from 'date-fns/esm/fp'
  export default endOfHourWithOptions
}

declare module 'date-fns/esm/fp/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOWeekWithOptions/index' {
  import {endOfISOWeekWithOptions} from 'date-fns/esm/fp'
  export default endOfISOWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfISOWeekYear/index' {
  import {endOfISOWeekYear} from 'date-fns/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/fp/endOfISOWeekYearWithOptions/index' {
  import {endOfISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default endOfISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/endOfMinute/index' {
  import {endOfMinute} from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMinuteWithOptions/index' {
  import {endOfMinuteWithOptions} from 'date-fns/esm/fp'
  export default endOfMinuteWithOptions
}

declare module 'date-fns/esm/fp/endOfMonth/index' {
  import {endOfMonth} from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfMonthWithOptions/index' {
  import {endOfMonthWithOptions} from 'date-fns/esm/fp'
  export default endOfMonthWithOptions
}

declare module 'date-fns/esm/fp/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfQuarterWithOptions/index' {
  import {endOfQuarterWithOptions} from 'date-fns/esm/fp'
  export default endOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/endOfSecond/index' {
  import {endOfSecond} from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfSecondWithOptions/index' {
  import {endOfSecondWithOptions} from 'date-fns/esm/fp'
  export default endOfSecondWithOptions
}

declare module 'date-fns/esm/fp/endOfWeek/index' {
  import {endOfWeek} from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions/index' {
  import {endOfWeekWithOptions} from 'date-fns/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfYear/index' {
  import {endOfYear} from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/endOfYearWithOptions/index' {
  import {endOfYearWithOptions} from 'date-fns/esm/fp'
  export default endOfYearWithOptions
}

declare module 'date-fns/esm/fp/format/index' {
  import {format} from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance/index' {
  import {formatDistance} from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceStrict/index' {
  import {formatDistanceStrict} from 'date-fns/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/fp/formatDistanceStrictWithOptions/index' {
  import {formatDistanceStrictWithOptions} from 'date-fns/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions/index' {
  import {formatDistanceWithOptions} from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatRelative/index' {
  import {formatRelative} from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions/index' {
  import {formatRelativeWithOptions} from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatWithOptions/index' {
  import {formatWithOptions} from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/getDate/index' {
  import {getDate} from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDateWithOptions/index' {
  import {getDateWithOptions} from 'date-fns/esm/fp'
  export default getDateWithOptions
}

declare module 'date-fns/esm/fp/getDay/index' {
  import {getDay} from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDayOfYearWithOptions/index' {
  import {getDayOfYearWithOptions} from 'date-fns/esm/fp'
  export default getDayOfYearWithOptions
}

declare module 'date-fns/esm/fp/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInMonthWithOptions/index' {
  import {getDaysInMonthWithOptions} from 'date-fns/esm/fp'
  export default getDaysInMonthWithOptions
}

declare module 'date-fns/esm/fp/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getDaysInYearWithOptions/index' {
  import {getDaysInYearWithOptions} from 'date-fns/esm/fp'
  export default getDaysInYearWithOptions
}

declare module 'date-fns/esm/fp/getDayWithOptions/index' {
  import {getDayWithOptions} from 'date-fns/esm/fp'
  export default getDayWithOptions
}

declare module 'date-fns/esm/fp/getHours/index' {
  import {getHours} from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getHoursWithOptions/index' {
  import {getHoursWithOptions} from 'date-fns/esm/fp'
  export default getHoursWithOptions
}

declare module 'date-fns/esm/fp/getISODay/index' {
  import {getISODay} from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISODayWithOptions/index' {
  import {getISODayWithOptions} from 'date-fns/esm/fp'
  export default getISODayWithOptions
}

declare module 'date-fns/esm/fp/getISOWeek/index' {
  import {getISOWeek} from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOWeeksInYearWithOptions/index' {
  import {getISOWeeksInYearWithOptions} from 'date-fns/esm/fp'
  export default getISOWeeksInYearWithOptions
}

declare module 'date-fns/esm/fp/getISOWeekWithOptions/index' {
  import {getISOWeekWithOptions} from 'date-fns/esm/fp'
  export default getISOWeekWithOptions
}

declare module 'date-fns/esm/fp/getISOWeekYear/index' {
  import {getISOWeekYear} from 'date-fns/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns/esm/fp/getISOWeekYearWithOptions/index' {
  import {getISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default getISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMillisecondsWithOptions/index' {
  import {getMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default getMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/getMinutes/index' {
  import {getMinutes} from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMinutesWithOptions/index' {
  import {getMinutesWithOptions} from 'date-fns/esm/fp'
  export default getMinutesWithOptions
}

declare module 'date-fns/esm/fp/getMonth/index' {
  import {getMonth} from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getMonthWithOptions/index' {
  import {getMonthWithOptions} from 'date-fns/esm/fp'
  export default getMonthWithOptions
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervalsWithOptions/index' {
  import {getOverlappingDaysInIntervalsWithOptions} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervalsWithOptions
}

declare module 'date-fns/esm/fp/getQuarter/index' {
  import {getQuarter} from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getQuarterWithOptions/index' {
  import {getQuarterWithOptions} from 'date-fns/esm/fp'
  export default getQuarterWithOptions
}

declare module 'date-fns/esm/fp/getSeconds/index' {
  import {getSeconds} from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getSecondsWithOptions/index' {
  import {getSecondsWithOptions} from 'date-fns/esm/fp'
  export default getSecondsWithOptions
}

declare module 'date-fns/esm/fp/getTime/index' {
  import {getTime} from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getTimeWithOptions/index' {
  import {getTimeWithOptions} from 'date-fns/esm/fp'
  export default getTimeWithOptions
}

declare module 'date-fns/esm/fp/getWeek/index' {
  import {getWeek} from 'date-fns/esm/fp'
  export default getWeek
}

declare module 'date-fns/esm/fp/getWeekOfMonth/index' {
  import {getWeekOfMonth} from 'date-fns/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/fp/getWeekOfMonthWithOptions/index' {
  import {getWeekOfMonthWithOptions} from 'date-fns/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeeksInMonth/index' {
  import {getWeeksInMonth} from 'date-fns/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/fp/getWeeksInMonthWithOptions/index' {
  import {getWeeksInMonthWithOptions} from 'date-fns/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeekWithOptions/index' {
  import {getWeekWithOptions} from 'date-fns/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/esm/fp/getWeekYear/index' {
  import {getWeekYear} from 'date-fns/esm/fp'
  export default getWeekYear
}

declare module 'date-fns/esm/fp/getWeekYearWithOptions/index' {
  import {getWeekYearWithOptions} from 'date-fns/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getYear/index' {
  import {getYear} from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/getYearWithOptions/index' {
  import {getYearWithOptions} from 'date-fns/esm/fp'
  export default getYearWithOptions
}

declare module 'date-fns/esm/fp/isAfter/index' {
  import {isAfter} from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isAfterWithOptions/index' {
  import {isAfterWithOptions} from 'date-fns/esm/fp'
  export default isAfterWithOptions
}

declare module 'date-fns/esm/fp/isBefore/index' {
  import {isBefore} from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isBeforeWithOptions/index' {
  import {isBeforeWithOptions} from 'date-fns/esm/fp'
  export default isBeforeWithOptions
}

declare module 'date-fns/esm/fp/isDate/index' {
  import {isDate} from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isDateWithOptions/index' {
  import {isDateWithOptions} from 'date-fns/esm/fp'
  export default isDateWithOptions
}

declare module 'date-fns/esm/fp/isEqual/index' {
  import {isEqual} from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isEqualWithOptions/index' {
  import {isEqualWithOptions} from 'date-fns/esm/fp'
  export default isEqualWithOptions
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFirstDayOfMonthWithOptions/index' {
  import {isFirstDayOfMonthWithOptions} from 'date-fns/esm/fp'
  export default isFirstDayOfMonthWithOptions
}

declare module 'date-fns/esm/fp/isFriday/index' {
  import {isFriday} from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isFridayWithOptions/index' {
  import {isFridayWithOptions} from 'date-fns/esm/fp'
  export default isFridayWithOptions
}

declare module 'date-fns/esm/fp/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLastDayOfMonthWithOptions/index' {
  import {isLastDayOfMonthWithOptions} from 'date-fns/esm/fp'
  export default isLastDayOfMonthWithOptions
}

declare module 'date-fns/esm/fp/isLeapYear/index' {
  import {isLeapYear} from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isLeapYearWithOptions/index' {
  import {isLeapYearWithOptions} from 'date-fns/esm/fp'
  export default isLeapYearWithOptions
}

declare module 'date-fns/esm/fp/isMonday/index' {
  import {isMonday} from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isMondayWithOptions/index' {
  import {isMondayWithOptions} from 'date-fns/esm/fp'
  export default isMondayWithOptions
}

declare module 'date-fns/esm/fp/isSameDay/index' {
  import {isSameDay} from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameDayWithOptions/index' {
  import {isSameDayWithOptions} from 'date-fns/esm/fp'
  export default isSameDayWithOptions
}

declare module 'date-fns/esm/fp/isSameHour/index' {
  import {isSameHour} from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameHourWithOptions/index' {
  import {isSameHourWithOptions} from 'date-fns/esm/fp'
  export default isSameHourWithOptions
}

declare module 'date-fns/esm/fp/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOWeekWithOptions/index' {
  import {isSameISOWeekWithOptions} from 'date-fns/esm/fp'
  export default isSameISOWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameISOWeekYear/index' {
  import {isSameISOWeekYear} from 'date-fns/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/fp/isSameISOWeekYearWithOptions/index' {
  import {isSameISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default isSameISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/isSameMinute/index' {
  import {isSameMinute} from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMinuteWithOptions/index' {
  import {isSameMinuteWithOptions} from 'date-fns/esm/fp'
  export default isSameMinuteWithOptions
}

declare module 'date-fns/esm/fp/isSameMonth/index' {
  import {isSameMonth} from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameMonthWithOptions/index' {
  import {isSameMonthWithOptions} from 'date-fns/esm/fp'
  export default isSameMonthWithOptions
}

declare module 'date-fns/esm/fp/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameQuarterWithOptions/index' {
  import {isSameQuarterWithOptions} from 'date-fns/esm/fp'
  export default isSameQuarterWithOptions
}

declare module 'date-fns/esm/fp/isSameSecond/index' {
  import {isSameSecond} from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameSecondWithOptions/index' {
  import {isSameSecondWithOptions} from 'date-fns/esm/fp'
  export default isSameSecondWithOptions
}

declare module 'date-fns/esm/fp/isSameWeek/index' {
  import {isSameWeek} from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions/index' {
  import {isSameWeekWithOptions} from 'date-fns/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameYear/index' {
  import {isSameYear} from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSameYearWithOptions/index' {
  import {isSameYearWithOptions} from 'date-fns/esm/fp'
  export default isSameYearWithOptions
}

declare module 'date-fns/esm/fp/isSaturday/index' {
  import {isSaturday} from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSaturdayWithOptions/index' {
  import {isSaturdayWithOptions} from 'date-fns/esm/fp'
  export default isSaturdayWithOptions
}

declare module 'date-fns/esm/fp/isSunday/index' {
  import {isSunday} from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isSundayWithOptions/index' {
  import {isSundayWithOptions} from 'date-fns/esm/fp'
  export default isSundayWithOptions
}

declare module 'date-fns/esm/fp/isThursday/index' {
  import {isThursday} from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isThursdayWithOptions/index' {
  import {isThursdayWithOptions} from 'date-fns/esm/fp'
  export default isThursdayWithOptions
}

declare module 'date-fns/esm/fp/isTuesday/index' {
  import {isTuesday} from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isTuesdayWithOptions/index' {
  import {isTuesdayWithOptions} from 'date-fns/esm/fp'
  export default isTuesdayWithOptions
}

declare module 'date-fns/esm/fp/isValid/index' {
  import {isValid} from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isValidWithOptions/index' {
  import {isValidWithOptions} from 'date-fns/esm/fp'
  export default isValidWithOptions
}

declare module 'date-fns/esm/fp/isWednesday/index' {
  import {isWednesday} from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWednesdayWithOptions/index' {
  import {isWednesdayWithOptions} from 'date-fns/esm/fp'
  export default isWednesdayWithOptions
}

declare module 'date-fns/esm/fp/isWeekend/index' {
  import {isWeekend} from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWeekendWithOptions/index' {
  import {isWeekendWithOptions} from 'date-fns/esm/fp'
  export default isWeekendWithOptions
}

declare module 'date-fns/esm/fp/isWithinInterval/index' {
  import {isWithinInterval} from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/isWithinIntervalWithOptions/index' {
  import {isWithinIntervalWithOptions} from 'date-fns/esm/fp'
  export default isWithinIntervalWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekWithOptions/index' {
  import {lastDayOfISOWeekWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfISOWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYear/index' {
  import {lastDayOfISOWeekYear} from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYearWithOptions/index' {
  import {lastDayOfISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfMonthWithOptions/index' {
  import {lastDayOfMonthWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfMonthWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions/index' {
  import {lastDayOfQuarterWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions/index' {
  import {lastDayOfWeekWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/lastDayOfYearWithOptions/index' {
  import {lastDayOfYearWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfYearWithOptions
}

declare module 'date-fns/esm/fp/max/index' {
  import {max} from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/maxWithOptions/index' {
  import {maxWithOptions} from 'date-fns/esm/fp'
  export default maxWithOptions
}

declare module 'date-fns/esm/fp/min/index' {
  import {min} from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/minWithOptions/index' {
  import {minWithOptions} from 'date-fns/esm/fp'
  export default minWithOptions
}

declare module 'date-fns/esm/fp/parse/index' {
  import {parse} from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseWithOptions/index' {
  import {parseWithOptions} from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/setDate/index' {
  import {setDate} from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDateWithOptions/index' {
  import {setDateWithOptions} from 'date-fns/esm/fp'
  export default setDateWithOptions
}

declare module 'date-fns/esm/fp/setDay/index' {
  import {setDay} from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setDayOfYearWithOptions/index' {
  import {setDayOfYearWithOptions} from 'date-fns/esm/fp'
  export default setDayOfYearWithOptions
}

declare module 'date-fns/esm/fp/setDayWithOptions/index' {
  import {setDayWithOptions} from 'date-fns/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns/esm/fp/setHours/index' {
  import {setHours} from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setHoursWithOptions/index' {
  import {setHoursWithOptions} from 'date-fns/esm/fp'
  export default setHoursWithOptions
}

declare module 'date-fns/esm/fp/setISODay/index' {
  import {setISODay} from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISODayWithOptions/index' {
  import {setISODayWithOptions} from 'date-fns/esm/fp'
  export default setISODayWithOptions
}

declare module 'date-fns/esm/fp/setISOWeek/index' {
  import {setISOWeek} from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOWeekWithOptions/index' {
  import {setISOWeekWithOptions} from 'date-fns/esm/fp'
  export default setISOWeekWithOptions
}

declare module 'date-fns/esm/fp/setISOWeekYear/index' {
  import {setISOWeekYear} from 'date-fns/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns/esm/fp/setISOWeekYearWithOptions/index' {
  import {setISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default setISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMillisecondsWithOptions/index' {
  import {setMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default setMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/setMinutes/index' {
  import {setMinutes} from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMinutesWithOptions/index' {
  import {setMinutesWithOptions} from 'date-fns/esm/fp'
  export default setMinutesWithOptions
}

declare module 'date-fns/esm/fp/setMonth/index' {
  import {setMonth} from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setMonthWithOptions/index' {
  import {setMonthWithOptions} from 'date-fns/esm/fp'
  export default setMonthWithOptions
}

declare module 'date-fns/esm/fp/setQuarter/index' {
  import {setQuarter} from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setQuarterWithOptions/index' {
  import {setQuarterWithOptions} from 'date-fns/esm/fp'
  export default setQuarterWithOptions
}

declare module 'date-fns/esm/fp/setSeconds/index' {
  import {setSeconds} from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setSecondsWithOptions/index' {
  import {setSecondsWithOptions} from 'date-fns/esm/fp'
  export default setSecondsWithOptions
}

declare module 'date-fns/esm/fp/setWeek/index' {
  import {setWeek} from 'date-fns/esm/fp'
  export default setWeek
}

declare module 'date-fns/esm/fp/setWeekWithOptions/index' {
  import {setWeekWithOptions} from 'date-fns/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/esm/fp/setWeekYear/index' {
  import {setWeekYear} from 'date-fns/esm/fp'
  export default setWeekYear
}

declare module 'date-fns/esm/fp/setWeekYearWithOptions/index' {
  import {setWeekYearWithOptions} from 'date-fns/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setYear/index' {
  import {setYear} from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/setYearWithOptions/index' {
  import {setYearWithOptions} from 'date-fns/esm/fp'
  export default setYearWithOptions
}

declare module 'date-fns/esm/fp/startOfDay/index' {
  import {startOfDay} from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfDayWithOptions/index' {
  import {startOfDayWithOptions} from 'date-fns/esm/fp'
  export default startOfDayWithOptions
}

declare module 'date-fns/esm/fp/startOfHour/index' {
  import {startOfHour} from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfHourWithOptions/index' {
  import {startOfHourWithOptions} from 'date-fns/esm/fp'
  export default startOfHourWithOptions
}

declare module 'date-fns/esm/fp/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOWeekWithOptions/index' {
  import {startOfISOWeekWithOptions} from 'date-fns/esm/fp'
  export default startOfISOWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfISOWeekYear/index' {
  import {startOfISOWeekYear} from 'date-fns/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/fp/startOfISOWeekYearWithOptions/index' {
  import {startOfISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default startOfISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfMinute/index' {
  import {startOfMinute} from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMinuteWithOptions/index' {
  import {startOfMinuteWithOptions} from 'date-fns/esm/fp'
  export default startOfMinuteWithOptions
}

declare module 'date-fns/esm/fp/startOfMonth/index' {
  import {startOfMonth} from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfMonthWithOptions/index' {
  import {startOfMonthWithOptions} from 'date-fns/esm/fp'
  export default startOfMonthWithOptions
}

declare module 'date-fns/esm/fp/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfQuarterWithOptions/index' {
  import {startOfQuarterWithOptions} from 'date-fns/esm/fp'
  export default startOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/startOfSecond/index' {
  import {startOfSecond} from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfSecondWithOptions/index' {
  import {startOfSecondWithOptions} from 'date-fns/esm/fp'
  export default startOfSecondWithOptions
}

declare module 'date-fns/esm/fp/startOfWeek/index' {
  import {startOfWeek} from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions/index' {
  import {startOfWeekWithOptions} from 'date-fns/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfWeekYear/index' {
  import {startOfWeekYear} from 'date-fns/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns/esm/fp/startOfWeekYearWithOptions/index' {
  import {startOfWeekYearWithOptions} from 'date-fns/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfYear/index' {
  import {startOfYear} from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/startOfYearWithOptions/index' {
  import {startOfYearWithOptions} from 'date-fns/esm/fp'
  export default startOfYearWithOptions
}

declare module 'date-fns/esm/fp/subDays/index' {
  import {subDays} from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subDaysWithOptions/index' {
  import {subDaysWithOptions} from 'date-fns/esm/fp'
  export default subDaysWithOptions
}

declare module 'date-fns/esm/fp/subHours/index' {
  import {subHours} from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subHoursWithOptions/index' {
  import {subHoursWithOptions} from 'date-fns/esm/fp'
  export default subHoursWithOptions
}

declare module 'date-fns/esm/fp/subISOWeekYears/index' {
  import {subISOWeekYears} from 'date-fns/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns/esm/fp/subISOWeekYearsWithOptions/index' {
  import {subISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default subISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMillisecondsWithOptions/index' {
  import {subMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default subMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/subMinutes/index' {
  import {subMinutes} from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMinutesWithOptions/index' {
  import {subMinutesWithOptions} from 'date-fns/esm/fp'
  export default subMinutesWithOptions
}

declare module 'date-fns/esm/fp/subMonths/index' {
  import {subMonths} from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subMonthsWithOptions/index' {
  import {subMonthsWithOptions} from 'date-fns/esm/fp'
  export default subMonthsWithOptions
}

declare module 'date-fns/esm/fp/subQuarters/index' {
  import {subQuarters} from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subQuartersWithOptions/index' {
  import {subQuartersWithOptions} from 'date-fns/esm/fp'
  export default subQuartersWithOptions
}

declare module 'date-fns/esm/fp/subSeconds/index' {
  import {subSeconds} from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subSecondsWithOptions/index' {
  import {subSecondsWithOptions} from 'date-fns/esm/fp'
  export default subSecondsWithOptions
}

declare module 'date-fns/esm/fp/subWeeks/index' {
  import {subWeeks} from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subWeeksWithOptions/index' {
  import {subWeeksWithOptions} from 'date-fns/esm/fp'
  export default subWeeksWithOptions
}

declare module 'date-fns/esm/fp/subYears/index' {
  import {subYears} from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/subYearsWithOptions/index' {
  import {subYearsWithOptions} from 'date-fns/esm/fp'
  export default subYearsWithOptions
}

declare module 'date-fns/esm/fp/toDate/index' {
  import {toDate} from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/toDateWithOptions/index' {
  import {toDateWithOptions} from 'date-fns/esm/fp'
  export default toDateWithOptions
}

declare module 'date-fns/esm/fp/addDays/index.js' {
  import {addDays} from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addDaysWithOptions/index.js' {
  import {addDaysWithOptions} from 'date-fns/esm/fp'
  export default addDaysWithOptions
}

declare module 'date-fns/esm/fp/addHours/index.js' {
  import {addHours} from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addHoursWithOptions/index.js' {
  import {addHoursWithOptions} from 'date-fns/esm/fp'
  export default addHoursWithOptions
}

declare module 'date-fns/esm/fp/addISOWeekYears/index.js' {
  import {addISOWeekYears} from 'date-fns/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns/esm/fp/addISOWeekYearsWithOptions/index.js' {
  import {addISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default addISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMillisecondsWithOptions/index.js' {
  import {addMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default addMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/addMinutes/index.js' {
  import {addMinutes} from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMinutesWithOptions/index.js' {
  import {addMinutesWithOptions} from 'date-fns/esm/fp'
  export default addMinutesWithOptions
}

declare module 'date-fns/esm/fp/addMonths/index.js' {
  import {addMonths} from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addMonthsWithOptions/index.js' {
  import {addMonthsWithOptions} from 'date-fns/esm/fp'
  export default addMonthsWithOptions
}

declare module 'date-fns/esm/fp/addQuarters/index.js' {
  import {addQuarters} from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addQuartersWithOptions/index.js' {
  import {addQuartersWithOptions} from 'date-fns/esm/fp'
  export default addQuartersWithOptions
}

declare module 'date-fns/esm/fp/addSeconds/index.js' {
  import {addSeconds} from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addSecondsWithOptions/index.js' {
  import {addSecondsWithOptions} from 'date-fns/esm/fp'
  export default addSecondsWithOptions
}

declare module 'date-fns/esm/fp/addWeeks/index.js' {
  import {addWeeks} from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addWeeksWithOptions/index.js' {
  import {addWeeksWithOptions} from 'date-fns/esm/fp'
  export default addWeeksWithOptions
}

declare module 'date-fns/esm/fp/addYears/index.js' {
  import {addYears} from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/addYearsWithOptions/index.js' {
  import {addYearsWithOptions} from 'date-fns/esm/fp'
  export default addYearsWithOptions
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions/index.js' {
  import {areIntervalsOverlappingWithOptions} from 'date-fns/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/esm/fp/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestIndexToWithOptions/index.js' {
  import {closestIndexToWithOptions} from 'date-fns/esm/fp'
  export default closestIndexToWithOptions
}

declare module 'date-fns/esm/fp/closestTo/index.js' {
  import {closestTo} from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/closestToWithOptions/index.js' {
  import {closestToWithOptions} from 'date-fns/esm/fp'
  export default closestToWithOptions
}

declare module 'date-fns/esm/fp/compareAsc/index.js' {
  import {compareAsc} from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareAscWithOptions/index.js' {
  import {compareAscWithOptions} from 'date-fns/esm/fp'
  export default compareAscWithOptions
}

declare module 'date-fns/esm/fp/compareDesc/index.js' {
  import {compareDesc} from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/compareDescWithOptions/index.js' {
  import {compareDescWithOptions} from 'date-fns/esm/fp'
  export default compareDescWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarDaysWithOptions/index.js' {
  import {differenceInCalendarDaysWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarDaysWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeksWithOptions/index.js' {
  import {differenceInCalendarISOWeeksWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYears/index.js' {
  import {differenceInCalendarISOWeekYears} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYearsWithOptions/index.js' {
  import {differenceInCalendarISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarMonthsWithOptions/index.js' {
  import {differenceInCalendarMonthsWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarMonthsWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarQuartersWithOptions/index.js' {
  import {differenceInCalendarQuartersWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import {differenceInCalendarWeeksWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInCalendarYearsWithOptions/index.js' {
  import {differenceInCalendarYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInCalendarYearsWithOptions
}

declare module 'date-fns/esm/fp/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInDaysWithOptions/index.js' {
  import {differenceInDaysWithOptions} from 'date-fns/esm/fp'
  export default differenceInDaysWithOptions
}

declare module 'date-fns/esm/fp/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInHoursWithOptions/index.js' {
  import {differenceInHoursWithOptions} from 'date-fns/esm/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns/esm/fp/differenceInISOWeekYears/index.js' {
  import {differenceInISOWeekYears} from 'date-fns/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInISOWeekYearsWithOptions/index.js' {
  import {differenceInISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMillisecondsWithOptions/index.js' {
  import {differenceInMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default differenceInMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions/index.js' {
  import {differenceInMinutesWithOptions} from 'date-fns/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/esm/fp/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInMonthsWithOptions/index.js' {
  import {differenceInMonthsWithOptions} from 'date-fns/esm/fp'
  export default differenceInMonthsWithOptions
}

declare module 'date-fns/esm/fp/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions/index.js' {
  import {differenceInQuartersWithOptions} from 'date-fns/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions/index.js' {
  import {differenceInSecondsWithOptions} from 'date-fns/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions/index.js' {
  import {differenceInWeeksWithOptions} from 'date-fns/esm/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/differenceInYearsWithOptions/index.js' {
  import {differenceInYearsWithOptions} from 'date-fns/esm/fp'
  export default differenceInYearsWithOptions
}

declare module 'date-fns/esm/fp/eachDayOfInterval/index.js' {
  import {eachDayOfInterval} from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions/index.js' {
  import {eachDayOfIntervalWithOptions} from 'date-fns/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachWeekOfInterval/index.js' {
  import {eachWeekOfInterval} from 'date-fns/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/fp/eachWeekOfIntervalWithOptions/index.js' {
  import {eachWeekOfIntervalWithOptions} from 'date-fns/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/endOfDay/index.js' {
  import {endOfDay} from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfDayWithOptions/index.js' {
  import {endOfDayWithOptions} from 'date-fns/esm/fp'
  export default endOfDayWithOptions
}

declare module 'date-fns/esm/fp/endOfHour/index.js' {
  import {endOfHour} from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfHourWithOptions/index.js' {
  import {endOfHourWithOptions} from 'date-fns/esm/fp'
  export default endOfHourWithOptions
}

declare module 'date-fns/esm/fp/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOWeekWithOptions/index.js' {
  import {endOfISOWeekWithOptions} from 'date-fns/esm/fp'
  export default endOfISOWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfISOWeekYear/index.js' {
  import {endOfISOWeekYear} from 'date-fns/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/fp/endOfISOWeekYearWithOptions/index.js' {
  import {endOfISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default endOfISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMinuteWithOptions/index.js' {
  import {endOfMinuteWithOptions} from 'date-fns/esm/fp'
  export default endOfMinuteWithOptions
}

declare module 'date-fns/esm/fp/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfMonthWithOptions/index.js' {
  import {endOfMonthWithOptions} from 'date-fns/esm/fp'
  export default endOfMonthWithOptions
}

declare module 'date-fns/esm/fp/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfQuarterWithOptions/index.js' {
  import {endOfQuarterWithOptions} from 'date-fns/esm/fp'
  export default endOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfSecondWithOptions/index.js' {
  import {endOfSecondWithOptions} from 'date-fns/esm/fp'
  export default endOfSecondWithOptions
}

declare module 'date-fns/esm/fp/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions/index.js' {
  import {endOfWeekWithOptions} from 'date-fns/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfYear/index.js' {
  import {endOfYear} from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/endOfYearWithOptions/index.js' {
  import {endOfYearWithOptions} from 'date-fns/esm/fp'
  export default endOfYearWithOptions
}

declare module 'date-fns/esm/fp/format/index.js' {
  import {format} from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance/index.js' {
  import {formatDistance} from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceStrict/index.js' {
  import {formatDistanceStrict} from 'date-fns/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/fp/formatDistanceStrictWithOptions/index.js' {
  import {formatDistanceStrictWithOptions} from 'date-fns/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions/index.js' {
  import {formatDistanceWithOptions} from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatRelative/index.js' {
  import {formatRelative} from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions/index.js' {
  import {formatRelativeWithOptions} from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatWithOptions/index.js' {
  import {formatWithOptions} from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/getDate/index.js' {
  import {getDate} from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDateWithOptions/index.js' {
  import {getDateWithOptions} from 'date-fns/esm/fp'
  export default getDateWithOptions
}

declare module 'date-fns/esm/fp/getDay/index.js' {
  import {getDay} from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDayOfYearWithOptions/index.js' {
  import {getDayOfYearWithOptions} from 'date-fns/esm/fp'
  export default getDayOfYearWithOptions
}

declare module 'date-fns/esm/fp/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInMonthWithOptions/index.js' {
  import {getDaysInMonthWithOptions} from 'date-fns/esm/fp'
  export default getDaysInMonthWithOptions
}

declare module 'date-fns/esm/fp/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getDaysInYearWithOptions/index.js' {
  import {getDaysInYearWithOptions} from 'date-fns/esm/fp'
  export default getDaysInYearWithOptions
}

declare module 'date-fns/esm/fp/getDayWithOptions/index.js' {
  import {getDayWithOptions} from 'date-fns/esm/fp'
  export default getDayWithOptions
}

declare module 'date-fns/esm/fp/getHours/index.js' {
  import {getHours} from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getHoursWithOptions/index.js' {
  import {getHoursWithOptions} from 'date-fns/esm/fp'
  export default getHoursWithOptions
}

declare module 'date-fns/esm/fp/getISODay/index.js' {
  import {getISODay} from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISODayWithOptions/index.js' {
  import {getISODayWithOptions} from 'date-fns/esm/fp'
  export default getISODayWithOptions
}

declare module 'date-fns/esm/fp/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOWeeksInYearWithOptions/index.js' {
  import {getISOWeeksInYearWithOptions} from 'date-fns/esm/fp'
  export default getISOWeeksInYearWithOptions
}

declare module 'date-fns/esm/fp/getISOWeekWithOptions/index.js' {
  import {getISOWeekWithOptions} from 'date-fns/esm/fp'
  export default getISOWeekWithOptions
}

declare module 'date-fns/esm/fp/getISOWeekYear/index.js' {
  import {getISOWeekYear} from 'date-fns/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns/esm/fp/getISOWeekYearWithOptions/index.js' {
  import {getISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default getISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMillisecondsWithOptions/index.js' {
  import {getMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default getMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/getMinutes/index.js' {
  import {getMinutes} from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMinutesWithOptions/index.js' {
  import {getMinutesWithOptions} from 'date-fns/esm/fp'
  export default getMinutesWithOptions
}

declare module 'date-fns/esm/fp/getMonth/index.js' {
  import {getMonth} from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getMonthWithOptions/index.js' {
  import {getMonthWithOptions} from 'date-fns/esm/fp'
  export default getMonthWithOptions
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervalsWithOptions/index.js' {
  import {getOverlappingDaysInIntervalsWithOptions} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervalsWithOptions
}

declare module 'date-fns/esm/fp/getQuarter/index.js' {
  import {getQuarter} from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getQuarterWithOptions/index.js' {
  import {getQuarterWithOptions} from 'date-fns/esm/fp'
  export default getQuarterWithOptions
}

declare module 'date-fns/esm/fp/getSeconds/index.js' {
  import {getSeconds} from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getSecondsWithOptions/index.js' {
  import {getSecondsWithOptions} from 'date-fns/esm/fp'
  export default getSecondsWithOptions
}

declare module 'date-fns/esm/fp/getTime/index.js' {
  import {getTime} from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getTimeWithOptions/index.js' {
  import {getTimeWithOptions} from 'date-fns/esm/fp'
  export default getTimeWithOptions
}

declare module 'date-fns/esm/fp/getWeek/index.js' {
  import {getWeek} from 'date-fns/esm/fp'
  export default getWeek
}

declare module 'date-fns/esm/fp/getWeekOfMonth/index.js' {
  import {getWeekOfMonth} from 'date-fns/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/fp/getWeekOfMonthWithOptions/index.js' {
  import {getWeekOfMonthWithOptions} from 'date-fns/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeeksInMonth/index.js' {
  import {getWeeksInMonth} from 'date-fns/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/fp/getWeeksInMonthWithOptions/index.js' {
  import {getWeeksInMonthWithOptions} from 'date-fns/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeekWithOptions/index.js' {
  import {getWeekWithOptions} from 'date-fns/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/esm/fp/getWeekYear/index.js' {
  import {getWeekYear} from 'date-fns/esm/fp'
  export default getWeekYear
}

declare module 'date-fns/esm/fp/getWeekYearWithOptions/index.js' {
  import {getWeekYearWithOptions} from 'date-fns/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getYear/index.js' {
  import {getYear} from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/getYearWithOptions/index.js' {
  import {getYearWithOptions} from 'date-fns/esm/fp'
  export default getYearWithOptions
}

declare module 'date-fns/esm/fp/isAfter/index.js' {
  import {isAfter} from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isAfterWithOptions/index.js' {
  import {isAfterWithOptions} from 'date-fns/esm/fp'
  export default isAfterWithOptions
}

declare module 'date-fns/esm/fp/isBefore/index.js' {
  import {isBefore} from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isBeforeWithOptions/index.js' {
  import {isBeforeWithOptions} from 'date-fns/esm/fp'
  export default isBeforeWithOptions
}

declare module 'date-fns/esm/fp/isDate/index.js' {
  import {isDate} from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isDateWithOptions/index.js' {
  import {isDateWithOptions} from 'date-fns/esm/fp'
  export default isDateWithOptions
}

declare module 'date-fns/esm/fp/isEqual/index.js' {
  import {isEqual} from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isEqualWithOptions/index.js' {
  import {isEqualWithOptions} from 'date-fns/esm/fp'
  export default isEqualWithOptions
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFirstDayOfMonthWithOptions/index.js' {
  import {isFirstDayOfMonthWithOptions} from 'date-fns/esm/fp'
  export default isFirstDayOfMonthWithOptions
}

declare module 'date-fns/esm/fp/isFriday/index.js' {
  import {isFriday} from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isFridayWithOptions/index.js' {
  import {isFridayWithOptions} from 'date-fns/esm/fp'
  export default isFridayWithOptions
}

declare module 'date-fns/esm/fp/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLastDayOfMonthWithOptions/index.js' {
  import {isLastDayOfMonthWithOptions} from 'date-fns/esm/fp'
  export default isLastDayOfMonthWithOptions
}

declare module 'date-fns/esm/fp/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isLeapYearWithOptions/index.js' {
  import {isLeapYearWithOptions} from 'date-fns/esm/fp'
  export default isLeapYearWithOptions
}

declare module 'date-fns/esm/fp/isMonday/index.js' {
  import {isMonday} from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isMondayWithOptions/index.js' {
  import {isMondayWithOptions} from 'date-fns/esm/fp'
  export default isMondayWithOptions
}

declare module 'date-fns/esm/fp/isSameDay/index.js' {
  import {isSameDay} from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameDayWithOptions/index.js' {
  import {isSameDayWithOptions} from 'date-fns/esm/fp'
  export default isSameDayWithOptions
}

declare module 'date-fns/esm/fp/isSameHour/index.js' {
  import {isSameHour} from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameHourWithOptions/index.js' {
  import {isSameHourWithOptions} from 'date-fns/esm/fp'
  export default isSameHourWithOptions
}

declare module 'date-fns/esm/fp/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOWeekWithOptions/index.js' {
  import {isSameISOWeekWithOptions} from 'date-fns/esm/fp'
  export default isSameISOWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameISOWeekYear/index.js' {
  import {isSameISOWeekYear} from 'date-fns/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/fp/isSameISOWeekYearWithOptions/index.js' {
  import {isSameISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default isSameISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMinuteWithOptions/index.js' {
  import {isSameMinuteWithOptions} from 'date-fns/esm/fp'
  export default isSameMinuteWithOptions
}

declare module 'date-fns/esm/fp/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameMonthWithOptions/index.js' {
  import {isSameMonthWithOptions} from 'date-fns/esm/fp'
  export default isSameMonthWithOptions
}

declare module 'date-fns/esm/fp/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameQuarterWithOptions/index.js' {
  import {isSameQuarterWithOptions} from 'date-fns/esm/fp'
  export default isSameQuarterWithOptions
}

declare module 'date-fns/esm/fp/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameSecondWithOptions/index.js' {
  import {isSameSecondWithOptions} from 'date-fns/esm/fp'
  export default isSameSecondWithOptions
}

declare module 'date-fns/esm/fp/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions/index.js' {
  import {isSameWeekWithOptions} from 'date-fns/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameYear/index.js' {
  import {isSameYear} from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSameYearWithOptions/index.js' {
  import {isSameYearWithOptions} from 'date-fns/esm/fp'
  export default isSameYearWithOptions
}

declare module 'date-fns/esm/fp/isSaturday/index.js' {
  import {isSaturday} from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSaturdayWithOptions/index.js' {
  import {isSaturdayWithOptions} from 'date-fns/esm/fp'
  export default isSaturdayWithOptions
}

declare module 'date-fns/esm/fp/isSunday/index.js' {
  import {isSunday} from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isSundayWithOptions/index.js' {
  import {isSundayWithOptions} from 'date-fns/esm/fp'
  export default isSundayWithOptions
}

declare module 'date-fns/esm/fp/isThursday/index.js' {
  import {isThursday} from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isThursdayWithOptions/index.js' {
  import {isThursdayWithOptions} from 'date-fns/esm/fp'
  export default isThursdayWithOptions
}

declare module 'date-fns/esm/fp/isTuesday/index.js' {
  import {isTuesday} from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isTuesdayWithOptions/index.js' {
  import {isTuesdayWithOptions} from 'date-fns/esm/fp'
  export default isTuesdayWithOptions
}

declare module 'date-fns/esm/fp/isValid/index.js' {
  import {isValid} from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isValidWithOptions/index.js' {
  import {isValidWithOptions} from 'date-fns/esm/fp'
  export default isValidWithOptions
}

declare module 'date-fns/esm/fp/isWednesday/index.js' {
  import {isWednesday} from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWednesdayWithOptions/index.js' {
  import {isWednesdayWithOptions} from 'date-fns/esm/fp'
  export default isWednesdayWithOptions
}

declare module 'date-fns/esm/fp/isWeekend/index.js' {
  import {isWeekend} from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWeekendWithOptions/index.js' {
  import {isWeekendWithOptions} from 'date-fns/esm/fp'
  export default isWeekendWithOptions
}

declare module 'date-fns/esm/fp/isWithinInterval/index.js' {
  import {isWithinInterval} from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/isWithinIntervalWithOptions/index.js' {
  import {isWithinIntervalWithOptions} from 'date-fns/esm/fp'
  export default isWithinIntervalWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekWithOptions/index.js' {
  import {lastDayOfISOWeekWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfISOWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYear/index.js' {
  import {lastDayOfISOWeekYear} from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYearWithOptions/index.js' {
  import {lastDayOfISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfMonthWithOptions/index.js' {
  import {lastDayOfMonthWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfMonthWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions/index.js' {
  import {lastDayOfQuarterWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions/index.js' {
  import {lastDayOfWeekWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/lastDayOfYearWithOptions/index.js' {
  import {lastDayOfYearWithOptions} from 'date-fns/esm/fp'
  export default lastDayOfYearWithOptions
}

declare module 'date-fns/esm/fp/max/index.js' {
  import {max} from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/maxWithOptions/index.js' {
  import {maxWithOptions} from 'date-fns/esm/fp'
  export default maxWithOptions
}

declare module 'date-fns/esm/fp/min/index.js' {
  import {min} from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/minWithOptions/index.js' {
  import {minWithOptions} from 'date-fns/esm/fp'
  export default minWithOptions
}

declare module 'date-fns/esm/fp/parse/index.js' {
  import {parse} from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseWithOptions/index.js' {
  import {parseWithOptions} from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/setDate/index.js' {
  import {setDate} from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDateWithOptions/index.js' {
  import {setDateWithOptions} from 'date-fns/esm/fp'
  export default setDateWithOptions
}

declare module 'date-fns/esm/fp/setDay/index.js' {
  import {setDay} from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setDayOfYearWithOptions/index.js' {
  import {setDayOfYearWithOptions} from 'date-fns/esm/fp'
  export default setDayOfYearWithOptions
}

declare module 'date-fns/esm/fp/setDayWithOptions/index.js' {
  import {setDayWithOptions} from 'date-fns/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns/esm/fp/setHours/index.js' {
  import {setHours} from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setHoursWithOptions/index.js' {
  import {setHoursWithOptions} from 'date-fns/esm/fp'
  export default setHoursWithOptions
}

declare module 'date-fns/esm/fp/setISODay/index.js' {
  import {setISODay} from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISODayWithOptions/index.js' {
  import {setISODayWithOptions} from 'date-fns/esm/fp'
  export default setISODayWithOptions
}

declare module 'date-fns/esm/fp/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOWeekWithOptions/index.js' {
  import {setISOWeekWithOptions} from 'date-fns/esm/fp'
  export default setISOWeekWithOptions
}

declare module 'date-fns/esm/fp/setISOWeekYear/index.js' {
  import {setISOWeekYear} from 'date-fns/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns/esm/fp/setISOWeekYearWithOptions/index.js' {
  import {setISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default setISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMillisecondsWithOptions/index.js' {
  import {setMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default setMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/setMinutes/index.js' {
  import {setMinutes} from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMinutesWithOptions/index.js' {
  import {setMinutesWithOptions} from 'date-fns/esm/fp'
  export default setMinutesWithOptions
}

declare module 'date-fns/esm/fp/setMonth/index.js' {
  import {setMonth} from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setMonthWithOptions/index.js' {
  import {setMonthWithOptions} from 'date-fns/esm/fp'
  export default setMonthWithOptions
}

declare module 'date-fns/esm/fp/setQuarter/index.js' {
  import {setQuarter} from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setQuarterWithOptions/index.js' {
  import {setQuarterWithOptions} from 'date-fns/esm/fp'
  export default setQuarterWithOptions
}

declare module 'date-fns/esm/fp/setSeconds/index.js' {
  import {setSeconds} from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setSecondsWithOptions/index.js' {
  import {setSecondsWithOptions} from 'date-fns/esm/fp'
  export default setSecondsWithOptions
}

declare module 'date-fns/esm/fp/setWeek/index.js' {
  import {setWeek} from 'date-fns/esm/fp'
  export default setWeek
}

declare module 'date-fns/esm/fp/setWeekWithOptions/index.js' {
  import {setWeekWithOptions} from 'date-fns/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/esm/fp/setWeekYear/index.js' {
  import {setWeekYear} from 'date-fns/esm/fp'
  export default setWeekYear
}

declare module 'date-fns/esm/fp/setWeekYearWithOptions/index.js' {
  import {setWeekYearWithOptions} from 'date-fns/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setYear/index.js' {
  import {setYear} from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/setYearWithOptions/index.js' {
  import {setYearWithOptions} from 'date-fns/esm/fp'
  export default setYearWithOptions
}

declare module 'date-fns/esm/fp/startOfDay/index.js' {
  import {startOfDay} from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfDayWithOptions/index.js' {
  import {startOfDayWithOptions} from 'date-fns/esm/fp'
  export default startOfDayWithOptions
}

declare module 'date-fns/esm/fp/startOfHour/index.js' {
  import {startOfHour} from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfHourWithOptions/index.js' {
  import {startOfHourWithOptions} from 'date-fns/esm/fp'
  export default startOfHourWithOptions
}

declare module 'date-fns/esm/fp/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOWeekWithOptions/index.js' {
  import {startOfISOWeekWithOptions} from 'date-fns/esm/fp'
  export default startOfISOWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfISOWeekYear/index.js' {
  import {startOfISOWeekYear} from 'date-fns/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/fp/startOfISOWeekYearWithOptions/index.js' {
  import {startOfISOWeekYearWithOptions} from 'date-fns/esm/fp'
  export default startOfISOWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMinuteWithOptions/index.js' {
  import {startOfMinuteWithOptions} from 'date-fns/esm/fp'
  export default startOfMinuteWithOptions
}

declare module 'date-fns/esm/fp/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfMonthWithOptions/index.js' {
  import {startOfMonthWithOptions} from 'date-fns/esm/fp'
  export default startOfMonthWithOptions
}

declare module 'date-fns/esm/fp/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfQuarterWithOptions/index.js' {
  import {startOfQuarterWithOptions} from 'date-fns/esm/fp'
  export default startOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfSecondWithOptions/index.js' {
  import {startOfSecondWithOptions} from 'date-fns/esm/fp'
  export default startOfSecondWithOptions
}

declare module 'date-fns/esm/fp/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions/index.js' {
  import {startOfWeekWithOptions} from 'date-fns/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfWeekYear/index.js' {
  import {startOfWeekYear} from 'date-fns/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns/esm/fp/startOfWeekYearWithOptions/index.js' {
  import {startOfWeekYearWithOptions} from 'date-fns/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfYear/index.js' {
  import {startOfYear} from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/startOfYearWithOptions/index.js' {
  import {startOfYearWithOptions} from 'date-fns/esm/fp'
  export default startOfYearWithOptions
}

declare module 'date-fns/esm/fp/subDays/index.js' {
  import {subDays} from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subDaysWithOptions/index.js' {
  import {subDaysWithOptions} from 'date-fns/esm/fp'
  export default subDaysWithOptions
}

declare module 'date-fns/esm/fp/subHours/index.js' {
  import {subHours} from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subHoursWithOptions/index.js' {
  import {subHoursWithOptions} from 'date-fns/esm/fp'
  export default subHoursWithOptions
}

declare module 'date-fns/esm/fp/subISOWeekYears/index.js' {
  import {subISOWeekYears} from 'date-fns/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns/esm/fp/subISOWeekYearsWithOptions/index.js' {
  import {subISOWeekYearsWithOptions} from 'date-fns/esm/fp'
  export default subISOWeekYearsWithOptions
}

declare module 'date-fns/esm/fp/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMillisecondsWithOptions/index.js' {
  import {subMillisecondsWithOptions} from 'date-fns/esm/fp'
  export default subMillisecondsWithOptions
}

declare module 'date-fns/esm/fp/subMinutes/index.js' {
  import {subMinutes} from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMinutesWithOptions/index.js' {
  import {subMinutesWithOptions} from 'date-fns/esm/fp'
  export default subMinutesWithOptions
}

declare module 'date-fns/esm/fp/subMonths/index.js' {
  import {subMonths} from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subMonthsWithOptions/index.js' {
  import {subMonthsWithOptions} from 'date-fns/esm/fp'
  export default subMonthsWithOptions
}

declare module 'date-fns/esm/fp/subQuarters/index.js' {
  import {subQuarters} from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subQuartersWithOptions/index.js' {
  import {subQuartersWithOptions} from 'date-fns/esm/fp'
  export default subQuartersWithOptions
}

declare module 'date-fns/esm/fp/subSeconds/index.js' {
  import {subSeconds} from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subSecondsWithOptions/index.js' {
  import {subSecondsWithOptions} from 'date-fns/esm/fp'
  export default subSecondsWithOptions
}

declare module 'date-fns/esm/fp/subWeeks/index.js' {
  import {subWeeks} from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subWeeksWithOptions/index.js' {
  import {subWeeksWithOptions} from 'date-fns/esm/fp'
  export default subWeeksWithOptions
}

declare module 'date-fns/esm/fp/subYears/index.js' {
  import {subYears} from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/subYearsWithOptions/index.js' {
  import {subYearsWithOptions} from 'date-fns/esm/fp'
  export default subYearsWithOptions
}

declare module 'date-fns/esm/fp/toDate/index.js' {
  import {toDate} from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/toDateWithOptions/index.js' {
  import {toDateWithOptions} from 'date-fns/esm/fp'
  export default toDateWithOptions
}

// Regular Locales

declare module 'date-fns/locale' {
  const af: Locale
  namespace af {}

  const ar: Locale
  namespace ar {}

  const arDZ: Locale
  namespace arDZ {}

  const bg: Locale
  namespace bg {}

  const ca: Locale
  namespace ca {}

  const cs: Locale
  namespace cs {}

  const da: Locale
  namespace da {}

  const de: Locale
  namespace de {}

  const el: Locale
  namespace el {}

  const enCA: Locale
  namespace enCA {}

  const enGB: Locale
  namespace enGB {}

  const enUS: Locale
  namespace enUS {}

  const eo: Locale
  namespace eo {}

  const es: Locale
  namespace es {}

  const et: Locale
  namespace et {}

  const fi: Locale
  namespace fi {}

  const fil: Locale
  namespace fil {}

  const fr: Locale
  namespace fr {}

  const frCH: Locale
  namespace frCH {}

  const he: Locale
  namespace he {}

  const hr: Locale
  namespace hr {}

  const id: Locale
  namespace id {}

  const is: Locale
  namespace is {}

  const it: Locale
  namespace it {}

  const ja: Locale
  namespace ja {}

  const ka: Locale
  namespace ka {}

  const ko: Locale
  namespace ko {}

  const mk: Locale
  namespace mk {}

  const ms: Locale
  namespace ms {}

  const nb: Locale
  namespace nb {}

  const nl: Locale
  namespace nl {}

  const nlBE: Locale
  namespace nlBE {}

  const pl: Locale
  namespace pl {}

  const pt: Locale
  namespace pt {}

  const ptBR: Locale
  namespace ptBR {}

  const ro: Locale
  namespace ro {}

  const ru: Locale
  namespace ru {}

  const sk: Locale
  namespace sk {}

  const sr: Locale
  namespace sr {}

  const sv: Locale
  namespace sv {}

  const th: Locale
  namespace th {}

  const tr: Locale
  namespace tr {}

  const uk: Locale
  namespace uk {}

  const vi: Locale
  namespace vi {}

  const zhCN: Locale
  namespace zhCN {}

  const zhTW: Locale
  namespace zhTW {}
}

declare module 'date-fns/locale/af' {
  import {af} from 'date-fns/locale'
  export = af
}

declare module 'date-fns/locale/ar' {
  import {ar} from 'date-fns/locale'
  export = ar
}

declare module 'date-fns/locale/ar-DZ' {
  import {arDZ} from 'date-fns/locale'
  export = arDZ
}

declare module 'date-fns/locale/bg' {
  import {bg} from 'date-fns/locale'
  export = bg
}

declare module 'date-fns/locale/ca' {
  import {ca} from 'date-fns/locale'
  export = ca
}

declare module 'date-fns/locale/cs' {
  import {cs} from 'date-fns/locale'
  export = cs
}

declare module 'date-fns/locale/da' {
  import {da} from 'date-fns/locale'
  export = da
}

declare module 'date-fns/locale/de' {
  import {de} from 'date-fns/locale'
  export = de
}

declare module 'date-fns/locale/el' {
  import {el} from 'date-fns/locale'
  export = el
}

declare module 'date-fns/locale/en-CA' {
  import {enCA} from 'date-fns/locale'
  export = enCA
}

declare module 'date-fns/locale/en-GB' {
  import {enGB} from 'date-fns/locale'
  export = enGB
}

declare module 'date-fns/locale/en-US' {
  import {enUS} from 'date-fns/locale'
  export = enUS
}

declare module 'date-fns/locale/eo' {
  import {eo} from 'date-fns/locale'
  export = eo
}

declare module 'date-fns/locale/es' {
  import {es} from 'date-fns/locale'
  export = es
}

declare module 'date-fns/locale/et' {
  import {et} from 'date-fns/locale'
  export = et
}

declare module 'date-fns/locale/fi' {
  import {fi} from 'date-fns/locale'
  export = fi
}

declare module 'date-fns/locale/fil' {
  import {fil} from 'date-fns/locale'
  export = fil
}

declare module 'date-fns/locale/fr' {
  import {fr} from 'date-fns/locale'
  export = fr
}

declare module 'date-fns/locale/fr-CH' {
  import {frCH} from 'date-fns/locale'
  export = frCH
}

declare module 'date-fns/locale/he' {
  import {he} from 'date-fns/locale'
  export = he
}

declare module 'date-fns/locale/hr' {
  import {hr} from 'date-fns/locale'
  export = hr
}

declare module 'date-fns/locale/id' {
  import {id} from 'date-fns/locale'
  export = id
}

declare module 'date-fns/locale/is' {
  import {is} from 'date-fns/locale'
  export = is
}

declare module 'date-fns/locale/it' {
  import {it} from 'date-fns/locale'
  export = it
}

declare module 'date-fns/locale/ja' {
  import {ja} from 'date-fns/locale'
  export = ja
}

declare module 'date-fns/locale/ka' {
  import {ka} from 'date-fns/locale'
  export = ka
}

declare module 'date-fns/locale/ko' {
  import {ko} from 'date-fns/locale'
  export = ko
}

declare module 'date-fns/locale/mk' {
  import {mk} from 'date-fns/locale'
  export = mk
}

declare module 'date-fns/locale/ms' {
  import {ms} from 'date-fns/locale'
  export = ms
}

declare module 'date-fns/locale/nb' {
  import {nb} from 'date-fns/locale'
  export = nb
}

declare module 'date-fns/locale/nl' {
  import {nl} from 'date-fns/locale'
  export = nl
}

declare module 'date-fns/locale/nl-BE' {
  import {nlBE} from 'date-fns/locale'
  export = nlBE
}

declare module 'date-fns/locale/pl' {
  import {pl} from 'date-fns/locale'
  export = pl
}

declare module 'date-fns/locale/pt' {
  import {pt} from 'date-fns/locale'
  export = pt
}

declare module 'date-fns/locale/pt-BR' {
  import {ptBR} from 'date-fns/locale'
  export = ptBR
}

declare module 'date-fns/locale/ro' {
  import {ro} from 'date-fns/locale'
  export = ro
}

declare module 'date-fns/locale/ru' {
  import {ru} from 'date-fns/locale'
  export = ru
}

declare module 'date-fns/locale/sk' {
  import {sk} from 'date-fns/locale'
  export = sk
}

declare module 'date-fns/locale/sr' {
  import {sr} from 'date-fns/locale'
  export = sr
}

declare module 'date-fns/locale/sv' {
  import {sv} from 'date-fns/locale'
  export = sv
}

declare module 'date-fns/locale/th' {
  import {th} from 'date-fns/locale'
  export = th
}

declare module 'date-fns/locale/tr' {
  import {tr} from 'date-fns/locale'
  export = tr
}

declare module 'date-fns/locale/uk' {
  import {uk} from 'date-fns/locale'
  export = uk
}

declare module 'date-fns/locale/vi' {
  import {vi} from 'date-fns/locale'
  export = vi
}

declare module 'date-fns/locale/zh-CN' {
  import {zhCN} from 'date-fns/locale'
  export = zhCN
}

declare module 'date-fns/locale/zh-TW' {
  import {zhTW} from 'date-fns/locale'
  export = zhTW
}

declare module 'date-fns/locale/af/index' {
  import {af} from 'date-fns/locale'
  export = af
}

declare module 'date-fns/locale/ar/index' {
  import {ar} from 'date-fns/locale'
  export = ar
}

declare module 'date-fns/locale/ar-DZ/index' {
  import {arDZ} from 'date-fns/locale'
  export = arDZ
}

declare module 'date-fns/locale/bg/index' {
  import {bg} from 'date-fns/locale'
  export = bg
}

declare module 'date-fns/locale/ca/index' {
  import {ca} from 'date-fns/locale'
  export = ca
}

declare module 'date-fns/locale/cs/index' {
  import {cs} from 'date-fns/locale'
  export = cs
}

declare module 'date-fns/locale/da/index' {
  import {da} from 'date-fns/locale'
  export = da
}

declare module 'date-fns/locale/de/index' {
  import {de} from 'date-fns/locale'
  export = de
}

declare module 'date-fns/locale/el/index' {
  import {el} from 'date-fns/locale'
  export = el
}

declare module 'date-fns/locale/en-CA/index' {
  import {enCA} from 'date-fns/locale'
  export = enCA
}

declare module 'date-fns/locale/en-GB/index' {
  import {enGB} from 'date-fns/locale'
  export = enGB
}

declare module 'date-fns/locale/en-US/index' {
  import {enUS} from 'date-fns/locale'
  export = enUS
}

declare module 'date-fns/locale/eo/index' {
  import {eo} from 'date-fns/locale'
  export = eo
}

declare module 'date-fns/locale/es/index' {
  import {es} from 'date-fns/locale'
  export = es
}

declare module 'date-fns/locale/et/index' {
  import {et} from 'date-fns/locale'
  export = et
}

declare module 'date-fns/locale/fi/index' {
  import {fi} from 'date-fns/locale'
  export = fi
}

declare module 'date-fns/locale/fil/index' {
  import {fil} from 'date-fns/locale'
  export = fil
}

declare module 'date-fns/locale/fr/index' {
  import {fr} from 'date-fns/locale'
  export = fr
}

declare module 'date-fns/locale/fr-CH/index' {
  import {frCH} from 'date-fns/locale'
  export = frCH
}

declare module 'date-fns/locale/he/index' {
  import {he} from 'date-fns/locale'
  export = he
}

declare module 'date-fns/locale/hr/index' {
  import {hr} from 'date-fns/locale'
  export = hr
}

declare module 'date-fns/locale/id/index' {
  import {id} from 'date-fns/locale'
  export = id
}

declare module 'date-fns/locale/is/index' {
  import {is} from 'date-fns/locale'
  export = is
}

declare module 'date-fns/locale/it/index' {
  import {it} from 'date-fns/locale'
  export = it
}

declare module 'date-fns/locale/ja/index' {
  import {ja} from 'date-fns/locale'
  export = ja
}

declare module 'date-fns/locale/ka/index' {
  import {ka} from 'date-fns/locale'
  export = ka
}

declare module 'date-fns/locale/ko/index' {
  import {ko} from 'date-fns/locale'
  export = ko
}

declare module 'date-fns/locale/mk/index' {
  import {mk} from 'date-fns/locale'
  export = mk
}

declare module 'date-fns/locale/ms/index' {
  import {ms} from 'date-fns/locale'
  export = ms
}

declare module 'date-fns/locale/nb/index' {
  import {nb} from 'date-fns/locale'
  export = nb
}

declare module 'date-fns/locale/nl/index' {
  import {nl} from 'date-fns/locale'
  export = nl
}

declare module 'date-fns/locale/nl-BE/index' {
  import {nlBE} from 'date-fns/locale'
  export = nlBE
}

declare module 'date-fns/locale/pl/index' {
  import {pl} from 'date-fns/locale'
  export = pl
}

declare module 'date-fns/locale/pt/index' {
  import {pt} from 'date-fns/locale'
  export = pt
}

declare module 'date-fns/locale/pt-BR/index' {
  import {ptBR} from 'date-fns/locale'
  export = ptBR
}

declare module 'date-fns/locale/ro/index' {
  import {ro} from 'date-fns/locale'
  export = ro
}

declare module 'date-fns/locale/ru/index' {
  import {ru} from 'date-fns/locale'
  export = ru
}

declare module 'date-fns/locale/sk/index' {
  import {sk} from 'date-fns/locale'
  export = sk
}

declare module 'date-fns/locale/sr/index' {
  import {sr} from 'date-fns/locale'
  export = sr
}

declare module 'date-fns/locale/sv/index' {
  import {sv} from 'date-fns/locale'
  export = sv
}

declare module 'date-fns/locale/th/index' {
  import {th} from 'date-fns/locale'
  export = th
}

declare module 'date-fns/locale/tr/index' {
  import {tr} from 'date-fns/locale'
  export = tr
}

declare module 'date-fns/locale/uk/index' {
  import {uk} from 'date-fns/locale'
  export = uk
}

declare module 'date-fns/locale/vi/index' {
  import {vi} from 'date-fns/locale'
  export = vi
}

declare module 'date-fns/locale/zh-CN/index' {
  import {zhCN} from 'date-fns/locale'
  export = zhCN
}

declare module 'date-fns/locale/zh-TW/index' {
  import {zhTW} from 'date-fns/locale'
  export = zhTW
}

declare module 'date-fns/locale/af/index.js' {
  import {af} from 'date-fns/locale'
  export = af
}

declare module 'date-fns/locale/ar/index.js' {
  import {ar} from 'date-fns/locale'
  export = ar
}

declare module 'date-fns/locale/ar-DZ/index.js' {
  import {arDZ} from 'date-fns/locale'
  export = arDZ
}

declare module 'date-fns/locale/bg/index.js' {
  import {bg} from 'date-fns/locale'
  export = bg
}

declare module 'date-fns/locale/ca/index.js' {
  import {ca} from 'date-fns/locale'
  export = ca
}

declare module 'date-fns/locale/cs/index.js' {
  import {cs} from 'date-fns/locale'
  export = cs
}

declare module 'date-fns/locale/da/index.js' {
  import {da} from 'date-fns/locale'
  export = da
}

declare module 'date-fns/locale/de/index.js' {
  import {de} from 'date-fns/locale'
  export = de
}

declare module 'date-fns/locale/el/index.js' {
  import {el} from 'date-fns/locale'
  export = el
}

declare module 'date-fns/locale/en-CA/index.js' {
  import {enCA} from 'date-fns/locale'
  export = enCA
}

declare module 'date-fns/locale/en-GB/index.js' {
  import {enGB} from 'date-fns/locale'
  export = enGB
}

declare module 'date-fns/locale/en-US/index.js' {
  import {enUS} from 'date-fns/locale'
  export = enUS
}

declare module 'date-fns/locale/eo/index.js' {
  import {eo} from 'date-fns/locale'
  export = eo
}

declare module 'date-fns/locale/es/index.js' {
  import {es} from 'date-fns/locale'
  export = es
}

declare module 'date-fns/locale/et/index.js' {
  import {et} from 'date-fns/locale'
  export = et
}

declare module 'date-fns/locale/fi/index.js' {
  import {fi} from 'date-fns/locale'
  export = fi
}

declare module 'date-fns/locale/fil/index.js' {
  import {fil} from 'date-fns/locale'
  export = fil
}

declare module 'date-fns/locale/fr/index.js' {
  import {fr} from 'date-fns/locale'
  export = fr
}

declare module 'date-fns/locale/fr-CH/index.js' {
  import {frCH} from 'date-fns/locale'
  export = frCH
}

declare module 'date-fns/locale/he/index.js' {
  import {he} from 'date-fns/locale'
  export = he
}

declare module 'date-fns/locale/hr/index.js' {
  import {hr} from 'date-fns/locale'
  export = hr
}

declare module 'date-fns/locale/id/index.js' {
  import {id} from 'date-fns/locale'
  export = id
}

declare module 'date-fns/locale/is/index.js' {
  import {is} from 'date-fns/locale'
  export = is
}

declare module 'date-fns/locale/it/index.js' {
  import {it} from 'date-fns/locale'
  export = it
}

declare module 'date-fns/locale/ja/index.js' {
  import {ja} from 'date-fns/locale'
  export = ja
}

declare module 'date-fns/locale/ka/index.js' {
  import {ka} from 'date-fns/locale'
  export = ka
}

declare module 'date-fns/locale/ko/index.js' {
  import {ko} from 'date-fns/locale'
  export = ko
}

declare module 'date-fns/locale/mk/index.js' {
  import {mk} from 'date-fns/locale'
  export = mk
}

declare module 'date-fns/locale/ms/index.js' {
  import {ms} from 'date-fns/locale'
  export = ms
}

declare module 'date-fns/locale/nb/index.js' {
  import {nb} from 'date-fns/locale'
  export = nb
}

declare module 'date-fns/locale/nl/index.js' {
  import {nl} from 'date-fns/locale'
  export = nl
}

declare module 'date-fns/locale/nl-BE/index.js' {
  import {nlBE} from 'date-fns/locale'
  export = nlBE
}

declare module 'date-fns/locale/pl/index.js' {
  import {pl} from 'date-fns/locale'
  export = pl
}

declare module 'date-fns/locale/pt/index.js' {
  import {pt} from 'date-fns/locale'
  export = pt
}

declare module 'date-fns/locale/pt-BR/index.js' {
  import {ptBR} from 'date-fns/locale'
  export = ptBR
}

declare module 'date-fns/locale/ro/index.js' {
  import {ro} from 'date-fns/locale'
  export = ro
}

declare module 'date-fns/locale/ru/index.js' {
  import {ru} from 'date-fns/locale'
  export = ru
}

declare module 'date-fns/locale/sk/index.js' {
  import {sk} from 'date-fns/locale'
  export = sk
}

declare module 'date-fns/locale/sr/index.js' {
  import {sr} from 'date-fns/locale'
  export = sr
}

declare module 'date-fns/locale/sv/index.js' {
  import {sv} from 'date-fns/locale'
  export = sv
}

declare module 'date-fns/locale/th/index.js' {
  import {th} from 'date-fns/locale'
  export = th
}

declare module 'date-fns/locale/tr/index.js' {
  import {tr} from 'date-fns/locale'
  export = tr
}

declare module 'date-fns/locale/uk/index.js' {
  import {uk} from 'date-fns/locale'
  export = uk
}

declare module 'date-fns/locale/vi/index.js' {
  import {vi} from 'date-fns/locale'
  export = vi
}

declare module 'date-fns/locale/zh-CN/index.js' {
  import {zhCN} from 'date-fns/locale'
  export = zhCN
}

declare module 'date-fns/locale/zh-TW/index.js' {
  import {zhTW} from 'date-fns/locale'
  export = zhTW
}

// ECMAScript Module Locales

declare module 'date-fns/esm/locale' {
  const af: Locale
  namespace af {}

  const ar: Locale
  namespace ar {}

  const arDZ: Locale
  namespace arDZ {}

  const bg: Locale
  namespace bg {}

  const ca: Locale
  namespace ca {}

  const cs: Locale
  namespace cs {}

  const da: Locale
  namespace da {}

  const de: Locale
  namespace de {}

  const el: Locale
  namespace el {}

  const enCA: Locale
  namespace enCA {}

  const enGB: Locale
  namespace enGB {}

  const enUS: Locale
  namespace enUS {}

  const eo: Locale
  namespace eo {}

  const es: Locale
  namespace es {}

  const et: Locale
  namespace et {}

  const fi: Locale
  namespace fi {}

  const fil: Locale
  namespace fil {}

  const fr: Locale
  namespace fr {}

  const frCH: Locale
  namespace frCH {}

  const he: Locale
  namespace he {}

  const hr: Locale
  namespace hr {}

  const id: Locale
  namespace id {}

  const is: Locale
  namespace is {}

  const it: Locale
  namespace it {}

  const ja: Locale
  namespace ja {}

  const ka: Locale
  namespace ka {}

  const ko: Locale
  namespace ko {}

  const mk: Locale
  namespace mk {}

  const ms: Locale
  namespace ms {}

  const nb: Locale
  namespace nb {}

  const nl: Locale
  namespace nl {}

  const nlBE: Locale
  namespace nlBE {}

  const pl: Locale
  namespace pl {}

  const pt: Locale
  namespace pt {}

  const ptBR: Locale
  namespace ptBR {}

  const ro: Locale
  namespace ro {}

  const ru: Locale
  namespace ru {}

  const sk: Locale
  namespace sk {}

  const sr: Locale
  namespace sr {}

  const sv: Locale
  namespace sv {}

  const th: Locale
  namespace th {}

  const tr: Locale
  namespace tr {}

  const uk: Locale
  namespace uk {}

  const vi: Locale
  namespace vi {}

  const zhCN: Locale
  namespace zhCN {}

  const zhTW: Locale
  namespace zhTW {}
}

declare module 'date-fns/esm/locale/af' {
  import {af} from 'date-fns/esm/locale'
  export default af
}

declare module 'date-fns/esm/locale/ar' {
  import {ar} from 'date-fns/esm/locale'
  export default ar
}

declare module 'date-fns/esm/locale/ar-DZ' {
  import {arDZ} from 'date-fns/esm/locale'
  export default arDZ
}

declare module 'date-fns/esm/locale/bg' {
  import {bg} from 'date-fns/esm/locale'
  export default bg
}

declare module 'date-fns/esm/locale/ca' {
  import {ca} from 'date-fns/esm/locale'
  export default ca
}

declare module 'date-fns/esm/locale/cs' {
  import {cs} from 'date-fns/esm/locale'
  export default cs
}

declare module 'date-fns/esm/locale/da' {
  import {da} from 'date-fns/esm/locale'
  export default da
}

declare module 'date-fns/esm/locale/de' {
  import {de} from 'date-fns/esm/locale'
  export default de
}

declare module 'date-fns/esm/locale/el' {
  import {el} from 'date-fns/esm/locale'
  export default el
}

declare module 'date-fns/esm/locale/en-CA' {
  import {enCA} from 'date-fns/esm/locale'
  export default enCA
}

declare module 'date-fns/esm/locale/en-GB' {
  import {enGB} from 'date-fns/esm/locale'
  export default enGB
}

declare module 'date-fns/esm/locale/en-US' {
  import {enUS} from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/eo' {
  import {eo} from 'date-fns/esm/locale'
  export default eo
}

declare module 'date-fns/esm/locale/es' {
  import {es} from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/et' {
  import {et} from 'date-fns/esm/locale'
  export default et
}

declare module 'date-fns/esm/locale/fi' {
  import {fi} from 'date-fns/esm/locale'
  export default fi
}

declare module 'date-fns/esm/locale/fil' {
  import {fil} from 'date-fns/esm/locale'
  export default fil
}

declare module 'date-fns/esm/locale/fr' {
  import {fr} from 'date-fns/esm/locale'
  export default fr
}

declare module 'date-fns/esm/locale/fr-CH' {
  import {frCH} from 'date-fns/esm/locale'
  export default frCH
}

declare module 'date-fns/esm/locale/he' {
  import {he} from 'date-fns/esm/locale'
  export default he
}

declare module 'date-fns/esm/locale/hr' {
  import {hr} from 'date-fns/esm/locale'
  export default hr
}

declare module 'date-fns/esm/locale/id' {
  import {id} from 'date-fns/esm/locale'
  export default id
}

declare module 'date-fns/esm/locale/is' {
  import {is} from 'date-fns/esm/locale'
  export default is
}

declare module 'date-fns/esm/locale/it' {
  import {it} from 'date-fns/esm/locale'
  export default it
}

declare module 'date-fns/esm/locale/ja' {
  import {ja} from 'date-fns/esm/locale'
  export default ja
}

declare module 'date-fns/esm/locale/ka' {
  import {ka} from 'date-fns/esm/locale'
  export default ka
}

declare module 'date-fns/esm/locale/ko' {
  import {ko} from 'date-fns/esm/locale'
  export default ko
}

declare module 'date-fns/esm/locale/mk' {
  import {mk} from 'date-fns/esm/locale'
  export default mk
}

declare module 'date-fns/esm/locale/ms' {
  import {ms} from 'date-fns/esm/locale'
  export default ms
}

declare module 'date-fns/esm/locale/nb' {
  import {nb} from 'date-fns/esm/locale'
  export default nb
}

declare module 'date-fns/esm/locale/nl' {
  import {nl} from 'date-fns/esm/locale'
  export default nl
}

declare module 'date-fns/esm/locale/nl-BE' {
  import {nlBE} from 'date-fns/esm/locale'
  export default nlBE
}

declare module 'date-fns/esm/locale/pl' {
  import {pl} from 'date-fns/esm/locale'
  export default pl
}

declare module 'date-fns/esm/locale/pt' {
  import {pt} from 'date-fns/esm/locale'
  export default pt
}

declare module 'date-fns/esm/locale/pt-BR' {
  import {ptBR} from 'date-fns/esm/locale'
  export default ptBR
}

declare module 'date-fns/esm/locale/ro' {
  import {ro} from 'date-fns/esm/locale'
  export default ro
}

declare module 'date-fns/esm/locale/ru' {
  import {ru} from 'date-fns/esm/locale'
  export default ru
}

declare module 'date-fns/esm/locale/sk' {
  import {sk} from 'date-fns/esm/locale'
  export default sk
}

declare module 'date-fns/esm/locale/sr' {
  import {sr} from 'date-fns/esm/locale'
  export default sr
}

declare module 'date-fns/esm/locale/sv' {
  import {sv} from 'date-fns/esm/locale'
  export default sv
}

declare module 'date-fns/esm/locale/th' {
  import {th} from 'date-fns/esm/locale'
  export default th
}

declare module 'date-fns/esm/locale/tr' {
  import {tr} from 'date-fns/esm/locale'
  export default tr
}

declare module 'date-fns/esm/locale/uk' {
  import {uk} from 'date-fns/esm/locale'
  export default uk
}

declare module 'date-fns/esm/locale/vi' {
  import {vi} from 'date-fns/esm/locale'
  export default vi
}

declare module 'date-fns/esm/locale/zh-CN' {
  import {zhCN} from 'date-fns/esm/locale'
  export default zhCN
}

declare module 'date-fns/esm/locale/zh-TW' {
  import {zhTW} from 'date-fns/esm/locale'
  export default zhTW
}

declare module 'date-fns/esm/locale/af/index' {
  import {af} from 'date-fns/esm/locale'
  export default af
}

declare module 'date-fns/esm/locale/ar/index' {
  import {ar} from 'date-fns/esm/locale'
  export default ar
}

declare module 'date-fns/esm/locale/ar-DZ/index' {
  import {arDZ} from 'date-fns/esm/locale'
  export default arDZ
}

declare module 'date-fns/esm/locale/bg/index' {
  import {bg} from 'date-fns/esm/locale'
  export default bg
}

declare module 'date-fns/esm/locale/ca/index' {
  import {ca} from 'date-fns/esm/locale'
  export default ca
}

declare module 'date-fns/esm/locale/cs/index' {
  import {cs} from 'date-fns/esm/locale'
  export default cs
}

declare module 'date-fns/esm/locale/da/index' {
  import {da} from 'date-fns/esm/locale'
  export default da
}

declare module 'date-fns/esm/locale/de/index' {
  import {de} from 'date-fns/esm/locale'
  export default de
}

declare module 'date-fns/esm/locale/el/index' {
  import {el} from 'date-fns/esm/locale'
  export default el
}

declare module 'date-fns/esm/locale/en-CA/index' {
  import {enCA} from 'date-fns/esm/locale'
  export default enCA
}

declare module 'date-fns/esm/locale/en-GB/index' {
  import {enGB} from 'date-fns/esm/locale'
  export default enGB
}

declare module 'date-fns/esm/locale/en-US/index' {
  import {enUS} from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/eo/index' {
  import {eo} from 'date-fns/esm/locale'
  export default eo
}

declare module 'date-fns/esm/locale/es/index' {
  import {es} from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/et/index' {
  import {et} from 'date-fns/esm/locale'
  export default et
}

declare module 'date-fns/esm/locale/fi/index' {
  import {fi} from 'date-fns/esm/locale'
  export default fi
}

declare module 'date-fns/esm/locale/fil/index' {
  import {fil} from 'date-fns/esm/locale'
  export default fil
}

declare module 'date-fns/esm/locale/fr/index' {
  import {fr} from 'date-fns/esm/locale'
  export default fr
}

declare module 'date-fns/esm/locale/fr-CH/index' {
  import {frCH} from 'date-fns/esm/locale'
  export default frCH
}

declare module 'date-fns/esm/locale/he/index' {
  import {he} from 'date-fns/esm/locale'
  export default he
}

declare module 'date-fns/esm/locale/hr/index' {
  import {hr} from 'date-fns/esm/locale'
  export default hr
}

declare module 'date-fns/esm/locale/id/index' {
  import {id} from 'date-fns/esm/locale'
  export default id
}

declare module 'date-fns/esm/locale/is/index' {
  import {is} from 'date-fns/esm/locale'
  export default is
}

declare module 'date-fns/esm/locale/it/index' {
  import {it} from 'date-fns/esm/locale'
  export default it
}

declare module 'date-fns/esm/locale/ja/index' {
  import {ja} from 'date-fns/esm/locale'
  export default ja
}

declare module 'date-fns/esm/locale/ka/index' {
  import {ka} from 'date-fns/esm/locale'
  export default ka
}

declare module 'date-fns/esm/locale/ko/index' {
  import {ko} from 'date-fns/esm/locale'
  export default ko
}

declare module 'date-fns/esm/locale/mk/index' {
  import {mk} from 'date-fns/esm/locale'
  export default mk
}

declare module 'date-fns/esm/locale/ms/index' {
  import {ms} from 'date-fns/esm/locale'
  export default ms
}

declare module 'date-fns/esm/locale/nb/index' {
  import {nb} from 'date-fns/esm/locale'
  export default nb
}

declare module 'date-fns/esm/locale/nl/index' {
  import {nl} from 'date-fns/esm/locale'
  export default nl
}

declare module 'date-fns/esm/locale/nl-BE/index' {
  import {nlBE} from 'date-fns/esm/locale'
  export default nlBE
}

declare module 'date-fns/esm/locale/pl/index' {
  import {pl} from 'date-fns/esm/locale'
  export default pl
}

declare module 'date-fns/esm/locale/pt/index' {
  import {pt} from 'date-fns/esm/locale'
  export default pt
}

declare module 'date-fns/esm/locale/pt-BR/index' {
  import {ptBR} from 'date-fns/esm/locale'
  export default ptBR
}

declare module 'date-fns/esm/locale/ro/index' {
  import {ro} from 'date-fns/esm/locale'
  export default ro
}

declare module 'date-fns/esm/locale/ru/index' {
  import {ru} from 'date-fns/esm/locale'
  export default ru
}

declare module 'date-fns/esm/locale/sk/index' {
  import {sk} from 'date-fns/esm/locale'
  export default sk
}

declare module 'date-fns/esm/locale/sr/index' {
  import {sr} from 'date-fns/esm/locale'
  export default sr
}

declare module 'date-fns/esm/locale/sv/index' {
  import {sv} from 'date-fns/esm/locale'
  export default sv
}

declare module 'date-fns/esm/locale/th/index' {
  import {th} from 'date-fns/esm/locale'
  export default th
}

declare module 'date-fns/esm/locale/tr/index' {
  import {tr} from 'date-fns/esm/locale'
  export default tr
}

declare module 'date-fns/esm/locale/uk/index' {
  import {uk} from 'date-fns/esm/locale'
  export default uk
}

declare module 'date-fns/esm/locale/vi/index' {
  import {vi} from 'date-fns/esm/locale'
  export default vi
}

declare module 'date-fns/esm/locale/zh-CN/index' {
  import {zhCN} from 'date-fns/esm/locale'
  export default zhCN
}

declare module 'date-fns/esm/locale/zh-TW/index' {
  import {zhTW} from 'date-fns/esm/locale'
  export default zhTW
}

declare module 'date-fns/esm/locale/af/index.js' {
  import {af} from 'date-fns/esm/locale'
  export default af
}

declare module 'date-fns/esm/locale/ar/index.js' {
  import {ar} from 'date-fns/esm/locale'
  export default ar
}

declare module 'date-fns/esm/locale/ar-DZ/index.js' {
  import {arDZ} from 'date-fns/esm/locale'
  export default arDZ
}

declare module 'date-fns/esm/locale/bg/index.js' {
  import {bg} from 'date-fns/esm/locale'
  export default bg
}

declare module 'date-fns/esm/locale/ca/index.js' {
  import {ca} from 'date-fns/esm/locale'
  export default ca
}

declare module 'date-fns/esm/locale/cs/index.js' {
  import {cs} from 'date-fns/esm/locale'
  export default cs
}

declare module 'date-fns/esm/locale/da/index.js' {
  import {da} from 'date-fns/esm/locale'
  export default da
}

declare module 'date-fns/esm/locale/de/index.js' {
  import {de} from 'date-fns/esm/locale'
  export default de
}

declare module 'date-fns/esm/locale/el/index.js' {
  import {el} from 'date-fns/esm/locale'
  export default el
}

declare module 'date-fns/esm/locale/en-CA/index.js' {
  import {enCA} from 'date-fns/esm/locale'
  export default enCA
}

declare module 'date-fns/esm/locale/en-GB/index.js' {
  import {enGB} from 'date-fns/esm/locale'
  export default enGB
}

declare module 'date-fns/esm/locale/en-US/index.js' {
  import {enUS} from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/eo/index.js' {
  import {eo} from 'date-fns/esm/locale'
  export default eo
}

declare module 'date-fns/esm/locale/es/index.js' {
  import {es} from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/et/index.js' {
  import {et} from 'date-fns/esm/locale'
  export default et
}

declare module 'date-fns/esm/locale/fi/index.js' {
  import {fi} from 'date-fns/esm/locale'
  export default fi
}

declare module 'date-fns/esm/locale/fil/index.js' {
  import {fil} from 'date-fns/esm/locale'
  export default fil
}

declare module 'date-fns/esm/locale/fr/index.js' {
  import {fr} from 'date-fns/esm/locale'
  export default fr
}

declare module 'date-fns/esm/locale/fr-CH/index.js' {
  import {frCH} from 'date-fns/esm/locale'
  export default frCH
}

declare module 'date-fns/esm/locale/he/index.js' {
  import {he} from 'date-fns/esm/locale'
  export default he
}

declare module 'date-fns/esm/locale/hr/index.js' {
  import {hr} from 'date-fns/esm/locale'
  export default hr
}

declare module 'date-fns/esm/locale/id/index.js' {
  import {id} from 'date-fns/esm/locale'
  export default id
}

declare module 'date-fns/esm/locale/is/index.js' {
  import {is} from 'date-fns/esm/locale'
  export default is
}

declare module 'date-fns/esm/locale/it/index.js' {
  import {it} from 'date-fns/esm/locale'
  export default it
}

declare module 'date-fns/esm/locale/ja/index.js' {
  import {ja} from 'date-fns/esm/locale'
  export default ja
}

declare module 'date-fns/esm/locale/ka/index.js' {
  import {ka} from 'date-fns/esm/locale'
  export default ka
}

declare module 'date-fns/esm/locale/ko/index.js' {
  import {ko} from 'date-fns/esm/locale'
  export default ko
}

declare module 'date-fns/esm/locale/mk/index.js' {
  import {mk} from 'date-fns/esm/locale'
  export default mk
}

declare module 'date-fns/esm/locale/ms/index.js' {
  import {ms} from 'date-fns/esm/locale'
  export default ms
}

declare module 'date-fns/esm/locale/nb/index.js' {
  import {nb} from 'date-fns/esm/locale'
  export default nb
}

declare module 'date-fns/esm/locale/nl/index.js' {
  import {nl} from 'date-fns/esm/locale'
  export default nl
}

declare module 'date-fns/esm/locale/nl-BE/index.js' {
  import {nlBE} from 'date-fns/esm/locale'
  export default nlBE
}

declare module 'date-fns/esm/locale/pl/index.js' {
  import {pl} from 'date-fns/esm/locale'
  export default pl
}

declare module 'date-fns/esm/locale/pt/index.js' {
  import {pt} from 'date-fns/esm/locale'
  export default pt
}

declare module 'date-fns/esm/locale/pt-BR/index.js' {
  import {ptBR} from 'date-fns/esm/locale'
  export default ptBR
}

declare module 'date-fns/esm/locale/ro/index.js' {
  import {ro} from 'date-fns/esm/locale'
  export default ro
}

declare module 'date-fns/esm/locale/ru/index.js' {
  import {ru} from 'date-fns/esm/locale'
  export default ru
}

declare module 'date-fns/esm/locale/sk/index.js' {
  import {sk} from 'date-fns/esm/locale'
  export default sk
}

declare module 'date-fns/esm/locale/sr/index.js' {
  import {sr} from 'date-fns/esm/locale'
  export default sr
}

declare module 'date-fns/esm/locale/sv/index.js' {
  import {sv} from 'date-fns/esm/locale'
  export default sv
}

declare module 'date-fns/esm/locale/th/index.js' {
  import {th} from 'date-fns/esm/locale'
  export default th
}

declare module 'date-fns/esm/locale/tr/index.js' {
  import {tr} from 'date-fns/esm/locale'
  export default tr
}

declare module 'date-fns/esm/locale/uk/index.js' {
  import {uk} from 'date-fns/esm/locale'
  export default uk
}

declare module 'date-fns/esm/locale/vi/index.js' {
  import {vi} from 'date-fns/esm/locale'
  export default vi
}

declare module 'date-fns/esm/locale/zh-CN/index.js' {
  import {zhCN} from 'date-fns/esm/locale'
  export default zhCN
}

declare module 'date-fns/esm/locale/zh-TW/index.js' {
  import {zhTW} from 'date-fns/esm/locale'
  export default zhTW
}

// dateFns Global Interface

interface dateFns {
  addDays(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  addHours(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  addISOWeekYears(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  addMilliseconds(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  addMinutes(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  addMonths(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  addQuarters(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  addSeconds(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  addWeeks(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  addYears(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): boolean

  closestIndexTo(
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): number

  closestTo(
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date

  compareAsc(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  compareDesc(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInCalendarDays(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInCalendarISOWeeks(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInCalendarISOWeekYears(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInCalendarMonths(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInCalendarQuarters(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInCalendarWeeks(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInCalendarYears(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInDays(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInHours(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInISOWeekYears(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInMilliseconds(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInMinutes(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInMonths(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInQuarters(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInSeconds(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInWeeks(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  differenceInYears(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number

  eachDayOfInterval(
    interval: Interval,
    options?: Options
  ): Date[]

  eachWeekOfInterval(
    interval: Interval,
    options?: Options
  ): Date[]

  endOfDay(
    date: Date | string | number,
    options?: Options
  ): Date

  endOfHour(
    date: Date | string | number,
    options?: Options
  ): Date

  endOfISOWeek(
    date: Date | string | number,
    options?: Options
  ): Date

  endOfISOWeekYear(
    date: Date | string | number,
    options?: Options
  ): Date

  endOfMinute(
    date: Date | string | number,
    options?: Options
  ): Date

  endOfMonth(
    date: Date | string | number,
    options?: Options
  ): Date

  endOfQuarter(
    date: Date | string | number,
    options?: Options
  ): Date

  endOfSecond(
    date: Date | string | number,
    options?: Options
  ): Date

  endOfWeek(
    date: Date | string | number,
    options?: Options
  ): Date

  endOfYear(
    date: Date | string | number,
    options?: Options
  ): Date

  format(
    date: Date | string | number,
    format: string,
    options?: Options
  ): string

  formatDistance(
    date: Date | string | number,
    baseDate: Date | string | number,
    options?: Options
  ): string

  formatDistanceStrict(
    date: Date | string | number,
    baseDate: Date | string | number,
    options?: Options
  ): string

  formatRelative(
    date: Date | string | number,
    baseDate: Date | string | number,
    options?: Options
  ): string

  getDate(
    date: Date | string | number,
    options?: Options
  ): number

  getDay(
    date: Date | string | number,
    options?: Options
  ): number

  getDayOfYear(
    date: Date | string | number,
    options?: Options
  ): number

  getDaysInMonth(
    date: Date | string | number,
    options?: Options
  ): number

  getDaysInYear(
    date: Date | string | number,
    options?: Options
  ): number

  getHours(
    date: Date | string | number,
    options?: Options
  ): number

  getISODay(
    date: Date | string | number,
    options?: Options
  ): number

  getISOWeek(
    date: Date | string | number,
    options?: Options
  ): number

  getISOWeeksInYear(
    date: Date | string | number,
    options?: Options
  ): number

  getISOWeekYear(
    date: Date | string | number,
    options?: Options
  ): number

  getMilliseconds(
    date: Date | string | number,
    options?: Options
  ): number

  getMinutes(
    date: Date | string | number,
    options?: Options
  ): number

  getMonth(
    date: Date | string | number,
    options?: Options
  ): number

  getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): number

  getQuarter(
    date: Date | string | number,
    options?: Options
  ): number

  getSeconds(
    date: Date | string | number,
    options?: Options
  ): number

  getTime(
    date: Date | string | number,
    options?: Options
  ): number

  getWeek(
    date: Date | string | number,
    options?: Options
  ): number

  getWeekOfMonth(
    date: Date | string | number,
    options?: Options
  ): number

  getWeeksInMonth(
    date: Date | string | number,
    options?: Options
  ): number

  getWeekYear(
    date: Date | string | number,
    options?: Options
  ): number

  getYear(
    date: Date | string | number,
    options?: Options
  ): number

  isAfter(
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean

  isBefore(
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean

  isDate(
    value: any,
    options?: Options
  ): boolean

  isEqual(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isFirstDayOfMonth(
    date: Date | string | number,
    options?: Options
  ): boolean

  isFriday(
    date: Date | string | number,
    options?: Options
  ): boolean

  isLastDayOfMonth(
    date: Date | string | number,
    options?: Options
  ): boolean

  isLeapYear(
    date: Date | string | number,
    options?: Options
  ): boolean

  isMonday(
    date: Date | string | number,
    options?: Options
  ): boolean

  isSameDay(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isSameHour(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isSameISOWeek(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isSameISOWeekYear(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isSameMinute(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isSameMonth(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isSameQuarter(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isSameSecond(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isSameWeek(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isSameYear(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean

  isSaturday(
    date: Date | string | number,
    options?: Options
  ): boolean

  isSunday(
    date: Date | string | number,
    options?: Options
  ): boolean

  isThursday(
    date: Date | string | number,
    options?: Options
  ): boolean

  isTuesday(
    date: Date | string | number,
    options?: Options
  ): boolean

  isValid(
    date: any,
    options?: Options
  ): boolean

  isWednesday(
    date: Date | string | number,
    options?: Options
  ): boolean

  isWeekend(
    date: Date | string | number,
    options?: Options
  ): boolean

  isWithinInterval(
    date: Date | string | number,
    interval: Interval,
    options?: Options
  ): boolean

  lastDayOfISOWeek(
    date: Date | string | number,
    options?: Options
  ): Date

  lastDayOfISOWeekYear(
    date: Date | string | number,
    options?: Options
  ): Date

  lastDayOfMonth(
    date: Date | string | number,
    options?: Options
  ): Date

  lastDayOfQuarter(
    date: Date | string | number,
    options?: Options
  ): Date

  lastDayOfWeek(
    date: Date | string | number,
    options?: Options
  ): Date

  lastDayOfYear(
    date: Date | string | number,
    options?: Options
  ): Date

  max(
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date

  min(
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date

  parse(
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: Options
  ): Date

  setDate(
    date: Date | string | number,
    dayOfMonth: number,
    options?: Options
  ): Date

  setDay(
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date

  setDayOfYear(
    date: Date | string | number,
    dayOfYear: number,
    options?: Options
  ): Date

  setHours(
    date: Date | string | number,
    hours: number,
    options?: Options
  ): Date

  setISODay(
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date

  setISOWeek(
    date: Date | string | number,
    isoWeek: number,
    options?: Options
  ): Date

  setISOWeekYear(
    date: Date | string | number,
    isoWeekYear: number,
    options?: Options
  ): Date

  setMilliseconds(
    date: Date | string | number,
    milliseconds: number,
    options?: Options
  ): Date

  setMinutes(
    date: Date | string | number,
    minutes: number,
    options?: Options
  ): Date

  setMonth(
    date: Date | string | number,
    month: number,
    options?: Options
  ): Date

  setQuarter(
    date: Date | string | number,
    quarter: number,
    options?: Options
  ): Date

  setSeconds(
    date: Date | string | number,
    seconds: number,
    options?: Options
  ): Date

  setWeek(
    date: Date | string | number,
    week: number,
    options?: Options
  ): Date

  setWeekYear(
    date: Date | string | number,
    weekYear: number,
    options?: Options
  ): Date

  setYear(
    date: Date | string | number,
    year: number,
    options?: Options
  ): Date

  startOfDay(
    date: Date | string | number,
    options?: Options
  ): Date

  startOfHour(
    date: Date | string | number,
    options?: Options
  ): Date

  startOfISOWeek(
    date: Date | string | number,
    options?: Options
  ): Date

  startOfISOWeekYear(
    date: Date | string | number,
    options?: Options
  ): Date

  startOfMinute(
    date: Date | string | number,
    options?: Options
  ): Date

  startOfMonth(
    date: Date | string | number,
    options?: Options
  ): Date

  startOfQuarter(
    date: Date | string | number,
    options?: Options
  ): Date

  startOfSecond(
    date: Date | string | number,
    options?: Options
  ): Date

  startOfWeek(
    date: Date | string | number,
    options?: Options
  ): Date

  startOfWeekYear(
    date: Date | string | number,
    options?: Options
  ): Date

  startOfYear(
    date: Date | string | number,
    options?: Options
  ): Date

  subDays(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  subHours(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  subISOWeekYears(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  subMilliseconds(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  subMinutes(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  subMonths(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  subQuarters(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  subSeconds(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  subWeeks(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  subYears(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date

  toDate(
    argument: Date | string | number,
    options?: Options
  ): Date
}
