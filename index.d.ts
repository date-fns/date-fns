declare module 'date-fns' {
  function addDays (
    date: Date | string | number,
    amount: number
  ): Date
  namespace addDays {}

  function addHours (
    date: Date | string | number,
    amount: number
  ): Date
  namespace addHours {}

  function addISOYears (
    date: Date | string | number,
    amount: number
  ): Date
  namespace addISOYears {}

  function addMilliseconds (
    date: Date | string | number,
    amount: number
  ): Date
  namespace addMilliseconds {}

  function addMinutes (
    date: Date | string | number,
    amount: number
  ): Date
  namespace addMinutes {}

  function addMonths (
    date: Date | string | number,
    amount: number
  ): Date
  namespace addMonths {}

  function addQuarters (
    date: Date | string | number,
    amount: number
  ): Date
  namespace addQuarters {}

  function addSeconds (
    date: Date | string | number,
    amount: number
  ): Date
  namespace addSeconds {}

  function addWeeks (
    date: Date | string | number,
    amount: number
  ): Date
  namespace addWeeks {}

  function addYears (
    date: Date | string | number,
    amount: number
  ): Date
  namespace addYears {}

  function areRangesOverlapping (
    initialRangeStartDate: Date | string | number,
    initialRangeEndDate: Date | string | number,
    comparedRangeStartDate: Date | string | number,
    comparedRangeEndDate: Date | string | number
  ): boolean
  namespace areRangesOverlapping {}

  function closestIndexTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[]
  ): number
  namespace closestIndexTo {}

  function closestTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[]
  ): Date
  namespace closestTo {}

  function compareAsc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace compareAsc {}

  function compareDesc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace compareDesc {}

  function differenceInCalendarDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInCalendarISOYears {}

  function differenceInCalendarMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
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
    dateRight: Date | string | number
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInDays {}

  function differenceInHours (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInHours {}

  function differenceInISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInISOYears {}

  function differenceInMilliseconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInWeeks {}

  function differenceInYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number
  namespace differenceInYears {}

  function distanceInWords (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Object
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
      locale?: Object
    }
  ): string
  namespace distanceInWordsStrict {}

  function distanceInWordsToNow (
    date: Date | string | number,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Object
    }
  ): string
  namespace distanceInWordsToNow {}

  function eachDay (
    startDate: Date | string | number,
    endDate: Date | string | number
  ): Date[]
  namespace eachDay {}

  function endOfDay (
    date: Date | string | number
  ): Date
  namespace endOfDay {}

  function endOfHour (
    date: Date | string | number
  ): Date
  namespace endOfHour {}

  function endOfISOWeek (
    date: Date | string | number
  ): Date
  namespace endOfISOWeek {}

  function endOfISOYear (
    date: Date | string | number
  ): Date
  namespace endOfISOYear {}

  function endOfMinute (
    date: Date | string | number
  ): Date
  namespace endOfMinute {}

  function endOfMonth (
    date: Date | string | number
  ): Date
  namespace endOfMonth {}

  function endOfQuarter (
    date: Date | string | number
  ): Date
  namespace endOfQuarter {}

  function endOfSecond (
    date: Date | string | number
  ): Date
  namespace endOfSecond {}

  function endOfToday (): Date
  namespace endOfToday {}

  function endOfTomorrow (): Date
  namespace endOfTomorrow {}

  function endOfWeek (
    date: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear (
    date: Date | string | number
  ): Date
  namespace endOfYear {}

  function endOfYesterday (): Date
  namespace endOfYesterday {}

  function format (
    date: Date | string | number,
    format?: string,
    options?: {
      locale?: Object
    }
  ): string
  namespace format {}

  function getDate (
    date: Date | string | number
  ): number
  namespace getDate {}

  function getDay (
    date: Date | string | number
  ): number
  namespace getDay {}

  function getDayOfYear (
    date: Date | string | number
  ): number
  namespace getDayOfYear {}

  function getDaysInMonth (
    date: Date | string | number
  ): number
  namespace getDaysInMonth {}

  function getDaysInYear (
    date: Date | string | number
  ): number
  namespace getDaysInYear {}

  function getHours (
    date: Date | string | number
  ): number
  namespace getHours {}

  function getISODay (
    date: Date | string | number
  ): number
  namespace getISODay {}

  function getISOWeek (
    date: Date | string | number
  ): number
  namespace getISOWeek {}

  function getISOWeeksInYear (
    date: Date | string | number
  ): number
  namespace getISOWeeksInYear {}

  function getISOYear (
    date: Date | string | number
  ): number
  namespace getISOYear {}

  function getMilliseconds (
    date: Date | string | number
  ): number
  namespace getMilliseconds {}

  function getMinutes (
    date: Date | string | number
  ): number
  namespace getMinutes {}

  function getMonth (
    date: Date | string | number
  ): number
  namespace getMonth {}

  function getOverlappingDaysInRanges (
    initialRangeStartDate: Date | string | number,
    initialRangeEndDate: Date | string | number,
    comparedRangeStartDate: Date | string | number,
    comparedRangeEndDate: Date | string | number
  ): number
  namespace getOverlappingDaysInRanges {}

  function getQuarter (
    date: Date | string | number
  ): number
  namespace getQuarter {}

  function getSeconds (
    date: Date | string | number
  ): number
  namespace getSeconds {}

  function getTime (
    date: Date | string | number
  ): number
  namespace getTime {}

  function getYear (
    date: Date | string | number
  ): number
  namespace getYear {}

  function isAfter (
    date: Date | string | number,
    dateToCompare: Date | string | number
  ): boolean
  namespace isAfter {}

  function isBefore (
    date: Date | string | number,
    dateToCompare: Date | string | number
  ): boolean
  namespace isBefore {}

  function isDate (
    argument: any
  ): boolean
  namespace isDate {}

  function isEqual (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean
  namespace isEqual {}

  function isFirstDayOfMonth (
    date: Date | string | number
  ): boolean
  namespace isFirstDayOfMonth {}

  function isFriday (
    date: Date | string | number
  ): boolean
  namespace isFriday {}

  function isFuture (
    date: Date | string | number
  ): boolean
  namespace isFuture {}

  function isLastDayOfMonth (
    date: Date | string | number
  ): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear (
    date: Date | string | number
  ): boolean
  namespace isLeapYear {}

  function isMonday (
    date: Date | string | number
  ): boolean
  namespace isMonday {}

  function isPast (
    date: Date | string | number
  ): boolean
  namespace isPast {}

  function isSameDay (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean
  namespace isSameDay {}

  function isSameHour (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean
  namespace isSameISOYear {}

  function isSameMinute (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean
  namespace isSameMinute {}

  function isSameMonth (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond (
    dateLeft: Date | string | number,
    dateRight: Date | string | number
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
    dateRight: Date | string | number
  ): boolean
  namespace isSameYear {}

  function isSaturday (
    date: Date | string | number
  ): boolean
  namespace isSaturday {}

  function isSunday (
    date: Date | string | number
  ): boolean
  namespace isSunday {}

  function isThisHour (
    date: Date | string | number
  ): boolean
  namespace isThisHour {}

  function isThisISOWeek (
    date: Date | string | number
  ): boolean
  namespace isThisISOWeek {}

  function isThisISOYear (
    date: Date | string | number
  ): boolean
  namespace isThisISOYear {}

  function isThisMinute (
    date: Date | string | number
  ): boolean
  namespace isThisMinute {}

  function isThisMonth (
    date: Date | string | number
  ): boolean
  namespace isThisMonth {}

  function isThisQuarter (
    date: Date | string | number
  ): boolean
  namespace isThisQuarter {}

  function isThisSecond (
    date: Date | string | number
  ): boolean
  namespace isThisSecond {}

  function isThisWeek (
    date: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): boolean
  namespace isThisWeek {}

  function isThisYear (
    date: Date | string | number
  ): boolean
  namespace isThisYear {}

  function isThursday (
    date: Date | string | number
  ): boolean
  namespace isThursday {}

  function isToday (
    date: Date | string | number
  ): boolean
  namespace isToday {}

  function isTomorrow (
    date: Date | string | number
  ): boolean
  namespace isTomorrow {}

  function isTuesday (
    date: Date | string | number
  ): boolean
  namespace isTuesday {}

  function isValid (
    date: Date
  ): boolean
  namespace isValid {}

  function isWednesday (
    date: Date | string | number
  ): boolean
  namespace isWednesday {}

  function isWeekend (
    date: Date | string | number
  ): boolean
  namespace isWeekend {}

  function isWithinRange (
    date: Date | string | number,
    startDate: Date | string | number,
    endDate: Date | string | number
  ): boolean
  namespace isWithinRange {}

  function isYesterday (
    date: Date | string | number
  ): boolean
  namespace isYesterday {}

  function lastDayOfISOWeek (
    date: Date | string | number
  ): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOYear (
    date: Date | string | number
  ): Date
  namespace lastDayOfISOYear {}

  function lastDayOfMonth (
    date: Date | string | number
  ): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter (
    date: Date | string | number
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
    date: Date | string | number
  ): Date
  namespace lastDayOfYear {}

  function max (
    ...dates: (Date | string | number)[]
  ): Date
  namespace max {}

  function min (
    ...dates: (Date | string | number)[]
  ): Date
  namespace min {}

  function parse (
    argument: Date | string | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace parse {}

  function setDate (
    date: Date | string | number,
    dayOfMonth: number
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
    dayOfYear: number
  ): Date
  namespace setDayOfYear {}

  function setHours (
    date: Date | string | number,
    hours: number
  ): Date
  namespace setHours {}

  function setISODay (
    date: Date | string | number,
    day: number
  ): Date
  namespace setISODay {}

  function setISOWeek (
    date: Date | string | number,
    isoWeek: number
  ): Date
  namespace setISOWeek {}

  function setISOYear (
    date: Date | string | number,
    isoYear: number
  ): Date
  namespace setISOYear {}

  function setMilliseconds (
    date: Date | string | number,
    milliseconds: number
  ): Date
  namespace setMilliseconds {}

  function setMinutes (
    date: Date | string | number,
    minutes: number
  ): Date
  namespace setMinutes {}

  function setMonth (
    date: Date | string | number,
    month: number
  ): Date
  namespace setMonth {}

  function setQuarter (
    date: Date | string | number,
    quarter: number
  ): Date
  namespace setQuarter {}

  function setSeconds (
    date: Date | string | number,
    seconds: number
  ): Date
  namespace setSeconds {}

  function setYear (
    date: Date | string | number,
    year: number
  ): Date
  namespace setYear {}

  function startOfDay (
    date: Date | string | number
  ): Date
  namespace startOfDay {}

  function startOfHour (
    date: Date | string | number
  ): Date
  namespace startOfHour {}

  function startOfISOWeek (
    date: Date | string | number
  ): Date
  namespace startOfISOWeek {}

  function startOfISOYear (
    date: Date | string | number
  ): Date
  namespace startOfISOYear {}

  function startOfMinute (
    date: Date | string | number
  ): Date
  namespace startOfMinute {}

  function startOfMonth (
    date: Date | string | number
  ): Date
  namespace startOfMonth {}

  function startOfQuarter (
    date: Date | string | number
  ): Date
  namespace startOfQuarter {}

  function startOfSecond (
    date: Date | string | number
  ): Date
  namespace startOfSecond {}

  function startOfToday (): Date
  namespace startOfToday {}

  function startOfTomorrow (): Date
  namespace startOfTomorrow {}

  function startOfWeek (
    date: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace startOfWeek {}

  function startOfYear (
    date: Date | string | number
  ): Date
  namespace startOfYear {}

  function startOfYesterday (): Date
  namespace startOfYesterday {}

  function subDays (
    date: Date | string | number,
    amount: number
  ): Date
  namespace subDays {}

  function subHours (
    date: Date | string | number,
    amount: number
  ): Date
  namespace subHours {}

  function subISOYears (
    date: Date | string | number,
    amount: number
  ): Date
  namespace subISOYears {}

  function subMilliseconds (
    date: Date | string | number,
    amount: number
  ): Date
  namespace subMilliseconds {}

  function subMinutes (
    date: Date | string | number,
    amount: number
  ): Date
  namespace subMinutes {}

  function subMonths (
    date: Date | string | number,
    amount: number
  ): Date
  namespace subMonths {}

  function subQuarters (
    date: Date | string | number,
    amount: number
  ): Date
  namespace subQuarters {}

  function subSeconds (
    date: Date | string | number,
    amount: number
  ): Date
  namespace subSeconds {}

  function subWeeks (
    date: Date | string | number,
    amount: number
  ): Date
  namespace subWeeks {}

  function subYears (
    date: Date | string | number,
    amount: number
  ): Date
  namespace subYears {}
}
