// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it.

/// <reference path="./type-aliases.d.ts" />

// ECMAScript Module Functions

declare module 'date-fns/esm' {
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

declare module 'date-fns/esm/add' {
  import { add } from 'date-fns/esm'
  export default add
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

declare module 'date-fns/esm/clamp' {
  import { clamp } from 'date-fns/esm'
  export default clamp
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

declare module 'date-fns/esm/daysToWeeks' {
  import { daysToWeeks } from 'date-fns/esm'
  export default daysToWeeks
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

declare module 'date-fns/esm/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns/esm'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns/esm'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns/esm'
  export default eachQuarterOfInterval
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

declare module 'date-fns/esm/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns/esm'
  export default eachYearOfInterval
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

declare module 'date-fns/esm/formatDistanceToNowStrict' {
  import { formatDistanceToNowStrict } from 'date-fns/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/esm/formatDuration' {
  import { formatDuration } from 'date-fns/esm'
  export default formatDuration
}

declare module 'date-fns/esm/formatISO' {
  import { formatISO } from 'date-fns/esm'
  export default formatISO
}

declare module 'date-fns/esm/formatISO9075' {
  import { formatISO9075 } from 'date-fns/esm'
  export default formatISO9075
}

declare module 'date-fns/esm/formatISODuration' {
  import { formatISODuration } from 'date-fns/esm'
  export default formatISODuration
}

declare module 'date-fns/esm/formatRelative' {
  import { formatRelative } from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns/esm'
  export default formatRFC3339
}

declare module 'date-fns/esm/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns/esm'
  export default formatRFC7231
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

declare module 'date-fns/esm/getDefaultOptions' {
  import { getDefaultOptions } from 'date-fns/esm'
  export default getDefaultOptions
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

declare module 'date-fns/esm/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns/esm'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns/esm'
  export default hoursToMinutes
}

declare module 'date-fns/esm/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns/esm'
  export default hoursToSeconds
}

declare module 'date-fns/esm/intervalToDuration' {
  import { intervalToDuration } from 'date-fns/esm'
  export default intervalToDuration
}

declare module 'date-fns/esm/intlFormat' {
  import { intlFormat } from 'date-fns/esm'
  export default intlFormat
}

declare module 'date-fns/esm/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns/esm'
  export default intlFormatDistance
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

declare module 'date-fns/esm/isExists' {
  import { isExists } from 'date-fns/esm'
  export default isExists
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

declare module 'date-fns/esm/isMatch' {
  import { isMatch } from 'date-fns/esm'
  export default isMatch
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

declare module 'date-fns/esm/milliseconds' {
  import { milliseconds } from 'date-fns/esm'
  export default milliseconds
}

declare module 'date-fns/esm/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns/esm'
  export default millisecondsToHours
}

declare module 'date-fns/esm/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns/esm'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns/esm'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/min' {
  import { min } from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/minutesToHours' {
  import { minutesToHours } from 'date-fns/esm'
  export default minutesToHours
}

declare module 'date-fns/esm/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns/esm'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns/esm'
  export default minutesToSeconds
}

declare module 'date-fns/esm/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns/esm'
  export default monthsToQuarters
}

declare module 'date-fns/esm/monthsToYears' {
  import { monthsToYears } from 'date-fns/esm'
  export default monthsToYears
}

declare module 'date-fns/esm/nextDay' {
  import { nextDay } from 'date-fns/esm'
  export default nextDay
}

declare module 'date-fns/esm/nextFriday' {
  import { nextFriday } from 'date-fns/esm'
  export default nextFriday
}

declare module 'date-fns/esm/nextMonday' {
  import { nextMonday } from 'date-fns/esm'
  export default nextMonday
}

declare module 'date-fns/esm/nextSaturday' {
  import { nextSaturday } from 'date-fns/esm'
  export default nextSaturday
}

declare module 'date-fns/esm/nextSunday' {
  import { nextSunday } from 'date-fns/esm'
  export default nextSunday
}

declare module 'date-fns/esm/nextThursday' {
  import { nextThursday } from 'date-fns/esm'
  export default nextThursday
}

declare module 'date-fns/esm/nextTuesday' {
  import { nextTuesday } from 'date-fns/esm'
  export default nextTuesday
}

declare module 'date-fns/esm/nextWednesday' {
  import { nextWednesday } from 'date-fns/esm'
  export default nextWednesday
}

declare module 'date-fns/esm/parse' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/parseJSON' {
  import { parseJSON } from 'date-fns/esm'
  export default parseJSON
}

declare module 'date-fns/esm/previousDay' {
  import { previousDay } from 'date-fns/esm'
  export default previousDay
}

declare module 'date-fns/esm/previousFriday' {
  import { previousFriday } from 'date-fns/esm'
  export default previousFriday
}

declare module 'date-fns/esm/previousMonday' {
  import { previousMonday } from 'date-fns/esm'
  export default previousMonday
}

declare module 'date-fns/esm/previousSaturday' {
  import { previousSaturday } from 'date-fns/esm'
  export default previousSaturday
}

declare module 'date-fns/esm/previousSunday' {
  import { previousSunday } from 'date-fns/esm'
  export default previousSunday
}

declare module 'date-fns/esm/previousThursday' {
  import { previousThursday } from 'date-fns/esm'
  export default previousThursday
}

declare module 'date-fns/esm/previousTuesday' {
  import { previousTuesday } from 'date-fns/esm'
  export default previousTuesday
}

declare module 'date-fns/esm/previousWednesday' {
  import { previousWednesday } from 'date-fns/esm'
  export default previousWednesday
}

declare module 'date-fns/esm/quartersToMonths' {
  import { quartersToMonths } from 'date-fns/esm'
  export default quartersToMonths
}

declare module 'date-fns/esm/quartersToYears' {
  import { quartersToYears } from 'date-fns/esm'
  export default quartersToYears
}

declare module 'date-fns/esm/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/secondsToHours' {
  import { secondsToHours } from 'date-fns/esm'
  export default secondsToHours
}

declare module 'date-fns/esm/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns/esm'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns/esm'
  export default secondsToMinutes
}

declare module 'date-fns/esm/set' {
  import { set } from 'date-fns/esm'
  export default set
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

declare module 'date-fns/esm/setDefaultOptions' {
  import { setDefaultOptions } from 'date-fns/esm'
  export default setDefaultOptions
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

declare module 'date-fns/esm/sub' {
  import { sub } from 'date-fns/esm'
  export default sub
}

declare module 'date-fns/esm/subBusinessDays' {
  import { subBusinessDays } from 'date-fns/esm'
  export default subBusinessDays
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

declare module 'date-fns/esm/weeksToDays' {
  import { weeksToDays } from 'date-fns/esm'
  export default weeksToDays
}

declare module 'date-fns/esm/yearsToMonths' {
  import { yearsToMonths } from 'date-fns/esm'
  export default yearsToMonths
}

declare module 'date-fns/esm/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns/esm'
  export default yearsToQuarters
}

declare module 'date-fns/esm/add/index' {
  import { add } from 'date-fns/esm'
  export default add
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

declare module 'date-fns/esm/clamp/index' {
  import { clamp } from 'date-fns/esm'
  export default clamp
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

declare module 'date-fns/esm/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns/esm'
  export default daysToWeeks
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

declare module 'date-fns/esm/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns/esm'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns/esm'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns/esm'
  export default eachQuarterOfInterval
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

declare module 'date-fns/esm/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns/esm'
  export default eachYearOfInterval
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

declare module 'date-fns/esm/formatDistanceToNowStrict/index' {
  import { formatDistanceToNowStrict } from 'date-fns/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/esm/formatDuration/index' {
  import { formatDuration } from 'date-fns/esm'
  export default formatDuration
}

declare module 'date-fns/esm/formatISO/index' {
  import { formatISO } from 'date-fns/esm'
  export default formatISO
}

declare module 'date-fns/esm/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns/esm'
  export default formatISO9075
}

declare module 'date-fns/esm/formatISODuration/index' {
  import { formatISODuration } from 'date-fns/esm'
  export default formatISODuration
}

declare module 'date-fns/esm/formatRelative/index' {
  import { formatRelative } from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns/esm'
  export default formatRFC3339
}

declare module 'date-fns/esm/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns/esm'
  export default formatRFC7231
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

declare module 'date-fns/esm/getDefaultOptions/index' {
  import { getDefaultOptions } from 'date-fns/esm'
  export default getDefaultOptions
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

declare module 'date-fns/esm/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns/esm'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns/esm'
  export default hoursToMinutes
}

declare module 'date-fns/esm/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns/esm'
  export default hoursToSeconds
}

declare module 'date-fns/esm/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns/esm'
  export default intervalToDuration
}

declare module 'date-fns/esm/intlFormat/index' {
  import { intlFormat } from 'date-fns/esm'
  export default intlFormat
}

declare module 'date-fns/esm/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns/esm'
  export default intlFormatDistance
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

declare module 'date-fns/esm/isExists/index' {
  import { isExists } from 'date-fns/esm'
  export default isExists
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

declare module 'date-fns/esm/isMatch/index' {
  import { isMatch } from 'date-fns/esm'
  export default isMatch
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

declare module 'date-fns/esm/milliseconds/index' {
  import { milliseconds } from 'date-fns/esm'
  export default milliseconds
}

declare module 'date-fns/esm/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns/esm'
  export default millisecondsToHours
}

declare module 'date-fns/esm/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns/esm'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns/esm'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/min/index' {
  import { min } from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/minutesToHours/index' {
  import { minutesToHours } from 'date-fns/esm'
  export default minutesToHours
}

declare module 'date-fns/esm/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns/esm'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns/esm'
  export default minutesToSeconds
}

declare module 'date-fns/esm/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns/esm'
  export default monthsToQuarters
}

declare module 'date-fns/esm/monthsToYears/index' {
  import { monthsToYears } from 'date-fns/esm'
  export default monthsToYears
}

declare module 'date-fns/esm/nextDay/index' {
  import { nextDay } from 'date-fns/esm'
  export default nextDay
}

declare module 'date-fns/esm/nextFriday/index' {
  import { nextFriday } from 'date-fns/esm'
  export default nextFriday
}

declare module 'date-fns/esm/nextMonday/index' {
  import { nextMonday } from 'date-fns/esm'
  export default nextMonday
}

declare module 'date-fns/esm/nextSaturday/index' {
  import { nextSaturday } from 'date-fns/esm'
  export default nextSaturday
}

declare module 'date-fns/esm/nextSunday/index' {
  import { nextSunday } from 'date-fns/esm'
  export default nextSunday
}

declare module 'date-fns/esm/nextThursday/index' {
  import { nextThursday } from 'date-fns/esm'
  export default nextThursday
}

declare module 'date-fns/esm/nextTuesday/index' {
  import { nextTuesday } from 'date-fns/esm'
  export default nextTuesday
}

declare module 'date-fns/esm/nextWednesday/index' {
  import { nextWednesday } from 'date-fns/esm'
  export default nextWednesday
}

declare module 'date-fns/esm/parse/index' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO/index' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/parseJSON/index' {
  import { parseJSON } from 'date-fns/esm'
  export default parseJSON
}

declare module 'date-fns/esm/previousDay/index' {
  import { previousDay } from 'date-fns/esm'
  export default previousDay
}

declare module 'date-fns/esm/previousFriday/index' {
  import { previousFriday } from 'date-fns/esm'
  export default previousFriday
}

declare module 'date-fns/esm/previousMonday/index' {
  import { previousMonday } from 'date-fns/esm'
  export default previousMonday
}

declare module 'date-fns/esm/previousSaturday/index' {
  import { previousSaturday } from 'date-fns/esm'
  export default previousSaturday
}

declare module 'date-fns/esm/previousSunday/index' {
  import { previousSunday } from 'date-fns/esm'
  export default previousSunday
}

declare module 'date-fns/esm/previousThursday/index' {
  import { previousThursday } from 'date-fns/esm'
  export default previousThursday
}

declare module 'date-fns/esm/previousTuesday/index' {
  import { previousTuesday } from 'date-fns/esm'
  export default previousTuesday
}

declare module 'date-fns/esm/previousWednesday/index' {
  import { previousWednesday } from 'date-fns/esm'
  export default previousWednesday
}

declare module 'date-fns/esm/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns/esm'
  export default quartersToMonths
}

declare module 'date-fns/esm/quartersToYears/index' {
  import { quartersToYears } from 'date-fns/esm'
  export default quartersToYears
}

declare module 'date-fns/esm/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/secondsToHours/index' {
  import { secondsToHours } from 'date-fns/esm'
  export default secondsToHours
}

declare module 'date-fns/esm/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns/esm'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns/esm'
  export default secondsToMinutes
}

declare module 'date-fns/esm/set/index' {
  import { set } from 'date-fns/esm'
  export default set
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

declare module 'date-fns/esm/setDefaultOptions/index' {
  import { setDefaultOptions } from 'date-fns/esm'
  export default setDefaultOptions
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

declare module 'date-fns/esm/sub/index' {
  import { sub } from 'date-fns/esm'
  export default sub
}

declare module 'date-fns/esm/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns/esm'
  export default subBusinessDays
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

declare module 'date-fns/esm/weeksToDays/index' {
  import { weeksToDays } from 'date-fns/esm'
  export default weeksToDays
}

declare module 'date-fns/esm/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns/esm'
  export default yearsToMonths
}

declare module 'date-fns/esm/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns/esm'
  export default yearsToQuarters
}

declare module 'date-fns/esm/add/index.js' {
  import { add } from 'date-fns/esm'
  export default add
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

declare module 'date-fns/esm/clamp/index.js' {
  import { clamp } from 'date-fns/esm'
  export default clamp
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

declare module 'date-fns/esm/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns/esm'
  export default daysToWeeks
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

declare module 'date-fns/esm/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns/esm'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns/esm'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns/esm'
  export default eachQuarterOfInterval
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

declare module 'date-fns/esm/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns/esm'
  export default eachYearOfInterval
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

declare module 'date-fns/esm/formatDistanceToNowStrict/index.js' {
  import { formatDistanceToNowStrict } from 'date-fns/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/esm/formatDuration/index.js' {
  import { formatDuration } from 'date-fns/esm'
  export default formatDuration
}

declare module 'date-fns/esm/formatISO/index.js' {
  import { formatISO } from 'date-fns/esm'
  export default formatISO
}

declare module 'date-fns/esm/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns/esm'
  export default formatISO9075
}

declare module 'date-fns/esm/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns/esm'
  export default formatISODuration
}

declare module 'date-fns/esm/formatRelative/index.js' {
  import { formatRelative } from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns/esm'
  export default formatRFC3339
}

declare module 'date-fns/esm/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns/esm'
  export default formatRFC7231
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

declare module 'date-fns/esm/getDefaultOptions/index.js' {
  import { getDefaultOptions } from 'date-fns/esm'
  export default getDefaultOptions
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

declare module 'date-fns/esm/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns/esm'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns/esm'
  export default hoursToMinutes
}

declare module 'date-fns/esm/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns/esm'
  export default hoursToSeconds
}

declare module 'date-fns/esm/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns/esm'
  export default intervalToDuration
}

declare module 'date-fns/esm/intlFormat/index.js' {
  import { intlFormat } from 'date-fns/esm'
  export default intlFormat
}

declare module 'date-fns/esm/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns/esm'
  export default intlFormatDistance
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

declare module 'date-fns/esm/isExists/index.js' {
  import { isExists } from 'date-fns/esm'
  export default isExists
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

declare module 'date-fns/esm/isMatch/index.js' {
  import { isMatch } from 'date-fns/esm'
  export default isMatch
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

declare module 'date-fns/esm/milliseconds/index.js' {
  import { milliseconds } from 'date-fns/esm'
  export default milliseconds
}

declare module 'date-fns/esm/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns/esm'
  export default millisecondsToHours
}

declare module 'date-fns/esm/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns/esm'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns/esm'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/min/index.js' {
  import { min } from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns/esm'
  export default minutesToHours
}

declare module 'date-fns/esm/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns/esm'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns/esm'
  export default minutesToSeconds
}

declare module 'date-fns/esm/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns/esm'
  export default monthsToQuarters
}

declare module 'date-fns/esm/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns/esm'
  export default monthsToYears
}

declare module 'date-fns/esm/nextDay/index.js' {
  import { nextDay } from 'date-fns/esm'
  export default nextDay
}

declare module 'date-fns/esm/nextFriday/index.js' {
  import { nextFriday } from 'date-fns/esm'
  export default nextFriday
}

declare module 'date-fns/esm/nextMonday/index.js' {
  import { nextMonday } from 'date-fns/esm'
  export default nextMonday
}

declare module 'date-fns/esm/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns/esm'
  export default nextSaturday
}

declare module 'date-fns/esm/nextSunday/index.js' {
  import { nextSunday } from 'date-fns/esm'
  export default nextSunday
}

declare module 'date-fns/esm/nextThursday/index.js' {
  import { nextThursday } from 'date-fns/esm'
  export default nextThursday
}

declare module 'date-fns/esm/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns/esm'
  export default nextTuesday
}

declare module 'date-fns/esm/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns/esm'
  export default nextWednesday
}

declare module 'date-fns/esm/parse/index.js' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO/index.js' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/parseJSON/index.js' {
  import { parseJSON } from 'date-fns/esm'
  export default parseJSON
}

declare module 'date-fns/esm/previousDay/index.js' {
  import { previousDay } from 'date-fns/esm'
  export default previousDay
}

declare module 'date-fns/esm/previousFriday/index.js' {
  import { previousFriday } from 'date-fns/esm'
  export default previousFriday
}

declare module 'date-fns/esm/previousMonday/index.js' {
  import { previousMonday } from 'date-fns/esm'
  export default previousMonday
}

declare module 'date-fns/esm/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns/esm'
  export default previousSaturday
}

declare module 'date-fns/esm/previousSunday/index.js' {
  import { previousSunday } from 'date-fns/esm'
  export default previousSunday
}

declare module 'date-fns/esm/previousThursday/index.js' {
  import { previousThursday } from 'date-fns/esm'
  export default previousThursday
}

declare module 'date-fns/esm/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns/esm'
  export default previousTuesday
}

declare module 'date-fns/esm/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns/esm'
  export default previousWednesday
}

declare module 'date-fns/esm/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns/esm'
  export default quartersToMonths
}

declare module 'date-fns/esm/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns/esm'
  export default quartersToYears
}

declare module 'date-fns/esm/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns/esm'
  export default secondsToHours
}

declare module 'date-fns/esm/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns/esm'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns/esm'
  export default secondsToMinutes
}

declare module 'date-fns/esm/set/index.js' {
  import { set } from 'date-fns/esm'
  export default set
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

declare module 'date-fns/esm/setDefaultOptions/index.js' {
  import { setDefaultOptions } from 'date-fns/esm'
  export default setDefaultOptions
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

declare module 'date-fns/esm/sub/index.js' {
  import { sub } from 'date-fns/esm'
  export default sub
}

declare module 'date-fns/esm/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns/esm'
  export default subBusinessDays
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

declare module 'date-fns/esm/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns/esm'
  export default weeksToDays
}

declare module 'date-fns/esm/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns/esm'
  export default yearsToMonths
}

declare module 'date-fns/esm/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns/esm'
  export default yearsToQuarters
}
