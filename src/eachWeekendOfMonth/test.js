// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachWeekendOfMonth from '.'

describe('eachWeekendOfMonth', function () {
  it('returns array length of 8', function () {
    var result = eachWeekendOfMonth(new Date(2022, 1, 20))
    assert(result.length === 8)
  })

  it('returns the first date in array: Sat Feb 05 2022', function () {
    var result = eachWeekendOfMonth(new Date(2022, 1, 13))
    assert(result.length === 8)
    assert(result[0].toDateString() === 'Sat Feb 05 2022')
  })

  it('returns the last date in array: Sun Feb 27 2022', function () {
    var result = eachWeekendOfMonth(new Date(2022, 1, 5))
    assert(result.length === 8)
    assert(result[result.length - 1].toDateString() === 'Sun Feb 27 2022')
  })

  it('throws TypeError exception when passed less than 1 argument', function () {
    assert.throws(eachWeekendOfMonth.bind(null), TypeError)
  })

  it('throws TypeError exception when the expected year is a NaN', function () {
    assert.throws(eachWeekendOfMonth.bind(1, NaN), RangeError)
  })

  it('throws RangeError exception when the additionalDigits option is a NaN', function () {
    assert.throws(
      eachWeekendOfMonth.bind(null, new Date(2020, 1, 5), { additionalDigits: NaN }),
      RangeError
    )
  })
})
