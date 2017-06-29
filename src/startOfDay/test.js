// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfDay from '.'

describe('startOfDay', function () {
  it('returns the date with the time setted to 00:00:00', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfDay(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
    )
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = startOfDay(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = startOfDay(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfDay(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = startOfDay(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    // $ExpectedMistake
    var block = startOfDay.bind(null, date, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(startOfDay.bind(null), TypeError)
  })
})
