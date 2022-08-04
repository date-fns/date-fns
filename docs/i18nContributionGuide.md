# I18n Contribution Guide

## Table of Contents

- [Adding a new locale](#adding-a-new-locale)

  - [Choosing a directory name for a locale](#choosing-a-directory-name-for-a-locale)

  - [index.js](#index.js)

  - [localize](#localize)

    - [localize.ordinalNumber](#localize.ordinalnumber)

    - [localize.era and using buildLocalizeFn function](#localize.era-and-using-buildlocalizefn-function)

    - [Formatting localizers](#formatting-localizers)

    - [localize.quarter](#localize.quarter)

    - [localize.month](#localize.month)

    - [localize.day](#localize.day)

    - [localize.dayPeriod](#localize.dayperiod)

  - [formatLong](#formatlong)

    - [formatLong.dateFormats](#formatlong.dateformats)

    - [formatLong.timeFormats](#formatlong.timeformats)

    - [formatLong.dateTimeFormats](#formatlong.datetimeformats)

  - [formatRelative](#formatrelative)

  - [match](#match)

  - [formatDistance](#formatdistance)

  - [Tests](#tests)

- [Creating a locale with the same language as another locale](#creating-a-locale-with-the-same-language-as-another-locale)

## Adding a new locale

To add a new locale:

- [Choose a directory name for it](#choosing-a-directory-name-for-a-locale).

- Copy the content of an existing locale (e.g. `en-US`) into the newly created directory.

- Replace the values in the content with yours file-by-file.
  Use [CLDR data](https://www.unicode.org/cldr/charts/32/summary/root.html)
  as a point of reference which values to choose.

All locales contain a number of properties:

- [`formatDistance`](#formatdistance) — distance localizer function used by `formatDistance` and `formatDistanceStrict`.
- [`formatLong`](#formatlong) — contains long date localizer functions used by `format` and `formatRelative`.
- [`formatRelative`](#formatrelative) — relative date localizer function used by `formatRelative`.
- [`localize`](#localize) — contains functions, which localize the various date values. Required by `format` and `formatRelative`.
- [`match`](#match) — contains functions to parse date values. Required by `parse`.
- [`options`](#indexjs) — contains the index of the first day of the week for functions such as `startOfWeek`,
  and the value which determines the first week of the year
  for functions like `setWeek`.

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

```typescript
import formatDistance from './_lib/formatDistance/index.js'
import formatLong from './_lib/formatLong/index.js'
import formatRelative from './_lib/formatRelative/index.js'
import localize from './_lib/localize/index.js'
import match from './_lib/match/index.js'
import type { Locale } from '../types'

/**
 * @type {Locale}
 * @category Locales
 *
 * // Name of the locale.
 * // Inside the parentheses - name of the country - if the locale uses the four letter code, e.g. en-US, fr-CA or pt-BR.
 * @summary English locale (United States).
 *
 * // Name of the language (used by https://date-fns.org/ website)
 * @language English
 *
 * // ISO 639-2 code. See the list here:
 * // https://www.loc.gov/standards/iso639-2/php/code_list.php
 * // Used by https://date-fns.org/ to detect the list of the countries that uses the language.
 * @iso-639-2 eng
 *
 * // Authors of the locale (including anyone who corrected or fixed the locale)
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
const locale: Locale = {
  code: 'en',
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

Put this object in `_lib/localize/index.js` inside your locale directory.
Contains a number of functions for used by `format`:

```typescript
import type { Localize } from '../../../types'

const localize: Localize = {
  ordinalNumber,
  era,
  quarter,
  month,
  day,
  dayPeriod
}

export default localize
```

#### localize.ordinalNumber

Function that takes a numeric argument and returns a string with ordinal number:

```typescript
// In `en-US` locale:
import type { LocalizeFn } from '../../../types'

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  var number = Number(dirtyNumber)

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

const localize = {
  ordinalNumber: ordinalNumber,
  // ...
}
```

If the form of the ordinal number depends on the grammatical case (or other grammatical structures),
use `options.unit` argument which could be one of the values 'year', 'quarter', 'month', 'week',
'date', 'dayOfYear', 'day', 'hour', 'minute' or 'second':

```typescript
// In `ru` locale:
import type { LocalizeFn } from '../../../types'

const ordinalNumber: LocalizeFn<number, undefined> = (dirtyNumber, options) => {
  const number = Number(dirtyNumber)
  const unit = options?.unit

  let suffix
  if (unit === 'date') {
    suffix = '-е'
  } else if (unit === 'week' || unit === 'minute' || unit === 'second') {
    suffix = '-я'
  } else {
    suffix = '-й'
  }

  return number + suffix
}
```

#### localize.era and using buildLocalizeFn function

Localizes a numeric era. Takes either 0 or 1 as the first argument.
As with many of the `localize` functions, they can be generated by built-in
`buildLocalizeFn` function.

From the CLDR chart, use ['Date & Time'/'Gregorian'/'Eras'](https://www.unicode.org/cldr/charts/32/summary/en.html#1771) values.

```typescript
// In `en-US` locale:
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import type { Localize } from '../../../types'

const eraValues = {
  narrow: ['B', 'A'] as const,
  abbreviated: ['BC', 'AD'] as const,
  wide: ['Before Christ', 'Anno Domini'] as const,
}

const localize: Localize = {
  // ...
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  // ...
}

export default localize
```

General usage of the function:

```typescript
const result = locale.localize.era(1, {width: 'abbreviated'})
//=> 'AD'
```

If `width` is not provided or the `values` object does not contain values for the provided width,
`defaultWidth` will be used. `defaultWidth` should indicate the longest form of the localized value.
The same is true for all other `localize` functions.
`width` for `localize.era` function could be either 'narrow', 'abbreviated' or 'wide'.

```typescript
const result = locale.localize.era(1, {width: 'foobar'})
//=> 'Anno Domini'
```

#### Formatting localizers

For some languages, there is a difference between "stand-alone" localizers and "formatting" localizers.
"Stand-alone" means that the resulting value should make grammatical sense without context.
"Formatting" means that the resulting value should be declined using the grammar rules of the language
as if the value was a part of a date.
For example, for languages with grammatical cases, the stand-alone month could be in the nominative case ("January"),
and the formatting month could decline as a part of the phrase "1st of January".
In this case, use parameters `formattingValues` and `defaultFormattingWidth` of `buildLocalizeFn` function.

Any localizer could be stand-alone and formatting.
Check the CLDR chart for the unit to see if stand-alone and formatting values are different for a certain unit.
If there's no difference (usually it happens in languages without grammatical cases),
parameters `formattingValues` and `defaultFormattingWidth` are not needed.

In this example, in Russian language a stand-alone month is in the nominative case ("январь"),
and formatting month is in the genitive case ("января" as in "1-е января"). Notice the different endings:

```typescript
// In `ru` locale:
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import type { Localize } from '../../../types'

const monthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'] as const,
  abbreviated: ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'] as const,
  wide: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'] as const
}
const formattingMonthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'] as const,
  abbreviated: ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'] as const,
  wide: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'] as const
}

const localize: Localize = {
  // ...
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),
  // ...
}

export default localize
```

#### localize.quarter

Localizes a quarter. Takes 1, 2, 3 or 4 as the first argument.
`width` could be either 'narrow', 'abbreviated' or 'wide'.
From the CLDR chart, use ['Date & Time'/'Gregorian'/'Quarters'](https://www.unicode.org/cldr/charts/32/summary/en.html#1781) values.

```typescript
// In `en-US` locale:
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import type { Quarter } from '../../../../types'
import type { Localize } from '../../../types'

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'] as const,
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] as const
}

const localize: Localize = {
  // ...
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => (quarter - 1) as Quarter,
  }),
  // ...
}

export default localize
```

Note the usage of `argumentCallback` here. It converts the value passed into `localize.quarter` function
(one of 1, 2, 3 or 4) into the index of the values array inside `quarterValues` (one of 0, 1, 2 or 3).

#### localize.month

Localizes a month. Takes numbers between 0 (for January) and 11 (for December).
`width` could be either 'narrow', 'abbreviated' or 'wide'.
From the CLDR chart, use ['Date & Time'/'Gregorian'/'Months'](https://www.unicode.org/cldr/charts/32/summary/en.html#1793) values.

```typescript
// In `en-US` locale:
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import type { Localize } from '../../../types'

const monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'] as const,
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const,
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const
}

const localize: Localize = {
  // ...
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  // ...
}

export default localize
```

**NOTE**: in English, the names of days of the week and months are capitalized.
Check if the same is true for the language you're working on.
Generally, formatted dates should look like they are in the middle of a sentence,
e.g. in Spanish language the weekdays and months should be in the lowercase:

```typescript
// In `es` locale:
const monthValues = {
  narrow: ['e', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  wide: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
  ],
} as const

```

`monthValues.narrow` are usually capitalized in every language. Check the CLDR chart for your language.

#### localize.day

Localizes a week day. Takes numbers between 0 (for Sunday) and 6 (for Saturday).
`width` could be either 'narrow', 'short', 'abbreviated' or 'wide'.
From the CLDR chart, use ['Date & Time'/'Gregorian'/'Days'](https://www.unicode.org/cldr/charts/32/summary/en.html#1829) values.

```typescript
// In `en-US` locale:
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import type { Localize } from '../../../types'

const dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as const,
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']as const,
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const,
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const
}

const localize: Localize = {
  // ...
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  // ...
}

export default localize
```

**NOTE**: the rules of capitalization from `localize.month` are also true for `localize.day`.

#### localize.dayPeriod

Localizes a certain day period.
Could take one of these strings as the argument: 'am', 'pm', 'midnight', 'noon', 'morning', 'afternoon', 'evening', 'night'.
`width` could be either 'narrow', 'abbreviated' or 'wide'.
From the CLDR chart, use ['Date & Time'/'Gregorian'/'Day periods'](https://www.unicode.org/cldr/charts/32/summary/en.html#1857) values.

```typescript
// In `en-US` locale:
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import type { Localize } from '../../../types'

const dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
}

const localize: Localize = {
  // ...
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide'
  })
}

export default localize
```

### formatLong

Put this object in `_lib/formatLong/index.js` inside your locale directory.
Locale date formats written in `format` token string format.
See the list of tokens: https://date-fns.org/docs/format
Use https://en.wikipedia.org/wiki/Date_format_by_country and CLDR chart as the reference.

#### formatLong.dateFormats

Use ['Date & Time'/'Gregorian'/'Formats - Standard - Date Formats'](https://www.unicode.org/cldr/charts/32/summary/en.html#1901) values
from the CLDR chart as a reference.

```typescript
// In `en-US` locale
import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'
import type { FormatLong } from '../../../types'

const dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
}

const formatLong: FormatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  // ...
}

export default formatLong
```

`dateFormats.long` usually contains the longest form of writing the year, the month, and the day of the month.
Use ordinal day of the month ('do' token) where applicable (date-fns, unlike CLDR supports ordinal numbers).

`dateFormats.full` contains the same but with the day of the week.

`dateFormats.medium` contains the same values as `dateFormats.long`, but with short form of month and non-ordinal day.

`dateFormats.short` usually contains a strictly numerical form of the date.
Pay attention to the order of units (big-, little- or middle-endian)

#### formatLong.timeFormats

Use ['Date & Time'/'Gregorian'/'Formats - Standard - Time Formats'](https://www.unicode.org/cldr/charts/32/summary/en.html#1906) values
from the CLDR chart as a reference.

Use some variation of 'h:mm aa' for 12-hour clock locales or 'H:mm' for 24-hour clock locales. Use the local time separator.

```typescript
// In `en-US` locale
import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'
import type { FormatLong } from '../../../types'

const timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
}

const formatLong: FormatLong = {
  // ...
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  // ...
}

export default formatLong
```

#### formatLong.dateTimeFormats

Use
['Date & Time'/'Gregorian'/'Formats - Standard - Date & Time Combination Formats'](https://www.unicode.org/cldr/charts/32/summary/en.html#1910)
values from the CLDR chart.

```typescript
// In `en-US` locale
import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'
import type { FormatLong } from '../../../types'

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
}

const formatLong: FormatLong = {
  // ...
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
}

export default formatLong
```

'{{date}}' and '{{time}}' from the strings will be replaced with the date and time respectively.

### formatRelative

Put this function in `_lib/formatRelative/index.js` inside your locale directory.
Relative date formats written in `format` token string format.
See the list of tokens: https://date-fns.org/docs/format.
Has to process `lastWeek`, `yesterday`, `today`, `tomorrow`, `nextWeek` and `other` tokens.

```javascript
// In `en-US` locale
import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
```

You can use `date` and `baseDate` supplied to the function for the difficult situations
(e.g. grammatical genders and cases of the days of the week).
Example is below. Note the different grammatical case for weekdays (accusative instead of nominative)
and declension of word "прошлый" which depends on the grammatical gender of the weekday:

```javascript
// In `ru` locale
import isSameWeek from '../../../../isSameWeek/index'
import type { Day } from '../../../../types'
import type { FormatRelativeFn, FormatRelativeFnOptions } from '../../../types'

const accusativeWeekdays = ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу']

function lastWeek(day: Day): string {
  const weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
      return "'в прошлое " + weekday + " в' p"
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + weekday + " в' p"
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + weekday + " в' p"
  }
}

function thisWeek(day: Day) {
  const weekday = accusativeWeekdays[day]

  if (day === 2 /* Tue */) {
    return "'во " + weekday + " в' p"
  } else {
    return "'в " + weekday + " в' p"
  }
}

function nextWeek(day: Day) {
  const weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
      return "'в следующее " + weekday + " в' p"
    case 1:
    case 2:
    case 4:
      return "'в следующий " + weekday + " в' p"
    case 3:
    case 5:
    case 6:
      return "'в следующую " + weekday + " в' p"
  }
}

const formatRelativeLocale = {
  lastWeek: <DateType extends Date>(
    date: DateType,
    baseDate: DateType,
    options?: FormatRelativeFnOptions
  ): string => {
    const day = date.getDay() as Day
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return lastWeek(day)
    }
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: <DateType extends Date>(
    date: DateType,
    baseDate: DateType,
    options?: FormatRelativeFnOptions
  ): string => {
    const day = date.getDay() as Day
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return nextWeek(day)
    }
  },
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, date, baseDate, options) => {
  const format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}

export default formatRelative
```

### match

Put this object in `_lib/match/index.js` inside your locale directory.
Contains the functions used by `parse` to parse a localized value:

```typescript
// In `en-US` locale:
import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
}
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
}
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
}
const parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i] as const,
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] as const,
}

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
}
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i] as const,
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] as const,
}

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
}
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
}

const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any',
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: (index) => (index + 1) as Quarter,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any',
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any',
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any',
  }),
}

export default match
```

These functions mirror those in `localize`.

For `matchPatterns` the patterns should match the whole meaningful word for the parsed value
(which will be cut from the string in the process of parsing).
`parsePatterns` contains patterns to detect one of the values from the result of `matchPatterns`
Note that the patterns for `parsePatterns` don't necessary contain the whole word:

```javascript
// In `en-US` locale:
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i] as const,
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] as const,
}
```

but only the bare minimum to parse the value.

Also note that all patterns have "case-insensitive" flags
to match as much arbitrary user input as possible. For the same reason, try to match
any variation of diacritical marks:

```javascript
// In `eo` locale:
const matchDayPatterns = {
  narrow: /^[dlmĵjvs]/i,
  short: /^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,
  wide: /^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i,
}
const parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^(j|ĵ)/i, /^v/i, /^s/i] as const,
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i] as const,
}
```

Here, for the word "dimanĉo" the functions will match also "dimancxo", "dimancho"
and even grammatically incorrect "dimanco".

Try to match any possible way of writing the word. Don't forget the grammatical cases:

```javascript
// In `ru` locale:
const matchMonthPatterns = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i,
}
```

and variations of short weekdays and months:

```javascript
// In `ru` locale:
const matchDayPatterns = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i,
}
```

(here, the `abbreviated` pattern will match both `вск` and `вос` as the short of `воскресенье` {Sunday})

In `match.ordinalNumber` match ordinal numbers as well as non-ordinal numbers:

```javascript
// In `en-US` locale:
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i
```

Don't forget the grammatical genders:

```javascript
// In `ru` locale:
const matchOrdinalNumberPattern = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i
```

### formatDistance

`formatDistance` property of locale is a function which takes three arguments:
token passed by date-fns' `formatDistance` function (e.g. 'lessThanXMinutes'),
a number of units to be displayed by the function
(e.g. `locale.formatDistance('lessThanXMinutes', 5)` would display localized 'less than 5 minutes')
and object with options.

Your best guess is to copy `formatDistance` property from another locale and change the values.

### Tests

To test locales we use snapshots. See [`en-US` snapshot](https://github.com/date-fns/date-fns/blob/master/src/locale/en-US/snapshot.md) for an example.

To generate snapshots, run `yarn locale-snapshots`. The snapshot for the locale
you're working on will appear in the root locale directory (e.g. `src/locales/ru/snapshot.md`).

Once you are done with the locale, generate the snapshot and review the output values.

## Creating a locale with the same language as another locale

Import the locale properties already implemented for the language,
but replace unique properties.

```javascript
// Same as en-US
import formatDistance from '../en-US/_lib/formatDistance/index'
import formatRelative from '../en-US/_lib/formatRelative/index'
import localize from '../en-US/_lib/localize/index'
import match from '../en-US/_lib/match/index'
import type { Locale } from '../types'

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
const locale: Locale = {
  code: 'en-GB',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  
  // Unique for en-GB
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
}

export default locale
```
