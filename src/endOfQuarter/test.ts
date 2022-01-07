// @flow
/* eslint-env mocha */

import assert from 'assert'
import endOfQuarter from '.'

describe('endOfQuarter', function () {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last day of a quarter', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = endOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('accepts a timestamp', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = endOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('does not mutate the original date', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfQuarter(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = endOfQuarter(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(endOfQuarter.bind(null), TypeError)
  })
})
