// This file is generated automatically by `scripts/build_typings.js`. Please, don't change it.

type Interval = {
  start: Date | string | number,
  end: Date | string | number
}

type Options = {
  weekStartsOn?: number,
  additionalDigits?: 0 | 1 | 2,
  locale?: Locale,
  unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
  partialMethod?: 'floor' | 'ceil' | 'round'
}

type Locale = {
  distanceInWords?: {
    localize?: Function
  },
  format?: {
    formatters?: Object,
    formattingTokensRegExp?: RegExp
  },
  parse?: {
    units?: Object,
    parsers?: Object,
    parsingTokensRegExp?: RegExp
  }
}

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

  function addISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addISOYears {}

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

  function differenceInCalendarISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOYears {}

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
    options?: {
      weekStartsOn?: number
    }
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

  function differenceInISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInISOYears {}

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

  function distanceInWords (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Locale
    }
  ): string
  namespace distanceInWords {}

  function distanceInWordsStrict (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      addSuffix?: boolean,
      unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
      partialMethod?: 'floor' | 'ceil' | 'round',
      locale?: Locale
    }
  ): string
  namespace distanceInWordsStrict {}

  function eachDayOfInterval (
    interval: Interval,
    options?: Options
  ): Date[]
  namespace eachDayOfInterval {}

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

  function endOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOYear {}

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
    options?: {
      weekStartsOn?: number
    }
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
    options?: {
      locale?: Locale
    }
  ): string
  namespace format {}

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

  function getISOYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOYear {}

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
    argument: any,
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

  function isSameISOYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOYear {}

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
    options?: {
      weekStartsOn?: number
    }
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
    date: Date,
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

  function lastDayOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOYear {}

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
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfYear {}

  function max (
    datesArray: (Date | string | number)[]
  ): Date
  namespace max {}

  function min (
    datesArray: (Date | string | number)[]
  ): Date
  namespace min {}

  function parse (
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: {
      locale?: Locale,
      weekStartsOn?: number
    }
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
    options?: {
      weekStartsOn?: number
    }
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

  function setISOYear (
    date: Date | string | number,
    isoYear: number,
    options?: Options
  ): Date
  namespace setISOYear {}

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

  function startOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOYear {}

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
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace startOfWeek {}

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

  function subISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subISOYears {}

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
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace toDate {}
}

declare module 'date-fns/add_days' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/add_hours' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/add_iso_years' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/add_milliseconds' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/add_minutes' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/add_months' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/add_quarters' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/add_seconds' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/add_weeks' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/add_years' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/are_intervals_overlapping' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closest_index_to' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closest_to' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compare_asc' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compare_desc' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/difference_in_calendar_days' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/difference_in_calendar_iso_weeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/difference_in_calendar_iso_years' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/difference_in_calendar_months' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/difference_in_calendar_quarters' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/difference_in_calendar_weeks' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/difference_in_calendar_years' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/difference_in_days' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/difference_in_hours' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/difference_in_iso_years' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/difference_in_milliseconds' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/difference_in_minutes' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/difference_in_months' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/difference_in_quarters' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/difference_in_seconds' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/difference_in_weeks' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/difference_in_years' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distance_in_words' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distance_in_words_strict' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/each_day_of_interval' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/end_of_day' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/end_of_hour' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/end_of_iso_week' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/end_of_iso_year' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/end_of_minute' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/end_of_month' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/end_of_quarter' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/end_of_second' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/end_of_week' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/end_of_year' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/get_date' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/get_day' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/get_day_of_year' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/get_days_in_month' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/get_days_in_year' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/get_hours' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/get_iso_day' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/get_iso_week' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/get_iso_weeks_in_year' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/get_iso_year' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/get_milliseconds' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/get_minutes' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/get_month' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/get_overlapping_days_in_intervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/get_quarter' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/get_seconds' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/get_time' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/get_year' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/is_after' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/is_before' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/is_date' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/is_equal' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/is_first_day_of_month' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/is_friday' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/is_last_day_of_month' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/is_leap_year' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/is_monday' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/is_same_day' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/is_same_hour' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/is_same_iso_week' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/is_same_iso_year' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/is_same_minute' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/is_same_month' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/is_same_quarter' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/is_same_second' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/is_same_week' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/is_same_year' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/is_saturday' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/is_sunday' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/is_thursday' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/is_tuesday' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/is_valid' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/is_wednesday' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/is_weekend' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/is_within_interval' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/last_day_of_iso_week' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/last_day_of_iso_year' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/last_day_of_month' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/last_day_of_quarter' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/last_day_of_week' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/last_day_of_year' {
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

declare module 'date-fns/set_date' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/set_day' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/set_day_of_year' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/set_hours' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/set_iso_day' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/set_iso_week' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/set_iso_year' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/set_milliseconds' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/set_minutes' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/set_month' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/set_quarter' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/set_seconds' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/set_year' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/start_of_day' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/start_of_hour' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/start_of_iso_week' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/start_of_iso_year' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/start_of_minute' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/start_of_month' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/start_of_quarter' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/start_of_second' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/start_of_week' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/start_of_year' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/sub_days' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/sub_hours' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/sub_iso_years' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/sub_milliseconds' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/sub_minutes' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/sub_months' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/sub_quarters' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/sub_seconds' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/sub_weeks' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/sub_years' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/to_date' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/add_days/index' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/add_hours/index' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/add_iso_years/index' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/add_milliseconds/index' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/add_minutes/index' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/add_months/index' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/add_quarters/index' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/add_seconds/index' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/add_weeks/index' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/add_years/index' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/are_intervals_overlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closest_index_to/index' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closest_to/index' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compare_asc/index' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compare_desc/index' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/difference_in_calendar_days/index' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/difference_in_calendar_iso_weeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/difference_in_calendar_iso_years/index' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/difference_in_calendar_months/index' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/difference_in_calendar_quarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/difference_in_calendar_weeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/difference_in_calendar_years/index' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/difference_in_days/index' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/difference_in_hours/index' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/difference_in_iso_years/index' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/difference_in_milliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/difference_in_minutes/index' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/difference_in_months/index' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/difference_in_quarters/index' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/difference_in_seconds/index' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/difference_in_weeks/index' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/difference_in_years/index' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distance_in_words/index' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distance_in_words_strict/index' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/each_day_of_interval/index' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/end_of_day/index' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/end_of_hour/index' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/end_of_iso_week/index' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/end_of_iso_year/index' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/end_of_minute/index' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/end_of_month/index' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/end_of_quarter/index' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/end_of_second/index' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/end_of_week/index' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/end_of_year/index' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/get_date/index' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/get_day/index' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/get_day_of_year/index' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/get_days_in_month/index' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/get_days_in_year/index' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/get_hours/index' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/get_iso_day/index' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/get_iso_week/index' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/get_iso_weeks_in_year/index' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/get_iso_year/index' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/get_milliseconds/index' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/get_minutes/index' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/get_month/index' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/get_overlapping_days_in_intervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/get_quarter/index' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/get_seconds/index' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/get_time/index' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/get_year/index' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/is_after/index' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/is_before/index' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/is_date/index' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/is_equal/index' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/is_first_day_of_month/index' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/is_friday/index' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/is_last_day_of_month/index' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/is_leap_year/index' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/is_monday/index' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/is_same_day/index' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/is_same_hour/index' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/is_same_iso_week/index' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/is_same_iso_year/index' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/is_same_minute/index' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/is_same_month/index' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/is_same_quarter/index' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/is_same_second/index' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/is_same_week/index' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/is_same_year/index' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/is_saturday/index' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/is_sunday/index' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/is_thursday/index' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/is_tuesday/index' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/is_valid/index' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/is_wednesday/index' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/is_weekend/index' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/is_within_interval/index' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/last_day_of_iso_week/index' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/last_day_of_iso_year/index' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/last_day_of_month/index' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/last_day_of_quarter/index' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/last_day_of_week/index' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/last_day_of_year/index' {
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

declare module 'date-fns/set_date/index' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/set_day/index' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/set_day_of_year/index' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/set_hours/index' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/set_iso_day/index' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/set_iso_week/index' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/set_iso_year/index' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/set_milliseconds/index' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/set_minutes/index' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/set_month/index' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/set_quarter/index' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/set_seconds/index' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/set_year/index' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/start_of_day/index' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/start_of_hour/index' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/start_of_iso_week/index' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/start_of_iso_year/index' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/start_of_minute/index' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/start_of_month/index' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/start_of_quarter/index' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/start_of_second/index' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/start_of_week/index' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/start_of_year/index' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/sub_days/index' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/sub_hours/index' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/sub_iso_years/index' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/sub_milliseconds/index' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/sub_minutes/index' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/sub_months/index' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/sub_quarters/index' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/sub_seconds/index' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/sub_weeks/index' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/sub_years/index' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/to_date/index' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/add_days/index.js' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/add_hours/index.js' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/add_iso_years/index.js' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/add_milliseconds/index.js' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/add_minutes/index.js' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/add_months/index.js' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/add_quarters/index.js' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/add_seconds/index.js' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/add_weeks/index.js' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/add_years/index.js' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/are_intervals_overlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closest_index_to/index.js' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closest_to/index.js' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compare_asc/index.js' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compare_desc/index.js' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/difference_in_calendar_days/index.js' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/difference_in_calendar_iso_weeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/difference_in_calendar_iso_years/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/difference_in_calendar_months/index.js' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/difference_in_calendar_quarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/difference_in_calendar_weeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/difference_in_calendar_years/index.js' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/difference_in_days/index.js' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/difference_in_hours/index.js' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/difference_in_iso_years/index.js' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/difference_in_milliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/difference_in_minutes/index.js' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/difference_in_months/index.js' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/difference_in_quarters/index.js' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/difference_in_seconds/index.js' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/difference_in_weeks/index.js' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/difference_in_years/index.js' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distance_in_words/index.js' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distance_in_words_strict/index.js' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/each_day_of_interval/index.js' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/end_of_day/index.js' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/end_of_hour/index.js' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/end_of_iso_week/index.js' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/end_of_iso_year/index.js' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/end_of_minute/index.js' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/end_of_month/index.js' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/end_of_quarter/index.js' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/end_of_second/index.js' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/end_of_week/index.js' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/end_of_year/index.js' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index.js' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/get_date/index.js' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/get_day/index.js' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/get_day_of_year/index.js' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/get_days_in_month/index.js' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/get_days_in_year/index.js' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/get_hours/index.js' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/get_iso_day/index.js' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/get_iso_week/index.js' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/get_iso_weeks_in_year/index.js' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/get_iso_year/index.js' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/get_milliseconds/index.js' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/get_minutes/index.js' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/get_month/index.js' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/get_overlapping_days_in_intervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/get_quarter/index.js' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/get_seconds/index.js' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/get_time/index.js' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/get_year/index.js' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/is_after/index.js' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/is_before/index.js' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/is_date/index.js' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/is_equal/index.js' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/is_first_day_of_month/index.js' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/is_friday/index.js' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/is_last_day_of_month/index.js' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/is_leap_year/index.js' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/is_monday/index.js' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/is_same_day/index.js' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/is_same_hour/index.js' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/is_same_iso_week/index.js' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/is_same_iso_year/index.js' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/is_same_minute/index.js' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/is_same_month/index.js' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/is_same_quarter/index.js' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/is_same_second/index.js' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/is_same_week/index.js' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/is_same_year/index.js' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/is_saturday/index.js' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/is_sunday/index.js' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/is_thursday/index.js' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/is_tuesday/index.js' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/is_valid/index.js' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/is_wednesday/index.js' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/is_weekend/index.js' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/is_within_interval/index.js' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/last_day_of_iso_week/index.js' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/last_day_of_iso_year/index.js' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/last_day_of_month/index.js' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/last_day_of_quarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/last_day_of_week/index.js' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/last_day_of_year/index.js' {
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

declare module 'date-fns/set_date/index.js' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/set_day/index.js' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/set_day_of_year/index.js' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/set_hours/index.js' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/set_iso_day/index.js' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/set_iso_week/index.js' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/set_iso_year/index.js' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/set_milliseconds/index.js' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/set_minutes/index.js' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/set_month/index.js' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/set_quarter/index.js' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/set_seconds/index.js' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/set_year/index.js' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/start_of_day/index.js' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/start_of_hour/index.js' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/start_of_iso_week/index.js' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/start_of_iso_year/index.js' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/start_of_minute/index.js' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/start_of_month/index.js' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/start_of_quarter/index.js' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/start_of_second/index.js' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/start_of_week/index.js' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/start_of_year/index.js' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/sub_days/index.js' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/sub_hours/index.js' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/sub_iso_years/index.js' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/sub_milliseconds/index.js' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/sub_minutes/index.js' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/sub_months/index.js' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/sub_quarters/index.js' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/sub_seconds/index.js' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/sub_weeks/index.js' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/sub_years/index.js' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/to_date/index.js' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/es' {
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

  function addISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addISOYears {}

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

  function differenceInCalendarISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOYears {}

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
    options?: {
      weekStartsOn?: number
    }
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

  function differenceInISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInISOYears {}

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

  function distanceInWords (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Locale
    }
  ): string
  namespace distanceInWords {}

  function distanceInWordsStrict (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      addSuffix?: boolean,
      unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
      partialMethod?: 'floor' | 'ceil' | 'round',
      locale?: Locale
    }
  ): string
  namespace distanceInWordsStrict {}

  function eachDayOfInterval (
    interval: Interval,
    options?: Options
  ): Date[]
  namespace eachDayOfInterval {}

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

  function endOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOYear {}

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
    options?: {
      weekStartsOn?: number
    }
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
    options?: {
      locale?: Locale
    }
  ): string
  namespace format {}

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

  function getISOYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOYear {}

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
    argument: any,
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

  function isSameISOYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOYear {}

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
    options?: {
      weekStartsOn?: number
    }
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
    date: Date,
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

  function lastDayOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOYear {}

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
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfYear {}

  function max (
    datesArray: (Date | string | number)[]
  ): Date
  namespace max {}

  function min (
    datesArray: (Date | string | number)[]
  ): Date
  namespace min {}

  function parse (
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: {
      locale?: Locale,
      weekStartsOn?: number
    }
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
    options?: {
      weekStartsOn?: number
    }
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

  function setISOYear (
    date: Date | string | number,
    isoYear: number,
    options?: Options
  ): Date
  namespace setISOYear {}

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

  function startOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOYear {}

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
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace startOfWeek {}

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

  function subISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subISOYears {}

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
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace toDate {}
}

declare module 'date-fns/es/add_days' {
  import {addDays} from 'date-fns/es'
  export default addDays
}

declare module 'date-fns/es/add_hours' {
  import {addHours} from 'date-fns/es'
  export default addHours
}

declare module 'date-fns/es/add_iso_years' {
  import {addISOYears} from 'date-fns/es'
  export default addISOYears
}

declare module 'date-fns/es/add_milliseconds' {
  import {addMilliseconds} from 'date-fns/es'
  export default addMilliseconds
}

declare module 'date-fns/es/add_minutes' {
  import {addMinutes} from 'date-fns/es'
  export default addMinutes
}

declare module 'date-fns/es/add_months' {
  import {addMonths} from 'date-fns/es'
  export default addMonths
}

declare module 'date-fns/es/add_quarters' {
  import {addQuarters} from 'date-fns/es'
  export default addQuarters
}

declare module 'date-fns/es/add_seconds' {
  import {addSeconds} from 'date-fns/es'
  export default addSeconds
}

declare module 'date-fns/es/add_weeks' {
  import {addWeeks} from 'date-fns/es'
  export default addWeeks
}

declare module 'date-fns/es/add_years' {
  import {addYears} from 'date-fns/es'
  export default addYears
}

declare module 'date-fns/es/are_intervals_overlapping' {
  import {areIntervalsOverlapping} from 'date-fns/es'
  export default areIntervalsOverlapping
}

declare module 'date-fns/es/closest_index_to' {
  import {closestIndexTo} from 'date-fns/es'
  export default closestIndexTo
}

declare module 'date-fns/es/closest_to' {
  import {closestTo} from 'date-fns/es'
  export default closestTo
}

declare module 'date-fns/es/compare_asc' {
  import {compareAsc} from 'date-fns/es'
  export default compareAsc
}

declare module 'date-fns/es/compare_desc' {
  import {compareDesc} from 'date-fns/es'
  export default compareDesc
}

declare module 'date-fns/es/difference_in_calendar_days' {
  import {differenceInCalendarDays} from 'date-fns/es'
  export default differenceInCalendarDays
}

declare module 'date-fns/es/difference_in_calendar_iso_weeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns/es'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/es/difference_in_calendar_iso_years' {
  import {differenceInCalendarISOYears} from 'date-fns/es'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/es/difference_in_calendar_months' {
  import {differenceInCalendarMonths} from 'date-fns/es'
  export default differenceInCalendarMonths
}

declare module 'date-fns/es/difference_in_calendar_quarters' {
  import {differenceInCalendarQuarters} from 'date-fns/es'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/es/difference_in_calendar_weeks' {
  import {differenceInCalendarWeeks} from 'date-fns/es'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/es/difference_in_calendar_years' {
  import {differenceInCalendarYears} from 'date-fns/es'
  export default differenceInCalendarYears
}

declare module 'date-fns/es/difference_in_days' {
  import {differenceInDays} from 'date-fns/es'
  export default differenceInDays
}

declare module 'date-fns/es/difference_in_hours' {
  import {differenceInHours} from 'date-fns/es'
  export default differenceInHours
}

declare module 'date-fns/es/difference_in_iso_years' {
  import {differenceInISOYears} from 'date-fns/es'
  export default differenceInISOYears
}

declare module 'date-fns/es/difference_in_milliseconds' {
  import {differenceInMilliseconds} from 'date-fns/es'
  export default differenceInMilliseconds
}

declare module 'date-fns/es/difference_in_minutes' {
  import {differenceInMinutes} from 'date-fns/es'
  export default differenceInMinutes
}

declare module 'date-fns/es/difference_in_months' {
  import {differenceInMonths} from 'date-fns/es'
  export default differenceInMonths
}

declare module 'date-fns/es/difference_in_quarters' {
  import {differenceInQuarters} from 'date-fns/es'
  export default differenceInQuarters
}

declare module 'date-fns/es/difference_in_seconds' {
  import {differenceInSeconds} from 'date-fns/es'
  export default differenceInSeconds
}

declare module 'date-fns/es/difference_in_weeks' {
  import {differenceInWeeks} from 'date-fns/es'
  export default differenceInWeeks
}

declare module 'date-fns/es/difference_in_years' {
  import {differenceInYears} from 'date-fns/es'
  export default differenceInYears
}

declare module 'date-fns/es/distance_in_words' {
  import {distanceInWords} from 'date-fns/es'
  export default distanceInWords
}

declare module 'date-fns/es/distance_in_words_strict' {
  import {distanceInWordsStrict} from 'date-fns/es'
  export default distanceInWordsStrict
}

declare module 'date-fns/es/each_day_of_interval' {
  import {eachDayOfInterval} from 'date-fns/es'
  export default eachDayOfInterval
}

declare module 'date-fns/es/end_of_day' {
  import {endOfDay} from 'date-fns/es'
  export default endOfDay
}

declare module 'date-fns/es/end_of_hour' {
  import {endOfHour} from 'date-fns/es'
  export default endOfHour
}

declare module 'date-fns/es/end_of_iso_week' {
  import {endOfISOWeek} from 'date-fns/es'
  export default endOfISOWeek
}

declare module 'date-fns/es/end_of_iso_year' {
  import {endOfISOYear} from 'date-fns/es'
  export default endOfISOYear
}

declare module 'date-fns/es/end_of_minute' {
  import {endOfMinute} from 'date-fns/es'
  export default endOfMinute
}

declare module 'date-fns/es/end_of_month' {
  import {endOfMonth} from 'date-fns/es'
  export default endOfMonth
}

declare module 'date-fns/es/end_of_quarter' {
  import {endOfQuarter} from 'date-fns/es'
  export default endOfQuarter
}

declare module 'date-fns/es/end_of_second' {
  import {endOfSecond} from 'date-fns/es'
  export default endOfSecond
}

declare module 'date-fns/es/end_of_week' {
  import {endOfWeek} from 'date-fns/es'
  export default endOfWeek
}

declare module 'date-fns/es/end_of_year' {
  import {endOfYear} from 'date-fns/es'
  export default endOfYear
}

declare module 'date-fns/es/format' {
  import {format} from 'date-fns/es'
  export default format
}

declare module 'date-fns/es/get_date' {
  import {getDate} from 'date-fns/es'
  export default getDate
}

declare module 'date-fns/es/get_day' {
  import {getDay} from 'date-fns/es'
  export default getDay
}

declare module 'date-fns/es/get_day_of_year' {
  import {getDayOfYear} from 'date-fns/es'
  export default getDayOfYear
}

declare module 'date-fns/es/get_days_in_month' {
  import {getDaysInMonth} from 'date-fns/es'
  export default getDaysInMonth
}

declare module 'date-fns/es/get_days_in_year' {
  import {getDaysInYear} from 'date-fns/es'
  export default getDaysInYear
}

declare module 'date-fns/es/get_hours' {
  import {getHours} from 'date-fns/es'
  export default getHours
}

declare module 'date-fns/es/get_iso_day' {
  import {getISODay} from 'date-fns/es'
  export default getISODay
}

declare module 'date-fns/es/get_iso_week' {
  import {getISOWeek} from 'date-fns/es'
  export default getISOWeek
}

declare module 'date-fns/es/get_iso_weeks_in_year' {
  import {getISOWeeksInYear} from 'date-fns/es'
  export default getISOWeeksInYear
}

declare module 'date-fns/es/get_iso_year' {
  import {getISOYear} from 'date-fns/es'
  export default getISOYear
}

declare module 'date-fns/es/get_milliseconds' {
  import {getMilliseconds} from 'date-fns/es'
  export default getMilliseconds
}

declare module 'date-fns/es/get_minutes' {
  import {getMinutes} from 'date-fns/es'
  export default getMinutes
}

declare module 'date-fns/es/get_month' {
  import {getMonth} from 'date-fns/es'
  export default getMonth
}

declare module 'date-fns/es/get_overlapping_days_in_intervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns/es'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/es/get_quarter' {
  import {getQuarter} from 'date-fns/es'
  export default getQuarter
}

declare module 'date-fns/es/get_seconds' {
  import {getSeconds} from 'date-fns/es'
  export default getSeconds
}

declare module 'date-fns/es/get_time' {
  import {getTime} from 'date-fns/es'
  export default getTime
}

declare module 'date-fns/es/get_year' {
  import {getYear} from 'date-fns/es'
  export default getYear
}

declare module 'date-fns/es/is_after' {
  import {isAfter} from 'date-fns/es'
  export default isAfter
}

declare module 'date-fns/es/is_before' {
  import {isBefore} from 'date-fns/es'
  export default isBefore
}

declare module 'date-fns/es/is_date' {
  import {isDate} from 'date-fns/es'
  export default isDate
}

declare module 'date-fns/es/is_equal' {
  import {isEqual} from 'date-fns/es'
  export default isEqual
}

declare module 'date-fns/es/is_first_day_of_month' {
  import {isFirstDayOfMonth} from 'date-fns/es'
  export default isFirstDayOfMonth
}

declare module 'date-fns/es/is_friday' {
  import {isFriday} from 'date-fns/es'
  export default isFriday
}

declare module 'date-fns/es/is_last_day_of_month' {
  import {isLastDayOfMonth} from 'date-fns/es'
  export default isLastDayOfMonth
}

declare module 'date-fns/es/is_leap_year' {
  import {isLeapYear} from 'date-fns/es'
  export default isLeapYear
}

declare module 'date-fns/es/is_monday' {
  import {isMonday} from 'date-fns/es'
  export default isMonday
}

declare module 'date-fns/es/is_same_day' {
  import {isSameDay} from 'date-fns/es'
  export default isSameDay
}

declare module 'date-fns/es/is_same_hour' {
  import {isSameHour} from 'date-fns/es'
  export default isSameHour
}

declare module 'date-fns/es/is_same_iso_week' {
  import {isSameISOWeek} from 'date-fns/es'
  export default isSameISOWeek
}

declare module 'date-fns/es/is_same_iso_year' {
  import {isSameISOYear} from 'date-fns/es'
  export default isSameISOYear
}

declare module 'date-fns/es/is_same_minute' {
  import {isSameMinute} from 'date-fns/es'
  export default isSameMinute
}

declare module 'date-fns/es/is_same_month' {
  import {isSameMonth} from 'date-fns/es'
  export default isSameMonth
}

declare module 'date-fns/es/is_same_quarter' {
  import {isSameQuarter} from 'date-fns/es'
  export default isSameQuarter
}

declare module 'date-fns/es/is_same_second' {
  import {isSameSecond} from 'date-fns/es'
  export default isSameSecond
}

declare module 'date-fns/es/is_same_week' {
  import {isSameWeek} from 'date-fns/es'
  export default isSameWeek
}

declare module 'date-fns/es/is_same_year' {
  import {isSameYear} from 'date-fns/es'
  export default isSameYear
}

declare module 'date-fns/es/is_saturday' {
  import {isSaturday} from 'date-fns/es'
  export default isSaturday
}

declare module 'date-fns/es/is_sunday' {
  import {isSunday} from 'date-fns/es'
  export default isSunday
}

declare module 'date-fns/es/is_thursday' {
  import {isThursday} from 'date-fns/es'
  export default isThursday
}

declare module 'date-fns/es/is_tuesday' {
  import {isTuesday} from 'date-fns/es'
  export default isTuesday
}

declare module 'date-fns/es/is_valid' {
  import {isValid} from 'date-fns/es'
  export default isValid
}

declare module 'date-fns/es/is_wednesday' {
  import {isWednesday} from 'date-fns/es'
  export default isWednesday
}

declare module 'date-fns/es/is_weekend' {
  import {isWeekend} from 'date-fns/es'
  export default isWeekend
}

declare module 'date-fns/es/is_within_interval' {
  import {isWithinInterval} from 'date-fns/es'
  export default isWithinInterval
}

declare module 'date-fns/es/last_day_of_iso_week' {
  import {lastDayOfISOWeek} from 'date-fns/es'
  export default lastDayOfISOWeek
}

declare module 'date-fns/es/last_day_of_iso_year' {
  import {lastDayOfISOYear} from 'date-fns/es'
  export default lastDayOfISOYear
}

declare module 'date-fns/es/last_day_of_month' {
  import {lastDayOfMonth} from 'date-fns/es'
  export default lastDayOfMonth
}

declare module 'date-fns/es/last_day_of_quarter' {
  import {lastDayOfQuarter} from 'date-fns/es'
  export default lastDayOfQuarter
}

declare module 'date-fns/es/last_day_of_week' {
  import {lastDayOfWeek} from 'date-fns/es'
  export default lastDayOfWeek
}

declare module 'date-fns/es/last_day_of_year' {
  import {lastDayOfYear} from 'date-fns/es'
  export default lastDayOfYear
}

declare module 'date-fns/es/max' {
  import {max} from 'date-fns/es'
  export default max
}

declare module 'date-fns/es/min' {
  import {min} from 'date-fns/es'
  export default min
}

declare module 'date-fns/es/parse' {
  import {parse} from 'date-fns/es'
  export default parse
}

declare module 'date-fns/es/set_date' {
  import {setDate} from 'date-fns/es'
  export default setDate
}

declare module 'date-fns/es/set_day' {
  import {setDay} from 'date-fns/es'
  export default setDay
}

declare module 'date-fns/es/set_day_of_year' {
  import {setDayOfYear} from 'date-fns/es'
  export default setDayOfYear
}

declare module 'date-fns/es/set_hours' {
  import {setHours} from 'date-fns/es'
  export default setHours
}

declare module 'date-fns/es/set_iso_day' {
  import {setISODay} from 'date-fns/es'
  export default setISODay
}

declare module 'date-fns/es/set_iso_week' {
  import {setISOWeek} from 'date-fns/es'
  export default setISOWeek
}

declare module 'date-fns/es/set_iso_year' {
  import {setISOYear} from 'date-fns/es'
  export default setISOYear
}

declare module 'date-fns/es/set_milliseconds' {
  import {setMilliseconds} from 'date-fns/es'
  export default setMilliseconds
}

declare module 'date-fns/es/set_minutes' {
  import {setMinutes} from 'date-fns/es'
  export default setMinutes
}

declare module 'date-fns/es/set_month' {
  import {setMonth} from 'date-fns/es'
  export default setMonth
}

declare module 'date-fns/es/set_quarter' {
  import {setQuarter} from 'date-fns/es'
  export default setQuarter
}

declare module 'date-fns/es/set_seconds' {
  import {setSeconds} from 'date-fns/es'
  export default setSeconds
}

declare module 'date-fns/es/set_year' {
  import {setYear} from 'date-fns/es'
  export default setYear
}

declare module 'date-fns/es/start_of_day' {
  import {startOfDay} from 'date-fns/es'
  export default startOfDay
}

declare module 'date-fns/es/start_of_hour' {
  import {startOfHour} from 'date-fns/es'
  export default startOfHour
}

declare module 'date-fns/es/start_of_iso_week' {
  import {startOfISOWeek} from 'date-fns/es'
  export default startOfISOWeek
}

declare module 'date-fns/es/start_of_iso_year' {
  import {startOfISOYear} from 'date-fns/es'
  export default startOfISOYear
}

declare module 'date-fns/es/start_of_minute' {
  import {startOfMinute} from 'date-fns/es'
  export default startOfMinute
}

declare module 'date-fns/es/start_of_month' {
  import {startOfMonth} from 'date-fns/es'
  export default startOfMonth
}

declare module 'date-fns/es/start_of_quarter' {
  import {startOfQuarter} from 'date-fns/es'
  export default startOfQuarter
}

declare module 'date-fns/es/start_of_second' {
  import {startOfSecond} from 'date-fns/es'
  export default startOfSecond
}

declare module 'date-fns/es/start_of_week' {
  import {startOfWeek} from 'date-fns/es'
  export default startOfWeek
}

declare module 'date-fns/es/start_of_year' {
  import {startOfYear} from 'date-fns/es'
  export default startOfYear
}

declare module 'date-fns/es/sub_days' {
  import {subDays} from 'date-fns/es'
  export default subDays
}

declare module 'date-fns/es/sub_hours' {
  import {subHours} from 'date-fns/es'
  export default subHours
}

declare module 'date-fns/es/sub_iso_years' {
  import {subISOYears} from 'date-fns/es'
  export default subISOYears
}

declare module 'date-fns/es/sub_milliseconds' {
  import {subMilliseconds} from 'date-fns/es'
  export default subMilliseconds
}

declare module 'date-fns/es/sub_minutes' {
  import {subMinutes} from 'date-fns/es'
  export default subMinutes
}

declare module 'date-fns/es/sub_months' {
  import {subMonths} from 'date-fns/es'
  export default subMonths
}

declare module 'date-fns/es/sub_quarters' {
  import {subQuarters} from 'date-fns/es'
  export default subQuarters
}

declare module 'date-fns/es/sub_seconds' {
  import {subSeconds} from 'date-fns/es'
  export default subSeconds
}

declare module 'date-fns/es/sub_weeks' {
  import {subWeeks} from 'date-fns/es'
  export default subWeeks
}

declare module 'date-fns/es/sub_years' {
  import {subYears} from 'date-fns/es'
  export default subYears
}

declare module 'date-fns/es/to_date' {
  import {toDate} from 'date-fns/es'
  export default toDate
}

declare module 'date-fns/es/add_days/index' {
  import {addDays} from 'date-fns/es'
  export default addDays
}

declare module 'date-fns/es/add_hours/index' {
  import {addHours} from 'date-fns/es'
  export default addHours
}

declare module 'date-fns/es/add_iso_years/index' {
  import {addISOYears} from 'date-fns/es'
  export default addISOYears
}

declare module 'date-fns/es/add_milliseconds/index' {
  import {addMilliseconds} from 'date-fns/es'
  export default addMilliseconds
}

declare module 'date-fns/es/add_minutes/index' {
  import {addMinutes} from 'date-fns/es'
  export default addMinutes
}

declare module 'date-fns/es/add_months/index' {
  import {addMonths} from 'date-fns/es'
  export default addMonths
}

declare module 'date-fns/es/add_quarters/index' {
  import {addQuarters} from 'date-fns/es'
  export default addQuarters
}

declare module 'date-fns/es/add_seconds/index' {
  import {addSeconds} from 'date-fns/es'
  export default addSeconds
}

declare module 'date-fns/es/add_weeks/index' {
  import {addWeeks} from 'date-fns/es'
  export default addWeeks
}

declare module 'date-fns/es/add_years/index' {
  import {addYears} from 'date-fns/es'
  export default addYears
}

declare module 'date-fns/es/are_intervals_overlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns/es'
  export default areIntervalsOverlapping
}

declare module 'date-fns/es/closest_index_to/index' {
  import {closestIndexTo} from 'date-fns/es'
  export default closestIndexTo
}

declare module 'date-fns/es/closest_to/index' {
  import {closestTo} from 'date-fns/es'
  export default closestTo
}

declare module 'date-fns/es/compare_asc/index' {
  import {compareAsc} from 'date-fns/es'
  export default compareAsc
}

declare module 'date-fns/es/compare_desc/index' {
  import {compareDesc} from 'date-fns/es'
  export default compareDesc
}

declare module 'date-fns/es/difference_in_calendar_days/index' {
  import {differenceInCalendarDays} from 'date-fns/es'
  export default differenceInCalendarDays
}

declare module 'date-fns/es/difference_in_calendar_iso_weeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/es'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/es/difference_in_calendar_iso_years/index' {
  import {differenceInCalendarISOYears} from 'date-fns/es'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/es/difference_in_calendar_months/index' {
  import {differenceInCalendarMonths} from 'date-fns/es'
  export default differenceInCalendarMonths
}

declare module 'date-fns/es/difference_in_calendar_quarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns/es'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/es/difference_in_calendar_weeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns/es'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/es/difference_in_calendar_years/index' {
  import {differenceInCalendarYears} from 'date-fns/es'
  export default differenceInCalendarYears
}

declare module 'date-fns/es/difference_in_days/index' {
  import {differenceInDays} from 'date-fns/es'
  export default differenceInDays
}

declare module 'date-fns/es/difference_in_hours/index' {
  import {differenceInHours} from 'date-fns/es'
  export default differenceInHours
}

declare module 'date-fns/es/difference_in_iso_years/index' {
  import {differenceInISOYears} from 'date-fns/es'
  export default differenceInISOYears
}

declare module 'date-fns/es/difference_in_milliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns/es'
  export default differenceInMilliseconds
}

declare module 'date-fns/es/difference_in_minutes/index' {
  import {differenceInMinutes} from 'date-fns/es'
  export default differenceInMinutes
}

declare module 'date-fns/es/difference_in_months/index' {
  import {differenceInMonths} from 'date-fns/es'
  export default differenceInMonths
}

declare module 'date-fns/es/difference_in_quarters/index' {
  import {differenceInQuarters} from 'date-fns/es'
  export default differenceInQuarters
}

declare module 'date-fns/es/difference_in_seconds/index' {
  import {differenceInSeconds} from 'date-fns/es'
  export default differenceInSeconds
}

declare module 'date-fns/es/difference_in_weeks/index' {
  import {differenceInWeeks} from 'date-fns/es'
  export default differenceInWeeks
}

declare module 'date-fns/es/difference_in_years/index' {
  import {differenceInYears} from 'date-fns/es'
  export default differenceInYears
}

declare module 'date-fns/es/distance_in_words/index' {
  import {distanceInWords} from 'date-fns/es'
  export default distanceInWords
}

declare module 'date-fns/es/distance_in_words_strict/index' {
  import {distanceInWordsStrict} from 'date-fns/es'
  export default distanceInWordsStrict
}

declare module 'date-fns/es/each_day_of_interval/index' {
  import {eachDayOfInterval} from 'date-fns/es'
  export default eachDayOfInterval
}

declare module 'date-fns/es/end_of_day/index' {
  import {endOfDay} from 'date-fns/es'
  export default endOfDay
}

declare module 'date-fns/es/end_of_hour/index' {
  import {endOfHour} from 'date-fns/es'
  export default endOfHour
}

declare module 'date-fns/es/end_of_iso_week/index' {
  import {endOfISOWeek} from 'date-fns/es'
  export default endOfISOWeek
}

declare module 'date-fns/es/end_of_iso_year/index' {
  import {endOfISOYear} from 'date-fns/es'
  export default endOfISOYear
}

declare module 'date-fns/es/end_of_minute/index' {
  import {endOfMinute} from 'date-fns/es'
  export default endOfMinute
}

declare module 'date-fns/es/end_of_month/index' {
  import {endOfMonth} from 'date-fns/es'
  export default endOfMonth
}

declare module 'date-fns/es/end_of_quarter/index' {
  import {endOfQuarter} from 'date-fns/es'
  export default endOfQuarter
}

declare module 'date-fns/es/end_of_second/index' {
  import {endOfSecond} from 'date-fns/es'
  export default endOfSecond
}

declare module 'date-fns/es/end_of_week/index' {
  import {endOfWeek} from 'date-fns/es'
  export default endOfWeek
}

declare module 'date-fns/es/end_of_year/index' {
  import {endOfYear} from 'date-fns/es'
  export default endOfYear
}

declare module 'date-fns/es/format/index' {
  import {format} from 'date-fns/es'
  export default format
}

declare module 'date-fns/es/get_date/index' {
  import {getDate} from 'date-fns/es'
  export default getDate
}

declare module 'date-fns/es/get_day/index' {
  import {getDay} from 'date-fns/es'
  export default getDay
}

declare module 'date-fns/es/get_day_of_year/index' {
  import {getDayOfYear} from 'date-fns/es'
  export default getDayOfYear
}

declare module 'date-fns/es/get_days_in_month/index' {
  import {getDaysInMonth} from 'date-fns/es'
  export default getDaysInMonth
}

declare module 'date-fns/es/get_days_in_year/index' {
  import {getDaysInYear} from 'date-fns/es'
  export default getDaysInYear
}

declare module 'date-fns/es/get_hours/index' {
  import {getHours} from 'date-fns/es'
  export default getHours
}

declare module 'date-fns/es/get_iso_day/index' {
  import {getISODay} from 'date-fns/es'
  export default getISODay
}

declare module 'date-fns/es/get_iso_week/index' {
  import {getISOWeek} from 'date-fns/es'
  export default getISOWeek
}

declare module 'date-fns/es/get_iso_weeks_in_year/index' {
  import {getISOWeeksInYear} from 'date-fns/es'
  export default getISOWeeksInYear
}

declare module 'date-fns/es/get_iso_year/index' {
  import {getISOYear} from 'date-fns/es'
  export default getISOYear
}

declare module 'date-fns/es/get_milliseconds/index' {
  import {getMilliseconds} from 'date-fns/es'
  export default getMilliseconds
}

declare module 'date-fns/es/get_minutes/index' {
  import {getMinutes} from 'date-fns/es'
  export default getMinutes
}

declare module 'date-fns/es/get_month/index' {
  import {getMonth} from 'date-fns/es'
  export default getMonth
}

declare module 'date-fns/es/get_overlapping_days_in_intervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns/es'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/es/get_quarter/index' {
  import {getQuarter} from 'date-fns/es'
  export default getQuarter
}

declare module 'date-fns/es/get_seconds/index' {
  import {getSeconds} from 'date-fns/es'
  export default getSeconds
}

declare module 'date-fns/es/get_time/index' {
  import {getTime} from 'date-fns/es'
  export default getTime
}

declare module 'date-fns/es/get_year/index' {
  import {getYear} from 'date-fns/es'
  export default getYear
}

declare module 'date-fns/es/is_after/index' {
  import {isAfter} from 'date-fns/es'
  export default isAfter
}

declare module 'date-fns/es/is_before/index' {
  import {isBefore} from 'date-fns/es'
  export default isBefore
}

declare module 'date-fns/es/is_date/index' {
  import {isDate} from 'date-fns/es'
  export default isDate
}

declare module 'date-fns/es/is_equal/index' {
  import {isEqual} from 'date-fns/es'
  export default isEqual
}

declare module 'date-fns/es/is_first_day_of_month/index' {
  import {isFirstDayOfMonth} from 'date-fns/es'
  export default isFirstDayOfMonth
}

declare module 'date-fns/es/is_friday/index' {
  import {isFriday} from 'date-fns/es'
  export default isFriday
}

declare module 'date-fns/es/is_last_day_of_month/index' {
  import {isLastDayOfMonth} from 'date-fns/es'
  export default isLastDayOfMonth
}

declare module 'date-fns/es/is_leap_year/index' {
  import {isLeapYear} from 'date-fns/es'
  export default isLeapYear
}

declare module 'date-fns/es/is_monday/index' {
  import {isMonday} from 'date-fns/es'
  export default isMonday
}

declare module 'date-fns/es/is_same_day/index' {
  import {isSameDay} from 'date-fns/es'
  export default isSameDay
}

declare module 'date-fns/es/is_same_hour/index' {
  import {isSameHour} from 'date-fns/es'
  export default isSameHour
}

declare module 'date-fns/es/is_same_iso_week/index' {
  import {isSameISOWeek} from 'date-fns/es'
  export default isSameISOWeek
}

declare module 'date-fns/es/is_same_iso_year/index' {
  import {isSameISOYear} from 'date-fns/es'
  export default isSameISOYear
}

declare module 'date-fns/es/is_same_minute/index' {
  import {isSameMinute} from 'date-fns/es'
  export default isSameMinute
}

declare module 'date-fns/es/is_same_month/index' {
  import {isSameMonth} from 'date-fns/es'
  export default isSameMonth
}

declare module 'date-fns/es/is_same_quarter/index' {
  import {isSameQuarter} from 'date-fns/es'
  export default isSameQuarter
}

declare module 'date-fns/es/is_same_second/index' {
  import {isSameSecond} from 'date-fns/es'
  export default isSameSecond
}

declare module 'date-fns/es/is_same_week/index' {
  import {isSameWeek} from 'date-fns/es'
  export default isSameWeek
}

declare module 'date-fns/es/is_same_year/index' {
  import {isSameYear} from 'date-fns/es'
  export default isSameYear
}

declare module 'date-fns/es/is_saturday/index' {
  import {isSaturday} from 'date-fns/es'
  export default isSaturday
}

declare module 'date-fns/es/is_sunday/index' {
  import {isSunday} from 'date-fns/es'
  export default isSunday
}

declare module 'date-fns/es/is_thursday/index' {
  import {isThursday} from 'date-fns/es'
  export default isThursday
}

declare module 'date-fns/es/is_tuesday/index' {
  import {isTuesday} from 'date-fns/es'
  export default isTuesday
}

declare module 'date-fns/es/is_valid/index' {
  import {isValid} from 'date-fns/es'
  export default isValid
}

declare module 'date-fns/es/is_wednesday/index' {
  import {isWednesday} from 'date-fns/es'
  export default isWednesday
}

declare module 'date-fns/es/is_weekend/index' {
  import {isWeekend} from 'date-fns/es'
  export default isWeekend
}

declare module 'date-fns/es/is_within_interval/index' {
  import {isWithinInterval} from 'date-fns/es'
  export default isWithinInterval
}

declare module 'date-fns/es/last_day_of_iso_week/index' {
  import {lastDayOfISOWeek} from 'date-fns/es'
  export default lastDayOfISOWeek
}

declare module 'date-fns/es/last_day_of_iso_year/index' {
  import {lastDayOfISOYear} from 'date-fns/es'
  export default lastDayOfISOYear
}

declare module 'date-fns/es/last_day_of_month/index' {
  import {lastDayOfMonth} from 'date-fns/es'
  export default lastDayOfMonth
}

declare module 'date-fns/es/last_day_of_quarter/index' {
  import {lastDayOfQuarter} from 'date-fns/es'
  export default lastDayOfQuarter
}

declare module 'date-fns/es/last_day_of_week/index' {
  import {lastDayOfWeek} from 'date-fns/es'
  export default lastDayOfWeek
}

declare module 'date-fns/es/last_day_of_year/index' {
  import {lastDayOfYear} from 'date-fns/es'
  export default lastDayOfYear
}

declare module 'date-fns/es/max/index' {
  import {max} from 'date-fns/es'
  export default max
}

declare module 'date-fns/es/min/index' {
  import {min} from 'date-fns/es'
  export default min
}

declare module 'date-fns/es/parse/index' {
  import {parse} from 'date-fns/es'
  export default parse
}

declare module 'date-fns/es/set_date/index' {
  import {setDate} from 'date-fns/es'
  export default setDate
}

declare module 'date-fns/es/set_day/index' {
  import {setDay} from 'date-fns/es'
  export default setDay
}

declare module 'date-fns/es/set_day_of_year/index' {
  import {setDayOfYear} from 'date-fns/es'
  export default setDayOfYear
}

declare module 'date-fns/es/set_hours/index' {
  import {setHours} from 'date-fns/es'
  export default setHours
}

declare module 'date-fns/es/set_iso_day/index' {
  import {setISODay} from 'date-fns/es'
  export default setISODay
}

declare module 'date-fns/es/set_iso_week/index' {
  import {setISOWeek} from 'date-fns/es'
  export default setISOWeek
}

declare module 'date-fns/es/set_iso_year/index' {
  import {setISOYear} from 'date-fns/es'
  export default setISOYear
}

declare module 'date-fns/es/set_milliseconds/index' {
  import {setMilliseconds} from 'date-fns/es'
  export default setMilliseconds
}

declare module 'date-fns/es/set_minutes/index' {
  import {setMinutes} from 'date-fns/es'
  export default setMinutes
}

declare module 'date-fns/es/set_month/index' {
  import {setMonth} from 'date-fns/es'
  export default setMonth
}

declare module 'date-fns/es/set_quarter/index' {
  import {setQuarter} from 'date-fns/es'
  export default setQuarter
}

declare module 'date-fns/es/set_seconds/index' {
  import {setSeconds} from 'date-fns/es'
  export default setSeconds
}

declare module 'date-fns/es/set_year/index' {
  import {setYear} from 'date-fns/es'
  export default setYear
}

declare module 'date-fns/es/start_of_day/index' {
  import {startOfDay} from 'date-fns/es'
  export default startOfDay
}

declare module 'date-fns/es/start_of_hour/index' {
  import {startOfHour} from 'date-fns/es'
  export default startOfHour
}

declare module 'date-fns/es/start_of_iso_week/index' {
  import {startOfISOWeek} from 'date-fns/es'
  export default startOfISOWeek
}

declare module 'date-fns/es/start_of_iso_year/index' {
  import {startOfISOYear} from 'date-fns/es'
  export default startOfISOYear
}

declare module 'date-fns/es/start_of_minute/index' {
  import {startOfMinute} from 'date-fns/es'
  export default startOfMinute
}

declare module 'date-fns/es/start_of_month/index' {
  import {startOfMonth} from 'date-fns/es'
  export default startOfMonth
}

declare module 'date-fns/es/start_of_quarter/index' {
  import {startOfQuarter} from 'date-fns/es'
  export default startOfQuarter
}

declare module 'date-fns/es/start_of_second/index' {
  import {startOfSecond} from 'date-fns/es'
  export default startOfSecond
}

declare module 'date-fns/es/start_of_week/index' {
  import {startOfWeek} from 'date-fns/es'
  export default startOfWeek
}

declare module 'date-fns/es/start_of_year/index' {
  import {startOfYear} from 'date-fns/es'
  export default startOfYear
}

declare module 'date-fns/es/sub_days/index' {
  import {subDays} from 'date-fns/es'
  export default subDays
}

declare module 'date-fns/es/sub_hours/index' {
  import {subHours} from 'date-fns/es'
  export default subHours
}

declare module 'date-fns/es/sub_iso_years/index' {
  import {subISOYears} from 'date-fns/es'
  export default subISOYears
}

declare module 'date-fns/es/sub_milliseconds/index' {
  import {subMilliseconds} from 'date-fns/es'
  export default subMilliseconds
}

declare module 'date-fns/es/sub_minutes/index' {
  import {subMinutes} from 'date-fns/es'
  export default subMinutes
}

declare module 'date-fns/es/sub_months/index' {
  import {subMonths} from 'date-fns/es'
  export default subMonths
}

declare module 'date-fns/es/sub_quarters/index' {
  import {subQuarters} from 'date-fns/es'
  export default subQuarters
}

declare module 'date-fns/es/sub_seconds/index' {
  import {subSeconds} from 'date-fns/es'
  export default subSeconds
}

declare module 'date-fns/es/sub_weeks/index' {
  import {subWeeks} from 'date-fns/es'
  export default subWeeks
}

declare module 'date-fns/es/sub_years/index' {
  import {subYears} from 'date-fns/es'
  export default subYears
}

declare module 'date-fns/es/to_date/index' {
  import {toDate} from 'date-fns/es'
  export default toDate
}

declare module 'date-fns/es/add_days/index.js' {
  import {addDays} from 'date-fns/es'
  export default addDays
}

declare module 'date-fns/es/add_hours/index.js' {
  import {addHours} from 'date-fns/es'
  export default addHours
}

declare module 'date-fns/es/add_iso_years/index.js' {
  import {addISOYears} from 'date-fns/es'
  export default addISOYears
}

declare module 'date-fns/es/add_milliseconds/index.js' {
  import {addMilliseconds} from 'date-fns/es'
  export default addMilliseconds
}

declare module 'date-fns/es/add_minutes/index.js' {
  import {addMinutes} from 'date-fns/es'
  export default addMinutes
}

declare module 'date-fns/es/add_months/index.js' {
  import {addMonths} from 'date-fns/es'
  export default addMonths
}

declare module 'date-fns/es/add_quarters/index.js' {
  import {addQuarters} from 'date-fns/es'
  export default addQuarters
}

declare module 'date-fns/es/add_seconds/index.js' {
  import {addSeconds} from 'date-fns/es'
  export default addSeconds
}

declare module 'date-fns/es/add_weeks/index.js' {
  import {addWeeks} from 'date-fns/es'
  export default addWeeks
}

declare module 'date-fns/es/add_years/index.js' {
  import {addYears} from 'date-fns/es'
  export default addYears
}

declare module 'date-fns/es/are_intervals_overlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns/es'
  export default areIntervalsOverlapping
}

declare module 'date-fns/es/closest_index_to/index.js' {
  import {closestIndexTo} from 'date-fns/es'
  export default closestIndexTo
}

declare module 'date-fns/es/closest_to/index.js' {
  import {closestTo} from 'date-fns/es'
  export default closestTo
}

declare module 'date-fns/es/compare_asc/index.js' {
  import {compareAsc} from 'date-fns/es'
  export default compareAsc
}

declare module 'date-fns/es/compare_desc/index.js' {
  import {compareDesc} from 'date-fns/es'
  export default compareDesc
}

declare module 'date-fns/es/difference_in_calendar_days/index.js' {
  import {differenceInCalendarDays} from 'date-fns/es'
  export default differenceInCalendarDays
}

declare module 'date-fns/es/difference_in_calendar_iso_weeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/es'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/es/difference_in_calendar_iso_years/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns/es'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/es/difference_in_calendar_months/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/es'
  export default differenceInCalendarMonths
}

declare module 'date-fns/es/difference_in_calendar_quarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/es'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/es/difference_in_calendar_weeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/es'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/es/difference_in_calendar_years/index.js' {
  import {differenceInCalendarYears} from 'date-fns/es'
  export default differenceInCalendarYears
}

declare module 'date-fns/es/difference_in_days/index.js' {
  import {differenceInDays} from 'date-fns/es'
  export default differenceInDays
}

declare module 'date-fns/es/difference_in_hours/index.js' {
  import {differenceInHours} from 'date-fns/es'
  export default differenceInHours
}

declare module 'date-fns/es/difference_in_iso_years/index.js' {
  import {differenceInISOYears} from 'date-fns/es'
  export default differenceInISOYears
}

declare module 'date-fns/es/difference_in_milliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns/es'
  export default differenceInMilliseconds
}

declare module 'date-fns/es/difference_in_minutes/index.js' {
  import {differenceInMinutes} from 'date-fns/es'
  export default differenceInMinutes
}

declare module 'date-fns/es/difference_in_months/index.js' {
  import {differenceInMonths} from 'date-fns/es'
  export default differenceInMonths
}

declare module 'date-fns/es/difference_in_quarters/index.js' {
  import {differenceInQuarters} from 'date-fns/es'
  export default differenceInQuarters
}

declare module 'date-fns/es/difference_in_seconds/index.js' {
  import {differenceInSeconds} from 'date-fns/es'
  export default differenceInSeconds
}

declare module 'date-fns/es/difference_in_weeks/index.js' {
  import {differenceInWeeks} from 'date-fns/es'
  export default differenceInWeeks
}

declare module 'date-fns/es/difference_in_years/index.js' {
  import {differenceInYears} from 'date-fns/es'
  export default differenceInYears
}

declare module 'date-fns/es/distance_in_words/index.js' {
  import {distanceInWords} from 'date-fns/es'
  export default distanceInWords
}

declare module 'date-fns/es/distance_in_words_strict/index.js' {
  import {distanceInWordsStrict} from 'date-fns/es'
  export default distanceInWordsStrict
}

declare module 'date-fns/es/each_day_of_interval/index.js' {
  import {eachDayOfInterval} from 'date-fns/es'
  export default eachDayOfInterval
}

declare module 'date-fns/es/end_of_day/index.js' {
  import {endOfDay} from 'date-fns/es'
  export default endOfDay
}

declare module 'date-fns/es/end_of_hour/index.js' {
  import {endOfHour} from 'date-fns/es'
  export default endOfHour
}

declare module 'date-fns/es/end_of_iso_week/index.js' {
  import {endOfISOWeek} from 'date-fns/es'
  export default endOfISOWeek
}

declare module 'date-fns/es/end_of_iso_year/index.js' {
  import {endOfISOYear} from 'date-fns/es'
  export default endOfISOYear
}

declare module 'date-fns/es/end_of_minute/index.js' {
  import {endOfMinute} from 'date-fns/es'
  export default endOfMinute
}

declare module 'date-fns/es/end_of_month/index.js' {
  import {endOfMonth} from 'date-fns/es'
  export default endOfMonth
}

declare module 'date-fns/es/end_of_quarter/index.js' {
  import {endOfQuarter} from 'date-fns/es'
  export default endOfQuarter
}

declare module 'date-fns/es/end_of_second/index.js' {
  import {endOfSecond} from 'date-fns/es'
  export default endOfSecond
}

declare module 'date-fns/es/end_of_week/index.js' {
  import {endOfWeek} from 'date-fns/es'
  export default endOfWeek
}

declare module 'date-fns/es/end_of_year/index.js' {
  import {endOfYear} from 'date-fns/es'
  export default endOfYear
}

declare module 'date-fns/es/format/index.js' {
  import {format} from 'date-fns/es'
  export default format
}

declare module 'date-fns/es/get_date/index.js' {
  import {getDate} from 'date-fns/es'
  export default getDate
}

declare module 'date-fns/es/get_day/index.js' {
  import {getDay} from 'date-fns/es'
  export default getDay
}

declare module 'date-fns/es/get_day_of_year/index.js' {
  import {getDayOfYear} from 'date-fns/es'
  export default getDayOfYear
}

declare module 'date-fns/es/get_days_in_month/index.js' {
  import {getDaysInMonth} from 'date-fns/es'
  export default getDaysInMonth
}

declare module 'date-fns/es/get_days_in_year/index.js' {
  import {getDaysInYear} from 'date-fns/es'
  export default getDaysInYear
}

declare module 'date-fns/es/get_hours/index.js' {
  import {getHours} from 'date-fns/es'
  export default getHours
}

declare module 'date-fns/es/get_iso_day/index.js' {
  import {getISODay} from 'date-fns/es'
  export default getISODay
}

declare module 'date-fns/es/get_iso_week/index.js' {
  import {getISOWeek} from 'date-fns/es'
  export default getISOWeek
}

declare module 'date-fns/es/get_iso_weeks_in_year/index.js' {
  import {getISOWeeksInYear} from 'date-fns/es'
  export default getISOWeeksInYear
}

declare module 'date-fns/es/get_iso_year/index.js' {
  import {getISOYear} from 'date-fns/es'
  export default getISOYear
}

declare module 'date-fns/es/get_milliseconds/index.js' {
  import {getMilliseconds} from 'date-fns/es'
  export default getMilliseconds
}

declare module 'date-fns/es/get_minutes/index.js' {
  import {getMinutes} from 'date-fns/es'
  export default getMinutes
}

declare module 'date-fns/es/get_month/index.js' {
  import {getMonth} from 'date-fns/es'
  export default getMonth
}

declare module 'date-fns/es/get_overlapping_days_in_intervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns/es'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/es/get_quarter/index.js' {
  import {getQuarter} from 'date-fns/es'
  export default getQuarter
}

declare module 'date-fns/es/get_seconds/index.js' {
  import {getSeconds} from 'date-fns/es'
  export default getSeconds
}

declare module 'date-fns/es/get_time/index.js' {
  import {getTime} from 'date-fns/es'
  export default getTime
}

declare module 'date-fns/es/get_year/index.js' {
  import {getYear} from 'date-fns/es'
  export default getYear
}

declare module 'date-fns/es/is_after/index.js' {
  import {isAfter} from 'date-fns/es'
  export default isAfter
}

declare module 'date-fns/es/is_before/index.js' {
  import {isBefore} from 'date-fns/es'
  export default isBefore
}

declare module 'date-fns/es/is_date/index.js' {
  import {isDate} from 'date-fns/es'
  export default isDate
}

declare module 'date-fns/es/is_equal/index.js' {
  import {isEqual} from 'date-fns/es'
  export default isEqual
}

declare module 'date-fns/es/is_first_day_of_month/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/es'
  export default isFirstDayOfMonth
}

declare module 'date-fns/es/is_friday/index.js' {
  import {isFriday} from 'date-fns/es'
  export default isFriday
}

declare module 'date-fns/es/is_last_day_of_month/index.js' {
  import {isLastDayOfMonth} from 'date-fns/es'
  export default isLastDayOfMonth
}

declare module 'date-fns/es/is_leap_year/index.js' {
  import {isLeapYear} from 'date-fns/es'
  export default isLeapYear
}

declare module 'date-fns/es/is_monday/index.js' {
  import {isMonday} from 'date-fns/es'
  export default isMonday
}

declare module 'date-fns/es/is_same_day/index.js' {
  import {isSameDay} from 'date-fns/es'
  export default isSameDay
}

declare module 'date-fns/es/is_same_hour/index.js' {
  import {isSameHour} from 'date-fns/es'
  export default isSameHour
}

declare module 'date-fns/es/is_same_iso_week/index.js' {
  import {isSameISOWeek} from 'date-fns/es'
  export default isSameISOWeek
}

declare module 'date-fns/es/is_same_iso_year/index.js' {
  import {isSameISOYear} from 'date-fns/es'
  export default isSameISOYear
}

declare module 'date-fns/es/is_same_minute/index.js' {
  import {isSameMinute} from 'date-fns/es'
  export default isSameMinute
}

declare module 'date-fns/es/is_same_month/index.js' {
  import {isSameMonth} from 'date-fns/es'
  export default isSameMonth
}

declare module 'date-fns/es/is_same_quarter/index.js' {
  import {isSameQuarter} from 'date-fns/es'
  export default isSameQuarter
}

declare module 'date-fns/es/is_same_second/index.js' {
  import {isSameSecond} from 'date-fns/es'
  export default isSameSecond
}

declare module 'date-fns/es/is_same_week/index.js' {
  import {isSameWeek} from 'date-fns/es'
  export default isSameWeek
}

declare module 'date-fns/es/is_same_year/index.js' {
  import {isSameYear} from 'date-fns/es'
  export default isSameYear
}

declare module 'date-fns/es/is_saturday/index.js' {
  import {isSaturday} from 'date-fns/es'
  export default isSaturday
}

declare module 'date-fns/es/is_sunday/index.js' {
  import {isSunday} from 'date-fns/es'
  export default isSunday
}

declare module 'date-fns/es/is_thursday/index.js' {
  import {isThursday} from 'date-fns/es'
  export default isThursday
}

declare module 'date-fns/es/is_tuesday/index.js' {
  import {isTuesday} from 'date-fns/es'
  export default isTuesday
}

declare module 'date-fns/es/is_valid/index.js' {
  import {isValid} from 'date-fns/es'
  export default isValid
}

declare module 'date-fns/es/is_wednesday/index.js' {
  import {isWednesday} from 'date-fns/es'
  export default isWednesday
}

declare module 'date-fns/es/is_weekend/index.js' {
  import {isWeekend} from 'date-fns/es'
  export default isWeekend
}

declare module 'date-fns/es/is_within_interval/index.js' {
  import {isWithinInterval} from 'date-fns/es'
  export default isWithinInterval
}

declare module 'date-fns/es/last_day_of_iso_week/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/es'
  export default lastDayOfISOWeek
}

declare module 'date-fns/es/last_day_of_iso_year/index.js' {
  import {lastDayOfISOYear} from 'date-fns/es'
  export default lastDayOfISOYear
}

declare module 'date-fns/es/last_day_of_month/index.js' {
  import {lastDayOfMonth} from 'date-fns/es'
  export default lastDayOfMonth
}

declare module 'date-fns/es/last_day_of_quarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns/es'
  export default lastDayOfQuarter
}

declare module 'date-fns/es/last_day_of_week/index.js' {
  import {lastDayOfWeek} from 'date-fns/es'
  export default lastDayOfWeek
}

declare module 'date-fns/es/last_day_of_year/index.js' {
  import {lastDayOfYear} from 'date-fns/es'
  export default lastDayOfYear
}

declare module 'date-fns/es/max/index.js' {
  import {max} from 'date-fns/es'
  export default max
}

declare module 'date-fns/es/min/index.js' {
  import {min} from 'date-fns/es'
  export default min
}

declare module 'date-fns/es/parse/index.js' {
  import {parse} from 'date-fns/es'
  export default parse
}

declare module 'date-fns/es/set_date/index.js' {
  import {setDate} from 'date-fns/es'
  export default setDate
}

declare module 'date-fns/es/set_day/index.js' {
  import {setDay} from 'date-fns/es'
  export default setDay
}

declare module 'date-fns/es/set_day_of_year/index.js' {
  import {setDayOfYear} from 'date-fns/es'
  export default setDayOfYear
}

declare module 'date-fns/es/set_hours/index.js' {
  import {setHours} from 'date-fns/es'
  export default setHours
}

declare module 'date-fns/es/set_iso_day/index.js' {
  import {setISODay} from 'date-fns/es'
  export default setISODay
}

declare module 'date-fns/es/set_iso_week/index.js' {
  import {setISOWeek} from 'date-fns/es'
  export default setISOWeek
}

declare module 'date-fns/es/set_iso_year/index.js' {
  import {setISOYear} from 'date-fns/es'
  export default setISOYear
}

declare module 'date-fns/es/set_milliseconds/index.js' {
  import {setMilliseconds} from 'date-fns/es'
  export default setMilliseconds
}

declare module 'date-fns/es/set_minutes/index.js' {
  import {setMinutes} from 'date-fns/es'
  export default setMinutes
}

declare module 'date-fns/es/set_month/index.js' {
  import {setMonth} from 'date-fns/es'
  export default setMonth
}

declare module 'date-fns/es/set_quarter/index.js' {
  import {setQuarter} from 'date-fns/es'
  export default setQuarter
}

declare module 'date-fns/es/set_seconds/index.js' {
  import {setSeconds} from 'date-fns/es'
  export default setSeconds
}

declare module 'date-fns/es/set_year/index.js' {
  import {setYear} from 'date-fns/es'
  export default setYear
}

declare module 'date-fns/es/start_of_day/index.js' {
  import {startOfDay} from 'date-fns/es'
  export default startOfDay
}

declare module 'date-fns/es/start_of_hour/index.js' {
  import {startOfHour} from 'date-fns/es'
  export default startOfHour
}

declare module 'date-fns/es/start_of_iso_week/index.js' {
  import {startOfISOWeek} from 'date-fns/es'
  export default startOfISOWeek
}

declare module 'date-fns/es/start_of_iso_year/index.js' {
  import {startOfISOYear} from 'date-fns/es'
  export default startOfISOYear
}

declare module 'date-fns/es/start_of_minute/index.js' {
  import {startOfMinute} from 'date-fns/es'
  export default startOfMinute
}

declare module 'date-fns/es/start_of_month/index.js' {
  import {startOfMonth} from 'date-fns/es'
  export default startOfMonth
}

declare module 'date-fns/es/start_of_quarter/index.js' {
  import {startOfQuarter} from 'date-fns/es'
  export default startOfQuarter
}

declare module 'date-fns/es/start_of_second/index.js' {
  import {startOfSecond} from 'date-fns/es'
  export default startOfSecond
}

declare module 'date-fns/es/start_of_week/index.js' {
  import {startOfWeek} from 'date-fns/es'
  export default startOfWeek
}

declare module 'date-fns/es/start_of_year/index.js' {
  import {startOfYear} from 'date-fns/es'
  export default startOfYear
}

declare module 'date-fns/es/sub_days/index.js' {
  import {subDays} from 'date-fns/es'
  export default subDays
}

declare module 'date-fns/es/sub_hours/index.js' {
  import {subHours} from 'date-fns/es'
  export default subHours
}

declare module 'date-fns/es/sub_iso_years/index.js' {
  import {subISOYears} from 'date-fns/es'
  export default subISOYears
}

declare module 'date-fns/es/sub_milliseconds/index.js' {
  import {subMilliseconds} from 'date-fns/es'
  export default subMilliseconds
}

declare module 'date-fns/es/sub_minutes/index.js' {
  import {subMinutes} from 'date-fns/es'
  export default subMinutes
}

declare module 'date-fns/es/sub_months/index.js' {
  import {subMonths} from 'date-fns/es'
  export default subMonths
}

declare module 'date-fns/es/sub_quarters/index.js' {
  import {subQuarters} from 'date-fns/es'
  export default subQuarters
}

declare module 'date-fns/es/sub_seconds/index.js' {
  import {subSeconds} from 'date-fns/es'
  export default subSeconds
}

declare module 'date-fns/es/sub_weeks/index.js' {
  import {subWeeks} from 'date-fns/es'
  export default subWeeks
}

declare module 'date-fns/es/sub_years/index.js' {
  import {subYears} from 'date-fns/es'
  export default subYears
}

declare module 'date-fns/es/to_date/index.js' {
  import {toDate} from 'date-fns/es'
  export default toDate
}

declare module 'date-fns/locale/ar' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/bg' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ca' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/cs' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/da' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/de' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/el' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/en' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/eo' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/es' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fi' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fil' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fr' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/hr' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/id' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/is' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/it' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ja' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ko' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/mk' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nb' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nl' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pl' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pt' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ro' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ru' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sk' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sv' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/th' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/tr' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zh_cn' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zh_tw' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ar/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/bg/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ca/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/cs/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/da/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/de/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/el/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/en/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/eo/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/es/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fi/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fil/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fr/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/hr/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/id/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/is/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/it/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ja/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ko/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/mk/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nb/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nl/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pl/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pt/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ro/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ru/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sk/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sv/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/th/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/tr/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zh_cn/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zh_tw/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ar/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/bg/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ca/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/cs/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/da/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/de/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/el/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/en/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/eo/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/es/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fi/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fil/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fr/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/hr/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/id/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/is/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/it/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ja/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ko/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/mk/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nb/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nl/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pl/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pt/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ro/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ru/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sk/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sv/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/th/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/tr/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zh_cn/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zh_tw/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/es/locale/ar' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/bg' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ca' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/cs' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/da' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/de' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/el' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/en' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/eo' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/es' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/fi' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/fil' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/fr' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/hr' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/id' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/is' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/it' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ja' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ko' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/mk' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/nb' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/nl' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/pl' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/pt' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ro' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ru' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/sk' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/sv' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/th' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/tr' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/zh_cn' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/zh_tw' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ar/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/bg/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ca/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/cs/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/da/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/de/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/el/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/en/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/eo/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/es/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/fi/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/fil/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/fr/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/hr/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/id/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/is/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/it/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ja/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ko/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/mk/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/nb/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/nl/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/pl/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/pt/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ro/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ru/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/sk/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/sv/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/th/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/tr/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/zh_cn/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/zh_tw/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ar/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/bg/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ca/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/cs/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/da/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/de/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/el/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/en/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/eo/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/es/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/fi/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/fil/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/fr/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/hr/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/id/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/is/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/it/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ja/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ko/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/mk/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/nb/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/nl/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/pl/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/pt/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ro/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/ru/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/sk/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/sv/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/th/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/tr/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/zh_cn/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/es/locale/zh_tw/index.js' {
  const locale: Locale
  export default locale
}
