// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfDecade from '.'

describe('endOfDecade', function() {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last millisecond of a decade', function() {
    const date = new Date(2017, 3 /* Apr */, 10, 0, 0, 0)
    const result = endOfDecade(date)
    assert.deepEqual(result, new Date(2019, 11 /* Dec */, 31, 23, 59, 59, 999))
  })

  it('accepts a timestamp', function() {
    const date = new Date(2007, 9 /* Oct */, 10, 0, 0, 0).getTime()
    const result = endOfDecade(date)
    assert.deepEqual(result, new Date(2009, 11 /* Dec */, 31, 23, 59, 59, 999))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2038, 0 /* Jan */, 19, 3, 14, 8)
    endOfDecade(date)
    assert.deepEqual(date, new Date(2038, 0 /* Jan */, 19, 3, 14, 8))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = endOfDecade(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfDecade.bind(null), TypeError)
  })
})
