// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it.

/// <reference path="./type-aliases.d.ts" />

// Regular Functions

declare module 'date-fns' {
  function add(date: Date | number, duration: Duration): Date
  namespace add {}

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
    intervalRight: Interval,
    options?: {
      inclusive?: boolean
    }
  ): boolean
  namespace areIntervalsOverlapping {}

  function clamp(date: Date | number, interval: Interval): Date
  namespace clamp {}

  function closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number | undefined
  namespace closestIndexTo {}

  function closestTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): Date | undefined
  namespace closestTo {}

  function compareAsc(dateLeft: Date | number, dateRight: Date | number): number
  namespace compareAsc {}

  function compareDesc(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace compareDesc {}

  function daysToWeeks(days: number): number
  namespace daysToWeeks {}

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
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
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
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
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

  function eachHourOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachHourOfInterval {}

  function eachMinuteOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachMinuteOfInterval {}

  function eachMonthOfInterval(interval: Interval): Date[]
  namespace eachMonthOfInterval {}

  function eachQuarterOfInterval(interval: Interval): Date[]
  namespace eachQuarterOfInterval {}

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

  function eachYearOfInterval(interval: Interval): Date[]
  namespace eachYearOfInterval {}

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

  function formatDistanceToNowStrict(
    date: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNowStrict {}

  function formatDuration(
    duration: Duration,
    options?: {
      format?: string[]
      zero?: boolean
      delimiter?: string
      locale?: Locale
    }
  ): string
  namespace formatDuration {}

  function formatISO(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO {}

  function formatISO9075(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO9075 {}

  function formatISODuration(duration: Duration): string
  namespace formatISODuration {}

  function formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string
  namespace formatRelative {}

  function formatRFC3339(
    date: Date | number,
    options?: {
      fractionDigits?: 0 | 1 | 2 | 3
    }
  ): string
  namespace formatRFC3339 {}

  function formatRFC7231(date: Date | number): string
  namespace formatRFC7231 {}

  function fromUnixTime(unixTime: number): Date
  namespace fromUnixTime {}

  function getDate(date: Date | number): number
  namespace getDate {}

  function getDay(date: Date | number): 0 | 1 | 2 | 3 | 4 | 5 | 6
  namespace getDay {}

  function getDayOfYear(date: Date | number): number
  namespace getDayOfYear {}

  function getDaysInMonth(date: Date | number): number
  namespace getDaysInMonth {}

  function getDaysInYear(date: Date | number): number
  namespace getDaysInYear {}

  function getDecade(date: Date | number): number
  namespace getDecade {}

  function getDefaultOptions(): Object
  namespace getDefaultOptions {}

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

  function hoursToMilliseconds(hours: number): number
  namespace hoursToMilliseconds {}

  function hoursToMinutes(hours: number): number
  namespace hoursToMinutes {}

  function hoursToSeconds(hours: number): number
  namespace hoursToSeconds {}

  function intervalToDuration(interval: Interval): Duration
  namespace intervalToDuration {}

  function intlFormat(
    argument: Date | number,
    formatOptions?: {
      localeMatcher?: 'lookup' | 'best fit'
      weekday?: 'narrow' | 'short' | 'long'
      era?: 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      day?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      second?: 'numeric' | '2-digit'
      timeZoneName?: 'short' | 'long'
      formatMatcher?: 'basic' | 'best fit'
      hour12?: boolean
      timeZone?: string
    },
    localeOptions?: {
      locale?: string | string[]
    }
  ): string
  namespace intlFormat {}

  function intlFormatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      unit?: string
      locale?: string | string[]
      localeMatcher?: string
      numeric?: string
      style?: string
    }
  ): string
  namespace intlFormatDistance {}

  function isAfter(date: Date | number, dateToCompare: Date | number): boolean
  namespace isAfter {}

  function isBefore(date: Date | number, dateToCompare: Date | number): boolean
  namespace isBefore {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isEqual(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isEqual {}

  function isExists(year: number, month: number, day: number): boolean
  namespace isExists {}

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

  function isMatch(
    dateString: string,
    formatString: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): boolean
  namespace isMatch {}

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

  function milliseconds(duration: Duration): number
  namespace milliseconds {}

  function millisecondsToHours(milliseconds: number): number
  namespace millisecondsToHours {}

  function millisecondsToMinutes(milliseconds: number): number
  namespace millisecondsToMinutes {}

  function millisecondsToSeconds(milliseconds: number): number
  namespace millisecondsToSeconds {}

  function min(datesArray: (Date | number)[]): Date
  namespace min {}

  function minutesToHours(minutes: number): number
  namespace minutesToHours {}

  function minutesToMilliseconds(minutes: number): number
  namespace minutesToMilliseconds {}

  function minutesToSeconds(minutes: number): number
  namespace minutesToSeconds {}

  function monthsToQuarters(months: number): number
  namespace monthsToQuarters {}

  function monthsToYears(months: number): number
  namespace monthsToYears {}

  function nextDay(date: Date | number, day: Day): Date
  namespace nextDay {}

  function nextFriday(date: Date | number): Date
  namespace nextFriday {}

  function nextMonday(date: Date | number): Date
  namespace nextMonday {}

  function nextSaturday(date: Date | number): Date
  namespace nextSaturday {}

  function nextSunday(date: Date | number): Date
  namespace nextSunday {}

  function nextThursday(date: Date | number): Date
  namespace nextThursday {}

  function nextTuesday(date: Date | number): Date
  namespace nextTuesday {}

  function nextWednesday(date: Date | number): Date
  namespace nextWednesday {}

  function parse(
    dateString: string,
    formatString: string,
    referenceDate: Date | number,
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

  function parseJSON(argument: string | number | Date): Date
  namespace parseJSON {}

  function previousDay(date: Date | number, day: number): Date
  namespace previousDay {}

  function previousFriday(date: Date | number): Date
  namespace previousFriday {}

  function previousMonday(date: Date | number): Date
  namespace previousMonday {}

  function previousSaturday(date: Date | number): Date
  namespace previousSaturday {}

  function previousSunday(date: Date | number): Date
  namespace previousSunday {}

  function previousThursday(date: Date | number): Date
  namespace previousThursday {}

  function previousTuesday(date: Date | number): Date
  namespace previousTuesday {}

  function previousWednesday(date: Date | number): Date
  namespace previousWednesday {}

  function quartersToMonths(quarters: number): number
  namespace quartersToMonths {}

  function quartersToYears(quarters: number): number
  namespace quartersToYears {}

  function roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
    }
  ): Date
  namespace roundToNearestMinutes {}

  function secondsToHours(seconds: number): number
  namespace secondsToHours {}

  function secondsToMilliseconds(seconds: number): number
  namespace secondsToMilliseconds {}

  function secondsToMinutes(seconds: number): number
  namespace secondsToMinutes {}

  function set(
    date: Date | number,
    values: {
      year?: number
      month?: number
      date?: number
      hours?: number
      minutes?: number
      seconds?: number
      milliseconds?: number
    }
  ): Date
  namespace set {}

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

  function setDefaultOptions(newOptions: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }): void
  namespace setDefaultOptions {}

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

  function sub(date: Date | number, duration: Duration): Date
  namespace sub {}

  function subBusinessDays(date: Date | number, amount: number): Date
  namespace subBusinessDays {}

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

  function weeksToDays(weeks: number): number
  namespace weeksToDays {}

  function yearsToMonths(years: number): number
  namespace yearsToMonths {}

  function yearsToQuarters(years: number): number
  namespace yearsToQuarters {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns/constants' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns/constants/index' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns/constants/index.js' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns/add' {
  import { add } from 'date-fns'
  export default add
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

declare module 'date-fns/clamp' {
  import { clamp } from 'date-fns'
  export default clamp
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

declare module 'date-fns/daysToWeeks' {
  import { daysToWeeks } from 'date-fns'
  export default daysToWeeks
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

declare module 'date-fns/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns'
  export default eachHourOfInterval
}

declare module 'date-fns/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns'
  export default eachMinuteOfInterval
}

declare module 'date-fns/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns'
  export default eachMonthOfInterval
}

declare module 'date-fns/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns'
  export default eachQuarterOfInterval
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

declare module 'date-fns/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns'
  export default eachYearOfInterval
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

declare module 'date-fns/formatDistanceToNowStrict' {
  import { formatDistanceToNowStrict } from 'date-fns'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/formatDuration' {
  import { formatDuration } from 'date-fns'
  export default formatDuration
}

declare module 'date-fns/formatISO' {
  import { formatISO } from 'date-fns'
  export default formatISO
}

declare module 'date-fns/formatISO9075' {
  import { formatISO9075 } from 'date-fns'
  export default formatISO9075
}

declare module 'date-fns/formatISODuration' {
  import { formatISODuration } from 'date-fns'
  export default formatISODuration
}

declare module 'date-fns/formatRelative' {
  import { formatRelative } from 'date-fns'
  export default formatRelative
}

declare module 'date-fns/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns'
  export default formatRFC3339
}

declare module 'date-fns/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns'
  export default formatRFC7231
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

declare module 'date-fns/getDefaultOptions' {
  import { getDefaultOptions } from 'date-fns'
  export default getDefaultOptions
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

declare module 'date-fns/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns'
  export default hoursToMilliseconds
}

declare module 'date-fns/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns'
  export default hoursToMinutes
}

declare module 'date-fns/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns'
  export default hoursToSeconds
}

declare module 'date-fns/intervalToDuration' {
  import { intervalToDuration } from 'date-fns'
  export default intervalToDuration
}

declare module 'date-fns/intlFormat' {
  import { intlFormat } from 'date-fns'
  export default intlFormat
}

declare module 'date-fns/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns'
  export default intlFormatDistance
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

declare module 'date-fns/isExists' {
  import { isExists } from 'date-fns'
  export default isExists
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

declare module 'date-fns/isMatch' {
  import { isMatch } from 'date-fns'
  export default isMatch
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

declare module 'date-fns/milliseconds' {
  import { milliseconds } from 'date-fns'
  export default milliseconds
}

declare module 'date-fns/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns'
  export default millisecondsToHours
}

declare module 'date-fns/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns'
  export default millisecondsToMinutes
}

declare module 'date-fns/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns'
  export default millisecondsToSeconds
}

declare module 'date-fns/min' {
  import { min } from 'date-fns'
  export default min
}

declare module 'date-fns/minutesToHours' {
  import { minutesToHours } from 'date-fns'
  export default minutesToHours
}

declare module 'date-fns/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns'
  export default minutesToMilliseconds
}

declare module 'date-fns/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns'
  export default minutesToSeconds
}

declare module 'date-fns/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns'
  export default monthsToQuarters
}

declare module 'date-fns/monthsToYears' {
  import { monthsToYears } from 'date-fns'
  export default monthsToYears
}

declare module 'date-fns/nextDay' {
  import { nextDay } from 'date-fns'
  export default nextDay
}

declare module 'date-fns/nextFriday' {
  import { nextFriday } from 'date-fns'
  export default nextFriday
}

declare module 'date-fns/nextMonday' {
  import { nextMonday } from 'date-fns'
  export default nextMonday
}

declare module 'date-fns/nextSaturday' {
  import { nextSaturday } from 'date-fns'
  export default nextSaturday
}

declare module 'date-fns/nextSunday' {
  import { nextSunday } from 'date-fns'
  export default nextSunday
}

declare module 'date-fns/nextThursday' {
  import { nextThursday } from 'date-fns'
  export default nextThursday
}

declare module 'date-fns/nextTuesday' {
  import { nextTuesday } from 'date-fns'
  export default nextTuesday
}

declare module 'date-fns/nextWednesday' {
  import { nextWednesday } from 'date-fns'
  export default nextWednesday
}

declare module 'date-fns/parse' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/parseJSON' {
  import { parseJSON } from 'date-fns'
  export default parseJSON
}

declare module 'date-fns/previousDay' {
  import { previousDay } from 'date-fns'
  export default previousDay
}

declare module 'date-fns/previousFriday' {
  import { previousFriday } from 'date-fns'
  export default previousFriday
}

declare module 'date-fns/previousMonday' {
  import { previousMonday } from 'date-fns'
  export default previousMonday
}

declare module 'date-fns/previousSaturday' {
  import { previousSaturday } from 'date-fns'
  export default previousSaturday
}

declare module 'date-fns/previousSunday' {
  import { previousSunday } from 'date-fns'
  export default previousSunday
}

declare module 'date-fns/previousThursday' {
  import { previousThursday } from 'date-fns'
  export default previousThursday
}

declare module 'date-fns/previousTuesday' {
  import { previousTuesday } from 'date-fns'
  export default previousTuesday
}

declare module 'date-fns/previousWednesday' {
  import { previousWednesday } from 'date-fns'
  export default previousWednesday
}

declare module 'date-fns/quartersToMonths' {
  import { quartersToMonths } from 'date-fns'
  export default quartersToMonths
}

declare module 'date-fns/quartersToYears' {
  import { quartersToYears } from 'date-fns'
  export default quartersToYears
}

declare module 'date-fns/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns'
  export default roundToNearestMinutes
}

declare module 'date-fns/secondsToHours' {
  import { secondsToHours } from 'date-fns'
  export default secondsToHours
}

declare module 'date-fns/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns'
  export default secondsToMilliseconds
}

declare module 'date-fns/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns'
  export default secondsToMinutes
}

declare module 'date-fns/set' {
  import { set } from 'date-fns'
  export default set
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

declare module 'date-fns/setDefaultOptions' {
  import { setDefaultOptions } from 'date-fns'
  export default setDefaultOptions
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

declare module 'date-fns/sub' {
  import { sub } from 'date-fns'
  export default sub
}

declare module 'date-fns/subBusinessDays' {
  import { subBusinessDays } from 'date-fns'
  export default subBusinessDays
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

declare module 'date-fns/weeksToDays' {
  import { weeksToDays } from 'date-fns'
  export default weeksToDays
}

declare module 'date-fns/yearsToMonths' {
  import { yearsToMonths } from 'date-fns'
  export default yearsToMonths
}

declare module 'date-fns/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns'
  export default yearsToQuarters
}

declare module 'date-fns/add/index' {
  import { add } from 'date-fns'
  export default add
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

declare module 'date-fns/clamp/index' {
  import { clamp } from 'date-fns'
  export default clamp
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

declare module 'date-fns/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns'
  export default daysToWeeks
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

declare module 'date-fns/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns'
  export default eachHourOfInterval
}

declare module 'date-fns/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns'
  export default eachMinuteOfInterval
}

declare module 'date-fns/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns'
  export default eachMonthOfInterval
}

declare module 'date-fns/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns'
  export default eachQuarterOfInterval
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

declare module 'date-fns/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns'
  export default eachYearOfInterval
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

declare module 'date-fns/formatDistanceToNowStrict/index' {
  import { formatDistanceToNowStrict } from 'date-fns'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/formatDuration/index' {
  import { formatDuration } from 'date-fns'
  export default formatDuration
}

declare module 'date-fns/formatISO/index' {
  import { formatISO } from 'date-fns'
  export default formatISO
}

declare module 'date-fns/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns'
  export default formatISO9075
}

declare module 'date-fns/formatISODuration/index' {
  import { formatISODuration } from 'date-fns'
  export default formatISODuration
}

declare module 'date-fns/formatRelative/index' {
  import { formatRelative } from 'date-fns'
  export default formatRelative
}

declare module 'date-fns/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns'
  export default formatRFC3339
}

declare module 'date-fns/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns'
  export default formatRFC7231
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

declare module 'date-fns/getDefaultOptions/index' {
  import { getDefaultOptions } from 'date-fns'
  export default getDefaultOptions
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

declare module 'date-fns/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns'
  export default hoursToMilliseconds
}

declare module 'date-fns/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns'
  export default hoursToMinutes
}

declare module 'date-fns/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns'
  export default hoursToSeconds
}

declare module 'date-fns/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns'
  export default intervalToDuration
}

declare module 'date-fns/intlFormat/index' {
  import { intlFormat } from 'date-fns'
  export default intlFormat
}

declare module 'date-fns/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns'
  export default intlFormatDistance
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

declare module 'date-fns/isExists/index' {
  import { isExists } from 'date-fns'
  export default isExists
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

declare module 'date-fns/isMatch/index' {
  import { isMatch } from 'date-fns'
  export default isMatch
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

declare module 'date-fns/milliseconds/index' {
  import { milliseconds } from 'date-fns'
  export default milliseconds
}

declare module 'date-fns/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns'
  export default millisecondsToHours
}

declare module 'date-fns/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns'
  export default millisecondsToMinutes
}

declare module 'date-fns/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns'
  export default millisecondsToSeconds
}

declare module 'date-fns/min/index' {
  import { min } from 'date-fns'
  export default min
}

declare module 'date-fns/minutesToHours/index' {
  import { minutesToHours } from 'date-fns'
  export default minutesToHours
}

declare module 'date-fns/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns'
  export default minutesToMilliseconds
}

declare module 'date-fns/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns'
  export default minutesToSeconds
}

declare module 'date-fns/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns'
  export default monthsToQuarters
}

declare module 'date-fns/monthsToYears/index' {
  import { monthsToYears } from 'date-fns'
  export default monthsToYears
}

declare module 'date-fns/nextDay/index' {
  import { nextDay } from 'date-fns'
  export default nextDay
}

declare module 'date-fns/nextFriday/index' {
  import { nextFriday } from 'date-fns'
  export default nextFriday
}

declare module 'date-fns/nextMonday/index' {
  import { nextMonday } from 'date-fns'
  export default nextMonday
}

declare module 'date-fns/nextSaturday/index' {
  import { nextSaturday } from 'date-fns'
  export default nextSaturday
}

declare module 'date-fns/nextSunday/index' {
  import { nextSunday } from 'date-fns'
  export default nextSunday
}

declare module 'date-fns/nextThursday/index' {
  import { nextThursday } from 'date-fns'
  export default nextThursday
}

declare module 'date-fns/nextTuesday/index' {
  import { nextTuesday } from 'date-fns'
  export default nextTuesday
}

declare module 'date-fns/nextWednesday/index' {
  import { nextWednesday } from 'date-fns'
  export default nextWednesday
}

declare module 'date-fns/parse/index' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO/index' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/parseJSON/index' {
  import { parseJSON } from 'date-fns'
  export default parseJSON
}

declare module 'date-fns/previousDay/index' {
  import { previousDay } from 'date-fns'
  export default previousDay
}

declare module 'date-fns/previousFriday/index' {
  import { previousFriday } from 'date-fns'
  export default previousFriday
}

declare module 'date-fns/previousMonday/index' {
  import { previousMonday } from 'date-fns'
  export default previousMonday
}

declare module 'date-fns/previousSaturday/index' {
  import { previousSaturday } from 'date-fns'
  export default previousSaturday
}

declare module 'date-fns/previousSunday/index' {
  import { previousSunday } from 'date-fns'
  export default previousSunday
}

declare module 'date-fns/previousThursday/index' {
  import { previousThursday } from 'date-fns'
  export default previousThursday
}

declare module 'date-fns/previousTuesday/index' {
  import { previousTuesday } from 'date-fns'
  export default previousTuesday
}

declare module 'date-fns/previousWednesday/index' {
  import { previousWednesday } from 'date-fns'
  export default previousWednesday
}

declare module 'date-fns/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns'
  export default quartersToMonths
}

declare module 'date-fns/quartersToYears/index' {
  import { quartersToYears } from 'date-fns'
  export default quartersToYears
}

declare module 'date-fns/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns'
  export default roundToNearestMinutes
}

declare module 'date-fns/secondsToHours/index' {
  import { secondsToHours } from 'date-fns'
  export default secondsToHours
}

declare module 'date-fns/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns'
  export default secondsToMilliseconds
}

declare module 'date-fns/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns'
  export default secondsToMinutes
}

declare module 'date-fns/set/index' {
  import { set } from 'date-fns'
  export default set
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

declare module 'date-fns/setDefaultOptions/index' {
  import { setDefaultOptions } from 'date-fns'
  export default setDefaultOptions
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

declare module 'date-fns/sub/index' {
  import { sub } from 'date-fns'
  export default sub
}

declare module 'date-fns/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns'
  export default subBusinessDays
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

declare module 'date-fns/weeksToDays/index' {
  import { weeksToDays } from 'date-fns'
  export default weeksToDays
}

declare module 'date-fns/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns'
  export default yearsToMonths
}

declare module 'date-fns/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns'
  export default yearsToQuarters
}

declare module 'date-fns/add/index.js' {
  import { add } from 'date-fns'
  export default add
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

declare module 'date-fns/clamp/index.js' {
  import { clamp } from 'date-fns'
  export default clamp
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

declare module 'date-fns/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns'
  export default daysToWeeks
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

declare module 'date-fns/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns'
  export default eachHourOfInterval
}

declare module 'date-fns/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns'
  export default eachMinuteOfInterval
}

declare module 'date-fns/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns'
  export default eachMonthOfInterval
}

declare module 'date-fns/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns'
  export default eachQuarterOfInterval
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

declare module 'date-fns/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns'
  export default eachYearOfInterval
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

declare module 'date-fns/formatDistanceToNowStrict/index.js' {
  import { formatDistanceToNowStrict } from 'date-fns'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/formatDuration/index.js' {
  import { formatDuration } from 'date-fns'
  export default formatDuration
}

declare module 'date-fns/formatISO/index.js' {
  import { formatISO } from 'date-fns'
  export default formatISO
}

declare module 'date-fns/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns'
  export default formatISO9075
}

declare module 'date-fns/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns'
  export default formatISODuration
}

declare module 'date-fns/formatRelative/index.js' {
  import { formatRelative } from 'date-fns'
  export default formatRelative
}

declare module 'date-fns/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns'
  export default formatRFC3339
}

declare module 'date-fns/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns'
  export default formatRFC7231
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

declare module 'date-fns/getDefaultOptions/index.js' {
  import { getDefaultOptions } from 'date-fns'
  export default getDefaultOptions
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

declare module 'date-fns/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns'
  export default hoursToMilliseconds
}

declare module 'date-fns/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns'
  export default hoursToMinutes
}

declare module 'date-fns/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns'
  export default hoursToSeconds
}

declare module 'date-fns/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns'
  export default intervalToDuration
}

declare module 'date-fns/intlFormat/index.js' {
  import { intlFormat } from 'date-fns'
  export default intlFormat
}

declare module 'date-fns/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns'
  export default intlFormatDistance
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

declare module 'date-fns/isExists/index.js' {
  import { isExists } from 'date-fns'
  export default isExists
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

declare module 'date-fns/isMatch/index.js' {
  import { isMatch } from 'date-fns'
  export default isMatch
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

declare module 'date-fns/milliseconds/index.js' {
  import { milliseconds } from 'date-fns'
  export default milliseconds
}

declare module 'date-fns/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns'
  export default millisecondsToHours
}

declare module 'date-fns/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns'
  export default millisecondsToMinutes
}

declare module 'date-fns/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns'
  export default millisecondsToSeconds
}

declare module 'date-fns/min/index.js' {
  import { min } from 'date-fns'
  export default min
}

declare module 'date-fns/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns'
  export default minutesToHours
}

declare module 'date-fns/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns'
  export default minutesToMilliseconds
}

declare module 'date-fns/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns'
  export default minutesToSeconds
}

declare module 'date-fns/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns'
  export default monthsToQuarters
}

declare module 'date-fns/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns'
  export default monthsToYears
}

declare module 'date-fns/nextDay/index.js' {
  import { nextDay } from 'date-fns'
  export default nextDay
}

declare module 'date-fns/nextFriday/index.js' {
  import { nextFriday } from 'date-fns'
  export default nextFriday
}

declare module 'date-fns/nextMonday/index.js' {
  import { nextMonday } from 'date-fns'
  export default nextMonday
}

declare module 'date-fns/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns'
  export default nextSaturday
}

declare module 'date-fns/nextSunday/index.js' {
  import { nextSunday } from 'date-fns'
  export default nextSunday
}

declare module 'date-fns/nextThursday/index.js' {
  import { nextThursday } from 'date-fns'
  export default nextThursday
}

declare module 'date-fns/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns'
  export default nextTuesday
}

declare module 'date-fns/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns'
  export default nextWednesday
}

declare module 'date-fns/parse/index.js' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO/index.js' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/parseJSON/index.js' {
  import { parseJSON } from 'date-fns'
  export default parseJSON
}

declare module 'date-fns/previousDay/index.js' {
  import { previousDay } from 'date-fns'
  export default previousDay
}

declare module 'date-fns/previousFriday/index.js' {
  import { previousFriday } from 'date-fns'
  export default previousFriday
}

declare module 'date-fns/previousMonday/index.js' {
  import { previousMonday } from 'date-fns'
  export default previousMonday
}

declare module 'date-fns/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns'
  export default previousSaturday
}

declare module 'date-fns/previousSunday/index.js' {
  import { previousSunday } from 'date-fns'
  export default previousSunday
}

declare module 'date-fns/previousThursday/index.js' {
  import { previousThursday } from 'date-fns'
  export default previousThursday
}

declare module 'date-fns/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns'
  export default previousTuesday
}

declare module 'date-fns/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns'
  export default previousWednesday
}

declare module 'date-fns/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns'
  export default quartersToMonths
}

declare module 'date-fns/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns'
  export default quartersToYears
}

declare module 'date-fns/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns'
  export default roundToNearestMinutes
}

declare module 'date-fns/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns'
  export default secondsToHours
}

declare module 'date-fns/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns'
  export default secondsToMilliseconds
}

declare module 'date-fns/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns'
  export default secondsToMinutes
}

declare module 'date-fns/set/index.js' {
  import { set } from 'date-fns'
  export default set
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

declare module 'date-fns/setDefaultOptions/index.js' {
  import { setDefaultOptions } from 'date-fns'
  export default setDefaultOptions
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

declare module 'date-fns/sub/index.js' {
  import { sub } from 'date-fns'
  export default sub
}

declare module 'date-fns/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns'
  export default subBusinessDays
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

declare module 'date-fns/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns'
  export default weeksToDays
}

declare module 'date-fns/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns'
  export default yearsToMonths
}

declare module 'date-fns/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns'
  export default yearsToQuarters
}
