import toDate from '../to_date/index.js'
import enLocale from '../locale/en/index.js'
import parsers from './_lib/parsers/index.js'
import units from './_lib/units/index.js'

/**
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format.
 *
 * Accepted format tokens:
 * | Unit                    | Priority | Token | Input examples                   |
 * |-------------------------|----------|-------|----------------------------------|
 * | Year                    | 10       | YY    | 00, 01, ..., 99                  |
 * |                         |          | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | 10       | GG    | 00, 01, ..., 99                  |
 * |                         |          | GGGG  | 1900, 1901, ..., 2099            |
 * | Quarter                 | 20       | Q     | 1, 2, 3, 4                       |
 * |                         |          | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Month                   | 30       | M     | 1, 2, ..., 12                    |
 * |                         |          | Mo    | 1st, 2nd, ..., 12th              |
 * |                         |          | MM    | 01, 02, ..., 12                  |
 * |                         |          | MMM   | Jan, Feb, ..., Dec               |
 * |                         |          | MMMM  | January, February, ..., December |
 * | ISO week                | 40       | W     | 1, 2, ..., 53                    |
 * |                         |          | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         |          | WW    | 01, 02, ..., 53                  |
 * | Day of week             | 50       | d     | 0, 1, ..., 6                     |
 * |                         |          | do    | 0th, 1st, ..., 6th               |
 * |                         |          | dd    | Su, Mo, ..., Sa                  |
 * |                         |          | ddd   | Sun, Mon, ..., Sat               |
 * |                         |          | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | 50       | E     | 1, 2, ..., 7                     |
 * | Day of month            | 50       | D     | 1, 2, ..., 31                    |
 * |                         |          | Do    | 1st, 2nd, ..., 31st              |
 * |                         |          | DD    | 01, 02, ..., 31                  |
 * | Day of year             | 50       | DDD   | 1, 2, ..., 366                   |
 * |                         |          | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         |          | DDDD  | 001, 002, ..., 366               |
 * | Hour                    | 60       | H     | 0, 1, ... 23                     |
 * |                         |          | HH    | 00, 01, ... 23                   |
 * |                         |          | h     | 1, 2, ..., 12                    |
 * |                         |          | hh    | 01, 02, ..., 12                  |
 * | AM/PM                   | 65       | A     | AM, PM                           |
 * |                         |          | a     | am, pm                           |
 * |                         |          | aa    | a.m., p.m.                       |
 * | Minute                  | 70       | m     | 0, 1, ..., 59                    |
 * |                         |          | mm    | 00, 01, ..., 59                  |
 * | Second                  | 80       | s     | 0, 1, ..., 59                    |
 * |                         |          | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | 90       | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | 90       | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | 90       | SSS   | 000, 001, ..., 999               |
 * | Timezone                | 100      | Z     | -01:00, +00:00, ... +12:00       |
 * |                         |          | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | 110      | X     | 512969520                        |
 * | Milliseconds timestamp  | 110      | x     | 512969520900                     |
 *
 * Values will be assigned to the date in the ascending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/DD/YYYY', new Date())`
 * In this case parsing will be done in the context of the current date.
 *
 * The characters wrapped in square brackets in the format string are escaped.
 *
 * The result may vary by locale.
 *
 * If no format is provided, the string will be parsed using ISO 8601 formats.
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|String|Number} baseDate - the date to took the missing higher priority values from
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {Date} the parsed date
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse(
 *   '02/11/2014',
 *   'MM/DD/YYYY',
 *   new Date()
 * )
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in English locale in the context of 2010 year:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = parse(
 *   '28-a de februaro',
 *   'Do [de] MMMM',
 *   new Date(2010, 0, 1)
 *   {locale: eoLocale}
 * )
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse (dateString, formatString, dirtyBaseDate, options) {
  if (formatString === '') {
    return ''
  }

  options = options || {}

  var locale = options.locale
  var localeParsers = enLocale.parse.parsers
  var localeUnits = enLocale.parse.units
  var parsingTokensRegExp = enLocale.parse.parsingTokensRegExp
  if (locale && locale.parse && locale.parse.parsers) {
    localeParsers = locale.parse.parsers

    if (locale.parse.units) {
      localeUnits = locale.parse.units
    }

    if (locale.parse.parsingTokensRegExp) {
      parsingTokensRegExp = locale.parse.parsingTokensRegExp
    }
  }

  var tokens = formatString.match(parsingTokensRegExp)
  var tokensLength = tokens.length

  var setters = {}

  var i
  for (i = 0; i < tokensLength; i++) {
    var token = tokens[i]
    var parser = localeParsers[token] || parsers[token]
    if (parser) {
      var matchResult = parser.match.exec(dateString)

      if (!matchResult) {
        return null
      }

      var unitName = parser.unit
      var unit = localeUnits[unitName] || units[unitName]
      setters[unit.priority] = {
        priorityNumber: unit.priority,
        set: unit.set,
        value: parser.parse(matchResult)
      }

      var substring = matchResult[0]
      dateString = dateString.slice(substring.length)
    } else {
      var head = tokens[i].match(/^\[.*]$/) ? tokens[i].replace(/^\[|]$/g, '') : tokens[i]
      if (dateString.indexOf(head) === 0) {
        dateString = dateString.slice(head.length)
      } else {
        return null
      }
    }
  }

  var priorities = Object.keys(setters).sort(function (a, b) {
    return a.priorityNumber - b.priorityNumber
  })

  var prioritiesLength = priorities.length
  var date = toDate(dirtyBaseDate, options)

  for (i = 0; i < prioritiesLength; i++) {
    var setter = setters[priorities[i]]
    date = setter.set(date, setter.value)
  }

  return date
}

export default parse
