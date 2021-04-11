// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isWednesday from '.'

describe('isWednesday', function () {
  it('returns true if the given date is Wednesday', function () {
    const result = isWednesday(new Date(2014, 8 /* Sep */, 24))
    assert(result === true)
  })

  it('returns false if the given date is not Wednesday', function () {
    const result = isWednesday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', function () {
    const result = isWednesday(new Date(2014, 1 /* Feb */, 12).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function () {
    const result = isWednesday(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isWednesday.bind(null), TypeError)
  })
})
