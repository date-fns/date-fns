// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setSeconds from '.'

describe('setSeconds', function() {
  it('sets the seconds', function() {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('accepts a timestamp', function() {
    var result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(),
      45
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45))
  })

  it('converts a fractional number to an integer', function() {
    var result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      45.54
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('implicitly converts number arguments', function() {
    var result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      // $ExpectedMistake
      '45'
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40)
    setSeconds(date, 15)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setSeconds(new Date(NaN), 45)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      NaN
    )
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setSeconds.bind(null), TypeError)
    assert.throws(setSeconds.bind(null, 1), TypeError)
  })
})
