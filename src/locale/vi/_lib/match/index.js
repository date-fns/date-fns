import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i

var matchWeekdaysPatterns = {
  narrow: /^(su|mo|tu|we|th|fr|sa)/i,
  short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}

var parseWeekdayPatterns = {
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}

var matchMonthsPatterns = {
  short: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  long: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var matchTimesOfDayPatterns = {
//     long: /^((in the)? (night|morning|afternoon|evening?))/i
//   }
//
//   var parseTimeOfDayPatterns = {
//     any: [/(night|morning)/i, /(afternoon|evening)/i]
//   }
var matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
}

var parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
}

var match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: parseDecimal,
  weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
  weekday: buildParseFn(parseWeekdayPatterns, 'any'),
  months: buildMatchFn(matchMonthsPatterns, 'long'),
  month: buildParseFn(parseMonthPatterns, 'any'),
  timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
  timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
}

export default match
