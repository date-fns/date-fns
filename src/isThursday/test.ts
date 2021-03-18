// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isThursday from '.'

describe('isThursday', function() {
  it('returns true if the given date is Thursday', function() {
    const result = isThursday(new Date(2014, 8 /* Sep */, 25))
    assert(result === true)
  })

  it('returns false if the given date is not Thursday', function() {
    const result = isThursday(new Date(2014, 8 /* Sep */, 24))
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isThursday(new Date(2014, 1 /* Feb */, 13).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    const result = isThursday(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isThursday.bind(null), TypeError)
  })
})
