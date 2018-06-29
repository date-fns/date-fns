import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

/*
 * Copy from en-US/_lib/match
 * I decided to not support this feature because of rarly usages.
 * Thus, this feature still need the contributions for parse thai date and time.
 */
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^([bB]|คศ)/i,
  abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
  wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i
}
var parseEraPatterns = {
  any: [/^[bB]/i, /^(ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช)/i]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^ไตรมาส(ที่)?/i
}
var parseQuarterPatterns = {
  any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i]
}

var matchMonthPatterns = {
  narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
  abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
  wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i
}
var parseMonthPatterns = {
  wide: [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i],
  any: [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i]
}

var matchDayPatterns = {
  narrow: /^(อา\.?|จ\.?|อ\.?|พ\.?|พฤ\.?|ศ\.?|ส\.?)/i,
  short: /^(อา\.?|จ\.?|อ\.?|พ\.?|พฤ\.?|ศ\.?|ส\.?)/i,
  abbreviated: /^(อา\.?|จ\.?|อ\.?|พ\.?|พฤ\.?|ศ\.?|ส\.?)/i,
  wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i
}
var parseDayPatterns = {
  wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i],
  any: [/^อา/i, /^จ/i, /^อ/i, /^พ[^ฤ]/i, /^พฤ/i, /^ศ/i, /^ส/i]
}

var matchDayPeriodPatterns = {
  narrow: /^(a|p|น|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i,
  any: /^([ap]\.?\s?m\.?|น\.?|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^(a|น|โมง)/i,
    pm: /^(p|น|ทุ่ม)/i,
    midnight: /^เที่ยงคืน/i,
    noon: /^เที่ยง/i,
    morning: /เช้า/i,
    afternoon: /บ่าย/i,
    evening: /เย็น/i,
    night: /กลางคืน/i
  }
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10)
    }
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
}

export default match
