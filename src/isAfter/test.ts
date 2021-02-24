// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isAfter from '.'

describe('isAfter', function() {
  it('returns true if the first date is after the second one', function() {
    const result = isAfter(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === true)
  })

  it('returns false if the first date is before the second one', function() {
    const result = isAfter(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the first date is equal to the second one', function() {
    const result = isAfter(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isAfter(
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    const result = isAfter(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    const result = isAfter(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    const result = isAfter(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isAfter.bind(null), TypeError)
    assert.throws(isAfter.bind(null, 1), TypeError)
  })
})
