// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isMonday from '.'

describe('isMonday', function() {
  it('returns true if the given date is Monday', function() {
    const result = isMonday(new Date(2014, 8 /* Sep */, 22))
    assert(result === true)
  })

  it('returns false if the given date is not Monday', function() {
    const result = isMonday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isMonday(new Date(2014, 1 /* Feb */, 10).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    const result = isMonday(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isMonday.bind(null), TypeError)
  })
})
