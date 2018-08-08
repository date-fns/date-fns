import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

// Vietnamese locale reference: http://www.localeplanet.com/icu/vi-VN/index.html
// Capitalization reference: http://hcmup.edu.vn/index.php?option=com_content&view=article&id=4106%3Avit-hoa-trong-vn-bn-hanh-chinh&catid=2345%3Atham-kho&Itemid=4103&lang=vi&site=134

var eraValues = {
  narrow: ['TCN', 'SCN'],
  abbreviated: ['trước CN', 'sau CN'],
  wide: ['trước Công Nguyên', 'sau Công Nguyên']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['quý 1', 'quý 2', 'quý 3', 'quý 4']
}
var formattingQuarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4']
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  short: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
  abbreviated: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
  wide: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai']
}
var formattingMonthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  short: ['thg 1', 'thg 2', 'thg 3', 'thg 4', 'thg 5', 'thg 6', 'thg 7', 'thg 8', 'thg 9', 'thg 10', 'thg 11', 'thg 12'],
  abbreviated: ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'],
  wide: ['tháng Một', 'tháng Hai', 'tháng Ba', 'tháng Tư', 'tháng Năm', 'tháng Sáu', 'tháng Bảy', 'tháng Tám', 'tháng Chín', 'tháng Mười', 'tháng Mười Một', 'tháng Mười Hai']
}

var dayValues = {
  narrow: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  short: ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'],
  abbreviated: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  wide: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
}

var dayPeriodValues = {
  // Vietnamese are used to AM/PM borrowing from English, hence `uppercase` and
  // `lowercase` are just like English but I'm leaving the `long`
  // format being localized with abbreviations found in some systems (SÁng / CHiều);
  // however, personally, I don't think `Chiều` sounds appropriate for `PM`
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'nửa đêm',
    noon: 'TR',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  },
  wide: {
    am: 'SA',
    pm: 'CH',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 's',
    pm: 'c',
    midnight: 'nửa đêm',
    noon: 'tr',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  },
  abbreviated: {
    am: 'SA',
    pm: 'CH',
    midnight: 'nửa đêm',
    noon: 'TR',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  },
  wide: {
    am: 'SA',
    pm: 'CH',
    midnight: 'nửa đêm',
    noon: 'TR',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  }
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

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaulFormattingWidth: 'wide'
  })
}

export default localize
