# I18n Contribution Guide

## Table of Contents

- [Adding a new locale](#usage)

  - [Choosing a directory name for a locale](#choosing-a-directory-name-for-a-locale)

  - [index.js](#indexjs)

  - [localize](#localize)

    - [Time of day](#time-of-day)

  - [formatLong](#formatlong)

  - [formatRelative](#formatrelative)

  - [match](#match)

    - [Ordinal numbers](#ordinal-numbers)

  - [formatDistance](#formatdistance)

  - [Tests](#tests)

  - [Corner cases](#corner-cases)

    - [formatters](#formatters)

- [Creating a locale with the same language as another locale](#creating-a-locale-with-the-same-language-as-another-locale)

- [Monkey-patching a locale](#monkey-patching-a-locale)

  - [Simple example](#simple-example)

  - [Complex example](#complex-example)

## Adding a new locale

To add a new locale:

- [Choose a directory name for it](#choosing-a-directory-name-for-a-locale).

- Copy the content of an existing locale (e.g. `en-US`) into the newly created directory.

- Replace the values in the content with yours file-by-file.

All locales contain a number of properties:

- [`formatDistance`](#formatdistance) — distance localizer function used by `formatDistance` and `formatDistanceStrict`.
- [`formatLong`](#formatlong) — long date localizer function used by `format`, `formatRelative` and `parse`.
- [`formatRelative`](#formatrelative) — relative date localizer function used by `formatRelative`.
- [`localize`](#localize) — contains functions, which localize the various date values. Required by `format` and `formatRelative`.
- [`match`](#match) — contains functions to match and parse date values. Required by `parse`.
- [`options`](#indexjs) — contains the index of the first day of the week for functions such as `startOfWeek`,
  and the value which determines the first week of the year
  for [planned week numbering helpers](https://github.com/date-fns/date-fns/issues/463).

Also, some locales could contain optional properties:

- [`formatters`](#formatters) — custom formatters used by `format` and `formatRelative`.
- [`formattingTokensRegExp`](#formatters) — RegExp generated from the custom formatters,
  which splits the format token string into an array of tokens.
  If provided, used by `format` and `formatRelative`.
- `parsers` — custom parsing helper functions used by `parse`.
- `parsingTokensRegExp` — RegExp generated from the custom parsers,
  which splits the format token string into an array of token
  If provided, used by `parse`.
- `units` — custom units for `parse`.

For the last three, see [locale monkey-patching complex example](#complex-example).

### Choosing a directory name for a locale

Use the four letter code for the directory name (e.g. `en-GB`),

Use the two/three letter code:

- if the language code and the country code are the same (e.g. `pt` instead of `pt-PT`).

- if the language is used in only one country (e.g. `fil` instead of `fil-PH`).

- if all countries who use the language
also use the same regional standards: the first day of the week,
the week numbering (see: https://en.wikipedia.org/wiki/Week#Week_numbering),
calendar date format (see: https://en.wikipedia.org/wiki/Calendar_date)
and date representation (see: https://en.wikipedia.org/wiki/Date_and_time_representation_by_country
and: https://en.wikipedia.org/wiki/Date_format_by_country)
(e.g. `ca` instead of `ca-ES` and `ca-AD`).

### index.js

Locale's `index.js` is where all the properties of the locale are combined in a single file,
documented in JSDoc format.

```javascript
import formatDistance from './_lib/formatDistance/index.js'
import formatLong from './_lib/formatLong/index.js'
import formatRelative from './_lib/formatRelative/index.js'
import localize from './_lib/localize/index.js'
import match from './_lib/match/index.js'

/**
 * @type {Locale}
 * @category Locales
 *
 * // Name of the locale (Name of the country - if uses the four letter code, e.g. en-US, fr-CA or pt-BR).
 * @summary English locale (United States).
 *
 * // Name of the language
 * @language English
 *
 * // ISO 639-2 code. See the list here:
 * // https://www.loc.gov/standards/iso639-2/php/code_list.php
 * @iso-639-2 eng
 *
 * // Authors of the locale (including anyone who corrected or fixed the locale)
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    // Index of the first day of the week.
    // Sunday is 0, Monday is 1, Saturday is 6.
    weekStartsOn: 0,

    // Nth of January which is always in the first week of the year. See:
    // https://en.wikipedia.org/wiki/Week#Week_numbering
    // http://www.pjh2.de/datetime/weeknumber/wnd.php?l=en
    firstWeekContainsDate: 1
  }
}

export default locale
```

### localize

In `_lib/localize/index.js`:
```javascript
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

// In English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var weekdayValues = {
  // The shortest weekday representation. Usually it is two letter
  // besides the cases where two letter weekdays are ambiguous
  // or if the language uses non-alphabet writing system.
  narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],

  // The short representation (but longer than `narrow`).
  // Check if the language uses periods for weekday abbreviation.
  short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

  // The longest weekday representation.
  long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

// Same as weekdays, months generally should be in lowercase.
var monthValues = {
  short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

// Value used to designate which part of day it is, when used with 12-hour clock.
// See "time of day" section below.
var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['a.m.', 'p.m.']
}

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'month', 'quarter', 'week', 'isoWeek', 'dayOfYear',
  // 'dayOfMonth' or 'dayOfWeek'

  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

var localize = {
  ordinalNumber: ordinalNumber,

  // The second argument of `buildLocalizeFn` and `buildLocalizeArrayFn` is the default type.
  // It should be longest meaningful type of localizer.
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    // This function takes the hour and returns the array index
    return (hours / 12) >= 1 ? 1 : 0
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
}

export default localize
```

#### Time of day

`timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
Use the system which is used the most commonly in the locale.

If the country uses a.m./p.m.:

```javascript
var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['a.m.', 'p.m.']
}

var localize = {
  // ...
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    return (hours / 12) >= 1 ? 1 : 0
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
}
```

If the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:

```javascript
var timeOfDayValues = {
  long: ['in the night', 'in the morning', 'in the afternoon', 'in the evening']
}

var localize = {
  // ...
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    if (hours >= 17) {
      return 3
    } else if (hours >= 12) {
      return 2
    } else if (hours >= 4) {
      return 1
    } else {
      return 0
    }
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
}
```

For more harder cases, you can write your own `timeOfDay` implementation:

```javascript
var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['du matin', 'de l’après-midi', 'du soir']
}

function timeOfDay (dirtyHours, dirtyOptions) {
  var hours = Number(dirtyHours)
  var options = dirtyOptions || {}
  var type = options.type ? String(options.type) : 'long'

  if (type === 'uppercase') {
    return (hours / 12) >= 1 ? timeOfDayValues.uppercase[1] : timeOfDayValues.uppercase[0]
  } else if (type === 'lowercase') {
    return (hours / 12) >= 1 ? timeOfDayValues.lowercase[1] : timeOfDayValues.lowercase[0]
  }

  if (hours <= 12) {
    return timeOfDayValues.long[0]
  } else if (hours <= 16) {
    return timeOfDayValues.long[1]
  } else {
    return timeOfDayValues.long[2]
  }
}

var localize = {
  // ...
  timeOfDay: timeOfDay,
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
}
```

### formatLong

Locale date formats written in `format` token string format.
See the list of tokens: https://date-fns.org/docs/format
Use https://en.wikipedia.org/wiki/Date_format_by_country as the reference.

In `_lib/formatLong/index.js`:
```javascript
import buildFormatLong from '../../../_lib/buildFormatLong/index.js'

var formatLong = buildFormatLong({
  // Time (hours and minutes)
  // Use `'h:mm aa'` for 12-hour clock locales or `'HH:mm'` for 24-hour clock locales.
  // Use the local time separator.
  LT: 'h:mm aa',

  // Same but with seconds
  LTS: 'h:mm:ss aa',

  // Date short format (day, month and year)
  // Use the local date separator.
  // Pay attention to the order of units (big-, little- or middle-endian)
  L: 'MM/DD/YYYY',

  // Long time format, written like in the middle of text.
  LL: 'MMMM D YYYY',

  // Same but with time
  LLL: 'MMMM D YYYY h:mm aa',

  // Same but with time and day of the week
  LLLL: 'dddd, MMMM D YYYY h:mm aa'
})

export default formatLong
```

### formatRelative

Relative date formats written in `format` token string format.
See the list of tokens: https://date-fns.org/docs/format.
Has to process `lastWeek`, `yesterday`, `today`, `tomorrow`, `nextWeek` and `other` tokens.

In `_lib/formatRelative/index.js`:
```javascript
var formatRelativeLocale = {
  lastWeek: '[last] dddd [at] LT',
  yesterday: '[yesterday at] LT',
  today: '[today at] LT',
  tomorrow: '[tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
```

You can use `date` and `baseDate` supplied to the function for the difficult situations
(e.g. grammatical genders and cases of the days of the week)
Both `date` and `baseDate` are converted to UTC timezone, which means
that you should use UTC methods to take the date values (i.e. `date.getUTCDay()` instead of `date.getDay()`).
You can use UTC functions from `src/_lib` if they are available.
Don't forget to pass `options` object to them!
Example is below. Note the different grammatical case for weekdays (accusative instead of nominative)
and declension of word "прошлый" which depends on the grammatical gender of the weekday:

```javascript
import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index.js'

var accusativeWeekdays = ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу']

function lastWeek (day) {
  var weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
      return '[в прошлое ' + weekday + ' в] LT'
    case 1:
    case 2:
    case 4:
      return '[в прошлый ' + weekday + ' в] LT'
    case 3:
    case 5:
    case 6:
      return '[в прошлую ' + weekday + ' в] LT'
  }
}

function thisWeek (day) {
  // ...
}

function nextWeek (day) {
  // ...
}

var formatRelativeLocale = {
  lastWeek: function (date, baseDate, options) {
    var day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return lastWeek(day)
    }
  },
  yesterday: '[вчера в] LT',
  today: '[сегодня в] LT',
  tomorrow: '[завтра в] LT',
  nextWeek: function (date, baseDate, options) {
    var day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return nextWeek(day)
    }
  },
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
```

### match

The object used by `parse`. Contains the functions to match the value:
`ordinalNumbers`, `weekdays`, `months`, `timesOfDay`;
and the functions to parse the matched value (convert into a number):
`ordinalNumber`, `weekday`, `month`, `timeOfDay`.

In `_lib/match/index.js`:
```javascript
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
```

Both `buildMatchFn` and `buildParseFn` helper functions take two arguments:
the object with patterns (or the object with arrays of patterns for `buildParseFn`),
and the key for the default pattern.
For `buildMatchFn` the pattern should match the whole meaningful word for the unit
(which will be cut from the string in the process of parsing).
The part of the matched string in the parentheses will then be passed into the corresponding
parser function created by `buildParseFn` helper.
Note that the patterns for `buildParseFn` don't necessary contain the whole word:

```javascript
var parseWeekdayPatterns = {
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}

  // ...
  weekday: buildParseFn(parseWeekdayPatterns, 'any'),
```

but only the bare minimum to parse the value.
It don't have to be so. In difficult situations
(when words for `narrow`, `short` and `long` weekdays are completely different)
you can use more verbose patterns like so:

```javascript
var matchWeekdaysPatterns = {
  narrow: /^(su|mo|tu|we|th|fr|sa)/i,
  short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}

var parseWeekdayPatterns = {
  narrow: [/^su/i, /^mo/i, /^tu/i, /^we/i, /^th/i, /^fr/i, /^sa/i],
  short: [/^sun/i, /^mon/i, /^tue/i, /^wed/i, /^thu/i, /^fri/i, /^sat/i],
  long: [/^sunday/i, /^monday/i, /^tuesday/i, /^wednesday/i, /^thursday/i, /^friday/i, /^saturday/i]
}

  // ...
  weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
  weekday: buildParseFn(parseWeekdayPatterns, 'long'),
```

Also note that all patterns have "case-insensitive" flags
to match as much arbitrary user input as possible. For the same reason, try to match
any variation of diacritical marks:

```javascript
var matchWeekdaysPatterns = {
  narrow: /^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,
  short: /^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,
  long: /^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i
}

var parseWeekdayPatterns = {
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i]
}
```

Here, for the word "dimanĉo" the functions will match also "dimancxo", "dimancho"
and even grammatically incorrect "dimanco".

Try to match any possible way of writing the word. Don't forget the grammatical cases:

```javascript
var matchMonthsPatterns = {
  short: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек).?/i,
  long: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
}
```

and variations of short weekdays and months:

```javascript
var matchWeekdaysPatterns = {
  narrow: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су).?/i,
  short: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  long: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
}
```

(here, the `short` pattern will match both `вск` and `вос` as the short of `воскресенье` {Sunday})

#### Ordinal numbers

Match ordinal numbers as well as non-ordinal numbers:

```javascript
var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i
```

There are two helper functions for matching ordinal numbers:
`buildMatchPatternFn` creates a function from a single RegExp,
`parseDecimal` parses the string, matched in the first set of parentheses of the RegExp:

```javascript
var match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: parseDecimal
  // ...
}
```

If the number to parsed is not in the first set of parentheses of the RegExp,
write your own `match.ordinalNumber` implementation:

```javascript
var matchOrdinalNumbersPattern = /^(ika-?)?(\d+)/i

function ordinalNumber (matchResult) {
  return parseInt(matchResult[2], 10)
}

var match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: ordinalNumber
  // ...
}
```

Don't forget the grammatical genders:

```javascript
var matchOrdinalNumbersPattern = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i
```

### formatDistance

`formatDistance` property of locale is a function which takes three arguments:
token passed by date-fns' `formatDistance` function (e.g. 'lessThanXMinutes'),
a number of units to be displayed by the function
(e.g. `locale.formatDistance('lessThanXMinutes', 5)` would display localized 'less than 5 minutes')
and object with options.

Your best guess is to copy `formatDistance` property from another locale and change the values.

### Tests

Take `test.js` from existing locale (e.g. `en-US`) and replace the test results with expected values.
Don't forget to replace the locale code in the test description:

```javascript
// Before
describe('en-US locale', function () {
// After
describe('foo-BAR locale', function () {
```

### Corner cases

#### formatters

If there's some token combination that should have an output different from
the combination of token outputs, use optional properties of the locale `formatters` and `formattingTokensRegExp`.
You could need it, for example, if the number before the month should decline the month name
in different grammatical case.

In `index.js`:

```javascript
import formatters from './_lib/formatters/index.js'
import buildTokensRegExp from '../_lib/buildTokensRegExp/index.js'

/**
 * ...
 */
var locale = {
  formatters: formatters,
  formattingTokensRegExp: buildTokensRegExp(formatters),
  // ...
```

In `_lib/formatters/index.js`:

```javascript
var genetiveMonths = ['января', 'февраля', /* ... */]

var formatters = {
  'D MMMM': function (date, options) {
    var commonFormatters = options.formatters
    return commonFormatters.D(date, options) + ' ' + genetiveMonths[date.getUTCMonth()]
  },

  'Do MMMM': function (date, options) {
    var commonFormatters = options.formatters
    return commonFormatters.Do(date, options) + ' ' + genetiveMonths[date.getUTCMonth()]
  },

  'DD MMMM': function (date, options) {
    var commonFormatters = options.formatters
    return commonFormatters.DD(date, options) + ' ' + genetiveMonths[date.getUTCMonth()]
  },
}

export default formatters
```

Here, combination of `format` tokens 'D MMMM' will have an output '1 января' instead of '1 январь'
(i.e. put 'январь' in genitive case).
Note that `formatters` use UTC Date methods (i.e. `date.getUTCMonth()` instead of `date.getMonth()`).
Also note that `format`'s built-in formatters are available from `option.formatters`.

## Creating a locale with the same language as another locale

Import the locale properties already implemented for the language,
but replace unique properties.

```javascript
// Same as en-US
import formatDistance from '../en-US/_lib/formatDistance/index.js'
import formatRelative from '../en-US/_lib/formatRelative/index.js'
import localize from '../en-US/_lib/localize/index.js'
import match from './_lib/match/index.js'

// Unique for en-GB
import formatLong from './_lib/formatLong/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United Kingdom).
 * @language English
 * @iso-639-2 eng
 * @author John Doe [@example]{@link https://github.com/example}
 */
var locale = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,

  // Unique for en-GB
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}

export default locale
```

## Monkey-patching a locale

### Simple example

Adding and replacing `format` tokens is easy with [`formatters`](#formatters) property of the locale.
Deep clone the locale before monkey-patching to prevent mutability conflicts.

```javascript
import cloneDeep from 'lodash/cloneDeep'
import format from 'date-fns/format'
import originalLocale from 'date-fns/locale/en-US'

const oneLetterWeekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const locale = Object.assign(cloneDeep(originalLocale), {
  formatters: {
    dd: function (date) {
      return oneLetterWeekdays[date.getUTCDay()]
    }
  }
})

format(new Date(), 'dd, MMMM Do', {locale})
//=> 'W, May 24th'
```

### Complex example

Let's add an ability to format and parse dates like '2017 A.D.' and '44 B.C.'.
To do that, we will add 'ERA' and 'YYYYY' tokens to both `format` and `parse` locales.
For the later, we will also need to add two new units: 'era' and 'eraYear'.

In ECMAScript, year 0 is 1 B.C., year -1 is 2 B.C. etc.

```javascript
import cloneDeep from 'lodash/cloneDeep'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import originalLocale from 'date-fns/locale/en-US'
import buildTokensRegExp from 'date-fns/locale/_lib/buildTokensRegExp'

const formatters = {
  ERA: function (date) {
    // Don't forget to use UTC methods!
    const year = date.getUTCFullYear()
    return year > 0 ? 'A.D.' : 'B.C.'
  },

  YYYYY: function (date) {
    var year = date.getUTCFullYear()
    return year > 0 ? year : 1 - year
  }
}

const units = {
  era: {
    // Setter of era will be evaluated before eraYear's because its priority number is smaller
    priority: 5,
    set: function (dateValues, value) {
      dateValues.era = value
      return dateValues
    }
  },

  eraYear: {
    priority: 10,
    set: function (dateValues, value) {
      if (dateValues.era === -1) {
        value = -value + 1
      }
      // Setting the year also sets the date to the start of the year
      dateValues.date.setUTCFullYear(value, 0, 1)
      dateValues.date.setUTCHours(0, 0, 0, 0)
      return dateValues
    }
  }
}

const parsers = {
  ERA: {
    unit: 'era',
    // Matches 'A.D.', 'ad', 'a. d.', 'BC', ...
    match: /^(a\.?\s?d\.?|b\.?\s?c\.?)/i,
    // 1 or -1 will be passed to `units.era.set` as the second argument
    parse: matchResult => /^a/i.test(matchResult[1]) ? 1 : -1
  },

  YYYYY: {
    unit: 'eraYear',
    match: /^(\d+)/,
    parse: matchResult => parseInt(matchResult[1])
  }
}

const locale = Object.assign(cloneDeep(originalLocale), {
  formatters,
  formattingTokensRegExp: buildTokensRegExp(formatters),
  units,
  parsers,
  parsingTokensRegExp: buildTokensRegExp(parsers)
})

format(new Date(), 'YYYYY ERA', {locale})
//=> '2017 A.D.'

parse('March 15th 44 B.C.', 'MMMM Do YYYYY ERA', new Date(), {locale})
//=> Fri Mar 15  -43 00:00:00
// Note that year -43 in ECMAScript is 44 B.C.
```
