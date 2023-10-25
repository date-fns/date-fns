// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it.

/// <reference path="./type-aliases.d.ts" />

// ECMAScript Module FP Functions

declare module 'date-fns/esm/fp' {
  const add: CurriedFn2<Duration, Date | number, Date>
  namespace add {}

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

  const areIntervalsOverlappingWithOptions: CurriedFn3<
    {
      inclusive?: boolean
    },
    Interval,
    Interval,
    boolean
  >
  namespace areIntervalsOverlappingWithOptions {}

  const clamp: CurriedFn2<Interval, Date | number, Date>
  namespace clamp {}

  const closestIndexTo: CurriedFn2<
    (Date | number)[],
    Date | number,
    number | undefined
  >
  namespace closestIndexTo {}

  const closestTo: CurriedFn2<
    (Date | number)[],
    Date | number,
    Date | undefined
  >
  namespace closestTo {}

  const compareAsc: CurriedFn2<Date | number, Date | number, number>
  namespace compareAsc {}

  const compareDesc: CurriedFn2<Date | number, Date | number, number>
  namespace compareDesc {}

  const daysToWeeks: CurriedFn1<number, number>
  namespace daysToWeeks {}

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
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
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

  const differenceInHoursWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInHoursWithOptions {}

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

  const differenceInMinutesWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMinutesWithOptions {}

  const differenceInMonths: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMonths {}

  const differenceInQuarters: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInQuarters {}

  const differenceInQuartersWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInQuartersWithOptions {}

  const differenceInSeconds: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInSeconds {}

  const differenceInSecondsWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInSecondsWithOptions {}

  const differenceInWeeks: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInWeeks {}

  const differenceInWeeksWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInWeeksWithOptions {}

  const differenceInYears: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInYears {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachDayOfIntervalWithOptions {}

  const eachHourOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachHourOfInterval {}

  const eachHourOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachHourOfIntervalWithOptions {}

  const eachMinuteOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMinuteOfInterval {}

  const eachMinuteOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachMinuteOfIntervalWithOptions {}

  const eachMonthOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMonthOfInterval {}

  const eachQuarterOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachQuarterOfInterval {}

  const eachWeekendOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekendOfInterval {}

  const eachWeekendOfMonth: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfMonth {}

  const eachWeekendOfYear: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfYear {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Interval,
    Date[]
  >
  namespace eachWeekOfIntervalWithOptions {}

  const eachYearOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachYearOfInterval {}

  const endOfDay: CurriedFn1<Date | number, Date>
  namespace endOfDay {}

  const endOfDecade: CurriedFn1<Date | number, Date>
  namespace endOfDecade {}

  const endOfDecadeWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
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

  const endOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
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
    {
      locale?: Locale
      roundingMethod?: 'floor' | 'ceil' | 'round'
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      addSuffix?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<
    {
      locale?: Locale
      addSuffix?: boolean
      includeSeconds?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceWithOptions {}

  const formatDuration: CurriedFn1<Duration, string>
  namespace formatDuration {}

  const formatDurationWithOptions: CurriedFn2<
    {
      locale?: Locale
      delimiter?: string
      zero?: boolean
      format?: string[]
    },
    Duration,
    string
  >
  namespace formatDurationWithOptions {}

  const formatISO: CurriedFn1<Date | number, string>
  namespace formatISO {}

  const formatISO9075: CurriedFn1<Date | number, string>
  namespace formatISO9075 {}

  const formatISO9075WithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISO9075WithOptions {}

  const formatISODuration: CurriedFn1<Duration, string>
  namespace formatISODuration {}

  const formatISOWithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISOWithOptions {}

  const formatRelative: CurriedFn2<Date | number, Date | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatRelativeWithOptions {}

  const formatRFC3339: CurriedFn1<Date | number, string>
  namespace formatRFC3339 {}

  const formatRFC3339WithOptions: CurriedFn2<
    {
      fractionDigits?: 0 | 1 | 2 | 3
    },
    Date | number,
    string
  >
  namespace formatRFC3339WithOptions {}

  const formatRFC7231: CurriedFn1<Date | number, string>
  namespace formatRFC7231 {}

  const formatWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: number
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    Date | number,
    string
  >
  namespace formatWithOptions {}

  const fromUnixTime: CurriedFn1<number, Date>
  namespace fromUnixTime {}

  const getDate: CurriedFn1<Date | number, number>
  namespace getDate {}

  const getDay: CurriedFn1<Date | number, 0 | 1 | 2 | 3 | 4 | 5 | 6>
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

  const getWeekOfMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | number, number>
  namespace getYear {}

  const hoursToMilliseconds: CurriedFn1<number, number>
  namespace hoursToMilliseconds {}

  const hoursToMinutes: CurriedFn1<number, number>
  namespace hoursToMinutes {}

  const hoursToSeconds: CurriedFn1<number, number>
  namespace hoursToSeconds {}

  const intervalToDuration: CurriedFn1<Interval, Duration>
  namespace intervalToDuration {}

  const intlFormat: CurriedFn3<
    {
      locale?: string | string[]
    },
    {
      timeZone?: string
      hour12?: boolean
      formatMatcher?: 'basic' | 'best fit'
      timeZoneName?: 'short' | 'long'
      second?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      day?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      era?: 'narrow' | 'short' | 'long'
      weekday?: 'narrow' | 'short' | 'long'
      localeMatcher?: 'lookup' | 'best fit'
    },
    Date | number,
    string
  >
  namespace intlFormat {}

  const intlFormatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace intlFormatDistance {}

  const intlFormatDistanceWithOptions: CurriedFn3<
    {
      style?: string
      numeric?: string
      localeMatcher?: string
      locale?: string | string[]
      unit?: string
    },
    Date | number,
    Date | number,
    string
  >
  namespace intlFormatDistanceWithOptions {}

  const isAfter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isAfter {}

  const isBefore: CurriedFn2<Date | number, Date | number, boolean>
  namespace isBefore {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isEqual: CurriedFn2<Date | number, Date | number, boolean>
  namespace isEqual {}

  const isExists: CurriedFn3<number, number, number, boolean>
  namespace isExists {}

  const isFirstDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFriday: CurriedFn1<Date | number, boolean>
  namespace isFriday {}

  const isLastDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isLastDayOfMonth {}

  const isLeapYear: CurriedFn1<Date | number, boolean>
  namespace isLeapYear {}

  const isMatch: CurriedFn2<string, string, boolean>
  namespace isMatch {}

  const isMatchWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    string,
    boolean
  >
  namespace isMatchWithOptions {}

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
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
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

  const lastDayOfQuarterWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfYear {}

  const lightFormat: CurriedFn2<string, Date | number, string>
  namespace lightFormat {}

  const max: CurriedFn1<(Date | number)[], Date>
  namespace max {}

  const milliseconds: CurriedFn1<Duration, number>
  namespace milliseconds {}

  const millisecondsToHours: CurriedFn1<number, number>
  namespace millisecondsToHours {}

  const millisecondsToMinutes: CurriedFn1<number, number>
  namespace millisecondsToMinutes {}

  const millisecondsToSeconds: CurriedFn1<number, number>
  namespace millisecondsToSeconds {}

  const min: CurriedFn1<(Date | number)[], Date>
  namespace min {}

  const minutesToHours: CurriedFn1<number, number>
  namespace minutesToHours {}

  const minutesToMilliseconds: CurriedFn1<number, number>
  namespace minutesToMilliseconds {}

  const minutesToSeconds: CurriedFn1<number, number>
  namespace minutesToSeconds {}

  const monthsToQuarters: CurriedFn1<number, number>
  namespace monthsToQuarters {}

  const monthsToYears: CurriedFn1<number, number>
  namespace monthsToYears {}

  const nextDay: CurriedFn2<Day, Date | number, Date>
  namespace nextDay {}

  const nextFriday: CurriedFn1<Date | number, Date>
  namespace nextFriday {}

  const nextMonday: CurriedFn1<Date | number, Date>
  namespace nextMonday {}

  const nextSaturday: CurriedFn1<Date | number, Date>
  namespace nextSaturday {}

  const nextSunday: CurriedFn1<Date | number, Date>
  namespace nextSunday {}

  const nextThursday: CurriedFn1<Date | number, Date>
  namespace nextThursday {}

  const nextTuesday: CurriedFn1<Date | number, Date>
  namespace nextTuesday {}

  const nextWednesday: CurriedFn1<Date | number, Date>
  namespace nextWednesday {}

  const parse: CurriedFn3<Date | number, string, string, Date>
  namespace parse {}

  const parseISO: CurriedFn1<string, Date>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    string,
    Date
  >
  namespace parseISOWithOptions {}

  const parseJSON: CurriedFn1<string | number | Date, Date>
  namespace parseJSON {}

  const parseWithOptions: CurriedFn4<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    string,
    string,
    Date
  >
  namespace parseWithOptions {}

  const previousDay: CurriedFn2<number, Date | number, Date>
  namespace previousDay {}

  const previousFriday: CurriedFn1<Date | number, Date>
  namespace previousFriday {}

  const previousMonday: CurriedFn1<Date | number, Date>
  namespace previousMonday {}

  const previousSaturday: CurriedFn1<Date | number, Date>
  namespace previousSaturday {}

  const previousSunday: CurriedFn1<Date | number, Date>
  namespace previousSunday {}

  const previousThursday: CurriedFn1<Date | number, Date>
  namespace previousThursday {}

  const previousTuesday: CurriedFn1<Date | number, Date>
  namespace previousTuesday {}

  const previousWednesday: CurriedFn1<Date | number, Date>
  namespace previousWednesday {}

  const quartersToMonths: CurriedFn1<number, number>
  namespace quartersToMonths {}

  const quartersToYears: CurriedFn1<number, number>
  namespace quartersToYears {}

  const roundToNearestMinutes: CurriedFn1<Date | number, Date>
  namespace roundToNearestMinutes {}

  const roundToNearestMinutesWithOptions: CurriedFn2<
    {
      nearestTo?: number
    },
    Date | number,
    Date
  >
  namespace roundToNearestMinutesWithOptions {}

  const secondsToHours: CurriedFn1<number, number>
  namespace secondsToHours {}

  const secondsToMilliseconds: CurriedFn1<number, number>
  namespace secondsToMilliseconds {}

  const secondsToMinutes: CurriedFn1<number, number>
  namespace secondsToMinutes {}

  const set: CurriedFn2<
    {
      milliseconds?: number
      seconds?: number
      minutes?: number
      hours?: number
      date?: number
      month?: number
      year?: number
    },
    Date | number,
    Date
  >
  namespace set {}

  const setDate: CurriedFn2<number, Date | number, Date>
  namespace setDate {}

  const setDay: CurriedFn2<number, Date | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | number, Date>
  namespace setDayOfYear {}

  const setDayWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
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

  const setWeekWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
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

  const startOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | number, Date>
  namespace startOfYear {}

  const sub: CurriedFn2<Duration, Date | number, Date>
  namespace sub {}

  const subBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace subBusinessDays {}

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

  const weeksToDays: CurriedFn1<number, number>
  namespace weeksToDays {}

  const yearsToMonths: CurriedFn1<number, number>
  namespace yearsToMonths {}

  const yearsToQuarters: CurriedFn1<number, number>
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

declare module 'date-fns/esm/fp/add' {
  import { add } from 'date-fns/esm/fp'
  export default add
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

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/esm/fp/clamp' {
  import { clamp } from 'date-fns/esm/fp'
  export default clamp
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

declare module 'date-fns/esm/fp/daysToWeeks' {
  import { daysToWeeks } from 'date-fns/esm/fp'
  export default daysToWeeks
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

declare module 'date-fns/esm/fp/differenceInHoursWithOptions' {
  import { differenceInHoursWithOptions } from 'date-fns/esm/fp'
  export default differenceInHoursWithOptions
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

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions' {
  import { differenceInMinutesWithOptions } from 'date-fns/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/esm/fp/differenceInMonths' {
  import { differenceInMonths } from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions' {
  import { differenceInQuartersWithOptions } from 'date-fns/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions' {
  import { differenceInSecondsWithOptions } from 'date-fns/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions' {
  import { differenceInWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInWeeksWithOptions
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

declare module 'date-fns/esm/fp/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns/esm/fp'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/fp/eachHourOfIntervalWithOptions' {
  import { eachHourOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns/esm/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/fp/eachMinuteOfIntervalWithOptions' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/fp/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns/esm/fp'
  export default eachQuarterOfInterval
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

declare module 'date-fns/esm/fp/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns/esm/fp'
  export default eachYearOfInterval
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

declare module 'date-fns/esm/fp/formatDuration' {
  import { formatDuration } from 'date-fns/esm/fp'
  export default formatDuration
}

declare module 'date-fns/esm/fp/formatDurationWithOptions' {
  import { formatDurationWithOptions } from 'date-fns/esm/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns/esm/fp/formatISO' {
  import { formatISO } from 'date-fns/esm/fp'
  export default formatISO
}

declare module 'date-fns/esm/fp/formatISO9075' {
  import { formatISO9075 } from 'date-fns/esm/fp'
  export default formatISO9075
}

declare module 'date-fns/esm/fp/formatISO9075WithOptions' {
  import { formatISO9075WithOptions } from 'date-fns/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns/esm/fp/formatISODuration' {
  import { formatISODuration } from 'date-fns/esm/fp'
  export default formatISODuration
}

declare module 'date-fns/esm/fp/formatISOWithOptions' {
  import { formatISOWithOptions } from 'date-fns/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns/esm/fp/formatRelative' {
  import { formatRelative } from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions' {
  import { formatRelativeWithOptions } from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns/esm/fp/formatRFC3339WithOptions' {
  import { formatRFC3339WithOptions } from 'date-fns/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns/esm/fp/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns/esm/fp'
  export default formatRFC7231
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

declare module 'date-fns/esm/fp/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns/esm/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/fp/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns/esm/fp'
  export default hoursToMinutes
}

declare module 'date-fns/esm/fp/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns/esm/fp'
  export default hoursToSeconds
}

declare module 'date-fns/esm/fp/intervalToDuration' {
  import { intervalToDuration } from 'date-fns/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns/esm/fp/intlFormat' {
  import { intlFormat } from 'date-fns/esm/fp'
  export default intlFormat
}

declare module 'date-fns/esm/fp/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns/esm/fp'
  export default intlFormatDistance
}

declare module 'date-fns/esm/fp/intlFormatDistanceWithOptions' {
  import { intlFormatDistanceWithOptions } from 'date-fns/esm/fp'
  export default intlFormatDistanceWithOptions
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

declare module 'date-fns/esm/fp/isExists' {
  import { isExists } from 'date-fns/esm/fp'
  export default isExists
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

declare module 'date-fns/esm/fp/isMatch' {
  import { isMatch } from 'date-fns/esm/fp'
  export default isMatch
}

declare module 'date-fns/esm/fp/isMatchWithOptions' {
  import { isMatchWithOptions } from 'date-fns/esm/fp'
  export default isMatchWithOptions
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

declare module 'date-fns/esm/fp/milliseconds' {
  import { milliseconds } from 'date-fns/esm/fp'
  export default milliseconds
}

declare module 'date-fns/esm/fp/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns/esm/fp'
  export default millisecondsToHours
}

declare module 'date-fns/esm/fp/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns/esm/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/fp/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns/esm/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/fp/min' {
  import { min } from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/minutesToHours' {
  import { minutesToHours } from 'date-fns/esm/fp'
  export default minutesToHours
}

declare module 'date-fns/esm/fp/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns/esm/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/fp/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns/esm/fp'
  export default minutesToSeconds
}

declare module 'date-fns/esm/fp/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns/esm/fp'
  export default monthsToQuarters
}

declare module 'date-fns/esm/fp/monthsToYears' {
  import { monthsToYears } from 'date-fns/esm/fp'
  export default monthsToYears
}

declare module 'date-fns/esm/fp/nextDay' {
  import { nextDay } from 'date-fns/esm/fp'
  export default nextDay
}

declare module 'date-fns/esm/fp/nextFriday' {
  import { nextFriday } from 'date-fns/esm/fp'
  export default nextFriday
}

declare module 'date-fns/esm/fp/nextMonday' {
  import { nextMonday } from 'date-fns/esm/fp'
  export default nextMonday
}

declare module 'date-fns/esm/fp/nextSaturday' {
  import { nextSaturday } from 'date-fns/esm/fp'
  export default nextSaturday
}

declare module 'date-fns/esm/fp/nextSunday' {
  import { nextSunday } from 'date-fns/esm/fp'
  export default nextSunday
}

declare module 'date-fns/esm/fp/nextThursday' {
  import { nextThursday } from 'date-fns/esm/fp'
  export default nextThursday
}

declare module 'date-fns/esm/fp/nextTuesday' {
  import { nextTuesday } from 'date-fns/esm/fp'
  export default nextTuesday
}

declare module 'date-fns/esm/fp/nextWednesday' {
  import { nextWednesday } from 'date-fns/esm/fp'
  export default nextWednesday
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

declare module 'date-fns/esm/fp/parseJSON' {
  import { parseJSON } from 'date-fns/esm/fp'
  export default parseJSON
}

declare module 'date-fns/esm/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/previousDay' {
  import { previousDay } from 'date-fns/esm/fp'
  export default previousDay
}

declare module 'date-fns/esm/fp/previousFriday' {
  import { previousFriday } from 'date-fns/esm/fp'
  export default previousFriday
}

declare module 'date-fns/esm/fp/previousMonday' {
  import { previousMonday } from 'date-fns/esm/fp'
  export default previousMonday
}

declare module 'date-fns/esm/fp/previousSaturday' {
  import { previousSaturday } from 'date-fns/esm/fp'
  export default previousSaturday
}

declare module 'date-fns/esm/fp/previousSunday' {
  import { previousSunday } from 'date-fns/esm/fp'
  export default previousSunday
}

declare module 'date-fns/esm/fp/previousThursday' {
  import { previousThursday } from 'date-fns/esm/fp'
  export default previousThursday
}

declare module 'date-fns/esm/fp/previousTuesday' {
  import { previousTuesday } from 'date-fns/esm/fp'
  export default previousTuesday
}

declare module 'date-fns/esm/fp/previousWednesday' {
  import { previousWednesday } from 'date-fns/esm/fp'
  export default previousWednesday
}

declare module 'date-fns/esm/fp/quartersToMonths' {
  import { quartersToMonths } from 'date-fns/esm/fp'
  export default quartersToMonths
}

declare module 'date-fns/esm/fp/quartersToYears' {
  import { quartersToYears } from 'date-fns/esm/fp'
  export default quartersToYears
}

declare module 'date-fns/esm/fp/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/fp/roundToNearestMinutesWithOptions' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/esm/fp/secondsToHours' {
  import { secondsToHours } from 'date-fns/esm/fp'
  export default secondsToHours
}

declare module 'date-fns/esm/fp/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns/esm/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/fp/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns/esm/fp'
  export default secondsToMinutes
}

declare module 'date-fns/esm/fp/set' {
  import { set } from 'date-fns/esm/fp'
  export default set
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

declare module 'date-fns/esm/fp/sub' {
  import { sub } from 'date-fns/esm/fp'
  export default sub
}

declare module 'date-fns/esm/fp/subBusinessDays' {
  import { subBusinessDays } from 'date-fns/esm/fp'
  export default subBusinessDays
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

declare module 'date-fns/esm/fp/weeksToDays' {
  import { weeksToDays } from 'date-fns/esm/fp'
  export default weeksToDays
}

declare module 'date-fns/esm/fp/yearsToMonths' {
  import { yearsToMonths } from 'date-fns/esm/fp'
  export default yearsToMonths
}

declare module 'date-fns/esm/fp/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns/esm/fp'
  export default yearsToQuarters
}

declare module 'date-fns/esm/fp/add/index' {
  import { add } from 'date-fns/esm/fp'
  export default add
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

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions/index' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/esm/fp/clamp/index' {
  import { clamp } from 'date-fns/esm/fp'
  export default clamp
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

declare module 'date-fns/esm/fp/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns/esm/fp'
  export default daysToWeeks
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

declare module 'date-fns/esm/fp/differenceInHoursWithOptions/index' {
  import { differenceInHoursWithOptions } from 'date-fns/esm/fp'
  export default differenceInHoursWithOptions
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

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions/index' {
  import { differenceInMinutesWithOptions } from 'date-fns/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/esm/fp/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions/index' {
  import { differenceInQuartersWithOptions } from 'date-fns/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions/index' {
  import { differenceInSecondsWithOptions } from 'date-fns/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions/index' {
  import { differenceInWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInWeeksWithOptions
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

declare module 'date-fns/esm/fp/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns/esm/fp'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/fp/eachHourOfIntervalWithOptions/index' {
  import { eachHourOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns/esm/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/fp/eachMinuteOfIntervalWithOptions/index' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/fp/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns/esm/fp'
  export default eachQuarterOfInterval
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

declare module 'date-fns/esm/fp/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns/esm/fp'
  export default eachYearOfInterval
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

declare module 'date-fns/esm/fp/formatDuration/index' {
  import { formatDuration } from 'date-fns/esm/fp'
  export default formatDuration
}

declare module 'date-fns/esm/fp/formatDurationWithOptions/index' {
  import { formatDurationWithOptions } from 'date-fns/esm/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns/esm/fp/formatISO/index' {
  import { formatISO } from 'date-fns/esm/fp'
  export default formatISO
}

declare module 'date-fns/esm/fp/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns/esm/fp'
  export default formatISO9075
}

declare module 'date-fns/esm/fp/formatISO9075WithOptions/index' {
  import { formatISO9075WithOptions } from 'date-fns/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns/esm/fp/formatISODuration/index' {
  import { formatISODuration } from 'date-fns/esm/fp'
  export default formatISODuration
}

declare module 'date-fns/esm/fp/formatISOWithOptions/index' {
  import { formatISOWithOptions } from 'date-fns/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns/esm/fp/formatRelative/index' {
  import { formatRelative } from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions/index' {
  import { formatRelativeWithOptions } from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns/esm/fp/formatRFC3339WithOptions/index' {
  import { formatRFC3339WithOptions } from 'date-fns/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns/esm/fp/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns/esm/fp'
  export default formatRFC7231
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

declare module 'date-fns/esm/fp/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns/esm/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/fp/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns/esm/fp'
  export default hoursToMinutes
}

declare module 'date-fns/esm/fp/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns/esm/fp'
  export default hoursToSeconds
}

declare module 'date-fns/esm/fp/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns/esm/fp/intlFormat/index' {
  import { intlFormat } from 'date-fns/esm/fp'
  export default intlFormat
}

declare module 'date-fns/esm/fp/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns/esm/fp'
  export default intlFormatDistance
}

declare module 'date-fns/esm/fp/intlFormatDistanceWithOptions/index' {
  import { intlFormatDistanceWithOptions } from 'date-fns/esm/fp'
  export default intlFormatDistanceWithOptions
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

declare module 'date-fns/esm/fp/isExists/index' {
  import { isExists } from 'date-fns/esm/fp'
  export default isExists
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

declare module 'date-fns/esm/fp/isMatch/index' {
  import { isMatch } from 'date-fns/esm/fp'
  export default isMatch
}

declare module 'date-fns/esm/fp/isMatchWithOptions/index' {
  import { isMatchWithOptions } from 'date-fns/esm/fp'
  export default isMatchWithOptions
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

declare module 'date-fns/esm/fp/milliseconds/index' {
  import { milliseconds } from 'date-fns/esm/fp'
  export default milliseconds
}

declare module 'date-fns/esm/fp/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns/esm/fp'
  export default millisecondsToHours
}

declare module 'date-fns/esm/fp/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns/esm/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/fp/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns/esm/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/fp/min/index' {
  import { min } from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/minutesToHours/index' {
  import { minutesToHours } from 'date-fns/esm/fp'
  export default minutesToHours
}

declare module 'date-fns/esm/fp/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns/esm/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/fp/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns/esm/fp'
  export default minutesToSeconds
}

declare module 'date-fns/esm/fp/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns/esm/fp'
  export default monthsToQuarters
}

declare module 'date-fns/esm/fp/monthsToYears/index' {
  import { monthsToYears } from 'date-fns/esm/fp'
  export default monthsToYears
}

declare module 'date-fns/esm/fp/nextDay/index' {
  import { nextDay } from 'date-fns/esm/fp'
  export default nextDay
}

declare module 'date-fns/esm/fp/nextFriday/index' {
  import { nextFriday } from 'date-fns/esm/fp'
  export default nextFriday
}

declare module 'date-fns/esm/fp/nextMonday/index' {
  import { nextMonday } from 'date-fns/esm/fp'
  export default nextMonday
}

declare module 'date-fns/esm/fp/nextSaturday/index' {
  import { nextSaturday } from 'date-fns/esm/fp'
  export default nextSaturday
}

declare module 'date-fns/esm/fp/nextSunday/index' {
  import { nextSunday } from 'date-fns/esm/fp'
  export default nextSunday
}

declare module 'date-fns/esm/fp/nextThursday/index' {
  import { nextThursday } from 'date-fns/esm/fp'
  export default nextThursday
}

declare module 'date-fns/esm/fp/nextTuesday/index' {
  import { nextTuesday } from 'date-fns/esm/fp'
  export default nextTuesday
}

declare module 'date-fns/esm/fp/nextWednesday/index' {
  import { nextWednesday } from 'date-fns/esm/fp'
  export default nextWednesday
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

declare module 'date-fns/esm/fp/parseJSON/index' {
  import { parseJSON } from 'date-fns/esm/fp'
  export default parseJSON
}

declare module 'date-fns/esm/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/previousDay/index' {
  import { previousDay } from 'date-fns/esm/fp'
  export default previousDay
}

declare module 'date-fns/esm/fp/previousFriday/index' {
  import { previousFriday } from 'date-fns/esm/fp'
  export default previousFriday
}

declare module 'date-fns/esm/fp/previousMonday/index' {
  import { previousMonday } from 'date-fns/esm/fp'
  export default previousMonday
}

declare module 'date-fns/esm/fp/previousSaturday/index' {
  import { previousSaturday } from 'date-fns/esm/fp'
  export default previousSaturday
}

declare module 'date-fns/esm/fp/previousSunday/index' {
  import { previousSunday } from 'date-fns/esm/fp'
  export default previousSunday
}

declare module 'date-fns/esm/fp/previousThursday/index' {
  import { previousThursday } from 'date-fns/esm/fp'
  export default previousThursday
}

declare module 'date-fns/esm/fp/previousTuesday/index' {
  import { previousTuesday } from 'date-fns/esm/fp'
  export default previousTuesday
}

declare module 'date-fns/esm/fp/previousWednesday/index' {
  import { previousWednesday } from 'date-fns/esm/fp'
  export default previousWednesday
}

declare module 'date-fns/esm/fp/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns/esm/fp'
  export default quartersToMonths
}

declare module 'date-fns/esm/fp/quartersToYears/index' {
  import { quartersToYears } from 'date-fns/esm/fp'
  export default quartersToYears
}

declare module 'date-fns/esm/fp/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/fp/roundToNearestMinutesWithOptions/index' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/esm/fp/secondsToHours/index' {
  import { secondsToHours } from 'date-fns/esm/fp'
  export default secondsToHours
}

declare module 'date-fns/esm/fp/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns/esm/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/fp/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns/esm/fp'
  export default secondsToMinutes
}

declare module 'date-fns/esm/fp/set/index' {
  import { set } from 'date-fns/esm/fp'
  export default set
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

declare module 'date-fns/esm/fp/sub/index' {
  import { sub } from 'date-fns/esm/fp'
  export default sub
}

declare module 'date-fns/esm/fp/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns/esm/fp'
  export default subBusinessDays
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

declare module 'date-fns/esm/fp/weeksToDays/index' {
  import { weeksToDays } from 'date-fns/esm/fp'
  export default weeksToDays
}

declare module 'date-fns/esm/fp/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns/esm/fp'
  export default yearsToMonths
}

declare module 'date-fns/esm/fp/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns/esm/fp'
  export default yearsToQuarters
}

declare module 'date-fns/esm/fp/add/index.js' {
  import { add } from 'date-fns/esm/fp'
  export default add
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

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions/index.js' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/esm/fp/clamp/index.js' {
  import { clamp } from 'date-fns/esm/fp'
  export default clamp
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

declare module 'date-fns/esm/fp/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns/esm/fp'
  export default daysToWeeks
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

declare module 'date-fns/esm/fp/differenceInHoursWithOptions/index.js' {
  import { differenceInHoursWithOptions } from 'date-fns/esm/fp'
  export default differenceInHoursWithOptions
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

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions/index.js' {
  import { differenceInMinutesWithOptions } from 'date-fns/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/esm/fp/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions/index.js' {
  import { differenceInQuartersWithOptions } from 'date-fns/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions/index.js' {
  import { differenceInSecondsWithOptions } from 'date-fns/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions/index.js' {
  import { differenceInWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInWeeksWithOptions
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

declare module 'date-fns/esm/fp/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns/esm/fp'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/fp/eachHourOfIntervalWithOptions/index.js' {
  import { eachHourOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns/esm/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/fp/eachMinuteOfIntervalWithOptions/index.js' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/fp/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns/esm/fp'
  export default eachQuarterOfInterval
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

declare module 'date-fns/esm/fp/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns/esm/fp'
  export default eachYearOfInterval
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

declare module 'date-fns/esm/fp/formatDuration/index.js' {
  import { formatDuration } from 'date-fns/esm/fp'
  export default formatDuration
}

declare module 'date-fns/esm/fp/formatDurationWithOptions/index.js' {
  import { formatDurationWithOptions } from 'date-fns/esm/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns/esm/fp/formatISO/index.js' {
  import { formatISO } from 'date-fns/esm/fp'
  export default formatISO
}

declare module 'date-fns/esm/fp/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns/esm/fp'
  export default formatISO9075
}

declare module 'date-fns/esm/fp/formatISO9075WithOptions/index.js' {
  import { formatISO9075WithOptions } from 'date-fns/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns/esm/fp/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns/esm/fp'
  export default formatISODuration
}

declare module 'date-fns/esm/fp/formatISOWithOptions/index.js' {
  import { formatISOWithOptions } from 'date-fns/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns/esm/fp/formatRelative/index.js' {
  import { formatRelative } from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions/index.js' {
  import { formatRelativeWithOptions } from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns/esm/fp/formatRFC3339WithOptions/index.js' {
  import { formatRFC3339WithOptions } from 'date-fns/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns/esm/fp/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns/esm/fp'
  export default formatRFC7231
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

declare module 'date-fns/esm/fp/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns/esm/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/fp/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns/esm/fp'
  export default hoursToMinutes
}

declare module 'date-fns/esm/fp/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns/esm/fp'
  export default hoursToSeconds
}

declare module 'date-fns/esm/fp/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns/esm/fp/intlFormat/index.js' {
  import { intlFormat } from 'date-fns/esm/fp'
  export default intlFormat
}

declare module 'date-fns/esm/fp/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns/esm/fp'
  export default intlFormatDistance
}

declare module 'date-fns/esm/fp/intlFormatDistanceWithOptions/index.js' {
  import { intlFormatDistanceWithOptions } from 'date-fns/esm/fp'
  export default intlFormatDistanceWithOptions
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

declare module 'date-fns/esm/fp/isExists/index.js' {
  import { isExists } from 'date-fns/esm/fp'
  export default isExists
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

declare module 'date-fns/esm/fp/isMatch/index.js' {
  import { isMatch } from 'date-fns/esm/fp'
  export default isMatch
}

declare module 'date-fns/esm/fp/isMatchWithOptions/index.js' {
  import { isMatchWithOptions } from 'date-fns/esm/fp'
  export default isMatchWithOptions
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

declare module 'date-fns/esm/fp/milliseconds/index.js' {
  import { milliseconds } from 'date-fns/esm/fp'
  export default milliseconds
}

declare module 'date-fns/esm/fp/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns/esm/fp'
  export default millisecondsToHours
}

declare module 'date-fns/esm/fp/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns/esm/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/fp/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns/esm/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/fp/min/index.js' {
  import { min } from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns/esm/fp'
  export default minutesToHours
}

declare module 'date-fns/esm/fp/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns/esm/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/fp/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns/esm/fp'
  export default minutesToSeconds
}

declare module 'date-fns/esm/fp/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns/esm/fp'
  export default monthsToQuarters
}

declare module 'date-fns/esm/fp/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns/esm/fp'
  export default monthsToYears
}

declare module 'date-fns/esm/fp/nextDay/index.js' {
  import { nextDay } from 'date-fns/esm/fp'
  export default nextDay
}

declare module 'date-fns/esm/fp/nextFriday/index.js' {
  import { nextFriday } from 'date-fns/esm/fp'
  export default nextFriday
}

declare module 'date-fns/esm/fp/nextMonday/index.js' {
  import { nextMonday } from 'date-fns/esm/fp'
  export default nextMonday
}

declare module 'date-fns/esm/fp/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns/esm/fp'
  export default nextSaturday
}

declare module 'date-fns/esm/fp/nextSunday/index.js' {
  import { nextSunday } from 'date-fns/esm/fp'
  export default nextSunday
}

declare module 'date-fns/esm/fp/nextThursday/index.js' {
  import { nextThursday } from 'date-fns/esm/fp'
  export default nextThursday
}

declare module 'date-fns/esm/fp/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns/esm/fp'
  export default nextTuesday
}

declare module 'date-fns/esm/fp/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns/esm/fp'
  export default nextWednesday
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

declare module 'date-fns/esm/fp/parseJSON/index.js' {
  import { parseJSON } from 'date-fns/esm/fp'
  export default parseJSON
}

declare module 'date-fns/esm/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/previousDay/index.js' {
  import { previousDay } from 'date-fns/esm/fp'
  export default previousDay
}

declare module 'date-fns/esm/fp/previousFriday/index.js' {
  import { previousFriday } from 'date-fns/esm/fp'
  export default previousFriday
}

declare module 'date-fns/esm/fp/previousMonday/index.js' {
  import { previousMonday } from 'date-fns/esm/fp'
  export default previousMonday
}

declare module 'date-fns/esm/fp/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns/esm/fp'
  export default previousSaturday
}

declare module 'date-fns/esm/fp/previousSunday/index.js' {
  import { previousSunday } from 'date-fns/esm/fp'
  export default previousSunday
}

declare module 'date-fns/esm/fp/previousThursday/index.js' {
  import { previousThursday } from 'date-fns/esm/fp'
  export default previousThursday
}

declare module 'date-fns/esm/fp/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns/esm/fp'
  export default previousTuesday
}

declare module 'date-fns/esm/fp/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns/esm/fp'
  export default previousWednesday
}

declare module 'date-fns/esm/fp/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns/esm/fp'
  export default quartersToMonths
}

declare module 'date-fns/esm/fp/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns/esm/fp'
  export default quartersToYears
}

declare module 'date-fns/esm/fp/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/fp/roundToNearestMinutesWithOptions/index.js' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/esm/fp/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns/esm/fp'
  export default secondsToHours
}

declare module 'date-fns/esm/fp/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns/esm/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/fp/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns/esm/fp'
  export default secondsToMinutes
}

declare module 'date-fns/esm/fp/set/index.js' {
  import { set } from 'date-fns/esm/fp'
  export default set
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

declare module 'date-fns/esm/fp/sub/index.js' {
  import { sub } from 'date-fns/esm/fp'
  export default sub
}

declare module 'date-fns/esm/fp/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns/esm/fp'
  export default subBusinessDays
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

declare module 'date-fns/esm/fp/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns/esm/fp'
  export default weeksToDays
}

declare module 'date-fns/esm/fp/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns/esm/fp'
  export default yearsToMonths
}

declare module 'date-fns/esm/fp/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns/esm/fp'
  export default yearsToQuarters
}
