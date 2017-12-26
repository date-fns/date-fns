// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfHour from '.'

describe('startOfHour', function () {
  it('returns the date with the time setted to the first millisecond of an hour', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    var result = startOfHour(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    startOfHour(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55))
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55).getTime()
    var result = startOfHour(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('accepts a string', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 12, 45).toISOString()
    var result = startOfHour(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 12, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfHour(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    // $ExpectedMistake
    var block = startOfHour.bind(null, date, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(startOfHour.bind(null), TypeError)
  })
})
