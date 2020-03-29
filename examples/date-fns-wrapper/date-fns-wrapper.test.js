const getDateFromFormat = require('./date-fns-wrapper')

const DATE_FORMAT_DEFAULT = 'EEEE, LLL dd, yyyy, hh:mm:ss.sss'
const DURATION_DEFAULT = {
  years: 0,
  months: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}
const LOCALE_DEFAULT = 'en-US'

test('Given an empty date format, should return an empty string ', () => {
  const result = getDateFromFormat('', DURATION_DEFAULT, LOCALE_DEFAULT)
  expect(result).toBe('')
})

test('Given an non string date format, should raise an error', () => {
  expect(() =>
    getDateFromFormat(null, DURATION_DEFAULT, LOCALE_DEFAULT)
  ).toThrow('dateFormat should be string')
})

test('Given an non dict duration, should raise an error', () => {
  expect(() =>
    getDateFromFormat(DATE_FORMAT_DEFAULT, [], LOCALE_DEFAULT)
  ).toThrow('duration should be dict')
})

test('Given an non string locale, should raise an error', () => {
  expect(() =>
    getDateFromFormat(DATE_FORMAT_DEFAULT, DURATION_DEFAULT, null)
  ).toThrow('locale should be string')
})

test('Given an duration, should raise an error', () => {
  expect(() =>
    getDateFromFormat(DATE_FORMAT_DEFAULT, [], LOCALE_DEFAULT)
  ).toThrow('duration should be dict')
})

test('Given an duration which contains an acceptable key, should raise an error', () => {
  const unacceptableDuration = { milliseconds: 0 }
  const expectedMsg =
    'There are some unacceptable keys such as ' +
    'milliseconds' +
    '. Only ' +
    'years,months,weeks,days,hours,minutes,seconds' +
    ' are acceptable'
  expect(() =>
    getDateFromFormat(DATE_FORMAT_DEFAULT, unacceptableDuration, LOCALE_DEFAULT)
  ).toThrow(expectedMsg)
})

test('Given an duration which contains a non number value, should raise an error', () => {
  const unacceptableDuration = { years: null }
  expect(() =>
    getDateFromFormat(DATE_FORMAT_DEFAULT, unacceptableDuration, LOCALE_DEFAULT)
  ).toThrow('duration values should only contain numbers.')
})

test('Given an unexpected locale, should raise an error', () => {
  const unacceptableLocale = ''
  expect(() =>
    getDateFromFormat(DATE_FORMAT_DEFAULT, DURATION_DEFAULT, unacceptableLocale)
  ).toThrow(
    'No such locale supported. Currently we only support `ja` or `en-US` for locale'
  )
})

test('Given a valid date format, should follow the format', () => {
  const result = getDateFromFormat('HH:mm', DURATION_DEFAULT, LOCALE_DEFAULT)
  expect(result).toMatch(/\d\d:\d\d/)
})

test('Given a valid duration, should apply the duration', () => {
  const format = require('date-fns/format')
  const enUs = require('date-fns/locale/en-US')
  const dateFormat = 'yyyy'
  const expected =
    parseInt(format(new Date(), dateFormat, { locale: enUs })) + 1

  const result = getDateFromFormat(dateFormat, { years: 1 }, LOCALE_DEFAULT)
  expect(parseInt(result)).toBe(expected)
})

describe.each`
  locale     | expected
  ${'ja'}    | ${'日'}
  ${'en-US'} | ${'day'}
`(
  'Given an locale($locale), should translate day($expected)',
  ({ locale, expected }) => {
    test('passes', () => {
      const result = getDateFromFormat(
        DATE_FORMAT_DEFAULT,
        DURATION_DEFAULT,
        locale
      )
      expect(result).toMatch(expected)
    })
  }
)
