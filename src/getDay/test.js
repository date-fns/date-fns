// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDay from '.'

describe('getDay', function () {
  it('returns the day of the week of the given date', function () {
    var result = getDay(new Date(2012, 1 /* Feb */, 29))
    assert(result === 3)
  })

  it('accepts a string', function () {
    var result = getDay(new Date(2014, 6 /* Jul */, 2).toISOString())
    assert(result === 3)
  })

  it('accepts a timestamp', function () {
    var result = getDay(new Date(2014, 5 /* Jun */, 1).getTime())
    assert(result === 0)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getDay(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getDay.bind(null, new Date(2012, 1 /* Feb */, 29), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getDay.bind(null), TypeError)
  })
})
