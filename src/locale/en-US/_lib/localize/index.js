import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

var dayPeriodValues = {
  narrow: ['a', 'p', 'mi', 'n', 'in the morning', 'in the afternoon', 'in the evening', 'at night'],
  abbreviated: ['AM', 'PM', 'midnight', 'noon', 'in the morning', 'in the afternoon', 'in the evening', 'at night'],
  wide: ['a.m.', 'p.m.', 'midnight', 'noon', 'in the morning', 'in the afternoon', 'in the evening', 'at night']
}
var dayPeriodEnumIndices = ['am', 'pm', 'midnight', 'noon', 'morning', 'afternoon', 'evening', 'night']

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

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
  era: buildLocalizeFn(eraValues, 'wide'),
  quarter: buildLocalizeFn(quarterValues, 'wide', function (quarter) {
    return Number(quarter) - 1
  }),
  month: buildLocalizeFn(monthValues, 'wide'),
  day: buildLocalizeFn(dayValues, 'wide'),
  dayPeriod: buildLocalizeFn(dayPeriodValues, 'wide', function (dayPeriodEnumValue) {
    return dayPeriodEnumIndices.indexOf(dayPeriodEnumValue)
  })
}

export default localize
