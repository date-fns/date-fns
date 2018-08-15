// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfDecade from '.'

describe('lastDayOfDecade', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the last day of a decade', function () {
    var date = new Date(1985, 9 /* Oct */, 20)
    var result = lastDayOfDecade(date)
    assert.deepEqual(result,
      new Date(1989, 11 /* Dec */, 31)
    )
  })

  it('accepts a string', function () {
    var date = new Date(1963, 7 /* Aug */, 28).toISOString()
    var result = lastDayOfDecade(date)
    assert.deepEqual(result,
      new Date(1969, 11 /* Dec */, 31)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(1975, 0 /* Jan */, 19).getTime()
    var result = lastDayOfDecade(date)
    assert.deepEqual(result,
      new Date(1979, 11 /* Dec */, 31)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2013, 3 /* Apr */, 23)
    lastDayOfDecade(date)
    assert.deepEqual(date, new Date(2013, 3 /* Apr */, 23))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = lastDayOfDecade(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var date = new Date(2015, 11 /* Dec */, 21, 0, 0, 0)
    // $ExpectedMistake
    var block = lastDayOfDecade.bind(null, date, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(lastDayOfDecade.bind(null), TypeError)
  })
})
