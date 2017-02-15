import buildTokensRegExp from '../../_lib/buildTokensRegExp/index.js'

export default function buildFormatLocale () {
  var months3char = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
  var monthsFull = ['มกราคาม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
  var weekdays2char = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
  var weekdays3char = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
  var weekdaysFull = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
  var meridiemUppercase = ['น.']
  var meridiemLowercase = ['น.']
  var meridiemFull = ['นาฬิกา']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getUTCMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getUTCMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getUTCDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getUTCDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getUTCDay()]
    },

    // AM, PM
    'A': function (date) {
      return meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return meridiemFull[0]
    }
  }

  return {
    formatters: formatters,
    formattingTokensRegExp: buildTokensRegExp(formatters)
  }
}
