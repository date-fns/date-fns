import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

// Vietnammese locale reference: http://www.localeplanet.com/icu/vi-VN/index.html
// Capitalization reference: http://hcmup.edu.vn/index.php?option=com_content&view=article&id=4106%3Avit-hoa-trong-vn-bn-hanh-chinh&catid=2345%3Atham-kho&Itemid=4103&lang=vi&site=134
var weekdayValues = {
  narrow: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  short: ['CN', 'thứ 2', 'thứ 3', 'thứ 4', 'thứ 5', 'thứ 6', 'thứ 7'],
  long: ['Chủ Nhật', 'thứ Hai', 'thứ Ba', 'thứ Tư', 'thứ Năm', 'thứ Sáu', 'thứ Bảy']
}

var monthValues = {
  short: ['thg 1', 'thg 2', 'thg 3', 'thg 4', 'thg 5', 'thg 6', 'thg 7', 'thg 8', 'thg 9', 'thg 10', 'thg 11', 'thg 12'],
  long: ['tháng Một', 'tháng Hai', 'tháng Ba', 'tháng Tư', 'tháng Năm', 'tháng Sáu', 'tháng Bảy', 'tháng Tám', 'tháng Chín', 'tháng Mười', 'tháng Mười Một', 'tháng Mười Hai']
}

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var timeOfDayValues = {
//     any: ['in the night', 'in the morning', 'in the afternoon', 'in the evening']
//   }
//
// And later:
//
//   var localize = {
//     // The callback takes the hours as the argument and returns the array index
//     timeOfDay: buildLocalizeFn(timeOfDayValues, 'any', function (hours) {
//       if (hours >= 17) {
//         return 3
//       } else if (hours >= 12) {
//         return 2
//       } else if (hours >= 4) {
//         return 1
//       } else {
//         return 0
//       }
//     }),
//     timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'any')
//   }
var timeOfDayValues = {
  // Vietnamese are used to AM/PM borrowing from English, hence `uppercase` and
  // `lowercase` are just like English but I'm leaving the `long`
  // format being localized with abbreviations found in some systems (SÁng / CHiều);
  // however, personally, I don't think `Chiều` sounds appropriate for `PM`
  // TODO: for `long` version, the values should be 'sáng' 'trưa' 'chiều' 'tối'
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['SA', 'CH']
}

// If ordinal numbers depend on context, for example,
// if they are different for different grammatical genders,
// use `options.unit`:
//
//   var options = dirtyOptions || {}
//   var unit = String(options.unit)
//
// where `unit` can be 'month', 'quarter', 'week', 'isoWeek', 'dayOfYear',
// 'dayOfMonth' or 'dayOfWeek'
function ordinalNumber (dirtyNumber, dirtyOptions) {
  var options = dirtyOptions || {}
  var unit = String(options.unit)
  var number = parseInt(dirtyNumber, 10)

  if (unit === 'quarter') {
    switch (number) {
      case 1: return 'một'
      case 2: return 'hai'
      case 3: return 'ba'
      case 4: return 'bốn'
    }
  } else if (unit === 'dayOfWeek') {
    // day of week in Vietnamese has ordinal number meaning, so we should use them
    switch (number) {
      case 0: return 'CN'
      case 1: return '2'
      case 2: return '3'
      case 3: return '4'
      case 4: return '5'
      case 5: return '6'
      case 6: return '7'
    }
  } else if (unit === 'week' || unit === 'isoWeek') {
    if (number === 1) {
      return 'thứ nhất'
    } else {
      return 'thứ ' + number
    }
  } else if (unit === 'dayOfYear') {
    if (number === 1) {
      return 'đầu tiên'
    } else {
      return 'thứ ' + number
    }
  }

  // there are no different forms of ordinal numbers in Vietnamese
  return number
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    return (hours / 12) >= 1 ? 1 : 0
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
}

export default localize
