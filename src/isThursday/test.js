// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isThursday from '.'

describe('isThursday', function () {
  it('returns true if the given date is Thursday', function () {
    var result = isThursday(new Date(2014, 8 /* Sep */, 25))
    assert(result === true)
  })

  it('returns false if the given date is not Thursday', function () {
    var result = isThursday(new Date(2014, 8 /* Sep */, 24))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isThursday(new Date(2014, 6 /* Jul */, 10).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isThursday(new Date(2014, 1 /* Feb */, 13).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function () {
    var result = isThursday(new Date(NaN))
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = isThursday.bind(null, new Date(2014, 8 /* Sep */, 25), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isThursday.bind(null), TypeError)
  })
})
