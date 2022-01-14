import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /^\d+/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^([bB]|[aA]|คศ)/i,
  abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
  wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i,
}
const parseEraPatterns = {
  any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^ไตรมาส(ที่)? ?[1234]/i,
}
const parseQuarterPatterns = {
  any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i] as const,
}

const matchMonthPatterns = {
  narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
  abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
  wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i,
}
const parseMonthPatterns = {
  wide: [
    /^มก/i,
    /^กุม/i,
    /^มี/i,
    /^เม/i,
    /^พฤษ/i,
    /^มิ/i,
    /^กรก/i,
    /^ส/i,
    /^กัน/i,
    /^ต/i,
    /^พฤศ/i,
    /^ธ/i,
  ] as const,
  any: [
    /^ม\.?ค\.?/i,
    /^ก\.?พ\.?/i,
    /^มี\.?ค\.?/i,
    /^เม\.?ย\.?/i,
    /^พ\.?ค\.?/i,
    /^มิ\.?ย\.?/i,
    /^ก\.?ค\.?/i,
    /^ส\.?ค\.?/i,
    /^ก\.?ย\.?/i,
    /^ต\.?ค\.?/i,
    /^พ\.?ย\.?/i,
    /^ธ\.?ค\.?/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i,
}
const parseDayPatterns = {
  wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i] as const,
  any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i] as const,
}

const matchDayPeriodPatterns = {
  any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i,
}
const parseDayPeriodPatterns = {
  any: {
    am: /^ก่อนเที่ยง/i,
    pm: /^หลังเที่ยง/i,
    midnight: /^เที่ยงคืน/i,
    noon: /^เที่ยง/i,
    morning: /เช้า/i,
    afternoon: /บ่าย/i,
    evening: /เย็น/i,
    night: /กลางคืน/i,
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
