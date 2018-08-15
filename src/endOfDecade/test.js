// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfDecade from '.'

describe('endOfDecade', function () {
  it('returns the date with the time setted to 23:59:59.999 and the date setted to the last millisecond of a decade', function () {
    var date = new Date(2017, 3 /* Apr */, 10, 0, 0, 0)
    var result = endOfDecade(date)
    assert.deepEqual(result,
      new Date(2019, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('accepts a string', function () {
    var date = new Date(2004, 3 /* Apr */, 9, 0, 0, 0).toISOString()
    var result = endOfDecade(date)
    assert.deepEqual(result,
      new Date(2009, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(2007, 9 /* Oct */, 10, 0, 0, 0).getTime()
    var result = endOfDecade(date)
    assert.deepEqual(result,
      new Date(2009, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2038, 0 /* Jan */, 19, 3, 14, 8)
    endOfDecade(date)
    assert.deepEqual(date, new Date(2038, 0 /* Jan */, 19, 3, 14, 8))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = endOfDecade(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var date = new Date(2018, 6 /* Jul */, 15, 0, 0, 0)
    // $ExpectedMistake
    var block = endOfDecade.bind(null, date, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(endOfDecade.bind(null), TypeError)
  })
})
