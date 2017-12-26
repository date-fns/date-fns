// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getISODay from '.'

describe('getISODay', function () {
  it('returns the day of the ISO week of the given date', function () {
    var result = getISODay(new Date(2012, 1 /* Feb */, 29))
    assert(result === 3)
  })

  it('returns 7 if the given day is Sunday', function () {
    var result = getISODay(new Date(2014, 5 /* Jun */, 1))
    assert(result === 7)
  })

  it('accepts a string', function () {
    var result = getISODay(new Date(2014, 6 /* Jul */, 2).toISOString())
    assert(result === 3)
  })

  it('accepts a timestamp', function () {
    var result = getISODay(new Date(2014, 5 /* Jun */, 1).getTime())
    assert(result === 7)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getISODay(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getISODay.bind(null, new Date(2012, 1 /* Feb */, 29), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getISODay.bind(null), TypeError)
  })
})
