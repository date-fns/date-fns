// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it.

// FP Interfaces

interface CurriedFn1<A, R> {
  (a: A): R
}

interface CurriedFn2<A, B, R> {
  (a: A): CurriedFn1<B, R>
  (a: A, b: B): R
}

interface CurriedFn3<A, B, C, R> {
  (a: A): CurriedFn2<B, C, R>
  (a: A, b: B): CurriedFn1<C, R>
  (a: A, b: B, c: C): R
}

interface CurriedFn4<A, B, C, D, R> {
  (a: A): CurriedFn3<B, C, D, R>
  (a: A, b: B): CurriedFn2<C, D, R>
  (a: A, b: B, c: C): CurriedFn1<D, R>
  (a: A, b: B, c: C, d: D): R
}

// Type Aliases

type Interval = {
  start: Date | number
  end: Date | number
}
type IntervalAliased = Interval

type Locale = {
  formatDistance: Function
  formatRelative: Function
  localize: {
    ordinalNumber: Function
    era: Function
    quarter: Function
    month: Function
    day: Function
    dayPeriod: Function
  }
  formatLong: Object
  date: Function
  time: Function
  dateTime: Function
  match: {
    ordinalNumber: Function
    era: Function
    quarter: Function
    month: Function
    day: Function
    dayPeriod: Function
  }
  options?: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }
}
type LocaleAliased = Locale

// Exported Type Aliases

declare module 'date-fns' {
  export type Interval = IntervalAliased

  export type Locale = LocaleAliased
}

// Regular Functions

declare module 'date-fns' {
  function addBusinessDays(date: Date | number, amount: number): Date
  namespace addBusinessDays {}

  function addDays(date: Date | number, amount: number): Date
  namespace addDays {}

  function addHours(date: Date | number, amount: number): Date
  namespace addHours {}

  function addISOWeekYears(date: Date | number, amount: number): Date
  namespace addISOWeekYears {}

  function addMilliseconds(date: Date | number, amount: number): Date
  namespace addMilliseconds {}

  function addMinutes(date: Date | number, amount: number): Date
  namespace addMinutes {}

  function addMonths(date: Date | number, amount: number): Date
  namespace addMonths {}

  function addQuarters(date: Date | number, amount: number): Date
  namespace addQuarters {}

  function addSeconds(date: Date | number, amount: number): Date
  namespace addSeconds {}

  function addWeeks(date: Date | number, amount: number): Date
  namespace addWeeks {}

  function addYears(date: Date | number, amount: number): Date
  namespace addYears {}

  function areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval
  ): boolean
  namespace areIntervalsOverlapping {}

  function closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number
  namespace closestIndexTo {}

  function closestTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): Date
  namespace closestTo {}

  function compareAsc(dateLeft: Date | number, dateRight: Date | number): number
  namespace compareAsc {}

  function compareDesc(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace compareDesc {}

  function differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInBusinessDays {}

  function differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeekYears {}

  function differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInDays {}

  function differenceInHours(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInHours {}

  function differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInISOWeekYears {}

  function differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInWeeks {}

  function differenceInYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInYears {}

  function eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachDayOfInterval {}

  function eachWeekendOfInterval(interval: Interval): Date[]
  namespace eachWeekendOfInterval {}

  function eachWeekendOfMonth(date: Date | number): Date[]
  namespace eachWeekendOfMonth {}

  function eachWeekendOfYear(date: Date | number): Date[]
  namespace eachWeekendOfYear {}

  function eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]
  namespace eachWeekOfInterval {}

  function endOfDay(date: Date | number): Date
  namespace endOfDay {}

  function endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace endOfDecade {}

  function endOfHour(date: Date | number): Date
  namespace endOfHour {}

  function endOfISOWeek(date: Date | number): Date
  namespace endOfISOWeek {}

  function endOfISOWeekYear(date: Date | number): Date
  namespace endOfISOWeekYear {}

  function endOfMinute(date: Date | number): Date
  namespace endOfMinute {}

  function endOfMonth(date: Date | number): Date
  namespace endOfMonth {}

  function endOfQuarter(date: Date | number): Date
  namespace endOfQuarter {}

  function endOfSecond(date: Date | number): Date
  namespace endOfSecond {}

  function endOfToday(): Date
  namespace endOfToday {}

  function endOfTomorrow(): Date
  namespace endOfTomorrow {}

  function endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear(date: Date | number): Date
  namespace endOfYear {}

  function endOfYesterday(): Date
  namespace endOfYesterday {}

  function format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string
  namespace format {}

  function formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistance {}

  function formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceStrict {}

  function formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNow {}

  function formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string
  namespace formatRelative {}

  function fromUnixTime(unixTime: number): Date
  namespace fromUnixTime {}

  function getDate(date: Date | number): number
  namespace getDate {}

  function getDay(date: Date | number): number
  namespace getDay {}

  function getDayOfYear(date: Date | number): number
  namespace getDayOfYear {}

  function getDaysInMonth(date: Date | number): number
  namespace getDaysInMonth {}

  function getDaysInYear(date: Date | number): number
  namespace getDaysInYear {}

  function getDecade(date: Date | number): number
  namespace getDecade {}

  function getHours(date: Date | number): number
  namespace getHours {}

  function getISODay(date: Date | number): number
  namespace getISODay {}

  function getISOWeek(date: Date | number): number
  namespace getISOWeek {}

  function getISOWeeksInYear(date: Date | number): number
  namespace getISOWeeksInYear {}

  function getISOWeekYear(date: Date | number): number
  namespace getISOWeekYear {}

  function getMilliseconds(date: Date | number): number
  namespace getMilliseconds {}

  function getMinutes(date: Date | number): number
  namespace getMinutes {}

  function getMonth(date: Date | number): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter(date: Date | number): number
  namespace getQuarter {}

  function getSeconds(date: Date | number): number
  namespace getSeconds {}

  function getTime(date: Date | number): number
  namespace getTime {}

  function getUnixTime(date: Date | number): number
  namespace getUnixTime {}

  function getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeek {}

  function getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeekOfMonth {}

  function getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeeksInMonth {}

  function getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeekYear {}

  function getYear(date: Date | number): number
  namespace getYear {}

  function isAfter(date: Date | number, dateToCompare: Date | number): boolean
  namespace isAfter {}

  function isBefore(date: Date | number, dateToCompare: Date | number): boolean
  namespace isBefore {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isEqual(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isEqual {}

  function isFirstDayOfMonth(date: Date | number): boolean
  namespace isFirstDayOfMonth {}

  function isFriday(date: Date | number): boolean
  namespace isFriday {}

  function isFuture(date: Date | number): boolean
  namespace isFuture {}

  function isLastDayOfMonth(date: Date | number): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear(date: Date | number): boolean
  namespace isLeapYear {}

  function isMonday(date: Date | number): boolean
  namespace isMonday {}

  function isPast(date: Date | number): boolean
  namespace isPast {}

  function isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isSameDay {}

  function isSameHour(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOWeekYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeekYear {}

  function isSameMinute(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMinute {}

  function isSameMonth(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameSecond {}

  function isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isSameWeek {}

  function isSameYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameYear {}

  function isSaturday(date: Date | number): boolean
  namespace isSaturday {}

  function isSunday(date: Date | number): boolean
  namespace isSunday {}

  function isThisHour(date: Date | number): boolean
  namespace isThisHour {}

  function isThisISOWeek(date: Date | number): boolean
  namespace isThisISOWeek {}

  function isThisMinute(date: Date | number): boolean
  namespace isThisMinute {}

  function isThisMonth(date: Date | number): boolean
  namespace isThisMonth {}

  function isThisQuarter(date: Date | number): boolean
  namespace isThisQuarter {}

  function isThisSecond(date: Date | number): boolean
  namespace isThisSecond {}

  function isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isThisWeek {}

  function isThisYear(date: Date | number): boolean
  namespace isThisYear {}

  function isThursday(date: Date | number): boolean
  namespace isThursday {}

  function isToday(date: Date | number): boolean
  namespace isToday {}

  function isTomorrow(date: Date | number): boolean
  namespace isTomorrow {}

  function isTuesday(date: Date | number): boolean
  namespace isTuesday {}

  function isValid(date: any): boolean
  namespace isValid {}

  function isWednesday(date: Date | number): boolean
  namespace isWednesday {}

  function isWeekend(date: Date | number): boolean
  namespace isWeekend {}

  function isWithinInterval(date: Date | number, interval: Interval): boolean
  namespace isWithinInterval {}

  function isYesterday(date: Date | number): boolean
  namespace isYesterday {}

  function lastDayOfDecade(date: Date | number): Date
  namespace lastDayOfDecade {}

  function lastDayOfISOWeek(date: Date | number): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOWeekYear(date: Date | number): Date
  namespace lastDayOfISOWeekYear {}

  function lastDayOfMonth(date: Date | number): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear(date: Date | number): Date
  namespace lastDayOfYear {}

  function lightFormat(date: Date | number, format: string): string
  namespace lightFormat {}

  function max(datesArray: (Date | number)[]): Date
  namespace max {}

  function min(datesArray: (Date | number)[]): Date
  namespace min {}

  function parse(
    dateString: string,
    formatString: string,
    backupDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date
  namespace parse {}

  function parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace parseISO {}

  function roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
    }
  ): Date
  namespace roundToNearestMinutes {}

  function setDate(date: Date | number, dayOfMonth: number): Date
  namespace setDate {}

  function setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace setDay {}

  function setDayOfYear(date: Date | number, dayOfYear: number): Date
  namespace setDayOfYear {}

  function setHours(date: Date | number, hours: number): Date
  namespace setHours {}

  function setISODay(date: Date | number, day: number): Date
  namespace setISODay {}

  function setISOWeek(date: Date | number, isoWeek: number): Date
  namespace setISOWeek {}

  function setISOWeekYear(date: Date | number, isoWeekYear: number): Date
  namespace setISOWeekYear {}

  function setMilliseconds(date: Date | number, milliseconds: number): Date
  namespace setMilliseconds {}

  function setMinutes(date: Date | number, minutes: number): Date
  namespace setMinutes {}

  function setMonth(date: Date | number, month: number): Date
  namespace setMonth {}

  function setQuarter(date: Date | number, quarter: number): Date
  namespace setQuarter {}

  function setSeconds(date: Date | number, seconds: number): Date
  namespace setSeconds {}

  function setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeek {}

  function setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeekYear {}

  function setYear(date: Date | number, year: number): Date
  namespace setYear {}

  function startOfDay(date: Date | number): Date
  namespace startOfDay {}

  function startOfDecade(date: Date | number): Date
  namespace startOfDecade {}

  function startOfHour(date: Date | number): Date
  namespace startOfHour {}

  function startOfISOWeek(date: Date | number): Date
  namespace startOfISOWeek {}

  function startOfISOWeekYear(date: Date | number): Date
  namespace startOfISOWeekYear {}

  function startOfMinute(date: Date | number): Date
  namespace startOfMinute {}

  function startOfMonth(date: Date | number): Date
  namespace startOfMonth {}

  function startOfQuarter(date: Date | number): Date
  namespace startOfQuarter {}

  function startOfSecond(date: Date | number): Date
  namespace startOfSecond {}

  function startOfToday(): Date
  namespace startOfToday {}

  function startOfTomorrow(): Date
  namespace startOfTomorrow {}

  function startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace startOfWeek {}

  function startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace startOfWeekYear {}

  function startOfYear(date: Date | number): Date
  namespace startOfYear {}

  function startOfYesterday(): Date
  namespace startOfYesterday {}

  function subDays(date: Date | number, amount: number): Date
  namespace subDays {}

  function subHours(date: Date | number, amount: number): Date
  namespace subHours {}

  function subISOWeekYears(date: Date | number, amount: number): Date
  namespace subISOWeekYears {}

  function subMilliseconds(date: Date | number, amount: number): Date
  namespace subMilliseconds {}

  function subMinutes(date: Date | number, amount: number): Date
  namespace subMinutes {}

  function subMonths(date: Date | number, amount: number): Date
  namespace subMonths {}

  function subQuarters(date: Date | number, amount: number): Date
  namespace subQuarters {}

  function subSeconds(date: Date | number, amount: number): Date
  namespace subSeconds {}

  function subWeeks(date: Date | number, amount: number): Date
  namespace subWeeks {}

  function subYears(date: Date | number, amount: number): Date
  namespace subYears {}

  function toDate(argument: Date | number): Date
  namespace toDate {}

  const maxTime: number

  const minTime: number
}

declare module 'date-fns/addBusinessDays' {
  import { addBusinessDays } from 'date-fns'
  export default addBusinessDays
}

declare module 'date-fns/addDays' {
  import { addDays } from 'date-fns'
  export default addDays
}

declare module 'date-fns/addHours' {
  import { addHours } from 'date-fns'
  export default addHours
}

declare module 'date-fns/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns'
  export default addISOWeekYears
}

declare module 'date-fns/addMilliseconds' {
  import { addMilliseconds } from 'date-fns'
  export default addMilliseconds
}

declare module 'date-fns/addMinutes' {
  import { addMinutes } from 'date-fns'
  export default addMinutes
}

declare module 'date-fns/addMonths' {
  import { addMonths } from 'date-fns'
  export default addMonths
}

declare module 'date-fns/addQuarters' {
  import { addQuarters } from 'date-fns'
  export default addQuarters
}

declare module 'date-fns/addSeconds' {
  import { addSeconds } from 'date-fns'
  export default addSeconds
}

declare module 'date-fns/addWeeks' {
  import { addWeeks } from 'date-fns'
  export default addWeeks
}

declare module 'date-fns/addYears' {
  import { addYears } from 'date-fns'
  export default addYears
}

declare module 'date-fns/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns'
  export default areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo' {
  import { closestIndexTo } from 'date-fns'
  export default closestIndexTo
}

declare module 'date-fns/closestTo' {
  import { closestTo } from 'date-fns'
  export default closestTo
}

declare module 'date-fns/compareAsc' {
  import { compareAsc } from 'date-fns'
  export default compareAsc
}

declare module 'date-fns/compareDesc' {
  import { compareDesc } from 'date-fns'
  export default compareDesc
}

declare module 'date-fns/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns'
  export default differenceInBusinessDays
}

declare module 'date-fns/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns'
  export default differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns'
  export default differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns'
  export default differenceInCalendarYears
}

declare module 'date-fns/differenceInDays' {
  import { differenceInDays } from 'date-fns'
  export default differenceInDays
}

declare module 'date-fns/differenceInHours' {
  import { differenceInHours } from 'date-fns'
  export default differenceInHours
}

declare module 'date-fns/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns'
  export default differenceInISOWeekYears
}

declare module 'date-fns/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns'
  export default differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns'
  export default differenceInMinutes
}

declare module 'date-fns/differenceInMonths' {
  import { differenceInMonths } from 'date-fns'
  export default differenceInMonths
}

declare module 'date-fns/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns'
  export default differenceInQuarters
}

declare module 'date-fns/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns'
  export default differenceInSeconds
}

declare module 'date-fns/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns'
  export default differenceInWeeks
}

declare module 'date-fns/differenceInYears' {
  import { differenceInYears } from 'date-fns'
  export default differenceInYears
}

declare module 'date-fns/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns'
  export default eachDayOfInterval
}

declare module 'date-fns/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns'
  export default eachWeekendOfInterval
}

declare module 'date-fns/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns'
  export default eachWeekendOfMonth
}

declare module 'date-fns/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns'
  export default eachWeekendOfYear
}

declare module 'date-fns/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns'
  export default eachWeekOfInterval
}

declare module 'date-fns/endOfDay' {
  import { endOfDay } from 'date-fns'
  export default endOfDay
}

declare module 'date-fns/endOfDecade' {
  import { endOfDecade } from 'date-fns'
  export default endOfDecade
}

declare module 'date-fns/endOfHour' {
  import { endOfHour } from 'date-fns'
  export default endOfHour
}

declare module 'date-fns/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns'
  export default endOfISOWeek
}

declare module 'date-fns/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns'
  export default endOfISOWeekYear
}

declare module 'date-fns/endOfMinute' {
  import { endOfMinute } from 'date-fns'
  export default endOfMinute
}

declare module 'date-fns/endOfMonth' {
  import { endOfMonth } from 'date-fns'
  export default endOfMonth
}

declare module 'date-fns/endOfQuarter' {
  import { endOfQuarter } from 'date-fns'
  export default endOfQuarter
}

declare module 'date-fns/endOfSecond' {
  import { endOfSecond } from 'date-fns'
  export default endOfSecond
}

declare module 'date-fns/endOfToday' {
  import { endOfToday } from 'date-fns'
  export default endOfToday
}

declare module 'date-fns/endOfTomorrow' {
  import { endOfTomorrow } from 'date-fns'
  export default endOfTomorrow
}

declare module 'date-fns/endOfWeek' {
  import { endOfWeek } from 'date-fns'
  export default endOfWeek
}

declare module 'date-fns/endOfYear' {
  import { endOfYear } from 'date-fns'
  export default endOfYear
}

declare module 'date-fns/endOfYesterday' {
  import { endOfYesterday } from 'date-fns'
  export default endOfYesterday
}

declare module 'date-fns/format' {
  import { format } from 'date-fns'
  export default format
}

declare module 'date-fns/formatDistance' {
  import { formatDistance } from 'date-fns'
  export default formatDistance
}

declare module 'date-fns/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns'
  export default formatDistanceStrict
}

declare module 'date-fns/formatDistanceToNow' {
  import { formatDistanceToNow } from 'date-fns'
  export default formatDistanceToNow
}

declare module 'date-fns/formatRelative' {
  import { formatRelative } from 'date-fns'
  export default formatRelative
}

declare module 'date-fns/fromUnixTime' {
  import { fromUnixTime } from 'date-fns'
  export default fromUnixTime
}

declare module 'date-fns/getDate' {
  import { getDate } from 'date-fns'
  export default getDate
}

declare module 'date-fns/getDay' {
  import { getDay } from 'date-fns'
  export default getDay
}

declare module 'date-fns/getDayOfYear' {
  import { getDayOfYear } from 'date-fns'
  export default getDayOfYear
}

declare module 'date-fns/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns'
  export default getDaysInMonth
}

declare module 'date-fns/getDaysInYear' {
  import { getDaysInYear } from 'date-fns'
  export default getDaysInYear
}

declare module 'date-fns/getDecade' {
  import { getDecade } from 'date-fns'
  export default getDecade
}

declare module 'date-fns/getHours' {
  import { getHours } from 'date-fns'
  export default getHours
}

declare module 'date-fns/getISODay' {
  import { getISODay } from 'date-fns'
  export default getISODay
}

declare module 'date-fns/getISOWeek' {
  import { getISOWeek } from 'date-fns'
  export default getISOWeek
}

declare module 'date-fns/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns'
  export default getISOWeeksInYear
}

declare module 'date-fns/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns'
  export default getISOWeekYear
}

declare module 'date-fns/getMilliseconds' {
  import { getMilliseconds } from 'date-fns'
  export default getMilliseconds
}

declare module 'date-fns/getMinutes' {
  import { getMinutes } from 'date-fns'
  export default getMinutes
}

declare module 'date-fns/getMonth' {
  import { getMonth } from 'date-fns'
  export default getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter' {
  import { getQuarter } from 'date-fns'
  export default getQuarter
}

declare module 'date-fns/getSeconds' {
  import { getSeconds } from 'date-fns'
  export default getSeconds
}

declare module 'date-fns/getTime' {
  import { getTime } from 'date-fns'
  export default getTime
}

declare module 'date-fns/getUnixTime' {
  import { getUnixTime } from 'date-fns'
  export default getUnixTime
}

declare module 'date-fns/getWeek' {
  import { getWeek } from 'date-fns'
  export default getWeek
}

declare module 'date-fns/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns'
  export default getWeekOfMonth
}

declare module 'date-fns/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns'
  export default getWeeksInMonth
}

declare module 'date-fns/getWeekYear' {
  import { getWeekYear } from 'date-fns'
  export default getWeekYear
}

declare module 'date-fns/getYear' {
  import { getYear } from 'date-fns'
  export default getYear
}

declare module 'date-fns/isAfter' {
  import { isAfter } from 'date-fns'
  export default isAfter
}

declare module 'date-fns/isBefore' {
  import { isBefore } from 'date-fns'
  export default isBefore
}

declare module 'date-fns/isDate' {
  import { isDate } from 'date-fns'
  export default isDate
}

declare module 'date-fns/isEqual' {
  import { isEqual } from 'date-fns'
  export default isEqual
}

declare module 'date-fns/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns'
  export default isFirstDayOfMonth
}

declare module 'date-fns/isFriday' {
  import { isFriday } from 'date-fns'
  export default isFriday
}

declare module 'date-fns/isFuture' {
  import { isFuture } from 'date-fns'
  export default isFuture
}

declare module 'date-fns/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns'
  export default isLastDayOfMonth
}

declare module 'date-fns/isLeapYear' {
  import { isLeapYear } from 'date-fns'
  export default isLeapYear
}

declare module 'date-fns/isMonday' {
  import { isMonday } from 'date-fns'
  export default isMonday
}

declare module 'date-fns/isPast' {
  import { isPast } from 'date-fns'
  export default isPast
}

declare module 'date-fns/isSameDay' {
  import { isSameDay } from 'date-fns'
  export default isSameDay
}

declare module 'date-fns/isSameHour' {
  import { isSameHour } from 'date-fns'
  export default isSameHour
}

declare module 'date-fns/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns'
  export default isSameISOWeek
}

declare module 'date-fns/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns'
  export default isSameISOWeekYear
}

declare module 'date-fns/isSameMinute' {
  import { isSameMinute } from 'date-fns'
  export default isSameMinute
}

declare module 'date-fns/isSameMonth' {
  import { isSameMonth } from 'date-fns'
  export default isSameMonth
}

declare module 'date-fns/isSameQuarter' {
  import { isSameQuarter } from 'date-fns'
  export default isSameQuarter
}

declare module 'date-fns/isSameSecond' {
  import { isSameSecond } from 'date-fns'
  export default isSameSecond
}

declare module 'date-fns/isSameWeek' {
  import { isSameWeek } from 'date-fns'
  export default isSameWeek
}

declare module 'date-fns/isSameYear' {
  import { isSameYear } from 'date-fns'
  export default isSameYear
}

declare module 'date-fns/isSaturday' {
  import { isSaturday } from 'date-fns'
  export default isSaturday
}

declare module 'date-fns/isSunday' {
  import { isSunday } from 'date-fns'
  export default isSunday
}

declare module 'date-fns/isThisHour' {
  import { isThisHour } from 'date-fns'
  export default isThisHour
}

declare module 'date-fns/isThisISOWeek' {
  import { isThisISOWeek } from 'date-fns'
  export default isThisISOWeek
}

declare module 'date-fns/isThisMinute' {
  import { isThisMinute } from 'date-fns'
  export default isThisMinute
}

declare module 'date-fns/isThisMonth' {
  import { isThisMonth } from 'date-fns'
  export default isThisMonth
}

declare module 'date-fns/isThisQuarter' {
  import { isThisQuarter } from 'date-fns'
  export default isThisQuarter
}

declare module 'date-fns/isThisSecond' {
  import { isThisSecond } from 'date-fns'
  export default isThisSecond
}

declare module 'date-fns/isThisWeek' {
  import { isThisWeek } from 'date-fns'
  export default isThisWeek
}

declare module 'date-fns/isThisYear' {
  import { isThisYear } from 'date-fns'
  export default isThisYear
}

declare module 'date-fns/isThursday' {
  import { isThursday } from 'date-fns'
  export default isThursday
}

declare module 'date-fns/isToday' {
  import { isToday } from 'date-fns'
  export default isToday
}

declare module 'date-fns/isTomorrow' {
  import { isTomorrow } from 'date-fns'
  export default isTomorrow
}

declare module 'date-fns/isTuesday' {
  import { isTuesday } from 'date-fns'
  export default isTuesday
}

declare module 'date-fns/isValid' {
  import { isValid } from 'date-fns'
  export default isValid
}

declare module 'date-fns/isWednesday' {
  import { isWednesday } from 'date-fns'
  export default isWednesday
}

declare module 'date-fns/isWeekend' {
  import { isWeekend } from 'date-fns'
  export default isWeekend
}

declare module 'date-fns/isWithinInterval' {
  import { isWithinInterval } from 'date-fns'
  export default isWithinInterval
}

declare module 'date-fns/isYesterday' {
  import { isYesterday } from 'date-fns'
  export default isYesterday
}

declare module 'date-fns/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns'
  export default lastDayOfDecade
}

declare module 'date-fns/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns'
  export default lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns'
  export default lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns'
  export default lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns'
  export default lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns'
  export default lastDayOfYear
}

declare module 'date-fns/lightFormat' {
  import { lightFormat } from 'date-fns'
  export default lightFormat
}

declare module 'date-fns/max' {
  import { max } from 'date-fns'
  export default max
}

declare module 'date-fns/min' {
  import { min } from 'date-fns'
  export default min
}

declare module 'date-fns/parse' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns'
  export default roundToNearestMinutes
}

declare module 'date-fns/setDate' {
  import { setDate } from 'date-fns'
  export default setDate
}

declare module 'date-fns/setDay' {
  import { setDay } from 'date-fns'
  export default setDay
}

declare module 'date-fns/setDayOfYear' {
  import { setDayOfYear } from 'date-fns'
  export default setDayOfYear
}

declare module 'date-fns/setHours' {
  import { setHours } from 'date-fns'
  export default setHours
}

declare module 'date-fns/setISODay' {
  import { setISODay } from 'date-fns'
  export default setISODay
}

declare module 'date-fns/setISOWeek' {
  import { setISOWeek } from 'date-fns'
  export default setISOWeek
}

declare module 'date-fns/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns'
  export default setISOWeekYear
}

declare module 'date-fns/setMilliseconds' {
  import { setMilliseconds } from 'date-fns'
  export default setMilliseconds
}

declare module 'date-fns/setMinutes' {
  import { setMinutes } from 'date-fns'
  export default setMinutes
}

declare module 'date-fns/setMonth' {
  import { setMonth } from 'date-fns'
  export default setMonth
}

declare module 'date-fns/setQuarter' {
  import { setQuarter } from 'date-fns'
  export default setQuarter
}

declare module 'date-fns/setSeconds' {
  import { setSeconds } from 'date-fns'
  export default setSeconds
}

declare module 'date-fns/setWeek' {
  import { setWeek } from 'date-fns'
  export default setWeek
}

declare module 'date-fns/setWeekYear' {
  import { setWeekYear } from 'date-fns'
  export default setWeekYear
}

declare module 'date-fns/setYear' {
  import { setYear } from 'date-fns'
  export default setYear
}

declare module 'date-fns/startOfDay' {
  import { startOfDay } from 'date-fns'
  export default startOfDay
}

declare module 'date-fns/startOfDecade' {
  import { startOfDecade } from 'date-fns'
  export default startOfDecade
}

declare module 'date-fns/startOfHour' {
  import { startOfHour } from 'date-fns'
  export default startOfHour
}

declare module 'date-fns/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns'
  export default startOfISOWeek
}

declare module 'date-fns/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns'
  export default startOfISOWeekYear
}

declare module 'date-fns/startOfMinute' {
  import { startOfMinute } from 'date-fns'
  export default startOfMinute
}

declare module 'date-fns/startOfMonth' {
  import { startOfMonth } from 'date-fns'
  export default startOfMonth
}

declare module 'date-fns/startOfQuarter' {
  import { startOfQuarter } from 'date-fns'
  export default startOfQuarter
}

declare module 'date-fns/startOfSecond' {
  import { startOfSecond } from 'date-fns'
  export default startOfSecond
}

declare module 'date-fns/startOfToday' {
  import { startOfToday } from 'date-fns'
  export default startOfToday
}

declare module 'date-fns/startOfTomorrow' {
  import { startOfTomorrow } from 'date-fns'
  export default startOfTomorrow
}

declare module 'date-fns/startOfWeek' {
  import { startOfWeek } from 'date-fns'
  export default startOfWeek
}

declare module 'date-fns/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns'
  export default startOfWeekYear
}

declare module 'date-fns/startOfYear' {
  import { startOfYear } from 'date-fns'
  export default startOfYear
}

declare module 'date-fns/startOfYesterday' {
  import { startOfYesterday } from 'date-fns'
  export default startOfYesterday
}

declare module 'date-fns/subDays' {
  import { subDays } from 'date-fns'
  export default subDays
}

declare module 'date-fns/subHours' {
  import { subHours } from 'date-fns'
  export default subHours
}

declare module 'date-fns/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns'
  export default subISOWeekYears
}

declare module 'date-fns/subMilliseconds' {
  import { subMilliseconds } from 'date-fns'
  export default subMilliseconds
}

declare module 'date-fns/subMinutes' {
  import { subMinutes } from 'date-fns'
  export default subMinutes
}

declare module 'date-fns/subMonths' {
  import { subMonths } from 'date-fns'
  export default subMonths
}

declare module 'date-fns/subQuarters' {
  import { subQuarters } from 'date-fns'
  export default subQuarters
}

declare module 'date-fns/subSeconds' {
  import { subSeconds } from 'date-fns'
  export default subSeconds
}

declare module 'date-fns/subWeeks' {
  import { subWeeks } from 'date-fns'
  export default subWeeks
}

declare module 'date-fns/subYears' {
  import { subYears } from 'date-fns'
  export default subYears
}

declare module 'date-fns/toDate' {
  import { toDate } from 'date-fns'
  export default toDate
}

declare module 'date-fns/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns'
  export default addBusinessDays
}

declare module 'date-fns/addDays/index' {
  import { addDays } from 'date-fns'
  export default addDays
}

declare module 'date-fns/addHours/index' {
  import { addHours } from 'date-fns'
  export default addHours
}

declare module 'date-fns/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns'
  export default addISOWeekYears
}

declare module 'date-fns/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns'
  export default addMilliseconds
}

declare module 'date-fns/addMinutes/index' {
  import { addMinutes } from 'date-fns'
  export default addMinutes
}

declare module 'date-fns/addMonths/index' {
  import { addMonths } from 'date-fns'
  export default addMonths
}

declare module 'date-fns/addQuarters/index' {
  import { addQuarters } from 'date-fns'
  export default addQuarters
}

declare module 'date-fns/addSeconds/index' {
  import { addSeconds } from 'date-fns'
  export default addSeconds
}

declare module 'date-fns/addWeeks/index' {
  import { addWeeks } from 'date-fns'
  export default addWeeks
}

declare module 'date-fns/addYears/index' {
  import { addYears } from 'date-fns'
  export default addYears
}

declare module 'date-fns/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns'
  export default areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns'
  export default closestIndexTo
}

declare module 'date-fns/closestTo/index' {
  import { closestTo } from 'date-fns'
  export default closestTo
}

declare module 'date-fns/compareAsc/index' {
  import { compareAsc } from 'date-fns'
  export default compareAsc
}

declare module 'date-fns/compareDesc/index' {
  import { compareDesc } from 'date-fns'
  export default compareDesc
}

declare module 'date-fns/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns'
  export default differenceInBusinessDays
}

declare module 'date-fns/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns'
  export default differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns'
  export default differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns'
  export default differenceInCalendarYears
}

declare module 'date-fns/differenceInDays/index' {
  import { differenceInDays } from 'date-fns'
  export default differenceInDays
}

declare module 'date-fns/differenceInHours/index' {
  import { differenceInHours } from 'date-fns'
  export default differenceInHours
}

declare module 'date-fns/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns'
  export default differenceInISOWeekYears
}

declare module 'date-fns/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns'
  export default differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns'
  export default differenceInMinutes
}

declare module 'date-fns/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns'
  export default differenceInMonths
}

declare module 'date-fns/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns'
  export default differenceInQuarters
}

declare module 'date-fns/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns'
  export default differenceInSeconds
}

declare module 'date-fns/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns'
  export default differenceInWeeks
}

declare module 'date-fns/differenceInYears/index' {
  import { differenceInYears } from 'date-fns'
  export default differenceInYears
}

declare module 'date-fns/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns'
  export default eachDayOfInterval
}

declare module 'date-fns/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns'
  export default eachWeekendOfInterval
}

declare module 'date-fns/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns'
  export default eachWeekendOfMonth
}

declare module 'date-fns/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns'
  export default eachWeekendOfYear
}

declare module 'date-fns/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns'
  export default eachWeekOfInterval
}

declare module 'date-fns/endOfDay/index' {
  import { endOfDay } from 'date-fns'
  export default endOfDay
}

declare module 'date-fns/endOfDecade/index' {
  import { endOfDecade } from 'date-fns'
  export default endOfDecade
}

declare module 'date-fns/endOfHour/index' {
  import { endOfHour } from 'date-fns'
  export default endOfHour
}

declare module 'date-fns/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns'
  export default endOfISOWeek
}

declare module 'date-fns/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns'
  export default endOfISOWeekYear
}

declare module 'date-fns/endOfMinute/index' {
  import { endOfMinute } from 'date-fns'
  export default endOfMinute
}

declare module 'date-fns/endOfMonth/index' {
  import { endOfMonth } from 'date-fns'
  export default endOfMonth
}

declare module 'date-fns/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns'
  export default endOfQuarter
}

declare module 'date-fns/endOfSecond/index' {
  import { endOfSecond } from 'date-fns'
  export default endOfSecond
}

declare module 'date-fns/endOfToday/index' {
  import { endOfToday } from 'date-fns'
  export default endOfToday
}

declare module 'date-fns/endOfTomorrow/index' {
  import { endOfTomorrow } from 'date-fns'
  export default endOfTomorrow
}

declare module 'date-fns/endOfWeek/index' {
  import { endOfWeek } from 'date-fns'
  export default endOfWeek
}

declare module 'date-fns/endOfYear/index' {
  import { endOfYear } from 'date-fns'
  export default endOfYear
}

declare module 'date-fns/endOfYesterday/index' {
  import { endOfYesterday } from 'date-fns'
  export default endOfYesterday
}

declare module 'date-fns/format/index' {
  import { format } from 'date-fns'
  export default format
}

declare module 'date-fns/formatDistance/index' {
  import { formatDistance } from 'date-fns'
  export default formatDistance
}

declare module 'date-fns/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns'
  export default formatDistanceStrict
}

declare module 'date-fns/formatDistanceToNow/index' {
  import { formatDistanceToNow } from 'date-fns'
  export default formatDistanceToNow
}

declare module 'date-fns/formatRelative/index' {
  import { formatRelative } from 'date-fns'
  export default formatRelative
}

declare module 'date-fns/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns'
  export default fromUnixTime
}

declare module 'date-fns/getDate/index' {
  import { getDate } from 'date-fns'
  export default getDate
}

declare module 'date-fns/getDay/index' {
  import { getDay } from 'date-fns'
  export default getDay
}

declare module 'date-fns/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns'
  export default getDayOfYear
}

declare module 'date-fns/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns'
  export default getDaysInMonth
}

declare module 'date-fns/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns'
  export default getDaysInYear
}

declare module 'date-fns/getDecade/index' {
  import { getDecade } from 'date-fns'
  export default getDecade
}

declare module 'date-fns/getHours/index' {
  import { getHours } from 'date-fns'
  export default getHours
}

declare module 'date-fns/getISODay/index' {
  import { getISODay } from 'date-fns'
  export default getISODay
}

declare module 'date-fns/getISOWeek/index' {
  import { getISOWeek } from 'date-fns'
  export default getISOWeek
}

declare module 'date-fns/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns'
  export default getISOWeeksInYear
}

declare module 'date-fns/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns'
  export default getISOWeekYear
}

declare module 'date-fns/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns'
  export default getMilliseconds
}

declare module 'date-fns/getMinutes/index' {
  import { getMinutes } from 'date-fns'
  export default getMinutes
}

declare module 'date-fns/getMonth/index' {
  import { getMonth } from 'date-fns'
  export default getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter/index' {
  import { getQuarter } from 'date-fns'
  export default getQuarter
}

declare module 'date-fns/getSeconds/index' {
  import { getSeconds } from 'date-fns'
  export default getSeconds
}

declare module 'date-fns/getTime/index' {
  import { getTime } from 'date-fns'
  export default getTime
}

declare module 'date-fns/getUnixTime/index' {
  import { getUnixTime } from 'date-fns'
  export default getUnixTime
}

declare module 'date-fns/getWeek/index' {
  import { getWeek } from 'date-fns'
  export default getWeek
}

declare module 'date-fns/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns'
  export default getWeekOfMonth
}

declare module 'date-fns/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns'
  export default getWeeksInMonth
}

declare module 'date-fns/getWeekYear/index' {
  import { getWeekYear } from 'date-fns'
  export default getWeekYear
}

declare module 'date-fns/getYear/index' {
  import { getYear } from 'date-fns'
  export default getYear
}

declare module 'date-fns/isAfter/index' {
  import { isAfter } from 'date-fns'
  export default isAfter
}

declare module 'date-fns/isBefore/index' {
  import { isBefore } from 'date-fns'
  export default isBefore
}

declare module 'date-fns/isDate/index' {
  import { isDate } from 'date-fns'
  export default isDate
}

declare module 'date-fns/isEqual/index' {
  import { isEqual } from 'date-fns'
  export default isEqual
}

declare module 'date-fns/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns'
  export default isFirstDayOfMonth
}

declare module 'date-fns/isFriday/index' {
  import { isFriday } from 'date-fns'
  export default isFriday
}

declare module 'date-fns/isFuture/index' {
  import { isFuture } from 'date-fns'
  export default isFuture
}

declare module 'date-fns/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns'
  export default isLastDayOfMonth
}

declare module 'date-fns/isLeapYear/index' {
  import { isLeapYear } from 'date-fns'
  export default isLeapYear
}

declare module 'date-fns/isMonday/index' {
  import { isMonday } from 'date-fns'
  export default isMonday
}

declare module 'date-fns/isPast/index' {
  import { isPast } from 'date-fns'
  export default isPast
}

declare module 'date-fns/isSameDay/index' {
  import { isSameDay } from 'date-fns'
  export default isSameDay
}

declare module 'date-fns/isSameHour/index' {
  import { isSameHour } from 'date-fns'
  export default isSameHour
}

declare module 'date-fns/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns'
  export default isSameISOWeek
}

declare module 'date-fns/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns'
  export default isSameISOWeekYear
}

declare module 'date-fns/isSameMinute/index' {
  import { isSameMinute } from 'date-fns'
  export default isSameMinute
}

declare module 'date-fns/isSameMonth/index' {
  import { isSameMonth } from 'date-fns'
  export default isSameMonth
}

declare module 'date-fns/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns'
  export default isSameQuarter
}

declare module 'date-fns/isSameSecond/index' {
  import { isSameSecond } from 'date-fns'
  export default isSameSecond
}

declare module 'date-fns/isSameWeek/index' {
  import { isSameWeek } from 'date-fns'
  export default isSameWeek
}

declare module 'date-fns/isSameYear/index' {
  import { isSameYear } from 'date-fns'
  export default isSameYear
}

declare module 'date-fns/isSaturday/index' {
  import { isSaturday } from 'date-fns'
  export default isSaturday
}

declare module 'date-fns/isSunday/index' {
  import { isSunday } from 'date-fns'
  export default isSunday
}

declare module 'date-fns/isThisHour/index' {
  import { isThisHour } from 'date-fns'
  export default isThisHour
}

declare module 'date-fns/isThisISOWeek/index' {
  import { isThisISOWeek } from 'date-fns'
  export default isThisISOWeek
}

declare module 'date-fns/isThisMinute/index' {
  import { isThisMinute } from 'date-fns'
  export default isThisMinute
}

declare module 'date-fns/isThisMonth/index' {
  import { isThisMonth } from 'date-fns'
  export default isThisMonth
}

declare module 'date-fns/isThisQuarter/index' {
  import { isThisQuarter } from 'date-fns'
  export default isThisQuarter
}

declare module 'date-fns/isThisSecond/index' {
  import { isThisSecond } from 'date-fns'
  export default isThisSecond
}

declare module 'date-fns/isThisWeek/index' {
  import { isThisWeek } from 'date-fns'
  export default isThisWeek
}

declare module 'date-fns/isThisYear/index' {
  import { isThisYear } from 'date-fns'
  export default isThisYear
}

declare module 'date-fns/isThursday/index' {
  import { isThursday } from 'date-fns'
  export default isThursday
}

declare module 'date-fns/isToday/index' {
  import { isToday } from 'date-fns'
  export default isToday
}

declare module 'date-fns/isTomorrow/index' {
  import { isTomorrow } from 'date-fns'
  export default isTomorrow
}

declare module 'date-fns/isTuesday/index' {
  import { isTuesday } from 'date-fns'
  export default isTuesday
}

declare module 'date-fns/isValid/index' {
  import { isValid } from 'date-fns'
  export default isValid
}

declare module 'date-fns/isWednesday/index' {
  import { isWednesday } from 'date-fns'
  export default isWednesday
}

declare module 'date-fns/isWeekend/index' {
  import { isWeekend } from 'date-fns'
  export default isWeekend
}

declare module 'date-fns/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns'
  export default isWithinInterval
}

declare module 'date-fns/isYesterday/index' {
  import { isYesterday } from 'date-fns'
  export default isYesterday
}

declare module 'date-fns/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns'
  export default lastDayOfDecade
}

declare module 'date-fns/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns'
  export default lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns'
  export default lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns'
  export default lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns'
  export default lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns'
  export default lastDayOfYear
}

declare module 'date-fns/lightFormat/index' {
  import { lightFormat } from 'date-fns'
  export default lightFormat
}

declare module 'date-fns/max/index' {
  import { max } from 'date-fns'
  export default max
}

declare module 'date-fns/min/index' {
  import { min } from 'date-fns'
  export default min
}

declare module 'date-fns/parse/index' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO/index' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns'
  export default roundToNearestMinutes
}

declare module 'date-fns/setDate/index' {
  import { setDate } from 'date-fns'
  export default setDate
}

declare module 'date-fns/setDay/index' {
  import { setDay } from 'date-fns'
  export default setDay
}

declare module 'date-fns/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns'
  export default setDayOfYear
}

declare module 'date-fns/setHours/index' {
  import { setHours } from 'date-fns'
  export default setHours
}

declare module 'date-fns/setISODay/index' {
  import { setISODay } from 'date-fns'
  export default setISODay
}

declare module 'date-fns/setISOWeek/index' {
  import { setISOWeek } from 'date-fns'
  export default setISOWeek
}

declare module 'date-fns/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns'
  export default setISOWeekYear
}

declare module 'date-fns/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns'
  export default setMilliseconds
}

declare module 'date-fns/setMinutes/index' {
  import { setMinutes } from 'date-fns'
  export default setMinutes
}

declare module 'date-fns/setMonth/index' {
  import { setMonth } from 'date-fns'
  export default setMonth
}

declare module 'date-fns/setQuarter/index' {
  import { setQuarter } from 'date-fns'
  export default setQuarter
}

declare module 'date-fns/setSeconds/index' {
  import { setSeconds } from 'date-fns'
  export default setSeconds
}

declare module 'date-fns/setWeek/index' {
  import { setWeek } from 'date-fns'
  export default setWeek
}

declare module 'date-fns/setWeekYear/index' {
  import { setWeekYear } from 'date-fns'
  export default setWeekYear
}

declare module 'date-fns/setYear/index' {
  import { setYear } from 'date-fns'
  export default setYear
}

declare module 'date-fns/startOfDay/index' {
  import { startOfDay } from 'date-fns'
  export default startOfDay
}

declare module 'date-fns/startOfDecade/index' {
  import { startOfDecade } from 'date-fns'
  export default startOfDecade
}

declare module 'date-fns/startOfHour/index' {
  import { startOfHour } from 'date-fns'
  export default startOfHour
}

declare module 'date-fns/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns'
  export default startOfISOWeek
}

declare module 'date-fns/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns'
  export default startOfISOWeekYear
}

declare module 'date-fns/startOfMinute/index' {
  import { startOfMinute } from 'date-fns'
  export default startOfMinute
}

declare module 'date-fns/startOfMonth/index' {
  import { startOfMonth } from 'date-fns'
  export default startOfMonth
}

declare module 'date-fns/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns'
  export default startOfQuarter
}

declare module 'date-fns/startOfSecond/index' {
  import { startOfSecond } from 'date-fns'
  export default startOfSecond
}

declare module 'date-fns/startOfToday/index' {
  import { startOfToday } from 'date-fns'
  export default startOfToday
}

declare module 'date-fns/startOfTomorrow/index' {
  import { startOfTomorrow } from 'date-fns'
  export default startOfTomorrow
}

declare module 'date-fns/startOfWeek/index' {
  import { startOfWeek } from 'date-fns'
  export default startOfWeek
}

declare module 'date-fns/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns'
  export default startOfWeekYear
}

declare module 'date-fns/startOfYear/index' {
  import { startOfYear } from 'date-fns'
  export default startOfYear
}

declare module 'date-fns/startOfYesterday/index' {
  import { startOfYesterday } from 'date-fns'
  export default startOfYesterday
}

declare module 'date-fns/subDays/index' {
  import { subDays } from 'date-fns'
  export default subDays
}

declare module 'date-fns/subHours/index' {
  import { subHours } from 'date-fns'
  export default subHours
}

declare module 'date-fns/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns'
  export default subISOWeekYears
}

declare module 'date-fns/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns'
  export default subMilliseconds
}

declare module 'date-fns/subMinutes/index' {
  import { subMinutes } from 'date-fns'
  export default subMinutes
}

declare module 'date-fns/subMonths/index' {
  import { subMonths } from 'date-fns'
  export default subMonths
}

declare module 'date-fns/subQuarters/index' {
  import { subQuarters } from 'date-fns'
  export default subQuarters
}

declare module 'date-fns/subSeconds/index' {
  import { subSeconds } from 'date-fns'
  export default subSeconds
}

declare module 'date-fns/subWeeks/index' {
  import { subWeeks } from 'date-fns'
  export default subWeeks
}

declare module 'date-fns/subYears/index' {
  import { subYears } from 'date-fns'
  export default subYears
}

declare module 'date-fns/toDate/index' {
  import { toDate } from 'date-fns'
  export default toDate
}

declare module 'date-fns/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns'
  export default addBusinessDays
}

declare module 'date-fns/addDays/index.js' {
  import { addDays } from 'date-fns'
  export default addDays
}

declare module 'date-fns/addHours/index.js' {
  import { addHours } from 'date-fns'
  export default addHours
}

declare module 'date-fns/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns'
  export default addISOWeekYears
}

declare module 'date-fns/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns'
  export default addMilliseconds
}

declare module 'date-fns/addMinutes/index.js' {
  import { addMinutes } from 'date-fns'
  export default addMinutes
}

declare module 'date-fns/addMonths/index.js' {
  import { addMonths } from 'date-fns'
  export default addMonths
}

declare module 'date-fns/addQuarters/index.js' {
  import { addQuarters } from 'date-fns'
  export default addQuarters
}

declare module 'date-fns/addSeconds/index.js' {
  import { addSeconds } from 'date-fns'
  export default addSeconds
}

declare module 'date-fns/addWeeks/index.js' {
  import { addWeeks } from 'date-fns'
  export default addWeeks
}

declare module 'date-fns/addYears/index.js' {
  import { addYears } from 'date-fns'
  export default addYears
}

declare module 'date-fns/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns'
  export default areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns'
  export default closestIndexTo
}

declare module 'date-fns/closestTo/index.js' {
  import { closestTo } from 'date-fns'
  export default closestTo
}

declare module 'date-fns/compareAsc/index.js' {
  import { compareAsc } from 'date-fns'
  export default compareAsc
}

declare module 'date-fns/compareDesc/index.js' {
  import { compareDesc } from 'date-fns'
  export default compareDesc
}

declare module 'date-fns/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns'
  export default differenceInBusinessDays
}

declare module 'date-fns/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns'
  export default differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns'
  export default differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns'
  export default differenceInCalendarYears
}

declare module 'date-fns/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns'
  export default differenceInDays
}

declare module 'date-fns/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns'
  export default differenceInHours
}

declare module 'date-fns/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns'
  export default differenceInISOWeekYears
}

declare module 'date-fns/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns'
  export default differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns'
  export default differenceInMinutes
}

declare module 'date-fns/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns'
  export default differenceInMonths
}

declare module 'date-fns/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns'
  export default differenceInQuarters
}

declare module 'date-fns/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns'
  export default differenceInSeconds
}

declare module 'date-fns/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns'
  export default differenceInWeeks
}

declare module 'date-fns/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns'
  export default differenceInYears
}

declare module 'date-fns/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns'
  export default eachDayOfInterval
}

declare module 'date-fns/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns'
  export default eachWeekendOfInterval
}

declare module 'date-fns/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns'
  export default eachWeekendOfMonth
}

declare module 'date-fns/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns'
  export default eachWeekendOfYear
}

declare module 'date-fns/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns'
  export default eachWeekOfInterval
}

declare module 'date-fns/endOfDay/index.js' {
  import { endOfDay } from 'date-fns'
  export default endOfDay
}

declare module 'date-fns/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns'
  export default endOfDecade
}

declare module 'date-fns/endOfHour/index.js' {
  import { endOfHour } from 'date-fns'
  export default endOfHour
}

declare module 'date-fns/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns'
  export default endOfISOWeek
}

declare module 'date-fns/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns'
  export default endOfISOWeekYear
}

declare module 'date-fns/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns'
  export default endOfMinute
}

declare module 'date-fns/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns'
  export default endOfMonth
}

declare module 'date-fns/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns'
  export default endOfQuarter
}

declare module 'date-fns/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns'
  export default endOfSecond
}

declare module 'date-fns/endOfToday/index.js' {
  import { endOfToday } from 'date-fns'
  export default endOfToday
}

declare module 'date-fns/endOfTomorrow/index.js' {
  import { endOfTomorrow } from 'date-fns'
  export default endOfTomorrow
}

declare module 'date-fns/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns'
  export default endOfWeek
}

declare module 'date-fns/endOfYear/index.js' {
  import { endOfYear } from 'date-fns'
  export default endOfYear
}

declare module 'date-fns/endOfYesterday/index.js' {
  import { endOfYesterday } from 'date-fns'
  export default endOfYesterday
}

declare module 'date-fns/format/index.js' {
  import { format } from 'date-fns'
  export default format
}

declare module 'date-fns/formatDistance/index.js' {
  import { formatDistance } from 'date-fns'
  export default formatDistance
}

declare module 'date-fns/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns'
  export default formatDistanceStrict
}

declare module 'date-fns/formatDistanceToNow/index.js' {
  import { formatDistanceToNow } from 'date-fns'
  export default formatDistanceToNow
}

declare module 'date-fns/formatRelative/index.js' {
  import { formatRelative } from 'date-fns'
  export default formatRelative
}

declare module 'date-fns/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns'
  export default fromUnixTime
}

declare module 'date-fns/getDate/index.js' {
  import { getDate } from 'date-fns'
  export default getDate
}

declare module 'date-fns/getDay/index.js' {
  import { getDay } from 'date-fns'
  export default getDay
}

declare module 'date-fns/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns'
  export default getDayOfYear
}

declare module 'date-fns/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns'
  export default getDaysInMonth
}

declare module 'date-fns/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns'
  export default getDaysInYear
}

declare module 'date-fns/getDecade/index.js' {
  import { getDecade } from 'date-fns'
  export default getDecade
}

declare module 'date-fns/getHours/index.js' {
  import { getHours } from 'date-fns'
  export default getHours
}

declare module 'date-fns/getISODay/index.js' {
  import { getISODay } from 'date-fns'
  export default getISODay
}

declare module 'date-fns/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns'
  export default getISOWeek
}

declare module 'date-fns/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns'
  export default getISOWeeksInYear
}

declare module 'date-fns/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns'
  export default getISOWeekYear
}

declare module 'date-fns/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns'
  export default getMilliseconds
}

declare module 'date-fns/getMinutes/index.js' {
  import { getMinutes } from 'date-fns'
  export default getMinutes
}

declare module 'date-fns/getMonth/index.js' {
  import { getMonth } from 'date-fns'
  export default getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter/index.js' {
  import { getQuarter } from 'date-fns'
  export default getQuarter
}

declare module 'date-fns/getSeconds/index.js' {
  import { getSeconds } from 'date-fns'
  export default getSeconds
}

declare module 'date-fns/getTime/index.js' {
  import { getTime } from 'date-fns'
  export default getTime
}

declare module 'date-fns/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns'
  export default getUnixTime
}

declare module 'date-fns/getWeek/index.js' {
  import { getWeek } from 'date-fns'
  export default getWeek
}

declare module 'date-fns/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns'
  export default getWeekOfMonth
}

declare module 'date-fns/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns'
  export default getWeeksInMonth
}

declare module 'date-fns/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns'
  export default getWeekYear
}

declare module 'date-fns/getYear/index.js' {
  import { getYear } from 'date-fns'
  export default getYear
}

declare module 'date-fns/isAfter/index.js' {
  import { isAfter } from 'date-fns'
  export default isAfter
}

declare module 'date-fns/isBefore/index.js' {
  import { isBefore } from 'date-fns'
  export default isBefore
}

declare module 'date-fns/isDate/index.js' {
  import { isDate } from 'date-fns'
  export default isDate
}

declare module 'date-fns/isEqual/index.js' {
  import { isEqual } from 'date-fns'
  export default isEqual
}

declare module 'date-fns/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns'
  export default isFirstDayOfMonth
}

declare module 'date-fns/isFriday/index.js' {
  import { isFriday } from 'date-fns'
  export default isFriday
}

declare module 'date-fns/isFuture/index.js' {
  import { isFuture } from 'date-fns'
  export default isFuture
}

declare module 'date-fns/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns'
  export default isLastDayOfMonth
}

declare module 'date-fns/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns'
  export default isLeapYear
}

declare module 'date-fns/isMonday/index.js' {
  import { isMonday } from 'date-fns'
  export default isMonday
}

declare module 'date-fns/isPast/index.js' {
  import { isPast } from 'date-fns'
  export default isPast
}

declare module 'date-fns/isSameDay/index.js' {
  import { isSameDay } from 'date-fns'
  export default isSameDay
}

declare module 'date-fns/isSameHour/index.js' {
  import { isSameHour } from 'date-fns'
  export default isSameHour
}

declare module 'date-fns/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns'
  export default isSameISOWeek
}

declare module 'date-fns/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns'
  export default isSameISOWeekYear
}

declare module 'date-fns/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns'
  export default isSameMinute
}

declare module 'date-fns/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns'
  export default isSameMonth
}

declare module 'date-fns/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns'
  export default isSameQuarter
}

declare module 'date-fns/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns'
  export default isSameSecond
}

declare module 'date-fns/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns'
  export default isSameWeek
}

declare module 'date-fns/isSameYear/index.js' {
  import { isSameYear } from 'date-fns'
  export default isSameYear
}

declare module 'date-fns/isSaturday/index.js' {
  import { isSaturday } from 'date-fns'
  export default isSaturday
}

declare module 'date-fns/isSunday/index.js' {
  import { isSunday } from 'date-fns'
  export default isSunday
}

declare module 'date-fns/isThisHour/index.js' {
  import { isThisHour } from 'date-fns'
  export default isThisHour
}

declare module 'date-fns/isThisISOWeek/index.js' {
  import { isThisISOWeek } from 'date-fns'
  export default isThisISOWeek
}

declare module 'date-fns/isThisMinute/index.js' {
  import { isThisMinute } from 'date-fns'
  export default isThisMinute
}

declare module 'date-fns/isThisMonth/index.js' {
  import { isThisMonth } from 'date-fns'
  export default isThisMonth
}

declare module 'date-fns/isThisQuarter/index.js' {
  import { isThisQuarter } from 'date-fns'
  export default isThisQuarter
}

declare module 'date-fns/isThisSecond/index.js' {
  import { isThisSecond } from 'date-fns'
  export default isThisSecond
}

declare module 'date-fns/isThisWeek/index.js' {
  import { isThisWeek } from 'date-fns'
  export default isThisWeek
}

declare module 'date-fns/isThisYear/index.js' {
  import { isThisYear } from 'date-fns'
  export default isThisYear
}

declare module 'date-fns/isThursday/index.js' {
  import { isThursday } from 'date-fns'
  export default isThursday
}

declare module 'date-fns/isToday/index.js' {
  import { isToday } from 'date-fns'
  export default isToday
}

declare module 'date-fns/isTomorrow/index.js' {
  import { isTomorrow } from 'date-fns'
  export default isTomorrow
}

declare module 'date-fns/isTuesday/index.js' {
  import { isTuesday } from 'date-fns'
  export default isTuesday
}

declare module 'date-fns/isValid/index.js' {
  import { isValid } from 'date-fns'
  export default isValid
}

declare module 'date-fns/isWednesday/index.js' {
  import { isWednesday } from 'date-fns'
  export default isWednesday
}

declare module 'date-fns/isWeekend/index.js' {
  import { isWeekend } from 'date-fns'
  export default isWeekend
}

declare module 'date-fns/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns'
  export default isWithinInterval
}

declare module 'date-fns/isYesterday/index.js' {
  import { isYesterday } from 'date-fns'
  export default isYesterday
}

declare module 'date-fns/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns'
  export default lastDayOfDecade
}

declare module 'date-fns/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns'
  export default lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns'
  export default lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns'
  export default lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns'
  export default lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns'
  export default lastDayOfYear
}

declare module 'date-fns/lightFormat/index.js' {
  import { lightFormat } from 'date-fns'
  export default lightFormat
}

declare module 'date-fns/max/index.js' {
  import { max } from 'date-fns'
  export default max
}

declare module 'date-fns/min/index.js' {
  import { min } from 'date-fns'
  export default min
}

declare module 'date-fns/parse/index.js' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO/index.js' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns'
  export default roundToNearestMinutes
}

declare module 'date-fns/setDate/index.js' {
  import { setDate } from 'date-fns'
  export default setDate
}

declare module 'date-fns/setDay/index.js' {
  import { setDay } from 'date-fns'
  export default setDay
}

declare module 'date-fns/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns'
  export default setDayOfYear
}

declare module 'date-fns/setHours/index.js' {
  import { setHours } from 'date-fns'
  export default setHours
}

declare module 'date-fns/setISODay/index.js' {
  import { setISODay } from 'date-fns'
  export default setISODay
}

declare module 'date-fns/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns'
  export default setISOWeek
}

declare module 'date-fns/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns'
  export default setISOWeekYear
}

declare module 'date-fns/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns'
  export default setMilliseconds
}

declare module 'date-fns/setMinutes/index.js' {
  import { setMinutes } from 'date-fns'
  export default setMinutes
}

declare module 'date-fns/setMonth/index.js' {
  import { setMonth } from 'date-fns'
  export default setMonth
}

declare module 'date-fns/setQuarter/index.js' {
  import { setQuarter } from 'date-fns'
  export default setQuarter
}

declare module 'date-fns/setSeconds/index.js' {
  import { setSeconds } from 'date-fns'
  export default setSeconds
}

declare module 'date-fns/setWeek/index.js' {
  import { setWeek } from 'date-fns'
  export default setWeek
}

declare module 'date-fns/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns'
  export default setWeekYear
}

declare module 'date-fns/setYear/index.js' {
  import { setYear } from 'date-fns'
  export default setYear
}

declare module 'date-fns/startOfDay/index.js' {
  import { startOfDay } from 'date-fns'
  export default startOfDay
}

declare module 'date-fns/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns'
  export default startOfDecade
}

declare module 'date-fns/startOfHour/index.js' {
  import { startOfHour } from 'date-fns'
  export default startOfHour
}

declare module 'date-fns/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns'
  export default startOfISOWeek
}

declare module 'date-fns/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns'
  export default startOfISOWeekYear
}

declare module 'date-fns/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns'
  export default startOfMinute
}

declare module 'date-fns/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns'
  export default startOfMonth
}

declare module 'date-fns/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns'
  export default startOfQuarter
}

declare module 'date-fns/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns'
  export default startOfSecond
}

declare module 'date-fns/startOfToday/index.js' {
  import { startOfToday } from 'date-fns'
  export default startOfToday
}

declare module 'date-fns/startOfTomorrow/index.js' {
  import { startOfTomorrow } from 'date-fns'
  export default startOfTomorrow
}

declare module 'date-fns/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns'
  export default startOfWeek
}

declare module 'date-fns/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns'
  export default startOfWeekYear
}

declare module 'date-fns/startOfYear/index.js' {
  import { startOfYear } from 'date-fns'
  export default startOfYear
}

declare module 'date-fns/startOfYesterday/index.js' {
  import { startOfYesterday } from 'date-fns'
  export default startOfYesterday
}

declare module 'date-fns/subDays/index.js' {
  import { subDays } from 'date-fns'
  export default subDays
}

declare module 'date-fns/subHours/index.js' {
  import { subHours } from 'date-fns'
  export default subHours
}

declare module 'date-fns/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns'
  export default subISOWeekYears
}

declare module 'date-fns/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns'
  export default subMilliseconds
}

declare module 'date-fns/subMinutes/index.js' {
  import { subMinutes } from 'date-fns'
  export default subMinutes
}

declare module 'date-fns/subMonths/index.js' {
  import { subMonths } from 'date-fns'
  export default subMonths
}

declare module 'date-fns/subQuarters/index.js' {
  import { subQuarters } from 'date-fns'
  export default subQuarters
}

declare module 'date-fns/subSeconds/index.js' {
  import { subSeconds } from 'date-fns'
  export default subSeconds
}

declare module 'date-fns/subWeeks/index.js' {
  import { subWeeks } from 'date-fns'
  export default subWeeks
}

declare module 'date-fns/subYears/index.js' {
  import { subYears } from 'date-fns'
  export default subYears
}

declare module 'date-fns/toDate/index.js' {
  import { toDate } from 'date-fns'
  export default toDate
}

// FP Functions

declare module 'date-fns/fp' {
  const addBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace addBusinessDays {}

  const addDays: CurriedFn2<number, Date | number, Date>
  namespace addDays {}

  const addHours: CurriedFn2<number, Date | number, Date>
  namespace addHours {}

  const addISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace addISOWeekYears {}

  const addMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace addMilliseconds {}

  const addMinutes: CurriedFn2<number, Date | number, Date>
  namespace addMinutes {}

  const addMonths: CurriedFn2<number, Date | number, Date>
  namespace addMonths {}

  const addQuarters: CurriedFn2<number, Date | number, Date>
  namespace addQuarters {}

  const addSeconds: CurriedFn2<number, Date | number, Date>
  namespace addSeconds {}

  const addWeeks: CurriedFn2<number, Date | number, Date>
  namespace addWeeks {}

  const addYears: CurriedFn2<number, Date | number, Date>
  namespace addYears {}

  const areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  const closestIndexTo: CurriedFn2<(Date | number)[], Date | number, number>
  namespace closestIndexTo {}

  const closestTo: CurriedFn2<(Date | number)[], Date | number, Date>
  namespace closestTo {}

  const compareAsc: CurriedFn2<Date | number, Date | number, number>
  namespace compareAsc {}

  const compareDesc: CurriedFn2<Date | number, Date | number, number>
  namespace compareDesc {}

  const differenceInBusinessDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInBusinessDays {}

  const differenceInCalendarDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarDays {}

  const differenceInCalendarISOWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeeks {}

  const differenceInCalendarISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeekYears {}

  const differenceInCalendarMonths: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarMonths {}

  const differenceInCalendarQuarters: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarQuarters {}

  const differenceInCalendarWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeks {}

  const differenceInCalendarWeeksWithOptions: CurriedFn3<
    Object,
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeksWithOptions {}

  const differenceInCalendarYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarYears {}

  const differenceInDays: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInDays {}

  const differenceInHours: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInHours {}

  const differenceInISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInISOWeekYears {}

  const differenceInMilliseconds: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMilliseconds {}

  const differenceInMinutes: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMinutes {}

  const differenceInMonths: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMonths {}

  const differenceInQuarters: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInQuarters {}

  const differenceInSeconds: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInSeconds {}

  const differenceInWeeks: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInWeeks {}

  const differenceInYears: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInYears {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<Object, Interval, Date[]>
  namespace eachDayOfIntervalWithOptions {}

  const eachWeekendOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekendOfInterval {}

  const eachWeekendOfMonth: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfMonth {}

  const eachWeekendOfYear: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfYear {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<Object, Interval, Date[]>
  namespace eachWeekOfIntervalWithOptions {}

  const endOfDay: CurriedFn1<Date | number, Date>
  namespace endOfDay {}

  const endOfDecade: CurriedFn1<Date | number, Date>
  namespace endOfDecade {}

  const endOfDecadeWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace endOfDecadeWithOptions {}

  const endOfHour: CurriedFn1<Date | number, Date>
  namespace endOfHour {}

  const endOfISOWeek: CurriedFn1<Date | number, Date>
  namespace endOfISOWeek {}

  const endOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace endOfISOWeekYear {}

  const endOfMinute: CurriedFn1<Date | number, Date>
  namespace endOfMinute {}

  const endOfMonth: CurriedFn1<Date | number, Date>
  namespace endOfMonth {}

  const endOfQuarter: CurriedFn1<Date | number, Date>
  namespace endOfQuarter {}

  const endOfSecond: CurriedFn1<Date | number, Date>
  namespace endOfSecond {}

  const endOfWeek: CurriedFn1<Date | number, Date>
  namespace endOfWeek {}

  const endOfWeekWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace endOfWeekWithOptions {}

  const endOfYear: CurriedFn1<Date | number, Date>
  namespace endOfYear {}

  const format: CurriedFn2<string, Date | number, string>
  namespace format {}

  const formatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistance {}

  const formatDistanceStrict: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistanceStrict {}

  const formatDistanceStrictWithOptions: CurriedFn3<
    Object,
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<
    Object,
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceWithOptions {}

  const formatRelative: CurriedFn2<Date | number, Date | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<
    Object,
    Date | number,
    Date | number,
    string
  >
  namespace formatRelativeWithOptions {}

  const formatWithOptions: CurriedFn3<Object, string, Date | number, string>
  namespace formatWithOptions {}

  const fromUnixTime: CurriedFn1<number, Date>
  namespace fromUnixTime {}

  const getDate: CurriedFn1<Date | number, number>
  namespace getDate {}

  const getDay: CurriedFn1<Date | number, number>
  namespace getDay {}

  const getDayOfYear: CurriedFn1<Date | number, number>
  namespace getDayOfYear {}

  const getDaysInMonth: CurriedFn1<Date | number, number>
  namespace getDaysInMonth {}

  const getDaysInYear: CurriedFn1<Date | number, number>
  namespace getDaysInYear {}

  const getDecade: CurriedFn1<Date | number, number>
  namespace getDecade {}

  const getHours: CurriedFn1<Date | number, number>
  namespace getHours {}

  const getISODay: CurriedFn1<Date | number, number>
  namespace getISODay {}

  const getISOWeek: CurriedFn1<Date | number, number>
  namespace getISOWeek {}

  const getISOWeeksInYear: CurriedFn1<Date | number, number>
  namespace getISOWeeksInYear {}

  const getISOWeekYear: CurriedFn1<Date | number, number>
  namespace getISOWeekYear {}

  const getMilliseconds: CurriedFn1<Date | number, number>
  namespace getMilliseconds {}

  const getMinutes: CurriedFn1<Date | number, number>
  namespace getMinutes {}

  const getMonth: CurriedFn1<Date | number, number>
  namespace getMonth {}

  const getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  const getQuarter: CurriedFn1<Date | number, number>
  namespace getQuarter {}

  const getSeconds: CurriedFn1<Date | number, number>
  namespace getSeconds {}

  const getTime: CurriedFn1<Date | number, number>
  namespace getTime {}

  const getUnixTime: CurriedFn1<Date | number, number>
  namespace getUnixTime {}

  const getWeek: CurriedFn1<Date | number, number>
  namespace getWeek {}

  const getWeekOfMonth: CurriedFn1<Date | number, number>
  namespace getWeekOfMonth {}

  const getWeekOfMonthWithOptions: CurriedFn2<Object, Date | number, number>
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<Object, Date | number, number>
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<Object, Date | number, number>
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<Object, Date | number, number>
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | number, number>
  namespace getYear {}

  const isAfter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isAfter {}

  const isBefore: CurriedFn2<Date | number, Date | number, boolean>
  namespace isBefore {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isEqual: CurriedFn2<Date | number, Date | number, boolean>
  namespace isEqual {}

  const isFirstDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFriday: CurriedFn1<Date | number, boolean>
  namespace isFriday {}

  const isLastDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isLastDayOfMonth {}

  const isLeapYear: CurriedFn1<Date | number, boolean>
  namespace isLeapYear {}

  const isMonday: CurriedFn1<Date | number, boolean>
  namespace isMonday {}

  const isSameDay: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameDay {}

  const isSameHour: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameHour {}

  const isSameISOWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeek {}

  const isSameISOWeekYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeekYear {}

  const isSameMinute: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMinute {}

  const isSameMonth: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMonth {}

  const isSameQuarter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameQuarter {}

  const isSameSecond: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameSecond {}

  const isSameWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameWeek {}

  const isSameWeekWithOptions: CurriedFn3<
    Object,
    Date | number,
    Date | number,
    boolean
  >
  namespace isSameWeekWithOptions {}

  const isSameYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameYear {}

  const isSaturday: CurriedFn1<Date | number, boolean>
  namespace isSaturday {}

  const isSunday: CurriedFn1<Date | number, boolean>
  namespace isSunday {}

  const isThursday: CurriedFn1<Date | number, boolean>
  namespace isThursday {}

  const isTuesday: CurriedFn1<Date | number, boolean>
  namespace isTuesday {}

  const isValid: CurriedFn1<any, boolean>
  namespace isValid {}

  const isWednesday: CurriedFn1<Date | number, boolean>
  namespace isWednesday {}

  const isWeekend: CurriedFn1<Date | number, boolean>
  namespace isWeekend {}

  const isWithinInterval: CurriedFn2<Interval, Date | number, boolean>
  namespace isWithinInterval {}

  const lastDayOfDecade: CurriedFn1<Date | number, Date>
  namespace lastDayOfDecade {}

  const lastDayOfISOWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeek {}

  const lastDayOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeekYear {}

  const lastDayOfMonth: CurriedFn1<Date | number, Date>
  namespace lastDayOfMonth {}

  const lastDayOfQuarter: CurriedFn1<Date | number, Date>
  namespace lastDayOfQuarter {}

  const lastDayOfQuarterWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfYear {}

  const lightFormat: CurriedFn2<string, Date | number, string>
  namespace lightFormat {}

  const max: CurriedFn1<(Date | number)[], Date>
  namespace max {}

  const min: CurriedFn1<(Date | number)[], Date>
  namespace min {}

  const parse: CurriedFn3<Date | number, string, string, Date>
  namespace parse {}

  const parseISO: CurriedFn1<string, Date>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<Object, string, Date>
  namespace parseISOWithOptions {}

  const parseWithOptions: CurriedFn4<
    Object,
    Date | number,
    string,
    string,
    Date
  >
  namespace parseWithOptions {}

  const roundToNearestMinutes: CurriedFn1<Date | number, Date>
  namespace roundToNearestMinutes {}

  const roundToNearestMinutesWithOptions: CurriedFn2<
    Object,
    Date | number,
    Date
  >
  namespace roundToNearestMinutesWithOptions {}

  const setDate: CurriedFn2<number, Date | number, Date>
  namespace setDate {}

  const setDay: CurriedFn2<number, Date | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | number, Date>
  namespace setDayOfYear {}

  const setDayWithOptions: CurriedFn3<Object, number, Date | number, Date>
  namespace setDayWithOptions {}

  const setHours: CurriedFn2<number, Date | number, Date>
  namespace setHours {}

  const setISODay: CurriedFn2<number, Date | number, Date>
  namespace setISODay {}

  const setISOWeek: CurriedFn2<number, Date | number, Date>
  namespace setISOWeek {}

  const setISOWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setISOWeekYear {}

  const setMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace setMilliseconds {}

  const setMinutes: CurriedFn2<number, Date | number, Date>
  namespace setMinutes {}

  const setMonth: CurriedFn2<number, Date | number, Date>
  namespace setMonth {}

  const setQuarter: CurriedFn2<number, Date | number, Date>
  namespace setQuarter {}

  const setSeconds: CurriedFn2<number, Date | number, Date>
  namespace setSeconds {}

  const setWeek: CurriedFn2<number, Date | number, Date>
  namespace setWeek {}

  const setWeekWithOptions: CurriedFn3<Object, number, Date | number, Date>
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<Object, number, Date | number, Date>
  namespace setWeekYearWithOptions {}

  const setYear: CurriedFn2<number, Date | number, Date>
  namespace setYear {}

  const startOfDay: CurriedFn1<Date | number, Date>
  namespace startOfDay {}

  const startOfDecade: CurriedFn1<Date | number, Date>
  namespace startOfDecade {}

  const startOfHour: CurriedFn1<Date | number, Date>
  namespace startOfHour {}

  const startOfISOWeek: CurriedFn1<Date | number, Date>
  namespace startOfISOWeek {}

  const startOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfISOWeekYear {}

  const startOfMinute: CurriedFn1<Date | number, Date>
  namespace startOfMinute {}

  const startOfMonth: CurriedFn1<Date | number, Date>
  namespace startOfMonth {}

  const startOfQuarter: CurriedFn1<Date | number, Date>
  namespace startOfQuarter {}

  const startOfSecond: CurriedFn1<Date | number, Date>
  namespace startOfSecond {}

  const startOfWeek: CurriedFn1<Date | number, Date>
  namespace startOfWeek {}

  const startOfWeekWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | number, Date>
  namespace startOfYear {}

  const subDays: CurriedFn2<number, Date | number, Date>
  namespace subDays {}

  const subHours: CurriedFn2<number, Date | number, Date>
  namespace subHours {}

  const subISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace subISOWeekYears {}

  const subMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace subMilliseconds {}

  const subMinutes: CurriedFn2<number, Date | number, Date>
  namespace subMinutes {}

  const subMonths: CurriedFn2<number, Date | number, Date>
  namespace subMonths {}

  const subQuarters: CurriedFn2<number, Date | number, Date>
  namespace subQuarters {}

  const subSeconds: CurriedFn2<number, Date | number, Date>
  namespace subSeconds {}

  const subWeeks: CurriedFn2<number, Date | number, Date>
  namespace subWeeks {}

  const subYears: CurriedFn2<number, Date | number, Date>
  namespace subYears {}

  const toDate: CurriedFn1<Date | number, Date>
  namespace toDate {}

  const maxTime: number

  const minTime: number
}

declare module 'date-fns/fp/addBusinessDays' {
  import { addBusinessDays } from 'date-fns/fp'
  export = addBusinessDays
}

declare module 'date-fns/fp/addDays' {
  import { addDays } from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours' {
  import { addHours } from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns/fp'
  export = addISOWeekYears
}

declare module 'date-fns/fp/addMilliseconds' {
  import { addMilliseconds } from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes' {
  import { addMinutes } from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths' {
  import { addMonths } from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters' {
  import { addQuarters } from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds' {
  import { addSeconds } from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks' {
  import { addWeeks } from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears' {
  import { addYears } from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/closestIndexTo' {
  import { closestIndexTo } from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo' {
  import { closestTo } from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc' {
  import { compareAsc } from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc' {
  import { compareDesc } from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns/fp'
  export = differenceInBusinessDays
}

declare module 'date-fns/fp/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/fp'
  export = differenceInCalendarISOWeekYears
}

declare module 'date-fns/fp/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/fp'
  export = differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays' {
  import { differenceInDays } from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours' {
  import { differenceInHours } from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns/fp'
  export = differenceInISOWeekYears
}

declare module 'date-fns/fp/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths' {
  import { differenceInMonths } from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears' {
  import { differenceInYears } from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/fp'
  export = eachDayOfIntervalWithOptions
}

declare module 'date-fns/fp/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns/fp'
  export = eachWeekendOfInterval
}

declare module 'date-fns/fp/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns/fp'
  export = eachWeekendOfMonth
}

declare module 'date-fns/fp/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns/fp'
  export = eachWeekendOfYear
}

declare module 'date-fns/fp/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns/fp'
  export = eachWeekOfInterval
}

declare module 'date-fns/fp/eachWeekOfIntervalWithOptions' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/fp'
  export = eachWeekOfIntervalWithOptions
}

declare module 'date-fns/fp/endOfDay' {
  import { endOfDay } from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfDecade' {
  import { endOfDecade } from 'date-fns/fp'
  export = endOfDecade
}

declare module 'date-fns/fp/endOfDecadeWithOptions' {
  import { endOfDecadeWithOptions } from 'date-fns/fp'
  export = endOfDecadeWithOptions
}

declare module 'date-fns/fp/endOfHour' {
  import { endOfHour } from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns/fp'
  export = endOfISOWeekYear
}

declare module 'date-fns/fp/endOfMinute' {
  import { endOfMinute } from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth' {
  import { endOfMonth } from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter' {
  import { endOfQuarter } from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond' {
  import { endOfSecond } from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek' {
  import { endOfWeek } from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfWeekWithOptions' {
  import { endOfWeekWithOptions } from 'date-fns/fp'
  export = endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYear' {
  import { endOfYear } from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format' {
  import { format } from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/formatDistance' {
  import { formatDistance } from 'date-fns/fp'
  export = formatDistance
}

declare module 'date-fns/fp/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns/fp'
  export = formatDistanceStrict
}

declare module 'date-fns/fp/formatDistanceStrictWithOptions' {
  import { formatDistanceStrictWithOptions } from 'date-fns/fp'
  export = formatDistanceStrictWithOptions
}

declare module 'date-fns/fp/formatDistanceWithOptions' {
  import { formatDistanceWithOptions } from 'date-fns/fp'
  export = formatDistanceWithOptions
}

declare module 'date-fns/fp/formatRelative' {
  import { formatRelative } from 'date-fns/fp'
  export = formatRelative
}

declare module 'date-fns/fp/formatRelativeWithOptions' {
  import { formatRelativeWithOptions } from 'date-fns/fp'
  export = formatRelativeWithOptions
}

declare module 'date-fns/fp/formatWithOptions' {
  import { formatWithOptions } from 'date-fns/fp'
  export = formatWithOptions
}

declare module 'date-fns/fp/fromUnixTime' {
  import { fromUnixTime } from 'date-fns/fp'
  export = fromUnixTime
}

declare module 'date-fns/fp/getDate' {
  import { getDate } from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay' {
  import { getDay } from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear' {
  import { getDayOfYear } from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear' {
  import { getDaysInYear } from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getDecade' {
  import { getDecade } from 'date-fns/fp'
  export = getDecade
}

declare module 'date-fns/fp/getHours' {
  import { getHours } from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay' {
  import { getISODay } from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek' {
  import { getISOWeek } from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns/fp'
  export = getISOWeekYear
}

declare module 'date-fns/fp/getMilliseconds' {
  import { getMilliseconds } from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes' {
  import { getMinutes } from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth' {
  import { getMonth } from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarter' {
  import { getQuarter } from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds' {
  import { getSeconds } from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime' {
  import { getTime } from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getUnixTime' {
  import { getUnixTime } from 'date-fns/fp'
  export = getUnixTime
}

declare module 'date-fns/fp/getWeek' {
  import { getWeek } from 'date-fns/fp'
  export = getWeek
}

declare module 'date-fns/fp/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns/fp'
  export = getWeekOfMonth
}

declare module 'date-fns/fp/getWeekOfMonthWithOptions' {
  import { getWeekOfMonthWithOptions } from 'date-fns/fp'
  export = getWeekOfMonthWithOptions
}

declare module 'date-fns/fp/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns/fp'
  export = getWeeksInMonth
}

declare module 'date-fns/fp/getWeeksInMonthWithOptions' {
  import { getWeeksInMonthWithOptions } from 'date-fns/fp'
  export = getWeeksInMonthWithOptions
}

declare module 'date-fns/fp/getWeekWithOptions' {
  import { getWeekWithOptions } from 'date-fns/fp'
  export = getWeekWithOptions
}

declare module 'date-fns/fp/getWeekYear' {
  import { getWeekYear } from 'date-fns/fp'
  export = getWeekYear
}

declare module 'date-fns/fp/getWeekYearWithOptions' {
  import { getWeekYearWithOptions } from 'date-fns/fp'
  export = getWeekYearWithOptions
}

declare module 'date-fns/fp/getYear' {
  import { getYear } from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter' {
  import { isAfter } from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore' {
  import { isBefore } from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate' {
  import { isDate } from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual' {
  import { isEqual } from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday' {
  import { isFriday } from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear' {
  import { isLeapYear } from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday' {
  import { isMonday } from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay' {
  import { isSameDay } from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour' {
  import { isSameHour } from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns/fp'
  export = isSameISOWeekYear
}

declare module 'date-fns/fp/isSameMinute' {
  import { isSameMinute } from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth' {
  import { isSameMonth } from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter' {
  import { isSameQuarter } from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond' {
  import { isSameSecond } from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek' {
  import { isSameWeek } from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameWeekWithOptions' {
  import { isSameWeekWithOptions } from 'date-fns/fp'
  export = isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYear' {
  import { isSameYear } from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday' {
  import { isSaturday } from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday' {
  import { isSunday } from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday' {
  import { isThursday } from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday' {
  import { isTuesday } from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid' {
  import { isValid } from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday' {
  import { isWednesday } from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend' {
  import { isWeekend } from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinInterval' {
  import { isWithinInterval } from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns/fp'
  export = lastDayOfDecade
}

declare module 'date-fns/fp/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns/fp'
  export = lastDayOfISOWeekYear
}

declare module 'date-fns/fp/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/fp'
  export = lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions' {
  import { lastDayOfWeekWithOptions } from 'date-fns/fp'
  export = lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/lightFormat' {
  import { lightFormat } from 'date-fns/fp'
  export = lightFormat
}

declare module 'date-fns/fp/max' {
  import { max } from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min' {
  import { min } from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse' {
  import { parse } from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/parseISO' {
  import { parseISO } from 'date-fns/fp'
  export = parseISO
}

declare module 'date-fns/fp/parseISOWithOptions' {
  import { parseISOWithOptions } from 'date-fns/fp'
  export = parseISOWithOptions
}

declare module 'date-fns/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns/fp'
  export = parseWithOptions
}

declare module 'date-fns/fp/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns/fp'
  export = roundToNearestMinutes
}

declare module 'date-fns/fp/roundToNearestMinutesWithOptions' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/fp'
  export = roundToNearestMinutesWithOptions
}

declare module 'date-fns/fp/setDate' {
  import { setDate } from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay' {
  import { setDay } from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear' {
  import { setDayOfYear } from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setDayWithOptions' {
  import { setDayWithOptions } from 'date-fns/fp'
  export = setDayWithOptions
}

declare module 'date-fns/fp/setHours' {
  import { setHours } from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay' {
  import { setISODay } from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek' {
  import { setISOWeek } from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns/fp'
  export = setISOWeekYear
}

declare module 'date-fns/fp/setMilliseconds' {
  import { setMilliseconds } from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes' {
  import { setMinutes } from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth' {
  import { setMonth } from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter' {
  import { setQuarter } from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds' {
  import { setSeconds } from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setWeek' {
  import { setWeek } from 'date-fns/fp'
  export = setWeek
}

declare module 'date-fns/fp/setWeekWithOptions' {
  import { setWeekWithOptions } from 'date-fns/fp'
  export = setWeekWithOptions
}

declare module 'date-fns/fp/setWeekYear' {
  import { setWeekYear } from 'date-fns/fp'
  export = setWeekYear
}

declare module 'date-fns/fp/setWeekYearWithOptions' {
  import { setWeekYearWithOptions } from 'date-fns/fp'
  export = setWeekYearWithOptions
}

declare module 'date-fns/fp/setYear' {
  import { setYear } from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay' {
  import { startOfDay } from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfDecade' {
  import { startOfDecade } from 'date-fns/fp'
  export = startOfDecade
}

declare module 'date-fns/fp/startOfHour' {
  import { startOfHour } from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns/fp'
  export = startOfISOWeekYear
}

declare module 'date-fns/fp/startOfMinute' {
  import { startOfMinute } from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth' {
  import { startOfMonth } from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter' {
  import { startOfQuarter } from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond' {
  import { startOfSecond } from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek' {
  import { startOfWeek } from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfWeekWithOptions' {
  import { startOfWeekWithOptions } from 'date-fns/fp'
  export = startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns/fp'
  export = startOfWeekYear
}

declare module 'date-fns/fp/startOfWeekYearWithOptions' {
  import { startOfWeekYearWithOptions } from 'date-fns/fp'
  export = startOfWeekYearWithOptions
}

declare module 'date-fns/fp/startOfYear' {
  import { startOfYear } from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays' {
  import { subDays } from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours' {
  import { subHours } from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns/fp'
  export = subISOWeekYears
}

declare module 'date-fns/fp/subMilliseconds' {
  import { subMilliseconds } from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes' {
  import { subMinutes } from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths' {
  import { subMonths } from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters' {
  import { subQuarters } from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds' {
  import { subSeconds } from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks' {
  import { subWeeks } from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears' {
  import { subYears } from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate' {
  import { toDate } from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns/fp'
  export = addBusinessDays
}

declare module 'date-fns/fp/addDays/index' {
  import { addDays } from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours/index' {
  import { addHours } from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns/fp'
  export = addISOWeekYears
}

declare module 'date-fns/fp/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes/index' {
  import { addMinutes } from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths/index' {
  import { addMonths } from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters/index' {
  import { addQuarters } from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds/index' {
  import { addSeconds } from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks/index' {
  import { addWeeks } from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears/index' {
  import { addYears } from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo/index' {
  import { closestTo } from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc/index' {
  import { compareAsc } from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc/index' {
  import { compareDesc } from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns/fp'
  export = differenceInBusinessDays
}

declare module 'date-fns/fp/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/fp'
  export = differenceInCalendarISOWeekYears
}

declare module 'date-fns/fp/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions/index' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/fp'
  export = differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays/index' {
  import { differenceInDays } from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours/index' {
  import { differenceInHours } from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns/fp'
  export = differenceInISOWeekYears
}

declare module 'date-fns/fp/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears/index' {
  import { differenceInYears } from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions/index' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/fp'
  export = eachDayOfIntervalWithOptions
}

declare module 'date-fns/fp/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns/fp'
  export = eachWeekendOfInterval
}

declare module 'date-fns/fp/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns/fp'
  export = eachWeekendOfMonth
}

declare module 'date-fns/fp/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns/fp'
  export = eachWeekendOfYear
}

declare module 'date-fns/fp/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns/fp'
  export = eachWeekOfInterval
}

declare module 'date-fns/fp/eachWeekOfIntervalWithOptions/index' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/fp'
  export = eachWeekOfIntervalWithOptions
}

declare module 'date-fns/fp/endOfDay/index' {
  import { endOfDay } from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfDecade/index' {
  import { endOfDecade } from 'date-fns/fp'
  export = endOfDecade
}

declare module 'date-fns/fp/endOfDecadeWithOptions/index' {
  import { endOfDecadeWithOptions } from 'date-fns/fp'
  export = endOfDecadeWithOptions
}

declare module 'date-fns/fp/endOfHour/index' {
  import { endOfHour } from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns/fp'
  export = endOfISOWeekYear
}

declare module 'date-fns/fp/endOfMinute/index' {
  import { endOfMinute } from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth/index' {
  import { endOfMonth } from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond/index' {
  import { endOfSecond } from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek/index' {
  import { endOfWeek } from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfWeekWithOptions/index' {
  import { endOfWeekWithOptions } from 'date-fns/fp'
  export = endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYear/index' {
  import { endOfYear } from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format/index' {
  import { format } from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/formatDistance/index' {
  import { formatDistance } from 'date-fns/fp'
  export = formatDistance
}

declare module 'date-fns/fp/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns/fp'
  export = formatDistanceStrict
}

declare module 'date-fns/fp/formatDistanceStrictWithOptions/index' {
  import { formatDistanceStrictWithOptions } from 'date-fns/fp'
  export = formatDistanceStrictWithOptions
}

declare module 'date-fns/fp/formatDistanceWithOptions/index' {
  import { formatDistanceWithOptions } from 'date-fns/fp'
  export = formatDistanceWithOptions
}

declare module 'date-fns/fp/formatRelative/index' {
  import { formatRelative } from 'date-fns/fp'
  export = formatRelative
}

declare module 'date-fns/fp/formatRelativeWithOptions/index' {
  import { formatRelativeWithOptions } from 'date-fns/fp'
  export = formatRelativeWithOptions
}

declare module 'date-fns/fp/formatWithOptions/index' {
  import { formatWithOptions } from 'date-fns/fp'
  export = formatWithOptions
}

declare module 'date-fns/fp/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns/fp'
  export = fromUnixTime
}

declare module 'date-fns/fp/getDate/index' {
  import { getDate } from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay/index' {
  import { getDay } from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getDecade/index' {
  import { getDecade } from 'date-fns/fp'
  export = getDecade
}

declare module 'date-fns/fp/getHours/index' {
  import { getHours } from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay/index' {
  import { getISODay } from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek/index' {
  import { getISOWeek } from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns/fp'
  export = getISOWeekYear
}

declare module 'date-fns/fp/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes/index' {
  import { getMinutes } from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth/index' {
  import { getMonth } from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarter/index' {
  import { getQuarter } from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds/index' {
  import { getSeconds } from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime/index' {
  import { getTime } from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getUnixTime/index' {
  import { getUnixTime } from 'date-fns/fp'
  export = getUnixTime
}

declare module 'date-fns/fp/getWeek/index' {
  import { getWeek } from 'date-fns/fp'
  export = getWeek
}

declare module 'date-fns/fp/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns/fp'
  export = getWeekOfMonth
}

declare module 'date-fns/fp/getWeekOfMonthWithOptions/index' {
  import { getWeekOfMonthWithOptions } from 'date-fns/fp'
  export = getWeekOfMonthWithOptions
}

declare module 'date-fns/fp/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns/fp'
  export = getWeeksInMonth
}

declare module 'date-fns/fp/getWeeksInMonthWithOptions/index' {
  import { getWeeksInMonthWithOptions } from 'date-fns/fp'
  export = getWeeksInMonthWithOptions
}

declare module 'date-fns/fp/getWeekWithOptions/index' {
  import { getWeekWithOptions } from 'date-fns/fp'
  export = getWeekWithOptions
}

declare module 'date-fns/fp/getWeekYear/index' {
  import { getWeekYear } from 'date-fns/fp'
  export = getWeekYear
}

declare module 'date-fns/fp/getWeekYearWithOptions/index' {
  import { getWeekYearWithOptions } from 'date-fns/fp'
  export = getWeekYearWithOptions
}

declare module 'date-fns/fp/getYear/index' {
  import { getYear } from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter/index' {
  import { isAfter } from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore/index' {
  import { isBefore } from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate/index' {
  import { isDate } from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual/index' {
  import { isEqual } from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday/index' {
  import { isFriday } from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear/index' {
  import { isLeapYear } from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday/index' {
  import { isMonday } from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay/index' {
  import { isSameDay } from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour/index' {
  import { isSameHour } from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns/fp'
  export = isSameISOWeekYear
}

declare module 'date-fns/fp/isSameMinute/index' {
  import { isSameMinute } from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth/index' {
  import { isSameMonth } from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond/index' {
  import { isSameSecond } from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek/index' {
  import { isSameWeek } from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameWeekWithOptions/index' {
  import { isSameWeekWithOptions } from 'date-fns/fp'
  export = isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYear/index' {
  import { isSameYear } from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday/index' {
  import { isSaturday } from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday/index' {
  import { isSunday } from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday/index' {
  import { isThursday } from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday/index' {
  import { isTuesday } from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid/index' {
  import { isValid } from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday/index' {
  import { isWednesday } from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend/index' {
  import { isWeekend } from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns/fp'
  export = lastDayOfDecade
}

declare module 'date-fns/fp/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns/fp'
  export = lastDayOfISOWeekYear
}

declare module 'date-fns/fp/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions/index' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/fp'
  export = lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions/index' {
  import { lastDayOfWeekWithOptions } from 'date-fns/fp'
  export = lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/lightFormat/index' {
  import { lightFormat } from 'date-fns/fp'
  export = lightFormat
}

declare module 'date-fns/fp/max/index' {
  import { max } from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min/index' {
  import { min } from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse/index' {
  import { parse } from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/parseISO/index' {
  import { parseISO } from 'date-fns/fp'
  export = parseISO
}

declare module 'date-fns/fp/parseISOWithOptions/index' {
  import { parseISOWithOptions } from 'date-fns/fp'
  export = parseISOWithOptions
}

declare module 'date-fns/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns/fp'
  export = parseWithOptions
}

declare module 'date-fns/fp/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns/fp'
  export = roundToNearestMinutes
}

declare module 'date-fns/fp/roundToNearestMinutesWithOptions/index' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/fp'
  export = roundToNearestMinutesWithOptions
}

declare module 'date-fns/fp/setDate/index' {
  import { setDate } from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay/index' {
  import { setDay } from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setDayWithOptions/index' {
  import { setDayWithOptions } from 'date-fns/fp'
  export = setDayWithOptions
}

declare module 'date-fns/fp/setHours/index' {
  import { setHours } from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay/index' {
  import { setISODay } from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek/index' {
  import { setISOWeek } from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns/fp'
  export = setISOWeekYear
}

declare module 'date-fns/fp/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes/index' {
  import { setMinutes } from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth/index' {
  import { setMonth } from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter/index' {
  import { setQuarter } from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds/index' {
  import { setSeconds } from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setWeek/index' {
  import { setWeek } from 'date-fns/fp'
  export = setWeek
}

declare module 'date-fns/fp/setWeekWithOptions/index' {
  import { setWeekWithOptions } from 'date-fns/fp'
  export = setWeekWithOptions
}

declare module 'date-fns/fp/setWeekYear/index' {
  import { setWeekYear } from 'date-fns/fp'
  export = setWeekYear
}

declare module 'date-fns/fp/setWeekYearWithOptions/index' {
  import { setWeekYearWithOptions } from 'date-fns/fp'
  export = setWeekYearWithOptions
}

declare module 'date-fns/fp/setYear/index' {
  import { setYear } from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay/index' {
  import { startOfDay } from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfDecade/index' {
  import { startOfDecade } from 'date-fns/fp'
  export = startOfDecade
}

declare module 'date-fns/fp/startOfHour/index' {
  import { startOfHour } from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns/fp'
  export = startOfISOWeekYear
}

declare module 'date-fns/fp/startOfMinute/index' {
  import { startOfMinute } from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth/index' {
  import { startOfMonth } from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond/index' {
  import { startOfSecond } from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek/index' {
  import { startOfWeek } from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfWeekWithOptions/index' {
  import { startOfWeekWithOptions } from 'date-fns/fp'
  export = startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns/fp'
  export = startOfWeekYear
}

declare module 'date-fns/fp/startOfWeekYearWithOptions/index' {
  import { startOfWeekYearWithOptions } from 'date-fns/fp'
  export = startOfWeekYearWithOptions
}

declare module 'date-fns/fp/startOfYear/index' {
  import { startOfYear } from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays/index' {
  import { subDays } from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours/index' {
  import { subHours } from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns/fp'
  export = subISOWeekYears
}

declare module 'date-fns/fp/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes/index' {
  import { subMinutes } from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths/index' {
  import { subMonths } from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters/index' {
  import { subQuarters } from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds/index' {
  import { subSeconds } from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks/index' {
  import { subWeeks } from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears/index' {
  import { subYears } from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate/index' {
  import { toDate } from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns/fp'
  export = addBusinessDays
}

declare module 'date-fns/fp/addDays/index.js' {
  import { addDays } from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours/index.js' {
  import { addHours } from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns/fp'
  export = addISOWeekYears
}

declare module 'date-fns/fp/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes/index.js' {
  import { addMinutes } from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths/index.js' {
  import { addMonths } from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters/index.js' {
  import { addQuarters } from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds/index.js' {
  import { addSeconds } from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks/index.js' {
  import { addWeeks } from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears/index.js' {
  import { addYears } from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo/index.js' {
  import { closestTo } from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc/index.js' {
  import { compareAsc } from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc/index.js' {
  import { compareDesc } from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns/fp'
  export = differenceInBusinessDays
}

declare module 'date-fns/fp/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/fp'
  export = differenceInCalendarISOWeekYears
}

declare module 'date-fns/fp/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/fp'
  export = differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns/fp'
  export = differenceInISOWeekYears
}

declare module 'date-fns/fp/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions/index.js' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/fp'
  export = eachDayOfIntervalWithOptions
}

declare module 'date-fns/fp/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns/fp'
  export = eachWeekendOfInterval
}

declare module 'date-fns/fp/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns/fp'
  export = eachWeekendOfMonth
}

declare module 'date-fns/fp/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns/fp'
  export = eachWeekendOfYear
}

declare module 'date-fns/fp/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns/fp'
  export = eachWeekOfInterval
}

declare module 'date-fns/fp/eachWeekOfIntervalWithOptions/index.js' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/fp'
  export = eachWeekOfIntervalWithOptions
}

declare module 'date-fns/fp/endOfDay/index.js' {
  import { endOfDay } from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns/fp'
  export = endOfDecade
}

declare module 'date-fns/fp/endOfDecadeWithOptions/index.js' {
  import { endOfDecadeWithOptions } from 'date-fns/fp'
  export = endOfDecadeWithOptions
}

declare module 'date-fns/fp/endOfHour/index.js' {
  import { endOfHour } from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns/fp'
  export = endOfISOWeekYear
}

declare module 'date-fns/fp/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfWeekWithOptions/index.js' {
  import { endOfWeekWithOptions } from 'date-fns/fp'
  export = endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYear/index.js' {
  import { endOfYear } from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format/index.js' {
  import { format } from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/formatDistance/index.js' {
  import { formatDistance } from 'date-fns/fp'
  export = formatDistance
}

declare module 'date-fns/fp/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns/fp'
  export = formatDistanceStrict
}

declare module 'date-fns/fp/formatDistanceStrictWithOptions/index.js' {
  import { formatDistanceStrictWithOptions } from 'date-fns/fp'
  export = formatDistanceStrictWithOptions
}

declare module 'date-fns/fp/formatDistanceWithOptions/index.js' {
  import { formatDistanceWithOptions } from 'date-fns/fp'
  export = formatDistanceWithOptions
}

declare module 'date-fns/fp/formatRelative/index.js' {
  import { formatRelative } from 'date-fns/fp'
  export = formatRelative
}

declare module 'date-fns/fp/formatRelativeWithOptions/index.js' {
  import { formatRelativeWithOptions } from 'date-fns/fp'
  export = formatRelativeWithOptions
}

declare module 'date-fns/fp/formatWithOptions/index.js' {
  import { formatWithOptions } from 'date-fns/fp'
  export = formatWithOptions
}

declare module 'date-fns/fp/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns/fp'
  export = fromUnixTime
}

declare module 'date-fns/fp/getDate/index.js' {
  import { getDate } from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay/index.js' {
  import { getDay } from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getDecade/index.js' {
  import { getDecade } from 'date-fns/fp'
  export = getDecade
}

declare module 'date-fns/fp/getHours/index.js' {
  import { getHours } from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay/index.js' {
  import { getISODay } from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns/fp'
  export = getISOWeekYear
}

declare module 'date-fns/fp/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes/index.js' {
  import { getMinutes } from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth/index.js' {
  import { getMonth } from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarter/index.js' {
  import { getQuarter } from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds/index.js' {
  import { getSeconds } from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime/index.js' {
  import { getTime } from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns/fp'
  export = getUnixTime
}

declare module 'date-fns/fp/getWeek/index.js' {
  import { getWeek } from 'date-fns/fp'
  export = getWeek
}

declare module 'date-fns/fp/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns/fp'
  export = getWeekOfMonth
}

declare module 'date-fns/fp/getWeekOfMonthWithOptions/index.js' {
  import { getWeekOfMonthWithOptions } from 'date-fns/fp'
  export = getWeekOfMonthWithOptions
}

declare module 'date-fns/fp/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns/fp'
  export = getWeeksInMonth
}

declare module 'date-fns/fp/getWeeksInMonthWithOptions/index.js' {
  import { getWeeksInMonthWithOptions } from 'date-fns/fp'
  export = getWeeksInMonthWithOptions
}

declare module 'date-fns/fp/getWeekWithOptions/index.js' {
  import { getWeekWithOptions } from 'date-fns/fp'
  export = getWeekWithOptions
}

declare module 'date-fns/fp/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns/fp'
  export = getWeekYear
}

declare module 'date-fns/fp/getWeekYearWithOptions/index.js' {
  import { getWeekYearWithOptions } from 'date-fns/fp'
  export = getWeekYearWithOptions
}

declare module 'date-fns/fp/getYear/index.js' {
  import { getYear } from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter/index.js' {
  import { isAfter } from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore/index.js' {
  import { isBefore } from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate/index.js' {
  import { isDate } from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual/index.js' {
  import { isEqual } from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday/index.js' {
  import { isFriday } from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday/index.js' {
  import { isMonday } from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay/index.js' {
  import { isSameDay } from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour/index.js' {
  import { isSameHour } from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns/fp'
  export = isSameISOWeekYear
}

declare module 'date-fns/fp/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameWeekWithOptions/index.js' {
  import { isSameWeekWithOptions } from 'date-fns/fp'
  export = isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYear/index.js' {
  import { isSameYear } from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday/index.js' {
  import { isSaturday } from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday/index.js' {
  import { isSunday } from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday/index.js' {
  import { isThursday } from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday/index.js' {
  import { isTuesday } from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid/index.js' {
  import { isValid } from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday/index.js' {
  import { isWednesday } from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend/index.js' {
  import { isWeekend } from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns/fp'
  export = lastDayOfDecade
}

declare module 'date-fns/fp/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns/fp'
  export = lastDayOfISOWeekYear
}

declare module 'date-fns/fp/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions/index.js' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/fp'
  export = lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions/index.js' {
  import { lastDayOfWeekWithOptions } from 'date-fns/fp'
  export = lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/lightFormat/index.js' {
  import { lightFormat } from 'date-fns/fp'
  export = lightFormat
}

declare module 'date-fns/fp/max/index.js' {
  import { max } from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min/index.js' {
  import { min } from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse/index.js' {
  import { parse } from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/parseISO/index.js' {
  import { parseISO } from 'date-fns/fp'
  export = parseISO
}

declare module 'date-fns/fp/parseISOWithOptions/index.js' {
  import { parseISOWithOptions } from 'date-fns/fp'
  export = parseISOWithOptions
}

declare module 'date-fns/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns/fp'
  export = parseWithOptions
}

declare module 'date-fns/fp/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns/fp'
  export = roundToNearestMinutes
}

declare module 'date-fns/fp/roundToNearestMinutesWithOptions/index.js' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/fp'
  export = roundToNearestMinutesWithOptions
}

declare module 'date-fns/fp/setDate/index.js' {
  import { setDate } from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay/index.js' {
  import { setDay } from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setDayWithOptions/index.js' {
  import { setDayWithOptions } from 'date-fns/fp'
  export = setDayWithOptions
}

declare module 'date-fns/fp/setHours/index.js' {
  import { setHours } from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay/index.js' {
  import { setISODay } from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns/fp'
  export = setISOWeekYear
}

declare module 'date-fns/fp/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes/index.js' {
  import { setMinutes } from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth/index.js' {
  import { setMonth } from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter/index.js' {
  import { setQuarter } from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds/index.js' {
  import { setSeconds } from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setWeek/index.js' {
  import { setWeek } from 'date-fns/fp'
  export = setWeek
}

declare module 'date-fns/fp/setWeekWithOptions/index.js' {
  import { setWeekWithOptions } from 'date-fns/fp'
  export = setWeekWithOptions
}

declare module 'date-fns/fp/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns/fp'
  export = setWeekYear
}

declare module 'date-fns/fp/setWeekYearWithOptions/index.js' {
  import { setWeekYearWithOptions } from 'date-fns/fp'
  export = setWeekYearWithOptions
}

declare module 'date-fns/fp/setYear/index.js' {
  import { setYear } from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay/index.js' {
  import { startOfDay } from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns/fp'
  export = startOfDecade
}

declare module 'date-fns/fp/startOfHour/index.js' {
  import { startOfHour } from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns/fp'
  export = startOfISOWeekYear
}

declare module 'date-fns/fp/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfWeekWithOptions/index.js' {
  import { startOfWeekWithOptions } from 'date-fns/fp'
  export = startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns/fp'
  export = startOfWeekYear
}

declare module 'date-fns/fp/startOfWeekYearWithOptions/index.js' {
  import { startOfWeekYearWithOptions } from 'date-fns/fp'
  export = startOfWeekYearWithOptions
}

declare module 'date-fns/fp/startOfYear/index.js' {
  import { startOfYear } from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays/index.js' {
  import { subDays } from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours/index.js' {
  import { subHours } from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns/fp'
  export = subISOWeekYears
}

declare module 'date-fns/fp/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes/index.js' {
  import { subMinutes } from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths/index.js' {
  import { subMonths } from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters/index.js' {
  import { subQuarters } from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds/index.js' {
  import { subSeconds } from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks/index.js' {
  import { subWeeks } from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears/index.js' {
  import { subYears } from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate/index.js' {
  import { toDate } from 'date-fns/fp'
  export = toDate
}

// ECMAScript Module Functions

declare module 'date-fns/esm' {
  function addBusinessDays(date: Date | number, amount: number): Date
  namespace addBusinessDays {}

  function addDays(date: Date | number, amount: number): Date
  namespace addDays {}

  function addHours(date: Date | number, amount: number): Date
  namespace addHours {}

  function addISOWeekYears(date: Date | number, amount: number): Date
  namespace addISOWeekYears {}

  function addMilliseconds(date: Date | number, amount: number): Date
  namespace addMilliseconds {}

  function addMinutes(date: Date | number, amount: number): Date
  namespace addMinutes {}

  function addMonths(date: Date | number, amount: number): Date
  namespace addMonths {}

  function addQuarters(date: Date | number, amount: number): Date
  namespace addQuarters {}

  function addSeconds(date: Date | number, amount: number): Date
  namespace addSeconds {}

  function addWeeks(date: Date | number, amount: number): Date
  namespace addWeeks {}

  function addYears(date: Date | number, amount: number): Date
  namespace addYears {}

  function areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval
  ): boolean
  namespace areIntervalsOverlapping {}

  function closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number
  namespace closestIndexTo {}

  function closestTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): Date
  namespace closestTo {}

  function compareAsc(dateLeft: Date | number, dateRight: Date | number): number
  namespace compareAsc {}

  function compareDesc(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace compareDesc {}

  function differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInBusinessDays {}

  function differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeekYears {}

  function differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInDays {}

  function differenceInHours(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInHours {}

  function differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInISOWeekYears {}

  function differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInWeeks {}

  function differenceInYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInYears {}

  function eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachDayOfInterval {}

  function eachWeekendOfInterval(interval: Interval): Date[]
  namespace eachWeekendOfInterval {}

  function eachWeekendOfMonth(date: Date | number): Date[]
  namespace eachWeekendOfMonth {}

  function eachWeekendOfYear(date: Date | number): Date[]
  namespace eachWeekendOfYear {}

  function eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]
  namespace eachWeekOfInterval {}

  function endOfDay(date: Date | number): Date
  namespace endOfDay {}

  function endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace endOfDecade {}

  function endOfHour(date: Date | number): Date
  namespace endOfHour {}

  function endOfISOWeek(date: Date | number): Date
  namespace endOfISOWeek {}

  function endOfISOWeekYear(date: Date | number): Date
  namespace endOfISOWeekYear {}

  function endOfMinute(date: Date | number): Date
  namespace endOfMinute {}

  function endOfMonth(date: Date | number): Date
  namespace endOfMonth {}

  function endOfQuarter(date: Date | number): Date
  namespace endOfQuarter {}

  function endOfSecond(date: Date | number): Date
  namespace endOfSecond {}

  function endOfToday(): Date
  namespace endOfToday {}

  function endOfTomorrow(): Date
  namespace endOfTomorrow {}

  function endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear(date: Date | number): Date
  namespace endOfYear {}

  function endOfYesterday(): Date
  namespace endOfYesterday {}

  function format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string
  namespace format {}

  function formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistance {}

  function formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceStrict {}

  function formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNow {}

  function formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string
  namespace formatRelative {}

  function fromUnixTime(unixTime: number): Date
  namespace fromUnixTime {}

  function getDate(date: Date | number): number
  namespace getDate {}

  function getDay(date: Date | number): number
  namespace getDay {}

  function getDayOfYear(date: Date | number): number
  namespace getDayOfYear {}

  function getDaysInMonth(date: Date | number): number
  namespace getDaysInMonth {}

  function getDaysInYear(date: Date | number): number
  namespace getDaysInYear {}

  function getDecade(date: Date | number): number
  namespace getDecade {}

  function getHours(date: Date | number): number
  namespace getHours {}

  function getISODay(date: Date | number): number
  namespace getISODay {}

  function getISOWeek(date: Date | number): number
  namespace getISOWeek {}

  function getISOWeeksInYear(date: Date | number): number
  namespace getISOWeeksInYear {}

  function getISOWeekYear(date: Date | number): number
  namespace getISOWeekYear {}

  function getMilliseconds(date: Date | number): number
  namespace getMilliseconds {}

  function getMinutes(date: Date | number): number
  namespace getMinutes {}

  function getMonth(date: Date | number): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter(date: Date | number): number
  namespace getQuarter {}

  function getSeconds(date: Date | number): number
  namespace getSeconds {}

  function getTime(date: Date | number): number
  namespace getTime {}

  function getUnixTime(date: Date | number): number
  namespace getUnixTime {}

  function getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeek {}

  function getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeekOfMonth {}

  function getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeeksInMonth {}

  function getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeekYear {}

  function getYear(date: Date | number): number
  namespace getYear {}

  function isAfter(date: Date | number, dateToCompare: Date | number): boolean
  namespace isAfter {}

  function isBefore(date: Date | number, dateToCompare: Date | number): boolean
  namespace isBefore {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isEqual(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isEqual {}

  function isFirstDayOfMonth(date: Date | number): boolean
  namespace isFirstDayOfMonth {}

  function isFriday(date: Date | number): boolean
  namespace isFriday {}

  function isFuture(date: Date | number): boolean
  namespace isFuture {}

  function isLastDayOfMonth(date: Date | number): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear(date: Date | number): boolean
  namespace isLeapYear {}

  function isMonday(date: Date | number): boolean
  namespace isMonday {}

  function isPast(date: Date | number): boolean
  namespace isPast {}

  function isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isSameDay {}

  function isSameHour(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOWeekYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeekYear {}

  function isSameMinute(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMinute {}

  function isSameMonth(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameSecond {}

  function isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isSameWeek {}

  function isSameYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameYear {}

  function isSaturday(date: Date | number): boolean
  namespace isSaturday {}

  function isSunday(date: Date | number): boolean
  namespace isSunday {}

  function isThisHour(date: Date | number): boolean
  namespace isThisHour {}

  function isThisISOWeek(date: Date | number): boolean
  namespace isThisISOWeek {}

  function isThisMinute(date: Date | number): boolean
  namespace isThisMinute {}

  function isThisMonth(date: Date | number): boolean
  namespace isThisMonth {}

  function isThisQuarter(date: Date | number): boolean
  namespace isThisQuarter {}

  function isThisSecond(date: Date | number): boolean
  namespace isThisSecond {}

  function isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isThisWeek {}

  function isThisYear(date: Date | number): boolean
  namespace isThisYear {}

  function isThursday(date: Date | number): boolean
  namespace isThursday {}

  function isToday(date: Date | number): boolean
  namespace isToday {}

  function isTomorrow(date: Date | number): boolean
  namespace isTomorrow {}

  function isTuesday(date: Date | number): boolean
  namespace isTuesday {}

  function isValid(date: any): boolean
  namespace isValid {}

  function isWednesday(date: Date | number): boolean
  namespace isWednesday {}

  function isWeekend(date: Date | number): boolean
  namespace isWeekend {}

  function isWithinInterval(date: Date | number, interval: Interval): boolean
  namespace isWithinInterval {}

  function isYesterday(date: Date | number): boolean
  namespace isYesterday {}

  function lastDayOfDecade(date: Date | number): Date
  namespace lastDayOfDecade {}

  function lastDayOfISOWeek(date: Date | number): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOWeekYear(date: Date | number): Date
  namespace lastDayOfISOWeekYear {}

  function lastDayOfMonth(date: Date | number): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear(date: Date | number): Date
  namespace lastDayOfYear {}

  function lightFormat(date: Date | number, format: string): string
  namespace lightFormat {}

  function max(datesArray: (Date | number)[]): Date
  namespace max {}

  function min(datesArray: (Date | number)[]): Date
  namespace min {}

  function parse(
    dateString: string,
    formatString: string,
    backupDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date
  namespace parse {}

  function parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace parseISO {}

  function roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
    }
  ): Date
  namespace roundToNearestMinutes {}

  function setDate(date: Date | number, dayOfMonth: number): Date
  namespace setDate {}

  function setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace setDay {}

  function setDayOfYear(date: Date | number, dayOfYear: number): Date
  namespace setDayOfYear {}

  function setHours(date: Date | number, hours: number): Date
  namespace setHours {}

  function setISODay(date: Date | number, day: number): Date
  namespace setISODay {}

  function setISOWeek(date: Date | number, isoWeek: number): Date
  namespace setISOWeek {}

  function setISOWeekYear(date: Date | number, isoWeekYear: number): Date
  namespace setISOWeekYear {}

  function setMilliseconds(date: Date | number, milliseconds: number): Date
  namespace setMilliseconds {}

  function setMinutes(date: Date | number, minutes: number): Date
  namespace setMinutes {}

  function setMonth(date: Date | number, month: number): Date
  namespace setMonth {}

  function setQuarter(date: Date | number, quarter: number): Date
  namespace setQuarter {}

  function setSeconds(date: Date | number, seconds: number): Date
  namespace setSeconds {}

  function setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeek {}

  function setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeekYear {}

  function setYear(date: Date | number, year: number): Date
  namespace setYear {}

  function startOfDay(date: Date | number): Date
  namespace startOfDay {}

  function startOfDecade(date: Date | number): Date
  namespace startOfDecade {}

  function startOfHour(date: Date | number): Date
  namespace startOfHour {}

  function startOfISOWeek(date: Date | number): Date
  namespace startOfISOWeek {}

  function startOfISOWeekYear(date: Date | number): Date
  namespace startOfISOWeekYear {}

  function startOfMinute(date: Date | number): Date
  namespace startOfMinute {}

  function startOfMonth(date: Date | number): Date
  namespace startOfMonth {}

  function startOfQuarter(date: Date | number): Date
  namespace startOfQuarter {}

  function startOfSecond(date: Date | number): Date
  namespace startOfSecond {}

  function startOfToday(): Date
  namespace startOfToday {}

  function startOfTomorrow(): Date
  namespace startOfTomorrow {}

  function startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace startOfWeek {}

  function startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace startOfWeekYear {}

  function startOfYear(date: Date | number): Date
  namespace startOfYear {}

  function startOfYesterday(): Date
  namespace startOfYesterday {}

  function subDays(date: Date | number, amount: number): Date
  namespace subDays {}

  function subHours(date: Date | number, amount: number): Date
  namespace subHours {}

  function subISOWeekYears(date: Date | number, amount: number): Date
  namespace subISOWeekYears {}

  function subMilliseconds(date: Date | number, amount: number): Date
  namespace subMilliseconds {}

  function subMinutes(date: Date | number, amount: number): Date
  namespace subMinutes {}

  function subMonths(date: Date | number, amount: number): Date
  namespace subMonths {}

  function subQuarters(date: Date | number, amount: number): Date
  namespace subQuarters {}

  function subSeconds(date: Date | number, amount: number): Date
  namespace subSeconds {}

  function subWeeks(date: Date | number, amount: number): Date
  namespace subWeeks {}

  function subYears(date: Date | number, amount: number): Date
  namespace subYears {}

  function toDate(argument: Date | number): Date
  namespace toDate {}

  const maxTime: number

  const minTime: number
}

declare module 'date-fns/esm/addBusinessDays' {
  import { addBusinessDays } from 'date-fns/esm'
  export default addBusinessDays
}

declare module 'date-fns/esm/addDays' {
  import { addDays } from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours' {
  import { addHours } from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns/esm'
  export default addISOWeekYears
}

declare module 'date-fns/esm/addMilliseconds' {
  import { addMilliseconds } from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes' {
  import { addMinutes } from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths' {
  import { addMonths } from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters' {
  import { addQuarters } from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds' {
  import { addSeconds } from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks' {
  import { addWeeks } from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears' {
  import { addYears } from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo' {
  import { closestIndexTo } from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo' {
  import { closestTo } from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc' {
  import { compareAsc } from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc' {
  import { compareDesc } from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays' {
  import { differenceInDays } from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours' {
  import { differenceInHours } from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths' {
  import { differenceInMonths } from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears' {
  import { differenceInYears } from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/endOfDay' {
  import { endOfDay } from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfDecade' {
  import { endOfDecade } from 'date-fns/esm'
  export default endOfDecade
}

declare module 'date-fns/esm/endOfHour' {
  import { endOfHour } from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/endOfMinute' {
  import { endOfMinute } from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth' {
  import { endOfMonth } from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter' {
  import { endOfQuarter } from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond' {
  import { endOfSecond } from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfToday' {
  import { endOfToday } from 'date-fns/esm'
  export default endOfToday
}

declare module 'date-fns/esm/endOfTomorrow' {
  import { endOfTomorrow } from 'date-fns/esm'
  export default endOfTomorrow
}

declare module 'date-fns/esm/endOfWeek' {
  import { endOfWeek } from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear' {
  import { endOfYear } from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/endOfYesterday' {
  import { endOfYesterday } from 'date-fns/esm'
  export default endOfYesterday
}

declare module 'date-fns/esm/format' {
  import { format } from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance' {
  import { formatDistance } from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns/esm'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/formatDistanceToNow' {
  import { formatDistanceToNow } from 'date-fns/esm'
  export default formatDistanceToNow
}

declare module 'date-fns/esm/formatRelative' {
  import { formatRelative } from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/fromUnixTime' {
  import { fromUnixTime } from 'date-fns/esm'
  export default fromUnixTime
}

declare module 'date-fns/esm/getDate' {
  import { getDate } from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay' {
  import { getDay } from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear' {
  import { getDayOfYear } from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear' {
  import { getDaysInYear } from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getDecade' {
  import { getDecade } from 'date-fns/esm'
  export default getDecade
}

declare module 'date-fns/esm/getHours' {
  import { getHours } from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay' {
  import { getISODay } from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek' {
  import { getISOWeek } from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns/esm'
  export default getISOWeekYear
}

declare module 'date-fns/esm/getMilliseconds' {
  import { getMilliseconds } from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes' {
  import { getMinutes } from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth' {
  import { getMonth } from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter' {
  import { getQuarter } from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds' {
  import { getSeconds } from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime' {
  import { getTime } from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getUnixTime' {
  import { getUnixTime } from 'date-fns/esm'
  export default getUnixTime
}

declare module 'date-fns/esm/getWeek' {
  import { getWeek } from 'date-fns/esm'
  export default getWeek
}

declare module 'date-fns/esm/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns/esm'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns/esm'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/getWeekYear' {
  import { getWeekYear } from 'date-fns/esm'
  export default getWeekYear
}

declare module 'date-fns/esm/getYear' {
  import { getYear } from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter' {
  import { isAfter } from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore' {
  import { isBefore } from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate' {
  import { isDate } from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual' {
  import { isEqual } from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday' {
  import { isFriday } from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isFuture' {
  import { isFuture } from 'date-fns/esm'
  export default isFuture
}

declare module 'date-fns/esm/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear' {
  import { isLeapYear } from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday' {
  import { isMonday } from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isPast' {
  import { isPast } from 'date-fns/esm'
  export default isPast
}

declare module 'date-fns/esm/isSameDay' {
  import { isSameDay } from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour' {
  import { isSameHour } from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/isSameMinute' {
  import { isSameMinute } from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth' {
  import { isSameMonth } from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter' {
  import { isSameQuarter } from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond' {
  import { isSameSecond } from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek' {
  import { isSameWeek } from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear' {
  import { isSameYear } from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday' {
  import { isSaturday } from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday' {
  import { isSunday } from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThisHour' {
  import { isThisHour } from 'date-fns/esm'
  export default isThisHour
}

declare module 'date-fns/esm/isThisISOWeek' {
  import { isThisISOWeek } from 'date-fns/esm'
  export default isThisISOWeek
}

declare module 'date-fns/esm/isThisMinute' {
  import { isThisMinute } from 'date-fns/esm'
  export default isThisMinute
}

declare module 'date-fns/esm/isThisMonth' {
  import { isThisMonth } from 'date-fns/esm'
  export default isThisMonth
}

declare module 'date-fns/esm/isThisQuarter' {
  import { isThisQuarter } from 'date-fns/esm'
  export default isThisQuarter
}

declare module 'date-fns/esm/isThisSecond' {
  import { isThisSecond } from 'date-fns/esm'
  export default isThisSecond
}

declare module 'date-fns/esm/isThisWeek' {
  import { isThisWeek } from 'date-fns/esm'
  export default isThisWeek
}

declare module 'date-fns/esm/isThisYear' {
  import { isThisYear } from 'date-fns/esm'
  export default isThisYear
}

declare module 'date-fns/esm/isThursday' {
  import { isThursday } from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isToday' {
  import { isToday } from 'date-fns/esm'
  export default isToday
}

declare module 'date-fns/esm/isTomorrow' {
  import { isTomorrow } from 'date-fns/esm'
  export default isTomorrow
}

declare module 'date-fns/esm/isTuesday' {
  import { isTuesday } from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid' {
  import { isValid } from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday' {
  import { isWednesday } from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend' {
  import { isWeekend } from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval' {
  import { isWithinInterval } from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/isYesterday' {
  import { isYesterday } from 'date-fns/esm'
  export default isYesterday
}

declare module 'date-fns/esm/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns/esm'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/lightFormat' {
  import { lightFormat } from 'date-fns/esm'
  export default lightFormat
}

declare module 'date-fns/esm/max' {
  import { max } from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min' {
  import { min } from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/setDate' {
  import { setDate } from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay' {
  import { setDay } from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear' {
  import { setDayOfYear } from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours' {
  import { setHours } from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay' {
  import { setISODay } from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek' {
  import { setISOWeek } from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns/esm'
  export default setISOWeekYear
}

declare module 'date-fns/esm/setMilliseconds' {
  import { setMilliseconds } from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes' {
  import { setMinutes } from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth' {
  import { setMonth } from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter' {
  import { setQuarter } from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds' {
  import { setSeconds } from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setWeek' {
  import { setWeek } from 'date-fns/esm'
  export default setWeek
}

declare module 'date-fns/esm/setWeekYear' {
  import { setWeekYear } from 'date-fns/esm'
  export default setWeekYear
}

declare module 'date-fns/esm/setYear' {
  import { setYear } from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay' {
  import { startOfDay } from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfDecade' {
  import { startOfDecade } from 'date-fns/esm'
  export default startOfDecade
}

declare module 'date-fns/esm/startOfHour' {
  import { startOfHour } from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/startOfMinute' {
  import { startOfMinute } from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth' {
  import { startOfMonth } from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter' {
  import { startOfQuarter } from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond' {
  import { startOfSecond } from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfToday' {
  import { startOfToday } from 'date-fns/esm'
  export default startOfToday
}

declare module 'date-fns/esm/startOfTomorrow' {
  import { startOfTomorrow } from 'date-fns/esm'
  export default startOfTomorrow
}

declare module 'date-fns/esm/startOfWeek' {
  import { startOfWeek } from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns/esm'
  export default startOfWeekYear
}

declare module 'date-fns/esm/startOfYear' {
  import { startOfYear } from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/startOfYesterday' {
  import { startOfYesterday } from 'date-fns/esm'
  export default startOfYesterday
}

declare module 'date-fns/esm/subDays' {
  import { subDays } from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours' {
  import { subHours } from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns/esm'
  export default subISOWeekYears
}

declare module 'date-fns/esm/subMilliseconds' {
  import { subMilliseconds } from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes' {
  import { subMinutes } from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths' {
  import { subMonths } from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters' {
  import { subQuarters } from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds' {
  import { subSeconds } from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks' {
  import { subWeeks } from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears' {
  import { subYears } from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate' {
  import { toDate } from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns/esm'
  export default addBusinessDays
}

declare module 'date-fns/esm/addDays/index' {
  import { addDays } from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours/index' {
  import { addHours } from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns/esm'
  export default addISOWeekYears
}

declare module 'date-fns/esm/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes/index' {
  import { addMinutes } from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths/index' {
  import { addMonths } from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters/index' {
  import { addQuarters } from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds/index' {
  import { addSeconds } from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks/index' {
  import { addWeeks } from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears/index' {
  import { addYears } from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo/index' {
  import { closestTo } from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc/index' {
  import { compareAsc } from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc/index' {
  import { compareDesc } from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays/index' {
  import { differenceInDays } from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours/index' {
  import { differenceInHours } from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears/index' {
  import { differenceInYears } from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/endOfDay/index' {
  import { endOfDay } from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfDecade/index' {
  import { endOfDecade } from 'date-fns/esm'
  export default endOfDecade
}

declare module 'date-fns/esm/endOfHour/index' {
  import { endOfHour } from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/endOfMinute/index' {
  import { endOfMinute } from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth/index' {
  import { endOfMonth } from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond/index' {
  import { endOfSecond } from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfToday/index' {
  import { endOfToday } from 'date-fns/esm'
  export default endOfToday
}

declare module 'date-fns/esm/endOfTomorrow/index' {
  import { endOfTomorrow } from 'date-fns/esm'
  export default endOfTomorrow
}

declare module 'date-fns/esm/endOfWeek/index' {
  import { endOfWeek } from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear/index' {
  import { endOfYear } from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/endOfYesterday/index' {
  import { endOfYesterday } from 'date-fns/esm'
  export default endOfYesterday
}

declare module 'date-fns/esm/format/index' {
  import { format } from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance/index' {
  import { formatDistance } from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns/esm'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/formatDistanceToNow/index' {
  import { formatDistanceToNow } from 'date-fns/esm'
  export default formatDistanceToNow
}

declare module 'date-fns/esm/formatRelative/index' {
  import { formatRelative } from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns/esm'
  export default fromUnixTime
}

declare module 'date-fns/esm/getDate/index' {
  import { getDate } from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay/index' {
  import { getDay } from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getDecade/index' {
  import { getDecade } from 'date-fns/esm'
  export default getDecade
}

declare module 'date-fns/esm/getHours/index' {
  import { getHours } from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay/index' {
  import { getISODay } from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek/index' {
  import { getISOWeek } from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns/esm'
  export default getISOWeekYear
}

declare module 'date-fns/esm/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes/index' {
  import { getMinutes } from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth/index' {
  import { getMonth } from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter/index' {
  import { getQuarter } from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds/index' {
  import { getSeconds } from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime/index' {
  import { getTime } from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getUnixTime/index' {
  import { getUnixTime } from 'date-fns/esm'
  export default getUnixTime
}

declare module 'date-fns/esm/getWeek/index' {
  import { getWeek } from 'date-fns/esm'
  export default getWeek
}

declare module 'date-fns/esm/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns/esm'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns/esm'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/getWeekYear/index' {
  import { getWeekYear } from 'date-fns/esm'
  export default getWeekYear
}

declare module 'date-fns/esm/getYear/index' {
  import { getYear } from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter/index' {
  import { isAfter } from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore/index' {
  import { isBefore } from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate/index' {
  import { isDate } from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual/index' {
  import { isEqual } from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday/index' {
  import { isFriday } from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isFuture/index' {
  import { isFuture } from 'date-fns/esm'
  export default isFuture
}

declare module 'date-fns/esm/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear/index' {
  import { isLeapYear } from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday/index' {
  import { isMonday } from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isPast/index' {
  import { isPast } from 'date-fns/esm'
  export default isPast
}

declare module 'date-fns/esm/isSameDay/index' {
  import { isSameDay } from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour/index' {
  import { isSameHour } from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/isSameMinute/index' {
  import { isSameMinute } from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth/index' {
  import { isSameMonth } from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond/index' {
  import { isSameSecond } from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek/index' {
  import { isSameWeek } from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear/index' {
  import { isSameYear } from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday/index' {
  import { isSaturday } from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index' {
  import { isSunday } from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThisHour/index' {
  import { isThisHour } from 'date-fns/esm'
  export default isThisHour
}

declare module 'date-fns/esm/isThisISOWeek/index' {
  import { isThisISOWeek } from 'date-fns/esm'
  export default isThisISOWeek
}

declare module 'date-fns/esm/isThisMinute/index' {
  import { isThisMinute } from 'date-fns/esm'
  export default isThisMinute
}

declare module 'date-fns/esm/isThisMonth/index' {
  import { isThisMonth } from 'date-fns/esm'
  export default isThisMonth
}

declare module 'date-fns/esm/isThisQuarter/index' {
  import { isThisQuarter } from 'date-fns/esm'
  export default isThisQuarter
}

declare module 'date-fns/esm/isThisSecond/index' {
  import { isThisSecond } from 'date-fns/esm'
  export default isThisSecond
}

declare module 'date-fns/esm/isThisWeek/index' {
  import { isThisWeek } from 'date-fns/esm'
  export default isThisWeek
}

declare module 'date-fns/esm/isThisYear/index' {
  import { isThisYear } from 'date-fns/esm'
  export default isThisYear
}

declare module 'date-fns/esm/isThursday/index' {
  import { isThursday } from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isToday/index' {
  import { isToday } from 'date-fns/esm'
  export default isToday
}

declare module 'date-fns/esm/isTomorrow/index' {
  import { isTomorrow } from 'date-fns/esm'
  export default isTomorrow
}

declare module 'date-fns/esm/isTuesday/index' {
  import { isTuesday } from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid/index' {
  import { isValid } from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday/index' {
  import { isWednesday } from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend/index' {
  import { isWeekend } from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/isYesterday/index' {
  import { isYesterday } from 'date-fns/esm'
  export default isYesterday
}

declare module 'date-fns/esm/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns/esm'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/lightFormat/index' {
  import { lightFormat } from 'date-fns/esm'
  export default lightFormat
}

declare module 'date-fns/esm/max/index' {
  import { max } from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min/index' {
  import { min } from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse/index' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO/index' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/setDate/index' {
  import { setDate } from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay/index' {
  import { setDay } from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours/index' {
  import { setHours } from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay/index' {
  import { setISODay } from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek/index' {
  import { setISOWeek } from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns/esm'
  export default setISOWeekYear
}

declare module 'date-fns/esm/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes/index' {
  import { setMinutes } from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth/index' {
  import { setMonth } from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter/index' {
  import { setQuarter } from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds/index' {
  import { setSeconds } from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setWeek/index' {
  import { setWeek } from 'date-fns/esm'
  export default setWeek
}

declare module 'date-fns/esm/setWeekYear/index' {
  import { setWeekYear } from 'date-fns/esm'
  export default setWeekYear
}

declare module 'date-fns/esm/setYear/index' {
  import { setYear } from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay/index' {
  import { startOfDay } from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfDecade/index' {
  import { startOfDecade } from 'date-fns/esm'
  export default startOfDecade
}

declare module 'date-fns/esm/startOfHour/index' {
  import { startOfHour } from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/startOfMinute/index' {
  import { startOfMinute } from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth/index' {
  import { startOfMonth } from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond/index' {
  import { startOfSecond } from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfToday/index' {
  import { startOfToday } from 'date-fns/esm'
  export default startOfToday
}

declare module 'date-fns/esm/startOfTomorrow/index' {
  import { startOfTomorrow } from 'date-fns/esm'
  export default startOfTomorrow
}

declare module 'date-fns/esm/startOfWeek/index' {
  import { startOfWeek } from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns/esm'
  export default startOfWeekYear
}

declare module 'date-fns/esm/startOfYear/index' {
  import { startOfYear } from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/startOfYesterday/index' {
  import { startOfYesterday } from 'date-fns/esm'
  export default startOfYesterday
}

declare module 'date-fns/esm/subDays/index' {
  import { subDays } from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours/index' {
  import { subHours } from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns/esm'
  export default subISOWeekYears
}

declare module 'date-fns/esm/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes/index' {
  import { subMinutes } from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths/index' {
  import { subMonths } from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters/index' {
  import { subQuarters } from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds/index' {
  import { subSeconds } from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks/index' {
  import { subWeeks } from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears/index' {
  import { subYears } from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate/index' {
  import { toDate } from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns/esm'
  export default addBusinessDays
}

declare module 'date-fns/esm/addDays/index.js' {
  import { addDays } from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours/index.js' {
  import { addHours } from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns/esm'
  export default addISOWeekYears
}

declare module 'date-fns/esm/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes/index.js' {
  import { addMinutes } from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths/index.js' {
  import { addMonths } from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters/index.js' {
  import { addQuarters } from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds/index.js' {
  import { addSeconds } from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks/index.js' {
  import { addWeeks } from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears/index.js' {
  import { addYears } from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo/index.js' {
  import { closestTo } from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc/index.js' {
  import { compareAsc } from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc/index.js' {
  import { compareDesc } from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/endOfDay/index.js' {
  import { endOfDay } from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns/esm'
  export default endOfDecade
}

declare module 'date-fns/esm/endOfHour/index.js' {
  import { endOfHour } from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfToday/index.js' {
  import { endOfToday } from 'date-fns/esm'
  export default endOfToday
}

declare module 'date-fns/esm/endOfTomorrow/index.js' {
  import { endOfTomorrow } from 'date-fns/esm'
  export default endOfTomorrow
}

declare module 'date-fns/esm/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear/index.js' {
  import { endOfYear } from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/endOfYesterday/index.js' {
  import { endOfYesterday } from 'date-fns/esm'
  export default endOfYesterday
}

declare module 'date-fns/esm/format/index.js' {
  import { format } from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance/index.js' {
  import { formatDistance } from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns/esm'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/formatDistanceToNow/index.js' {
  import { formatDistanceToNow } from 'date-fns/esm'
  export default formatDistanceToNow
}

declare module 'date-fns/esm/formatRelative/index.js' {
  import { formatRelative } from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns/esm'
  export default fromUnixTime
}

declare module 'date-fns/esm/getDate/index.js' {
  import { getDate } from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay/index.js' {
  import { getDay } from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getDecade/index.js' {
  import { getDecade } from 'date-fns/esm'
  export default getDecade
}

declare module 'date-fns/esm/getHours/index.js' {
  import { getHours } from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay/index.js' {
  import { getISODay } from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns/esm'
  export default getISOWeekYear
}

declare module 'date-fns/esm/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes/index.js' {
  import { getMinutes } from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth/index.js' {
  import { getMonth } from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter/index.js' {
  import { getQuarter } from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds/index.js' {
  import { getSeconds } from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime/index.js' {
  import { getTime } from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns/esm'
  export default getUnixTime
}

declare module 'date-fns/esm/getWeek/index.js' {
  import { getWeek } from 'date-fns/esm'
  export default getWeek
}

declare module 'date-fns/esm/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns/esm'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns/esm'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns/esm'
  export default getWeekYear
}

declare module 'date-fns/esm/getYear/index.js' {
  import { getYear } from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter/index.js' {
  import { isAfter } from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore/index.js' {
  import { isBefore } from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate/index.js' {
  import { isDate } from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual/index.js' {
  import { isEqual } from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday/index.js' {
  import { isFriday } from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isFuture/index.js' {
  import { isFuture } from 'date-fns/esm'
  export default isFuture
}

declare module 'date-fns/esm/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday/index.js' {
  import { isMonday } from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isPast/index.js' {
  import { isPast } from 'date-fns/esm'
  export default isPast
}

declare module 'date-fns/esm/isSameDay/index.js' {
  import { isSameDay } from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour/index.js' {
  import { isSameHour } from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear/index.js' {
  import { isSameYear } from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday/index.js' {
  import { isSaturday } from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index.js' {
  import { isSunday } from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThisHour/index.js' {
  import { isThisHour } from 'date-fns/esm'
  export default isThisHour
}

declare module 'date-fns/esm/isThisISOWeek/index.js' {
  import { isThisISOWeek } from 'date-fns/esm'
  export default isThisISOWeek
}

declare module 'date-fns/esm/isThisMinute/index.js' {
  import { isThisMinute } from 'date-fns/esm'
  export default isThisMinute
}

declare module 'date-fns/esm/isThisMonth/index.js' {
  import { isThisMonth } from 'date-fns/esm'
  export default isThisMonth
}

declare module 'date-fns/esm/isThisQuarter/index.js' {
  import { isThisQuarter } from 'date-fns/esm'
  export default isThisQuarter
}

declare module 'date-fns/esm/isThisSecond/index.js' {
  import { isThisSecond } from 'date-fns/esm'
  export default isThisSecond
}

declare module 'date-fns/esm/isThisWeek/index.js' {
  import { isThisWeek } from 'date-fns/esm'
  export default isThisWeek
}

declare module 'date-fns/esm/isThisYear/index.js' {
  import { isThisYear } from 'date-fns/esm'
  export default isThisYear
}

declare module 'date-fns/esm/isThursday/index.js' {
  import { isThursday } from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isToday/index.js' {
  import { isToday } from 'date-fns/esm'
  export default isToday
}

declare module 'date-fns/esm/isTomorrow/index.js' {
  import { isTomorrow } from 'date-fns/esm'
  export default isTomorrow
}

declare module 'date-fns/esm/isTuesday/index.js' {
  import { isTuesday } from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid/index.js' {
  import { isValid } from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday/index.js' {
  import { isWednesday } from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend/index.js' {
  import { isWeekend } from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/isYesterday/index.js' {
  import { isYesterday } from 'date-fns/esm'
  export default isYesterday
}

declare module 'date-fns/esm/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns/esm'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/lightFormat/index.js' {
  import { lightFormat } from 'date-fns/esm'
  export default lightFormat
}

declare module 'date-fns/esm/max/index.js' {
  import { max } from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min/index.js' {
  import { min } from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse/index.js' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO/index.js' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/setDate/index.js' {
  import { setDate } from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay/index.js' {
  import { setDay } from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours/index.js' {
  import { setHours } from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay/index.js' {
  import { setISODay } from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns/esm'
  export default setISOWeekYear
}

declare module 'date-fns/esm/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes/index.js' {
  import { setMinutes } from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth/index.js' {
  import { setMonth } from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter/index.js' {
  import { setQuarter } from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds/index.js' {
  import { setSeconds } from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setWeek/index.js' {
  import { setWeek } from 'date-fns/esm'
  export default setWeek
}

declare module 'date-fns/esm/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns/esm'
  export default setWeekYear
}

declare module 'date-fns/esm/setYear/index.js' {
  import { setYear } from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay/index.js' {
  import { startOfDay } from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns/esm'
  export default startOfDecade
}

declare module 'date-fns/esm/startOfHour/index.js' {
  import { startOfHour } from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfToday/index.js' {
  import { startOfToday } from 'date-fns/esm'
  export default startOfToday
}

declare module 'date-fns/esm/startOfTomorrow/index.js' {
  import { startOfTomorrow } from 'date-fns/esm'
  export default startOfTomorrow
}

declare module 'date-fns/esm/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns/esm'
  export default startOfWeekYear
}

declare module 'date-fns/esm/startOfYear/index.js' {
  import { startOfYear } from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/startOfYesterday/index.js' {
  import { startOfYesterday } from 'date-fns/esm'
  export default startOfYesterday
}

declare module 'date-fns/esm/subDays/index.js' {
  import { subDays } from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours/index.js' {
  import { subHours } from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns/esm'
  export default subISOWeekYears
}

declare module 'date-fns/esm/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes/index.js' {
  import { subMinutes } from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths/index.js' {
  import { subMonths } from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters/index.js' {
  import { subQuarters } from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds/index.js' {
  import { subSeconds } from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks/index.js' {
  import { subWeeks } from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears/index.js' {
  import { subYears } from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate/index.js' {
  import { toDate } from 'date-fns/esm'
  export default toDate
}

// ECMAScript Module FP Functions

declare module 'date-fns/esm/fp' {
  const addBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace addBusinessDays {}

  const addDays: CurriedFn2<number, Date | number, Date>
  namespace addDays {}

  const addHours: CurriedFn2<number, Date | number, Date>
  namespace addHours {}

  const addISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace addISOWeekYears {}

  const addMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace addMilliseconds {}

  const addMinutes: CurriedFn2<number, Date | number, Date>
  namespace addMinutes {}

  const addMonths: CurriedFn2<number, Date | number, Date>
  namespace addMonths {}

  const addQuarters: CurriedFn2<number, Date | number, Date>
  namespace addQuarters {}

  const addSeconds: CurriedFn2<number, Date | number, Date>
  namespace addSeconds {}

  const addWeeks: CurriedFn2<number, Date | number, Date>
  namespace addWeeks {}

  const addYears: CurriedFn2<number, Date | number, Date>
  namespace addYears {}

  const areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  const closestIndexTo: CurriedFn2<(Date | number)[], Date | number, number>
  namespace closestIndexTo {}

  const closestTo: CurriedFn2<(Date | number)[], Date | number, Date>
  namespace closestTo {}

  const compareAsc: CurriedFn2<Date | number, Date | number, number>
  namespace compareAsc {}

  const compareDesc: CurriedFn2<Date | number, Date | number, number>
  namespace compareDesc {}

  const differenceInBusinessDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInBusinessDays {}

  const differenceInCalendarDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarDays {}

  const differenceInCalendarISOWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeeks {}

  const differenceInCalendarISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeekYears {}

  const differenceInCalendarMonths: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarMonths {}

  const differenceInCalendarQuarters: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarQuarters {}

  const differenceInCalendarWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeks {}

  const differenceInCalendarWeeksWithOptions: CurriedFn3<
    Object,
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeksWithOptions {}

  const differenceInCalendarYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarYears {}

  const differenceInDays: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInDays {}

  const differenceInHours: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInHours {}

  const differenceInISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInISOWeekYears {}

  const differenceInMilliseconds: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMilliseconds {}

  const differenceInMinutes: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMinutes {}

  const differenceInMonths: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMonths {}

  const differenceInQuarters: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInQuarters {}

  const differenceInSeconds: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInSeconds {}

  const differenceInWeeks: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInWeeks {}

  const differenceInYears: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInYears {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<Object, Interval, Date[]>
  namespace eachDayOfIntervalWithOptions {}

  const eachWeekendOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekendOfInterval {}

  const eachWeekendOfMonth: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfMonth {}

  const eachWeekendOfYear: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfYear {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<Object, Interval, Date[]>
  namespace eachWeekOfIntervalWithOptions {}

  const endOfDay: CurriedFn1<Date | number, Date>
  namespace endOfDay {}

  const endOfDecade: CurriedFn1<Date | number, Date>
  namespace endOfDecade {}

  const endOfDecadeWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace endOfDecadeWithOptions {}

  const endOfHour: CurriedFn1<Date | number, Date>
  namespace endOfHour {}

  const endOfISOWeek: CurriedFn1<Date | number, Date>
  namespace endOfISOWeek {}

  const endOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace endOfISOWeekYear {}

  const endOfMinute: CurriedFn1<Date | number, Date>
  namespace endOfMinute {}

  const endOfMonth: CurriedFn1<Date | number, Date>
  namespace endOfMonth {}

  const endOfQuarter: CurriedFn1<Date | number, Date>
  namespace endOfQuarter {}

  const endOfSecond: CurriedFn1<Date | number, Date>
  namespace endOfSecond {}

  const endOfWeek: CurriedFn1<Date | number, Date>
  namespace endOfWeek {}

  const endOfWeekWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace endOfWeekWithOptions {}

  const endOfYear: CurriedFn1<Date | number, Date>
  namespace endOfYear {}

  const format: CurriedFn2<string, Date | number, string>
  namespace format {}

  const formatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistance {}

  const formatDistanceStrict: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistanceStrict {}

  const formatDistanceStrictWithOptions: CurriedFn3<
    Object,
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<
    Object,
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceWithOptions {}

  const formatRelative: CurriedFn2<Date | number, Date | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<
    Object,
    Date | number,
    Date | number,
    string
  >
  namespace formatRelativeWithOptions {}

  const formatWithOptions: CurriedFn3<Object, string, Date | number, string>
  namespace formatWithOptions {}

  const fromUnixTime: CurriedFn1<number, Date>
  namespace fromUnixTime {}

  const getDate: CurriedFn1<Date | number, number>
  namespace getDate {}

  const getDay: CurriedFn1<Date | number, number>
  namespace getDay {}

  const getDayOfYear: CurriedFn1<Date | number, number>
  namespace getDayOfYear {}

  const getDaysInMonth: CurriedFn1<Date | number, number>
  namespace getDaysInMonth {}

  const getDaysInYear: CurriedFn1<Date | number, number>
  namespace getDaysInYear {}

  const getDecade: CurriedFn1<Date | number, number>
  namespace getDecade {}

  const getHours: CurriedFn1<Date | number, number>
  namespace getHours {}

  const getISODay: CurriedFn1<Date | number, number>
  namespace getISODay {}

  const getISOWeek: CurriedFn1<Date | number, number>
  namespace getISOWeek {}

  const getISOWeeksInYear: CurriedFn1<Date | number, number>
  namespace getISOWeeksInYear {}

  const getISOWeekYear: CurriedFn1<Date | number, number>
  namespace getISOWeekYear {}

  const getMilliseconds: CurriedFn1<Date | number, number>
  namespace getMilliseconds {}

  const getMinutes: CurriedFn1<Date | number, number>
  namespace getMinutes {}

  const getMonth: CurriedFn1<Date | number, number>
  namespace getMonth {}

  const getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  const getQuarter: CurriedFn1<Date | number, number>
  namespace getQuarter {}

  const getSeconds: CurriedFn1<Date | number, number>
  namespace getSeconds {}

  const getTime: CurriedFn1<Date | number, number>
  namespace getTime {}

  const getUnixTime: CurriedFn1<Date | number, number>
  namespace getUnixTime {}

  const getWeek: CurriedFn1<Date | number, number>
  namespace getWeek {}

  const getWeekOfMonth: CurriedFn1<Date | number, number>
  namespace getWeekOfMonth {}

  const getWeekOfMonthWithOptions: CurriedFn2<Object, Date | number, number>
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<Object, Date | number, number>
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<Object, Date | number, number>
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<Object, Date | number, number>
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | number, number>
  namespace getYear {}

  const isAfter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isAfter {}

  const isBefore: CurriedFn2<Date | number, Date | number, boolean>
  namespace isBefore {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isEqual: CurriedFn2<Date | number, Date | number, boolean>
  namespace isEqual {}

  const isFirstDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFriday: CurriedFn1<Date | number, boolean>
  namespace isFriday {}

  const isLastDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isLastDayOfMonth {}

  const isLeapYear: CurriedFn1<Date | number, boolean>
  namespace isLeapYear {}

  const isMonday: CurriedFn1<Date | number, boolean>
  namespace isMonday {}

  const isSameDay: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameDay {}

  const isSameHour: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameHour {}

  const isSameISOWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeek {}

  const isSameISOWeekYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeekYear {}

  const isSameMinute: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMinute {}

  const isSameMonth: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMonth {}

  const isSameQuarter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameQuarter {}

  const isSameSecond: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameSecond {}

  const isSameWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameWeek {}

  const isSameWeekWithOptions: CurriedFn3<
    Object,
    Date | number,
    Date | number,
    boolean
  >
  namespace isSameWeekWithOptions {}

  const isSameYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameYear {}

  const isSaturday: CurriedFn1<Date | number, boolean>
  namespace isSaturday {}

  const isSunday: CurriedFn1<Date | number, boolean>
  namespace isSunday {}

  const isThursday: CurriedFn1<Date | number, boolean>
  namespace isThursday {}

  const isTuesday: CurriedFn1<Date | number, boolean>
  namespace isTuesday {}

  const isValid: CurriedFn1<any, boolean>
  namespace isValid {}

  const isWednesday: CurriedFn1<Date | number, boolean>
  namespace isWednesday {}

  const isWeekend: CurriedFn1<Date | number, boolean>
  namespace isWeekend {}

  const isWithinInterval: CurriedFn2<Interval, Date | number, boolean>
  namespace isWithinInterval {}

  const lastDayOfDecade: CurriedFn1<Date | number, Date>
  namespace lastDayOfDecade {}

  const lastDayOfISOWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeek {}

  const lastDayOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeekYear {}

  const lastDayOfMonth: CurriedFn1<Date | number, Date>
  namespace lastDayOfMonth {}

  const lastDayOfQuarter: CurriedFn1<Date | number, Date>
  namespace lastDayOfQuarter {}

  const lastDayOfQuarterWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfYear {}

  const lightFormat: CurriedFn2<string, Date | number, string>
  namespace lightFormat {}

  const max: CurriedFn1<(Date | number)[], Date>
  namespace max {}

  const min: CurriedFn1<(Date | number)[], Date>
  namespace min {}

  const parse: CurriedFn3<Date | number, string, string, Date>
  namespace parse {}

  const parseISO: CurriedFn1<string, Date>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<Object, string, Date>
  namespace parseISOWithOptions {}

  const parseWithOptions: CurriedFn4<
    Object,
    Date | number,
    string,
    string,
    Date
  >
  namespace parseWithOptions {}

  const roundToNearestMinutes: CurriedFn1<Date | number, Date>
  namespace roundToNearestMinutes {}

  const roundToNearestMinutesWithOptions: CurriedFn2<
    Object,
    Date | number,
    Date
  >
  namespace roundToNearestMinutesWithOptions {}

  const setDate: CurriedFn2<number, Date | number, Date>
  namespace setDate {}

  const setDay: CurriedFn2<number, Date | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | number, Date>
  namespace setDayOfYear {}

  const setDayWithOptions: CurriedFn3<Object, number, Date | number, Date>
  namespace setDayWithOptions {}

  const setHours: CurriedFn2<number, Date | number, Date>
  namespace setHours {}

  const setISODay: CurriedFn2<number, Date | number, Date>
  namespace setISODay {}

  const setISOWeek: CurriedFn2<number, Date | number, Date>
  namespace setISOWeek {}

  const setISOWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setISOWeekYear {}

  const setMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace setMilliseconds {}

  const setMinutes: CurriedFn2<number, Date | number, Date>
  namespace setMinutes {}

  const setMonth: CurriedFn2<number, Date | number, Date>
  namespace setMonth {}

  const setQuarter: CurriedFn2<number, Date | number, Date>
  namespace setQuarter {}

  const setSeconds: CurriedFn2<number, Date | number, Date>
  namespace setSeconds {}

  const setWeek: CurriedFn2<number, Date | number, Date>
  namespace setWeek {}

  const setWeekWithOptions: CurriedFn3<Object, number, Date | number, Date>
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<Object, number, Date | number, Date>
  namespace setWeekYearWithOptions {}

  const setYear: CurriedFn2<number, Date | number, Date>
  namespace setYear {}

  const startOfDay: CurriedFn1<Date | number, Date>
  namespace startOfDay {}

  const startOfDecade: CurriedFn1<Date | number, Date>
  namespace startOfDecade {}

  const startOfHour: CurriedFn1<Date | number, Date>
  namespace startOfHour {}

  const startOfISOWeek: CurriedFn1<Date | number, Date>
  namespace startOfISOWeek {}

  const startOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfISOWeekYear {}

  const startOfMinute: CurriedFn1<Date | number, Date>
  namespace startOfMinute {}

  const startOfMonth: CurriedFn1<Date | number, Date>
  namespace startOfMonth {}

  const startOfQuarter: CurriedFn1<Date | number, Date>
  namespace startOfQuarter {}

  const startOfSecond: CurriedFn1<Date | number, Date>
  namespace startOfSecond {}

  const startOfWeek: CurriedFn1<Date | number, Date>
  namespace startOfWeek {}

  const startOfWeekWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<Object, Date | number, Date>
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | number, Date>
  namespace startOfYear {}

  const subDays: CurriedFn2<number, Date | number, Date>
  namespace subDays {}

  const subHours: CurriedFn2<number, Date | number, Date>
  namespace subHours {}

  const subISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace subISOWeekYears {}

  const subMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace subMilliseconds {}

  const subMinutes: CurriedFn2<number, Date | number, Date>
  namespace subMinutes {}

  const subMonths: CurriedFn2<number, Date | number, Date>
  namespace subMonths {}

  const subQuarters: CurriedFn2<number, Date | number, Date>
  namespace subQuarters {}

  const subSeconds: CurriedFn2<number, Date | number, Date>
  namespace subSeconds {}

  const subWeeks: CurriedFn2<number, Date | number, Date>
  namespace subWeeks {}

  const subYears: CurriedFn2<number, Date | number, Date>
  namespace subYears {}

  const toDate: CurriedFn1<Date | number, Date>
  namespace toDate {}

  const maxTime: number

  const minTime: number
}

declare module 'date-fns/esm/fp/addBusinessDays' {
  import { addBusinessDays } from 'date-fns/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns/esm/fp/addDays' {
  import { addDays } from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHours' {
  import { addHours } from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns/esm/fp/addMilliseconds' {
  import { addMilliseconds } from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutes' {
  import { addMinutes } from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonths' {
  import { addMonths } from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuarters' {
  import { addQuarters } from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSeconds' {
  import { addSeconds } from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeks' {
  import { addWeeks } from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYears' {
  import { addYears } from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/closestIndexTo' {
  import { closestIndexTo } from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestTo' {
  import { closestTo } from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAsc' {
  import { compareAsc } from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDesc' {
  import { compareDesc } from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/fp/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDays' {
  import { differenceInDays } from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHours' {
  import { differenceInHours } from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMonths' {
  import { differenceInMonths } from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInYears' {
  import { differenceInYears } from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/fp/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/fp/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/fp/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/fp/eachWeekOfIntervalWithOptions' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/endOfDay' {
  import { endOfDay } from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfDecade' {
  import { endOfDecade } from 'date-fns/esm/fp'
  export default endOfDecade
}

declare module 'date-fns/esm/fp/endOfDecadeWithOptions' {
  import { endOfDecadeWithOptions } from 'date-fns/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns/esm/fp/endOfHour' {
  import { endOfHour } from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/fp/endOfMinute' {
  import { endOfMinute } from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonth' {
  import { endOfMonth } from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarter' {
  import { endOfQuarter } from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecond' {
  import { endOfSecond } from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeek' {
  import { endOfWeek } from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions' {
  import { endOfWeekWithOptions } from 'date-fns/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfYear' {
  import { endOfYear } from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/format' {
  import { format } from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance' {
  import { formatDistance } from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/fp/formatDistanceStrictWithOptions' {
  import { formatDistanceStrictWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions' {
  import { formatDistanceWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatRelative' {
  import { formatRelative } from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions' {
  import { formatRelativeWithOptions } from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatWithOptions' {
  import { formatWithOptions } from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/fromUnixTime' {
  import { fromUnixTime } from 'date-fns/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns/esm/fp/getDate' {
  import { getDate } from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDay' {
  import { getDay } from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear' {
  import { getDayOfYear } from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYear' {
  import { getDaysInYear } from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getDecade' {
  import { getDecade } from 'date-fns/esm/fp'
  export default getDecade
}

declare module 'date-fns/esm/fp/getHours' {
  import { getHours } from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODay' {
  import { getISODay } from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeek' {
  import { getISOWeek } from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns/esm/fp/getMilliseconds' {
  import { getMilliseconds } from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutes' {
  import { getMinutes } from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonth' {
  import { getMonth } from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarter' {
  import { getQuarter } from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSeconds' {
  import { getSeconds } from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTime' {
  import { getTime } from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getUnixTime' {
  import { getUnixTime } from 'date-fns/esm/fp'
  export default getUnixTime
}

declare module 'date-fns/esm/fp/getWeek' {
  import { getWeek } from 'date-fns/esm/fp'
  export default getWeek
}

declare module 'date-fns/esm/fp/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/fp/getWeekOfMonthWithOptions' {
  import { getWeekOfMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/fp/getWeeksInMonthWithOptions' {
  import { getWeeksInMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeekWithOptions' {
  import { getWeekWithOptions } from 'date-fns/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/esm/fp/getWeekYear' {
  import { getWeekYear } from 'date-fns/esm/fp'
  export default getWeekYear
}

declare module 'date-fns/esm/fp/getWeekYearWithOptions' {
  import { getWeekYearWithOptions } from 'date-fns/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getYear' {
  import { getYear } from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/isAfter' {
  import { isAfter } from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBefore' {
  import { isBefore } from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDate' {
  import { isDate } from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqual' {
  import { isEqual } from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFriday' {
  import { isFriday } from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYear' {
  import { isLeapYear } from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMonday' {
  import { isMonday } from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDay' {
  import { isSameDay } from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHour' {
  import { isSameHour } from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/fp/isSameMinute' {
  import { isSameMinute } from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonth' {
  import { isSameMonth } from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarter' {
  import { isSameQuarter } from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecond' {
  import { isSameSecond } from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeek' {
  import { isSameWeek } from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions' {
  import { isSameWeekWithOptions } from 'date-fns/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameYear' {
  import { isSameYear } from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturday' {
  import { isSaturday } from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday' {
  import { isSunday } from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursday' {
  import { isThursday } from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesday' {
  import { isTuesday } from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValid' {
  import { isValid } from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesday' {
  import { isWednesday } from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekend' {
  import { isWeekend } from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinInterval' {
  import { isWithinInterval } from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/fp/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions' {
  import { lastDayOfWeekWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/lightFormat' {
  import { lightFormat } from 'date-fns/esm/fp'
  export default lightFormat
}

declare module 'date-fns/esm/fp/max' {
  import { max } from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/min' {
  import { min } from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/parse' {
  import { parse } from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseISO' {
  import { parseISO } from 'date-fns/esm/fp'
  export default parseISO
}

declare module 'date-fns/esm/fp/parseISOWithOptions' {
  import { parseISOWithOptions } from 'date-fns/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/esm/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/fp/roundToNearestMinutesWithOptions' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/esm/fp/setDate' {
  import { setDate } from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDay' {
  import { setDay } from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear' {
  import { setDayOfYear } from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setDayWithOptions' {
  import { setDayWithOptions } from 'date-fns/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns/esm/fp/setHours' {
  import { setHours } from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODay' {
  import { setISODay } from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeek' {
  import { setISOWeek } from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns/esm/fp/setMilliseconds' {
  import { setMilliseconds } from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutes' {
  import { setMinutes } from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonth' {
  import { setMonth } from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarter' {
  import { setQuarter } from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSeconds' {
  import { setSeconds } from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setWeek' {
  import { setWeek } from 'date-fns/esm/fp'
  export default setWeek
}

declare module 'date-fns/esm/fp/setWeekWithOptions' {
  import { setWeekWithOptions } from 'date-fns/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/esm/fp/setWeekYear' {
  import { setWeekYear } from 'date-fns/esm/fp'
  export default setWeekYear
}

declare module 'date-fns/esm/fp/setWeekYearWithOptions' {
  import { setWeekYearWithOptions } from 'date-fns/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setYear' {
  import { setYear } from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDay' {
  import { startOfDay } from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfDecade' {
  import { startOfDecade } from 'date-fns/esm/fp'
  export default startOfDecade
}

declare module 'date-fns/esm/fp/startOfHour' {
  import { startOfHour } from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/fp/startOfMinute' {
  import { startOfMinute } from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonth' {
  import { startOfMonth } from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarter' {
  import { startOfQuarter } from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecond' {
  import { startOfSecond } from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeek' {
  import { startOfWeek } from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions' {
  import { startOfWeekWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns/esm/fp/startOfWeekYearWithOptions' {
  import { startOfWeekYearWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfYear' {
  import { startOfYear } from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/subDays' {
  import { subDays } from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHours' {
  import { subHours } from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns/esm/fp/subMilliseconds' {
  import { subMilliseconds } from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutes' {
  import { subMinutes } from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonths' {
  import { subMonths } from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuarters' {
  import { subQuarters } from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSeconds' {
  import { subSeconds } from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeks' {
  import { subWeeks } from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYears' {
  import { subYears } from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDate' {
  import { toDate } from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns/esm/fp/addDays/index' {
  import { addDays } from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHours/index' {
  import { addHours } from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns/esm/fp/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutes/index' {
  import { addMinutes } from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonths/index' {
  import { addMonths } from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuarters/index' {
  import { addQuarters } from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSeconds/index' {
  import { addSeconds } from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeks/index' {
  import { addWeeks } from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYears/index' {
  import { addYears } from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestTo/index' {
  import { closestTo } from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAsc/index' {
  import { compareAsc } from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDesc/index' {
  import { compareDesc } from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/fp/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDays/index' {
  import { differenceInDays } from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHours/index' {
  import { differenceInHours } from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInYears/index' {
  import { differenceInYears } from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions/index' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/fp/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/fp/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/fp/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/fp/eachWeekOfIntervalWithOptions/index' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/endOfDay/index' {
  import { endOfDay } from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfDecade/index' {
  import { endOfDecade } from 'date-fns/esm/fp'
  export default endOfDecade
}

declare module 'date-fns/esm/fp/endOfDecadeWithOptions/index' {
  import { endOfDecadeWithOptions } from 'date-fns/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns/esm/fp/endOfHour/index' {
  import { endOfHour } from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/fp/endOfMinute/index' {
  import { endOfMinute } from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonth/index' {
  import { endOfMonth } from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecond/index' {
  import { endOfSecond } from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeek/index' {
  import { endOfWeek } from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions/index' {
  import { endOfWeekWithOptions } from 'date-fns/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfYear/index' {
  import { endOfYear } from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/format/index' {
  import { format } from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance/index' {
  import { formatDistance } from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/fp/formatDistanceStrictWithOptions/index' {
  import { formatDistanceStrictWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions/index' {
  import { formatDistanceWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatRelative/index' {
  import { formatRelative } from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions/index' {
  import { formatRelativeWithOptions } from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatWithOptions/index' {
  import { formatWithOptions } from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns/esm/fp/getDate/index' {
  import { getDate } from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDay/index' {
  import { getDay } from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getDecade/index' {
  import { getDecade } from 'date-fns/esm/fp'
  export default getDecade
}

declare module 'date-fns/esm/fp/getHours/index' {
  import { getHours } from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODay/index' {
  import { getISODay } from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeek/index' {
  import { getISOWeek } from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns/esm/fp/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutes/index' {
  import { getMinutes } from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonth/index' {
  import { getMonth } from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarter/index' {
  import { getQuarter } from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSeconds/index' {
  import { getSeconds } from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTime/index' {
  import { getTime } from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getUnixTime/index' {
  import { getUnixTime } from 'date-fns/esm/fp'
  export default getUnixTime
}

declare module 'date-fns/esm/fp/getWeek/index' {
  import { getWeek } from 'date-fns/esm/fp'
  export default getWeek
}

declare module 'date-fns/esm/fp/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/fp/getWeekOfMonthWithOptions/index' {
  import { getWeekOfMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/fp/getWeeksInMonthWithOptions/index' {
  import { getWeeksInMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeekWithOptions/index' {
  import { getWeekWithOptions } from 'date-fns/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/esm/fp/getWeekYear/index' {
  import { getWeekYear } from 'date-fns/esm/fp'
  export default getWeekYear
}

declare module 'date-fns/esm/fp/getWeekYearWithOptions/index' {
  import { getWeekYearWithOptions } from 'date-fns/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getYear/index' {
  import { getYear } from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/isAfter/index' {
  import { isAfter } from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBefore/index' {
  import { isBefore } from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDate/index' {
  import { isDate } from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqual/index' {
  import { isEqual } from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFriday/index' {
  import { isFriday } from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYear/index' {
  import { isLeapYear } from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMonday/index' {
  import { isMonday } from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDay/index' {
  import { isSameDay } from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHour/index' {
  import { isSameHour } from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/fp/isSameMinute/index' {
  import { isSameMinute } from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonth/index' {
  import { isSameMonth } from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecond/index' {
  import { isSameSecond } from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeek/index' {
  import { isSameWeek } from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions/index' {
  import { isSameWeekWithOptions } from 'date-fns/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameYear/index' {
  import { isSameYear } from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturday/index' {
  import { isSaturday } from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday/index' {
  import { isSunday } from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursday/index' {
  import { isThursday } from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesday/index' {
  import { isTuesday } from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValid/index' {
  import { isValid } from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesday/index' {
  import { isWednesday } from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekend/index' {
  import { isWeekend } from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/fp/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions/index' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions/index' {
  import { lastDayOfWeekWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/lightFormat/index' {
  import { lightFormat } from 'date-fns/esm/fp'
  export default lightFormat
}

declare module 'date-fns/esm/fp/max/index' {
  import { max } from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/min/index' {
  import { min } from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/parse/index' {
  import { parse } from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseISO/index' {
  import { parseISO } from 'date-fns/esm/fp'
  export default parseISO
}

declare module 'date-fns/esm/fp/parseISOWithOptions/index' {
  import { parseISOWithOptions } from 'date-fns/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/esm/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/fp/roundToNearestMinutesWithOptions/index' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/esm/fp/setDate/index' {
  import { setDate } from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDay/index' {
  import { setDay } from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setDayWithOptions/index' {
  import { setDayWithOptions } from 'date-fns/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns/esm/fp/setHours/index' {
  import { setHours } from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODay/index' {
  import { setISODay } from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeek/index' {
  import { setISOWeek } from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns/esm/fp/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutes/index' {
  import { setMinutes } from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonth/index' {
  import { setMonth } from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarter/index' {
  import { setQuarter } from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSeconds/index' {
  import { setSeconds } from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setWeek/index' {
  import { setWeek } from 'date-fns/esm/fp'
  export default setWeek
}

declare module 'date-fns/esm/fp/setWeekWithOptions/index' {
  import { setWeekWithOptions } from 'date-fns/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/esm/fp/setWeekYear/index' {
  import { setWeekYear } from 'date-fns/esm/fp'
  export default setWeekYear
}

declare module 'date-fns/esm/fp/setWeekYearWithOptions/index' {
  import { setWeekYearWithOptions } from 'date-fns/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setYear/index' {
  import { setYear } from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDay/index' {
  import { startOfDay } from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfDecade/index' {
  import { startOfDecade } from 'date-fns/esm/fp'
  export default startOfDecade
}

declare module 'date-fns/esm/fp/startOfHour/index' {
  import { startOfHour } from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/fp/startOfMinute/index' {
  import { startOfMinute } from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonth/index' {
  import { startOfMonth } from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecond/index' {
  import { startOfSecond } from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeek/index' {
  import { startOfWeek } from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions/index' {
  import { startOfWeekWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns/esm/fp/startOfWeekYearWithOptions/index' {
  import { startOfWeekYearWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfYear/index' {
  import { startOfYear } from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/subDays/index' {
  import { subDays } from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHours/index' {
  import { subHours } from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns/esm/fp/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutes/index' {
  import { subMinutes } from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonths/index' {
  import { subMonths } from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuarters/index' {
  import { subQuarters } from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSeconds/index' {
  import { subSeconds } from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeks/index' {
  import { subWeeks } from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYears/index' {
  import { subYears } from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDate/index' {
  import { toDate } from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns/esm/fp/addDays/index.js' {
  import { addDays } from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHours/index.js' {
  import { addHours } from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns/esm/fp/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutes/index.js' {
  import { addMinutes } from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonths/index.js' {
  import { addMonths } from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuarters/index.js' {
  import { addQuarters } from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSeconds/index.js' {
  import { addSeconds } from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeks/index.js' {
  import { addWeeks } from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYears/index.js' {
  import { addYears } from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestTo/index.js' {
  import { closestTo } from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAsc/index.js' {
  import { compareAsc } from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDesc/index.js' {
  import { compareDesc } from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/fp/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions/index.js' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/fp/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/fp/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/fp/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/fp/eachWeekOfIntervalWithOptions/index.js' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/endOfDay/index.js' {
  import { endOfDay } from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns/esm/fp'
  export default endOfDecade
}

declare module 'date-fns/esm/fp/endOfDecadeWithOptions/index.js' {
  import { endOfDecadeWithOptions } from 'date-fns/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns/esm/fp/endOfHour/index.js' {
  import { endOfHour } from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/fp/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions/index.js' {
  import { endOfWeekWithOptions } from 'date-fns/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfYear/index.js' {
  import { endOfYear } from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/format/index.js' {
  import { format } from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance/index.js' {
  import { formatDistance } from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/fp/formatDistanceStrictWithOptions/index.js' {
  import { formatDistanceStrictWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions/index.js' {
  import { formatDistanceWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatRelative/index.js' {
  import { formatRelative } from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions/index.js' {
  import { formatRelativeWithOptions } from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatWithOptions/index.js' {
  import { formatWithOptions } from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns/esm/fp/getDate/index.js' {
  import { getDate } from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDay/index.js' {
  import { getDay } from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getDecade/index.js' {
  import { getDecade } from 'date-fns/esm/fp'
  export default getDecade
}

declare module 'date-fns/esm/fp/getHours/index.js' {
  import { getHours } from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODay/index.js' {
  import { getISODay } from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns/esm/fp/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutes/index.js' {
  import { getMinutes } from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonth/index.js' {
  import { getMonth } from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarter/index.js' {
  import { getQuarter } from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSeconds/index.js' {
  import { getSeconds } from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTime/index.js' {
  import { getTime } from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns/esm/fp'
  export default getUnixTime
}

declare module 'date-fns/esm/fp/getWeek/index.js' {
  import { getWeek } from 'date-fns/esm/fp'
  export default getWeek
}

declare module 'date-fns/esm/fp/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/fp/getWeekOfMonthWithOptions/index.js' {
  import { getWeekOfMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/fp/getWeeksInMonthWithOptions/index.js' {
  import { getWeeksInMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeekWithOptions/index.js' {
  import { getWeekWithOptions } from 'date-fns/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/esm/fp/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns/esm/fp'
  export default getWeekYear
}

declare module 'date-fns/esm/fp/getWeekYearWithOptions/index.js' {
  import { getWeekYearWithOptions } from 'date-fns/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getYear/index.js' {
  import { getYear } from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/isAfter/index.js' {
  import { isAfter } from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBefore/index.js' {
  import { isBefore } from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDate/index.js' {
  import { isDate } from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqual/index.js' {
  import { isEqual } from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFriday/index.js' {
  import { isFriday } from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMonday/index.js' {
  import { isMonday } from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDay/index.js' {
  import { isSameDay } from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHour/index.js' {
  import { isSameHour } from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/fp/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions/index.js' {
  import { isSameWeekWithOptions } from 'date-fns/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameYear/index.js' {
  import { isSameYear } from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturday/index.js' {
  import { isSaturday } from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday/index.js' {
  import { isSunday } from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursday/index.js' {
  import { isThursday } from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesday/index.js' {
  import { isTuesday } from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValid/index.js' {
  import { isValid } from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesday/index.js' {
  import { isWednesday } from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekend/index.js' {
  import { isWeekend } from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/fp/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions/index.js' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions/index.js' {
  import { lastDayOfWeekWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/lightFormat/index.js' {
  import { lightFormat } from 'date-fns/esm/fp'
  export default lightFormat
}

declare module 'date-fns/esm/fp/max/index.js' {
  import { max } from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/min/index.js' {
  import { min } from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/parse/index.js' {
  import { parse } from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseISO/index.js' {
  import { parseISO } from 'date-fns/esm/fp'
  export default parseISO
}

declare module 'date-fns/esm/fp/parseISOWithOptions/index.js' {
  import { parseISOWithOptions } from 'date-fns/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/esm/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/fp/roundToNearestMinutesWithOptions/index.js' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/esm/fp/setDate/index.js' {
  import { setDate } from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDay/index.js' {
  import { setDay } from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setDayWithOptions/index.js' {
  import { setDayWithOptions } from 'date-fns/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns/esm/fp/setHours/index.js' {
  import { setHours } from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODay/index.js' {
  import { setISODay } from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns/esm/fp/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutes/index.js' {
  import { setMinutes } from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonth/index.js' {
  import { setMonth } from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarter/index.js' {
  import { setQuarter } from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSeconds/index.js' {
  import { setSeconds } from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setWeek/index.js' {
  import { setWeek } from 'date-fns/esm/fp'
  export default setWeek
}

declare module 'date-fns/esm/fp/setWeekWithOptions/index.js' {
  import { setWeekWithOptions } from 'date-fns/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/esm/fp/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns/esm/fp'
  export default setWeekYear
}

declare module 'date-fns/esm/fp/setWeekYearWithOptions/index.js' {
  import { setWeekYearWithOptions } from 'date-fns/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setYear/index.js' {
  import { setYear } from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDay/index.js' {
  import { startOfDay } from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns/esm/fp'
  export default startOfDecade
}

declare module 'date-fns/esm/fp/startOfHour/index.js' {
  import { startOfHour } from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/fp/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions/index.js' {
  import { startOfWeekWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns/esm/fp/startOfWeekYearWithOptions/index.js' {
  import { startOfWeekYearWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfYear/index.js' {
  import { startOfYear } from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/subDays/index.js' {
  import { subDays } from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHours/index.js' {
  import { subHours } from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns/esm/fp/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutes/index.js' {
  import { subMinutes } from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonths/index.js' {
  import { subMonths } from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuarters/index.js' {
  import { subQuarters } from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSeconds/index.js' {
  import { subSeconds } from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeks/index.js' {
  import { subWeeks } from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYears/index.js' {
  import { subYears } from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDate/index.js' {
  import { toDate } from 'date-fns/esm/fp'
  export default toDate
}

// Regular Locales

declare module 'date-fns/locale' {
  const af: Locale
  namespace af {}

  const ar: Locale
  namespace ar {}

  const arDZ: Locale
  namespace arDZ {}

  const arSA: Locale
  namespace arSA {}

  const be: Locale
  namespace be {}

  const bg: Locale
  namespace bg {}

  const bn: Locale
  namespace bn {}

  const ca: Locale
  namespace ca {}

  const cs: Locale
  namespace cs {}

  const cy: Locale
  namespace cy {}

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

  const faIR: Locale
  namespace faIR {}

  const fi: Locale
  namespace fi {}

  const fil: Locale
  namespace fil {}

  const fr: Locale
  namespace fr {}

  const frCH: Locale
  namespace frCH {}

  const gl: Locale
  namespace gl {}

  const he: Locale
  namespace he {}

  const hr: Locale
  namespace hr {}

  const hu: Locale
  namespace hu {}

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

  const lt: Locale
  namespace lt {}

  const lv: Locale
  namespace lv {}

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

  const nn: Locale
  namespace nn {}

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

  const sl: Locale
  namespace sl {}

  const sr: Locale
  namespace sr {}

  const sv: Locale
  namespace sv {}

  const th: Locale
  namespace th {}

  const tr: Locale
  namespace tr {}

  const ug: Locale
  namespace ug {}

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
  import { af } from 'date-fns/locale'
  export = af
}

declare module 'date-fns/locale/ar' {
  import { ar } from 'date-fns/locale'
  export = ar
}

declare module 'date-fns/locale/ar-DZ' {
  import { arDZ } from 'date-fns/locale'
  export = arDZ
}

declare module 'date-fns/locale/ar-SA' {
  import { arSA } from 'date-fns/locale'
  export = arSA
}

declare module 'date-fns/locale/be' {
  import { be } from 'date-fns/locale'
  export = be
}

declare module 'date-fns/locale/bg' {
  import { bg } from 'date-fns/locale'
  export = bg
}

declare module 'date-fns/locale/bn' {
  import { bn } from 'date-fns/locale'
  export = bn
}

declare module 'date-fns/locale/ca' {
  import { ca } from 'date-fns/locale'
  export = ca
}

declare module 'date-fns/locale/cs' {
  import { cs } from 'date-fns/locale'
  export = cs
}

declare module 'date-fns/locale/cy' {
  import { cy } from 'date-fns/locale'
  export = cy
}

declare module 'date-fns/locale/da' {
  import { da } from 'date-fns/locale'
  export = da
}

declare module 'date-fns/locale/de' {
  import { de } from 'date-fns/locale'
  export = de
}

declare module 'date-fns/locale/el' {
  import { el } from 'date-fns/locale'
  export = el
}

declare module 'date-fns/locale/en-CA' {
  import { enCA } from 'date-fns/locale'
  export = enCA
}

declare module 'date-fns/locale/en-GB' {
  import { enGB } from 'date-fns/locale'
  export = enGB
}

declare module 'date-fns/locale/en-US' {
  import { enUS } from 'date-fns/locale'
  export = enUS
}

declare module 'date-fns/locale/eo' {
  import { eo } from 'date-fns/locale'
  export = eo
}

declare module 'date-fns/locale/es' {
  import { es } from 'date-fns/locale'
  export = es
}

declare module 'date-fns/locale/et' {
  import { et } from 'date-fns/locale'
  export = et
}

declare module 'date-fns/locale/fa-IR' {
  import { faIR } from 'date-fns/locale'
  export = faIR
}

declare module 'date-fns/locale/fi' {
  import { fi } from 'date-fns/locale'
  export = fi
}

declare module 'date-fns/locale/fil' {
  import { fil } from 'date-fns/locale'
  export = fil
}

declare module 'date-fns/locale/fr' {
  import { fr } from 'date-fns/locale'
  export = fr
}

declare module 'date-fns/locale/fr-CH' {
  import { frCH } from 'date-fns/locale'
  export = frCH
}

declare module 'date-fns/locale/gl' {
  import { gl } from 'date-fns/locale'
  export = gl
}

declare module 'date-fns/locale/he' {
  import { he } from 'date-fns/locale'
  export = he
}

declare module 'date-fns/locale/hr' {
  import { hr } from 'date-fns/locale'
  export = hr
}

declare module 'date-fns/locale/hu' {
  import { hu } from 'date-fns/locale'
  export = hu
}

declare module 'date-fns/locale/id' {
  import { id } from 'date-fns/locale'
  export = id
}

declare module 'date-fns/locale/is' {
  import { is } from 'date-fns/locale'
  export = is
}

declare module 'date-fns/locale/it' {
  import { it } from 'date-fns/locale'
  export = it
}

declare module 'date-fns/locale/ja' {
  import { ja } from 'date-fns/locale'
  export = ja
}

declare module 'date-fns/locale/ka' {
  import { ka } from 'date-fns/locale'
  export = ka
}

declare module 'date-fns/locale/ko' {
  import { ko } from 'date-fns/locale'
  export = ko
}

declare module 'date-fns/locale/lt' {
  import { lt } from 'date-fns/locale'
  export = lt
}

declare module 'date-fns/locale/lv' {
  import { lv } from 'date-fns/locale'
  export = lv
}

declare module 'date-fns/locale/mk' {
  import { mk } from 'date-fns/locale'
  export = mk
}

declare module 'date-fns/locale/ms' {
  import { ms } from 'date-fns/locale'
  export = ms
}

declare module 'date-fns/locale/nb' {
  import { nb } from 'date-fns/locale'
  export = nb
}

declare module 'date-fns/locale/nl' {
  import { nl } from 'date-fns/locale'
  export = nl
}

declare module 'date-fns/locale/nl-BE' {
  import { nlBE } from 'date-fns/locale'
  export = nlBE
}

declare module 'date-fns/locale/nn' {
  import { nn } from 'date-fns/locale'
  export = nn
}

declare module 'date-fns/locale/pl' {
  import { pl } from 'date-fns/locale'
  export = pl
}

declare module 'date-fns/locale/pt' {
  import { pt } from 'date-fns/locale'
  export = pt
}

declare module 'date-fns/locale/pt-BR' {
  import { ptBR } from 'date-fns/locale'
  export = ptBR
}

declare module 'date-fns/locale/ro' {
  import { ro } from 'date-fns/locale'
  export = ro
}

declare module 'date-fns/locale/ru' {
  import { ru } from 'date-fns/locale'
  export = ru
}

declare module 'date-fns/locale/sk' {
  import { sk } from 'date-fns/locale'
  export = sk
}

declare module 'date-fns/locale/sl' {
  import { sl } from 'date-fns/locale'
  export = sl
}

declare module 'date-fns/locale/sr' {
  import { sr } from 'date-fns/locale'
  export = sr
}

declare module 'date-fns/locale/sv' {
  import { sv } from 'date-fns/locale'
  export = sv
}

declare module 'date-fns/locale/th' {
  import { th } from 'date-fns/locale'
  export = th
}

declare module 'date-fns/locale/tr' {
  import { tr } from 'date-fns/locale'
  export = tr
}

declare module 'date-fns/locale/ug' {
  import { ug } from 'date-fns/locale'
  export = ug
}

declare module 'date-fns/locale/uk' {
  import { uk } from 'date-fns/locale'
  export = uk
}

declare module 'date-fns/locale/vi' {
  import { vi } from 'date-fns/locale'
  export = vi
}

declare module 'date-fns/locale/zh-CN' {
  import { zhCN } from 'date-fns/locale'
  export = zhCN
}

declare module 'date-fns/locale/zh-TW' {
  import { zhTW } from 'date-fns/locale'
  export = zhTW
}

declare module 'date-fns/locale/af/index' {
  import { af } from 'date-fns/locale'
  export = af
}

declare module 'date-fns/locale/ar/index' {
  import { ar } from 'date-fns/locale'
  export = ar
}

declare module 'date-fns/locale/ar-DZ/index' {
  import { arDZ } from 'date-fns/locale'
  export = arDZ
}

declare module 'date-fns/locale/ar-SA/index' {
  import { arSA } from 'date-fns/locale'
  export = arSA
}

declare module 'date-fns/locale/be/index' {
  import { be } from 'date-fns/locale'
  export = be
}

declare module 'date-fns/locale/bg/index' {
  import { bg } from 'date-fns/locale'
  export = bg
}

declare module 'date-fns/locale/bn/index' {
  import { bn } from 'date-fns/locale'
  export = bn
}

declare module 'date-fns/locale/ca/index' {
  import { ca } from 'date-fns/locale'
  export = ca
}

declare module 'date-fns/locale/cs/index' {
  import { cs } from 'date-fns/locale'
  export = cs
}

declare module 'date-fns/locale/cy/index' {
  import { cy } from 'date-fns/locale'
  export = cy
}

declare module 'date-fns/locale/da/index' {
  import { da } from 'date-fns/locale'
  export = da
}

declare module 'date-fns/locale/de/index' {
  import { de } from 'date-fns/locale'
  export = de
}

declare module 'date-fns/locale/el/index' {
  import { el } from 'date-fns/locale'
  export = el
}

declare module 'date-fns/locale/en-CA/index' {
  import { enCA } from 'date-fns/locale'
  export = enCA
}

declare module 'date-fns/locale/en-GB/index' {
  import { enGB } from 'date-fns/locale'
  export = enGB
}

declare module 'date-fns/locale/en-US/index' {
  import { enUS } from 'date-fns/locale'
  export = enUS
}

declare module 'date-fns/locale/eo/index' {
  import { eo } from 'date-fns/locale'
  export = eo
}

declare module 'date-fns/locale/es/index' {
  import { es } from 'date-fns/locale'
  export = es
}

declare module 'date-fns/locale/et/index' {
  import { et } from 'date-fns/locale'
  export = et
}

declare module 'date-fns/locale/fa-IR/index' {
  import { faIR } from 'date-fns/locale'
  export = faIR
}

declare module 'date-fns/locale/fi/index' {
  import { fi } from 'date-fns/locale'
  export = fi
}

declare module 'date-fns/locale/fil/index' {
  import { fil } from 'date-fns/locale'
  export = fil
}

declare module 'date-fns/locale/fr/index' {
  import { fr } from 'date-fns/locale'
  export = fr
}

declare module 'date-fns/locale/fr-CH/index' {
  import { frCH } from 'date-fns/locale'
  export = frCH
}

declare module 'date-fns/locale/gl/index' {
  import { gl } from 'date-fns/locale'
  export = gl
}

declare module 'date-fns/locale/he/index' {
  import { he } from 'date-fns/locale'
  export = he
}

declare module 'date-fns/locale/hr/index' {
  import { hr } from 'date-fns/locale'
  export = hr
}

declare module 'date-fns/locale/hu/index' {
  import { hu } from 'date-fns/locale'
  export = hu
}

declare module 'date-fns/locale/id/index' {
  import { id } from 'date-fns/locale'
  export = id
}

declare module 'date-fns/locale/is/index' {
  import { is } from 'date-fns/locale'
  export = is
}

declare module 'date-fns/locale/it/index' {
  import { it } from 'date-fns/locale'
  export = it
}

declare module 'date-fns/locale/ja/index' {
  import { ja } from 'date-fns/locale'
  export = ja
}

declare module 'date-fns/locale/ka/index' {
  import { ka } from 'date-fns/locale'
  export = ka
}

declare module 'date-fns/locale/ko/index' {
  import { ko } from 'date-fns/locale'
  export = ko
}

declare module 'date-fns/locale/lt/index' {
  import { lt } from 'date-fns/locale'
  export = lt
}

declare module 'date-fns/locale/lv/index' {
  import { lv } from 'date-fns/locale'
  export = lv
}

declare module 'date-fns/locale/mk/index' {
  import { mk } from 'date-fns/locale'
  export = mk
}

declare module 'date-fns/locale/ms/index' {
  import { ms } from 'date-fns/locale'
  export = ms
}

declare module 'date-fns/locale/nb/index' {
  import { nb } from 'date-fns/locale'
  export = nb
}

declare module 'date-fns/locale/nl/index' {
  import { nl } from 'date-fns/locale'
  export = nl
}

declare module 'date-fns/locale/nl-BE/index' {
  import { nlBE } from 'date-fns/locale'
  export = nlBE
}

declare module 'date-fns/locale/nn/index' {
  import { nn } from 'date-fns/locale'
  export = nn
}

declare module 'date-fns/locale/pl/index' {
  import { pl } from 'date-fns/locale'
  export = pl
}

declare module 'date-fns/locale/pt/index' {
  import { pt } from 'date-fns/locale'
  export = pt
}

declare module 'date-fns/locale/pt-BR/index' {
  import { ptBR } from 'date-fns/locale'
  export = ptBR
}

declare module 'date-fns/locale/ro/index' {
  import { ro } from 'date-fns/locale'
  export = ro
}

declare module 'date-fns/locale/ru/index' {
  import { ru } from 'date-fns/locale'
  export = ru
}

declare module 'date-fns/locale/sk/index' {
  import { sk } from 'date-fns/locale'
  export = sk
}

declare module 'date-fns/locale/sl/index' {
  import { sl } from 'date-fns/locale'
  export = sl
}

declare module 'date-fns/locale/sr/index' {
  import { sr } from 'date-fns/locale'
  export = sr
}

declare module 'date-fns/locale/sv/index' {
  import { sv } from 'date-fns/locale'
  export = sv
}

declare module 'date-fns/locale/th/index' {
  import { th } from 'date-fns/locale'
  export = th
}

declare module 'date-fns/locale/tr/index' {
  import { tr } from 'date-fns/locale'
  export = tr
}

declare module 'date-fns/locale/ug/index' {
  import { ug } from 'date-fns/locale'
  export = ug
}

declare module 'date-fns/locale/uk/index' {
  import { uk } from 'date-fns/locale'
  export = uk
}

declare module 'date-fns/locale/vi/index' {
  import { vi } from 'date-fns/locale'
  export = vi
}

declare module 'date-fns/locale/zh-CN/index' {
  import { zhCN } from 'date-fns/locale'
  export = zhCN
}

declare module 'date-fns/locale/zh-TW/index' {
  import { zhTW } from 'date-fns/locale'
  export = zhTW
}

declare module 'date-fns/locale/af/index.js' {
  import { af } from 'date-fns/locale'
  export = af
}

declare module 'date-fns/locale/ar/index.js' {
  import { ar } from 'date-fns/locale'
  export = ar
}

declare module 'date-fns/locale/ar-DZ/index.js' {
  import { arDZ } from 'date-fns/locale'
  export = arDZ
}

declare module 'date-fns/locale/ar-SA/index.js' {
  import { arSA } from 'date-fns/locale'
  export = arSA
}

declare module 'date-fns/locale/be/index.js' {
  import { be } from 'date-fns/locale'
  export = be
}

declare module 'date-fns/locale/bg/index.js' {
  import { bg } from 'date-fns/locale'
  export = bg
}

declare module 'date-fns/locale/bn/index.js' {
  import { bn } from 'date-fns/locale'
  export = bn
}

declare module 'date-fns/locale/ca/index.js' {
  import { ca } from 'date-fns/locale'
  export = ca
}

declare module 'date-fns/locale/cs/index.js' {
  import { cs } from 'date-fns/locale'
  export = cs
}

declare module 'date-fns/locale/cy/index.js' {
  import { cy } from 'date-fns/locale'
  export = cy
}

declare module 'date-fns/locale/da/index.js' {
  import { da } from 'date-fns/locale'
  export = da
}

declare module 'date-fns/locale/de/index.js' {
  import { de } from 'date-fns/locale'
  export = de
}

declare module 'date-fns/locale/el/index.js' {
  import { el } from 'date-fns/locale'
  export = el
}

declare module 'date-fns/locale/en-CA/index.js' {
  import { enCA } from 'date-fns/locale'
  export = enCA
}

declare module 'date-fns/locale/en-GB/index.js' {
  import { enGB } from 'date-fns/locale'
  export = enGB
}

declare module 'date-fns/locale/en-US/index.js' {
  import { enUS } from 'date-fns/locale'
  export = enUS
}

declare module 'date-fns/locale/eo/index.js' {
  import { eo } from 'date-fns/locale'
  export = eo
}

declare module 'date-fns/locale/es/index.js' {
  import { es } from 'date-fns/locale'
  export = es
}

declare module 'date-fns/locale/et/index.js' {
  import { et } from 'date-fns/locale'
  export = et
}

declare module 'date-fns/locale/fa-IR/index.js' {
  import { faIR } from 'date-fns/locale'
  export = faIR
}

declare module 'date-fns/locale/fi/index.js' {
  import { fi } from 'date-fns/locale'
  export = fi
}

declare module 'date-fns/locale/fil/index.js' {
  import { fil } from 'date-fns/locale'
  export = fil
}

declare module 'date-fns/locale/fr/index.js' {
  import { fr } from 'date-fns/locale'
  export = fr
}

declare module 'date-fns/locale/fr-CH/index.js' {
  import { frCH } from 'date-fns/locale'
  export = frCH
}

declare module 'date-fns/locale/gl/index.js' {
  import { gl } from 'date-fns/locale'
  export = gl
}

declare module 'date-fns/locale/he/index.js' {
  import { he } from 'date-fns/locale'
  export = he
}

declare module 'date-fns/locale/hr/index.js' {
  import { hr } from 'date-fns/locale'
  export = hr
}

declare module 'date-fns/locale/hu/index.js' {
  import { hu } from 'date-fns/locale'
  export = hu
}

declare module 'date-fns/locale/id/index.js' {
  import { id } from 'date-fns/locale'
  export = id
}

declare module 'date-fns/locale/is/index.js' {
  import { is } from 'date-fns/locale'
  export = is
}

declare module 'date-fns/locale/it/index.js' {
  import { it } from 'date-fns/locale'
  export = it
}

declare module 'date-fns/locale/ja/index.js' {
  import { ja } from 'date-fns/locale'
  export = ja
}

declare module 'date-fns/locale/ka/index.js' {
  import { ka } from 'date-fns/locale'
  export = ka
}

declare module 'date-fns/locale/ko/index.js' {
  import { ko } from 'date-fns/locale'
  export = ko
}

declare module 'date-fns/locale/lt/index.js' {
  import { lt } from 'date-fns/locale'
  export = lt
}

declare module 'date-fns/locale/lv/index.js' {
  import { lv } from 'date-fns/locale'
  export = lv
}

declare module 'date-fns/locale/mk/index.js' {
  import { mk } from 'date-fns/locale'
  export = mk
}

declare module 'date-fns/locale/ms/index.js' {
  import { ms } from 'date-fns/locale'
  export = ms
}

declare module 'date-fns/locale/nb/index.js' {
  import { nb } from 'date-fns/locale'
  export = nb
}

declare module 'date-fns/locale/nl/index.js' {
  import { nl } from 'date-fns/locale'
  export = nl
}

declare module 'date-fns/locale/nl-BE/index.js' {
  import { nlBE } from 'date-fns/locale'
  export = nlBE
}

declare module 'date-fns/locale/nn/index.js' {
  import { nn } from 'date-fns/locale'
  export = nn
}

declare module 'date-fns/locale/pl/index.js' {
  import { pl } from 'date-fns/locale'
  export = pl
}

declare module 'date-fns/locale/pt/index.js' {
  import { pt } from 'date-fns/locale'
  export = pt
}

declare module 'date-fns/locale/pt-BR/index.js' {
  import { ptBR } from 'date-fns/locale'
  export = ptBR
}

declare module 'date-fns/locale/ro/index.js' {
  import { ro } from 'date-fns/locale'
  export = ro
}

declare module 'date-fns/locale/ru/index.js' {
  import { ru } from 'date-fns/locale'
  export = ru
}

declare module 'date-fns/locale/sk/index.js' {
  import { sk } from 'date-fns/locale'
  export = sk
}

declare module 'date-fns/locale/sl/index.js' {
  import { sl } from 'date-fns/locale'
  export = sl
}

declare module 'date-fns/locale/sr/index.js' {
  import { sr } from 'date-fns/locale'
  export = sr
}

declare module 'date-fns/locale/sv/index.js' {
  import { sv } from 'date-fns/locale'
  export = sv
}

declare module 'date-fns/locale/th/index.js' {
  import { th } from 'date-fns/locale'
  export = th
}

declare module 'date-fns/locale/tr/index.js' {
  import { tr } from 'date-fns/locale'
  export = tr
}

declare module 'date-fns/locale/ug/index.js' {
  import { ug } from 'date-fns/locale'
  export = ug
}

declare module 'date-fns/locale/uk/index.js' {
  import { uk } from 'date-fns/locale'
  export = uk
}

declare module 'date-fns/locale/vi/index.js' {
  import { vi } from 'date-fns/locale'
  export = vi
}

declare module 'date-fns/locale/zh-CN/index.js' {
  import { zhCN } from 'date-fns/locale'
  export = zhCN
}

declare module 'date-fns/locale/zh-TW/index.js' {
  import { zhTW } from 'date-fns/locale'
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

  const arSA: Locale
  namespace arSA {}

  const be: Locale
  namespace be {}

  const bg: Locale
  namespace bg {}

  const bn: Locale
  namespace bn {}

  const ca: Locale
  namespace ca {}

  const cs: Locale
  namespace cs {}

  const cy: Locale
  namespace cy {}

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

  const faIR: Locale
  namespace faIR {}

  const fi: Locale
  namespace fi {}

  const fil: Locale
  namespace fil {}

  const fr: Locale
  namespace fr {}

  const frCH: Locale
  namespace frCH {}

  const gl: Locale
  namespace gl {}

  const he: Locale
  namespace he {}

  const hr: Locale
  namespace hr {}

  const hu: Locale
  namespace hu {}

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

  const lt: Locale
  namespace lt {}

  const lv: Locale
  namespace lv {}

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

  const nn: Locale
  namespace nn {}

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

  const sl: Locale
  namespace sl {}

  const sr: Locale
  namespace sr {}

  const sv: Locale
  namespace sv {}

  const th: Locale
  namespace th {}

  const tr: Locale
  namespace tr {}

  const ug: Locale
  namespace ug {}

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
  import { af } from 'date-fns/esm/locale'
  export default af
}

declare module 'date-fns/esm/locale/ar' {
  import { ar } from 'date-fns/esm/locale'
  export default ar
}

declare module 'date-fns/esm/locale/ar-DZ' {
  import { arDZ } from 'date-fns/esm/locale'
  export default arDZ
}

declare module 'date-fns/esm/locale/ar-SA' {
  import { arSA } from 'date-fns/esm/locale'
  export default arSA
}

declare module 'date-fns/esm/locale/be' {
  import { be } from 'date-fns/esm/locale'
  export default be
}

declare module 'date-fns/esm/locale/bg' {
  import { bg } from 'date-fns/esm/locale'
  export default bg
}

declare module 'date-fns/esm/locale/bn' {
  import { bn } from 'date-fns/esm/locale'
  export default bn
}

declare module 'date-fns/esm/locale/ca' {
  import { ca } from 'date-fns/esm/locale'
  export default ca
}

declare module 'date-fns/esm/locale/cs' {
  import { cs } from 'date-fns/esm/locale'
  export default cs
}

declare module 'date-fns/esm/locale/cy' {
  import { cy } from 'date-fns/esm/locale'
  export default cy
}

declare module 'date-fns/esm/locale/da' {
  import { da } from 'date-fns/esm/locale'
  export default da
}

declare module 'date-fns/esm/locale/de' {
  import { de } from 'date-fns/esm/locale'
  export default de
}

declare module 'date-fns/esm/locale/el' {
  import { el } from 'date-fns/esm/locale'
  export default el
}

declare module 'date-fns/esm/locale/en-CA' {
  import { enCA } from 'date-fns/esm/locale'
  export default enCA
}

declare module 'date-fns/esm/locale/en-GB' {
  import { enGB } from 'date-fns/esm/locale'
  export default enGB
}

declare module 'date-fns/esm/locale/en-US' {
  import { enUS } from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/eo' {
  import { eo } from 'date-fns/esm/locale'
  export default eo
}

declare module 'date-fns/esm/locale/es' {
  import { es } from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/et' {
  import { et } from 'date-fns/esm/locale'
  export default et
}

declare module 'date-fns/esm/locale/fa-IR' {
  import { faIR } from 'date-fns/esm/locale'
  export default faIR
}

declare module 'date-fns/esm/locale/fi' {
  import { fi } from 'date-fns/esm/locale'
  export default fi
}

declare module 'date-fns/esm/locale/fil' {
  import { fil } from 'date-fns/esm/locale'
  export default fil
}

declare module 'date-fns/esm/locale/fr' {
  import { fr } from 'date-fns/esm/locale'
  export default fr
}

declare module 'date-fns/esm/locale/fr-CH' {
  import { frCH } from 'date-fns/esm/locale'
  export default frCH
}

declare module 'date-fns/esm/locale/gl' {
  import { gl } from 'date-fns/esm/locale'
  export default gl
}

declare module 'date-fns/esm/locale/he' {
  import { he } from 'date-fns/esm/locale'
  export default he
}

declare module 'date-fns/esm/locale/hr' {
  import { hr } from 'date-fns/esm/locale'
  export default hr
}

declare module 'date-fns/esm/locale/hu' {
  import { hu } from 'date-fns/esm/locale'
  export default hu
}

declare module 'date-fns/esm/locale/id' {
  import { id } from 'date-fns/esm/locale'
  export default id
}

declare module 'date-fns/esm/locale/is' {
  import { is } from 'date-fns/esm/locale'
  export default is
}

declare module 'date-fns/esm/locale/it' {
  import { it } from 'date-fns/esm/locale'
  export default it
}

declare module 'date-fns/esm/locale/ja' {
  import { ja } from 'date-fns/esm/locale'
  export default ja
}

declare module 'date-fns/esm/locale/ka' {
  import { ka } from 'date-fns/esm/locale'
  export default ka
}

declare module 'date-fns/esm/locale/ko' {
  import { ko } from 'date-fns/esm/locale'
  export default ko
}

declare module 'date-fns/esm/locale/lt' {
  import { lt } from 'date-fns/esm/locale'
  export default lt
}

declare module 'date-fns/esm/locale/lv' {
  import { lv } from 'date-fns/esm/locale'
  export default lv
}

declare module 'date-fns/esm/locale/mk' {
  import { mk } from 'date-fns/esm/locale'
  export default mk
}

declare module 'date-fns/esm/locale/ms' {
  import { ms } from 'date-fns/esm/locale'
  export default ms
}

declare module 'date-fns/esm/locale/nb' {
  import { nb } from 'date-fns/esm/locale'
  export default nb
}

declare module 'date-fns/esm/locale/nl' {
  import { nl } from 'date-fns/esm/locale'
  export default nl
}

declare module 'date-fns/esm/locale/nl-BE' {
  import { nlBE } from 'date-fns/esm/locale'
  export default nlBE
}

declare module 'date-fns/esm/locale/nn' {
  import { nn } from 'date-fns/esm/locale'
  export default nn
}

declare module 'date-fns/esm/locale/pl' {
  import { pl } from 'date-fns/esm/locale'
  export default pl
}

declare module 'date-fns/esm/locale/pt' {
  import { pt } from 'date-fns/esm/locale'
  export default pt
}

declare module 'date-fns/esm/locale/pt-BR' {
  import { ptBR } from 'date-fns/esm/locale'
  export default ptBR
}

declare module 'date-fns/esm/locale/ro' {
  import { ro } from 'date-fns/esm/locale'
  export default ro
}

declare module 'date-fns/esm/locale/ru' {
  import { ru } from 'date-fns/esm/locale'
  export default ru
}

declare module 'date-fns/esm/locale/sk' {
  import { sk } from 'date-fns/esm/locale'
  export default sk
}

declare module 'date-fns/esm/locale/sl' {
  import { sl } from 'date-fns/esm/locale'
  export default sl
}

declare module 'date-fns/esm/locale/sr' {
  import { sr } from 'date-fns/esm/locale'
  export default sr
}

declare module 'date-fns/esm/locale/sv' {
  import { sv } from 'date-fns/esm/locale'
  export default sv
}

declare module 'date-fns/esm/locale/th' {
  import { th } from 'date-fns/esm/locale'
  export default th
}

declare module 'date-fns/esm/locale/tr' {
  import { tr } from 'date-fns/esm/locale'
  export default tr
}

declare module 'date-fns/esm/locale/ug' {
  import { ug } from 'date-fns/esm/locale'
  export default ug
}

declare module 'date-fns/esm/locale/uk' {
  import { uk } from 'date-fns/esm/locale'
  export default uk
}

declare module 'date-fns/esm/locale/vi' {
  import { vi } from 'date-fns/esm/locale'
  export default vi
}

declare module 'date-fns/esm/locale/zh-CN' {
  import { zhCN } from 'date-fns/esm/locale'
  export default zhCN
}

declare module 'date-fns/esm/locale/zh-TW' {
  import { zhTW } from 'date-fns/esm/locale'
  export default zhTW
}

declare module 'date-fns/esm/locale/af/index' {
  import { af } from 'date-fns/esm/locale'
  export default af
}

declare module 'date-fns/esm/locale/ar/index' {
  import { ar } from 'date-fns/esm/locale'
  export default ar
}

declare module 'date-fns/esm/locale/ar-DZ/index' {
  import { arDZ } from 'date-fns/esm/locale'
  export default arDZ
}

declare module 'date-fns/esm/locale/ar-SA/index' {
  import { arSA } from 'date-fns/esm/locale'
  export default arSA
}

declare module 'date-fns/esm/locale/be/index' {
  import { be } from 'date-fns/esm/locale'
  export default be
}

declare module 'date-fns/esm/locale/bg/index' {
  import { bg } from 'date-fns/esm/locale'
  export default bg
}

declare module 'date-fns/esm/locale/bn/index' {
  import { bn } from 'date-fns/esm/locale'
  export default bn
}

declare module 'date-fns/esm/locale/ca/index' {
  import { ca } from 'date-fns/esm/locale'
  export default ca
}

declare module 'date-fns/esm/locale/cs/index' {
  import { cs } from 'date-fns/esm/locale'
  export default cs
}

declare module 'date-fns/esm/locale/cy/index' {
  import { cy } from 'date-fns/esm/locale'
  export default cy
}

declare module 'date-fns/esm/locale/da/index' {
  import { da } from 'date-fns/esm/locale'
  export default da
}

declare module 'date-fns/esm/locale/de/index' {
  import { de } from 'date-fns/esm/locale'
  export default de
}

declare module 'date-fns/esm/locale/el/index' {
  import { el } from 'date-fns/esm/locale'
  export default el
}

declare module 'date-fns/esm/locale/en-CA/index' {
  import { enCA } from 'date-fns/esm/locale'
  export default enCA
}

declare module 'date-fns/esm/locale/en-GB/index' {
  import { enGB } from 'date-fns/esm/locale'
  export default enGB
}

declare module 'date-fns/esm/locale/en-US/index' {
  import { enUS } from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/eo/index' {
  import { eo } from 'date-fns/esm/locale'
  export default eo
}

declare module 'date-fns/esm/locale/es/index' {
  import { es } from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/et/index' {
  import { et } from 'date-fns/esm/locale'
  export default et
}

declare module 'date-fns/esm/locale/fa-IR/index' {
  import { faIR } from 'date-fns/esm/locale'
  export default faIR
}

declare module 'date-fns/esm/locale/fi/index' {
  import { fi } from 'date-fns/esm/locale'
  export default fi
}

declare module 'date-fns/esm/locale/fil/index' {
  import { fil } from 'date-fns/esm/locale'
  export default fil
}

declare module 'date-fns/esm/locale/fr/index' {
  import { fr } from 'date-fns/esm/locale'
  export default fr
}

declare module 'date-fns/esm/locale/fr-CH/index' {
  import { frCH } from 'date-fns/esm/locale'
  export default frCH
}

declare module 'date-fns/esm/locale/gl/index' {
  import { gl } from 'date-fns/esm/locale'
  export default gl
}

declare module 'date-fns/esm/locale/he/index' {
  import { he } from 'date-fns/esm/locale'
  export default he
}

declare module 'date-fns/esm/locale/hr/index' {
  import { hr } from 'date-fns/esm/locale'
  export default hr
}

declare module 'date-fns/esm/locale/hu/index' {
  import { hu } from 'date-fns/esm/locale'
  export default hu
}

declare module 'date-fns/esm/locale/id/index' {
  import { id } from 'date-fns/esm/locale'
  export default id
}

declare module 'date-fns/esm/locale/is/index' {
  import { is } from 'date-fns/esm/locale'
  export default is
}

declare module 'date-fns/esm/locale/it/index' {
  import { it } from 'date-fns/esm/locale'
  export default it
}

declare module 'date-fns/esm/locale/ja/index' {
  import { ja } from 'date-fns/esm/locale'
  export default ja
}

declare module 'date-fns/esm/locale/ka/index' {
  import { ka } from 'date-fns/esm/locale'
  export default ka
}

declare module 'date-fns/esm/locale/ko/index' {
  import { ko } from 'date-fns/esm/locale'
  export default ko
}

declare module 'date-fns/esm/locale/lt/index' {
  import { lt } from 'date-fns/esm/locale'
  export default lt
}

declare module 'date-fns/esm/locale/lv/index' {
  import { lv } from 'date-fns/esm/locale'
  export default lv
}

declare module 'date-fns/esm/locale/mk/index' {
  import { mk } from 'date-fns/esm/locale'
  export default mk
}

declare module 'date-fns/esm/locale/ms/index' {
  import { ms } from 'date-fns/esm/locale'
  export default ms
}

declare module 'date-fns/esm/locale/nb/index' {
  import { nb } from 'date-fns/esm/locale'
  export default nb
}

declare module 'date-fns/esm/locale/nl/index' {
  import { nl } from 'date-fns/esm/locale'
  export default nl
}

declare module 'date-fns/esm/locale/nl-BE/index' {
  import { nlBE } from 'date-fns/esm/locale'
  export default nlBE
}

declare module 'date-fns/esm/locale/nn/index' {
  import { nn } from 'date-fns/esm/locale'
  export default nn
}

declare module 'date-fns/esm/locale/pl/index' {
  import { pl } from 'date-fns/esm/locale'
  export default pl
}

declare module 'date-fns/esm/locale/pt/index' {
  import { pt } from 'date-fns/esm/locale'
  export default pt
}

declare module 'date-fns/esm/locale/pt-BR/index' {
  import { ptBR } from 'date-fns/esm/locale'
  export default ptBR
}

declare module 'date-fns/esm/locale/ro/index' {
  import { ro } from 'date-fns/esm/locale'
  export default ro
}

declare module 'date-fns/esm/locale/ru/index' {
  import { ru } from 'date-fns/esm/locale'
  export default ru
}

declare module 'date-fns/esm/locale/sk/index' {
  import { sk } from 'date-fns/esm/locale'
  export default sk
}

declare module 'date-fns/esm/locale/sl/index' {
  import { sl } from 'date-fns/esm/locale'
  export default sl
}

declare module 'date-fns/esm/locale/sr/index' {
  import { sr } from 'date-fns/esm/locale'
  export default sr
}

declare module 'date-fns/esm/locale/sv/index' {
  import { sv } from 'date-fns/esm/locale'
  export default sv
}

declare module 'date-fns/esm/locale/th/index' {
  import { th } from 'date-fns/esm/locale'
  export default th
}

declare module 'date-fns/esm/locale/tr/index' {
  import { tr } from 'date-fns/esm/locale'
  export default tr
}

declare module 'date-fns/esm/locale/ug/index' {
  import { ug } from 'date-fns/esm/locale'
  export default ug
}

declare module 'date-fns/esm/locale/uk/index' {
  import { uk } from 'date-fns/esm/locale'
  export default uk
}

declare module 'date-fns/esm/locale/vi/index' {
  import { vi } from 'date-fns/esm/locale'
  export default vi
}

declare module 'date-fns/esm/locale/zh-CN/index' {
  import { zhCN } from 'date-fns/esm/locale'
  export default zhCN
}

declare module 'date-fns/esm/locale/zh-TW/index' {
  import { zhTW } from 'date-fns/esm/locale'
  export default zhTW
}

declare module 'date-fns/esm/locale/af/index.js' {
  import { af } from 'date-fns/esm/locale'
  export default af
}

declare module 'date-fns/esm/locale/ar/index.js' {
  import { ar } from 'date-fns/esm/locale'
  export default ar
}

declare module 'date-fns/esm/locale/ar-DZ/index.js' {
  import { arDZ } from 'date-fns/esm/locale'
  export default arDZ
}

declare module 'date-fns/esm/locale/ar-SA/index.js' {
  import { arSA } from 'date-fns/esm/locale'
  export default arSA
}

declare module 'date-fns/esm/locale/be/index.js' {
  import { be } from 'date-fns/esm/locale'
  export default be
}

declare module 'date-fns/esm/locale/bg/index.js' {
  import { bg } from 'date-fns/esm/locale'
  export default bg
}

declare module 'date-fns/esm/locale/bn/index.js' {
  import { bn } from 'date-fns/esm/locale'
  export default bn
}

declare module 'date-fns/esm/locale/ca/index.js' {
  import { ca } from 'date-fns/esm/locale'
  export default ca
}

declare module 'date-fns/esm/locale/cs/index.js' {
  import { cs } from 'date-fns/esm/locale'
  export default cs
}

declare module 'date-fns/esm/locale/cy/index.js' {
  import { cy } from 'date-fns/esm/locale'
  export default cy
}

declare module 'date-fns/esm/locale/da/index.js' {
  import { da } from 'date-fns/esm/locale'
  export default da
}

declare module 'date-fns/esm/locale/de/index.js' {
  import { de } from 'date-fns/esm/locale'
  export default de
}

declare module 'date-fns/esm/locale/el/index.js' {
  import { el } from 'date-fns/esm/locale'
  export default el
}

declare module 'date-fns/esm/locale/en-CA/index.js' {
  import { enCA } from 'date-fns/esm/locale'
  export default enCA
}

declare module 'date-fns/esm/locale/en-GB/index.js' {
  import { enGB } from 'date-fns/esm/locale'
  export default enGB
}

declare module 'date-fns/esm/locale/en-US/index.js' {
  import { enUS } from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/eo/index.js' {
  import { eo } from 'date-fns/esm/locale'
  export default eo
}

declare module 'date-fns/esm/locale/es/index.js' {
  import { es } from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/et/index.js' {
  import { et } from 'date-fns/esm/locale'
  export default et
}

declare module 'date-fns/esm/locale/fa-IR/index.js' {
  import { faIR } from 'date-fns/esm/locale'
  export default faIR
}

declare module 'date-fns/esm/locale/fi/index.js' {
  import { fi } from 'date-fns/esm/locale'
  export default fi
}

declare module 'date-fns/esm/locale/fil/index.js' {
  import { fil } from 'date-fns/esm/locale'
  export default fil
}

declare module 'date-fns/esm/locale/fr/index.js' {
  import { fr } from 'date-fns/esm/locale'
  export default fr
}

declare module 'date-fns/esm/locale/fr-CH/index.js' {
  import { frCH } from 'date-fns/esm/locale'
  export default frCH
}

declare module 'date-fns/esm/locale/gl/index.js' {
  import { gl } from 'date-fns/esm/locale'
  export default gl
}

declare module 'date-fns/esm/locale/he/index.js' {
  import { he } from 'date-fns/esm/locale'
  export default he
}

declare module 'date-fns/esm/locale/hr/index.js' {
  import { hr } from 'date-fns/esm/locale'
  export default hr
}

declare module 'date-fns/esm/locale/hu/index.js' {
  import { hu } from 'date-fns/esm/locale'
  export default hu
}

declare module 'date-fns/esm/locale/id/index.js' {
  import { id } from 'date-fns/esm/locale'
  export default id
}

declare module 'date-fns/esm/locale/is/index.js' {
  import { is } from 'date-fns/esm/locale'
  export default is
}

declare module 'date-fns/esm/locale/it/index.js' {
  import { it } from 'date-fns/esm/locale'
  export default it
}

declare module 'date-fns/esm/locale/ja/index.js' {
  import { ja } from 'date-fns/esm/locale'
  export default ja
}

declare module 'date-fns/esm/locale/ka/index.js' {
  import { ka } from 'date-fns/esm/locale'
  export default ka
}

declare module 'date-fns/esm/locale/ko/index.js' {
  import { ko } from 'date-fns/esm/locale'
  export default ko
}

declare module 'date-fns/esm/locale/lt/index.js' {
  import { lt } from 'date-fns/esm/locale'
  export default lt
}

declare module 'date-fns/esm/locale/lv/index.js' {
  import { lv } from 'date-fns/esm/locale'
  export default lv
}

declare module 'date-fns/esm/locale/mk/index.js' {
  import { mk } from 'date-fns/esm/locale'
  export default mk
}

declare module 'date-fns/esm/locale/ms/index.js' {
  import { ms } from 'date-fns/esm/locale'
  export default ms
}

declare module 'date-fns/esm/locale/nb/index.js' {
  import { nb } from 'date-fns/esm/locale'
  export default nb
}

declare module 'date-fns/esm/locale/nl/index.js' {
  import { nl } from 'date-fns/esm/locale'
  export default nl
}

declare module 'date-fns/esm/locale/nl-BE/index.js' {
  import { nlBE } from 'date-fns/esm/locale'
  export default nlBE
}

declare module 'date-fns/esm/locale/nn/index.js' {
  import { nn } from 'date-fns/esm/locale'
  export default nn
}

declare module 'date-fns/esm/locale/pl/index.js' {
  import { pl } from 'date-fns/esm/locale'
  export default pl
}

declare module 'date-fns/esm/locale/pt/index.js' {
  import { pt } from 'date-fns/esm/locale'
  export default pt
}

declare module 'date-fns/esm/locale/pt-BR/index.js' {
  import { ptBR } from 'date-fns/esm/locale'
  export default ptBR
}

declare module 'date-fns/esm/locale/ro/index.js' {
  import { ro } from 'date-fns/esm/locale'
  export default ro
}

declare module 'date-fns/esm/locale/ru/index.js' {
  import { ru } from 'date-fns/esm/locale'
  export default ru
}

declare module 'date-fns/esm/locale/sk/index.js' {
  import { sk } from 'date-fns/esm/locale'
  export default sk
}

declare module 'date-fns/esm/locale/sl/index.js' {
  import { sl } from 'date-fns/esm/locale'
  export default sl
}

declare module 'date-fns/esm/locale/sr/index.js' {
  import { sr } from 'date-fns/esm/locale'
  export default sr
}

declare module 'date-fns/esm/locale/sv/index.js' {
  import { sv } from 'date-fns/esm/locale'
  export default sv
}

declare module 'date-fns/esm/locale/th/index.js' {
  import { th } from 'date-fns/esm/locale'
  export default th
}

declare module 'date-fns/esm/locale/tr/index.js' {
  import { tr } from 'date-fns/esm/locale'
  export default tr
}

declare module 'date-fns/esm/locale/ug/index.js' {
  import { ug } from 'date-fns/esm/locale'
  export default ug
}

declare module 'date-fns/esm/locale/uk/index.js' {
  import { uk } from 'date-fns/esm/locale'
  export default uk
}

declare module 'date-fns/esm/locale/vi/index.js' {
  import { vi } from 'date-fns/esm/locale'
  export default vi
}

declare module 'date-fns/esm/locale/zh-CN/index.js' {
  import { zhCN } from 'date-fns/esm/locale'
  export default zhCN
}

declare module 'date-fns/esm/locale/zh-TW/index.js' {
  import { zhTW } from 'date-fns/esm/locale'
  export default zhTW
}

// dateFns Global Interface

interface dateFns {
  addBusinessDays(date: Date | number, amount: number): Date

  addDays(date: Date | number, amount: number): Date

  addHours(date: Date | number, amount: number): Date

  addISOWeekYears(date: Date | number, amount: number): Date

  addMilliseconds(date: Date | number, amount: number): Date

  addMinutes(date: Date | number, amount: number): Date

  addMonths(date: Date | number, amount: number): Date

  addQuarters(date: Date | number, amount: number): Date

  addSeconds(date: Date | number, amount: number): Date

  addWeeks(date: Date | number, amount: number): Date

  addYears(date: Date | number, amount: number): Date

  areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval
  ): boolean

  closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number

  closestTo(dateToCompare: Date | number, datesArray: (Date | number)[]): Date

  compareAsc(dateLeft: Date | number, dateRight: Date | number): number

  compareDesc(dateLeft: Date | number, dateRight: Date | number): number

  differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number

  differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInDays(dateLeft: Date | number, dateRight: Date | number): number

  differenceInHours(dateLeft: Date | number, dateRight: Date | number): number

  differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInMinutes(dateLeft: Date | number, dateRight: Date | number): number

  differenceInMonths(dateLeft: Date | number, dateRight: Date | number): number

  differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInSeconds(dateLeft: Date | number, dateRight: Date | number): number

  differenceInWeeks(dateLeft: Date | number, dateRight: Date | number): number

  differenceInYears(dateLeft: Date | number, dateRight: Date | number): number

  eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]

  eachWeekendOfInterval(interval: Interval): Date[]

  eachWeekendOfMonth(date: Date | number): Date[]

  eachWeekendOfYear(date: Date | number): Date[]

  eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]

  endOfDay(date: Date | number): Date

  endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date

  endOfHour(date: Date | number): Date

  endOfISOWeek(date: Date | number): Date

  endOfISOWeekYear(date: Date | number): Date

  endOfMinute(date: Date | number): Date

  endOfMonth(date: Date | number): Date

  endOfQuarter(date: Date | number): Date

  endOfSecond(date: Date | number): Date

  endOfToday(): Date

  endOfTomorrow(): Date

  endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  endOfYear(date: Date | number): Date

  endOfYesterday(): Date

  format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string

  formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string

  formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string

  formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string

  formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string

  fromUnixTime(unixTime: number): Date

  getDate(date: Date | number): number

  getDay(date: Date | number): number

  getDayOfYear(date: Date | number): number

  getDaysInMonth(date: Date | number): number

  getDaysInYear(date: Date | number): number

  getDecade(date: Date | number): number

  getHours(date: Date | number): number

  getISODay(date: Date | number): number

  getISOWeek(date: Date | number): number

  getISOWeeksInYear(date: Date | number): number

  getISOWeekYear(date: Date | number): number

  getMilliseconds(date: Date | number): number

  getMinutes(date: Date | number): number

  getMonth(date: Date | number): number

  getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number

  getQuarter(date: Date | number): number

  getSeconds(date: Date | number): number

  getTime(date: Date | number): number

  getUnixTime(date: Date | number): number

  getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number

  getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number

  getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number

  getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number

  getYear(date: Date | number): number

  isAfter(date: Date | number, dateToCompare: Date | number): boolean

  isBefore(date: Date | number, dateToCompare: Date | number): boolean

  isDate(value: any): boolean

  isEqual(dateLeft: Date | number, dateRight: Date | number): boolean

  isFirstDayOfMonth(date: Date | number): boolean

  isFriday(date: Date | number): boolean

  isFuture(date: Date | number): boolean

  isLastDayOfMonth(date: Date | number): boolean

  isLeapYear(date: Date | number): boolean

  isMonday(date: Date | number): boolean

  isPast(date: Date | number): boolean

  isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameHour(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameISOWeek(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameISOWeekYear(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameMinute(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameMonth(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameQuarter(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameSecond(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean

  isSameYear(dateLeft: Date | number, dateRight: Date | number): boolean

  isSaturday(date: Date | number): boolean

  isSunday(date: Date | number): boolean

  isThisHour(date: Date | number): boolean

  isThisISOWeek(date: Date | number): boolean

  isThisMinute(date: Date | number): boolean

  isThisMonth(date: Date | number): boolean

  isThisQuarter(date: Date | number): boolean

  isThisSecond(date: Date | number): boolean

  isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean

  isThisYear(date: Date | number): boolean

  isThursday(date: Date | number): boolean

  isToday(date: Date | number): boolean

  isTomorrow(date: Date | number): boolean

  isTuesday(date: Date | number): boolean

  isValid(date: any): boolean

  isWednesday(date: Date | number): boolean

  isWeekend(date: Date | number): boolean

  isWithinInterval(date: Date | number, interval: Interval): boolean

  isYesterday(date: Date | number): boolean

  lastDayOfDecade(date: Date | number): Date

  lastDayOfISOWeek(date: Date | number): Date

  lastDayOfISOWeekYear(date: Date | number): Date

  lastDayOfMonth(date: Date | number): Date

  lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date

  lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  lastDayOfYear(date: Date | number): Date

  lightFormat(date: Date | number, format: string): string

  max(datesArray: (Date | number)[]): Date

  min(datesArray: (Date | number)[]): Date

  parse(
    dateString: string,
    formatString: string,
    backupDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date

  parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date

  roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
    }
  ): Date

  setDate(date: Date | number, dayOfMonth: number): Date

  setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  setDayOfYear(date: Date | number, dayOfYear: number): Date

  setHours(date: Date | number, hours: number): Date

  setISODay(date: Date | number, day: number): Date

  setISOWeek(date: Date | number, isoWeek: number): Date

  setISOWeekYear(date: Date | number, isoWeekYear: number): Date

  setMilliseconds(date: Date | number, milliseconds: number): Date

  setMinutes(date: Date | number, minutes: number): Date

  setMonth(date: Date | number, month: number): Date

  setQuarter(date: Date | number, quarter: number): Date

  setSeconds(date: Date | number, seconds: number): Date

  setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date

  setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date

  setYear(date: Date | number, year: number): Date

  startOfDay(date: Date | number): Date

  startOfDecade(date: Date | number): Date

  startOfHour(date: Date | number): Date

  startOfISOWeek(date: Date | number): Date

  startOfISOWeekYear(date: Date | number): Date

  startOfMinute(date: Date | number): Date

  startOfMonth(date: Date | number): Date

  startOfQuarter(date: Date | number): Date

  startOfSecond(date: Date | number): Date

  startOfToday(): Date

  startOfTomorrow(): Date

  startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date

  startOfYear(date: Date | number): Date

  startOfYesterday(): Date

  subDays(date: Date | number, amount: number): Date

  subHours(date: Date | number, amount: number): Date

  subISOWeekYears(date: Date | number, amount: number): Date

  subMilliseconds(date: Date | number, amount: number): Date

  subMinutes(date: Date | number, amount: number): Date

  subMonths(date: Date | number, amount: number): Date

  subQuarters(date: Date | number, amount: number): Date

  subSeconds(date: Date | number, amount: number): Date

  subWeeks(date: Date | number, amount: number): Date

  subYears(date: Date | number, amount: number): Date

  toDate(argument: Date | number): Date

  maxTime: number

  minTime: number
}
